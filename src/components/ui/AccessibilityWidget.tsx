import { useEffect, useRef, useState } from 'react';
import {
  Accessibility,
  Contrast,
  Link2,
  Minus,
  PersonStanding,
  Plus,
  RotateCcw,
  X,
} from 'lucide-react';
import { useAccessibility } from '@/hooks/useAccessibility';

/**
 * Floating accessibility toolbar ("bubble") required under the Israeli
 * Equal Rights for Persons with Disabilities Law (IS 5568 / WCAG 2.0-2.1 AA)
 * for public-facing commercial sites. Links out to the full accessibility
 * statement page.
 */
export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { state, cycleFontScale, toggleContrast, toggleUnderlineLinks, toggleReduceMotion, reset } =
    useAccessibility();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div ref={panelRef} className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-3">
      {isOpen && (
        <div className="w-72 rounded-2xl border border-border bg-white p-4 shadow-soft animate-fade-in-up">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-heading text-base font-bold text-ink">נגישות האתר</h2>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="סגירת תפריט נגישות"
              className="rounded-full p-1 text-ink-muted hover:bg-surface-sky hover:text-ink"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={cycleFontScale}
              className="flex items-center justify-between rounded-xl border border-border px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface-sky"
            >
              <span className="flex items-center gap-2">
                <Plus className="h-4 w-4" aria-hidden="true" />
                <Minus className="h-4 w-4" aria-hidden="true" />
                גודל טקסט
              </span>
              <span className="text-ink-muted">
                {state.fontScale === 'base' ? 'רגיל' : state.fontScale === 'lg' ? 'גדול' : 'גדול מאוד'}
              </span>
            </button>

            <button
              type="button"
              onClick={toggleContrast}
              aria-pressed={state.highContrast}
              className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                state.highContrast
                  ? 'border-primary-dark bg-primary-dark text-white'
                  : 'border-border text-ink hover:bg-surface-sky'
              }`}
            >
              <span className="flex items-center gap-2">
                <Contrast className="h-4 w-4" aria-hidden="true" />
                ניגודיות גבוהה
              </span>
              <span>{state.highContrast ? 'פעיל' : 'כבוי'}</span>
            </button>

            <button
              type="button"
              onClick={toggleUnderlineLinks}
              aria-pressed={state.underlineLinks}
              className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                state.underlineLinks
                  ? 'border-primary-dark bg-primary-dark text-white'
                  : 'border-border text-ink hover:bg-surface-sky'
              }`}
            >
              <span className="flex items-center gap-2">
                <Link2 className="h-4 w-4" aria-hidden="true" />
                הדגשת קישורים
              </span>
              <span>{state.underlineLinks ? 'פעיל' : 'כבוי'}</span>
            </button>

            <button
              type="button"
              onClick={toggleReduceMotion}
              aria-pressed={state.reduceMotion}
              className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                state.reduceMotion
                  ? 'border-primary-dark bg-primary-dark text-white'
                  : 'border-border text-ink hover:bg-surface-sky'
              }`}
            >
              <span className="flex items-center gap-2">
                <PersonStanding className="h-4 w-4" aria-hidden="true" />
                עצירת אנימציות
              </span>
              <span>{state.reduceMotion ? 'פעיל' : 'כבוי'}</span>
            </button>

            <button
              type="button"
              onClick={reset}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-sky hover:text-ink"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              איפוס הגדרות
            </button>
          </div>

          <a
            href="/accessibility"
            className="mt-3 block text-center text-sm font-semibold text-secondary-blue underline underline-offset-4"
          >
            הצהרת נגישות מלאה
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="פתיחת תפריט נגישות"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-dark text-white shadow-soft transition-transform hover:scale-105 active:scale-95"
      >
        <Accessibility className="h-7 w-7" aria-hidden="true" />
      </button>
    </div>
  );
}
