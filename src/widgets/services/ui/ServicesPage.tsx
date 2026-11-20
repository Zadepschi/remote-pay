
import styles from './ServicesPage.module.scss';

const services = [
  {
    icon: '⌕',
    title: 'Подбор специалистов',
    description:
      'Помогаем найти подходящих специалистов с учётом задач компании, требований и необходимых навыков.',
  },
  {
    icon: '◎',
    title: 'Международные выплаты',
    description:
      'Помогаем организовать перечисление вознаграждений удалённым специалистам через доступных платёжных партнёров.',
  },
  {
    icon: '▤',
    title: 'Документальное сопровождение',
    description:
      'Помогаем организовать договоры, инвойсы, сведения об исполнителях и подтверждения проведённых платежей.',
  },
  {
    icon: '◈',
    title: 'Организация расчётов',
    description:
      'Согласовываем суммы, валюты, комиссии, сроки и порядок проведения операций.',
  },
  {
    icon: '✧',
    title: 'Административная поддержка',
    description:
      'Координируем взаимодействие между работодателем, специалистом и платёжными партнёрами.',
  },
];

export function ServicesPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.content}>
        <div className={styles.heading}>
          <span className={styles.label}>
            <span className={styles.labelDot} />
            REMOTE PAY
          </span>

          <h1>
            Наши <span>услуги</span>
          </h1>

          <div className={styles.line} />

          <p className={styles.intro}>
            Всё необходимое для организации международных выплат
          </p>

          <p className={styles.subtitle}>
            Помогаем находить зарубежных специалистов, организовывать выплаты
            и координировать финансовые и административные процессы.
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
