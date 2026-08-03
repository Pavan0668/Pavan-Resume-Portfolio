"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Clock } from "lucide-react";

export default function MapSection() {
    return (
        <section className="py-20 md:py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-400/5 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-cyan-400 text-sm font-bold mb-6">
                        <Navigation className="w-4 h-4" />
                        <span>VISIT US</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
                        Our <span className="gradient-text">Office</span>
                    </h2>

                    <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
                        545/B, Boulevard Towers by BramhaCorp, Sadhu Vaswani Chowk,
                        opposite Vijay Sales, Camp, Pune, Maharashtra 411001
                    </p>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    {/* Animated gradient border wrapper */}
                    <div className="relative p-[2px] rounded-3xl overflow-hidden animate-border-rotate">
                        <div className="relative rounded-3xl overflow-hidden bg-background shadow-2xl">
                            {/* Map iframe */}
                            <div className="relative w-full h-[400px] md:h-[500px] bg-foreground/5">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.142!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0!2sCamp%2C+Pune!5e0!3m2!1sen!2sin!4v1"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="JKC Solutions Office Location"
                                    className="absolute inset-0"
                                />

                                {/* Subtle overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

                                {/* Floating info card */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="absolute top-6 left-6 max-w-xs glass-card rounded-2xl p-5 border border-card-border shadow-xl backdrop-blur-xl"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-indigo-500 dark:text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1">JKC Solutions</h3>
                                            <p className="text-xs text-foreground/60 leading-relaxed mb-3">
                                                545/B, Boulevard Towers by BramhaCorp,<br />
                                                Sadhu Vaswani Chowk, Camp, Pune
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-foreground/50">
                                                <Clock className="w-3 h-3" />
                                                Mon - Sat: 9AM - 7PM
                                            </div>
                                        </div>
                                    </div>

                                    <a
                                        href="https://maps.google.com/?q=Boulevard+Towers+Camp+Pune"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-cyan-300 transition-colors duration-300 group"
                                    >
                                        Get Directions
                                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}