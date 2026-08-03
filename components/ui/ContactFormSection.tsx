"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Send,
    User,
    Mail,
    Phone,
    Tag,
    MessageSquare,
    CheckCircle2,
    MapPin,
    Building2,
    Loader2,
    AlertCircle,
    Sparkles,
    ArrowRight,
    Clock,
    Shield,
    Headphones,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
};

// Floating label input component
function FloatingInput({
    id,
    label,
    icon: Icon,
    type = "text",
    value,
    onChange,
    error,
    required = false,
    textarea = false,
}: {
    id: string;
    label: string;
    icon: typeof User;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    required?: boolean;
    textarea?: boolean;
}) {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || value.length > 0;

    const baseClasses = `w-full rounded-2xl bg-foreground/5 border transition-all duration-300 outline-none text-foreground ${
        error
            ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
            : "border-foreground/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20"
    } ${textarea ? "pt-8 pb-4 pl-12 pr-4 min-h-[140px] resize-none" : "h-14 pl-12 pr-4"}`;

    return (
        <div className="relative group">
            <Icon
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 ${
                    isFloating
                        ? "text-indigo-500 dark:text-cyan-400"
                        : "text-foreground/30 group-focus-within:text-indigo-500 dark:group-focus-within:text-cyan-400"
                } ${textarea ? "top-7" : ""}`}
            />

            {textarea ? (
                <textarea
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder=" "
                    required={required}
                    aria-label={label}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    className={baseClasses}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder=" "
                    required={required}
                    aria-label={label}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    className={baseClasses}
                />
            )}

            <label
                htmlFor={id}
                className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                    isFloating
                        ? "top-2 text-xs font-semibold text-indigo-500 dark:text-cyan-400"
                        : "top-1/2 -translate-y-1/2 text-foreground/40 text-sm"
                } ${textarea ? (isFloating ? "top-3" : "top-7") : ""}`}
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {/* Bottom gradient line on focus */}
            <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 scale-x-0 transition-transform duration-500 origin-left rounded-full ${
                    isFloating ? "scale-x-100" : ""
                }`}
            />

            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs text-red-500 flex items-center gap-1"
                    id={`${id}-error`}
                >
                    <AlertCircle className="w-3 h-3" />
                    {error}
                </motion.p>
            )}
        </div>
    );
}

// Magnetic submit button
function MagneticSubmitButton({ status, onClick }: { status: FormStatus; onClick: () => void }) {
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const button = ref.current;
        if (!button) return;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = () => {
        const button = ref.current;
        if (!button) return;
        button.style.transform = "translate(0, 0)";
    };

    return (
        <button
            ref={ref}
            type="submit"
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            disabled={status === "loading"}
            className="relative w-full h-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-lg transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 active:scale-[0.98] overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <AnimatePresence mode="wait">
                {status === "idle" && (
                    <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative flex items-center justify-center gap-3"
                    >
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.span>
                )}
                {status === "loading" && (
                    <motion.span
                        key="loading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="relative flex items-center justify-center gap-3"
                    >
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </motion.span>
                )}
                {status === "success" && (
                    <motion.span
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative flex items-center justify-center gap-3"
                    >
                        <CheckCircle2 className="w-5 h-5" />
                        Message Sent!
                    </motion.span>
                )}
                {status === "error" && (
                    <motion.span
                        key="error"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative flex items-center justify-center gap-3"
                    >
                        <AlertCircle className="w-5 h-5" />
                        Try Again
                    </motion.span>
                )}
            </AnimatePresence>
        </button>
    );
}

// Confetti particles for success
function ConfettiParticles() {
    const particles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${(i * 8.3) % 100}%`,
        delay: `${(i * 0.1) % 1}s`,
        color: i % 2 === 0 ? "bg-indigo-500" : "bg-cyan-400",
        size: i % 3 === 0 ? "w-2 h-2" : "w-1.5 h-1.5",
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {particles.map((p) => (
                <span
                    key={p.id}
                    className={`absolute ${p.color} ${p.size} rounded-full animate-confetti`}
                    style={{ left: p.left, top: "0", animationDelay: p.delay }}
                />
            ))}
        </div>
    );
}

