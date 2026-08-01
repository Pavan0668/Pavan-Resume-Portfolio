"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "future",
        label: "Future-Perfect Digital World",
        image: "/images/blog/web-development.png",
        content:
            "We engineer systems designed not just for today's constraints, but for tomorrow's limitless possibilities. From AI integration to automated scaling across regions, your IT operates globally without friction.",
    },
    {
        id: "accelerate",
        label: "Accelerate Digital Innovation",
        image: "/images/blog/ai-agent-dev.png",
        content:
            "Stop fighting fires and start innovating. Our managed services handle the day-to-day while our cloud architecture empowers your internal teams to deploy new services faster than the competition.",
    },
    {
        id: "security",
        label: "Enterprise Security",
        image: "/images/expertise/security.jpg",
        content:
            "Zero-trust architecture, advanced threat detection powered by AI, and 24/7 expert surveillance ensure your intellectual property remains uncompromised.",
    },
    {
        id: "industry",
        label: "Industry Solutions",
        image: "/images/blog/cloud-solutions.png",
        content:
            "Tailored IT environments built specifically for Healthcare, Finance, and Retail. Compliance, low-latency transaction nodes, and protected consumer data out of the box.",
    },
];

export default function InnovationTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-20 md:py-24 relative bg-background transition-colors overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 text-foreground"
                    >
                        Driving the Digital Future
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base font-medium"
                    >
                        Transformative results through deep technical expertise.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,18,37,0.96)_0%,rgba(7,17,31,0.98)_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
                >
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
                        <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px]" />
                        <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/10 blur-[100px]" />
                    </div>

                    <div className="relative grid md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.45fr)] items-stretch">
                        {/* Left side: labels */}
                        <div className="border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 bg-white/[0.015] p-4 md:p-5 lg:p-6">
                            <div className="flex flex-col gap-3">
                                {tabs.map((tab, index) => {
                                    const isActive = activeTab === tab.id;
                                    return (
                                        <motion.button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            whileTap={{ scale: 0.99 }}
                                            initial={false}
                                            animate={{
                                                y: isActive ? -1 : 0,
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className={`
                                                group relative flex w-full items-center gap-3 px-5 py-3.5 text-left text-sm md:text-base transition-all duration-300
                                                ${index === 0 ? "rounded-t-2xl" : ""}
                                                ${index === tabs.length - 1 ? "rounded-b-2xl" : ""}
                                                ${isActive
                                                    ? "bg-indigo-600/10 text-indigo-100 font-semibold border border-indigo-400/35 md:border-r-0 md:rounded-r-none shadow-[0_12px_30px_rgba(79,70,229,0.14)]"
                                                    : "bg-transparent text-white/68 border border-transparent hover:bg-white/5 hover:text-white hover:border-white/10"
                                                }
                                            `}
                                        >
                                            {isActive && (
                                                <motion.div
                                                    layoutId="tabLeftAccent"
                                                    className="absolute left-0 top-1/2 h-8 w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-indigo-500 to-cyan-400"
                                                    transition={{ duration: 0.25 }}
                                                />
                                            )}

                                            <div
                                                className={`
                                                    flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border transition-all duration-300 md:h-10 md:w-10
                                                    ${isActive
                                                        ? "border-indigo-400/30 bg-indigo-500/10 ring-2 ring-indigo-500/20"
                                                        : "border-white/10 bg-background/40"
                                                    }
                                                `}
                                            >
                                                <img
                                                    src={tab.image}
                                                    alt={tab.label}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>

                                            <span className="relative leading-tight">
                                                {tab.label}
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="tabUnderline"
                                                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                                                        transition={{ duration: 0.25 }}
                                                    />
                                                )}
                                            </span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right side: detail panel */}
                        <div className="relative min-h-[320px] bg-[linear-gradient(180deg,rgba(12,22,42,0.96)_0%,rgba(9,18,34,0.98)_100%)] p-6 md:p-8 lg:p-12">
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
                                <div className="absolute top-0 right-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />
                            </div>

                            <AnimatePresence mode="wait">
                                {tabs.map(
                                    (tab) =>
                                        activeTab === tab.id && (
                                            <motion.div
                                                key={tab.id}
                                                initial={{ opacity: 0, x: 18 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -18 }}
                                                transition={{ duration: 0.3 }}
                                                className="relative z-10"
                                            >
                                                <div className="mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-indigo-500/10 md:h-16 md:w-16">
                                                    <img
                                                        src={tab.image}
                                                        alt={tab.label}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>

                                                <h3 className="mb-4 text-xl font-bold text-white md:text-2xl">
                                                    {tab.label}
                                                </h3>

                                                <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base text-justify">
                                                    {tab.content}
                                                </p>

                                                <div className="mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-transparent" />
                                            </motion.div>
                                        ),
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
