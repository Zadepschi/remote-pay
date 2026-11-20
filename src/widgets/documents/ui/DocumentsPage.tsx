import styles from './DocumentsPage.module.scss';

export function DocumentsPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.label}>REMOTE PAY</span>
        <h1>Документы и сопровождение</h1>
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