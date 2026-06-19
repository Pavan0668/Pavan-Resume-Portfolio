"use client";

import { motion } from "framer-motion";
import { MessageSquare, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-bold mb-6">
                        <MessageSquare className="w-4 h-4" />
                        <span>GET IN TOUCH</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                        Let's start a <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">
                            conversation
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl text-foreground/70 leading-relaxed mb-12">
                        Have a project in mind? Need expert IT consultation? Our team is ready to
                        discuss how JK Computers can transform your business with cutting-edge technology.
                    </p>

                    {/* Quick info cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        <div className="glass-card rounded-2xl p-5 border border-card-border flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-indigo-500" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Address</p>
                                <p className="text-sm font-medium text-foreground/80 leading-tight">Pune, Maharashtra</p>
                            </div>
                        </div>
                        <div className="glass-card rounded-2xl p-5 border border-card-border flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-6 h-6 text-indigo-500" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Phone</p>
                                <p className="text-sm font-medium text-foreground/80 leading-tight">+91 866 826 2359</p>
                            </div>
                        </div>
                        <div className="glass-card rounded-2xl p-5 border border-card-border flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-6 h-6 text-indigo-500" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Email</p>
                                <p className="text-sm font-medium text-foreground/80 leading-tight">jkcsolutionspune@gmail.com</p>
                            </div>
                        </div>
                        <div className="glass-card rounded-2xl p-5 border border-card-border flex items-center gap-4 text-left">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-indigo-500" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">Response Time</p>
                                <p className="text-sm font-medium text-foreground/80 leading-tight">Within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}