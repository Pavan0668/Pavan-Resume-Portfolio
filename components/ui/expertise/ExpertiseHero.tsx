"use client";

import { motion } from "framer-motion";

export function ExpertiseHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-[2/1] bg-indigo-500/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-bold tracking-wider uppercase mb-6">
                        Solutions & Services
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Expertise</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-foreground/70 leading-relaxed mb-10">
                        We provide comprehensive IT solutions tailored to your business needs.
                        From managed support to cutting-edge cloud infrastructure, our expert team
                        is dedicated to driving your digital transformation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <div className="px-6 py-3 rounded-2xl glass border border-foreground/5 flex items-center gap-3 shadow-xl">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-foreground/80">Active Support 24/7</span>
                    </div>
                    <div className="px-6 py-3 rounded-2xl glass border border-foreground/5 flex items-center gap-3 shadow-xl">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm font-medium text-foreground/80">Enterprise Solutions</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
