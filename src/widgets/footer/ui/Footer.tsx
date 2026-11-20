
import styles from './Footer.module.scss';

const navigationLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Как это работает', href: '#how-it-works' },
  { label: 'О сервисе', href: '#about' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <a className={styles.logo} href="/">
              Remote<span>Pay</span>
            </a>

            <p className={styles.description}>
              Удобные и надёжные выплаты для удалённых
              команд по всему миру.
            </p>
          </div>

          <div className={styles.linksColumn}>
            <h3>Навигация</h3>

            {navigationLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className={styles.linksColumn}>
            <h3>Контакты</h3>

            <a href="mailto:hello@remotepay.com">
              hello@remotepay.com
            </a>

            <a href="#support">Поддержка</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Remote Pay.
            Все права защищены.
          </p>

          <a href="#privacy">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
