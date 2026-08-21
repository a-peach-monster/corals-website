import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';
import logo from '@/assets/images/logo/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 shadow-card backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2" aria-label={siteConfig.name}>
          <img src={logo} alt={siteConfig.name} className="h-12 w-12 sm:h-14 sm:w-14" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="ניווט ראשי">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium text-ink transition-colors hover:text-primary-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer" size="md">
            לרכישת הערכה
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="פתיחת תפריט ניווט"
          aria-expanded={isMenuOpen}
        >
          <Menu className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="container mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
            <img src={logo} alt={siteConfig.name} className="h-12 w-12" />
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="סגירת תפריט ניווט"
              className="flex h-11 w-11 items-center justify-center rounded-full text-ink"
            >
              <X className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col items-center justify-center gap-8"
            aria-label="ניווט ראשי - מובייל"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-heading text-2xl font-semibold text-ink transition-colors hover:text-primary-dark"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={siteConfig.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              לרכישת הערכה
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
