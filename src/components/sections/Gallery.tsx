import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { galleryImages } from '@/data/gallery';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

const loopImages = [...galleryImages, ...galleryImages];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const repeatStartRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    function measure() {
      if (!trackRef.current || !repeatStartRef.current) return;
      // Exact pixel distance from the first image to its repeated copy,
      // so the loop point never drifts from fractional gap rounding.
      setDistance(repeatStartRef.current.offsetLeft - trackRef.current.offsetLeft);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const trackStyle = distance
    ? ({ '--marquee-distance': `${distance}px` } as CSSProperties)
    : undefined;

  return (
    <section id="gallery" className="bg-secondary-blue/10 py-20 lg:py-28">
      <Container className="flex flex-col gap-10 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="right"
          title="כמה תמונות מהתוכנית"
          className="sm:max-w-none sm:whitespace-nowrap"
        />
      </Container>

      <div className="group mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          ref={trackRef}
          style={trackStyle}
          className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]"
        >
          {loopImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              ref={index === galleryImages.length ? repeatStartRef : undefined}
              aria-hidden={index >= galleryImages.length}
              className="w-64 flex-shrink-0 overflow-hidden rounded-xl3 shadow-card sm:w-72 lg:w-80"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
