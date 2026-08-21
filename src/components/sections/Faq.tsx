import { faqItems } from '@/data/faq';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Accordion from '@/components/ui/Accordion';

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-12 px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="עוד לא ברור?" title="שאלות נפוצות" />

        <div className="w-full max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
