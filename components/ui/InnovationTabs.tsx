"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Rocket, ShieldAlert, Building2 } from "lucide-react";

const tabs = [
    {
        id: "future",
        label: "Future-Perfect Digital World",
        icon: <Globe className="w-5 h-5" />,
        content: "We engineer systems designed not just for today's constraints, but for tomorrow's limitless possibilities. From AI integration to automated scaling across regions, your IT operates globally without friction."
    },
    {
        id: "accelerate",
        label: "Accelerate Digital Innovation",
        icon: <Rocket className="w-5 h-5" />,
        content: "Stop fighting fires and start innovating. Our managed services handle the day-to-day while our cloud architecture empowers your internal teams to deploy new services faster than the competition."
    },
    {
        id: "security",
        label: "Enterprise Security",
        icon: <ShieldAlert className="w-5 h-5" />,
        content: "Zero-trust architecture, advanced threat detection powered by AI, and 24/7 expert surveillance ensure your intellectual property remains uncompromised."
    },
    {
        id: "industry",
        label: "Industry Solutions",
        icon: <Building2 className="w-5 h-5" />,
        content: "Tailored IT environments built specifically for Healthcare, Finance, and Retail. Compliance, low-latency transaction nodes, and protected consumer data out of the box."
    }
];

export default function InnovationTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <section className="py-24 relative bg-background transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-foreground"
                    >
                        Driving the Digital Future
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70"
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
                                className={`flex items-center gap-3 px-6 py-4 rounded-xl text-left transition-all ${activeTab === tab.id
                                        ? "bg-indigo-600 dark:bg-indigo-500/20 text-white dark:text-indigo-400 font-semibold shadow-lg shadow-indigo-500/20 border border-indigo-400/20"
                                        : "bg-transparent text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                                    }`}
                            >
                                <div className={`${activeTab === tab.id ? "text-white dark:text-indigo-400" : "text-foreground/50"}`}>
                                    {tab.icon}
                                </div>
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full md:w-2/3 min-h-[300px] relative glass-card p-10 lg:p-14 rounded-3xl overflow-hidden border border-border">
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
                                    <div className="inline-flex items-center gap-3 mb-6 p-4 rounded-2xl bg-foreground/5 text-indigo-600 dark:text-cyan-400 border border-border">
                                        {tab.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6 text-foreground">
                                        {tab.label}
                                    </h3>
                                    <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
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
