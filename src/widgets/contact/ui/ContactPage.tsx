
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactPage.module.scss';
import { useEffect } from 'react';

const services = [
  'International payments',
  'Document support',
  'Calculation organization',
  'Specialist search',
  'Administrative support',
  'Comprehensive service',
];

export default function ContactPage() {
  const [state, handleSubmit] = useForm('meagpayk');

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
          <span className={styles.label}>SHAHINPAY / THANK YOU</span>
          <h1>Заявка отправлена</h1>
          <div className={styles.line} />
          <p>
            Спасибо за обращение! Мы получили вашу заявку и свяжемся с вами
            по указанным контактным данным.
          </p>
          <span className={styles.successNote}>
            Благодарим за интерес к ShahinPay.
          </span>
        </div>
      </main>
    );
  }


  return (
    <main className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.heading}>
          <span className={styles.label}>Employer of Record / CONTACTS</span>
          <h1>
            Давайте обсудим <span>сотрудничество</span>
          </h1>
          <div className={styles.line} />
          <p>
            Свяжитесь с нами или оставьте заявку. Мы поможем подобрать
            подходящее решение для международных выплат и сопровождения
            вашей команды.
          </p>
        </header>

        <div className={styles.contactLayout}>
          <aside className={styles.contactPanel}>
            <div className={styles.panelHeading}>
              <span className={styles.label}>GET IN TOUCH</span>
              <h2>Наши контакты</h2>
              <p>
                Будем рады ответить на ваши вопросы и обсудить возможное
                сотрудничество.
              </p>
            </div>

            <div className={styles.contactList}>
              <a
                className={styles.contactItem}
                href="mailto:contact@shahinpay.example"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
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
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 3h3l2 5-2.5 1.5a15 15 0 0 0 5 5L16 12l5 2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 5c0-1.1.9-2 2-2Z" />
                  </svg>
                </span>
                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>Телефон</span>
                  <span className={styles.contactValue}>
                    +1 212-555-0147
                  </span>
                </span>
              </a>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
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
                ShahinPay — решения для организации международных выплат
                и поддержки распределённых команд.
              </p>
            </div>
          </aside>

         <section className={styles.formPanel} id="contact-form">
            <div className={styles.formHeading}>
              <span className={styles.label}>LET'S WORK TOGETHER</span>
              <h2>Оставить заявку</h2>
              <p>
                Расскажите немного о вашей компании и задачах. Это поможет
                нам подготовиться к разговору.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
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

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <div>
                    <h3>Информация о компании</h3>
                  </div>
                </div>

                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label htmlFor="company">Название компании *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Название компании"
                      required
                    />
                    <ValidationError field="company" errors={state.errors} />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="company_country">
                      Страна регистрации *
                    </label>
                    <input
                      id="company_country"
                      name="company_country"
                      type="text"
                      placeholder="Например, United States"
                      required
                    />
                    <ValidationError
                      field="company_country"
                      errors={state.errors}
                    />
                  </div>

                  <div className={`${styles.field} ${styles.fullWidth}`}>
                    <label htmlFor="website">Сайт компании</label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://example.com"
                    />
                    <ValidationError field="website" errors={state.errors} />
                  </div>
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <div>
                    <h3>Контактное лицо</h3>
                  </div>
                </div>

                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label htmlFor="contact_name">Имя и фамилия *</label>
                    <input
                      id="contact_name"
                      name="contact_name"
                      type="text"
                      placeholder="Ваше имя"
                      required
                    />
                    <ValidationError
                      field="contact_name"
                      errors={state.errors}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="position">Должность</label>
                    <input
                      id="position"
                      name="position"
                      type="text"
                      placeholder="Ваша должность"
                    />
                    <ValidationError field="position" errors={state.errors} />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email">Рабочий email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                    />
                    <ValidationError field="email" errors={state.errors} />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">Телефон / WhatsApp *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 000 000 0000"
                      required
                    />
                    <ValidationError field="phone" errors={state.errors} />
                  </div>
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <div>
                    <h3>Параметры выплат</h3>
                  </div>
                </div>

                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label htmlFor="specialists_count">
                      Количество специалистов *
                    </label>
                    <select
                      id="specialists_count"
                      name="specialists_count"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Выберите количество
                      </option>
                      <option value="1–5">1–5</option>
                      <option value="6–20">6–20</option>
                      <option value="21–50">21–50</option>
                      <option value="51–100">51–100</option>
                      <option value="100+">Более 100</option>
                    </select>
                    <ValidationError
                      field="specialists_count"
                      errors={state.errors}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="payment_frequency">
                      Частота выплат *
                    </label>
                    <select
                      id="payment_frequency"
                      name="payment_frequency"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Выберите частоту
                      </option>
                      <option value="Weekly">Еженедельно</option>
                      <option value="Twice a month">Два раза в месяц</option>
                      <option value="Monthly">Ежемесячно</option>
                      <option value="On request">По запросу</option>
                    </select>
                    <ValidationError
                      field="payment_frequency"
                      errors={state.errors}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="payment_currency">Валюта выплат</label>
                    <select
                      id="payment_currency"
                      name="payment_currency"
                      defaultValue=""
                    >
                      <option value="">Выберите валюту</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="TRY">TRY</option>
                      <option value="Other">Другая</option>
                    </select>
                    <ValidationError
                      field="payment_currency"
                      errors={state.errors}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="monthly_volume">
                      Примерный месячный объём
                    </label>
                    <input
                      id="monthly_volume"
                      name="monthly_volume"
                      type="text"
                      placeholder="Например, 20 000 USD"
                    />
                    <ValidationError
                      field="monthly_volume"
                      errors={state.errors}
                    />
                  </div>

                  <div className={`${styles.field} ${styles.fullWidth}`}>
                    <label htmlFor="recipient_countries">
                      Страны получателей выплат *
                    </label>
                    <textarea
                      id="recipient_countries"
                      name="recipient_countries"
                      placeholder="Укажите страны, в которых находятся ваши специалисты"
                      required
                    />
                    <ValidationError
                      field="recipient_countries"
                      errors={state.errors}
                    />
                  </div>
                </div>
              </section>

              <section className={styles.formSection}>
                <div className={styles.sectionHeading}>
                  <div>
                    <h3>Какие услуги вас интересуют?</h3>
                  </div>
                </div>

                <div className={styles.services}>
                  {services.map((service) => (
                    <label className={styles.serviceOption} key={service}>
                      <input
                        type="checkbox"
                        name="services"
                        value={service}
                      />
                      <span className={styles.customCheckbox} />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
                <ValidationError field="services" errors={state.errors} />

                <div className={`${styles.field} ${styles.commentField}`}>
                  <label htmlFor="message">Дополнительная информация</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите подробнее о вашей задаче или задайте вопрос..."
                  />
                  <ValidationError field="message" errors={state.errors} />
                </div>
              </section>

              <div className={styles.formFooter}>
                <label className={styles.consent}>
                  <input
                    type="checkbox"
                    name="privacy_consent"
                    value=" согласен(на)"
                    required
                  />
                  <span className={styles.customCheckbox} />
                  <span>
                    Я согласен(на) на обработку предоставленных данных для
                    рассмотрения моей заявки. *
                  </span>
                </label>

                <ValidationError
                  field="privacy_consent"
                  errors={state.errors}
                />

                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Отправка...' : 'Отправить заявку'}
                  <span aria-hidden="true">↗</span>
                </button>

                <p className={styles.formNote}>
                  Поля, отмеченные звёздочкой (*), обязательны для заполнения.
                </p>

                {state.errors && (
                  <ValidationError errors={state.errors} />
                )}
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
