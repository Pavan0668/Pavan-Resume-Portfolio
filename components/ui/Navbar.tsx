"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "Company",
        items: [
            { name: "About Us", href: "/company#about-us" },
            { name: "Achievements", href: "/company#achievements" },
            { name: "Partners", href: "/company#partners" },
            { name: "Mission & Vision", href: "/company#mission-vision" },
        ],
    },
    {
        name: "Services",
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
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { resolvedTheme } = useTheme();
    const lastScrollY = useRef(0);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrolledPastTop = currentScrollY > 20;
            const scrollDelta = currentScrollY - lastScrollY.current;

            setScrolled(scrolledPastTop);

            if (isOpen) {
                setIsVisible(true);
                lastScrollY.current = currentScrollY;
                return;
            }

            if (!scrolledPastTop) {
                setIsVisible(true);
            } else if (scrollDelta > 8) {
                setIsVisible(false);
            } else if (scrollDelta < -8) {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [isOpen]);

    const isDarkTheme = resolvedTheme === "dark";
    const shellClass = isDarkTheme
        ? "border-white/10 bg-[#061022]/80 text-foreground shadow-[0_18px_50px_rgba(2,6,23,0.45)]"
        : "border-slate-200/80 bg-white/85 text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.12)]";
    const dropdownPanelClass = isDarkTheme
        ? "absolute top-full left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl text-foreground"
        : "absolute top-full left-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-2xl backdrop-blur-xl text-slate-900";
    const dropdownItemClass = isDarkTheme
        ? "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-white/10 hover:text-white group/link"
        : "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-indigo-600 group/link";

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -110 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="relative pointer-events-auto">
                        <div className={`relative overflow-visible rounded-full border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-6 ${shellClass} ${scrolled ? "ring-1 ring-white/5" : ""}`}>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 via-transparent to-white/5 opacity-60" />

                            <div className="relative flex h-14 items-center justify-between gap-4">
                                <Link href="/" className="flex items-center gap-2.5 shrink-0">
                                    <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-sm">
                                        <img src="/logo.png" alt="JKC Solutions" className="h-full w-full object-contain" />
                                    </div>
                                </Link>

                                <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
                                    {navItems.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative"
                                            onMouseEnter={() => setActiveDropdown(item.name)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            {item.items ? (
                                                <div className="flex items-center gap-0.5 rounded-full border border-transparent px-3 py-2 transition-all duration-200 hover:border-white/10 hover:bg-white/10">
                                                    <Link
                                                        href="/expertise"
                                                        className="whitespace-nowrap text-sm font-medium text-inherit/80 transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                    <button
                                                        className="text-inherit/70 transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
                                                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                                                        aria-label={`Toggle ${item.name} menu`}
                                                    >
                                                        <ChevronDown className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href!}
                                                    className="block rounded-full border border-transparent px-3 py-2 text-sm font-medium text-inherit/80 transition-all duration-200 hover:border-white/10 hover:bg-white/10 hover:text-indigo-600 dark:hover:text-cyan-300"
                                                >
                                                    {item.name}
                                                </Link>
                                            )}

                                            {item.items && (
                                                <AnimatePresence>
                                                    {activeDropdown === item.name && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: 10, scale: 0.96 }}
                                                            transition={{ duration: 0.2 }}
                                                            className={dropdownPanelClass}
                                                        >
                                                            {item.items.map((subItem) => (
                                                                <Link key={subItem.name} href={subItem.href} className={dropdownItemClass}>
                                                                    {subItem.name}
                                                                    <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0" />
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                                    <div className="hidden sm:block">
                                        <ThemeToggle />
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="hidden rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 md:inline-flex"
                                    >
                                        Contact Us
                                    </Link>

                                    <button
                                        className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-white/10 text-foreground shadow-sm"
                                        onClick={() => setIsOpen(!isOpen)}
                                        aria-label="Toggle menu"
                                    >
                                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-40 overflow-y-auto bg-background/90 px-4 pt-24 backdrop-blur-xl lg:hidden"
                    >
                        <div className="mx-auto flex max-w-sm flex-col gap-2">
                            {navItems.map((item) => (
                                <MobileMenuItem key={item.name} item={item} onClick={() => !item.items && setIsOpen(false)} />
                            ))}
                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all active:scale-95"
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

type NavItem = {
    name: string;
    href?: string;
    items?: { name: string; href: string }[];
};

function MobileMenuItem({ item, onClick }: { item: NavItem; onClick: () => void }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!item.items) {
        return (
            <Link
                href={item.href!}
                onClick={onClick}
                className="block rounded-2xl border border-foreground/10 bg-background/80 px-5 py-4 text-lg font-semibold text-foreground transition-colors hover:border-indigo-500/30 hover:text-indigo-600 dark:hover:text-cyan-300"
            >
                {item.name}
            </Link>
        );
    }

    return (
        <div className="rounded-2xl border border-foreground/10 bg-background/80 px-5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-4 text-lg font-semibold text-foreground transition-colors hover:text-indigo-600 dark:hover:text-cyan-300"
            >
                {item.name}
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="h-5 w-5" />
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
                        <div className="flex flex-col gap-2 pb-4 pl-4">
                            {item.items.map((subItem) => (
                                <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={onClick}
                                    className="rounded-xl px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-indigo-600 dark:hover:text-cyan-300"
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
