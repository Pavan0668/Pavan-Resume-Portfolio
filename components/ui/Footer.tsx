"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Twitter,
    Linkedin,
    Facebook,
    Instagram,
    Phone,
    Mail,
    MapPin,
    Send,
    CheckCircle2,
    Loader2,
    AlertCircle,
    Sparkles,
} from "lucide-react";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<SubscribeStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email
        if (!email.trim()) {
            setErrorMsg("Please enter your email address");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

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

            // Reset to idle after showing success
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
        <footer className="border-t border-foreground/10 bg-background relative z-10 pt-16 pb-8 transition-colors">
            {/* Subtle top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Main 4-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Mission & Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
                            <div className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <img src="/logo.png" alt="JKC Solutions" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                Total IT Solutions
                            </span>
                        </Link>
                        <p className="text-foreground/70 mb-6 leading-relaxed">
                            We empower modern enterprises by combining rock-solid core IT infrastructure with the frontier of autonomous AI technologies.
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-foreground/70">
                            <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" /> <span>B Wing 501, Victory Park Building, Chandavarkar Road, Borivali West, Mumbai 400092</span></div>
                            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-indigo-500 shrink-0" /> <a href="tel:+919324310387" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">+91 9324310387</a></div>
                            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-indigo-500 shrink-0" /> <a href="mailto:jkcsolutionspune@gmail.com" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">jkcsolutionspune@gmail.com</a></div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6 text-lg">Company Solutions</h4>
                        <ul className="space-y-3 text-sm text-foreground/70">
                            <li><Link href="/expertise#managed-it-support" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Managed IT Support</Link></li>
                            <li><Link href="/expertise#cloud-services" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
                            <li><Link href="/expertise#security-surveillance" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Security & Surveillance</Link></li>
                            <li><Link href="#generative-ai" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Generative AI (LLMs)</Link></li>
                            <li><Link href="/expertise#agentic" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Agentic AI Workflows</Link></li>
                            <li><Link href="/career" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="/faq" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: News Ticker */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6 text-lg">Recent Updates</h4>
                        <div className="space-y-4">
                            <div className="group cursor-pointer">
                                <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold mb-1">March 2, 2026</p>
                                <p className="text-sm text-foreground/80 group-hover:text-indigo-500 transition-colors">JKC launches new Enterprise LLM Fine-tuning pipeline.</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold mb-1">Feb 28, 2026</p>
                                <p className="text-sm text-foreground/80 group-hover:text-indigo-500 transition-colors">Global Cybersecurity report highlights zero-trust necessity.</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold mb-1">Feb 15, 2026</p>
                                <p className="text-sm text-foreground/80 group-hover:text-indigo-500 transition-colors">Awarded Best Managed IT Provider in the tri-state area.</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6 text-lg">Stay Ahead</h4>
                        <p className="text-sm text-foreground/70 mb-4">Subscribe to our newsletter for the latest insights in IT and AI automation.</p>

                        {/* Newsletter Form */}
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                            <AnimatePresence mode="wait">
                                {status === "idle" && (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="flex flex-col gap-3"
                                    >
                                        <div className="relative group">
                                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 via-cyan-400/10 to-indigo-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
                                            <div className="relative flex items-center">
                                                <Mail className="absolute left-4 w-4 h-4 text-foreground/40 group-focus-within:text-indigo-500 dark:group-focus-within:text-cyan-400 transition-colors duration-300" />
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Enter email address"
                                                    aria-label="Email address"
                                                    required
                                                    className="w-full h-12 rounded-lg bg-foreground/5 border border-border pl-11 pr-4 text-foreground placeholder-foreground/50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                                                />
                                            </div>
                                        </div>
                                        <motion.button
                                            type="submit"
                                            whileTap={{ scale: 0.97 }}
                                            className="group relative w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-md overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                Subscribe Now
                                                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                            </span>
                                        </motion.button>
                                    </motion.div>
                                )}

                                {status === "loading" && (
                                    <motion.div
                                        key="loading"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-3"
                                    >
                                        <div className="w-full h-12 rounded-lg bg-foreground/5 border border-border animate-pulse" />
                                        <div className="w-full h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center gap-3">
                                            <Loader2 className="w-5 h-5 text-indigo-500 animate-spin" />
                                            <span className="text-sm text-indigo-600 dark:text-cyan-400 font-medium">Subscribing...</span>
                                        </div>
                                    </motion.div>
                                )}

                                {status === "success" && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="relative overflow-hidden rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-4"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent animate-gradient-shift" />
                                        <div className="relative flex items-start gap-3">
                                            <div className="shrink-0">
                                                <motion.div
                                                    initial={{ scale: 0, rotate: -30 }}
                                                    animate={{ scale: 1, rotate: 0 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                    className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-check-pop" />
                                                </motion.div>
                                            </div>
                                            <div>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.15 }}
                                                    className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-1"
                                                >
                                                    Subscribed Successfully!
                                                </motion.p>
                                                <motion.p
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.25 }}
                                                    className="text-xs text-emerald-600/70 dark:text-emerald-400/70"
                                                >
                                                    Welcome aboard! Check your inbox for confirmation.
                                                </motion.p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {status === "error" && (
                                    <motion.div
                                        key="error"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="rounded-lg bg-red-500/10 border border-red-500/30 p-4 animate-shake"
                                    >
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                            <p className="text-sm font-medium text-red-600 dark:text-red-400">
                                                {errorMsg || "Failed to subscribe. Please try again."}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>

                        {/* Privacy note */}
                        <p className="text-xs text-foreground/40 mt-3 flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" />
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar: Social Row & Copyright */}
                <div className="pt-8 border-t border-foreground/10 text-center md:text-left text-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>© {new Date().getFullYear()} JK Computers. All rights reserved.</p>

                    <div className="flex items-center gap-3">
                        <a href="https://www.facebook.com/profile.php?id=61554599484930" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 hover:scale-110 transition-all border border-border">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="https://x.com/jkcsolution" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 hover:scale-110 transition-all border border-border">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="https://www.linkedin.com/company/jkc-solutions-ltd/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 hover:scale-110 transition-all border border-border">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="https://www.instagram.com/jkcsolutionsmumbai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 hover:scale-110 transition-all border border-border">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="https://wa.me/918668262359" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 hover:scale-110 transition-all border border-border">
                            <span className="font-bold text-lg leading-none shrink-0 mb-1">WA</span> {/* Simple fallback for WhatsApp icon */}
                        </a>
                    </div>

                    <div className="flex items-center gap-6 text-foreground/60">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}