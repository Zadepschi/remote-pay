
import styles from './Hero.module.scss';
import { HeroGlobe } from '../../hero-globe/ui/HeroGlobe';

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
            Международные выплаты удалённым специалистам —
            <span> проще, быстрее, понятнее.</span>
          </h1>

          <p className={styles.description}>
            Помогаем компаниям, работающим в США, организовать
            выплаты международным подрядчикам и сопровождаем
            необходимые административные процессы.
          </p>

          <div className={styles.message}>
            Вы занимаетесь бизнесом.
            <span>
              Мы помогаем организовать международные расчёты.
            </span>
          </div>

          <div className={styles.actions}>
            <a  href="/contact#contact-form"  className={styles.primaryButton}>
              Запросить консультацию
            </a>

          <a
  href="/services"
  className={styles.secondaryButton}
>
  Наши услуги
  <span aria-hidden="true">→</span>
</a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.visualGlow} />

          <HeroGlobe />

          <div className={`${styles.infoCard} ${styles.topCard}`}>
            <div>
              <span>Международное сотрудничество</span>
              <strong>Без лишней сложности</strong>
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.bottomCard}`}>
            <div>
              <span>Административные процессы</span>
              <strong>Сопровождение выплат</strong>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomDecoration} />
    </section>
  );
}
