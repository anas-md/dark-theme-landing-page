import { Banner } from '@/components/Banner';
import { FAQs } from '@/components/FAQs';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { LogoTicker } from '@/components/LogoTicker';
import { Navbar } from '@/components/Navbar';
import { ProductShowcase } from '@/components/ProductShowcase';
export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
    </>
  );
}
