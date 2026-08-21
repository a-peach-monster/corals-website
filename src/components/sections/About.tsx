import { Compass, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import castleScene from '@/assets/images/decorative/castle-island.jpeg';

const journeyTraits = [
  { id: 'self-efficacy', icon: Compass, label: 'לשפר את המסוגלות העצמית' },
  { id: 'resilience', icon: ShieldCheck, label: 'חוסן' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-section-gradient py-20 lg:py-28">
      <Container className="grid items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 flex flex-col gap-6 lg:order-1">
          <SectionHeading align="right" eyebrow="הסיפור שמאחורי המסע" title="אודות התוכנית" />

          <p className="text-lg leading-relaxed text-ink-muted">
            ברוכים הבאים ל"בעקבות האוצר" – תוכנית רגשית-חווייתית לגיל הרך, שניתנת להפעלה
            באמצעות ערכה מוכנה ומושקעת. מדובר במסע מרתק המזמין את הילדים לחקור עולם חוויתי שבו
            הם הגיבורים!
          </p>

          <p className="text-lg leading-relaxed text-ink-muted">
            במהלך התוכנית הילדים יהפכו לחוקרי אוצר אמיצים, יפגשו דמויות קסומות ויתמודדו עם
            אתגרים שיאפשרו להם לרכוש מיומנויות וכישורים מהותיים. כל תחנה במסע תעניק לילדים כלים
            מעשיים -
          </p>

          <div className="flex flex-wrap gap-3">
            {journeyTraits.map((trait) => (
              <span
                key={trait.id}
                className="inline-flex items-center gap-2 rounded-full bg-primary-dark/10 px-4 py-2 text-sm font-semibold text-primary-dark"
              >
                <trait.icon className="h-4 w-4" aria-hidden="true" />
                {trait.label}
              </span>
            ))}
          </div>

          <div className="rounded-xl3 border border-accent-gold/30 bg-accent-gold/10 p-6">
            <p className="font-heading text-base font-bold text-ink">
              התוכנית נוצרה על ידי קורל מאסטי-שטרנברג
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              מתוך התנסויות מעשיות בשטח, זיהתה קורל את הצורך בתוכנית שתצליח לרתום את הילדים
              ללמידה רגשית על ידי יצירת חוויה סוחפת של משחק ודמיון, בדרך שמעוררת סקרנות ומעודדת
              מוטיבציה פנימית לקחת חלק. כך נולדה "בעקבות האוצר" – תוכנית שהילדים נהנים ממנה שוב
              ושוב, ומצפים למפגשים הבאים בהתרגשות.
            </p>
          </div>

          <p className="text-lg font-medium leading-relaxed text-ink">
            במהלך התוכנית, הילדים מרגישים חלק מסיפור גדול, מסעיר וקסום – שבו הם הגיבורים, והם
            אלו שמשפיעים על העלילה.
          </p>
        </Reveal>

        <Reveal delayMs={120} className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-xl3 shadow-soft">
            <img
              src={castleScene}
              alt="איור נופי של טירה מוקפת בים, הרים ואי קסום - עולם המסע של בעקבות האוצר"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
