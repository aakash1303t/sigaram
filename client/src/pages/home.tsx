import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProgramsSection from "@/components/programs-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import VirtualTourSection from "@/components/virtual-tour-section";
import EventsSection from "@/components/events-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />
      {/* <VirtualTourSection /> */}
      {/* <EventsSection /> */}
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
