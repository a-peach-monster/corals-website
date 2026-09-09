import { siteConfig } from '@/config/site';
import LegalLayout from '@/components/layout/LegalLayout';
import SEO from '@/components/SEO';

export default function AccessibilityPage() {
  const { accessibility, contact } = siteConfig;

  return (
    <LegalLayout title="הצהרת נגישות" updated={accessibility.statementLastUpdated}>
      <SEO
        path="/accessibility"
        title={`הצהרת נגישות | ${siteConfig.name}`}
        description={`הצהרת הנגישות של אתר "${siteConfig.name}" בהתאם ל${accessibility.standard}.`}
      />
      <p>
        אתר "{siteConfig.name}" פועל להנגשת שירותיו לכלל הציבור, לרבות אנשים עם מוגבלות, מתוך
        אמונה כי לכל אדם מגיעה גישה שווה למידע ולשירות. האתר תוכנן ונבנה תוך עמידה בדרישות{' '}
        {accessibility.standard}, ובהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
        לשירות), התשע"ג-2013.
      </p>

      <h2>התאמות הנגישות באתר</h2>
      <ul>
        <li>מבנה סמנטי ברור עם כותרות היררכיות, אזורי ניווט מסומנים ותיאורי טקסט חלופי לתמונות.</li>
        <li>תמיכה מלאה בניווט וב-focus מקלדת, כולל אינדיקציה חזותית ברורה לאיבר הפעיל.</li>
        <li>ניגודיות צבעים נבדקת מול רקע הטקסט בהתאם לרמה AA.</li>
        <li>
          סרגל נגישות צף המאפשר הגדלת טקסט, הפעלת ניגודיות גבוהה, הדגשת קישורים ועצירת אנימציות
          ותנועה - ההעדפות נשמרות אוטומטית לביקורים הבאים.
        </li>
        <li>תמיכה מלאה בכיווניות RTL וקריאות תוכן בעברית באמצעות טכנולוגיות מסייעות (קוראי מסך).</li>
        <li>אלמנטים אינטראקטיביים (תפריטים, אקורדיון שאלות נפוצות, קרוסלת המלצות) נגישים גם בניווט מקלדת ומתוארים עבור קוראי מסך.</li>
      </ul>

      <h2>מגבלות ידועות</h2>
      <p>
        חרף מאמצינו להנגיש את כלל חלקי האתר, ייתכנו רכיבים או דפים שטרם הונגשו במלואם. אנו
        פועלים באופן שוטף לאיתור ותיקון בעיות נגישות ונשמח לקבל פניות בנושא.
      </p>

      <h2>יצירת קשר בנושאי נגישות</h2>
      <p>
        נתקלתם בבעיית נגישות באתר? נשמח שתפנו אלינו ונטפל בפנייתכם בהקדם האפשרי.
      </p>
      <ul>
        <li>
          <strong>רכז/ת הנגישות:</strong> {accessibility.contactPersonName}
        </li>
        <li>
          <strong>דוא"ל:</strong> {contact.email}
        </li>
      </ul>

      <p>הצהרת נגישות זו עודכנה לאחרונה בתאריך {accessibility.statementLastUpdated}.</p>
    </LegalLayout>
  );
}
