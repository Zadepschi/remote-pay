
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { feature } from 'topojson-client';
import { geoContains } from 'd3-geo';

import countries from 'world-atlas/countries-110m.json';

import styles from './HeroGlobe.module.scss';

const RADIUS = 1.5;
const LATITUDE_STEP = 2.2;
const LONGITUDE_STEP = 2.2;

function createLandGeometry() {
  const topology = countries as any;
  const land = feature(topology, topology.objects.countries);

  const positions: number[] = [];

  for (
    let latitude = -58;
    latitude <= 85;
    latitude += LATITUDE_STEP
  ) {
    for (
      let longitude = -180;
      longitude < 180;
      longitude += LONGITUDE_STEP
    ) {
      if (!geoContains(land, [longitude, latitude])) continue;

      const phi = (90 - latitude) * Math.PI / 180;
      const theta = (longitude + 180) * Math.PI / 180;
      const radius = RADIUS + 0.012;

      positions.push(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta),
      );
    }
  }

  const geometry = new THREE.BufferGeometry();

  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3),
  );

  return geometry;
}

export function HeroGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animationId = 0;
    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let disposed = false;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.z = 5.3;

    const globe = new THREE.Group();
    globe.rotation.y = -0.25;
    globe.rotation.x = 0.08;
    scene.add(globe);

    let landGeometry: THREE.BufferGeometry | null = null;
    let landMaterial: THREE.PointsMaterial | null = null;
    let oceanGeometry: THREE.SphereGeometry | null = null;
    let oceanMaterial: THREE.MeshBasicMaterial | null = null;
    let atmosphereGeometry: THREE.SphereGeometry | null = null;
    let atmosphereMaterial: THREE.ShaderMaterial | null = null;

    let isVisible = false;
    let lastFrameTime = 0;

    const initialize = () => {
      if (renderer || disposed) return;

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      });

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);

      container.appendChild(renderer.domElement);

      // Тёмная поверхность океана.
      oceanGeometry = new THREE.SphereGeometry(RADIUS, 48, 48);

      oceanMaterial = new THREE.MeshBasicMaterial({
  color: '#14283A',
});

      globe.add(
        new THREE.Mesh(oceanGeometry, oceanMaterial),
      );

      // Все точки суши — одна геометрия.
      landGeometry = createLandGeometry();

      landMaterial = new THREE.PointsMaterial({
        color: '#E5BD70',
        size: 3.1,
        sizeAttenuation: false,
        transparent: true,
        opacity: 0.96,
        depthWrite: false,
      });

      globe.add(
        new THREE.Points(landGeometry, landMaterial),
      );

      // Лёгкая атмосфера.
      atmosphereGeometry = new THREE.SphereGeometry(
        RADIUS * 1.025,
        48,
        48,
      );

      atmosphereMaterial = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;

          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vNormal = normalize(normalMatrix * normal);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vViewPosition;

          void main() {
            vec3 viewDirection = normalize(vViewPosition);
            float rim = 1.0 - max(dot(normalize(vNormal), viewDirection), 0.0);
            float intensity = pow(rim, 3.0);

           gl_FragColor = vec4(0.72, 0.55, 0.32, intensity * 0.32);
          }
        `,
      });

      globe.add(
        new THREE.Mesh(atmosphereGeometry, atmosphereMaterial),
      );

      resizeObserver = new ResizeObserver(() => {
        if (!renderer) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        if (!width || !height) return;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      });

      resizeObserver.observe(container);

      render();
    };

    const render = (time = 0) => {
      if (!renderer || disposed || !isVisible) return;

      animationId = requestAnimationFrame(render);

      // Ограничиваем анимацию примерно 30 FPS.
      if (time - lastFrameTime < 33) return;

      lastFrameTime = time;

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        globe.rotation.y += 0.0015;
      }

      renderer.render(scene, camera);
    };

    intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible) {
          initialize();

          if (renderer) {
            cancelAnimationFrame(animationId);
            animationId = requestAnimationFrame(render);
          }
        } else {
          cancelAnimationFrame(animationId);
        }
      },
      { rootMargin: '150px' },
    );

    intersectionObserver.observe(container);

    return () => {
      disposed = true;

      cancelAnimationFrame(animationId);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();

      landGeometry?.dispose();
      landMaterial?.dispose();

      oceanGeometry?.dispose();
      oceanMaterial?.dispose();

      atmosphereGeometry?.dispose();
      atmosphereMaterial?.dispose();

      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} className={styles.globe} />;
}
