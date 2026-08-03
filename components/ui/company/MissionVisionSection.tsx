"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
    ArrowRight,
    CheckCircle2,
    Eye,
    Lightbulb,
    Sparkles,
    Target,
    Zap,
} from "lucide-react";

type PanelId = "mission" | "vision";

type Panel = {
    id: PanelId;
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imageAlt: string;
    accentClass: string;
    icon: typeof Target;
    bullets: string[];
    summary: string;
};

const panels: Panel[] = [
    {
        id: "mission",
        eyebrow: "What Drives Us",
        title: "Mission",
        subtitle: "Deliver reliable innovation with measurable business value",
        description:
            "Our mission is to design and deliver innovative IT solutions that help clients move faster, operate more securely, and grow with confidence. We focus on long-term relationships, high-quality execution, and modern technologies that turn complex business needs into dependable digital outcomes.",
        image: "/images/expertise/project-services.jpg",
        imageAlt: "Technology team collaborating on a project delivery plan",
        accentClass: "from-cyan-400/20 via-indigo-500/10 to-transparent",
        icon: Target,
        bullets: [
            "Deliver innovative software solutions",
            "Build scalable and secure applications",
            "Focus on customer success",
            "Maintain quality and reliability",
            "Embrace modern technologies",
            "Deliver projects efficiently",
        ],
        summary:
            "A practical, client-first mission centered on innovation, reliability, and long-term value.",
    },
    {
        id: "vision",
        eyebrow: "Where We Are Going",
        title: "Vision",
        subtitle: "Become a trusted global technology partner",
        description:
            "Our vision is to become a trusted global technology partner that helps organizations accelerate digital transformation and adopt AI, cloud, and automation with clarity. We aim to keep innovating, create sustainable software solutions, and build partnerships that scale across markets and industries.",
        image: "/images/expertise/cloud.jpg",
        imageAlt: "Modern cloud technology environment representing future digital transformation",
        accentClass: "from-indigo-500/20 via-cyan-400/10 to-transparent",
        icon: Eye,
        bullets: [
            "Become a global technology leader",
            "Empower digital transformation",
            "Leverage AI and cloud innovation",
            "Create sustainable software solutions",
            "Foster continuous improvement",
            "Build long-term partnerships",
        ],
        summary:
            "A future-focused vision built around trust, transformation, and continuous innovation.",
    },
];

const panelButtonBase =
    "group relative overflow-hidden rounded-[2rem] border text-left outline-none transition-all duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const iconBoxBase =
    "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md transition-all duration-500";

const bulletVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.08 * index, duration: 0.35,ease: "easeOut" as const, },
        
    }),
};

