
import styles from './LegalPage.module.scss';

import { privacyPolicy } from '../content/privacyPolicy';
import { termsOfService } from '../content/termsOfService';
import { cookiePolicy } from '../content/cookiePolicy';

type LegalPageType = 'privacy' | 'terms' | 'cookies';

interface LegalPageProps {
  type: LegalPageType;
}

const documents = {
  privacy: privacyPolicy,
  terms: termsOfService,
  cookies: cookiePolicy,
};

export function LegalPage({ type }: LegalPageProps) {
  const document = documents[type];

  return (
    <main className={styles.legalPage}>
      <div className={styles.container}>

        <header className={styles.hero}>
          <div className={styles.eyebrow}>
            <span />
            LEGAL INFORMATION
          </div>

          <h1>{document.title}</h1>

          <p className={styles.updated}>
            Last Updated: {document.lastUpdated}
          </p>

          <div className={styles.heroCard}>
          <div className={styles.heroCardIcon}>
  <img
    src="/logoGlobe.png"
    alt="GlobeEOR"
  />
</div>

            <div>
              <span className={styles.heroLabel}>
                GLOBE EOR · LEGAL
              </span>

              <h2>Your privacy matters.</h2>

              <p>
                Transparency, trust and clarity
                are at the heart of our business.
              </p>
            </div>
          </div>
        </header>

        <div className={styles.contentLayout}>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarInner}>
              <span className={styles.sidebarTitle}>
                CONTENTS
              </span>

              <nav>
                {document.sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index + 1}`}
                  >
                    <span>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {section.heading.replace(/^\d+\.\s*/, '')}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className={styles.article}>
            {document.sections.map((section, index) => (
              <section
                key={index}
                id={`section-${index + 1}`}
                className={styles.section}
              >
                <div className={styles.sectionNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className={styles.sectionContent}>
                  <h2>{section.heading}</h2>

                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className={styles.documentEnd}>
              <span />
              <p>End of Document</p>
              <span />
            </div>
          </article>

        </div>

      </div>
    </main>
  );
}