// Contact info item
function ContactInfoItem({ icon: Icon, title, value, href }: {
    icon: typeof MapPin;
    title: string;
    value: string;
    href?: string;
}) {
    const content = (
        <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-foreground/[0.03] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:bg-indigo-500/20">
                <Icon className="w-6 h-6 text-indigo-500 dark:text-cyan-400" />
            </div>
            <div>
                <h4 className="font-bold text-lg mb-1">{title}</h4>
                <p className="text-foreground/60 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {value}
                </p>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} className="block" aria-label={`${title}: ${value}`}>
                {content}
            </a>
        );
    }

    return content;
}

export default function ContactFormSection() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>("idle");
    const [shake, setShake] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (formData.phone && !/^[+\d][\d\s-]{7,}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (!formData.service) {
            newErrors.service = "Please select a service";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setFormData(initialFormData);

            // Reset after success
            setTimeout(() => {
                setStatus("idle");
            }, 5000);
        }, 2000);
    };

    const updateField = (field: keyof FormData) => (value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <section id="contact-form" className="py-20 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-indigo-500/5 to-transparent" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] animate-blob" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-[120px] animate-blob-delay" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Contact Details */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-cyan-400 text-sm font-bold mb-6">
                                <Sparkles className="w-4 h-4" />
                                <span>CONTACT US</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-6">
                                {"Let's discuss your "}
                                <span className="gradient-text">next project</span>
                            </h2>

                            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
                                Whether you need managed IT support, cloud infrastructure, AI automation,
                                or a custom website — our team is ready to help. Fill out the form and
                                {"we'll get back to you within 24 hours."}
                            </p>

                            {/* Contact Info List */}
                            <div className="space-y-4 mb-10">
                                <ContactInfoItem
                                    icon={MapPin}
                                    title="Office Address"
                                    value="545/B, Boulevard Towers by BramhaCorp, Sadhu Vaswani Chowk, opposite Vijay Sales, Camp, Pune, Maharashtra 411001"
                                />
                                <ContactInfoItem
                                    icon={Mail}
                                    title="Email"
                                    value="jkcsolutionspune@gmail.com"
                                    href="mailto:jkcsolutionspune@gmail.com"
                                />
                                <ContactInfoItem
                                    icon={Phone}
                                    title="Phone"
                                    value="+91 9324310387"
                                    href="tel:+919324310387"
                                />
                                <ContactInfoItem
                                    icon={Clock}
                                    title="Working Hours"
                                    value="Mon - Sat: 9:00 AM - 7:00 PM"
                                />
                            </div>

                            {/* Service Badges */}
                            <div className="flex flex-wrap gap-3">
                                {["IT Support", "Cloud Solutions", "AI Automation", "Web Development", "Security"].map((service, index) => (
                                    <motion.span
                                        key={service}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-sm font-semibold border border-indigo-500/20 cursor-default transition-all duration-300 hover:bg-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/10"
                                    >
                                        {service}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Trust indicators */}
                            <div className="mt-10 grid grid-cols-3 gap-4">
                                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl glass-card border border-card-border">
                                    <Shield className="w-6 h-6 text-indigo-500 dark:text-cyan-400" />
                                    <span className="text-xs font-semibold text-foreground/70 text-center">Secure & Confidential</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl glass-card border border-card-border">
                                    <Headphones className="w-6 h-6 text-indigo-500 dark:text-cyan-400" />
                                    <span className="text-xs font-semibold text-foreground/70 text-center">24/7 Support</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 p-4 rounded-2xl glass-card border border-card-border">
                                    <Clock className="w-6 h-6 text-indigo-500 dark:text-cyan-400" />
                                    <span className="text-xs font-semibold text-foreground/70 text-center">Fast Response</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/5 blur-3xl -z-10" />

                            <div className={`relative glass-card p-8 md:p-10 rounded-3xl border border-foreground/10 shadow-2xl ${shake ? "animate-shake" : ""}`}>
                                {/* Animated border glow */}
                                <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-400/20 to-indigo-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <AnimatePresence mode="wait">
                                    {status !== "success" ? (
                                        <motion.form
                                            key="form"
                                            ref={formRef}
                                            onSubmit={handleSubmit}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="space-y-6 relative"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <FloatingInput
                                                    id="name"
                                                    label="Full Name"
                                                    icon={User}
                                                    value={formData.name}
                                                    onChange={updateField("name")}
                                                    error={errors.name}
                                                    required
                                                />
                                                <FloatingInput
                                                    id="email"
                                                    label="Email Address"
                                                    icon={Mail}
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={updateField("email")}
                                                    error={errors.email}
                                                    required
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <FloatingInput
                                                    id="phone"
                                                    label="Phone Number"
                                                    icon={Phone}
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={updateField("phone")}
                                                    error={errors.phone}
                                                />
                                                <FloatingInput
                                                    id="company"
                                                    label="Company Name"
                                                    icon={Building2}
                                                    value={formData.company}
                                                    onChange={updateField("company")}
                                                />
                                            </div>

                                            {/* Service Select */}
                                            <div className="relative group">
                                                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30 transition-colors group-focus-within:text-indigo-500 dark:group-focus-within:text-cyan-400" />
                                                <select
                                                    id="service"
                                                    value={formData.service}
                                                    onChange={(e) => updateField("service")(e.target.value)}
                                                    className={`w-full h-14 pl-12 pr-4 rounded-2xl bg-foreground/5 border transition-all duration-300 outline-none text-foreground appearance-none cursor-pointer ${
                                                        errors.service
                                                            ? "border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                                                            : "border-foreground/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20"
                                                    } ${formData.service ? "text-foreground" : "text-foreground/40"}`}
                                                    aria-label="Select Service"
                                                    aria-invalid={!!errors.service}
                                                >
                                                    <option value="" disabled>Select Service *</option>
                                                    <option value="managed-it-support">Managed IT Support</option>
                                                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                                                    <option value="ai-automation">AI & Automation</option>
                                                    <option value="web-development">Website Development</option>
                                                    <option value="security">Security & Surveillance</option>
                                                    <option value="consulting">IT Consulting</option>
                                                    <option value="other">Other</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ArrowRight className="w-4 h-4 text-foreground/40 rotate-90" />
                                                </div>
                                                {errors.service && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="mt-2 text-xs text-red-500 flex items-center gap-1"
                                                    >
                                                        <AlertCircle className="w-3 h-3" />
                                                        {errors.service}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <FloatingInput
                                                id="message"
                                                label="Tell us about your project"
                                                icon={MessageSquare}
                                                value={formData.message}
                                                onChange={updateField("message")}
                                                error={errors.message}
                                                required
                                                textarea
                                            />

                                            <MagneticSubmitButton status={status} onClick={() => {}} />
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="relative flex flex-col items-center justify-center py-16 text-center"
                                        >
                                            <ConfettiParticles />

                                            <motion.div
                                                initial={{ scale: 0, rotate: -30 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                                className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-8 animate-pulse-glow"
                                            >
                                                <CheckCircle2 className="w-12 h-12 text-green-500 animate-check-pop" />
                                            </motion.div>

                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-3xl font-bold mb-4"
                                            >
                                                Message Sent!
                                            </motion.h3>

                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-foreground/70 text-lg max-w-md"
                                            >
                                                {"Thank you for reaching out. We've received your request and our team will get back to you within 24 hours."}
                                            </motion.p>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                                className="mt-8 flex items-center gap-2 text-sm text-foreground/50"
                                            >
                                                <Clock className="w-4 h-4" />
                                                Average response time: 2-4 hours
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}