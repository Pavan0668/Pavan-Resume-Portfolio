"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10 rounded-full glass" />;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-slate-200 dark:hover:bg-white/10 transition-colors overflow-hidden group border border-slate-200 dark:border-white/10"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 0 : 1,
                    opacity: isDark ? 0 : 1,
                    rotate: isDark ? -90 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Sun className="h-5 w-5 text-amber-500" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 1 : 0,
                    opacity: isDark ? 1 : 0,
                    rotate: isDark ? 0 : 90,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute"
            >
                <Moon className="h-5 w-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            </motion.div>
        </button>
    );
}
