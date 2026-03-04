"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Tag, MessageSquare, CheckCircle2 } from "lucide-react";

export function FAQContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact-form" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 tracking-tight">Still have questions?</h2>
                        <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                            Can't find the answer you're looking for? Our dedicated support team is
                            ready to assist you with any inquiries regarding our services,
                            custom implementations, or technical support.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-indigo-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email us directly</h4>
                                    <p className="text-foreground/60">contact@jkcomputers.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-indigo-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Call our support</h4>
                                    <p className="text-foreground/60">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10" />
                        <div className="glass-card p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-2xl">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="relative group">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                            <input
                                                required
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Subject"
                                            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                                        />
                                    </div>

                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500" />
                                        <textarea
                                            required
                                            rows={5}
                                            placeholder="Your Message"
                                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-foreground/5 border border-foreground/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none resize-none"
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
                                    <h3 className="text-3xl font-bold mb-4">Message Received!</h3>
                                    <p className="text-foreground/70 text-lg">
                                        Thank you for reaching out. We've received your request and our team will get back to you within 24 hours.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
