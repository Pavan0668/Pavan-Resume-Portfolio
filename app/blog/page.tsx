"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { BlogHero } from "@/components/ui/blog/BlogHero";
import { BlogCard } from "@/components/ui/blog/BlogCard";

export const blogs = [
    {
        title: "The Rise of AI Agents: Transforming Enterprise Productivity",
        excerpt: "Discover how autonomous AI agents are revolutionizing the modern workplace by handling complex, multi-step tasks with minimal human intervention.",
        image: "/images/blog/ai-agent-dev.png",
        author: "Tech Insights Team",
        date: "March 4, 2026",
        slug: "rise-of-ai-agents",
        category: "Software Development"
    },
    {
        title: "Agentic AI: What You Need to Know in 2026",
        excerpt: "Agentic AI represents a shift from reactive models to proactive partners. Learn why this technology is the next frontier of artificial intelligence.",
        image: "/images/blog/agentic-ai.png",
        author: "AI Labs",
        date: "Feb 28, 2026",
        slug: "agentic-ai-2026",
        category: "Artificial Intelligence"
    },
    {
        title: "Fine-Tuning Generative AI for Your Business Data",
        excerpt: "General models are powerful, but fine-tuned models are specialized. Learn how we help enterprises adapt Gen AI to their unique knowledge bases.",
        image: "/images/blog/generative-ai.png",
        author: "Data Solutions",
        date: "Feb 20, 2026",
        slug: "fine-tuning-gen-ai",
        category: "Machine Learning"
    },
    {
        title: "Managed IT Services: More Than Just Troubleshooting",
        excerpt: "Modern Managed IT is a partnership. We go beyond fixing problems to proactively securing and optimizing your digital infrastructure.",
        image: "/images/blog/managed-it.png",
        author: "Support Desk",
        date: "Feb 15, 2026",
        slug: "managed-it-partnership",
        category: "IT Support"
    },
    {
        title: "Scaling Effortlessly: Cloud Solutions for Growing Teams",
        excerpt: "Cloud computing shouldn't be complex. We explore the latest trends in infrastructure that help businesses scale globally with ease and security.",
        image: "/images/blog/cloud-solutions.png",
        author: "Infrastructure Lead",
        date: "Feb 10, 2026",
        slug: "scaling-cloud-solutions",
        category: "Cloud Computing"
    },
    {
        title: "The Modern Web: Building Experiences That Perform",
        excerpt: "Speed and aesthetics are non-negotiable in 2026. Explore how high-performance frameworks are changing the way users interact with the web.",
        image: "/images/blog/web-development.png",
        author: "Web Engineering",
        date: "Feb 5, 2026",
        slug: "modern-web-performance",
        category: "Website Development"
    }
];

export default function BlogListPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <BlogHero />

            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            {...blog}
                        />
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="mt-32 p-12 rounded-[3rem] bg-indigo-600 text-white relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-transparent to-cyan-500/20 opacity-50 -z-10" />

                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-black mb-4 tracking-tighter">Stay Ahead of the Curve</h2>
                        <p className="text-indigo-100 text-lg leading-relaxed opacity-90">
                            Subscribe to our newsletter and get the latest technological insights, AI trends,
                            and case studies delivered directly to your inbox every month.
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 h-16 rounded-2xl bg-white/10 border border-white/20 px-6 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium backdrop-blur-md"
                            />
                            <button className="h-16 px-8 rounded-2xl bg-white text-indigo-600 font-bold hover:shadow-xl hover:translate-y-[-2px] transition-all active:scale-95 whitespace-nowrap">
                                Join Us
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
