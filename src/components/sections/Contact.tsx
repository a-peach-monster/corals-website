import { useState, type FormEvent } from 'react';
import { Facebook, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

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
    const phone = data.get('phone');
    const message = data.get('message');

    const subject = encodeURIComponent(`פנייה חדשה מהאתר - ${name}`);
    const body = encodeURIComponent(
      `שם: ${name}\nאימייל: ${email}\nטלפון: ${phone || '-'}\n\n${message || ''}`,
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
      <Container className="flex flex-col gap-14 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="right"
          eyebrow="דברו איתנו"
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
                <label htmlFor="contact-phone" className="text-sm font-semibold text-ink">
                  מס&apos; טלפון
                </label>
                <input id="contact-phone" name="phone" type="tel" className={inputClasses} />
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
            className="flex flex-col justify-between gap-8 rounded-xl3 bg-primary-dark p-7 text-white shadow-card sm:p-9"
          >
            <div className="flex flex-col gap-5">
              <h3 className="font-heading text-xl font-bold">פרטי התקשרות</h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                וואטסאפ
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="אינסטגרם"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="פייסבוק"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
