"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

type ConsultationStatus = "idle" | "loading" | "success" | "error";

export default function CTASection() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<ConsultationStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email
        if (!email.trim()) {
            setErrorMsg("Please enter your work email");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setErrorMsg("Please enter a valid work email address");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const response = await fetch("/api/consultation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send consultation request");
            }

            setStatus("success");
            setEmail("");

            // Reset after success
            setTimeout(() => {
                setStatus("idle");
            }, 5000);
        } catch (error) {
            console.error("Consultation request error:", error);
            setErrorMsg(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
            setStatus("error");

            // Reset after error
            setTimeout(() => {
                setStatus("idle");
            }, 4000);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-24 relative z-10 bg-background transition-colors overflow-hidden">
            {/* Floating background accents */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/50 via-cyan-400/50 to-transparent overflow-hidden shadow-2xl"
                >
                    {/* Inner card */}
                    <div className="bg-card-bg rounded-3xl p-8 md:p-12 lg:p-16 relative w-full h-full backdrop-blur-xl border border-border">
                        {/* Background glow in card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
                            {/* Left Image */}
                            <div className="w-full lg:w-1/4 flex justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="relative"
                                >
                                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-xl border border-indigo-500/20 rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                                        <img src="/images/blog/ai-agent-dev.png" alt="AI Automation" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border border-cyan-400/20 rotate-6">
                                        <img src="/images/blog/generative-ai.png" alt="Generative AI" className="w-full h-full object-cover" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Center Content */}
                            <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4">
                                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Automate</span> Your Future?
                                </h2>
                                <p className="text-foreground/70 mb-8 text-sm md:text-base max-w-xl font-medium">
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
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter your work email"
                                                    className="w-full h-12 md:h-14 rounded-xl bg-background/50 backdrop-blur-sm px-6 text-foreground placeholder:text-foreground/50 outline-none border border-border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-inner relative z-10 text-sm md:text-base"
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full h-12 md:h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.6)] active:scale-[0.98] text-sm md:text-base"
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
                                                <div className="w-full h-12 md:h-14 rounded-xl bg-foreground/5 animate-pulse" />
                                                <div className="w-full h-12 md:h-14 rounded-xl bg-indigo-500/20 animate-pulse border border-indigo-500/30 flex items-center justify-center gap-3">
                                                    <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />
                                                    <span className="text-sm font-semibold text-indigo-600 dark:text-cyan-400">Sending Request...</span>
                                                </div>
                                            </motion.div>
                                        )}

                                        {status === "success" && (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="w-full h-28 md:h-32 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col items-center justify-center gap-3 text-emerald-600 dark:text-emerald-400"
                                            >
                                                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 animate-check-pop" />
                                                <span className="font-semibold text-base md:text-lg">Request Sent Successfully!</span>
                                                <span className="text-xs md:text-sm text-emerald-600/70 dark:text-emerald-400/70">Check your inbox for confirmation.</span>
                                            </motion.div>
                                        )}

                                        {status === "error" && (
                                            <motion.div
                                                key="error"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="w-full h-28 md:h-32 rounded-xl bg-red-500/10 border border-red-500/30 flex flex-col items-center justify-center gap-3 text-red-600 dark:text-red-400 animate-shake"
                                            >
                                                <AlertCircle className="w-8 h-8 md:w-10 md:h-10" />
                                                <span className="font-semibold text-base md:text-lg">
                                                    {errorMsg || "Failed to send request. Please try again."}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>
                            </div>

                            {/* Right Image */}
                            <div className="w-full lg:w-1/4 flex justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative"
                                >
                                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-xl border border-cyan-500/20 rotate-[3deg] hover:rotate-0 transition-transform duration-500">
                                        <img src="/images/expertise/automation.jpg" alt="Automation" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border border-indigo-400/20 -rotate-6">
                                        <img src="/images/blog/agentic-ai.png" alt="Agentic AI" className="w-full h-full object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}