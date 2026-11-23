
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
          aria-label="Globeor — главная страница"
          onClick={closeMenu}
        >
          <img
            src="/logoGlobe.png"
            alt="Globeor"
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.navigation} aria-label="Основная навигация">
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? styles.active : ''
              }
            >
              {item.label}
            </NavLink>
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
            <NavLink
              key={item.href}
              to={item.href}
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
              className={({ isActive }) =>
                isActive ? styles.active : ''
              }
            >
              <span className={styles.menuLabel}>{item.label}</span>
            </NavLink>
          ))}

          <Link
            to="/contact#contact-form"
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
