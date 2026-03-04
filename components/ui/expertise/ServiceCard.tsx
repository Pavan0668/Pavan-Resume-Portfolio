"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: any;
    index: number;
    onClick: () => void;
}

export function ServiceCard({ title, description, icon: Icon, index, onClick }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={onClick}
            className="group relative p-6 rounded-2xl bg-background/50 border border-foreground/10 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300 mb-4">
                    <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed italic">
                    {description}
                </p>

                <div className="mt-4 pt-4 border-t border-foreground/5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 cursor-pointer">
                        Learn more <span className="text-lg">→</span>
                    </span>
                </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500" />
        </motion.div>
    );
}
