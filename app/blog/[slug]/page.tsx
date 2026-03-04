"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

// Shared data source for demonstration
const fullBlogs = [
    {
        title: "The Rise of AI Agents: Transforming Enterprise Productivity",
        image: "/images/blog/ai-agent-dev.png",
        author: "Tech Insights Team",
        date: "March 4, 2026",
        slug: "rise-of-ai-agents",
        category: "Software Development",
        content: `
            <p>Artificial Intelligence is no longer just a tool for generating text or images; it is evolving into active "agents" capable of executing complex, multi-step tasks across various software ecosystems. At JK Computers, we are witnessing a paradigm shift in how enterprises approach productivity through AI Agent development.</p>
            
            <h3>What are AI Agents?</h3>
            <p>Unlike standard LLMs that wait for a prompt to provide an answer, AI Agents are designed to be goal-oriented. They can reason through a problem, search for information, interact with APIs, and even correct their own mistakes. This "agentic" behavior allows them to act as autonomous digital employees.</p>

            <h3>How They Transform Workplaces</h3>
            <p>Imagine a project management agent that can not only track deadlines but also automatically reassign tasks based on team workload, draft technical requirements from meeting transcripts, and trigger deployment workflows once code is reviewed. This level of automation goes far beyond simple scripts.</p>

            <h3>The Future of Human-AI Collaboration</h3>
            <p>The goal of AI Agent development isn't to replace humans, but to augment them. By handling repetitive and low-complexity cognitive work, agents free up human specialists to focus on high-level strategy, creative problem solving, and empathetic leadership.</p>

            <blockquote>"The shift from AI-as-a-service to AI-as-a-collaborator is the most significant development in enterprise technology this decade."</blockquote>

            <p>Stay tuned as we continue to push the boundaries of what autonomous workflows can achieve for your business.</p>
        `
    },
    {
        title: "Agentic AI: What You Need to Know in 2026",
        image: "/images/blog/agentic-ai.png",
        author: "AI Labs",
        date: "Feb 28, 2026",
        slug: "agentic-ai-2026",
        category: "Artificial Intelligence",
        content: `
            <p>As we move through 2026, "Agentic AI" has become the defining term for the next generation of artificial intelligence. It represents a move away from static chatbots toward systems that possess agency.</p>

            <h3>Proactive vs. Reactive</h3>
            <p>Traditional AI is reactive—it speaks when spoken to. Agentic AI is proactive. It monitors systems, identifies opportunities for improvement, and takes action before a human even realizes there's a need. This proactive stance is what makes it a game-changer for IT infrastructure management.</p>

            <h3>Key Benefits for Modern Enterprises</h3>
            <ul>
                <li><strong>Autonomous Troubleshooting:</strong> Identifying network bottlenecks and rerouting traffic in real-time.</li>
                <li><strong>Predictive Maintenance:</strong> Alerting teams to hardware failures before they occur based on subtle performance patterns.</li>
                <li><strong>Dynamic Resource Allocation:</strong> Optimizing cloud spend by shifting workloads based on live cost data.</li>
            </ul>

            <p>At JK Computers, we specialize in implementing these agentic workflows to ensure your business stays ahead of the curve.</p>
        `
    },
    {
        title: "Fine-Tuning Generative AI for Your Business Data",
        image: "/images/blog/generative-ai.png",
        author: "Data Solutions",
        date: "Feb 20, 2026",
        slug: "fine-tuning-gen-ai",
        category: "Machine Learning",
        content: `
            <p>While models like GPT-4 are incredibly versatile, they lack the specific context of your business. Fine-tuning allows us to take these powerful foundations and specialize them for your unique requirements.</p>

            <h3>The Power of Specialization</h3>
            <p>A General AI might know how to write a generic legal contract. A fine-tuned AI knows your company's specific clauses, past negotiations, and industry-specific terminology. This results in far higher accuracy and utility.</p>

            <h3>Our Fine-Tuning Process</h3>
            <ol>
                <li><strong>Data Curation:</strong> Identifying and cleaning high-quality internal datasets.</li>
                <li><strong>Model Selection:</strong> Choosing the right base model for the task.</li>
                <li><strong>Training & Validation:</strong> Iterative fine-tuning with expert-in-the-loop feedback.</li>
                <li><strong>Deployment:</strong> Securely integrating the specialized model into your workflow.</li>
            </ol>

            <p>Protecting your IP while maximizing AI's potential is our top priority.</p>
        `
    },
    {
        title: "Managed IT Services: More Than Just Troubleshooting",
        image: "/images/blog/managed-it.png",
        author: "Support Desk",
        date: "Feb 15, 2026",
        slug: "managed-it-partnership",
        category: "IT Support",
        content: `
            <p>In the past, IT support was a "break-fix" model. Something broke, and you called us to fix it. Today, Managed IT Services at JK Computers is a comprehensive partnership focused on growth and stability.</p>

            <h3>Proactive Security</h3>
            <p>Cyber threats don't sleep. Our managed services include continuous monitoring and zero-trust security architecture to prevent attacks before they reach your doorstep. We act as your company's chief security guard, working 24/7/365.</p>

            <h3>Strategic Technology Planning</h3>
            <p>We don't just fix computers; we help you plan your technology roadmap. Whether it's planning a cloud migration or upgrading your network for high-speed fiber, we ensure your tech debt stays low and your capabilities stay high.</p>

            <p>Partnering with us means you can focus on your business goals while we handle the digital foundation.</p>
        `
    },
    {
        title: "Scaling Effortlessly: Cloud Solutions for Growing Teams",
        image: "/images/blog/cloud-solutions.png",
        author: "Infrastructure Lead",
        date: "Feb 10, 2026",
        slug: "scaling-cloud-solutions",
        category: "Cloud Computing",
        content: `
            <p>Cloud computing is the backbone of modern scalability. As your team grows, your infrastructure should grow with it—without the headache of physical hardware constraints.</p>

            <h3>The Multi-Cloud Advantage</h3>
            <p>We help businesses leverage the best features of AWS, Azure, and Google Cloud simultaneously. This "multi-cloud" strategy provides redundancy and allows you to optimize for both cost and performance.</p>

            <h3>Efficiency Through Serverless</h3>
            <p>By moving to serverless architectures, companies only pay for the exact resources they use. This eliminates the "waste" of idle servers and allows for near-instant scaling during traffic spikes.</p>

            <p>Let us help you design a cloud strategy that is as flexible as your business needs to be.</p>
        `
    },
    {
        title: "The Modern Web: Building Experiences That Perform",
        image: "/images/blog/web-development.png",
        author: "Web Engineering",
        date: "Feb 5, 2026",
        slug: "modern-web-performance",
        category: "Website Development",
        content: `
            <p>A website is no longer a static brochure; it is a high-performance application. In 2026, users expect instant load times, seamless transitions, and a premium visual experience across all devices.</p>

            <h3>Performance is Everything</h3>
            <p>Search engines and users both reward speed. We utilize frameworks like Next.js and optimized asset delivery to ensure our websites achieve perfect Lighthouse scores. Every millisecond saved is a potential customer retained.</p>

            <h3>Aesthetic Excellence</h3>
            <p>Design and functionality must go hand-in-hand. We combine modern typography, subtle micro-animations, and glassmorphism trends to create interfaces that feel alive and professional.</p>

            <p>Your digital presence is often the first impression you make. We make sure it's a lasting one.</p>
        `
    }
];

