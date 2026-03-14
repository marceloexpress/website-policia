import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ParticlesCanvas from "@/components/ParticlesCanvas";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HierarchySection from "@/components/HierarchySection";
import VehiclesSection from "@/components/VehiclesSection";
import SpecialUnitsSection from "@/components/SpecialUnitsSection";
import GunPermitsSection from "@/components/GunPermitsSection";
import FAQSection from "@/components/FAQSection";
import NewsSection from "@/components/NewsSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import FooterSection from "@/components/FooterSection";

type Section = "inicio" | "hierarquia" | "viaturas" | "unidades" | "portes" | "faq" | "noticias" | "candidaturas";

const sectionComponents: Record<Section, React.FC> = {
  inicio: HeroSection,
  hierarquia: HierarchySection,
  viaturas: VehiclesSection,
  unidades: SpecialUnitsSection,
  portes: GunPermitsSection,
  faq: FAQSection,
  noticias: NewsSection,
  candidaturas: ApplicationsSection,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("inicio");

  const ActiveComponent = sectionComponents[activeSection];

  return (
    <div className="min-h-screen relative">
      <ParticlesCanvas />
      <div className="relative z-10">
        <Header activeSection={activeSection} onNavigate={setActiveSection} />
        <main className="min-h-[80vh]">
          <AnimatePresence mode="wait">
            <ActiveComponent key={activeSection} />
          </AnimatePresence>
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
