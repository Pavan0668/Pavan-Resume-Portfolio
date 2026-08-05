"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Sparkles, ShieldCheck, Workflow } from "lucide-react";
import { useTypewriter } from "@/lib/use-typewriter";

export function CareerHero() {
    const { displayText, isTyping } = useTypewriter(
        ["Intelligent IT", "Smart Technology", "Innovative Solutions"],
        40,
        600,
        1800
    );
    return (
        <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.16),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.14),_transparent_34%),linear-gradient(to_bottom,_transparent,_rgba(2,6,23,0.02))]" />
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            <div className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute right-0 top-28 -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center"
                >
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-600 dark:text-cyan-300">
                            <Sparkles className="h-4 w-4" />
                            Future-ready careers at JK Computers
                        </div>

                        <h1 className="mt-6 text-5xl font-black tracking-tight text-balance md:text-7xl">
                            Design the next decade of
                            <span className="block mt-2">
                                <span className="gradient-text glow-text inline-block animate-text-reveal" style={{ animationDelay: "0.6s" }}>
                                    {displayText}
                                    {isTyping && <span className="animate-blink text-indigo-500 dark:text-cyan-400">|</span>}
                                </span>
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
                            We are building a team that can adapt, automate, secure, and scale with the technology
                            landscape of tomorrow. If you want a workplace that values deep technical craft and
                            practical impact, start here.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="#open-roles"
                                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 active:scale-95"
                            >
                                Explore roles
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#talent-network"
                                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition-all hover:border-indigo-500/30 hover:text-foreground"
                            >
                                Join talent network
                            </Link>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-4 text-sm text-foreground/60">
                            <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-2 backdrop-blur">
                                <BrainCircuit className="h-4 w-4 text-indigo-500" />
                                AI-assisted delivery
                            </div>
                            <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-2 backdrop-blur">
                                <ShieldCheck className="h-4 w-4 text-cyan-500" />
                                Security-first mindset
                            </div>
                            <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-2 backdrop-blur">
                                <Workflow className="h-4 w-4 text-indigo-500" />
                                Modern workflows
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/15 via-cyan-500/10 to-transparent blur-2xl" />
                        <div className="glass-card rounded-[2rem] border border-foreground/10 p-6 md:p-8 shadow-2xl">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/45">
                                        Future hiring model
                                    </p>
                                    <h2 className="mt-2 text-2xl font-bold text-foreground">
                                        Built for 2032 and beyond
                                    </h2>
                                </div>
                                <div className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-cyan-300">
                                    Adaptable
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl border border-foreground/10 bg-background/70 p-4">
                                    <p className="text-sm font-semibold text-foreground">Automation-ready teams</p>
                                    <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                                        People who can pair strong fundamentals with emerging AI and systems tooling.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-foreground/10 bg-background/70 p-4">
                                    <p className="text-sm font-semibold text-foreground">Cross-discipline collaboration</p>
                                    <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                                        Engineering, support, infrastructure, and operations working as one delivery loop.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-foreground/10 bg-background/70 p-4">
                                    <p className="text-sm font-semibold text-foreground">Always-on learning culture</p>
                                    <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                                        A place where growth, experimentation, and clean execution matter every day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
