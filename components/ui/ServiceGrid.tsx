"use client";

import { motion } from "framer-motion";
import { Server, Cloud, ShieldCheck, BrainCircuit, Network, Cpu } from "lucide-react";

const coreServices = [
    {
        icon: <Server className="w-8 h-8 text-indigo-500" />,
        title: "Managed IT Services",
        description: "Proactive maintenance, 24/7 helpdesk, and strategic IT planning to keep your business running seamlessly.",
        glow: "rgba(99, 102, 241, 0.2)"
    },
    {
        icon: <Cloud className="w-8 h-8 text-sky-500" />,
        title: "Cloud Infrastructure",
        description: "Scalable, resilient cloud hosting and migration spanning AWS, Azure, and Google Cloud.",
        glow: "rgba(14, 165, 233, 0.2)"
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
        title: "Security & Surveillance",
        description: "Advanced cybersecurity protocols and physical surveillance systems protecting your critical assets.",
        glow: "rgba(16, 185, 129, 0.2)"
    }
];

const aiServices = [
    {
        icon: <BrainCircuit className="w-8 h-8 text-fuchsia-500" />,
        title: "Generative AI (LLMs)",
        description: "Custom fine-tuning of large language models on your secure, proprietary enterprise data.",
        glow: "rgba(217, 70, 239, 0.2)"
    },
    {
        icon: <Network className="w-8 h-8 text-purple-500" />,
        title: "Agentic AI Workflows",
        description: "Autonomous reasoning systems capable of executing complex multi-step operational tasks.",
        glow: "rgba(168, 85, 247, 0.2)"
    },
    {
        icon: <Cpu className="w-8 h-8 text-rose-500" />,
        title: "Autonomous Agent Development",
        description: "Bespoke digital assistants providing 24/7 intelligent customer support and internal HR solutions.",
        glow: "rgba(244, 63, 94, 0.2)"
    }
];

export default function ServiceGrid() {
    return (
        <section id="services" className="py-32 relative z-10 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-foreground"
                    >
                        Capabilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70 max-w-2xl mx-auto text-lg font-medium"
                    >
                        Bridging the gap between rock-solid traditional IT infrastructure and the frontier of autonomous AI.
                    </motion.p>
                </div>

                {/* Section 1: Core IT */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-2xl font-bold text-foreground">Core IT Excellence</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {coreServices.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index} />
                        ))}
                    </div>
                </div>

                {/* Section 2: AI Frontier */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <h3 className="text-2xl font-bold text-foreground">The AI Frontier</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {aiServices.map((service, index) => (
                            <ServiceCard key={index} service={service} index={index + 3} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 3) * 0.1 }}
            whileHover={{
                scale: 1.02,
                boxShadow: `0 10px 40px ${service.glow}`,
                borderColor: 'var(--card-border-hover)'
            }}
            className="glass-card rounded-2xl p-8 transition-all duration-300 relative group overflow-hidden bg-card-bg"
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(120% 120% at 50% 120%, ${service.glow}, transparent 50%)` }}
            />

            <div className="w-14 h-14 rounded-xl bg-background shadow-sm border border-foreground/10 flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110">
                {service.icon}
            </div>
            <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">{service.title}</h4>
            <p className="text-foreground/70 leading-relaxed relative z-10">{service.description}</p>
        </motion.div>
    );
}
