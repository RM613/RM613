import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CoursesSection from "@/components/CoursesSection";
import PricingSection from "@/components/PricingSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ConversationalAI from "@/components/ConversationalAI";
import CourseModal, { Course } from "@/components/CourseModal";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSectionClick = (section: string) => {
    console.log('Navigation clicked:', section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = (action: string) => {
    console.log('CTA clicked:', action);
    handleSectionClick(action);
  };

  const handleCourseClick = (course: Course) => {
    console.log('Course clicked:', course.title);
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleEnroll = (courseId: string) => {
    console.log('Enrolling in course:', courseId);
    toast({
      title: "Enrollment Started!",
      description: `You've started the enrollment process for ${selectedCourse?.title}. Our team will contact you soon.`,
    });
    setIsModalOpen(false);
  };

  const handlePlanSelect = (planId: string) => {
    console.log('Plan selected:', planId);
    if (planId === 'college') {
      toast({
        title: "Contact Sales",
        description: "Our sales team will reach out to discuss your institution's needs.",
      });
    } else {
      toast({
        title: "Plan Selected!",
        description: "Redirecting to payment gateway...",
      });
    }
  };

  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Contact form submitted:', data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins">
      <Navigation onSectionClick={handleSectionClick} />
      <main>
        <HeroSection onCTAClick={handleCTAClick} />
        <ProblemSection />
        <SolutionSection />
        <CoursesSection onCourseClick={handleCourseClick} />
        <PricingSection onPlanSelect={handlePlanSelect} />
        <MissionSection />
        <ContactSection onContactSubmit={handleContactSubmit} />
      </main>
      <Footer />
      
      {/* Eleven Labs Conversational AI Widget */}
      <ConversationalAI />
      
      <CourseModal
        course={selectedCourse}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnroll={handleEnroll}
      />
    </div>
  );
}