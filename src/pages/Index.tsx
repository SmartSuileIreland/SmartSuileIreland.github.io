
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Applications } from "@/components/Applications";
import { Team } from "@/components/Team";
import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <HowItWorks />
      <Applications />
      <Team />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
