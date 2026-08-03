"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Facebook, Twitter, Linkedin, CalendarDays, Tag } from "lucide-react";
import Link from "next/link";
import { getBlogBySlug } from "@/lib/blog-data";

export default function BlogDetailPage() {
    const { slug } = useParams();
    const router = useRouter();
    const blog = getBlogBySlug(slug as string);

    if (!blog) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                <p className="text-foreground/60 mb-8">The article you are looking for might have been moved or deleted.</p>
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
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-widest border border-indigo-500/20">
                                <Tag className="w-3 h-3" />
                                {blog.category}
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-foreground/5 text-foreground/70 text-xs font-bold border border-foreground/10">
                                <Clock className="w-3 h-3 text-indigo-500 dark:text-cyan-400" />
                                {blog.readingTime} min read
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 py-8 border-y border-foreground/5">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/20">
                                    {blog.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold flex items-center gap-2">
                                        <User className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                                        {blog.author}
                                    </div>
                                    <div className="text-sm text-foreground/50 flex items-center gap-2">
                                        <CalendarDays className="w-3.5 h-3.5" />
                                        {blog.date}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest mr-2">Share</span>
                                <button className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" aria-label="Share on Twitter">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" aria-label="Share on LinkedIn">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" aria-label="Share on Facebook">
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

                    {/* Tags */}
                    <div className="mt-12 flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-xs font-semibold text-indigo-500 dark:text-cyan-400/80 uppercase tracking-wider"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Footer Call to Action */}
                    <div className="mt-20 pt-12 border-t border-foreground/5 text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to implement this in your business?</h3>
                        <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
                            Our team of experts is ready to help you navigate these technologies
                            and find the perfect solution for your organization.
                        </p>
                        <Link href="/faq#contact-form" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-xl font-bold shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:translate-y-[-2px] active:scale-[0.98] transition-all duration-300">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}