
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Hero.module.scss';
import { HeroGlobe } from '../../hero-globe/ui/HeroGlobe';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.content}>

          {/* Brand positioning */}
          <div className={styles.heroEyebrow}>
            <span className={styles.goldShimmer}>GLOB</span>
            <span className={styles.wordEnd}>al</span>

            <span className={styles.goldShimmer}>E</span>
            <span className={styles.wordEnd}>mployer</span>

            <span className={styles.goldShimmer}>O</span>
            <span className={styles.wordEnd}>f</span>

            <span className={styles.goldShimmer}>R</span>
            <span>ecord</span>
          </div>

          {/* Main heading */}
          <h1 className={styles.title}>
            {t('hero.title')}
            <span>{t('hero.titleAccent')}</span>
          </h1>

          {/* Main benefit */}
          <div className={styles.heroHighlight}>
            {t('hero.highlight')}
          </div>

          {/* Services */}
          <div className={styles.services}>

            <div className={styles.serviceItem}>
              <span
                className={styles.serviceLine}
                aria-hidden="true"
              />
              <div>
                <strong>{t('hero.service1.title')}</strong>
                <p>{t('hero.service1.description')}</p>
              </div>
            </div>

            <div className={styles.serviceItem}>
              <span
                className={styles.serviceLine}
                aria-hidden="true"
              />
              <div>
                <strong>{t('hero.service2.title')}</strong>
                <p>{t('hero.service2.description')}</p>
              </div>
            </div>

          </div>

          {/* Action buttons */}
          <div className={styles.actions}>
            <Link
              to="/contact#contact-form"
              className={styles.primaryButton}
            >
              {t('hero.consultation')}
            </Link>

            <Link
              to="/services"
              className={styles.secondaryButton}
            >
              {t('hero.ourServices')}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

        {/* Globe and information cards */}
        <div className={styles.visual}>
          <div className={styles.visualGlow} />

          <HeroGlobe />

          <div className={`${styles.infoCard} ${styles.topCard}`}>
            <div>
              <span>{t('hero.card1.label')}</span>
              <strong>{t('hero.card1.title')}</strong>
            </div>
          </div>

          <div className={`${styles.infoCard} ${styles.bottomCard}`}>
            <div>
              <span>{t('hero.card2.label')}</span>
              <strong>{t('hero.card2.title')}</strong>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.bottomDecoration} />
    </section>
  );
}
