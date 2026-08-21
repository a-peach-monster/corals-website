import { faqItems } from '@/data/faq';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';
import compass from '@/assets/images/decorative/compass.png';

export default function Faq() {
  return (
    <section id="faq" className="bg-accent-pink/10 py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-4 px-5 sm:px-6 lg:px-8">
        <img
          src={compass}
          alt=""
          aria-hidden="true"
          className="pointer-events-none mx-auto w-16 animate-spin-slow opacity-90 lg:w-20"
        />
        <SectionHeading title="שאלות נפוצות" className="-mt-2" />

        <div className="w-full max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
