"use client";

import { motion } from "framer-motion";
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    MessageCircle,
    Youtube,
    Share2,
    ArrowUpRight,
} from "lucide-react";

type SocialPlatform = {
    name: string;
    icon: typeof Facebook;
    href: string;
    hoverColor: string;
    description: string;
    followers: string;
};

const socialPlatforms: SocialPlatform[] = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=61554599484930",
        hoverColor:
            "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:shadow-[0_10px_30px_rgba(24,119,242,0.3)]",
        description: "Follow our latest updates and company news",
        followers: "15K+",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/company/jkc-solutions-ltd/?viewAsMember=true",
        hoverColor:
            "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_10px_30px_rgba(10,102,194,0.3)]",
        description: "Connect with our team and industry insights",
        followers: "25K+",
    },
    {
        name: "Twitter / X",
        icon: Twitter,
        href: "https://x.com/jkcsolution",
        hoverColor:
            "hover:bg-black hover:text-white hover:border-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] dark:hover:bg-white dark:hover:text-black dark:hover:border-white",
        description: "Real-time tech news and announcements",
        followers: "10K+",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "https://www.instagram.com/jkcsolutionsmumbai/",
        hoverColor:
            "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] hover:shadow-[0_10px_30px_rgba(228,64,95,0.3)]",
        description: "Behind the scenes and team culture",
        followers: "8K+",
    },
    {
        name: "WhatsApp",
        icon: MessageCircle,
        href: "https://wa.me/918668262359",
        hoverColor:
            "hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)]",
        description: "Chat with us instantly for quick support",
        followers: "24/7",
    },
    {
        name: "YouTube",
        icon: Youtube,
        href: "https://youtube.com",
        hoverColor:
            "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-[0_10px_30px_rgba(255,0,0,0.3)]",
        description: "Tutorials, demos, and webinars",
        followers: "12K+",
    },
];

export default function SocialMediaSection() {
    return (
        <section className="py-20 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-cyan-400/5 rounded-full blur-[120px]" />
                <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full animate-blob" />
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-400/5 blur-[100px] rounded-full animate-blob-delay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-cyan-400 text-sm font-bold mb-6">
                        <Share2 className="w-4 h-4" />
                        <span>CONNECT WITH US</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
                        Follow our <span className="gradient-text">journey</span>
                    </h2>

                    <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
                        Stay connected with JK Computers across all our social platforms for
                        the latest in IT solutions, AI innovations, and industry insights.
                    </p>
                </motion.div>

                {/* Social Icons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {socialPlatforms.map((platform, index) => {
                        const Icon = platform.icon;
                        return (
                            <motion.a
                                key={platform.name}
                                href={platform.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`group relative glass-card rounded-2xl p-6 border border-card-border transition-all duration-500 overflow-hidden ${platform.hoverColor}`}
                                aria-label={`Follow us on ${platform.name}`}
                            >
                                <div className="relative flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                                <Icon className="w-7 h-7 text-indigo-500 dark:text-cyan-400 transition-all duration-500 group-hover:animate-icon-float" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-foreground transition-colors duration-300">
                                                {platform.name}
                                            </h3>
                                            <p className="text-sm text-foreground/50 transition-colors duration-300">
                                                {platform.followers} followers
                                            </p>
                                        </div>
                                    </div>

                                    <motion.div
                                        animate={{ rotate: 0 }}
                                        whileHover={{ rotate: 45 }}
                                        className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300"
                                    >
                                        <ArrowUpRight className="w-4 h-4 text-foreground/50 transition-colors duration-300" />
                                    </motion.div>
                                </div>

                                <p className="relative mt-4 text-sm text-foreground/60 transition-colors duration-300">
                                    {platform.description}
                                </p>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-foreground/50 text-sm">
                        Prefer email? Reach us directly at{" "}
                        <a
                            href="mailto:jkcsolutionspune@gmail.com"
                            className="text-indigo-600 dark:text-cyan-400 font-semibold hover:underline transition-colors"
                        >
                            jkcsolutionspune@gmail.com
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}