"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User, CalendarDays, Tag } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
    blog: BlogPost;
    index?: number;
}

export function BlogCard({ blog, index = 0 }: BlogCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // 3D tilt effect
    const handleMouseMove = (e: React.MouseEvent) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(1200px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateY(-6px)`;
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(0)";
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="h-full"
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/30 via-cyan-400/20 to-transparent hover:from-indigo-500/60 hover:via-cyan-400/40 hover:to-transparent transition-all duration-500 will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Inner glass card */}
                <div className="relative h-full rounded-3xl bg-card-bg backdrop-blur-xl border border-border overflow-hidden flex flex-col transition-all duration-500 group-hover:shadow-[0_20px_60px_var(--glow-shadow)]">
                    {/* Image container with zoom on hover */}
                    <Link href={`/blog/${blog.slug}`} className="relative h-56 overflow-hidden block" aria-label={blog.title}>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-500/30 group-hover:bg-indigo-600 group-hover:scale-105 transition-all duration-300">
                                <Tag className="w-3 h-3" />
                                {blog.category}
                            </span>
                        </div>

                        {/* Reading time badge */}
                        <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md border border-foreground/10 text-foreground/80 text-xs font-bold shadow-lg group-hover:bg-background/90 transition-all duration-300">
                                <Clock className="w-3 h-3 text-indigo-500 dark:text-cyan-400" />
                                {blog.readingTime} min read
                            </span>
                        </div>

                        {/* Featured badge */}
                        {blog.featured && (
                            <div className="absolute bottom-4 left-4">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black uppercase tracking-widest shadow-lg animate-pulse-glow">
                                    ★ Featured
                                </span>
                            </div>
                        )}
                    </Link>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                        {/* Meta info */}
                        <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4 font-medium">
                            <div className="flex items-center gap-1.5">
                                <CalendarDays className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                                {blog.date}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                                {blog.author}
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
                            <Link href={`/blog/${blog.slug}`} className="focus-visible:outline-none">
                                {blog.title}
                            </Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                            {blog.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {blog.tags.slice(0, 3).map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2.5 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-[10px] font-semibold text-indigo-500 dark:text-cyan-400/80 uppercase tracking-wider"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Read More button */}
                        <Link
                            href={`/blog/${blog.slug}`}
                            className="group/btn inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:translate-y-[-2px] active:scale-[0.98] transition-all duration-300"
                        >
                            Read More
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5 group-hover/btn:scale-110" />
                        </Link>
                    </div>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
            </div>
        </motion.article>
    );
}