"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Tag, MessageSquare, CheckCircle2, MapPin, Building2, Globe } from "lucide-react";

export default function ContactFormSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section className="py-20 relative overflow-hidden bg-foreground/[0.01]">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Contact Details */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-4">
                                Contact Us
                            </p>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-6">
                                Let's discuss your{" "}
                                <span className="gradient-text">next project</span>
                            </h2>
                            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
                                Whether you need managed IT support, cloud infrastructure, AI automation,
                                or a custom website — our team is ready to help. Fill out the form and
                                we'll get back to you within 24 hours.
                            </p>

                            {/* Contact Info List */}
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Office Address</h4>
                                        <p className="text-foreground/60 leading-relaxed">
                                            545/B, Boulevard Towers by BramhaCorp, Sadhu Vaswani Chowk,<br />
                                            opposite Vijay Sales, Camp, Pune, Maharashtra 411001
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Email</h4>
                                        <p className="text-foreground/60">jkcsolutionspune@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-indigo-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Phone</h4>
                                        <p className="text-foreground/60">+91 866 826 2359</p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Badges */}
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-sm font-semibold border border-indigo-500/20">
                                    IT Support
                                </span>
                                <span className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-sm font-semibold border border-indigo-500/20">
                                    Cloud Solutions
                                </span>
                                <span className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-sm font-semibold border border-indigo-500/20">
                                    AI Automation
                                </span>
                                <span className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-sm font-semibold border border-indigo-500/20">
                                    Web Development
                                </span>
                                <span className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-sm font-semibold border border-indigo-500/20">
                                    Security
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10" />
                            <div className="glass-card p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-2xl">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Full Name *"
                                                    className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-foreground placeholder-foreground/40"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="Email Address *"
                                                    className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-foreground placeholder-foreground/40"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-foreground placeholder-foreground/40"
                                                />
                                            </div>
                                            <div className="relative group">
                                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                                <input
                                                    type="text"
                                                    placeholder="Company Name"
                                                    className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-foreground placeholder-foreground/40"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                            <select
                                                required
                                                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none text-foreground appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled selected>Select Service *</option>
                                                <option value="managed-it-support">Managed IT Support</option>
                                                <option value="cloud-infrastructure">Cloud Infrastructure</option>
                                                <option value="ai-automation">AI & Automation</option>
                                                <option value="web-development">Website Development</option>
                                                <option value="security">Security & Surveillance</option>
                                                <option value="consulting">IT Consulting</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div className="relative group">
                                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                            <textarea
                                                required
                                                rows={5}
                                                placeholder="Tell us about your project *"
                                                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none resize-none text-foreground placeholder-foreground/40"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full h-16 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg transition-all shadow-xl shadow-indigo-500/20 active:scale-[0.98] flex items-center justify-center gap-3"
                                        >
                                            Send Message
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </form>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-8"
                                        >
                                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                                        </motion.div>
                                        <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                        <p className="text-foreground/70 text-lg">
                                            Thank you for reaching out. We've received your request and our team will get back to you within 24 hours.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}