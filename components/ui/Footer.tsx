"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-foreground/10 bg-background relative z-10 pt-16 pb-8 transition-colors">
            <div className="max-w-7xl mx-auto px-6">

                {/* Main 4-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Mission & Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
                            <div className="w-12 h-12 flex items-center justify-center transition-transform hover:scale-105">
                                <img src="/logo.png" alt="JKC Solutions" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                Total IT Solutions
                            </span>
                        </Link>
                        <p className="text-foreground/70 mb-6 leading-relaxed">
                            We empower modern enterprises by combining rock-solid core IT infrastructure with the frontier of autonomous AI technologies.
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-foreground/70">
                            <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-indigo-500" /> 123 Innovation Drive, Tech City</div>
                            <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-indigo-500" /> +1 (555) 123-4567</div>
                            <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-indigo-500" /> contact@jkcomputers.com</div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6 text-lg">Company Solutions</h4>
                        <ul className="space-y-3 text-sm text-foreground/70">
                            <li><Link href="/expertise#managed-it-support" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Managed IT Support</Link></li>
                            <li><Link href="/expertise#cloud-services" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Cloud Infrastructure</Link></li>
                            <li><Link href="/expertise#security-surveillance" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Security & Surveillance</Link></li>
                            <li><Link href="#generative-ai" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Generative AI (LLMs)</Link></li>
                            <li><Link href="/expertise#agentic" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Agentic AI Workflows</Link></li>
                            <li><Link href="/career" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">Careers</Link></li>
                            <li><Link href="/faq" className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: News Ticker */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6 text-lg">Recent Updates</h4>
                        <div className="space-y-4">
                            <div className="group cursor-pointer">
                                <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold mb-1">March 2, 2026</p>
                                <p className="text-sm text-foreground/80 group-hover:text-indigo-500 transition-colors">JKC launches new Enterprise LLM Fine-tuning pipeline.</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold mb-1">Feb 28, 2026</p>
                                <p className="text-sm text-foreground/80 group-hover:text-indigo-500 transition-colors">Global Cybersecurity report highlights zero-trust necessity.</p>
                            </div>
                            <div className="group cursor-pointer">
                                <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold mb-1">Feb 15, 2026</p>
                                <p className="text-sm text-foreground/80 group-hover:text-indigo-500 transition-colors">Awarded 'Best Managed IT Provider' in the tri-state area.</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6 text-lg">Stay Ahead</h4>
                        <p className="text-sm text-foreground/70 mb-4">Subscribe to our newsletter for the latest insights in IT and AI automation.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter email address"
                                className="w-full h-12 rounded-lg bg-foreground/5 border border-border px-4 text-foreground placeholder-foreground/50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                            />
                            <button
                                type="button"
                                className="w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all shadow-md"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar: Social Row & Copyright */}
                <div className="pt-8 border-t border-foreground/10 text-center md:text-left text-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>© {new Date().getFullYear()} JK Computers. All rights reserved.</p>

                    <div className="flex items-center gap-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 transition-all border border-border">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 transition-all border border-border">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 transition-all border border-border">
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 transition-all border border-border">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/70 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-foreground/10 transition-all border border-border">
                            <span className="font-bold text-lg leading-none shrink-0 mb-1">WA</span> {/* Simple fallback for WhatsApp icon */}
                        </a>
                    </div>

                    <div className="flex items-center gap-6 text-foreground/60">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
