import { HeroSection } from "@/components/HeroSection";
import { NowSection } from "@/components/NowSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { ContentSection } from "@/components/ContentSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      {/* SEO Meta */}
      <title>Wolfcito — Web3 Builder | DenLabs</title>
      <meta
        name="description"
        content="Building DenLabs: onchain tools & mini-products. Spray, identity, treasury rails, x402 / ERC-8004 experiments."
      />
      
      <main className="min-h-screen bg-background">
        {/* Subtle background glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative container max-w-lg mx-auto px-4">
          <HeroSection />
          <NowSection />
          <ProjectsSection />
          <EcosystemSection />
          <ContentSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
