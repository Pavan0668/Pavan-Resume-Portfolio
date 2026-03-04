import { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroCarousel from "@/components/ui/company/HeroCarousel";
import AboutUsSection from "@/components/ui/company/AboutUsSection";
import AchievementsSection from "@/components/ui/company/AchievementsSection";
import PartnersSection from "@/components/ui/company/PartnersSection";
import ScrollToHash from "@/components/ui/company/ScrollToHash";

export const metadata: Metadata = {
    title: "Company | JKC Total IT Solutions",
    description:
        "Learn about JKC Total IT Solutions — 30+ years of delivering enterprise-grade IT infrastructure, software services, and technology consulting.",
};

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground relative selection:bg-indigo-500/30 selection:text-foreground">
            <Navbar />
            <ScrollToHash />
            <HeroCarousel />

            {/* Divider line */}
            <div className="border-t border-foreground/10" />

            <AboutUsSection />

            {/* Divider line */}
            <div className="border-t border-foreground/10" />

            <AchievementsSection />

            {/* Divider line */}
            <div className="border-t border-foreground/10" />

            <PartnersSection />

            <Footer />
        </main>
    );
}
