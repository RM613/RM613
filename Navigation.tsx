import Navigation from '../Navigation';

export default function NavigationExample() {
  const handleSectionClick = (section: string) => {
    console.log('Navigation clicked:', section);
  };

  return <Navigation onSectionClick={handleSectionClick} />;
}