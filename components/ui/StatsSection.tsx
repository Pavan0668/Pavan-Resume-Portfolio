"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
        <span ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-black tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50">
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
        <section className="py-24 relative z-10 border-y border-foreground/10 bg-background/50 backdrop-blur-md overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="mb-2">
                                <AnimatedCounter end={stat.value} suffix="+" />
                            </div>
                            <p className="text-sm md:text-base font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-widest px-4">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
