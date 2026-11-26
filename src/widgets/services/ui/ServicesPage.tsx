
import { useTranslation } from 'react-i18next';
import styles from './ServicesPage.module.scss';

export function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: '⌕',
      title: t('services.cards.recruitment.title'),
      description: t('services.cards.recruitment.description'),
    },
    {
      icon: '◎',
      title: t('services.cards.payments.title'),
      description: t('services.cards.payments.description'),
    },
    {
      icon: '▤',
      title: t('services.cards.documentation.title'),
      description: t('services.cards.documentation.description'),
    },
    {
      icon: '◈',
      title: t('services.cards.settlements.title'),
      description: t('services.cards.settlements.description'),
    },
    {
      icon: '✧',
      title: t('services.cards.support.title'),
      description: t('services.cards.support.description'),
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.content}>
        <div className={styles.heading}>
          <span className={styles.label}>
            <span className={styles.labelDot} aria-hidden="true" />
            Global Employer of Record
          </span>

          <h1>
            {t('services.heading')} <span>{t('services.headingAccent')}</span>
          </h1>

          <div className={styles.line} />

          <p className={styles.intro}>
            {t('services.intro')}
          </p>

          <p className={styles.subtitle}>
            {t('services.subtitle')}
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <article
              className={styles.serviceCard}
              key={service.title}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
