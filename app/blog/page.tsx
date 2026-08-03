"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { BlogHero } from "@/components/ui/blog/BlogHero";
import { BlogCard } from "@/components/ui/blog/BlogCard";
import { FeaturedBlog } from "@/components/ui/blog/FeaturedBlog";
import { BlogFilters } from "@/components/ui/blog/BlogFilters";
import { NewsletterSection } from "@/components/ui/blog/NewsletterSection";
import { blogs, getFeaturedBlog } from "@/lib/blog-data";

export default function BlogListPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const featuredBlog = useMemo(() => getFeaturedBlog(), []);

    const filteredBlogs = useMemo(() => {
        return blogs.filter((blog) => {
            const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !query ||
                blog.title.toLowerCase().includes(query) ||
                blog.excerpt.toLowerCase().includes(query) ||
                blog.category.toLowerCase().includes(query) ||
                blog.tags.some((tag) => tag.toLowerCase().includes(query)) ||
                blog.author.toLowerCase().includes(query);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <BlogHero />

            {/* Featured Blog Section */}
            <FeaturedBlog blog={featuredBlog} />

            {/* Articles Section */}
            <section id="blog-articles" className="py-16 md:py-20 relative">
                {/* Background accents */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                    <div className="absolute top-[30%] left-[5%] w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[20%] right-[5%] w-64 h-64 bg-cyan-400/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 dark:text-cyan-400 text-sm font-bold mb-4">
                            <span>ALL ARTICLES</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                            Explore Our <span className="gradient-text">Knowledge Base</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-foreground/60 leading-relaxed mt-4">
                            Dive into our collection of expert insights, technical deep-dives, and industry
                            trends curated by our team of specialists.
                        </p>
                    </motion.div>

                    {/* Filters and Search */}
                    <BlogFilters
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                        resultCount={filteredBlogs.length}
                    />

                    {/* Blog Grid */}
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <BlogCard blog={blog} index={index} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty state */}
                    <AnimatePresence>
                        {filteredBlogs.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-center py-20"
                            >
                                <div className="text-6xl mb-6">🔍</div>
                                <h3 className="text-2xl font-bold mb-4">No articles found</h3>
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
                </div>
            </section>

            {/* Newsletter Section */}
            <NewsletterSection />

            <Footer />
        </main>
    );
}