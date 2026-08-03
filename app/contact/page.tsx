"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ContactHero from "@/components/ui/ContactHero";
import ContactFormSection from "@/components/ui/ContactFormSection";
import MapSection from "@/components/ui/MapSection";
import SocialMediaSection from "@/components/ui/SocialMediaSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <ContactHero />
            <ContactFormSection />
            <MapSection />
            <SocialMediaSection />
            <Footer />
        </main>
    );
}