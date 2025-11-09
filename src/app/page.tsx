import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <GetStartedSection />
        <FeaturesSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
