"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BookOpen, Sparkles, ArrowDown, TrendingUp, Cpu, Shield, Zap, Search } from "lucide-react";

// Typewriter effect hook for the hero heading
function useTypewriter(words: string[], speed = 40, startDelay = 600, pauseBetween = 1800) {
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const wordIndexRef = useRef(0);
    const charIndexRef = useRef(0);
    const isDeletingRef = useRef(false);
    const wordsRef = useRef(words);

    useEffect(() => {
        wordsRef.current = words;
    }, [words]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let isMounted = true;

        const startTyping = () => {
            if (!isMounted) return;
            setIsTyping(true);

            const type = () => {
                if (!isMounted) return;

                const currentWord = wordsRef.current[wordIndexRef.current];

                if (!isDeletingRef.current) {
                    if (charIndexRef.current <= currentWord.length) {
                        setDisplayText(currentWord.slice(0, charIndexRef.current));
                        charIndexRef.current++;
                        timeout = setTimeout(type, speed);
                    } else {
                        isDeletingRef.current = true;
                        timeout = setTimeout(type, pauseBetween);
                    }
                } else {
                    if (charIndexRef.current > 0) {
                        charIndexRef.current--;
                        setDisplayText(currentWord.slice(0, charIndexRef.current));
                        timeout = setTimeout(type, speed / 2);
                    } else {
                        isDeletingRef.current = false;
                        wordIndexRef.current = (wordIndexRef.current + 1) % wordsRef.current.length;
                        timeout = setTimeout(type, speed);
                    }
                }
            };

            timeout = setTimeout(type, speed);
        };

        const startDelayTimeout = setTimeout(startTyping, startDelay);

        return () => {
            isMounted = false;
            clearTimeout(startDelayTimeout);
            clearTimeout(timeout);
        };
    }, [speed, startDelay, pauseBetween]);

    return { displayText, isTyping };
}

// Floating decorative shapes with parallax
function FloatingShapes() {
    return (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Animated gradient blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-indigo-500/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-[5%] right-[-10%] w-[35%] h-[35%] bg-cyan-500/10 rounded-full blur-[100px] animate-blob-delay" />
            <div className="absolute top-[25%] right-[15%] w-[20%] h-[20%] bg-purple-500/10 rounded-full blur-[90px] animate-blob-delay-2" />

            {/* Decorative geometric shapes */}
            <div className="absolute top-[18%] right-[8%] w-16 h-16 border-2 border-indigo-500/20 rounded-2xl rotate-12 animate-float-slow" />
            <div className="absolute bottom-[25%] left-[6%] w-12 h-12 border-2 border-cyan-400/20 rounded-full animate-float-slow" style={{ animationDelay: "2s" }} />
            <div className="absolute top-[30%] left-[12%] w-8 h-8 bg-indigo-500/10 rounded-lg rotate-45 animate-spin-slow" />
            <div className="absolute bottom-[35%] right-[12%] w-6 h-6 bg-cyan-400/10 rounded-full animate-pulse-glow" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
                style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 20%, transparent 100%)'
                }}
            />
        </div>
    );
}

// Floating particle background
function ParticleBackground() {
    const particles = useMemo(() => {
        const seededValues = Array.from({ length: 18 }, (_, i) => {
            const seed = (i * 137.5) % 100;
            const seed2 = (i * 73.1) % 100;
            const seed3 = (i * 41.7) % 100;
            const seed4 = (i * 29.3) % 100;
            return {
                id: i,
                left: `${seed}%`,
                size: (seed2 % 4) + 2,
                delay: `${seed3 % 8}s`,
                duration: `${(seed4 % 4) + 6}s`,
                color: i % 3 === 0 ? "bg-indigo-500/30" : i % 3 === 1 ? "bg-cyan-400/30" : "bg-white/20",
            };
        });
        return seededValues;
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {particles.map((p: { id: number; left: string; size: number; delay: string; duration: string; color: string }) => (
                <span
                    key={p.id}
                    className={`absolute rounded-full ${p.color} animate-particle`}
                    style={{
                        left: p.left,
                        bottom: "-10px",
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDelay: p.delay,
                        animationDuration: p.duration,
                    }}
                />
            ))}
        </div>
    );
}

// Magnetic button for CTA
function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const button = ref.current;
        if (!button) return;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
        const button = ref.current;
        if (!button) return;
        button.style.transform = "translate(0, 0)";
    };

    return (
        <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 ease-out ${className}`}
        >
            {children}
        </button>
    );
}

export function BlogHero() {
    const { displayText, isTyping } = useTypewriter(
        ["Technology", "Innovation", "Intelligence"],
        40,
        600,
        1800
    );
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    const scrollToArticles = () => {
        document.getElementById("blog-articles")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={sectionRef} className="relative pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
            {/* Animated gradient background with parallax */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-background animate-gradient-shift" />
                <FloatingShapes />
                <ParticleBackground />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div style={{ y: contentY }}>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-cyan-400 text-sm font-bold mb-8 backdrop-blur-sm"
                    >
                        <BookOpen className="w-4 h-4 animate-pulse" />
                        <span>INSIGHTS & INNOVATION</span>
                    </motion.div>

                    {/* Animated heading with typewriter */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight"
                        style={{ perspective: "1000px" }}
                    >
                        <span className="block animate-text-reveal" style={{ animationDelay: "0.3s" }}>
                            The Future of
                        </span>
                        <span className="block mt-2">
                            <span className="gradient-text glow-text inline-block animate-text-reveal" style={{ animationDelay: "0.6s" }}>
                                {displayText}
                                {isTyping && <span className="animate-blink text-indigo-500 dark:text-cyan-400">|</span>}
                            </span>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/70 leading-relaxed mb-12 font-medium"
                    >
                        Deep dives into Artificial Intelligence, Cloud Infrastructure, and the human
                        stories behind digital transformation at JK Computers.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14"
                    >
                        <MagneticButton
                            className="group relative h-14 px-10 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300"
                        >
                            <span className="flex items-center gap-3" onClick={scrollToArticles}>
                                <TrendingUp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Explore Articles
                            </span>
                        </MagneticButton>

                        <MagneticButton
                            className="group h-14 px-10 rounded-full bg-background border border-foreground/10 hover:border-indigo-500/30 text-foreground font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg"
                        >
                            <span className="flex items-center gap-3" onClick={scrollToArticles}>
                                <Search className="w-5 h-5 text-indigo-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                                Browse Topics
                            </span>
                        </MagneticButton>
                    </motion.div>

                    {/* Quick stats / highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/50"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-card-border">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            Latest AI Trends
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-card-border">
                            <Cpu className="w-4 h-4 text-cyan-500" />
                            Expert IT Advice
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-card-border">
                            <Shield className="w-4 h-4 text-indigo-500" />
                            Success Stories
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-card-border">
                            <Zap className="w-4 h-4 text-cyan-500" />
                            Weekly Insights
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                onClick={scrollToArticles}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-foreground/50 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors duration-300 group"
                aria-label="Scroll to articles"
            >
                <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
                <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
                    <div className="w-1 h-1 rounded-full bg-current animate-scroll-indicator" />
                </div>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </motion.button>

            {/* Bottom gradient divider */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        </section>
    );
}