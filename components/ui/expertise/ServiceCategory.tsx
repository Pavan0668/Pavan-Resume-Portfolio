"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { LucideIcon } from "lucide-react";

interface Service {
    title: string;
    description: string;
    icon: any;
}

interface ServiceCategoryProps {
    id: string;
    title: string;
    description: string;
    image: string;
    services: Service[];
    onServiceClick: (service: Service) => void;
}

export function ServiceCategory({ id, title, description, image, services, onServiceClick }: ServiceCategoryProps) {
    return (
        <section id={id} className="py-24 scroll-mt-20 border-b border-foreground/5 last:border-0 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                            {description}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-3xl overflow-hidden glass shadow-2xl relative group">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        {/* Decorative background circle */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                            onClick={() => onServiceClick(service)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
