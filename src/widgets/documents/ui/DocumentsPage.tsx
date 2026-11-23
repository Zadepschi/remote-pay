
import styles from './DocumentsPage.module.scss';

const documentItems = [
  {
    icon: '▤',
    title: 'Документы для сотрудничества',
    description:
      'Помогаем организовать оформление документов, необходимых для взаимодействия с зарубежными специалистами.',
    tag: 'DOCUMENTATION',
  },
  {
    icon: '↗',
    title: 'Информация о выплатах',
    description:
      'Помогаем систематизировать сведения о получателях, суммах и статусах международных выплат.',
    tag: 'PAYMENT RECORDS',
  },
  {
    icon: '◇',
    title: 'Комиссии и расчёты',
    description:
      'Структурируем информацию о комиссиях, условиях и параметрах предстоящих расчётов.',
    tag: 'FINANCIAL DETAILS',
  },
];

export function DocumentsPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.label}>Employer of Record / DOCUMENTATION</span>

            <h1>
              Документы
              <br />
              <span>и сопровождение</span>
            </h1>

            <div className={styles.line} />

            <p className={styles.subtitle}>
              Помогаем с организацией документов и международных выплат.
              Сопровождаем административные процессы, чтобы сотрудничество
              с зарубежными специалистами было более понятным и упорядоченным.
            </p>

            <div className={styles.heroNote}>
              <span className={styles.noteIcon}>✧</span>
              <span>Порядок в документах. Ясность в расчётах.</span>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualGlow} />

           <div className={`${styles.orbit} ${styles.orbitOne}`} />
<div className={`${styles.orbit} ${styles.orbitTwo}`} />

            <div className={`${styles.document} ${styles.documentBack}`}>
              <span className={styles.documentLine} />
              <span className={styles.documentLine} />
              <span className={styles.documentLineShort} />
            </div>

            <div className={`${styles.document} ${styles.documentMiddle}`}>
              <div className={styles.documentTop}>
                <span>Employer of Record</span>
                <span>02</span>
              </div>
              <div className={styles.documentSymbol}>◇</div>
              <span className={styles.documentLine} />
              <span className={styles.documentLine} />
              <span className={styles.documentLineShort} />
              <div className={styles.documentSeal}>✧</div>
            </div>

            <div className={styles.documentFront}>
              <div className={styles.documentTop}>
                <span>Employer of Record</span>
                <span>01</span>
              </div>

              <div className={styles.documentHeading}>
                PAYMENT
                <br />
                DETAILS
              </div>

              <div className={styles.documentGoldLine} />

              <div className={styles.documentRows}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.documentFooter}>
                <span>GLOBAL SERVICES</span>
                <span>✧</span>
              </div>
            </div>

            <div className={styles.floatingLabel}>
              <span className={styles.statusDot} />
              <span>DOCUMENT SUPPORT</span>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>OUR SUPPORT</span>
            <h2>Всё важное — под контролем</h2>
          </div>

          <p>
            Помогаем систематизировать информацию, необходимую
            для организации международного сотрудничества.
          </p>
        </div>

        <div className={styles.cards}>
          {documentItems.map((item) => (
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{item.icon}</span>
              </div>

              <span className={styles.cardTag}>{item.tag}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className={styles.cardBottom}>
                <span />
                <span className={styles.cardAccent}>Employer of Record</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomBanner}>
          <div className={styles.bannerIcon}>✧</div>

          <div>
            <h2>Сотрудничество начинается с ясности</h2>
            <p>
              Необходимая информация, документы и параметры выплат —
              в одном организованном процессе.
            </p>
          </div>

          <span className={styles.bannerBrand}>Employer of Record</span>
        </div>
      </div>
    </section>
  );
}
