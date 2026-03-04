"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Send, CheckCircle2, User, Phone, Mail, MessageSquare } from "lucide-react";
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
        // Here we would normally handle the form submission
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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg glass-card rounded-3xl p-8 shadow-2xl border border-foreground/10 overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-foreground/5 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <Send className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <h2 className="text-3xl font-bold mb-2">Apply Now</h2>
                                    <p className="text-foreground/60">
                                        Application for <span className="text-indigo-500 font-semibold">{jobTitle}</span>
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full h-12 pl-12 pr-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Mobile Number"
                                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full h-12 pl-12 pr-4 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-foreground/30" />
                                        <textarea
                                            placeholder="Your Message / Bio"
                                            rows={4}
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none resize-none"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="file"
                                            id="resume-upload"
                                            className="hidden"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange}
                                        />
                                        <label
                                            htmlFor="resume-upload"
                                            className="flex flex-col items-center justify-center w-full py-8 border-2 border-dashed border-foreground/10 rounded-2xl hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all cursor-pointer"
                                        >
                                            <Upload className="w-8 h-8 text-indigo-500 mb-2" />
                                            <span className="text-sm font-medium text-foreground">
                                                {fileName || "Upload Resume (PDF, DOCX)"}
                                            </span>
                                            <span className="text-xs text-foreground/40 mt-1">
                                                Max size: 5MB
                                            </span>
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
                                    >
                                        Submit Application
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6"
                                >
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </motion.div>
                                <h2 className="text-3xl font-bold mb-3">Application Sent!</h2>
                                <p className="text-foreground/70 mb-2">
                                    Thank you for your interest in joining JK Computers.
                                </p>
                                <p className="text-foreground/50 text-sm">
                                    Our HR team will review your profile and get back to you soon.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
