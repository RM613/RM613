import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Contact form submitted:', data);
  };

  return <ContactSection onContactSubmit={handleContactSubmit} />;
}