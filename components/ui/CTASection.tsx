"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function CTASection() {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call and loading skeleton state
        setTimeout(() => {
            setStatus("success");

            // Reset after success
            setTimeout(() => {
                setStatus("idle");
            }, 4000);
        }, 2000);
    };

    return (
        <section id="contact" className="py-32 relative z-10 bg-background transition-colors">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/50 via-cyan-400/50 to-transparent overflow-hidden shadow-2xl"
                >
                    {/* Inner card */}
                    <div className="bg-card-bg rounded-3xl p-10 md:p-16 relative w-full h-full flex flex-col items-center text-center backdrop-blur-xl border border-border">

                        {/* Background glow in card */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 relative z-10">
                            Ready to automate your future?
                        </h2>
                        <p className="text-foreground/70 mb-10 text-lg max-w-2xl relative z-10 font-medium">
                            Get in touch with JK Computers today to discuss custom LLM fine-tuning, autonomous agent deployment, or your core IT infrastructure needs.
                        </p>

                        <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 relative z-10">

                            <AnimatePresence mode="wait">
                                {status === "idle" && (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col gap-4 w-full"
                                    >
                                        <input
                                            type="email"
                                            placeholder="Enter your work email"
                                            className="w-full h-14 rounded-xl bg-background/50 backdrop-blur-sm px-6 text-foreground placeholder:text-foreground/50 outline-none border border-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner relative z-10"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="w-full h-14 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.6)] active:scale-[0.98]"
                                        >
                                            Schedule a Consultation <Send className="w-4 h-4" />
                                        </button>
                                    </motion.div>
                                )}

                                {status === "loading" && (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col gap-4 w-full"
                                    >
                                        {/* Loading Skeletons */}
                                        <div className="w-full h-14 rounded-xl bg-foreground/5 animate-pulse" />
                                        <div className="w-full h-14 rounded-xl bg-indigo-500/20 animate-pulse border border-indigo-500/30 flex items-center justify-center gap-3">
                                            <div className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="h-2 w-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </motion.div>
                                )}

                                {status === "success" && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full h-32 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center justify-center gap-3 text-emerald-600 dark:text-emerald-400"
                                    >
                                        <CheckCircle2 className="w-10 h-10" />
                                        <span className="font-semibold text-lg">Request Sent Successfully!</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
