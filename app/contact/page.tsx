"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ContactHero from "@/components/ui/ContactHero";
import ContactFormSection from "@/components/ui/ContactFormSection";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <ContactHero />
            <ContactFormSection />

            {/* Map / Location Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-4">
                            Visit Us
                        </p>
                        <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-4">
                            Our <span className="gradient-text">Office</span>
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            545/B, Boulevard Towers by BramhaCorp, Sadhu Vaswani Chowk, opposite Vijay Sales, Camp, Pune, Maharashtra 411001
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card rounded-3xl overflow-hidden border border-card-border"
                    >
                        <div className="relative w-full h-[400px] bg-foreground/5 flex items-center justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.142!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0!2sCamp%2C+Pune!5e0!3m2!1sen!2sin!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                                className="absolute inset-0"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}