export default function MissionVisionSection() {
    const [activePanel, setActivePanel] = useState<PanelId | null>(null);

    return (
        <section
            id="mission-vision"
            className="relative overflow-hidden bg-background py-24 transition-colors md:py-28 lg:py-32"
            aria-labelledby="mission-vision-heading"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />
                <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-cyan-400/12 blur-[120px]" />
                <div className="absolute right-[-5rem] bottom-[-5rem] h-96 w-96 rounded-full bg-indigo-500/12 blur-[140px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.08),transparent_32%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70 backdrop-blur">
                            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                            Mission & Vision
                        </span>
                        <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                            Premium interactive company story
                        </span>
                    </div>

                    <h2
                        id="mission-vision-heading"
                        className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl"
                    >
                        The direction behind{" "}
                        <span className="gradient-text">every client engagement</span>
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 md:text-lg">
                        Explore the principles that shape how we work today and how we plan to
                        grow tomorrow. Hover, click, or tap a panel to reveal the full story.
                    </p>
                </motion.div>

                <div
                    className="hidden lg:flex lg:h-[760px] lg:items-stretch lg:gap-6"
                    onMouseLeave={() => setActivePanel(null)}
                >
                    {panels.map((panel, index) => (
                        <PanelCard
                            key={panel.id}
                            panel={panel}
                            isActive={activePanel === panel.id}
                            hasSelection={activePanel !== null}
                            isDesktop
                            onActivate={() => setActivePanel(panel.id)}
                            index={index}
                        />
                    ))}
                </div>

                <div className="hidden md:grid md:gap-5 lg:hidden">
                    {panels.map((panel, index) => (
                        <PanelCard
                            key={panel.id}
                            panel={panel}
                            isActive={activePanel === panel.id}
                            hasSelection={activePanel !== null}
                            onActivate={() => setActivePanel(panel.id)}
                            index={index}
                        />
                    ))}
                </div>

                <div className="grid gap-4 md:hidden">
                    {panels.map((panel, index) => (
                        <MobileAccordionCard
                            key={panel.id}
                            panel={panel}
                            isActive={activePanel === panel.id}
                            onActivate={() => setActivePanel(panel.id)}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PanelCard({
    panel,
    isActive,
    hasSelection,
    isDesktop = false,
    onActivate,
    index,
}: {
    panel: Panel;
    isActive: boolean;
    hasSelection: boolean;
    isDesktop?: boolean;
    onActivate: () => void;
    index: number;
}) {
    const Icon = panel.icon;

    return (
        <motion.article
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            aria-label={`${panel.title} panel`}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            onClick={onActivate}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onActivate();
                }
            }}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={[
                panelButtonBase,
                "h-full min-h-[360px] md:min-h-[430px] lg:min-h-0",
                isActive
                    ? "border-cyan-400/30 shadow-[0_28px_90px_rgba(2,6,23,0.22)]"
                    : "border-white/10 shadow-[0_18px_50px_rgba(2,6,23,0.12)]",
                isDesktop
                    ? !hasSelection
                        ? "lg:[flex:0_0_50%]"
                        : isActive
                            ? "lg:[flex:0_0_65%]"
                            : "lg:[flex:0_0_35%]"
                    : "w-full",
            ].join(" ")}
        >
            <div className="absolute inset-0">
                <motion.div
                    animate={{ scale: isActive ? 1.08 : 1.02, y: isActive ? -4 : 0 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={panel.image}
                        alt={panel.imageAlt}
                        fill
                        sizes={isDesktop ? "(min-width: 1024px) 65vw, 100vw" : "(min-width: 768px) 100vw, 100vw"}
                        className="object-cover object-center"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-slate-950/65 transition-opacity duration-500 ease-in-out" />
                <div className={`absolute inset-0 bg-gradient-to-br ${panel.accentClass} opacity-100`} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px] opacity-15 mix-blend-screen" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.14),transparent_32%)]" />

            <div className="relative flex h-full flex-col justify-between p-6 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                    <div className={iconBoxBase}>
                        <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <motion.div
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white/80 backdrop-blur-md"
                    >
                        <ArrowRight className="h-4 w-4" />
                    </motion.div>
                </div>

                <div className="mt-6 max-w-xl">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200/90 backdrop-blur-sm">
                            {panel.eyebrow}
                        </span>
                        <span
                            className={[
                                "inline-flex h-2.5 w-2.5 rounded-full transition-all duration-500",
                                isActive
                                    ? "bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.85)]"
                                    : "bg-white/35",
                            ].join(" ")}
                        />
                    </div>

                    <motion.h3
                        animate={{ y: isActive ? 0 : 4, opacity: 1 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl"
                    >
                        {panel.title}
                    </motion.h3>
                </div>

                <AnimatePresence mode="wait">
                    {isActive && (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 14 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/85 md:text-base">
                                {panel.subtitle}
                            </p>

                            <p className="mt-4 text-sm leading-relaxed text-white/78 md:text-base">
                                {panel.description}
                            </p>

                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                className="mt-6 grid gap-3 sm:grid-cols-2"
                            >
                                {panel.bullets.map((bullet, bulletIndex) => (
                                    <motion.li
                                        key={bullet}
                                        custom={bulletIndex}
                                        variants={bulletVariants}
                                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-sm text-white/85 backdrop-blur-sm"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
                                        <span>{bullet}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-sm">
                                <Zap className="h-4 w-4" />
                                {panel.summary}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.article>
    );
}

function MobileAccordionCard({
    panel,
    isActive,
    onActivate,
    index,
}: {
    panel: Panel;
    isActive: boolean;
    onActivate: () => void;
    index: number;
}) {
    const Icon = panel.icon;

    return (
        <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className={[
                "overflow-hidden rounded-[1.75rem] border transition-all duration-500 ease-in-out",
                isActive
                    ? "border-cyan-400/30 shadow-[0_22px_70px_rgba(2,6,23,0.18)]"
                    : "border-white/10 shadow-[0_14px_40px_rgba(2,6,23,0.1)]",
            ].join(" ")}
        >
            <button
                type="button"
                onClick={onActivate}
                aria-expanded={isActive}
                className="flex w-full items-center justify-between gap-4 bg-background/80 px-5 py-4 text-left backdrop-blur-sm transition-colors duration-300"
            >
                <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-cyan-300">
                        <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-black text-foreground">{panel.title}</h3>
                </div>

                <motion.div animate={{ rotate: isActive ? 90 : 0 }} transition={{ duration: 0.35 }}>
                    <ArrowRight className="h-5 w-5 text-foreground/60" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isActive && (
                    <motion.div
                        key={panel.id}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: "easeInOut" }}
                        className="overflow-hidden bg-background"
                    >
                        <div className="relative h-[260px] overflow-hidden">
                            <Image
                                src={panel.image}
                                alt={panel.imageAlt}
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-slate-950/55" />
                            <div className={`absolute inset-0 bg-gradient-to-br ${panel.accentClass}`} />
                        </div>

                        <div className="p-5">
                            <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                                {panel.subtitle}
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                                {panel.description}
                            </p>

                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                className="mt-5 grid gap-3 sm:grid-cols-2"
                            >
                                {panel.bullets.map((bullet, bulletIndex) => (
                                    <motion.li
                                        key={bullet}
                                        custom={bulletIndex}
                                        variants={bulletVariants}
                                        className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-3 text-sm text-foreground/75"
                                    >
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                                        <span>{bullet}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                                <Lightbulb className="h-4 w-4" />
                                {panel.summary}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
