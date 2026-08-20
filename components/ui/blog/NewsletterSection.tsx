"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Sparkles, Bell, Zap, Loader2, AlertCircle } from "lucide-react";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

export function NewsletterSection() {
    const [status, setStatus] = useState<SubscribeStatus>("idle");
    const [email, setEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setErrorMsg("Please enter a valid email address");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to subscribe");
            }

            setStatus("success");
            setEmail("");
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Subscription error:", error);
            setErrorMsg(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <section className="py-20 md:py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[10%] right-[10%] w-72 h-72 bg-cyan-400/10 rounded-full blur-[120px] animate-blob-delay" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="relative rounded-[3rem] p-[1.5px] bg-gradient-to-br from-indigo-500/50 via-cyan-400/30 to-transparent"
                >
                    <div className="relative rounded-[3rem] overflow-hidden bg-card-bg backdrop-blur-xl border border-border">
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10 animate-gradient-shift" />

                        {/* Decorative elements */}
                        <div className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center animate-float-slow pointer-events-none">
                            <Sparkles className="w-8 h-8 text-indigo-500/60" />
                        </div>
                        <div className="absolute bottom-8 left-8 w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center animate-float-slow pointer-events-none" style={{ animationDelay: "2s" }}>
                            <Zap className="w-6 h-6 text-cyan-400/60" />
                        </div>

                        <div className="relative p-10 md:p-16 lg:p-20 text-center">
                            {/* Icon badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-cyan-400 text-sm font-bold mb-8"
                            >
                                <Mail className="w-4 h-4 animate-pulse" />
                                <span>NEWSLETTER</span>
                            </motion.div>

                            {/* Heading */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
                            >
                                Stay Ahead of the <span className="gradient-text">Curve</span>
                            </motion.h2>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed mb-12"
                            >
                                Subscribe to our newsletter and get the latest technological insights, AI trends,
                                and case studies delivered directly to your inbox every month.
                            </motion.p>

                            {/* Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="max-w-xl mx-auto"
                            >
                                <form onSubmit={handleSubmit} className="relative">
                                    <AnimatePresence mode="wait">
                                        {status === "idle" && (
                                            <motion.div
                                                key="form"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex flex-col sm:flex-row gap-4"
                                            >
                                                <div className="relative flex-1 group">
                                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-indigo-500/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-lg" />
                                                    <div className="relative flex items-center">
                                                        <Mail className="absolute left-5 w-5 h-5 text-foreground/40 group-focus-within:text-indigo-500 dark:group-focus-within:text-cyan-400 transition-colors duration-300" />
                                                        <input
                                                            type="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder="Enter your email address"
                                                            required
                                                            aria-label="Email address"
                                                            className="w-full h-14 pl-14 pr-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 text-foreground placeholder:text-foreground/40 outline-none transition-all duration-300"
                                                        />
                                                    </div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="group relative h-14 px-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:translate-y-[-2px] active:scale-[0.98] transition-all duration-300 overflow-hidden"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        <Bell className="w-4 h-4 group-hover:animate-icon-float" />
                                                        Subscribe
                                                    </span>
                                                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </button>
                                            </motion.div>
                                        )}

                                        {status === "loading" && (
                                            <motion.div
                                                key="loading"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex flex-col sm:flex-row gap-4"
                                            >
                                                <div className="flex-1 h-14 rounded-2xl bg-foreground/5 animate-pulse" />
                                                <div className="h-14 px-8 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center gap-3">
                                                    <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />
                                                    <span className="text-sm font-semibold text-indigo-600 dark:text-cyan-400">Subscribing...</span>
                                                </div>
                                            </motion.div>
                                        )}

                                        {status === "success" && (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center gap-3 text-emerald-600 dark:text-emerald-400"
                                            >
                                                <CheckCircle2 className="w-6 h-6 animate-check-pop" />
                                                <span className="font-bold">Subscribed Successfully!</span>
                                            </motion.div>
                                        )}

                                        {status === "error" && (
                                            <motion.div
                                                key="error"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="h-14 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center gap-3 text-red-600 dark:text-red-400 animate-shake"
                                            >
                                                <AlertCircle className="w-5 h-5" />
                                                <span className="font-bold">
                                                    {errorMsg || "Failed to subscribe. Please try again."}
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </form>

                                {/* Privacy note */}
                                <p className="text-xs text-foreground/40 mt-4">
                                    We respect your privacy. Unsubscribe at any time.
                                </p>
                            </motion.div>
                        </div>

                        {/* Bottom gradient line */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}