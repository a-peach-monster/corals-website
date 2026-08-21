import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/gallery';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>('[data-gallery-card]');
    const step = card ? card.offsetWidth + 24 : node.clientWidth * 0.8;
    // RTL: "next" (visually left) means scrolling toward negative scrollLeft.
    node.scrollBy({ left: direction * -step, behavior: 'smooth' });
  }

  return (
    <section id="gallery" className="bg-surface-sky/60 py-20 lg:py-28">
      <Container className="flex flex-col gap-10 px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SectionHeading align="right" title="כמה תמונות מהתוכנית" className="sm:max-w-md" />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="גלול לתמונות הקודמות"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-dark shadow-card transition-transform hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="גלול לתמונות הבאות"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-dark shadow-card transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="snap-x-mandatory flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              data-gallery-card
              className="snap-center-item w-[78%] flex-shrink-0 overflow-hidden rounded-xl3 shadow-card sm:w-[45%] lg:w-[30%]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
