"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { CareerHero } from "@/components/ui/career/CareerHero";
import { JobCard } from "@/components/ui/career/JobCard";
import { ApplyModal } from "@/components/ui/career/ApplyModal";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Rocket, ShieldCheck, Sparkles, Users } from "lucide-react";

const jobs = [
    {
        title: "IT Administrator",
        description:
            "Repairing & maintenance of computer peripherals\nTroubleshooting\nInstallation of operating system\nTroubleshooting of mails\nAssembling & disassembling of computer\nBackup & restoring Data\nCreating & management of user account\nIP Addressing\nCrimping, I/O Punching cables\nConfigure Firewall, Router, Switch, Access point",
        skills: ["Bsc.IT", "Diploma IT", "Hardware Networking course", "Good Technical knowledge", "Positive thinker", "MS Office", "Outlook"],
        location: "Mumbai, Maharashtra",
        department: "IT Support & Infrastructure",
        isExpired: false,
    },
    {
        title: ".NET Developer (Fresher)",
        description:
            "We are looking for an enthusiastic and talented Fresher .NET Developer to join our growing development team. You will work on building scalable, high-performance web applications and services using the latest .NET ecosystem.\n\nKey Responsibilities:\n- Assist in the development of robust web applications\n- Write clean, maintainable, and efficient code\n- Collaborate with senior developers and cross-functional teams\n- Participate in code reviews and troubleshooting",
        skills: [".NET Core", "C#", "ASP.NET MVC", "SQL Server", "REST APIs", "Entity Framework", "JavaScript/React"],
        location: "Pune, Maharashtra",
        department: "Software Development",
        isExpired: true,
    },
];

const futurePillars = [
    {
        icon: BrainCircuit,
        title: "AI-native delivery",
        description: "People who can use automation, agents, and modern tooling without losing product quality or human judgment.",
    },
    {
        icon: ShieldCheck,
        title: "Security-first thinking",
        description: "Every role benefits from secure habits, clean processes, and an awareness of real-world risk.",
    },
    {
        icon: Rocket,
        title: "Fast shipping, steady quality",
        description: "We value teams that can move quickly while keeping the architecture maintainable over the long run.",
    },
];

const hiringValues = [
    "Curiosity over ego",
    "Reliable execution",
    "Cross-team collaboration",
    "Continuous learning",
];

const activeRoles = jobs.filter((job) => !job.isExpired).length;

export default function CareerPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApply = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <CareerHero />

            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="grid gap-4 md:grid-cols-3">
                    {futurePillars.map((pillar) => {
                        const Icon = pillar.icon;

                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-[1.5rem] border border-foreground/10 p-6"
                            >
                                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h2 className="text-xl font-bold text-foreground">{pillar.title}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{pillar.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            <section id="open-roles" className="mx-auto max-w-7xl px-6 py-6">
                <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/55">
                            <Sparkles className="h-4 w-4 text-indigo-500" />
                            Careers 2032
                        </div>
                        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Open opportunities and future tracks</h2>
                        <p className="mt-4 max-w-xl text-foreground/65">
                            We are actively hiring an IT Administrator to strengthen our IT Support &amp; Infrastructure team. We also keep strong profiles ready for the next wave of roles across software and infrastructure.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm font-medium text-foreground/70">
                            <div className="h-2 w-2 rounded-full bg-emerald-500" />
                            {activeRoles} Active {activeRoles === 1 ? "Role" : "Roles"}
                        </div>
                        <a
                            href="#talent-network"
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700"
                        >
                            Join talent network
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {activeRoles === 0 && (
                    <div className="mb-8 rounded-[1.75rem] border border-foreground/10 bg-foreground/5 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/50">Current status</p>
                        <h3 className="mt-2 text-2xl font-bold">No active openings at the moment</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/65">
                            The roles below represent the kind of work we hire for. If you connect with our mission, use the talent network button and we will keep your profile on file for the right opening.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 gap-6">
                    {jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            title={job.title}
                            description={job.description}
                            skills={job.skills}
                            location={job.location}
                            department={job.department}
                            isExpired={job.isExpired}
                            onApply={() => handleApply(job.title)}
                        />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid gap-6 rounded-[2rem] border border-foreground/10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.12),_transparent_32%),linear-gradient(135deg,_rgba(15,23,42,0.03),_rgba(15,23,42,0.01))] p-8 md:p-10 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/45">What we value</p>
                        <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">A career page designed for adaptability, not just today</h2>
                        <p className="mt-4 max-w-2xl text-foreground/65">
                            This layout is intentionally more modular and content-driven so it can scale as hiring needs change over time. The structure supports new roles, future benefits, and updated messaging without a full redesign.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {hiringValues.map((value) => (
                                <span
                                    key={value}
                                    className="rounded-full border border-foreground/10 bg-background px-4 py-2 text-sm font-medium text-foreground/70"
                                >
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] border border-foreground/10 bg-background/80 p-5">
                            <Users className="h-6 w-6 text-indigo-500" />
                            <h3 className="mt-4 text-lg font-bold">Team fit</h3>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                                We look for people who collaborate well and can translate complexity into dependable delivery.
                            </p>
                        </div>
                        <div className="rounded-[1.5rem] border border-foreground/10 bg-background/80 p-5">
                            <Sparkles className="h-6 w-6 text-cyan-500" />
                            <h3 className="mt-4 text-lg font-bold">Learning loop</h3>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                                We value growth-oriented people who keep their skills current as tools and platforms evolve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="talent-network" className="mx-auto max-w-7xl px-6 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[2rem] bg-indigo-600 px-8 py-10 text-white md:px-12 md:py-12"
                >
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white/30 blur-3xl" />
                        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/30 blur-3xl" />
                    </div>

                    <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/65">Talent network</p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                                Don&apos;t see the right role? Stay on our radar.
                            </h2>
                            <p className="mt-4 max-w-2xl text-white/80">
                                Send a general application and we will keep your profile in mind for future openings across software, infrastructure, and support.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                            <button
                                onClick={() => handleApply("General Talent Network Application")}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 shadow-xl transition-all hover:-translate-y-0.5 active:scale-95"
                            >
                                Send your CV
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            <ApplyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob || ""}
            />

            <Footer />
        </main>
    );
}
