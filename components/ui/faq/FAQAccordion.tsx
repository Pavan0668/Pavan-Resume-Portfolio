"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <div className={`border-b border-foreground/10 last:border-0 transition-colors ${isOpen ? "bg-foreground/[0.02]" : ""}`}>
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? "text-indigo-500" : "text-foreground group-hover:text-indigo-500"}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 ml-4 p-2 rounded-lg transition-all ${isOpen ? "bg-indigo-500 text-white rotate-180" : "bg-foreground/5 text-foreground/50 group-hover:bg-indigo-500/10 group-hover:text-indigo-500"}`}>
                    <ChevronDown className="w-5 h-5" />
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 text-foreground/70 leading-relaxed max-w-4xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const faqData = [
    {
        question: "What services does the company provide?",
        answer: "JK Computers provides a comprehensive suite of IT solutions, including high-end IT consulting, Managed IT Support, Cloud Infrastructure services, and next-generation AI integrations such as Generative AI (LLMs) and Agentic autonomous workflows."
    },
    {
        question: "How can I contact the company?",
        answer: "Global clients can reach us through our official email at contact@jkcomputers.com, by calling our support line at +1 (555) 123-4567, or by filling out the contact form below. Our headquarters is located at 123 Innovation Drive, Tech City."
    },
    {
        question: "Do you provide IT support services?",
        answer: "Yes, we offer premium Managed IT Support that includes 24/7 monitoring, cybersecurity management, remote and onsite troubleshooting, hardware maintenance, and proactive infrastructure optimization for enterprises of all sizes."
    },
    {
        question: "Do you offer website development services?",
        answer: "Absolutely. Our engineering team specializes in high-performance, responsive web applications built with modern stacks like Next.js and React. We focus on visual excellence, speed, and seamless user experiences tailored to your business goals."
    },
    {
        question: "What industries do you support?",
        answer: "We support a diverse range of industries including Finance, Healthcare, Retail, Manufacturing, and Tech Startups. Our solutions are designed to be scalable and adaptable to the specific regulatory and operational needs of each sector."
    },
    {
        question: "Is training provided for the new systems?",
        answer: "Yes, we believe that technology is only as good as the people who use it. We provide comprehensive training sessions and documentation for all new systems and AI tools we implement for your team."
    }
];

export function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 max-w-4xl mx-auto px-6">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full" />
            </div>

            <div className="glass-card rounded-3xl border border-foreground/10 overflow-hidden shadow-xl">
                <div className="divide-y divide-foreground/5 p-4 md:p-8">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
