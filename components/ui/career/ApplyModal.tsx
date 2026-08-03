"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Mail,
    MessageSquare,
    Phone,
    Send,
    Upload,
    User,
    X,
} from "lucide-react";
import { useState } from "react";

interface ApplyModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fileName, setFileName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-3 sm:items-center sm:p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 20 }}
                        className="relative my-3 flex h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-background shadow-2xl sm:my-0 sm:h-[calc(100dvh-2rem)] sm:rounded-[2rem]"
                    >
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500" />

                        <div className="grid min-h-0 flex-1 gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="relative hidden h-full overflow-hidden border-r border-foreground/10 bg-slate-950 p-8 text-white lg:block">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.35),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.2),_transparent_32%)]" />
                                <div className="relative z-10 flex h-full flex-col justify-between">
                                    <div>
                                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                                            <Send className="h-3.5 w-3.5" />
                                            Future application
                                        </div>
                                        <h2 className="text-3xl font-black tracking-tight text-balance">
                                            Apply for the next generation of work
                                        </h2>
                                        <p className="mt-4 text-sm leading-relaxed text-white/70">
                                            Send us a clean profile, a short note about your strengths, and we will keep it ready for relevant openings.
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                            <p className="text-xs uppercase tracking-[0.25em] text-white/45">Role</p>
                                            <p className="mt-1 font-semibold text-white">{jobTitle}</p>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                            <p className="text-xs uppercase tracking-[0.25em] text-white/45">Process</p>
                                            <p className="mt-1 text-sm text-white/75">
                                                Review, shortlist, interview, and connect with the right team.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex h-full min-h-0 flex-col overflow-hidden">
                                <div className="mb-5 rounded-2xl border border-foreground/10 bg-slate-950 p-5 text-white lg:hidden">
                                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                                        <Send className="h-3.5 w-3.5" />
                                        Future application
                                    </div>
                                    <h2 className="text-2xl font-black tracking-tight text-balance">
                                        Apply for the next generation of work
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                                        Send us a clean profile and a short note about your strengths.
                                    </p>
                                </div>

                                <div className="relative flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 pb-5 sm:px-8 sm:pb-8">
                                    <button
                                        onClick={onClose}
                                        className="absolute right-4 top-4 rounded-full border border-foreground/10 p-2 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground sm:right-5 sm:top-5"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>

                                    {!isSubmitted ? (
                                        <>
                                            <div className="mb-8 pt-2 sm:pt-0">
                                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
                                                    <Send className="h-6 w-6" />
                                                </div>
                                                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                                                    Start your application
                                                </h3>
                                                <p className="mt-2 text-sm text-foreground/60">
                                                    Tell us a bit about yourself for <span className="font-semibold text-indigo-600">{jobTitle}</span>.
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/30" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Full name"
                                                    className="h-12 w-full rounded-2xl border border-foreground/10 bg-foreground/5 pl-12 pr-4 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-indigo-500 focus:bg-background focus:ring-1 focus:ring-indigo-500/30"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/30" />
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="Mobile number"
                                                        className="h-12 w-full rounded-2xl border border-foreground/10 bg-foreground/5 pl-12 pr-4 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-indigo-500 focus:bg-background focus:ring-1 focus:ring-indigo-500/30"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-foreground/30" />
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="Email address"
                                                        className="h-12 w-full rounded-2xl border border-foreground/10 bg-foreground/5 pl-12 pr-4 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-indigo-500 focus:bg-background focus:ring-1 focus:ring-indigo-500/30"
                                                    />
                                                </div>
                                            </div>

                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-foreground/30" />
                                                <textarea
                                                    placeholder="Short note about your experience"
                                                    rows={4}
                                                    className="w-full resize-none rounded-2xl border border-foreground/10 bg-foreground/5 py-3 pl-12 pr-4 text-foreground outline-none transition-all placeholder:text-foreground/35 focus:border-indigo-500 focus:bg-background focus:ring-1 focus:ring-indigo-500/30"
                                                />
                                            </div>

                                            <div>
                                                <input
                                                    type="file"
                                                    id="resume-upload"
                                                    className="hidden"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                />
                                                <label
                                                    htmlFor="resume-upload"
                                                    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-foreground/15 bg-foreground/5 px-4 py-8 text-center transition-all hover:border-indigo-500/40 hover:bg-indigo-500/5"
                                                >
                                                    <Upload className="mb-2 h-7 w-7 text-indigo-500" />
                                                    <span className="text-sm font-medium text-foreground">
                                                        {fileName || "Upload resume"}
                                                    </span>
                                                    <span className="mt-1 text-xs text-foreground/40">
                                                        PDF, DOC, or DOCX up to 5MB
                                                    </span>
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 active:scale-95"
                                            >
                                                Submit application
                                                <ArrowRight className="h-4 w-4" />
                                            </button>

                                            <div className="flex items-center gap-2 rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-xs text-foreground/55">
                                                <Clock3 className="h-4 w-4 text-indigo-500" />
                                                We typically review applications within a few business days.
                                            </div>
                                            </form>
                                        </>
                                    ) : (
                                        <div className="flex min-h-[320px] flex-col items-center justify-center py-10 text-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10"
                                            >
                                                <CheckCircle2 className="h-10 w-10 text-green-500" />
                                            </motion.div>
                                            <h3 className="text-3xl font-bold text-foreground">Application sent</h3>
                                            <p className="mt-3 max-w-sm text-sm leading-relaxed text-foreground/65">
                                                Thanks for reaching out. We will keep your profile in mind for the right opportunities.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
