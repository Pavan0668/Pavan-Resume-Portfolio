"use client";

import { motion } from "framer-motion";

const partners = [
    "Microsoft", "Google Cloud", "Amazon Web Services", "OpenAI", "Anthropic", "Cloudflare", "Vercel", "Stripe"
];

export default function TrustSection() {
    return (
        <section id="partners" className="py-20 border-y border-white/5 bg-[#020617] relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <p className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Trusted by industry leaders & cutting-edge startups</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                {/* Gradients to fade out edges */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25,
                    }}
                    className="flex flex-nowrap gap-16 items-center w-[200%]"
                >
                    {/* Double array to create seamless loop */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-none text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-slate-600 opacity-60 hover:opacity-100 transition-opacity"
                        >
                            {partner}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
