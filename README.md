# בעקבות האוצר - Landing Page

Landing page for "בעקבות האוצר" (In Search of the Treasure), an emotional-experiential
early-childhood program by Coral Masty-Sternberg. Static, frontend-only site — no backend, no database.

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS + React Router.

## Getting started

Requires [Node.js](https://nodejs.org/) 18+ and npm.

```bash
npm install
npm run dev       # start local dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # eslint
```

## Before going live

1. **PayMe checkout link** — edit `checkoutUrl` in [`src/config/site.ts`](src/config/site.ts).
2. **Google Reviews link** — edit `googleReviewsUrl` in the same file.
3. **Contact details** — edit `contact` in the same file (email, phone, WhatsApp, social).
4. **Accessibility statement details** — edit `accessibility` in the same file
   (last-updated date, accessibility contact person).

Everything above is grouped in one file on purpose so there's a single place to touch
when these details change.

## Folder structure

```
src/
  assets/images/       All images, loaded locally (no external image CDN)
    logo/               Site logo variants
    hero/               Hero section illustration
    decorative/          Floating mascots / scene illustrations used across sections
    gallery/            Real classroom photos used in the horizontal gallery
    blog/               Spare cover image (not currently wired into a page)
  components/
    layout/             Header, Footer, LegalLayout, ScrollToHash
    ui/                 Reusable primitives: Button, Accordion, AccessibilityWidget, ...
    sections/           One component per landing-page section (Hero, Features, FAQ, ...)
  pages/                Route-level pages: Home, Terms, Privacy, Accessibility, NotFound
  data/                 All Hebrew copy, structured as typed arrays (features, faq, ...)
  config/site.ts        Checkout URL, contact info, nav links - the "things you'll change" file
  hooks/                useScrollReveal (fade-in-on-scroll), useAccessibility (a11y toolbar state)
  types/content.ts      Shared TypeScript interfaces for the data/ layer
```

## Theming / colors

Every color is a CSS custom property defined once in [`src/index.css`](src/index.css) (`:root`),
and mapped to Tailwind utilities in [`tailwind.config.ts`](tailwind.config.ts)
(`bg-primary-dark`, `text-accent-gold`, `border-border`, etc.). To re-theme the whole site,
change the hex values in `src/index.css` — every component using the Tailwind color utilities
updates automatically. No color values are hardcoded in components.

Fonts: **Rubik** (headings) and **Assistant** (body), both self-hosted via `@fontsource`
(no external font CDN request at runtime).

## Accessibility

A floating accessibility bubble (bottom-left) lets visitors adjust font size, toggle high
contrast, underline links, and pause animations — preferences persist via `localStorage`
(see `src/hooks/useAccessibility.ts`). The full statement lives at `/accessibility`, as
required for public-facing commercial sites under Israeli law (IS 5568 / WCAG 2.0-2.1 AA).

**This is a starting point, not a substitute for a professional accessibility audit** —
have the finished site reviewed before relying on it for legal compliance.

## Deployment

The build output (`npm run build` → `dist/`) is fully static. Because the site uses
client-side routing (`/terms`, `/privacy`, `/accessibility`), each host needs to be told to
serve `index.html` for unknown paths — that's already configured:

| Host | Config file already included |
|---|---|
| **Vercel** | `vercel.json` (rewrites all paths to `index.html`) |
| **Netlify** | `public/_redirects` |
| **Cloudflare Pages** | `public/_redirects` (same file, same syntax) |
| **GitHub Pages** | `public/404.html` + a decode script in `index.html` (the standard [spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick), plus `.github/workflows/deploy-gh-pages.yml` to auto-deploy on push to `main` |

**GitHub Pages project sites only** (i.e. `https://username.github.io/repo-name/`, not a
custom domain or a `username.github.io` root repo): open `public/404.html` and change
`pathSegmentsToKeep` from `0` to `1`.

For Vercel / Netlify / Cloudflare Pages: connect the repo, set build command
`npm run build`, output directory `dist` — the platforms auto-detect this from `vercel.json`
in most cases regardless.

## Notes on scope

- The header nav links to in-page sections (`#about`, `#faq`, etc.) rather than a separate
  "Blog" page, since no blog content was provided — `src/assets/images/blog/blog-cover.png`
  is included and ready to use if/when a blog page is added.
- The testimonials carousel is hand-rolled (no carousel library) and ships with the two
  reviews provided. Since there's no backend, live Google Reviews aren't pulled in via API —
  instead there's a "לכל הביקורות בגוגל" button linking out to the Google Business listing
  (set the URL in `src/config/site.ts`).
- Terms of use / privacy policy text are drafted as real, usable content based on standard
  Israeli e-commerce/consumer-protection practice — have a lawyer review before publishing.
