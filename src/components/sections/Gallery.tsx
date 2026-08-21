import Marquee from 'react-fast-marquee';
import { galleryImages } from '@/data/gallery';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Gallery() {
  return (
    <section id="gallery" className="bg-surface-sky py-20 lg:py-28">
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
        <Marquee autoFill pauseOnHover speed={45} gradient={false}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="mx-3 w-64 flex-shrink-0 overflow-hidden rounded-xl3 shadow-card sm:w-72 lg:w-80"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
