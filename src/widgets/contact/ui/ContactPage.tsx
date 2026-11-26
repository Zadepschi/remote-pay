
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-number-input';
import { Mail, ArrowUpRight } from 'lucide-react';

import 'react-phone-number-input/style.css';
import styles from './ContactPage.module.scss';

const WHATSAPP_NUMBER = '12125550147';

export default function ContactPage() {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm('meagpayk');
  const [phone, setPhone] = useState<string | undefined>();

  useEffect(() => {
    if (window.location.hash === '#contact-form') {
      requestAnimationFrame(() => {
        document.getElementById('contact-form')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  }, []);

  if (state.succeeded) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.successCard}>
          <div className={styles.successIcon}>✓</div>

          <span className={styles.label}>
            GLOBAL EMPLOYER OF RECORD / THANK YOU
          </span>

          <h1>{t('contact.success.title')}</h1>

          <div className={styles.line} />

          <p>{t('contact.success.description')}</p>

          <span className={styles.successNote}>
            {t('contact.success.note')}
          </span>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.heading}>
          <div className={styles.heroLabel}>
            <span className={styles.labelDot} aria-hidden="true" />
            <span className={styles.label}>
              Global Employer of Record
            </span>
          </div>

          <h1>
            {t('contact.heading')}{' '}
            <span>{t('contact.headingAccent')}</span>
          </h1>

          <div className={styles.line} />

          <p>{t('contact.subtitle')}</p>
        </header>

        <div className={styles.contactLayout}>
          <aside className={styles.contactPanel}>
            <div className={styles.panelHeading}>
              <span className={styles.label}>
                {t('contact.panel.eyebrow')}
              </span>

              <h2>{t('contact.panel.title')}</h2>

              <p>{t('contact.panel.description')}</p>
            </div>

            <div className={styles.contactList}>
              <a
                className={styles.contactItem}
                href="mailto:contact@shahinpay.example"
              >
                <span className={styles.contactIcon}>
  <Mail size={22} strokeWidth={1.7} />
</span>

                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>Email</span>

                  <span className={styles.contactValue}>
                    contact@shahinpay.example
                  </span>
                </span>
              </a>

              <a
                className={styles.contactItem}
                href="tel:+12125550147"
              >
                <span className={styles.contactIcon}>☎</span>

                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>
                    {t('contact.panel.phone')}
                  </span>

                  <span className={styles.contactValue}>
                    +1 212-555-0147
                  </span>
                </span>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⌖</span>

                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>
                    {t('contact.panel.address')}
                  </span>

                  <span className={styles.contactValue}>
                    123 Example Street,
                    <br />
                    New York, NY 10001, USA
                  </span>
                </span>
              </div>
            </div>

            <div className={styles.contactNote}>
              <span className={styles.noteLine} />

              <p>{t('contact.panel.note')}</p>
            </div>
          </aside>

          <section className={styles.formPanel} id="contact-form">
            <div className={styles.formHeading}>
              <span className={styles.label}>
                {t('contact.form.eyebrow')}
              </span>

              <h2>{t('contact.form.title')}</h2>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Защита от спама */}
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="_gotcha">
                  Leave this field empty
                </label>

                <input
                  id="_gotcha"
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Email */}
              <div className={styles.field}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.form.email')}
                  autoComplete="email"
                  aria-label={t('contact.form.email')}
                  required
                />

                <ValidationError
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Имя */}
              <div className={styles.field}>
                <input
                  id="contact_name"
                  name="contact_name"
                  type="text"
                  placeholder={t('contact.form.name')}
                  autoComplete="name"
                  aria-label={t('contact.form.name')}
                  required
                />

                <ValidationError
                  field="contact_name"
                  errors={state.errors}
                />
              </div>

              {/* Телефон */}
              <div className={styles.field}>
                <PhoneInput
                  id="phone"
                  international
                  defaultCountry="US"
                  value={phone}
                  onChange={setPhone}
                  placeholder={t('contact.form.phone')}
                  aria-label={t('contact.form.phone')}
                />

                <input
                  type="hidden"
                  name="phone"
                  value={phone || ''}
                />
              </div>

              {/* Должность */}
              <div className={styles.field}>
                <select
                  id="role"
                  name="role"
                  defaultValue=""
                  aria-label={t('contact.form.role')}
                  required
                >
                  <option value="" disabled>
                    {t('contact.form.role')}
                  </option>

                  <option value="Founder / CEO">
                    {t('contact.form.roles.founder')}
                  </option>

                  <option value="HR / People">
                    {t('contact.form.roles.hr')}
                  </option>

                  <option value="Finance">
                    {t('contact.form.roles.finance')}
                  </option>

                  <option value="Operations">
                    {t('contact.form.roles.operations')}
                  </option>

                  <option value="Recruiter">
                    {t('contact.form.roles.recruiter')}
                  </option>

                  <option value="Other">
                    {t('contact.form.roles.other')}
                  </option>
                </select>

                <ValidationError
                  field="role"
                  errors={state.errors}
                />
              </div>

              {/* Количество специалистов */}
              <div className={styles.field}>
                <select
                  id="contractors"
                  name="contractors"
                  defaultValue=""
                  aria-label={t('contact.form.contractors')}
                  required
                >
                  <option value="" disabled>
                    {t('contact.form.contractors')}
                  </option>

                  <option value="1-5">1–5</option>
                  <option value="6-20">6–20</option>
                  <option value="21-50">21–50</option>
                  <option value="51-100">51–100</option>
                  <option value="101-250">101–250</option>
                  <option value="250+">250+</option>
                </select>

                <ValidationError
                  field="contractors"
                  errors={state.errors}
                />
              </div>

              {/* Согласие с политикой */}
              <div className={styles.formFooter}>
                <label className={styles.consent}>
                  <input
                    type="checkbox"
                    name="privacy_consent"
                    value="yes"
                    required
                  />

                  <span className={styles.customCheckbox} />

                  <span>
                    {t('contact.form.consentBefore')}{' '}

                    <a href="/terms-of-use" target="_blank">
                      {t('contact.form.terms')}
                    </a>{' '}

                    {t('contact.form.consentBetween')}{' '}

                    <a href="/privacy-policy" target="_blank">
                      {t('contact.form.privacy')}
                    </a>.
                  </span>
                </label>

                <ValidationError
                  field="privacy_consent"
                  errors={state.errors}
                />

                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={state.submitting || !phone}
                >
                  {state.submitting
                    ? t('contact.form.sending')
                    : t('contact.form.submit')}

                  <ArrowUpRight size={19} strokeWidth={2} />
                </button>

                {state.errors && (
                  <ValidationError errors={state.errors} />
                )}
              </div>
            </form>

            <div className={styles.whatsappLink}>
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {t('contact.form.whatsapp')}
    <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
  </a>
</div>
          </section>
        </div>
      </div>
    </main>
  );
}
