"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
    {
        id: "future",
        label: "Future-Perfect Digital World",
        image: "/images/blog/web-development.png",
        content: "We engineer systems designed not just for today's constraints, but for tomorrow's limitless possibilities. From AI integration to automated scaling across regions, your IT operates globally without friction."
    },
    {
        id: "accelerate",
        label: "Accelerate Digital Innovation",
        image: "/images/blog/ai-agent-dev.png",
        content: "Stop fighting fires and start innovating. Our managed services handle the day-to-day while our cloud architecture empowers your internal teams to deploy new services faster than the competition."
    },
    {
        id: "security",
        label: "Enterprise Security",
        image: "/images/expertise/security.jpg",
        content: "Zero-trust architecture, advanced threat detection powered by AI, and 24/7 expert surveillance ensure your intellectual property remains uncompromised."
    },
    {
        id: "industry",
        label: "Industry Solutions",
        image: "/images/blog/cloud-solutions.png",
        content: "Tailored IT environments built specifically for Healthcare, Finance, and Retail. Compliance, low-latency transaction nodes, and protected consumer data out of the box."
    }
];

export default function InnovationTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-20 md:py-24 relative bg-background transition-colors">
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

                <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
                    {/* Tabs Menu */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-left text-sm md:text-base transition-all ${activeTab === tab.id
                                        ? "bg-indigo-600 dark:bg-indigo-500/20 text-white dark:text-indigo-400 font-semibold shadow-lg shadow-indigo-500/20 border border-indigo-400/20"
                                        : "bg-transparent text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                                    }`}
                            >
                                <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg overflow-hidden shrink-0 bg-background/50 flex items-center justify-center">
                                    <img src={tab.image} alt={tab.label} className="w-full h-full object-cover" />
                                </div>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full md:w-2/3 min-h-[300px] relative glass-card p-8 lg:p-12 rounded-3xl overflow-hidden border border-border">
                        {/* Background Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <AnimatePresence mode="wait">
                            {tabs.map((tab) => activeTab === tab.id && (
                                <motion.div
                                    key={tab.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10"
                                >
                                    <div className="w-14 h-12 md:w-16 md:h-14 rounded-xl overflow-hidden mb-6 bg-foreground/5 border border-border flex items-center justify-center">
                                        <img src={tab.image} alt={tab.label} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                                        {tab.label}
                                    </h3>
                                    <p className="text-sm md:text-base text-foreground/70 leading-relaxed max-w-2xl text-justify">
                                        {tab.content}
                                    </p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}