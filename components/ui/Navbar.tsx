"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "Company",
        items: [
            { name: "About Us", href: "/company#about-us" },
            { name: "Achievements", href: "/company#achievements" },
            { name: "Partners", href: "/company#partners" },
        ],
    },
    {
        name: "Expertise",
        items: [
            { name: "Managed IT Support", href: "/expertise#managed-it-support" },
            { name: "Project Services", href: "/expertise#project-services" },
            { name: "Domain & Hosting", href: "/expertise#domain-hosting" },
            { name: "Website Development", href: "/expertise#website-development" },
            { name: "Cloud Services", href: "/expertise#cloud-services" },
            { name: "Security & Surveillance", href: "/expertise#security-surveillance" },
            { name: "Business Automation", href: "/expertise#business-automation" },
        ],
    },
    { name: "Career", href: "/career" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b shadow-sm ${scrolled ? "border-foreground/10 py-0" : "border-transparent py-2"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group z-50 relative">
                        <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <img src="/logo.png" alt="JKC Solutions" className="w-full h-full object-contain" />
                        </div>
                        {/* <span className="text-xl font-bold tracking-tight text-foreground transition-colors">

                        </span> */}
                    </Link>

                    <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.items ? (
                                    <div className="flex items-center gap-1">
                                        <Link href="/expertise" className="text-foreground/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2">
                                            {item.name}
                                        </Link>
                                        <button
                                            className="text-foreground/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2"
                                            onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <Link href={item.href!} className="text-foreground/80 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-2 block">
                                        {item.name}
                                    </Link>
                                )}

                                {/* Desktop Dropdown */}
                                {item.items && (
                                    <AnimatePresence>
                                        {activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-64 glass-card rounded-xl p-2 shadow-xl border border-foreground/10 overflow-hidden"
                                            >
                                                {item.items.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-foreground/5 rounded-lg transition-colors flex items-center justify-between group/link"
                                                    >
                                                        {subItem.name}
                                                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 z-50">
                        <ThemeToggle />
                        <button
                            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full glass text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Full-Screen Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl pt-24 pb-10 px-6 overflow-y-auto lg:hidden"
                    >
                        <div className="flex flex-col gap-2 max-w-sm mx-auto">
                            {navItems.map((item) => (
                                <MobileMenuItem key={item.name} item={item} onClick={() => !item.items && setIsOpen(false)} />
                            ))}
                            <div className="mt-8">
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 rounded-xl bg-indigo-600 text-white font-medium flex items-center justify-center transition-all shadow-lg active:scale-95"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function MobileMenuItem({ item, onClick }: { item: any, onClick: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!item.items) {
        return (
            <Link
                href={item.href}
                onClick={onClick}
                className="block py-4 text-xl font-semibold text-foreground border-b border-foreground/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
                {item.name}
            </Link>
        );
    }

    return (
        <div className="border-b border-foreground/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full py-4 text-xl font-semibold text-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
                {item.name}
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 flex flex-col gap-2 pl-4 border-l-2 border-indigo-500/30 ml-2 mt-2">
                            {item.items.map((subItem: any) => (
                                <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={onClick}
                                    className="py-2 text-foreground/70 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors block"
                                >
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
