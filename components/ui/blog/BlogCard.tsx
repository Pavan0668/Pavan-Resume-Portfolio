"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

interface BlogCardProps {
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    slug: string;
    category: string;
}

export function BlogCard({ title, excerpt, image, author, date, slug, category }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group glass-card rounded-3xl overflow-hidden border border-foreground/10 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 flex flex-col h-full"
        >
            <Link href={`/blog/${slug}`} className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                        {category}
                    </span>
                </div>
            </Link>

            <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4 font-medium uppercase tracking-widest">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {date}
                    </div>
                    <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {author}
                    </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-indigo-500 transition-colors duration-300">
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>

                <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
                    {excerpt}
                </p>

                <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-2 text-indigo-500 font-bold group/btn text-sm hover:gap-3 transition-all underline-offset-4 hover:underline"
                >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
            </div>
        </motion.div>
    );
}
