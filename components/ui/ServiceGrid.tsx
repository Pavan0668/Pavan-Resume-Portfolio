"use client";

import { motion } from "framer-motion";

const coreServices = [
    {
        icon: "/images/blog/Core%20IT%20Excellence/Managed%20IT%20Services.avif",
        title: "Managed IT Services",
        description: "Proactive maintenance, 24/7 helpdesk, and strategic IT planning to keep your business running seamlessly.",
        glow: "rgba(99, 102, 241, 0.2)"
    },
    {
        icon: "/images/blog/Core%20IT%20Excellence/Cloud%20Infrastructure.jpg",
        title: "Cloud Infrastructure",
        description: "Scalable, resilient cloud hosting and migration spanning AWS, Azure, and Google Cloud.",
        glow: "rgba(14, 165, 233, 0.2)"
    },
    {
        icon: "/images/blog/Core%20IT%20Excellence/Security%20%26%20Surveillance.jpg",
        title: "Security & Surveillance",
        description: "Advanced cybersecurity protocols and physical surveillance systems protecting your critical assets.",
        glow: "rgba(16, 185, 129, 0.2)"
    }
];

const aiServices = [
    {
        icon: "/images/blog/Core%20IT%20Excellence/Generative%20AI%20(LLMs).jpg",
        title: "Generative AI (LLMs)",
        description: "Custom fine-tuning of large language models on your secure, proprietary enterprise data.",
        points: [
            "Custom AI chatbot development for customer support",
            "Document intelligence & automated report generation",
            "Enterprise knowledge base with private LLM deployment"
        ],
        glow: "rgba(217, 70, 239, 0.2)"
    },
    {
        icon: "/images/blog/Core%20IT%20Excellence/Agentic%20AI%20Workflows.jpg",
        title: "Agentic AI Workflows",
        description: "Autonomous reasoning systems capable of executing complex multi-step operational tasks.",
        points: [
            "AI agents for automated workflow orchestration",
            "Intelligent data extraction & processing pipelines",
            "Self-optimizing business process automation"
        ],
        glow: "rgba(168, 85, 247, 0.2)"
    },
    {
        icon: "/images/blog/Core%20IT%20Excellence/Autonomous%20Agent%20Development.jpg",
        title: "Autonomous Agent Development",
        description: "Bespoke digital assistants providing 24/7 intelligent customer support and internal HR solutions.",
        points: [
            "24/7 AI-powered customer support agents",
            "HR & internal IT helpdesk automation bots",
            "Multi-platform virtual assistant deployment"
        ],
        glow: "rgba(244, 63, 94, 0.2)"
    }
];

type ServiceItem = {
    icon: React.ReactNode | string;
    title: string;
    description: string;
    points?: string[];
    glow: string;
};

export default function ServiceGrid() {
    return (
        <>
            <section
                id="capabilities-expertise"
                className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center py-12 md:py-16 relative z-10 bg-background transition-colors duration-300 scroll-mt-16"
            >
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="text-center mb-6 md:mb-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 text-foreground"
                        >
                            Capabilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Expertise</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base font-medium"
                        >
                            Bridging the gap between rock-solid traditional IT infrastructure and the frontier of autonomous AI.
                        </motion.p>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-lg md:text-xl font-bold text-foreground">Core IT Excellence</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                            {coreServices.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="ai-frontier"
                className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center py-12 md:py-16 relative z-10 bg-background transition-colors duration-300 scroll-mt-16"
            >
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="text-center mb-4 md:mb-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 text-foreground"
                        >
                            The AI Frontier
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base font-medium"
                        >
                            Practical AI systems built to automate, assist, and scale with your business.
                        </motion.p>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                            {aiServices.map((service, index) => (
                                <ServiceCard key={index} service={service} index={index + 3} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
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
            className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 relative group overflow-hidden bg-card-bg will-change-transform"
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(120% 120% at 50% 120%, ${service.glow}, transparent 50%)` }}
            />

            <div className="w-16 h-12 md:w-20 md:h-14 rounded-xl bg-background shadow-sm border border-foreground/10 flex items-center justify-center mb-4 md:mb-6 relative z-10 transition-transform group-hover:scale-110 overflow-hidden">
                {typeof service.icon === "string" ? (
                    <img src={service.icon} alt={service.title} className="w-full h-full object-cover" />
                ) : (
                    service.icon
                )}
            </div>
            <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 relative z-10">{service.title}</h4>
            <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-3 md:mb-4 relative z-10">{service.description}</p>

            {/* Bullet Points */}
            {service.points && (
                <ul className="space-y-1.5 md:space-y-2 relative z-10">
                    {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-foreground/60 leading-normal">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
}
