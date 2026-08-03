"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, LayoutGrid, X, Filter } from "lucide-react";
import { categories } from "@/lib/blog-data";

interface BlogFiltersProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    resultCount: number;
}

export function BlogFilters({
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
    resultCount,
}: BlogFiltersProps) {
    const allCategories = ["All", ...categories];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
        >
            {/* Search bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
                <div className="relative group">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                    <div className="relative flex items-center">
                        <Search className="absolute left-5 w-5 h-5 text-foreground/40 group-focus-within:text-indigo-500 dark:group-focus-within:text-cyan-400 transition-colors duration-300" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Search articles, topics, or keywords..."
                            aria-label="Search articles"
                            className="w-full h-14 pl-14 pr-12 rounded-2xl bg-card-bg backdrop-blur-xl border border-border focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 text-foreground placeholder:text-foreground/40 outline-none transition-all duration-300 shadow-lg shadow-indigo-500/5"
                        />
                        <AnimatePresence>
                            {searchQuery && (
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    onClick={() => onSearchChange("")}
                                    className="absolute right-4 w-8 h-8 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center text-foreground/50 hover:text-foreground transition-all"
                                    aria-label="Clear search"
                                >
                                    <X className="w-4 h-4" />
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="flex items-center gap-2 mr-2 text-foreground/50">
                    <Filter className="w-4 h-4" />
                    <span className="text-sm font-semibold uppercase tracking-wider">Filter:</span>
                </div>

                {allCategories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onCategoryChange(category)}
                            className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                                isActive
                                    ? "text-white shadow-lg shadow-indigo-500/30"
                                    : "text-foreground/60 hover:text-foreground bg-card-bg border border-border hover:border-indigo-500/30"
                            }`}
                            aria-pressed={isActive}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="active-category"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {category === "All" && <LayoutGrid className="w-3.5 h-3.5" />}
                                {category}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            {/* Result count */}
            <motion.p
                key={`${activeCategory}-${searchQuery}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm text-foreground/50 mt-6 font-medium"
            >
                Showing <span className="text-indigo-500 dark:text-cyan-400 font-bold">{resultCount}</span>{" "}
                {resultCount === 1 ? "article" : "articles"}
                {activeCategory !== "All" && (
                    <>
                        {" "}in <span className="text-indigo-500 dark:text-cyan-400 font-bold">{activeCategory}</span>
                    </>
                )}
            </motion.p>
        </motion.div>
    );
}