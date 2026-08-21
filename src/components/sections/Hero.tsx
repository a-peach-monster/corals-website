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
      className="relative overflow-hidden bg-hero-gradient pb-20 pt-32 sm:pt-40 lg:pb-28"
    >
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

      <Container className="relative flex flex-col items-center gap-12 px-5 sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
        <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-right">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-primary-dark shadow-card backdrop-blur">
              ערכה חווייתית לגיל הרך · {siteConfig.creator}
            </span>
          </Reveal>

          <Reveal delayMs={80}>
            <h1 className="text-4xl font-extrabold leading-[1.15] text-ink sm:text-5xl md:text-6xl">
              <span className="block">{siteConfig.name}</span>
              <span className="mt-2 block bg-gradient-to-l from-primary-dark to-primary-light bg-clip-text text-transparent">
                {siteConfig.tagline}!
              </span>
            </h1>
          </Reveal>

          <Reveal delayMs={160}>
            <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
              "בעקבות האוצר" היא ערכה חווייתית מוכנה להפעלה, המיועדת לאנשי חינוך, טיפול והנחיה.
              במהלך התוכנית הילדים הופכים לגיבורי הרפתקה סוחפת - הם פוגשים דמויות קסומות, מתמודדים
              עם אתגרים משמעותיים, ומפתחים כישורי חיים חשובים.
            </p>
          </Reveal>

          <Reveal delayMs={240} className="flex flex-col gap-4 sm:flex-row">
            <Button
              href={siteConfig.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              לרכישת הערכה
            </Button>
            <Button href="#about" variant="ghost" size="lg">
              קראו עוד על התוכנית
            </Button>
          </Reveal>
        </div>

        <Reveal delayMs={120} className="relative w-full flex-1">
          <div className="relative overflow-hidden rounded-xl3 shadow-soft">
            <img
              src={heroIllustration}
              alt="ילדים יוצאים למסע הרפתקאות קסום ביער, בדרך לטירה מלאת אוצרות"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
