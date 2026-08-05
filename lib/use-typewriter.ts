"use client";

import { useEffect, useRef, useState } from "react";

// Typewriter effect hook for hero headings
// Shared between Blog and Career pages to keep animation consistent
export function useTypewriter(words: string[], speed = 40, startDelay = 600, pauseBetween = 1800) {
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const wordIndexRef = useRef(0);
    const charIndexRef = useRef(0);
    const isDeletingRef = useRef(false);
    const wordsRef = useRef(words);

    useEffect(() => {
        wordsRef.current = words;
    }, [words]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let isMounted = true;

        const startTyping = () => {
            if (!isMounted) return;
            setIsTyping(true);

            const type = () => {
                if (!isMounted) return;

                const currentWord = wordsRef.current[wordIndexRef.current];

                if (!isDeletingRef.current) {
                    if (charIndexRef.current <= currentWord.length) {
                        setDisplayText(currentWord.slice(0, charIndexRef.current));
                        charIndexRef.current++;
                        timeout = setTimeout(type, speed);
                    } else {
                        isDeletingRef.current = true;
                        timeout = setTimeout(type, pauseBetween);
                    }
                } else {
                    if (charIndexRef.current > 0) {
                        charIndexRef.current--;
                        setDisplayText(currentWord.slice(0, charIndexRef.current));
                        timeout = setTimeout(type, speed / 2);
                    } else {
                        isDeletingRef.current = false;
                        wordIndexRef.current = (wordIndexRef.current + 1) % wordsRef.current.length;
                        timeout = setTimeout(type, speed);
                    }
                }
            };

            timeout = setTimeout(type, speed);
        };

        const startDelayTimeout = setTimeout(startTyping, startDelay);

        return () => {
            isMounted = false;
            clearTimeout(startDelayTimeout);
            clearTimeout(timeout);
        };
    }, [speed, startDelay, pauseBetween]);

    return { displayText, isTyping };
}