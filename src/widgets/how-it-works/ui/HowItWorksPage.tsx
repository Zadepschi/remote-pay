
import styles from './HowItWorksPage.module.scss';

const steps = [
  {
    number: '01',
    icon: '▤',
    title: 'Оставьте заявку',
    description:
      'Расскажите о компании, количестве специалистов и направлениях выплат.',
  },
  {
    number: '02',
    icon: '◈',
    title: 'Согласуйте условия',
    description:
      'Определим модель работы, комиссии, валюты, сроки и необходимые документы.',
  },
  {
    number: '03',
    icon: '◎',
    title: 'Организуем выплаты',
    description:
      'Проведём выплаты и предоставим подтверждение операций.',
  },
];

export function HowItWorksPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.content}>
        <div className={styles.heading}>
          <span className={styles.label}>
            <span className={styles.labelDot} />
            Employer of Record
          </span>

          <h1>
            Как это <span>работает</span>
          </h1>

          <div className={styles.line} />

          <p className={styles.intro}>
            От первой заявки до завершения выплат — всего 3 простых шага.
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
                ШАГ {step.number}
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
