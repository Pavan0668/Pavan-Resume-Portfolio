"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Subtle Mesh Gradients for background depending on theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-normal pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[80px] mix-blend-normal pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-indigo-600 dark:text-cyan-300 text-sm font-semibold mb-8 border-indigo-500/30"
                >
                    Pioneering the Future of IT & AI
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight text-foreground"
                >
                    JK Computers: <br />
                    <span className="gradient-text glow-text block mt-2">End-to-End Solutions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-12 font-medium"
                >
                    A perfect hybrid of traditional IT excellence and futuristic AI leadership. We scale your enterprise efficiency to new heights.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <button className="relative h-14 px-10 rounded-full bg-background border border-foreground/10 hover:bg-foreground/5 text-foreground font-bold flex items-center gap-3 transition-all">
                            Get Started <ArrowRight className="w-5 h-5 text-indigo-500 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)'
                }}
            />
        </section>
    );
}
