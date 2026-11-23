
import styles from './HeroGlobe.module.scss';

export const HeroGlobe = () => {
  return (
    <div className={styles.globeWrapper}>
      <div className={styles.ambientGlow} />

      <div className={`${styles.orbit} ${styles.orbit1}`} />
      <div className={`${styles.orbit} ${styles.orbit2}`} />
      <div className={`${styles.orbit} ${styles.orbit3}`} />

      <div className={styles.particles}>
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{ '--i': i } as React.CSSProperties}
          />
        ))}
      </div>

      <div className={styles.centerContent}>
        <img
          className={styles.globeImage}
          src="/globeor_animated_gold.svg"
          alt="Анимированная золотая планета"
        />
      </div>
    </div>
  );
};
