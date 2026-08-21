import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * react-router doesn't scroll to #hash targets on route change by default.
 * This restores that behavior for in-page anchors (nav links, footer CTAs)
 * and scrolls new routes to the top otherwise.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
