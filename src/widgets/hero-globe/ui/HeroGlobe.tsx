
import styles from "./HeroGlobe.module.scss";

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
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>

      <div className={styles.centerContent}>
        <div className={styles.globeIcon}>
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="43"
              stroke="currentColor"
              strokeWidth="1"
              opacity=".45"
            />
            <ellipse
              cx="60"
              cy="60"
              rx="19"
              ry="43"
              stroke="currentColor"
              strokeWidth="1"
              opacity=".55"
            />
            <ellipse
              cx="60"
              cy="60"
              rx="43"
              ry="17"
              stroke="currentColor"
              strokeWidth="1"
              opacity=".4"
            />
            <path
              d="M19 60H101M60 17V103"
              stroke="currentColor"
              strokeWidth="1"
              opacity=".3"
            />
            <circle cx="60" cy="60" r="3" fill="currentColor" />
          </svg>
        </div>

        <span className={styles.status}>
          <span className={styles.statusDot} />
          В разработке
        </span>

        <h2 className={styles.title}>
          Анимация
          <br />
          <span>в разработке</span>
        </h2>

        <p className={styles.description}>
          Скоро здесь появится наша интерактивная
          визуализация международных переводов
        </p>

        <div className={styles.progress}>
          <span />
        </div>
      </div>
    </div>
  );
};
