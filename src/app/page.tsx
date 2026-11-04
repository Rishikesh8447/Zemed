import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { PulseDivider } from '@/components/sections/PulseDivider';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { BilingualSection } from '@/components/sections/BilingualSection';
import { Statement } from '@/components/sections/Statement';
import { ScreenshotGallery } from '@/components/sections/ScreenshotGallery';
import { FinalCta } from '@/components/sections/FinalCta';

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top" className="flex-grow">
        <Hero />
        <PulseDivider variant="one" />
        <Features />
        <HowItWorks />
        <BilingualSection />
        <PulseDivider variant="two" />
        <Statement />
        <ScreenshotGallery />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