export default function BlogDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const blog = fullBlogs.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-foreground/60 mb-8">The article you're looking for might have been moved or deleted.</p>
                <Link href="/blog" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all">
                    Return to Blog List
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Back Link */}
                    <motion.button
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-indigo-500 font-bold mb-12 hover:gap-3 transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Insights
                    </motion.button>

                    {/* Blog Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
                            {blog.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 py-8 border-y border-foreground/5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                                    <User className="w-6 h-6 text-indigo-500" />
                                </div>
                                <div>
                                    <div className="font-bold">{blog.author}</div>
                                    <div className="text-sm text-foreground/50">{blog.date}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest mr-2">Share</span>
                                <button className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                                    <Facebook className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-500/10 aspect-[16/9]"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Blog Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-lg dark:prose-invert max-w-none 
                            prose-headings:font-black prose-headings:tracking-tight
                            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                            prose-p:text-foreground/75 prose-p:leading-relaxed prose-p:mb-8
                            prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:bg-indigo-500/5 prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic
                            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 prose-li:mb-4
                            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-8
                        "
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Footer Call to Action */}
                    <div className="mt-20 pt-12 border-t border-foreground/5 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to implement this in your business?</h3>
                        <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
                            Our team of experts is ready to help you navigate these technologies
                            and find the perfect solution for your organization.
                        </p>
                        <Link href="/faq#contact-form" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
