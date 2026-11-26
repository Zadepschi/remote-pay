
import { useTranslation } from 'react-i18next';
import styles from './HowItWorksPage.module.scss';

export function HowItWorksPage() {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      icon: '▤',
      title: t('howItWorks.steps.application.title'),
      description: t('howItWorks.steps.application.description'),
    },
    {
      number: '02',
      icon: '◈',
      title: t('howItWorks.steps.terms.title'),
      description: t('howItWorks.steps.terms.description'),
    },
    {
      number: '03',
      icon: '◎',
      title: t('howItWorks.steps.payments.title'),
      description: t('howItWorks.steps.payments.description'),
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
            {t('howItWorks.heading')} <span>{t('howItWorks.headingAccent')}</span>
          </h1>

          <div className={styles.line} />

          <p className={styles.intro}>
            {t('howItWorks.intro')}
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <article
              className={styles.step}
              key={step.number}
              style={{ '--step-index': index } as React.CSSProperties}
            >
              <div className={styles.iconCircle}>
                <span className={styles.stepIcon}>
                  {step.icon}
                </span>
              </div>

              <span className={styles.stepNumber}>
                {t('howItWorks.stepLabel')} {step.number}
              </span>

              <h2>{step.title}</h2>

              <p>{step.description}</p>

              <div className={styles.stepGlow} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
