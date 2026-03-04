"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80&auto=format&fit=crop",
        title: "Engineering the Future of IT Infrastructure",
        subtitle: "Delivering robust, scalable technology solutions for enterprise-grade performance.",
    },
    {
        image: "https://images.unsplash.com/photo-1581092919535-7146ff1c3c3d?w=1920&q=80&auto=format&fit=crop",
        title: "30+ Years of Technology Leadership",
        subtitle: "Decades of proven expertise powering businesses across industries.",
    },
    {
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&auto=format&fit=crop",
        title: "Empowering Businesses Through Innovation",
        subtitle: "Collaborative partnerships that drive digital transformation at scale.",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [isPaused, next]);

    return (
        <section
            className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-slate-900"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Hero carousel"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover"
                        loading={current === 0 ? "eager" : "lazy"}
                    />

                    {/* Dark overlay gradients — strong enough for white text readability */}
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Overlay text */}
            <div className="absolute inset-0 z-10 flex items-end pb-20 md:pb-28">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.p
                                className="text-indigo-400 font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                JKC Total IT Solutions
                            </motion.p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl mb-4 drop-shadow-lg">
                                {slides[current].title}
                            </h1>
                            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed drop-shadow-md">
                                {slides[current].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-500 ${index === current
                                ? "w-10 bg-indigo-500"
                                : "w-4 bg-white/40 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
