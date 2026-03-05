import Navbar from "@/components/ui/Navbar";
import VideoHeroSlider from "@/components/ui/VideoHeroSlider";
import ServiceGrid from "@/components/ui/ServiceGrid";
import StatsSection from "@/components/ui/StatsSection";
import InnovationTabs from "@/components/ui/InnovationTabs";
import TrustSection from "@/components/ui/TrustSection";
import CTASection from "@/components/ui/CTASection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-indigo-500/30 selection:text-foreground">
      <Navbar />
      <VideoHeroSlider />
      <ServiceGrid />
      <StatsSection />
      <InnovationTabs />
      <TrustSection />
      <CTASection />
      <Footer />
    </main>
  );
}
