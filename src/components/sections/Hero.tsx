import { siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import heroIllustration from '@/assets/images/hero/hero-illustration.jpg';
import compass from '@/assets/images/decorative/compass.png';
import slime from '@/assets/images/decorative/slime-green.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[85vh] items-center overflow-hidden pb-20 pt-32 sm:pt-40 lg:min-h-screen lg:pb-28"
    >
      <img
        src={heroIllustration}
        alt="ילדים יוצאים למסע הרפתקאות קסום ביער, בדרך לטירה מלאת אוצרות"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10" />

      <img
        src={compass}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-24 hidden w-28 animate-spin-slow opacity-80 sm:block lg:w-36"
      />
      <img
        src={slime}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 bottom-10 hidden w-24 animate-float opacity-90 md:block lg:w-32"
      />

      <Container className="relative px-5 sm:px-6 lg:px-8">
        {/* Popup card: positioned here for now, move freely via the wrapper classes below.
            lg:mr-auto lg:ml-0 flushes the left edge to match the header's CTA button. */}
        <Reveal className="mx-auto flex max-w-sm flex-col items-center gap-3 rounded-xl3 bg-white/90 p-5 text-center shadow-soft backdrop-blur-md sm:p-6 lg:mr-auto lg:ml-0 lg:items-start lg:text-right">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-dark/10 px-3 py-1 text-xs font-semibold text-primary-dark">
            ערכה חווייתית לגיל הרך · {siteConfig.creator}
          </span>

          <h1 className="text-2xl font-extrabold leading-[1.15] text-ink sm:text-3xl md:text-4xl">
            <span className="block">{siteConfig.name}</span>
            <span className="mt-1 block bg-gradient-to-l from-primary-dark to-primary-light bg-clip-text text-transparent">
              {siteConfig.tagline}!
            </span>
          </h1>

          <p className="text-sm leading-relaxed text-ink-muted">
            "בעקבות האוצר" היא ערכה חווייתית מוכנה להפעלה, המיועדת לאנשי חינוך, טיפול והנחיה.
            במהלך התוכנית הילדים הופכים לגיבורי הרפתקה סוחפת - הם פוגשים דמויות קסומות, מתמודדים
            עם אתגרים משמעותיים, ומפתחים כישורי חיים חשובים.
          </p>

          <div className="flex w-full flex-col gap-2">
            <Button
              href={siteConfig.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
            >
              לרכישת הערכה
            </Button>
            <Button href="#about" variant="ghost" size="md">
              קראו עוד על התוכנית
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
