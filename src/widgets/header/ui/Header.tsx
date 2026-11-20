
import styles from './Header.module.scss';

const navigation = [
  { label: 'Возможности', href: '#features' },
  { label: 'Как это работает', href: '#how-it-works' },
  { label: 'О сервисе', href: '#about' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="/" aria-label="Remote Pay">
          <span className={styles.logoIcon}>R</span>
          <span>
            Remote<span className={styles.logoAccent}>Pay</span>
          </span>
        </a>

        <nav className={styles.navigation} aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className={styles.loginButton} href="#login">
          Войти
        </a>
      </div>
    </header>
  );
}
