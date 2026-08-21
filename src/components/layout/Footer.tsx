import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import logo from '@/assets/images/logo/logo-small.png';

const legalLinks = [
  { label: 'תנאי שימוש', to: '/terms' },
  { label: 'הצהרת נגישות', to: '/accessibility' },
  { label: 'מדיניות פרטיות', to: '/privacy' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary-dark text-white">
      <div className="container mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <img src={logo} alt={siteConfig.name} className="h-16 w-16" />
            <p className="text-lg font-bold">{siteConfig.name}</p>
            <p className="text-sm leading-relaxed text-white/70">{siteConfig.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-base font-bold">יצירת קשר</h3>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              וואטסאפ
            </a>
            <div className="mt-2 flex items-center gap-3">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="אינסטגרם"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="פייסבוק"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-base font-bold">מידע משפטי</h3>
            {legalLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-center text-sm text-white/60">
          © כל הזכויות שמורות לתוכנית בעקבות האוצר, {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
