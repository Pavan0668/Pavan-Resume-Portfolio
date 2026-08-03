"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Briefcase, MapPin, ShieldCheck, Sparkles, XCircle } from "lucide-react";

interface JobCardProps {
    title: string;
    description: string;
    skills: string[];
    location: string;
    department: string;
    isExpired?: boolean;
    onApply: () => void;
}

export function JobCard({
    title,
    description,
    skills,
    location,
    department,
    isExpired = false,
    onApply,
}: JobCardProps) {
    const statusLabel = isExpired ? "Role closed" : "Now hiring";
    const statusClass = isExpired
        ? "border-rose-500/20 bg-rose-500/10 text-rose-500"
        : "border-emerald-500/20 bg-emerald-500/10 text-emerald-500";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 md:p-8 ${
                isExpired
                    ? "border-foreground/10 bg-foreground/5 opacity-80"
                    : "border-foreground/10 bg-background hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10"
            }`}
        >
            {!isExpired && (
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent opacity-70" />
            )}

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div className="flex-1">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${statusClass}`}>
                            {isExpired ? <XCircle className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                            {statusLabel}
                        </span>
                        <span className="text-xs font-medium uppercase tracking-[0.25em] leading-none text-foreground/50">
                            {department}
                        </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-foreground transition-colors group-hover:text-indigo-500 md:text-[2rem]">
                        {title}
                    </h3>

                    <p className="max-w-3xl whitespace-pre-line text-base leading-relaxed text-foreground/70 md:text-[1.05rem]">
                        {description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm text-foreground/60">
                            <MapPin className="h-4 w-4 text-indigo-500" />
                            {location}
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm text-foreground/60">
                            <Briefcase className="h-4 w-4 text-indigo-500" />
                            Full Time
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-sm text-foreground/60">
                            <ShieldCheck className="h-4 w-4 text-indigo-500" />
                            Future-ready track
                        </div>
                    </div>

                    <div className="mt-7 space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/60">Core capabilities</h4>
                        <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="rounded-full border border-foreground/10 bg-background px-3.5 py-1.5 text-xs font-medium text-foreground/70"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-stretch justify-between self-stretch md:items-end">
                    <div className="hidden md:block">
                        {isExpired ? (
                            <XCircle className="h-8 w-8 text-red-500/30" />
                        ) : (
                            <BadgeCheck className="h-8 w-8 text-green-500/30" />
                        )}
                    </div>

                    <button
                        onClick={onApply}
                        disabled={isExpired}
                        className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 md:mt-0 ${
                            isExpired
                                ? "cursor-not-allowed bg-foreground/10 text-foreground/35"
                                : "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5 hover:bg-indigo-700 active:scale-95"
                        }`}
                    >
                        {isExpired ? "Applications closed" : "Apply now"}
                        {!isExpired && <ArrowRight className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {!isExpired && (
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
            )}
        </motion.div>
    );
}
