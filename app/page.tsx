import { CTASection } from "@/components/CTASection";
import { FeaturedTeachers } from "@/components/FeaturedTeachers";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { StatsSection } from "@/components/StatsSection";
import { SubjectCategories } from "@/components/SubjectCategories";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturedTeachers />
      <SubjectCategories />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
