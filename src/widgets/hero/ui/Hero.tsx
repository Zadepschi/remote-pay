
import styles from './Hero.module.scss';
import { HeroGlobe } from '../../hero-globe/ui/HeroGlobe';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Международное сотрудничество
          </div>

          <h1 className={styles.title}>
            Подбор специалистов и международные выплаты
            <span> для вашего бизнеса.</span>
          </h1>

          <p className={styles.description}>
            Помогаем компаниям находить квалифицированных
            специалистов, организовывать сотрудничество
            с международными командами и проводить выплаты
            зарубежным подрядчикам.
          </p>

        <div className={styles.services}>
  <div className={styles.serviceItem}>
    <span
      className={styles.serviceLine}
      aria-hidden="true"
    />
    <div>
      <strong>Подбор персонала</strong>
      <p>
        Готовая база кандидатов и индивидуальный
        поиск специалистов по запросу работодателя.
      </p>
    </div>
  </div>

  <div className={styles.serviceItem}>
    <span
      className={styles.serviceLine}
      aria-hidden="true"
    />
    <div>
      <strong>Международные выплаты</strong>
      <p>
        Организация расчётов с международными
        подрядчиками и административное сопровождение.
      </p>
    </div>
  </div>
</div>

          <div className={styles.actions}>
            <Link
              to="/contact#contact-form"
              className={styles.primaryButton}
            >
              Запросить консультацию
            </Link>

            <Link
              to="/services"
              className={styles.secondaryButton}
            >
              Наши услуги
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualGlow} />

          <HeroGlobe />

          <div className={`${styles.infoCard} ${styles.topCard}`}>
            <div>
              <span>Кадровые решения</span>
              <strong>Поиск и подбор специалистов</strong>
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.bottomCard}`}>
            <div>
              <span>Международные расчёты</span>
              <strong>Сопровождение выплат</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomDecoration} />
    </section>
  );
}
