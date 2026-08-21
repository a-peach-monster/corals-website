import type { Config } from "tailwindcss";

/**
 * All brand colors are piped through CSS custom properties defined in
 * src/index.css (:root). To re-theme the site, edit the variables there —
 * every Tailwind utility below (bg-primary-dark, text-accent-gold, etc.)
 * updates automatically.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        primary: {
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
        },
        secondary: {
          blue: "var(--color-secondary-blue)",
        },
        accent: {
          terracotta: "var(--color-accent-terracotta)",
          gold: "var(--color-accent-gold)",
          pink: "var(--color-accent-pink)",
        },
        surface: {
          sky: "var(--color-bg-sky)",
          parchment: "var(--color-surface-parchment)",
        },
        ink: {
          DEFAULT: "var(--color-text-main)",
          muted: "var(--color-text-muted)",
        },
        border: "var(--color-border)",
      },
      fontFamily: {
        heading: ["Rubik", "system-ui", "sans-serif"],
        body: ["Assistant", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(46, 83, 57, 0.18)",
        card: "0 8px 24px -8px rgba(44, 34, 30, 0.14)",
        glow: "0 0 0 4px rgba(232, 168, 56, 0.25)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(120% 120% at 50% 0%, var(--color-bg-sky) 0%, #ffffff 55%, var(--color-surface-parchment) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #ffffff 0%, var(--color-bg-sky) 100%)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 5s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
