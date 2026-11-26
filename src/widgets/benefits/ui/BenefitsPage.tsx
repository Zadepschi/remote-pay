
import { useTranslation } from 'react-i18next';
import styles from './BenefitsPage.module.scss';

export function BenefitsPage() {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: '◷',
      title: t('benefits.cards.routine.title'),
      description: t('benefits.cards.routine.description'),
      note: t('benefits.cards.routine.note'),
      variant: 'featured',
    },
    {
      icon: '◎',
      title: t('benefits.cards.contact.title'),
      description: t('benefits.cards.contact.description'),
      note: t('benefits.cards.contact.note'),
      variant: 'regular',
    },
    {
      icon: '▤',
      title: t('benefits.cards.documents.title'),
      description: t('benefits.cards.documents.description'),
      note: t('benefits.cards.documents.note'),
      variant: 'regular',
    },
    {
      icon: '◇',
      title: t('benefits.cards.terms.title'),
      description: t('benefits.cards.terms.description'),
      note: t('benefits.cards.terms.note'),
      variant: 'regular',
    },
    {
      icon: '◎',
      title: t('benefits.cards.geography.title'),
      description: t('benefits.cards.geography.description'),
      note: t('benefits.cards.geography.note'),
      variant: 'regular',
    },
    {
      icon: '✧',
      title: t('benefits.cards.recruitment.title'),
      description: t('benefits.cards.recruitment.description'),
      note: t('benefits.cards.recruitment.note'),
      variant: 'wide',
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.content}>
        <header className={styles.heading}>
          <span className={styles.label}>
            <span className={styles.labelDot} aria-hidden="true" />
            Global Employer of Record
          </span>

          <h1>
            {t('benefits.heading')} <span>{t('benefits.headingAccent')}</span>
          </h1>

          <div className={styles.line} />

          <p className={styles.intro}>
            {t('benefits.intro')}
            <br className={styles.desktopBreak} />
            {t('benefits.introSecond')}
          </p>

          <p className={styles.subtitle}>
            {t('benefits.subtitle')}
          </p>
        </header>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <article
              className={`${styles.benefitCard} ${styles[benefit.variant]}`}
              key={benefit.title}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{benefit.icon}</span>
                <span className={styles.cardLine} />
              </div>

              <h2>{benefit.title}</h2>

              <p className={styles.description}>
                {benefit.description}
              </p>

              <p className={styles.note}>{benefit.note}</p>

              <span className={styles.cardCorner} />
              <span className={styles.cardGlow} />
            </article>
          ))}
        </div>

        <div className={styles.bottomText}>
          <span>Global Employer of Record</span>
          <p>{t('benefits.bottomText')}</p>
        </div>
      </div>
    </section>
  );
}
