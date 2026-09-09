import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Audience from '@/components/sections/Audience';
import WhatsIncluded from '@/components/sections/WhatsIncluded';
import Faq from '@/components/sections/Faq';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import SEO from '@/components/SEO';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title={`${siteConfig.name} | ${siteConfig.tagline}`}
        description="בעקבות האוצר היא תכנית רגשית לגני ילדים ולגיל הרך. ערכה חווייתית המקדמת למידה רגשית, מפתחת חוסן רגשי, כישורים חברתיים ומסוגלות דרך מסע והרפתקה שילדים אוהבים."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.tagline,
          founder: {
            '@type': 'Person',
            name: siteConfig.creator,
          },
        }}
      />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Audience />
      <WhatsIncluded />
      <Faq />
      <Gallery />
      <Contact />
    </>
  );
}
