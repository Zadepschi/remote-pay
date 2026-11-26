
import { useTranslation } from 'react-i18next';
import styles from './DocumentsPage.module.scss';

export function DocumentsPage() {
  const { t } = useTranslation();

  const documentItems = [
    {
      icon: '▤',
      title: t('documents.cards.cooperation.title'),
      description: t('documents.cards.cooperation.description'),
      tag: 'DOCUMENTATION',
    },
    {
      icon: '↗',
      title: t('documents.cards.payments.title'),
      description: t('documents.cards.payments.description'),
      tag: 'PAYMENT RECORDS',
    },
    {
      icon: '◇',
      title: t('documents.cards.financial.title'),
      description: t('documents.cards.financial.description'),
      tag: 'FINANCIAL DETAILS',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.heroLabel}>
              <span className={styles.labelDot} aria-hidden="true" />
              <span className={styles.label}>Global Employer of Record</span>
            </div>

            <h1>
              {t('documents.heading')}
              <br />
              <span>{t('documents.headingAccent')}</span>
            </h1>

            <div className={styles.line} />

            <p className={styles.subtitle}>
              {t('documents.subtitle')}
            </p>

            <div className={styles.heroNote}>
              <span className={styles.noteIcon}>✧</span>
              <span>{t('documents.heroNote')}</span>
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
                <span>Global Employer of Record</span>
              </div>
              <div className={styles.documentSymbol}>◇</div>
              <span className={styles.documentLine} />
              <span className={styles.documentLine} />
              <span className={styles.documentLineShort} />
              <div className={styles.documentSeal}>✧</div>
            </div>

            <div className={styles.documentFront}>
              <div className={styles.documentTop}>
                <span>Global Employer of Record</span>
              </div>

              <div className={styles.documentHeading}>
                {t('documents.visual.paymentDetails')}
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
              <span>{t('documents.visual.support')}</span>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>
              {t('documents.sectionEyebrow')}
            </span>
            <h2>{t('documents.sectionTitle')}</h2>
          </div>

          <p>{t('documents.sectionDescription')}</p>
        </div>

        <div className={styles.cards}>
          {documentItems.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{item.icon}</span>
              </div>

              <span className={styles.cardTag}>{item.tag}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className={styles.cardBottom}>
                <span />
                <span className={styles.cardAccent}>
                  Global Employer of Record
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomBanner}>
          <div className={styles.bannerIcon}>✧</div>

          <div>
            <h2>{t('documents.bannerTitle')}</h2>
            <p>{t('documents.bannerDescription')}</p>
          </div>

          <span className={styles.bannerBrand}>
            Global Employer of Record
          </span>
        </div>
      </div>
    </section>
  );
}
