import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import PlatformOverview from "@/components/landing/PlatformOverview";
import DashboardShowcase from "@/components/landing/DashboardShowcase";
import FeaturesSection from "@/components/landing/FeaturesSection";
import TechStackSection from "@/components/landing/TechStackSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ContactSection from "@/components/landing/ContactSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PlatformOverview />
      <DashboardShowcase />
      <FeaturesSection />
      <TechStackSection />
      <BenefitsSection />
      <ContactSection />
    </main>
  );
};

export default Index;
