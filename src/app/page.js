import Image from "next/image";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeatureGrid from '../components/FeatureGrid';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeatureGrid />
    </main>
  );
}
