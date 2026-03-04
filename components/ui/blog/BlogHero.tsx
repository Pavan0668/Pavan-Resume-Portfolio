"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export function BlogHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-bold mb-6">
                        <BookOpen className="w-4 h-4" />
                        <span>INSIGHTS & INNOVATION</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                        The Future of <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
                            Technology
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl text-foreground/70 leading-relaxed mb-12">
                        Deep dives into Artificial Intelligence, Cloud Infrastructure, and the human
                        stories behind digital transformation at JK Computers.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/50">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            Latest AI Trends
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-cyan-500" />
                            Expert IT Advice
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            Success Stories
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </section>
    );
}
