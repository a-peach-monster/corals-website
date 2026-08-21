import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Audience from '@/components/sections/Audience';
import WhatsIncluded from '@/components/sections/WhatsIncluded';
import Faq from '@/components/sections/Faq';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
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
