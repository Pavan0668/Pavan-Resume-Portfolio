"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown,
    Search,
    Sparkles,
    Server,
    Cloud,
    Code2,
    Shield,
    GraduationCap,
    Building2,
    HelpCircle,
    X,
    CheckCircle2,
} from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    category: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

// Category icons mapping
const categoryIcons: Record<string, typeof Server> = {
    "Services": Server,
    "Support": Shield,
    "Development": Code2,
    "Cloud": Cloud,
    "Industries": Building2,
    "Training": GraduationCap,
};

const categoryColors: Record<string, string> = {
    "Services": "text-indigo-500 dark:text-cyan-400 bg-indigo-500/10 border-indigo-500/20",
    "Support": "text-emerald-500 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    "Development": "text-purple-500 dark:text-purple-400 bg-purple-500/10 border-purple-500/20",
    "Cloud": "text-cyan-500 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    "Industries": "text-amber-500 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
    "Training": "text-rose-500 dark:text-rose-400 bg-rose-500/10 border-rose-500/20",
};

function FAQItem({ question, answer, category, isOpen, onClick, index }: FAQItemProps) {
    const CategoryIcon = categoryIcons[category] || HelpCircle;
    const colorClass = categoryColors[category] || categoryColors["Services"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                isOpen
                    ? "border-indigo-500/30 bg-indigo-500/[0.03] shadow-[0_8px_40px_var(--glow-shadow)]"
                    : "border-foreground/10 hover:border-indigo-500/20 hover:bg-foreground/[0.02] hover:shadow-lg"
            }`}
        >
            {/* Animated gradient line on open */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} />

            <button
                onClick={onClick}
                aria-expanded={isOpen}
                className="w-full py-5 px-5 md:px-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    {/* Category icon */}
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${colorClass}`}>
                        <CategoryIcon className="w-5 h-5" />
                    </div>

                    <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/40 mb-1 block">
                            {category}
                        </span>
                        <span className={`text-base md:text-lg font-bold transition-colors duration-300 ${
                            isOpen ? "text-indigo-500 dark:text-cyan-400" : "text-foreground group-hover:text-indigo-500 dark:group-hover:text-cyan-400"
                        }`}>
                            {question}
                        </span>
                    </div>
                </div>

                {/* Expand/collapse icon */}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 ml-4 p-2.5 rounded-xl transition-all duration-300 ${
                        isOpen
                            ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30"
                            : "bg-foreground/5 text-foreground/50 group-hover:bg-indigo-500/10 group-hover:text-indigo-500 dark:group-hover:text-cyan-400"
                    }`}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 md:px-6 pb-6 pl-[4.5rem] md:pl-[5.5rem]">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-cyan-400 mt-1 flex-shrink-0" />
                                <p className="text-foreground/70 leading-relaxed">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

const faqData = [
    {
        question: "What services does the company provide?",
        answer: "JK Computers provides a comprehensive suite of IT solutions, including high-end IT consulting, Managed IT Support, Cloud Infrastructure services, and next-generation AI integrations such as Generative AI (LLMs) and Agentic autonomous workflows.",
        category: "Services"
    },
    {
        question: "How can I contact the company?",
        answer: "Global clients can reach us through our official email at contact@jkcomputers.com, by calling our support line at +1 (555) 123-4567, or by filling out the contact form below. Our headquarters is located at 123 Innovation Drive, Tech City.",
        category: "Support"
    },
    {
        question: "Do you provide IT support services?",
        answer: "Yes, we offer premium Managed IT Support that includes 24/7 monitoring, cybersecurity management, remote and onsite troubleshooting, hardware maintenance, and proactive infrastructure optimization for enterprises of all sizes.",
        category: "Support"
    },
    {
        question: "Do you offer website development services?",
        answer: "Absolutely. Our engineering team specializes in high-performance, responsive web applications built with modern stacks like Next.js and React. We focus on visual excellence, speed, and seamless user experiences tailored to your business goals.",
        category: "Development"
    },
    {
        question: "What industries do you support?",
        answer: "We support a diverse range of industries including Finance, Healthcare, Retail, Manufacturing, and Tech Startups. Our solutions are designed to be scalable and adaptable to the specific regulatory and operational needs of each sector.",
        category: "Industries"
    },
    {
        question: "Is training provided for the new systems?",
        answer: "Yes, we believe that technology is only as good as the people who use it. We provide comprehensive training sessions and documentation for all new systems and AI tools we implement for your team.",
        category: "Training"
    }
];

const categories = ["All", "Services", "Support", "Development", "Cloud", "Industries", "Training"];

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef<HTMLInputElement>(null);

    const filteredFaqs = useMemo(() => {
        return faqData.filter((faq) => {
            const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query) ||
                faq.category.toLowerCase().includes(query);
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const clearSearch = () => {
        setSearchQuery("");
        searchRef.current?.focus();
    };

    return (
        <section id="faq-accordion" className="py-20 md:py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-indigo-500/5 to-transparent" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-[120px] animate-blob-delay" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-cyan-400 text-sm font-bold mb-6">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        <span>KNOWLEDGE BASE</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-foreground/60 leading-relaxed">
                        Browse through our comprehensive FAQ section to find quick answers
                        about our services, support, and solutions.
                    </p>
                </motion.div>

                {/* Search bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative mb-8 group"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-indigo-500/30 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-lg" />
                    <div className="relative flex items-center">
                        <Search className="absolute left-5 w-5 h-5 text-foreground/40 group-focus-within:text-indigo-500 dark:group-focus-within:text-cyan-400 transition-colors duration-300" />
                        <input
                            ref={searchRef}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search for answers..."
                            aria-label="Search FAQ questions"
                            className="w-full h-14 pl-14 pr-12 rounded-2xl bg-background/50 backdrop-blur-sm border border-foreground/10 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 text-foreground placeholder:text-foreground/40 outline-none transition-all duration-300"
                        />
                        {searchQuery && (
                            <button
                                onClick={clearSearch}
                                className="absolute right-4 p-1.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground/50 hover:text-foreground transition-all duration-300"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Category filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-10"
                >
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                                activeCategory === category
                                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30"
                                    : "bg-foreground/5 text-foreground/60 border border-foreground/10 hover:border-indigo-500/30 hover:text-indigo-500 dark:hover:text-cyan-400 hover:bg-indigo-500/5"
                            }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* FAQ items */}
                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {filteredFaqs.map((faq, index) => {
                            const originalIndex = faqData.findIndex(f => f.question === faq.question);
                            return (
                                <FAQItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                    category={faq.category}
                                    isOpen={openIndex === originalIndex}
                                    onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                                    index={index}
                                />
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Empty state */}
                <AnimatePresence>
                    {filteredFaqs.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center py-16"
                        >
                            <div className="w-20 h-20 mx-auto rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 animate-float-slow">
                                <Search className="w-10 h-10 text-indigo-500 dark:text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">No questions found</h3>
                            <p className="text-foreground/60 mb-8">
                                Try adjusting your search or filter to find what you are looking for.
                            </p>
                            <button
                                onClick={() => {
                                    setActiveCategory("All");
                                    setSearchQuery("");
                                }}
                                className="inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:translate-y-[-2px] active:scale-[0.98] transition-all duration-300"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Result count */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-sm text-foreground/40 mt-8"
                >
                    Showing {filteredFaqs.length} of {faqData.length} questions
                </motion.p>
            </div>
        </section>
    );
}