"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
    "End-to-end IT infrastructure solutions",
    "Enterprise technology consulting",
    "Custom software development services",
    "Cloud migration & managed services",
    "Cybersecurity & compliance advisory",
    "30+ years of industry expertise",
];

export default function AboutUsSection() {
    return (
        <section id="about-us" className="py-24 md:py-32 relative overflow-hidden bg-background transition-colors">
            {/* Subtle background glow */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-4">
                            About Us
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
                            Trusted IT Partner for{" "}
                            <span className="gradient-text">Three Decades</span>
                        </h2>
                        <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-8">
                            JKC Total IT Solutions is a leading information technology company delivering
                            end-to-end IT infrastructure solutions, software services, and enterprise
                            technology consulting. With <strong className="text-foreground">30+ years of industry expertise</strong>,
                            we have been at the forefront of digital transformation, empowering businesses
                            across sectors with reliable, secure, and innovative technology solutions.
                        </p>
                        <p className="text-foreground/70 text-base md:text-lg leading-relaxed mb-10">
                            From small businesses to large enterprises, our mission is to bridge the gap
                            between technology and business performance, providing solutions that are both
                            future-ready and efficient.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    className="flex items-start gap-2.5"
                                >
                                    <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-foreground/80 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop"
                                alt="Modern IT workspace"
                                className="w-full h-[400px] md:h-[500px] object-cover"
                                loading="lazy"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
                        </div>

                        {/* Decorative accent card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 glass-card rounded-xl p-5 shadow-xl max-w-[200px]"
                        >
                            <p className="text-3xl font-black gradient-text mb-1">30+</p>
                            <p className="text-sm text-foreground/70 font-medium">Years of trusted excellence in IT solutions</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
