
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src="/logoGlobe.png" alt="Globeor" />
            </Link>

            <div className={styles.brandTagline}>
              {t('footer.tagline')}
            </div>

            <p className={styles.description}>
              {t('footer.description')}
            </p>
          </div>

          {/* Навигация */}
          <div className={styles.linksColumn}>
            <h3>{t('footer.navigationTitle')}</h3>

            <Link to="/">
              {t('footer.home')}
            </Link>

            <Link to="/services">
              {t('footer.services')}
            </Link>

            <Link to="/benefits">
              {t('footer.benefits')}
            </Link>

            <Link to="/how-it-works">
              {t('footer.howItWorks')}
            </Link>

            <Link to="/documents">
              {t('footer.documents')}
            </Link>

            <Link to="/contact">
              {t('footer.contacts')}
            </Link>
          </div>

          {/* Услуги и контакты */}
          <div className={styles.linksColumn}>
            <h3>{t('footer.servicesTitle')}</h3>

            <Link to="/services">
              {t('footer.recruitment')}
            </Link>

            <Link to="/services">
              {t('footer.internationalPayments')}
            </Link>

            <h3 className={styles.contactHeading}>
              {t('footer.contactTitle')}
            </h3>

            <Link to="/contact">
              {t('footer.requestConsultation')}
            </Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Globeor.
            {' '}{t('footer.rights')}
          </p>

          <Link to="/privacy">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
