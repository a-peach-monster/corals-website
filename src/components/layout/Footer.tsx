import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';
import logo from '@/assets/images/logo/logo-small.png';
import footerBg from '@/assets/images/decorative/footer.jpg';

const legalLinks = [
  { label: 'תנאי שימוש', to: '/terms' },
  { label: 'הצהרת נגישות', to: '/accessibility' },
  { label: 'מדיניות פרטיות', to: '/privacy' },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden text-white">
      <img
        src={footerBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-bottom"
      />
      <div className="absolute inset-0 -z-10 bg-ink/55" />

      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-5 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt={siteConfig.name} className="h-8 w-8" />
          <span className="text-sm font-bold">{siteConfig.name}</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs text-white/80">
          {legalLinks.map((link) => (
            <Link key={link.to} to={link.to} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="אינסטגרם"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פייסבוק"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <Facebook className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <span className="text-xs text-white/60">
            © {new Date().getFullYear()} בעקבות האוצר
          </span>
        </div>
      </div>
    </footer>
  );
}
