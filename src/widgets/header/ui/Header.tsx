
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const navigation = [
  { label: 'Наши услуги', href: '/services' },
  { label: 'Почему мы', href: '/benefits' },
  { label: 'Как это работает', href: '/how-it-works' },
  { label: 'Документы и сопровождение', href: '/documents' },
  { label: 'Контакты', href: '/contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          className={styles.logo}
          to="/"
          aria-label="Remote Pay"
          onClick={closeMenu}
        >
          <span className={styles.logoIcon}>R</span>
          <span>
            Remote<span className={styles.logoAccent}>Pay</span>
          </span>
        </Link>

        <nav className={styles.navigation} aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuButtonOpen : ''
          }`}
          type="button"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles.mobileMenuOpen : ''
        }`}
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <nav
          className={styles.mobileNavigation}
          aria-label="Мобильная навигация"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span className={styles.menuLabel}>{item.label}</span>
            </Link>
          ))}

          <Link
            to="/contact"
            className={styles.mobileContact}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            Запросить консультацию
          </Link>
        </nav>
      </div>
    </header>
  );
}
