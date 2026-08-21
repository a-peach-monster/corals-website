import { useCallback, useEffect, useRef, useState, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused || count <= 1) return;
    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, count]);

  function onTouchStart(event: TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function onTouchEnd(event: TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      // RTL layout: a leftward swipe should reveal the next slide.
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
  }

  return (
    <section id="testimonials" className="bg-surface-parchment py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="מה אומרים עלינו"
          title="המלצות"
          description="גננות ואנשי חינוך שמעבירים את התוכנית משתפים בהתרשמותם."
        />

        <div
          className="relative w-full max-w-3xl lg:max-w-5xl xl:max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="המלצות מגננות ואנשי חינוך"
            className="overflow-hidden rounded-xl3 bg-white shadow-soft"
          >
            <div
              dir="ltr"
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${activeIndex * -100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  dir="rtl"
                  className="w-full flex-shrink-0 px-8 py-10 sm:px-12 sm:py-14"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} מתוך ${count}`}
                  aria-hidden={activeIndex !== index}
                >
                  <Quote className="h-10 w-10 text-accent-gold" aria-hidden="true" />
                  <p className="mt-4 text-lg leading-relaxed text-ink sm:text-xl">
                    {testimonial.quote}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="font-heading text-base font-bold text-ink">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-ink-muted">{testimonial.role}</p>
                    </div>
                    <div className="flex gap-0.5" aria-label="דירוג 5 מתוך 5 כוכבים">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-accent-gold text-accent-gold"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="ההמלצה הקודמת"
                className="absolute -right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-dark shadow-card transition-transform hover:scale-110 sm:flex"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="ההמלצה הבאה"
                className="absolute -left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-dark shadow-card transition-transform hover:scale-110 sm:flex"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`מעבר להמלצה ${index + 1}`}
                    aria-current={activeIndex === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? 'w-8 bg-primary-dark' : 'w-2.5 bg-primary-dark/25'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <Button href={siteConfig.googleReviewsUrl} target="_blank" rel="noopener noreferrer" variant="ghost">
          לכל הביקורות בגוגל
        </Button>
      </Container>
    </section>
  );
}
