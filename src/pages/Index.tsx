import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { ImpactSection } from "@/components/ImpactSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <ImpactSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
