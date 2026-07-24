"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Smile, Settings2, Award } from "lucide-react";

const statIcons = [
    { icon: <Briefcase className="w-8 h-8 md:w-10 md:h-10" />, label: "Projects" },
    { icon: <Smile className="w-8 h-8 md:w-10 md:h-10" />, label: "Clients" },
    { icon: <Settings2 className="w-8 h-8 md:w-10 md:h-10" />, label: "Solutions" },
    { icon: <Award className="w-8 h-8 md:w-10 md:h-10" />, label: "Years" },
];

function AnimatedCounter({ end, suffix = "" }: { end: number, suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        mass: 1
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
        <span ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-black tabular-nums tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50" style={{ fontFamily: "var(--font-orbitron), monospace" }}>
            {displayValue}{suffix}
        </span>
    );
}

const stats = [
    { value: 200, label: "Projects Completed" },
    { value: 654, label: "Happy Clients" },
    { value: 500, label: "Custom Solutions" },
    { value: 30, label: "Years of Excellence" }
];

export default function StatsSection() {
    return (
        <section id="our-impact" className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center py-16 md:py-20 relative z-10 border-y border-foreground/10 bg-background/50 backdrop-blur-md overflow-hidden scroll-mt-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 text-foreground"
                    >
                        Our Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Numbers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base font-medium"
                    >
                        Delivering measurable results through innovation and dedication.
                    </motion.p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="flex flex-col items-center justify-center"
                        >
                            {/* Animated Icon */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
                                className="mb-3 text-indigo-500 dark:text-cyan-400"
                            >
                                {statIcons[index].icon}
                            </motion.div>

                            <div className="mb-2">
                                <AnimatedCounter end={stat.value} suffix="+" />
                            </div>
                            <p className="text-xs md:text-sm font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-widest px-4">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
