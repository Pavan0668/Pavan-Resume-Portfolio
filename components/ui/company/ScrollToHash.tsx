"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Small delay to let the page render before scrolling
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [pathname]);

    return null;
}
