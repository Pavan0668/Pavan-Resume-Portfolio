"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FAQHero } from "@/components/ui/faq/FAQHero";
import { FAQAccordion } from "@/components/ui/faq/FAQAccordion";
import { FAQContactForm } from "@/components/ui/faq/FAQContactForm";

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <FAQHero />
            <div className="bg-foreground/[0.01]">
                <FAQAccordion />
            </div>
            <FAQContactForm />
            <Footer />
        </main>
    );
}
