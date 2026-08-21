import { useState, type FormEvent } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import contactBg from '@/assets/images/decorative/contact.jpg';

const inputClasses =
  'rounded-xl2 border border-border bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-primary-dark';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');

    const subject = encodeURIComponent(`פנייה חדשה מהאתר - ${name}`);
    const body = encodeURIComponent(
      `שם: ${name}\nאימייל: ${email}\n\n${message || ''}`,
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    form.reset();
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-primary-light/10 via-white to-accent-gold/10 py-20 lg:py-28"
    >
      <Container className="flex flex-col gap-8 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="right"
          title="צור קשר"
          description='יש שאלה על הערכה? השאירו פרטים ונחזור אליכם בהקדם.'
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-xl3 bg-white p-7 shadow-card sm:p-9"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
                  שם <span className="text-accent-terracotta">*</span>
                </label>
                <input id="contact-name" name="name" type="text" required className={inputClasses} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
                  אימייל <span className="text-accent-terracotta">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className={inputClasses}
                />
              </div>


              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
                  תוכן הודעה
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className={`resize-none ${inputClasses}`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-l from-accent-gold to-accent-terracotta px-8 py-4 font-heading text-lg font-semibold text-white shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-glow active:scale-[0.97]"
              >
                שליחה
              </button>

              {status === 'sent' && (
                <p className="text-sm font-medium text-primary-dark">
                  תודה! נפתח עבורכם חלון מייל לשליחת הפנייה.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal
            delayMs={100}
            className="relative min-h-[420px] overflow-hidden rounded-xl3 shadow-card"
          >
            <img
              src={contactBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 top-[4%] z-10 flex items-center justify-start gap-6 bg-ink/55 pl-7 pr-[10%] py-1.5 shadow-soft backdrop-blur-sm sm:pl-9">
              <div className="flex flex-col items-start gap-2.5 text-right">
                <h3 className="font-heading text-xl font-bold text-ink">פרטי התקשרות</h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center justify-start gap-3 text-base font-bold text-ink transition-colors hover:text-ink/80"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  {siteConfig.contact.email}
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start gap-3 text-base font-bold text-ink transition-colors hover:text-ink/80"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  וואטסאפ
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
