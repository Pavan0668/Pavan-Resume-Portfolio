"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
    { name: "Dell", logo: "/partners/dell.png" },
    { name: "QNAP", logo: "/partners/qnap.png" },
    { name: "eScan", logo: "/partners/escan.png" },
    { name: "Adobe", logo: "/partners/adobe.png" },
    { name: "Fission Cloud", logo: "/partners/fission-cloud.png" },
    { name: "GajShield", logo: "/partners/gajshield.png" },
    { name: "HP", logo: "/partners/hp.png" },
    { name: "Cisco", logo: "/partners/cisco.png" },
    { name: "Ruckus Wireless", logo: "/partners/ruckus.png" },
    { name: "IBM", logo: "/partners/ibm.png" },
    { name: "GoDaddy", logo: "/partners/godaddy.png" },
    { name: "D-Link", logo: "/partners/dlink.png" },
    { name: "Dahua", logo: "/partners/dahua.png" },
    { name: "Aruba Networks", logo: "/partners/aruba.png" },
    { name: "Cyberoam", logo: "/partners/cyberoam.png" },
    { name: "CBC Group", logo: "/partners/cbc-group.png" },
    { name: "Symantec", logo: "/partners/symantec.png" },
    { name: "Microsoft", logo: "/partners/microsoft.png" },
    { name: "Lenovo", logo: "/partners/lenovo.png" },
    { name: "Hikvision", logo: "/partners/hikvision.png" },
    { name: "Tally", logo: "/partners/tally.png" },
    { name: "Autodesk", logo: "/partners/autodesk.png" },
];

export default function PartnersSection() {
    return (
        <section id="partners" className="py-24 md:py-32 relative overflow-hidden bg-background transition-colors">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-cyan-400 uppercase mb-4">
                        Our Partners
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4">
                        Trusted Technology{" "}
                        <span className="gradient-text">Partners</span>
                    </h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg">
                        We collaborate with the world&apos;s leading technology companies to deliver best-in-class solutions.
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04, duration: 0.4 }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="group"
                        >
                            <div className="glass-card rounded-2xl p-5 flex flex-col items-center justify-center gap-3 h-[140px] border border-card-border group-hover:border-card-border-hover transition-all duration-300 group-hover:shadow-[0_8px_30px_var(--glow-shadow)]">
                                <div className="relative w-full h-16 flex items-center justify-center">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        width={120}
                                        height={60}
                                        className="object-contain max-h-14 w-auto filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:brightness-0 dark:invert dark:opacity-50 dark:group-hover:brightness-100 dark:group-hover:invert-0 dark:group-hover:opacity-100"
                                        unoptimized
                                    />
                                </div>
                                <p className="text-xs font-semibold text-foreground/50 group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                                    {partner.name}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
