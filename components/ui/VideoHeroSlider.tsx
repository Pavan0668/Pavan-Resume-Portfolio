"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
    {
        url: "/videos/it-services-1.mp4",
        badge: "Enterprise IT Architecture",
        title: "Managed IT",
        highlight: "Excellence",
        description: "Proactive maintenance, round-the-clock support, and strategic IT planning designed for seamless, uninterrupted scaling."
    },
    {
        url: "/videos/it-services-2.mp4",
        badge: "The Frontier of Automation",
        title: "AI-Driven",
        highlight: "Innovation",
        description: "Transform your operations with custom enterprise LLMs and completely autonomous agentic workflows."
    }
];

export default function VideoHeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % videos.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

    const currentSlide = videos[currentIndex];

    return (
        <section id="home-hero" className="home-snap-section relative w-full min-h-[calc(100svh-4rem)] overflow-hidden bg-black" style={{ height: "calc(100svh - 64px)" }}>
            {/* Video Background Slider */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover opacity-70"
                    >
                        <source src={currentSlide.url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Refined gradient overlay - lighter at top, darker at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
                </motion.div>
            </AnimatePresence>

            {/* Content Area - right aligned */}
            <div className="relative z-10 flex h-full items-center justify-end px-6 md:px-12 lg:px-20">
                <div className="w-full max-w-5xl flex justify-end">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${currentIndex}`}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-start max-w-xl w-full"
                        >
                            {/* Dynamic Badge */}
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/20 bg-indigo-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-indigo-300 backdrop-blur-md">
                                {currentSlide.badge}
                            </div>

                            {/* Dynamic Refined Heading */}
                            <h1 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
                                {currentSlide.title} <br className="hidden md:block" />
                                <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                                    {currentSlide.highlight}
                                </span>
                            </h1>

                            {/* Dynamic Description */}
                            <p className="mb-8 max-w-lg text-base md:text-lg font-medium text-slate-200 leading-relaxed">
                                {currentSlide.description}
                            </p>

                            {/* Static CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <div className="group relative">
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 blur-md opacity-40 transition-all duration-500 group-hover:opacity-70 group-hover:blur-lg"></div>
                                    <button className="relative flex h-14 items-center gap-3 rounded-full bg-white/95 backdrop-blur-sm px-8 font-bold text-slate-900 transition-all hover:bg-white hover:scale-[1.02] active:scale-[0.98] shadow-xl">
                                        Explore Solutions <ArrowRight className="h-5 w-5 text-indigo-600 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 lg:px-20">
                <div className="flex gap-3">
                    <button
                        onClick={prevSlide}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-3 bg-black/20 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/5">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${index === currentIndex ? "w-10 bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]" : "w-2 bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Subtle Bottom Gradient Fade for transition to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
        </section>
    );
}
