import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about-section2";
import LearnWithUs from "@/components/learn-with-us";
import PricingSection from "@/components/pricing-section";
import { UpcomingEventsComponent } from "@/components/upcoming-events";
import { TestimonialSectionComponent } from "@/components/testimonial-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <LearnWithUs />
        <PricingSection />
        <UpcomingEventsComponent />
        <TestimonialSectionComponent />
        {/* Add other sections here as needed */}
      </main>
      <Footer />
    </div>
  )
}