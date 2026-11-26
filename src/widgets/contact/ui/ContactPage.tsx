
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactPage.module.scss';
import { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const WHATSAPP_NUMBER = '12125550147';

export default function ContactPage() {
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
          <span className={styles.label}>REMOTEPAY / THANK YOU</span>
          <h1>Заявка отправлена</h1>
          <div className={styles.line} />
          <p>
            Спасибо за обращение! Мы получили вашу заявку
            и свяжемся с вами по указанным контактным данным.
          </p>
          <span className={styles.successNote}>
            Благодарим за интерес к RemotePay.
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
            Свяжитесь с нашей  <span>командой</span> 
          </h1>
          <div className={styles.line} />
          <p>
            Оставьте заявку, и мы поможем подобрать подходящее
            решение для международных выплат и вашей команды.
          </p>
        </header>

        <div className={styles.contactLayout}>
          <aside className={styles.contactPanel}>
            <div className={styles.panelHeading}>
              <span className={styles.label}>GET IN TOUCH</span>
              <h2>Наши контакты</h2>
              <p>
                Будем рады ответить на ваши вопросы и обсудить
                возможное сотрудничество.
              </p>
            </div>

            <div className={styles.contactList}>
              <a
                className={styles.contactItem}
                href="mailto:contact@shahinpay.example"
              >
                <span className={styles.contactIcon}>✉</span>
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
                  <span className={styles.contactLabel}>Телефон</span>
                  <span className={styles.contactValue}>
                    +1 212-555-0147
                  </span>
                </span>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⌖</span>
                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>Адрес</span>
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
              <p>
                RemotePay — решения для организации международных
                выплат и поддержки распределённых команд.
              </p>
            </div>
          </aside>

          <section className={styles.formPanel} id="contact-form">
            <div className={styles.formHeading}>
              <span className={styles.label}>LET'S WORK TOGETHER</span>
              <h2>Оставить заявку</h2>
            
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              {/* Защита от спама */}
              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="_gotcha">Leave this field empty</label>
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
                  placeholder="Company email"
                  autoComplete="email"
                  aria-label="Company email"
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
                  placeholder="Name"
                  autoComplete="name"
                  aria-label="Name"
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
                  placeholder="999 999 9999"
                  aria-label="Phone number"
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
                  aria-label="Your role"
                  required
                >
                  <option value="" disabled>
                    Your role
                  </option>
                  <option value="Founder / CEO">Founder / CEO</option>
                  <option value="HR / People">HR / People</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                  <option value="Recruiter">Recruiter</option>
                  <option value="Other">Other</option>
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
                  aria-label="Number of contractors"
                  required
                >
                  <option value="" disabled>
                    Number of contractors
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
                    I agree to the{' '}
                    <a href="/terms-of-use" target="_blank">
                      Terms of Use
                    </a>{' '}
                    and acknowledge the{' '}
                    <a href="/privacy-policy" target="_blank">
                      Privacy Policy
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
                    ? 'Sending...'
                    : 'Отправить сообщение'}
                  <span aria-hidden="true">↗</span>
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
                Написать нам в WhatsApp ↗
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
