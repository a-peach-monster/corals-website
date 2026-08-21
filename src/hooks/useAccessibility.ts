import { useCallback, useEffect, useState } from 'react';

export type FontScale = 'base' | 'lg' | 'xl';

export interface AccessibilityState {
  fontScale: FontScale;
  highContrast: boolean;
  underlineLinks: boolean;
  reduceMotion: boolean;
}

const STORAGE_KEY = 'beikvot-a11y-prefs';

const defaultState: AccessibilityState = {
  fontScale: 'base',
  highContrast: false,
  underlineLinks: false,
  reduceMotion: false,
};

function readStoredState(): AccessibilityState {
  if (typeof window === 'undefined') return defaultState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...(JSON.parse(raw) as Partial<AccessibilityState>) };
  } catch {
    return defaultState;
  }
}

function applyToDocument(state: AccessibilityState) {
  const root = document.documentElement;
  root.classList.remove('a11y-font-lg', 'a11y-font-xl');
  if (state.fontScale === 'lg') root.classList.add('a11y-font-lg');
  if (state.fontScale === 'xl') root.classList.add('a11y-font-xl');

  root.classList.toggle('a11y-contrast', state.highContrast);
  root.classList.toggle('a11y-underline-links', state.underlineLinks);
  root.classList.toggle('a11y-reduce-motion', state.reduceMotion);
}

/**
 * Drives the accessibility bubble: font sizing, contrast, link underlining
 * and motion reduction. Preferences persist across visits via localStorage,
 * fulfilling the IS 5568 / WCAG 2.0-2.1 AA requirement for an accessible,
 * user-adjustable toolbar.
 */
export function useAccessibility() {
  const [state, setState] = useState<AccessibilityState>(readStoredState);

  useEffect(() => {
    applyToDocument(state);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* localStorage unavailable (private mode) - preferences just won't persist */
    }
  }, [state]);

  const cycleFontScale = useCallback(() => {
    setState((prev) => {
      const next: FontScale =
        prev.fontScale === 'base' ? 'lg' : prev.fontScale === 'lg' ? 'xl' : 'base';
      return { ...prev, fontScale: next };
    });
  }, []);

  const toggleContrast = useCallback(() => {
    setState((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  }, []);

  const toggleUnderlineLinks = useCallback(() => {
    setState((prev) => ({ ...prev, underlineLinks: !prev.underlineLinks }));
  }, []);

  const toggleReduceMotion = useCallback(() => {
    setState((prev) => ({ ...prev, reduceMotion: !prev.reduceMotion }));
  }, []);

  const reset = useCallback(() => setState(defaultState), []);

  return {
    state,
    cycleFontScale,
    toggleContrast,
    toggleUnderlineLinks,
    toggleReduceMotion,
    reset,
  };
}
