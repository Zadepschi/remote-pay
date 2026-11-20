
import styles from './BenefitsPage.module.scss';

const benefits = [
  {
    icon: '☕',
    title: 'Меньше рутины',
    description:
      'Помогаем координировать этапы расчётов и сбора документов.',
    note: 'Больше времени на действительно важное.',
    variant: 'featured',
  },
  {
    icon: '◎',
    title: 'Единый контакт',
    description:
      'Вы взаимодействуете с нашей командой по организационным вопросам согласованной услуги.',
    note: 'Не нужно искать крайнего в переписке.',
    variant: 'regular',
  },
  {
    icon: '▤',
    title: 'Понятная документация',
    description:
      'Помогаем систематизировать документы и информацию о международных платежах.',
    note: 'Документы любят порядок. Мы тоже.',
    variant: 'regular',
  },
  {
    icon: '◇',
    title: 'Прозрачные условия',
    description:
      'Заранее согласовываем комиссию, валюту и возможные расходы.',
    note: 'Никаких сюрпризов в мелком шрифте.',
    variant: 'regular',
  },
  {
    icon: '◎',
    title: 'Международная география',
    description:
      'Рассматриваем выплаты в разные страны с учётом доступности платёжных решений.',
    note: 'Границы есть у карт. У задач бизнеса — реже.',
    variant: 'regular',
  },
  {
    icon: '✧',
    title: 'Дополнительный подбор',
    description:
      'При необходимости помогаем найти специалистов под требования и бюджет компании.',
    note: 'Не только переводы, но и поиск нужных людей.',
    variant: 'wide',
  },
];

export function BenefitsPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.content}>
        <header className={styles.heading}>
          <span className={styles.label}>
            <span className={styles.labelDot} />
            REMOTE PAY
          </span>

          <h1>
            Почему <span>мы</span>
          </h1>

          <div className={styles.line} />

          <p className={styles.intro}>
            Меньше административной работы —
            <br className={styles.desktopBreak} />
            больше времени на бизнес
          </p>

          <p className={styles.subtitle}>
            Международные расчёты и без того требуют внимания.
            Помогаем структурировать процесс и избавляем вашу команду
            от части организационной рутины.
          </p>
        </header>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <article
              className={`${styles.benefitCard} ${
                styles[benefit.variant]
              }`}
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
          <span>REMOTE PAY</span>
          <p>Сложные процессы. Более понятная организация.</p>
        </div>
      </div>
    </section>
  );
}
