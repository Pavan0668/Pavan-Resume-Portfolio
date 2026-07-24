"use client";

import { useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import VideoHeroSlider from "@/components/ui/VideoHeroSlider";
import ServiceGrid from "@/components/ui/ServiceGrid";
import StatsSection from "@/components/ui/StatsSection";
import InnovationTabs from "@/components/ui/InnovationTabs";
import TrustSection from "@/components/ui/TrustSection";
import CTASection from "@/components/ui/CTASection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("home-scroll-snap");
    document.body.classList.add("home-scroll-snap");

    return () => {
      document.documentElement.classList.remove("home-scroll-snap");
      document.body.classList.remove("home-scroll-snap");
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-indigo-500/30 selection:text-foreground">
      <Navbar />
      <div id="home-hero" className="home-snap-section">
        <VideoHeroSlider />
      </div>
      <div id="capabilities-expertise" className="home-snap-section">
        <ServiceGrid />
      </div>
      <div id="our-impact" className="home-snap-section">
        <StatsSection />
      </div>
      <div className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center">
        <InnovationTabs />
      </div>
      <div className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center">
        <TrustSection />
      </div>
      <div className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center">
        <CTASection />
      </div>
      <div className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center">
        <Footer />
      </div>
    </main>
  );
}
