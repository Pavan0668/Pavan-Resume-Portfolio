"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    detailedDescription: string;
    icon: any;
}

export function ServiceModal({ isOpen, onClose, title, description, detailedDescription, icon: Icon }: ServiceModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-background/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-background border border-foreground/10 rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 z-10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground/50 hover:text-foreground"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col items-start gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <Icon className="w-8 h-8" />
                            </div>

                            <div>
                                <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight">
                                    {title}
                                </h2>
                                <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-6">
                                    {description}
                                </p>
                                <div className="space-y-4 text-foreground/70 leading-relaxed">
                                    {detailedDescription.split('\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-foreground/5 w-full flex justify-end gap-4">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-3 rounded-xl border border-foreground/10 text-foreground font-semibold hover:bg-foreground/5 transition-colors"
                                >
                                    Close
                                </button>
                                <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
