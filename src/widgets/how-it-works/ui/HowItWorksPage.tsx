import styles from './HowItWorksPage.module.scss';

export function HowItWorksPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.label}>REMOTE PAY</span>
        <h1>Как это работает</h1>
        <div className={styles.line} />
        <p>
          Страница находится в разработке.
          Мы работаем над этим разделом сайта,
          чтобы совсем скоро представить вам
          полезную и актуальную информацию.
        </p>
        <span className={styles.note}>
          Спасибо за ваше понимание!
        </span>
      </div>
    </section>
  );
}