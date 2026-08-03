"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, MapPin, Phone, Mail, Clock, ArrowDown, Sparkles, Zap, Shield, Cpu } from "lucide-react";

// Typewriter effect hook that cycles through multiple words
function useTypewriter(words: string[], speed = 30, startDelay = 500, pauseBetween = 1500) {
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const wordIndexRef = useRef(0);
    const charIndexRef = useRef(0);
    const isDeletingRef = useRef(false);
    const wordsRef = useRef(words);

    // Keep words ref in sync without triggering re-renders
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
                    // Typing forward - faster
                    if (charIndexRef.current <= currentWord.length) {
                        setDisplayText(currentWord.slice(0, charIndexRef.current));
                        charIndexRef.current++;
                        timeout = setTimeout(type, speed);
                    } else {
                        // Pause at full word, then start deleting
                        isDeletingRef.current = true;
                        timeout = setTimeout(type, pauseBetween);
                    }
                } else {
                    // Deleting backward - faster
                    if (charIndexRef.current > 0) {
                        charIndexRef.current--;
                        setDisplayText(currentWord.slice(0, charIndexRef.current));
                        timeout = setTimeout(type, speed / 2);
                    } else {
                        // Move to next word
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

// Magnetic button component
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

// Ripple effect button
function RippleButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 600);
    };

    return (
        <button onClick={handleClick} className={`relative overflow-hidden ${className}`}>
            {children}
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute w-4 h-4 rounded-full bg-white/30 animate-ripple pointer-events-none"
                    style={{ left: ripple.x - 8, top: ripple.y - 8 }}
                />
            ))}
        </button>
    );
}

// Particle background component
function ParticleBackground() {
    const particles = useMemo(() => {
        // Deterministic pseudo-random values for stable rendering
        const seededValues = Array.from({ length: 20 }, (_, i) => {
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

// Floating decorative shapes
function FloatingShapes() {
    return (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Animated blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px] animate-blob-delay" />
            <div className="absolute top-[30%] right-[20%] w-[20%] h-[20%] bg-purple-500/10 rounded-full blur-[80px] animate-blob-delay-2" />

            {/* Decorative geometric shapes */}
            <div className="absolute top-[15%] right-[10%] w-16 h-16 border-2 border-indigo-500/20 rounded-2xl rotate-12 animate-float-slow" />
            <div className="absolute bottom-[20%] left-[8%] w-12 h-12 border-2 border-cyan-400/20 rounded-full animate-float-slow" style={{ animationDelay: "2s" }} />
            <div className="absolute top-[25%] left-[15%] w-8 h-8 bg-indigo-500/10 rounded-lg rotate-45 animate-spin-slow" />
            <div className="absolute bottom-[30%] right-[15%] w-6 h-6 bg-cyan-400/10 rounded-full animate-pulse-glow" />

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

// Contact info card with 3D tilt
function ContactInfoCard({ icon: Icon, label, value, href, delay }: {
    icon: typeof MapPin;
    label: string;
    value: string;
    href?: string;
    delay: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const card = ref.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateY(-4px)`;
    };

    const handleMouseLeave = () => {
        const card = ref.current;
        if (!card) return;
        card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)";
    };

    const content = (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative glass-card rounded-2xl p-5 border border-card-border hover:border-card-border-hover transition-all duration-500 hover:shadow-[0_20px_60px_var(--glow-shadow)] will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:bg-indigo-500/20">
                    <Icon className="w-5 h-5 text-indigo-500 dark:text-cyan-400 group-hover:animate-icon-float" />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold text-foreground/50 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-xs font-medium text-foreground/80 leading-tight group-hover:text-foreground transition-colors duration-300 break-words">
                        {value}
                    </p>
                </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} className="block" aria-label={`${label}: ${value}`}>
                {content}
            </a>
        );
    }

    return content;
}

export default function ContactHero() {
    const { displayText, isTyping } = useTypewriter(
        ["conversation", "discussion", "collaboration"],
        30,
        500,
        1500
    );
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

    const scrollToForm = () => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section ref={sectionRef} className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
            {/* Animated background with parallax only */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-background animate-gradient-shift" />
                <FloatingShapes />
                <ParticleBackground />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-cyan-400 text-sm font-bold mb-8 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        <span>GET IN TOUCH</span>
                    </motion.div>

                    {/* Animated heading with 3D text effect */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight"
                        style={{ perspective: "1000px" }}
                    >
                        <span className="block animate-text-reveal" style={{ animationDelay: "0.3s" }}>
                            {"Let's start a"}
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
                        Have a project in mind? Need expert IT consultation? Our team is ready to
                        discuss how JK Computers can transform your business with cutting-edge technology.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                    >
                        <MagneticButton
                            className="group relative h-14 px-10 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all duration-300"
                        >
                            <RippleButton className="w-full h-full flex items-center gap-3">
                                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                Start Your Project
                            </RippleButton>
                        </MagneticButton>

                        <MagneticButton
                            className="group h-14 px-10 rounded-full bg-background border border-foreground/10 hover:border-indigo-500/30 text-foreground font-bold flex items-center gap-3 transition-all duration-300 hover:shadow-lg"
                        >
                            <RippleButton className="w-full h-full flex items-center gap-3">
                                <MessageSquare className="w-5 h-5 text-indigo-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                                Schedule a Call
                            </RippleButton>
                        </MagneticButton>
                    </motion.div>

                    {/* Quick info cards with 3D tilt */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        <ContactInfoCard
                            icon={MapPin}
                            label="Address"
                            value="Pune, Maharashtra"
                            delay={0.8}
                        />
                        <ContactInfoCard
                            icon={Phone}
                            label="Phone"
                            value="+91 9324310387"
                            href="tel:+919324310387"
                            delay={0.9}
                        />
                        <ContactInfoCard
                            icon={Mail}
                            label="Email"
                            value="jkcsolutionspune@gmail.com"
                            href="mailto:jkcsolutionspune@gmail.com"
                            delay={1.0}
                        />
                        <ContactInfoCard
                            icon={Clock}
                            label="Response Time"
                            value="Within 24 hours"
                            delay={1.1}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - positioned lower to avoid overlap */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                onClick={scrollToForm}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-foreground/50 hover:text-indigo-500 dark:hover:text-cyan-400 transition-colors duration-300 group"
                aria-label="Scroll to contact form"
            >
                <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
                <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center pt-1.5">
                    <div className="w-1 h-1 rounded-full bg-current animate-scroll-indicator" />
                </div>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </motion.button>

            {/* Floating tech icons */}
            <div className="absolute top-[20%] right-[5%] hidden lg:block pointer-events-none" aria-hidden="true">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center animate-float-slow">
                    <Cpu className="w-7 h-7 text-indigo-500/60" />
                </div>
            </div>
            <div className="absolute bottom-[25%] left-[5%] hidden lg:block pointer-events-none" aria-hidden="true">
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center animate-float-slow" style={{ animationDelay: "3s" }}>
                    <Shield className="w-6 h-6 text-cyan-400/60" />
                </div>
            </div>
        </section>
    );
}