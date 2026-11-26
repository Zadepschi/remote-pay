
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

const navigation = [
  { key: 'nav.services', href: '/services' },
  { key: 'nav.benefits', href: '/benefits' },
  { key: 'nav.howItWorks', href: '/how-it-works' },
  { key: 'nav.documents', href: '/documents' },
  { key: 'nav.contacts', href: '/contact' },
];

export function Header() {
  const { t, i18n } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLanguage = (
    i18n.resolvedLanguage || i18n.language
  ).startsWith('en')
    ? 'en'
    : 'ru';

  const nextLanguage = currentLanguage === 'ru' ? 'en' : 'ru';

  const changeLanguage = () => {
    if (nextLanguage === currentLanguage) return;

    i18n.changeLanguage(nextLanguage);
    localStorage.setItem('language', nextLanguage);
  };

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

  const languageSwitcher = (
    <button
      type="button"
      className={styles.languageSwitcher}
      onClick={changeLanguage}
      aria-label={`Switch language to ${nextLanguage.toUpperCase()}`}
      title={`Switch to ${nextLanguage.toUpperCase()}`}
    >
      {nextLanguage.toUpperCase()}
    </button>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          className={styles.logo}
          to="/"
          aria-label="Globeor"
          onClick={closeMenu}
        >
          <img
            src="/logoGlobe.png"
            alt="Globeor"
            className={styles.logoImage}
          />
        </Link>

        <nav
          className={styles.navigation}
          aria-label={t('nav.main')}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive ? styles.active : ''
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        {languageSwitcher}

        <button
          className={`${styles.menuButton} ${
            isMenuOpen ? styles.menuButtonOpen : ''
          }`}
          type="button"
          aria-label={
            isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')
          }
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
          aria-label={t('nav.mobile')}
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
              <span className={styles.menuLabel}>
                {t(item.key)}
              </span>
            </NavLink>
          ))}

          <Link
            to="/contact#contact-form"
            className={styles.mobileContact}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {t('nav.consultation')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
