"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ChevronRight, CheckCircle2, XCircle } from "lucide-react";

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
    onApply
}: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative group rounded-2xl border p-6 transition-all duration-300 ${isExpired
                    ? "bg-foreground/5 border-foreground/10 opacity-75 grayscale-[0.5]"
                    : "bg-background border-foreground/10 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
                }`}
        >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${isExpired
                                ? "bg-red-500/10 text-red-500"
                                : "bg-green-500/10 text-green-500"
                            }`}>
                            {isExpired ? "Expired" : "Active"}
                        </span>
                        <span className="text-xs text-foreground/50 font-medium uppercase tracking-widest leading-none">
                            {department}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-indigo-500 transition-colors">
                        {title}
                    </h3>

                    <p className="text-foreground/70 mb-6 leading-relaxed max-w-2xl whitespace-pre-line">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <MapPin className="w-4 h-4 text-indigo-500" />
                            {location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                            <Briefcase className="w-4 h-4 text-indigo-500" />
                            Full Time
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-bold text-foreground">Minimum Skills Required:</h4>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 rounded-lg bg-foreground/5 border border-foreground/10 text-xs font-medium text-foreground/70"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-stretch md:items-end justify-between self-stretch">
                    <div className="hidden md:block">
                        {isExpired ? (
                            <XCircle className="w-8 h-8 text-red-500/30" />
                        ) : (
                            <CheckCircle2 className="w-8 h-8 text-green-500/30" />
                        )}
                    </div>

                    <button
                        onClick={onApply}
                        disabled={isExpired}
                        className={`mt-4 md:mt-0 flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${isExpired
                                ? "bg-foreground/10 text-foreground/30 cursor-not-allowed"
                                : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20 hover:-translate-y-1 active:scale-95"
                            }`}
                    >
                        {isExpired ? "Applications Closed" : "Apply Now"}
                        {!isExpired && <ChevronRight className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Background elements */}
            {!isExpired && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />
            )}
        </motion.div>
    );
}
