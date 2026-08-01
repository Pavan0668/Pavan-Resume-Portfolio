"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Handshake } from "lucide-react";

const partners = [
    { name: "Microsoft", icon: "/Inudstry Leaders/microsoft-logo.jpg" },
    { name: "Google Cloud", icon: "/Inudstry Leaders/Google-Cloud-Logo.png" },
    { name: "Amazon Web Services", icon: "/Inudstry Leaders/Amazon-Web-Services-AWS-Symbol.png" },
    { name: "OpenAI", icon: "/Inudstry Leaders/OpenAI-Logo.png" },
    { name: "Anthropic", icon: "/Inudstry Leaders/Anthropic.png" },
    { name: "Cloudflare", icon: "/Inudstry Leaders/Cloudflare-Logo.wine.png" },
    { name: "Vercel", icon: "/Inudstry Leaders/Vercel-Logo.jpg" },
    { name: "Stripe", icon: "/Inudstry Leaders/Stripe-Symbol.png" },
];

function PartnerLogo({ name, icon }: { name: string; icon: string }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="w-36 h-20 md:w-44 md:h-24 rounded-xl bg-white flex items-center justify-center p-4 border border-white/20 shadow-lg shadow-black/10">
            {!imgError ? (
                <img
                    src={icon}
                    alt={name}
                    className="w-full h-full object-contain"
                    onError={() => setImgError(true)}
                />
            ) : (
                <span className="text-xl md:text-2xl font-bold text-slate-600">
                    {name.charAt(0)}
                </span>
            )}
        </div>
    );
}

export default function TrustSection() {
    return (
        <section id="partners" className="py-20 border-y border-white/5 bg-[#020617] relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-14 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-3 text-white"
                >
                    Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Industry Leaders</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium"
                >
                    Partnering with the most innovative companies worldwide to deliver cutting-edge solutions.
                </motion.p>
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
                    className="flex flex-nowrap gap-10 items-center w-[200%]"
                >
                    {/* Double array to create seamless loop */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-none flex flex-col items-center gap-3"
                        >
                            {/* Partner Logo */}
                            <PartnerLogo name={partner.name} icon={partner.icon} />
                            {/* Partner Name */}
                            <span className="text-sm md:text-base font-semibold text-slate-400 hover:text-slate-300 transition-colors whitespace-nowrap">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}