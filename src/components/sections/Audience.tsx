import { audienceIntro, audienceItems } from '@/data/audience';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Audience() {
  return (
    <section id="audience" className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-14 px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="מיועד עבורכם" title={audienceIntro.title} description={audienceIntro.description}>
          <p className="font-heading text-base font-semibold text-primary-dark">
            {audienceIntro.subline}
          </p>
        </SectionHeading>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audienceItems.map((item, index) => (
            <Reveal
              key={item.id}
              delayMs={index * 90}
              className="flex flex-col items-center gap-4 rounded-xl3 bg-gradient-to-b from-surface-sky to-white p-7 text-center shadow-card transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-card">
                {item.emoji}
              </span>
              <h3 className="font-heading text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
