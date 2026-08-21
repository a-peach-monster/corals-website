import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setIsVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-20 right-5 z-40 flex items-center justify-center p-2 text-ink drop-shadow-md transition-all duration-300 hover:text-primary-dark hover:opacity-100 ${
        isVisible ? 'translate-y-0 opacity-50' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="חזרה לראש העמוד"
    >
      <ChevronUp className="h-7 w-7" aria-hidden="true" />
    </button>
  );
}
