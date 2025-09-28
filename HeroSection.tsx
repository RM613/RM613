import HeroSection from '../HeroSection';

export default function HeroSectionExample() {
  const handleCTAClick = (action: string) => {
    console.log('Hero CTA clicked:', action);
  };

  return <HeroSection onCTAClick={handleCTAClick} />;
}