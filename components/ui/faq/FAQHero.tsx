"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageSquare } from "lucide-react";

export function FAQHero() {
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
                        <HelpCircle className="w-4 h-4" />
                        <span>FAQ & SUPPORT</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                        How can we <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
                            help you?
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl text-foreground/70 leading-relaxed mb-12">
                        Find answers to common questions about our services, support, and how
                        JK Computers can empower your business with cutting-edge IT and AI solutions.
                    </p>

                    <div className="flex justify-center">
                        <motion.a
                            href="#contact-form"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all"
                        >
                            <MessageSquare className="w-5 h-5" />
                            Can't find your answer?
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
