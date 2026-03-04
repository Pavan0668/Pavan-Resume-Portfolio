"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Users, Lightbulb, Award } from "lucide-react";

function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        mass: 1,
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(end);
        }
    }, [isInView, end, springValue]);

    useEffect(() => {
        return springValue.onChange((latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-black tabular-nums tracking-tighter gradient-text">
            {displayValue}{suffix}
        </span>
    );
}

const stats = [
    {
        value: 200,
        label: "Projects Completed",
        description: "Successfully delivered across industries",
        icon: Briefcase,
    },
    {
        value: 654,
        label: "Happy Clients",
        description: "Businesses empowered with our solutions",
        icon: Users,
    },
    {
        value: 500,
        label: "Custom Solutions",
        description: "Tailored technology implementations",
        icon: Lightbulb,
    },
    {
        value: 30,
        label: "Years of Excellence",
        description: "Leading the IT industry since 1995",
        icon: Award,
    },
];

export default function AchievementsSection() {
    return (
        <section id="achievements" className="py-24 md:py-32 relative overflow-hidden bg-background transition-colors">
            {/* Background texture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-indigo-500/5 blur-[150px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-4">
                        Our Track Record
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
                        Milestone Grid of{" "}
                        <span className="gradient-text">Excellence</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
                        Numbers that reflect our commitment to delivering world-class IT solutions and lasting partnerships.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12, duration: 0.6 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

                                <div className="relative glass-card rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center gap-4 border border-card-border group-hover:border-card-border-hover transition-all duration-300 shadow-lg group-hover:shadow-[0_8px_30px_var(--glow-shadow)]">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-indigo-600 dark:text-cyan-400" />
                                    </div>

                                    {/* Counter */}
                                    <div>
                                        <AnimatedCounter end={stat.value} suffix="+" />
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-sm font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-widest">
                                        {stat.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs text-foreground/50 leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
