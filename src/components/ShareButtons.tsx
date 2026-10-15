import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Facebook, Link2, Mail, Share2 } from 'lucide-react';

type Props = {
  url: string;
  title: string;
};

const buttonClass =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary-light/60 text-primary-dark transition-colors hover:bg-primary-light/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-dark';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.89.9-2.99-.2-.31A8.2 8.2 0 1 1 12.04 20.1Zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setCanNativeShare(typeof navigator !== 'undefined' && typeof navigator.share === 'function');
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      window.prompt('העתיקו את הקישור:', url);
    }
  };

  const nativeShare = async () => {
    try {
      await navigator.share({ title, url });
    } catch {
      /* user dismissed the share sheet */
    }
  };

  return (
    <section aria-label="שיתוף המאמר" className="mt-12 border-t border-primary-light/40 pt-8">
      <h2 className="mb-4 font-heading text-lg font-bold text-ink">אהבתם? שתפו את המאמר</h2>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          aria-label="שיתוף בוואטסאפ"
          title="וואטסאפ"
        >
          <WhatsAppIcon />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          aria-label="שיתוף בפייסבוק"
          title="פייסבוק"
        >
          <Facebook className="h-5 w-5" aria-hidden="true" />
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
          className={buttonClass}
          aria-label="שליחה באימייל"
          title="אימייל"
        >
          <Mail className="h-5 w-5" aria-hidden="true" />
        </a>
        <button type="button" onClick={copyLink} className={buttonClass} aria-label="העתקת קישור" title="העתקת קישור">
          {copied ? <Check className="h-5 w-5" aria-hidden="true" /> : <Link2 className="h-5 w-5" aria-hidden="true" />}
        </button>
        {canNativeShare && (
          <button type="button" onClick={nativeShare} className={buttonClass} aria-label="אפשרויות שיתוף נוספות" title="עוד">
            <Share2 className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
        <span role="status" aria-live="polite" className="text-sm font-semibold text-primary-dark">
          {copied ? 'הקישור הועתק' : ''}
        </span>
      </div>
      <div className="mt-5 flex flex-col gap-1 text-base text-ink-muted">
        <p>רוצים לשמוע עוד על התוכנית או יש לכם שאלה?</p>
        <Link
          to="/#contact"
          className="w-fit font-semibold text-primary-dark underline underline-offset-2 hover:text-primary-light"
        >
          צרו איתנו קשר
        </Link>
      </div>
    </section>
  );
}
