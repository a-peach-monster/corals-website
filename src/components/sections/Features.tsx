import { features } from '@/data/features';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import FeatureIcon from '@/components/ui/FeatureIcon';

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <Container className="flex flex-col items-center gap-14 px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="למה בעקבות האוצר"
          title="מסע אחד, ארבעה תחומי התפתחות"
          description="כל תחנה במסע נבנתה כך שתעניק לילדים כלים מעשיים לחיים - דרך משחק, דמיון וחוויה משותפת."
        />

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal
              key={feature.id}
              delayMs={index * 90}
              className="group flex flex-col gap-4 rounded-xl3 border border-border bg-surface-parchment/40 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light/25 to-secondary-blue/20 text-primary-dark transition-transform duration-300 group-hover:scale-110">
                <FeatureIcon icon={feature.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-heading text-xl font-bold text-ink">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
