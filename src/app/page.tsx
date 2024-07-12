import { Banner } from '@/components/Banner';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { LogoTicker } from '@/components/LogoTicker';
import { Navbar } from '@/components/Navbar';
export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
    </>
  );
}
