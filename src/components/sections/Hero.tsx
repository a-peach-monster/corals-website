import { siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import heroIllustration from '@/assets/images/hero/hero-illustration.jpg';
import slime from '@/assets/images/decorative/slime-green.png';

function HeroCard({ className = '' }: { className?: string }) {
  return (
    <Reveal
      className={`flex max-w-[30.4rem] flex-col items-center gap-3 rounded-xl3 bg-white/90 p-5 text-center shadow-soft backdrop-blur-md sm:max-w-[34.2rem] sm:p-6 lg:items-start lg:text-right ${className}`}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-dark/10 px-3 py-1 text-xs font-semibold text-primary-dark">
        ערכה חווייתית לגיל הרך · {siteConfig.creator}
      </span>

      <h1 className="text-2xl font-extrabold leading-[1.15] text-ink sm:text-3xl">
        <span className="block">{siteConfig.name}</span>
        <span className="mt-1 block bg-gradient-to-l from-primary-dark to-primary-light bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          {siteConfig.tagline}!
        </span>
      </h1>

      <p className="text-sm leading-relaxed text-ink-muted">
        "בעקבות האוצר" היא ערכה חווייתית מוכנה להפעלה, המיועדת לאנשי חינוך, טיפול והנחיה. במהלך
        התוכנית הילדים הופכים לגיבורי הרפתקה סוחפת - הם פוגשים דמויות קסומות, מתמודדים עם אתגרים
        משמעותיים, ומפתחים כישורי חיים חשובים.
      </p>

      <Button href={siteConfig.checkoutUrl} target="_blank" rel="noopener noreferrer" size="md" className="w-full">
        לרכישת הערכה
      </Button>
    </Reveal>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Mobile / tablet: image on top, card flows below it so the image never gets hidden */}
      <div className="pt-20 sm:pt-24 lg:hidden">
        <div className="relative h-[48vh] min-h-[280px] w-full overflow-hidden">
          <img
            src={heroIllustration}
            alt="ילדים יוצאים למסע הרפתקאות קסום ביער, בדרך לטירה מלאת אוצרות"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
        </div>
        <Container className="relative px-5 sm:px-6">
          <HeroCard className="mx-auto mt-6 sm:mt-8" />
        </Container>
      </div>

      {/* Desktop: full-bleed background image with the card popped up near the header */}
      <div className="relative hidden lg:block lg:min-h-screen">
        <img
          src={heroIllustration}
          alt="ילדים יוצאים למסע הרפתקאות קסום ביער, בדרך לטירה מלאת אוצרות"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-ink/25 to-ink/10" />

        {/* Peeking figure: mirrored + tilted, clipped by the section edge for a "peeping in" look */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-[70%] w-24 -translate-y-1/2 -rotate-6 -scale-x-100 opacity-90 lg:w-32"
        >
          <img src={slime} alt="" className="w-full animate-float" />
        </div>

        <Container className="relative px-6 pt-[calc(10rem+1vh)] lg:px-8">
          <HeroCard className="lg:mr-auto lg:ml-[6%]" />
        </Container>
      </div>
    </section>
  );
}
