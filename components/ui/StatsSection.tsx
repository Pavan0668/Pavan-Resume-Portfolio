"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Monitor, Users, CircleCheckBig, Clock3 } from "lucide-react";

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
        <span
            ref={ref}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tabular-nums tracking-tight text-white"
            style={{ fontFamily: "var(--font-orbitron), monospace" }}
        >
            {displayValue}{suffix}
        </span>
    );
}

const stats = [
    { value: 200, label: "Projects Completed", icon: Monitor },
    { value: 654, label: "Happy Clients", icon: Users },
    { value: 500, label: "Custom Solutions", icon: CircleCheckBig },
    { value: 30, label: "Years of Excellence", icon: Clock3 },
];

export default function StatsSection() {
    return (
        <section
            id="our-impact"
            className="home-snap-section min-h-[calc(100svh-4rem)] flex items-center py-16 md:py-20 relative z-10 border-y border-white/10 bg-[linear-gradient(180deg,#081225_0%,#07111f_100%)] overflow-hidden scroll-mt-16"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full bg-indigo-500/10 blur-[140px] rounded-full" />
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                    >
                        <span className="text-white/90">Our Impact in </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                            Numbers
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/70 max-w-2xl mx-auto text-sm md:text-base font-medium"
                    >
                        Delivering measurable results through innovation and dedication.
                    </motion.p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.55, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-px rounded-[1.6rem] bg-gradient-to-br from-cyan-400/30 via-indigo-400/20 to-transparent opacity-50 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(30,41,59,0.92)_0%,rgba(17,24,39,0.94)_100%)] p-4 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300/25">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_45%)] opacity-70" />
                                <div className="relative flex h-full min-h-[150px] md:min-h-[190px] flex-col justify-between">
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12 + 0.1, duration: 0.45 }}
                                        className="flex items-start"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-900/40 text-cyan-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform duration-300 group-hover:scale-105">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </motion.div>

                                    <div className="pt-6">
                                        <div className="mb-3 flex h-9 items-end justify-center sm:h-11 md:h-14 lg:h-[4.25rem]">
                                            <AnimatedCounter end={stat.value} />
                                        </div>
                                        <p className="mx-auto flex h-8 max-w-[14rem] items-start justify-center overflow-hidden text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] text-white/85 sm:text-xs line-clamp-2">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
