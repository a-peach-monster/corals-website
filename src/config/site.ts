/**
 * Central site configuration.
 * Everything here is a value you're likely to need to change post-launch —
 * keep edits confined to this file rather than hunting through components.
 */

export const siteConfig = {
  name: 'בעקבות האוצר',
  tagline: 'מסע קסום של חברות ורגשות',
  creator: 'קורל מאסטי-שטרנברג',
  locale: 'he-IL',

  /**
   * PayMe hosted checkout link for the kit purchase.
   * TODO: replace with the real PayMe checkout URL before going live.
   */
  checkoutUrl: 'https://payme.io/REPLACE_WITH_YOUR_PAYME_CHECKOUT_LINK',

  contact: {
    email: 'info@beikvot-haotzar.co.il',
    whatsapp: 'https://wa.me/972500000000',
  },

  /**
   * No backend is used to pull live Google reviews (would require a
   * server-side API key). Instead the testimonials carousel links out to
   * the public Google Business reviews page.
   * TODO: replace with the real Google Business "write a review" / listing URL.
   */
  googleReviewsUrl: 'https://g.page/r/REPLACE_WITH_GOOGLE_BUSINESS_ID/review',

  accessibility: {
    statementLastUpdated: '2026-08-21',
    contactPersonName: 'קורל מאסטי-שטרנברג',
    standard: 'תקן ישראלי 5568 (WCAG 2.0/2.1 ברמת AA)',
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

/** In-page anchor links for the sticky header nav. */
export const navLinks: NavLink[] = [
  { label: 'ראשי', href: '#home' },
  { label: 'אודות התוכנית', href: '#about' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'מה כוללת הערכה', href: '#included' },
  { label: 'שאלות נפוצות', href: '#faq' },
  { label: 'יצירת קשר', href: '#contact' },
];
