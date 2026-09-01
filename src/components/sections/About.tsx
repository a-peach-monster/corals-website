import Container from '@/components/ui/Container';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import castleScene from '@/assets/images/decorative/castle-island.jpeg';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-surface-sky py-16 lg:py-24">
      <Container className="grid items-stretch gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 flex flex-col gap-6 lg:order-1">
          <SectionHeading align="right" eyebrow="הסיפור שמאחורי המסע" title="אודות התוכנית" />

          <p className="text-lg leading-relaxed text-ink-muted">
            בתוכנית ״בעקבות האוצר״ הילדים נכנסים לעולם של הרפתקה ויוצאים למסע מרתק, שבו הם אינם רק משתתפים בסיפור, אלא הופכים לגיבורים שלו.
          </p>

          <p className="text-lg leading-relaxed text-ink-muted">
            במהלך התוכנית הם הופכים לחוקרי אוצר אמיצים, מחפשים רמזים, פוגשים דמויות קסומות ומשתתפים בפעילויות חווייתיות. לאורך הדרך הם מתמודדים עם אתגרים שמאפשרים להם לרכוש כישורי חיים משמעותיים, ובכל תחנה אוספים כלים שיכולים ללוות אותם גם בהתמודדויות ובמצבים מחיי היום יום.
          </p>

          <p className="text-lg leading-relaxed text-ink-muted">
            כגיבורי המסע, הילדים מקבלים תפקיד משמעותי ואחריות בתוך הסיפור. החוויה מחזקת את תחושת המסוגלות העצמית שלהם, מעוררת סקרנות ומעודדת מוטיבציה פנימית להמשיך להשתתף, ללמוד ולגלות. הם לוקחים חלק פעיל במשימות ומבינים שלנוכחות, לרעיונות ולבחירות שלהם יש השפעה אמיתית על המתרחש.
          </p>

          <div className="rounded-xl3 border-2 border-primary-light/60 bg-primary-light/20 p-6">
            <p className="font-heading text-base font-bold text-ink">
              התוכנית נוצרה על ידי קורל מאסטי־שטרנברג, פסיכולוגית חינוכית מומחית
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              במציאות משתנה, שבה ילדים מתמודדים עם עומס רגשי, חוסר ודאות ואתגרים חברתיים, יש חשיבות מיוחדת להעניק להם כבר מגיל צעיר כלים לוויסות רגשי, כישורים חברתיים, גמישות וחוסן.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              מתוך עבודתה בשטח עם ילדים וצוותים חינוכיים, זיהתה קורל את הצורך בדרך שתאפשר לילדים להתחבר ללמידה הרגשית מתוך הנאה וניצוץ בעיניים. מטרתה הייתה ליצור מפגשים שהילדים יחכו להם וירצו לקחת בהם חלק מתוך מוטיבציה פנימית, סקרנות והתלהבות.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              החיבור בין ידע פסיכולוגי, משחק, דמיון ועלילה הוליד את ״בעקבות האוצר״, תוכנית שהופכת את הלמידה הרגשית לחוויה משמעותית, סוחפת וקרובה לעולמם של הילדים. כיום התוכנית פועלת בגני ילדים ברחבי הארץ, במסגרות החינוך הרגיל והחינוך המיוחד.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="order-1 lg:order-2 lg:h-full">
          <div className="h-full min-h-[320px] overflow-hidden rounded-xl3 shadow-soft">
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
