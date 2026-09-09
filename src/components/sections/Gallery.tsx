import { useEffect, useState, type ComponentType } from 'react';
import type { MarqueeProps } from 'react-fast-marquee';
import { galleryImages } from '@/data/gallery';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

// react-fast-marquee is a client-only, CJS-only package that doesn't interop
// cleanly with the ESM SSR bundle used for prerendering (scripts/prerender.mjs),
// and pairing it with React.lazy + Suspense causes hydration error #419
// (renderToString's Suspense output lacks the streaming markers hydrateRoot
// needs). Instead it's imported imperatively after mount: both the server
// render and the client's pre-hydration render show the same plain,
// crawlable image row, then the effect below swaps in the real marquee.
let MarqueeComponent: ComponentType<MarqueeProps> | null = null;

function GalleryTiles({ className = '' }: { className?: string }) {
  return (
    <>
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className={`w-64 flex-shrink-0 overflow-hidden rounded-xl3 shadow-card sm:w-72 lg:w-80 ${className}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-72 w-full object-cover"
          />
        </div>
      ))}
    </>
  );
}

export default function Gallery() {
  const [Marquee, setMarquee] = useState<ComponentType<MarqueeProps> | null>(() => MarqueeComponent);

  useEffect(() => {
    if (MarqueeComponent) {
      setMarquee(() => MarqueeComponent);
      return;
    }
    let cancelled = false;
    import('react-fast-marquee').then((mod) => {
      MarqueeComponent = mod.default;
      if (!cancelled) setMarquee(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="gallery" className="bg-surface-sky py-16 lg:py-24">
      <Container className="flex flex-col gap-10 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="right"
          title="כמה תמונות מהתוכנית"
          className="sm:max-w-none sm:whitespace-nowrap"
        />
      </Container>

      <div
        dir="ltr"
        className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        {Marquee ? (
          <Marquee autoFill speed={45} gradient={false}>
            <GalleryTiles className="mx-3" />
          </Marquee>
        ) : (
          <div className="flex overflow-x-auto px-3">
            <GalleryTiles className="mx-3" />
          </div>
        )}
      </div>
    </section>
  );
}
