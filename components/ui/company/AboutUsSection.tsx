"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    ArrowRight,
    CheckCircle,
    CircuitBoard,
    Cloud,
    Globe,
    ShieldCheck,
    Sparkles,
    Zap,
} from "lucide-react";

const pillars = [
    {
        icon: CircuitBoard,
        title: "Infrastructure",
        text: "Engineered foundations for resilient, scalable business systems.",
    },
    {
        icon: Cloud,
        title: "Cloud & Data",
        text: "Hybrid environments designed for speed, elasticity, and control.",
    },
    {
        icon: ShieldCheck,
        title: "Security",
        text: "Security-first delivery that protects operations without slowing teams down.",
    },
];

const highlights = [
    "End-to-end IT infrastructure and systems design",
    "Enterprise technology consulting with measurable outcomes",
    "Custom software and automation built for scale",
    "Cloud migration, modernization, and managed services",
    "Cybersecurity, compliance, and governance advisory",
    "30+ years of industry expertise, ready for the next decade",
];

const capabilities = [
    "Hybrid cloud architecture",
    "Zero-trust security posture",
    "Workflow automation",
    "Managed support operations",
    "Business continuity planning",
    "Modern application delivery",
];

const outcomes = [
    "Lower operational friction",
    "Faster delivery cycles",
    "Stronger security posture",
];

export default function AboutUsSection() {
    return (
        <section
            id="about-us"
            className="relative overflow-hidden bg-background py-24 transition-colors md:py-32"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18] dark:opacity-[0.14]" />
                <div className="animate-float-slow absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]" />
                <div className="animate-float-slow absolute right-[-6rem] bottom-[-6rem] h-96 w-96 rounded-full bg-indigo-500/15 blur-[140px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.65 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70 backdrop-blur">
                            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                            About Us
                        </span>
                        <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                            Technology built for 2032 and beyond
                        </span>
                    </div>

                    <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Future-ready IT systems,{" "}
                        <span className="gradient-text">crafted with enterprise precision</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-6"
                    >
                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.10)] backdrop-blur-xl md:p-8">
                            <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
                                JKC Total IT Solutions designs and delivers complete technology ecosystems for
                                businesses that need stability today and adaptability tomorrow. We combine
                                infrastructure engineering, cloud transformation, software delivery, and
                                cybersecurity into a single operating model that supports growth without
                                introducing unnecessary complexity.
                            </p>
                            <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
                                Our approach is practical and precise: understand the business, map the
                                technical dependencies, then build systems that are fast, secure, maintainable,
                                and ready for the next wave of innovation.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {pillars.map((pillar, index) => {
                                    const Icon = pillar.icon;
                                    return (
                                        <motion.div
                                            key={pillar.title}
                                            initial={{ opacity: 0, y: 16 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08, duration: 0.45 }}
                                            className="group rounded-2xl border border-white/10 bg-background/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)]"
                                        >
                                            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-cyan-400/15 ring-1 ring-inset ring-white/10">
                                                <Icon className="h-5 w-5 text-cyan-400" />
                                            </div>
                                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
                                                {pillar.title}
                                            </h3>
                                            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                                                {pillar.text}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="mt-6 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/8 via-indigo-500/8 to-transparent p-6 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                                    <Zap className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                                        Built to evolve
                                    </p>
                                    <p className="mt-1 text-sm text-foreground/65">
                                        We design every engagement to remain relevant as systems, security, and AI
                                        workflows keep accelerating.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-background/70 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                                    <span className="text-sm font-medium text-foreground/78">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative lg:col-span-6"
                    >
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-4 shadow-[0_30px_100px_rgba(2,6,23,0.28)] backdrop-blur-xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.18),transparent_32%)]" />

                            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                                <Image
                                    src="/images/expertise/cloud.jpg"
                                    alt="Cloud and infrastructure operations"
                                    width={1200}
                                    height={900}
                                    className="h-[420px] w-full object-cover md:h-[560px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.10)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20 mix-blend-screen" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
                            </div>

                            <div className="relative -mt-28 grid gap-4 px-2 pb-2 md:grid-cols-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45 }}
                                    className="glass-card rounded-[1.5rem] p-5 shadow-[0_16px_40px_rgba(2,6,23,0.18)]"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                                        30+ years
                                    </p>
                                    <p className="mt-2 text-2xl font-black text-foreground">
                                        Enterprise expertise
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                                        Proven delivery across infrastructure, software, cloud, and security.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.08 }}
                                    className="glass-card rounded-[1.5rem] p-5 shadow-[0_16px_40px_rgba(2,6,23,0.18)]"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                                        Always-on support
                                    </p>
                                    <p className="mt-2 text-2xl font-black text-foreground">
                                        Built for uptime
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                                        Operations designed to stay stable, responsive, and measurable.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="relative mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                                <motion.div
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.12 }}
                                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                                            <Globe className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                                                Capability matrix
                                            </p>
                                            <p className="text-sm text-foreground/60">
                                                The stack we bring into every engagement
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {capabilities.map((capability) => (
                                            <span
                                                key={capability}
                                                className="rounded-full border border-white/10 bg-background/70 px-3 py-2 text-xs font-medium text-foreground/70"
                                            >
                                                {capability}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.18 }}
                                    className="rounded-[1.5rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-5 backdrop-blur-sm"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                                        What we optimize
                                    </p>
                                    <div className="mt-4 space-y-3">
                                        {outcomes.map((item) => (
                                            <div key={item} className="flex items-center gap-3">
                                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                                                <span className="text-sm text-foreground/75">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                                        Explore our expertise
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
