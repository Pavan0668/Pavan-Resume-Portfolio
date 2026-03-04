"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { CareerHero } from "@/components/ui/career/CareerHero";
import { JobCard } from "@/components/ui/career/JobCard";
import { ApplyModal } from "@/components/ui/career/ApplyModal";
import { motion } from "framer-motion";

const jobs = [
    {
        title: ".NET Developer (Fresher)",
        description: "We are looking for an enthusiastic and talented Fresher .NET Developer to join our growing development team. You will work on building scalable, high-performance web applications and services using the latest .NET ecosystem.\n\nKey Responsibilities:\n- Assist in the development of robust web applications\n- Write clean, maintainable, and efficient code\n- Collaborate with senior developers and cross-functional teams\n- Participate in code reviews and troubleshooting",
        skills: [".NET Core", "C#", "ASP.NET MVC", "SQL Server", "REST APIs", "Entity Framework", "JavaScript/React"],
        location: "Pune, Maharashtra",
        department: "Software Development",
        isExpired: false
    },
    {
        title: "Hardware / Networking Engineering",
        description: "Repairing & maintenance of computer peripherals\nTroubleshooting\nInstallation of operating system\nTroubleshooting of mails\nAssembling & disassembling of computer\nBackup & restoring Data\nCreating & management of user account\nIP Addressing\nCrimping, I/O Punching cables\nConfigure Firewall, Router, Switch, Access point",
        skills: ["Bsc.IT", "Diploma IT", "Hardware Networking course", "Good Technical knowledge", "Positive thinker", "MS Office", "Outlook"],
        location: "Mumbai, Maharashtra",
        department: "IT Support & Infrastructure",
        isExpired: true
    }
];

export default function CareerPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleApply = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setIsModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <CareerHero />

            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 tracking-tight">Open Opportunities</h2>
                        <p className="text-foreground/60 max-w-xl">
                            Discover your next career move at JK Computers. We're looking for passionate individuals who are ready to make an impact.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 text-sm font-medium border border-foreground/10 text-foreground/70">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            {jobs.filter(j => !j.isExpired).length} Active Roles
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {jobs.map((job, index) => (
                        <JobCard
                            key={index}
                            title={job.title}
                            description={job.description}
                            skills={job.skills}
                            location={job.location}
                            department={job.department}
                            isExpired={job.isExpired}
                            onApply={() => handleApply(job.title)}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 p-12 rounded-3xl bg-indigo-600 text-white text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
                        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-cyan-400 rounded-full blur-[100px]" />
                    </div>

                    <h3 className="text-3xl font-bold mb-4">Don't see a perfect fit?</h3>
                    <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg text-balance">
                        We're always looking for exceptional talent to join our network.
                        Send us your CV and we'll keep you in mind for future openings.
                    </p>
                    <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition-all active:scale-95">
                        Send Your CV
                    </button>
                </motion.div>
            </section>

            <ApplyModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob || ""}
            />

            <Footer />
        </main>
    );
}
