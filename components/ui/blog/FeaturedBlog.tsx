"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User, CalendarDays, Sparkles, TrendingUp, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface FeaturedBlogProps {
    blog: BlogPost;
}

export function FeaturedBlog({ blog }: FeaturedBlogProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // 3D tilt effect for the featured card
    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1400px) rotateY(${x * 4}deg) rotateX(${y * -4}deg) translateY(-4px)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "perspective(1400px) rotateY(0deg) rotateX(0deg) translateY(0)";
    };

    return (
        <section className="py-16 md:py-20 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[20%] left-[5%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-[10%] right-[5%] w-72 h-72 bg-cyan-400/10 rounded-full blur-[120px] animate-blob-delay" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
                >
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-cyan-400 text-sm font-bold mb-4">
                            <TrendingUp className="w-4 h-4" />
                            <span>FEATURED STORY</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            Latest <span className="gradient-text">Insights</span>
                        </h2>
                    </div>
                    <Link
                        href={`/blog/${blog.slug}`}
                        className="group inline-flex items-center gap-2 text-indigo-500 dark:text-cyan-400 font-bold hover:gap-3 transition-all"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Featured card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="group relative rounded-[2.5rem] p-[1.5px] bg-gradient-to-br from-indigo-500/50 via-cyan-400/30 to-transparent hover:from-indigo-500/70 hover:via-cyan-400/50 hover:to-transparent transition-all duration-500 will-change-transform"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden bg-card-bg backdrop-blur-xl border border-border">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Image side */}
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="relative h-72 lg:h-full min-h-[320px] overflow-hidden block"
                                    aria-label={blog.title}
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/60" />

                                    {/* Floating badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black uppercase tracking-widest shadow-xl shadow-amber-500/30 animate-pulse-glow">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            Featured
                                        </span>
                                    </div>

                                    {/* Floating icon */}
                                    <div className="absolute bottom-6 right-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-float-slow">
                                        <TrendingUp className="w-7 h-7 text-white" />
                                    </div>
                                </Link>

                                {/* Content side */}
                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-center gap-3 mb-6">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-500/30">
                                            <Tag className="w-3 h-3" />
                                            {blog.category}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-foreground/70 text-xs font-bold">
                                            <Clock className="w-3 h-3 text-indigo-500 dark:text-cyan-400" />
                                            {blog.readingTime} min read
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-black leading-tight mb-6 group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
                                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h3>

                                    <p className="text-foreground/60 text-base md:text-lg leading-relaxed mb-8">
                                        {blog.excerpt}
                                    </p>

                                    {/* Author info */}
                                    <div className="flex items-center gap-4 mb-8">
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

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {blog.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-xs font-semibold text-indigo-500 dark:text-cyan-400/80 uppercase tracking-wider"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/blog/${blog.slug}`}
                                        className="group/btn inline-flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:translate-y-[-2px] active:scale-[0.98] transition-all duration-300"
                                    >
                                        Read Full Story
                                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1.5 group-hover/btn:scale-110" />
                                    </Link>
                                </div>
                            </div>

                            {/* Bottom gradient line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}