import { BookOpen, FileStack, MapPinned, ScrollText, Users2 } from 'lucide-react';
import { includedIntro, includedItems } from '@/data/included';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import slimeMap from '@/assets/images/decorative/slime-treasure-map.png';

const iconMap: Record<string, typeof BookOpen> = {
  guidebook: BookOpen,
  characters: Users2,
  map: MapPinned,
  certificates: ScrollText,
  appendices: FileStack,
};

export default function WhatsIncluded() {
  return (
    <section id="included" className="relative overflow-hidden bg-surface-sky py-20 lg:py-28">
      <Container className="grid items-stretch gap-14 px-5 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <Reveal className="order-2 lg:order-1 lg:h-full">
          <div className="h-full min-h-[320px] overflow-hidden rounded-xl3 shadow-soft">
            <img
              src={slimeMap}
              alt="דמות קסומה מציגה מפת אוצר ותיבת אוצרות מתוך ערכת בעקבות האוצר"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <SectionHeading
            align="right"
            eyebrow="בתוך הערכה"
            title={includedIntro.title}
            description={includedIntro.description}
          />

          <div className="flex flex-col gap-4">
            {includedItems.map((item, index) => {
              const Icon = iconMap[item.id] ?? BookOpen;
              return (
                <Reveal
                  key={item.id}
                  delayMs={index * 80}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-card"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent-gold/15 text-accent-terracotta">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
