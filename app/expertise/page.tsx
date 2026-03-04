"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ExpertiseHero } from "@/components/ui/expertise/ExpertiseHero";
import { ServiceCategory } from "@/components/ui/expertise/ServiceCategory";
import { ServiceModal } from "@/components/ui/expertise/ServiceModal";
import {
    Cpu, Network, Laptop, Globe, Cloud, Shield, Settings,
    Codesandbox, Server, HelpCircle, Building2, HardDrive,
    ShieldCheck, Database, Layout, Smartphone, PenTool,
    BarChart, Camera, Unlock, UserCheck, RefreshCcw, SmartphoneIcon,
    CodeXml, PenToolIcon, Globe2, Briefcase, Zap
} from "lucide-react";

export default function ExpertisePage() {
    const [selectedService, setSelectedService] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleServiceClick = (service: any) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const categories = [
        {
            id: "managed-it-support",
            title: "Managed IT Support",
            description: "Proactive IT management and support services designed to enhance productivity and reduce operational overhead for businesses of all sizes.",
            image: "/images/expertise/managed-it.jpg",
            services: [
                {
                    title: "Software Licensing",
                    description: "Optimization and management of your software assets to ensure compliance and cost-effectiveness.",
                    detailedDescription: "Our software licensing experts help you navigate complex vendor agreements (Microsoft, Adobe, etc.) to ensure your business stays compliant while only paying for what you need. We provide regular audits, renewal reminders, and strategic procurement advice to maximize your software budget ROI.",
                    icon: Settings
                },
                {
                    title: "Network Designing",
                    description: "Strategic planning and implementation of robust network architectures for seamless connectivity.",
                    detailedDescription: "We design and implement scalable, secure network infrastructures tailored to your business growth. Our approach includes site surveys, topology mapping, and the selection of industry-leading hardware (Cisco, HP) to ensure high-performance connectivity and future-proof reliability.",
                    icon: Network
                },
                {
                    title: "Managed IT Services",
                    description: "Full-spectrum IT management providing a single point of contact for all your technology needs.",
                    detailedDescription: "As your dedicated IT partner, we take full responsibility for your technology environment. For a fixed monthly fee, you get unlimited support, proactive maintenance, and strategic planning. We act as an extension of your team, allowing you to focus on your core business goals.",
                    icon: UserCheck
                },
                {
                    title: "Helpdesk & Onsite Support",
                    description: "Responsive technical assistance available both remotely and at your location.",
                    detailedDescription: "Our support team is ready to resolve issues quickly via remote assistance or onsite visits. We maintain high service level agreements (SLAs) to ensure your staff remains productive. Whether it's a simple password reset or complex hardware troubleshooting, we're just a call away.",
                    icon: HelpCircle
                },
                {
                    title: "Small Business IT Support",
                    description: "Tailored IT solutions specifically designed for the unique challenges of small enterprises.",
                    detailedDescription: "We understand that small businesses need reliable IT without the enterprise price tag. Our solutions are scaled to your size, providing professional-grade security, cloud integration, and support that grows with your company. No business is too small for expert care.",
                    icon: Building2
                },
                {
                    title: "Network & Server Monitoring",
                    description: "24/7 proactive monitoring to ensure maximum uptime and performance of your infrastructure.",
                    detailedDescription: "Using advanced monitoring tools, we keep an eye on your servers and networks around the clock. We detect and resolve potential issues—like server bottlenecks or security threats—before they impact your business, ensuring near 100% uptime for your critical systems.",
                    icon: Activity
                },
                {
                    title: "Server & Workstation Maintenance",
                    description: "Regular updates and health checks to keep your hardware running efficiently.",
                    detailedDescription: "Prevention is better than cure. We perform regular patch management, security updates, and performance optimization on all your servers and workstations. This extends hardware life, improves security, and ensures your team has a fast, stable working environment.",
                    icon: Server
                },
                {
                    title: "Offsite Backup Replication",
                    description: "Secure, automated data replication to offsite locations for disaster recovery readiness.",
                    detailedDescription: "Your data is your most valuable asset. We implement automated, encrypted backup solutions that replicate your files to secure offsite data centers. In the event of data loss, we can restore your systems quickly, ensuring business continuity with minimal downtime.",
                    icon: HardDrive
                },
                {
                    title: "Asset Management",
                    description: "Comprehensive tracking and lifecycle management of your IT hardware and software assets.",
                    detailedDescription: "We provide full visibility into your IT inventory. From procurement and deployment to maintenance and disposal, we track the lifecycle of every device and license. This helps in budgeting, reduces waste, and ensures all hardware remains under warranty and up to date.",
                    icon: Database
                },
                {
                    title: "IT Consulting",
                    description: "Expert strategic advice to align your technology investments with your business goals.",
                    detailedDescription: "Our consultants help you make informed decisions about your technology roadmap. We provide advice on digitalization, cloud migration, security posture, and IT infrastructure investment. We ensure your technology strategy directly supports your long-term business objectives.",
                    icon: Briefcase
                },
            ]
        },
        {
            id: "project-services",
            title: "Project Services",
            description: "Expert project management and technical execution for complex IT initiatives, ensuring timely and budget-conscious delivery.",
            image: "/images/expertise/project-services.jpg",
            services: [
                {
                    title: "E-Governance Projects",
                    description: "Specialized IT solutions for government digital transformation and citizen engagement.",
                    detailedDescription: "Our team has extensive experience in implementing large-scale e-governance initiatives. We focus on building secure, transparent, and user-friendly digital portals that improve public service delivery and streamline government-to-citizen interactions.",
                    icon: Building2
                },
                {
                    title: "Network & System Upgrades",
                    description: "Modernizing your infrastructure with the latest hardware and software standards.",
                    detailedDescription: "We handle complex hardware and software migrations with surgical precision. Whether you are upgrading your server farm or performing a company-wide OS transition, we ensure a smooth move with zero data loss and minimal operational disruption.",
                    icon: RefreshCcw
                },
                {
                    title: "Server Virtualization",
                    description: "Maximizing hardware efficiency and scalability through industry-leading virtualization technology.",
                    detailedDescription: "Reduce your hardware footprint and energy costs by consolidating multiple physical servers into virtual machines. We use VMware and Hyper-V to create flexible, high-availability environments that can scale instantly based on your business demands.",
                    icon: Box
                },
                {
                    title: "Relocation",
                    description: "Seamless transition of your IT infrastructure during office moves with minimal downtime.",
                    detailedDescription: "Moving offices is stressful, but your IT transition doesn't have to be. We handle the teardown, safe transport, and rebuild of your entire technology stack. We coordinate with ISPs and electrical contractors to ensure your new office is online from day one.",
                    icon: Zap
                },
                {
                    title: "Wireless Solutions",
                    description: "High-performance enterprise wireless networking for mobile-first environments.",
                    detailedDescription: "We deploy managed Wi-Fi solutions that provide blanket coverage and enterprise-grade security. Our systems support high-density environments, guest access portals, and seamless roaming, ensuring your mobile workforce stays connected throughout the premises.",
                    icon: Network
                },
                {
                    title: "Scanning & Digitizing",
                    description: "Converting physical archives into searchable, secure digital formats for better efficiency.",
                    detailedDescription: "Transform your paper-cluttered office into a digital powerhouse. We provide high-volume document scanning with OCR (Optical Character Recognition) technology, making your archives searchable, secure, and accessible from anywhere.",
                    icon: Layout
                },
                {
                    title: "Smart Card Solutions",
                    description: "Secure identification and access control systems using advanced smart card technology.",
                    detailedDescription: "Implement high-security access control with customized smart card systems. From secure building entry to workstation authentication, our solutions provide a tamper-proof way to manage identity and access across your organization.",
                    icon: Unlock
                },
            ]
        },
        {
            id: "domain-hosting",
            title: "Domain & Hosting",
            description: "Reliable foundation for your online presence with secure domain management and high-performance hosting solutions.",
            image: "/images/expertise/hosting.jpg",
            services: [
                {
                    title: "Domain Registration",
                    description: "Securing your digital identity with comprehensive domain portfolio management.",
                    detailedDescription: "We help you secure and manage your business identities on the web. Our services include new registrations, transfers, and management of DNS settings, ensuring your brand is protected and your services are always reachable.",
                    icon: Globe2
                },
                {
                    title: "Web Hosting",
                    description: "High-speed, scalable hosting environments for websites and web applications.",
                    detailedDescription: "Experience superior loading speeds and reliability with our managed hosting solutions. We provide high-performance server environments tailored to your traffic needs, including automated backups and 24/7 technical support.",
                    icon: Server
                },
                {
                    title: "SSL & Security",
                    description: "Protecting your user data and building trust with modern encryption standards.",
                    detailedDescription: "Secure your website with industry-standard SSL certificates. We ensure all data transmitted between your server and users is encrypted, boosting your search engine rankings and building undeniable trust with your customers.",
                    icon: ShieldCheck
                },
                {
                    title: "Enterprise Email",
                    description: "Professional, secure email hosting solutions for clear business communication.",
                    detailedDescription: "Go beyond basic email with our enterprise-grade communication suites. We provide secure, spam-filtered email hosting with large storage capacities and seamless integration across all your devices, ensuring professional communication.",
                    icon: Globe
                },
                {
                    title: "Marketing Tools",
                    description: "Integrated tools to boost your online visibility and customer engagement.",
                    detailedDescription: "Grow your online presence with our suite of integrated marketing tools. From SEO dashboards to email marketing platforms, we provide everything you need to attract new visitors and convert them into loyal customers.",
                    icon: BarChart
                },
            ]
        },
        {
            id: "website-development",
            title: "Website Development & Services",
            description: "Building digital experiences that convert. Custom web and mobile solutions designed for performance and user engagement.",
            image: "/images/expertise/website-dev.jpg",
            services: [
                {
                    title: "Website Development",
                    description: "Custom coding of robust, scalable web applications using modern frameworks.",
                    detailedDescription: "We build more than just websites; we create powerful digital engines for your business. Using Next.js, React, and other modern technologies, we develop fast, SEO-optimized, and secure web applications that drive real results.",
                    icon: CodeXml
                },
                {
                    title: "Website Maintenance",
                    description: "Ongoing support to keep your digital platform secure, updated, and fast.",
                    detailedDescription: "Your website needs constant care to perform at its best. Our maintenance plans include security monitoring, regular updates, performance optimization, and content edits, ensuring your site remains a top-tier asset for your brand.",
                    icon: Settings
                },
                {
                    title: "UX/UI Design",
                    description: "Creating beautiful, intuitive interfaces that enhance user satisfaction.",
                    detailedDescription: "Design is not just how it looks, but how it works. Our designers focus on creating intuitive user journeys that reduce friction and increase conversions. We craft visually stunning interfaces that reflect your brand's unique identity.",
                    icon: PenToolIcon
                },
                {
                    title: "Mobile App Development",
                    description: "Native and cross-platform mobile apps for Android and iOS devices.",
                    detailedDescription: "Put your business in your customers' pockets. We develop high-performance mobile applications that provide feature-rich experiences. Whether it's native iOS/Android or cross-platform Flutter, we deliver apps that users love.",
                    icon: SmartphoneIcon
                },
                {
                    title: "Software Development",
                    description: "Bespoke software solutions to solve specific business challenges.",
                    detailedDescription: "When off-the-shelf software isn't enough, we build custom solutions tailored to your specific workflows. We focus on solving complex problems with elegant, scalable software that integrates perfectly with your existing systems.",
                    icon: Codesandbox
                },
                {
                    title: "Digital Marketing",
                    description: "Driving growth through SEO, SEM, and strategic social media campaigns.",
                    detailedDescription: "Reach your target audience where they live. Our digital marketing strategies combine data-driven SEO, creative content, and targeted ads to increase your visibility and drive high-quality leads to your business.",
                    icon: BarChart
                },
            ]
        },
        {
            id: "cloud-services",
            title: "Cloud Services",
            description: "Leverage the power of the cloud to improve scalability, reduce costs, and enable remote collaboration.",
            image: "/images/expertise/cloud.jpg",
            services: [
                {
                    title: "Infrastructure as a Service",
                    description: "Scalable cloud computing resources to replace on-premise hardware.",
                    detailedDescription: "Get the power of a full data center without the hardware headaches. Our IaaS solutions provide on-demand computing, storage, and networking resources in the cloud, allowing you to scale up or down instantly as your needs change.",
                    icon: Cloud
                },
                {
                    title: "Private & Hybrid Cloud",
                    description: "Custom cloud architectures balancing security, control, and flexibility.",
                    detailedDescription: "We help you find the perfect balance between the public cloud's scale and your own private infrastructure's security. Our hybrid cloud solutions allow for seamless data movement and optimized workload management across environments.",
                    icon: Shield
                },
                {
                    title: "Email Archiving",
                    description: "Secure, compliant storage and retrieval of enterprise communication history.",
                    detailedDescription: "Ensure your organization stays compliant with secure email archiving. We provide tamper-proof, long-term storage of all communications, with fast search and retrieval tools for legal discovery and audit purposes.",
                    icon: Database
                },
                {
                    title: "Desktop as a Service",
                    description: "Secure virtual desktops accessible from anywhere on any device.",
                    detailedDescription: "Enable your remote workforce with secure, virtualized Windows desktops. Your team can access their files and applications from any device, while all your company data remains safe in our highly secure cloud environment.",
                    icon: Layout
                },
                {
                    title: "Software as a Service",
                    description: "Deploying and managing powerful cloud-based business applications.",
                    detailedDescription: "We help you deploy and manage industry-leading cloud applications (like Office 365 or CRM systems). We ensure proper setup, user training, and ongoing support, so you get the most out of your cloud software investments.",
                    icon: Codesandbox
                },
                {
                    title: "Cloud Security",
                    description: "Advanced protection for your cloud-based data and infrastructure.",
                    detailedDescription: "Protect your cloud assets with our comprehensive security layers. We provide identity management, threat detection, and data encryption specifically designed for cloud environments, ensuring your digital boundary is always secure.",
                    icon: ShieldCheck
                },
            ]
        },
        {
            id: "security-surveillance",
            title: "Security & Surveillance",
            description: "Integrated security solutions to protect your physical and digital assets with cutting-edge technology.",
            image: "/images/expertise/security.jpg",
            services: [
                {
                    title: "CCTV Solutions",
                    description: "High-definition surveillance systems with remote monitoring capabilities.",
                    detailedDescription: "Watch over your business from anywhere. We design and install high-definition camera systems with cloud-based recording and intelligent motion detection. Our systems provide crystal-clear footage and 24/7 peace of mind.",
                    icon: Camera
                },
                {
                    title: "Firewall Solutions",
                    description: "Advanced perimeter security to protect your network from external threats.",
                    detailedDescription: "Our next-generation firewalls act as a powerful barrier between your network and the web. We implement deep packet inspection and intrusion prevention to stop hackers and malware before they reach your internal systems.",
                    icon: Shield
                },
                {
                    title: "Virus Protection",
                    description: "Endpoint security solutions to safeguard your devices from malware.",
                    detailedDescription: "We provide enterprise-grade antivirus and anti-malware protection for every device in your fleet. Our managed endpoint security ensures every laptop, desktop, and server is shielded from the latest cyber threats in real-time.",
                    icon: ShieldCheck
                },
                {
                    title: "Biometric Attendance",
                    description: "Secure and efficient personnel tracking using biometric technology.",
                    detailedDescription: "Replace outdated punch-clocks with secure biometric systems. Using fingerprint or facial recognition, our attendance solutions provide accurate, tamper-proof tracking of employee time and access, integrating directly with your HR software.",
                    icon: UserCheck
                },
                {
                    title: "Backup Solutions",
                    description: "Comprehensive data protection strategies for business continuity.",
                    detailedDescription: "Protect your data with multi-layered backup strategies. We combine local rapid-recovery backups with secure offsite storage, ensuring that whether it's a hardware failure or a ransomware attack, your business can recover in minutes.",
                    icon: Database
                },
                {
                    title: "Network Security",
                    description: "Internal security measures to protect sensitive data within your network.",
                    detailedDescription: "Security is about more than just a firewall. We secure your internal network through VLAN segmentation, access control lists, and regular security audits, ensuring that only authorized users can access your most sensitive business data.",
                    icon: Unlock
                },
            ]
        },
        {
            id: "business-automation",
            title: "Business Automation Solutions",
            description: "Streamline your workflows and reduce manual tasks with intelligent automation and AI-driven insights.",
            image: "/images/expertise/automation.jpg",
            services: [
                {
                    title: "Process Automation",
                    description: "Automating repetitive business processes to increase efficiency.",
                    detailedDescription: "Free your team from tedious manual tasks. We implement RPA (Robotic Process Automation) and custom scripts to handle data entry, invoicing, and report generation, allowing your staff to focus on high-value creative work.",
                    icon: Settings
                },
                {
                    title: "Workflow Integration",
                    description: "Connecting your business tools for seamless data flow and collaboration.",
                    detailedDescription: "Eliminate data silos by connecting your disparate software tools. We build custom integrations that allow data to flow automatically between your CRM, accounting software, and operational tools, ensuring a 'single source of truth'.",
                    icon: Zap
                },
                {
                    title: "AI-Driven Insights",
                    description: "Leveraging artificial intelligence to gain actionable business intelligence.",
                    detailedDescription: "Turn your data into a competitive advantage. Using machine learning and AI analysis, we help you uncover hidden patterns in your business data, providing you with predictive insights that lead to smarter, more profitable decisions.",
                    icon: BarChart
                },
                {
                    title: "Custom Dashboards",
                    description: "Real-time visibility into your key performance indicators.",
                    detailedDescription: "Get a bird's-eye view of your business performance. We build customized, real-time dashboards that pull data from all your systems, presenting your most important KPIs in a clean, visual format that's easy to understand at a glance.",
                    icon: Layout
                },
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <ExpertiseHero />

            {categories.map((category) => (
                <ServiceCategory
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    description={category.description}
                    image={category.image}
                    services={category.services}
                    onServiceClick={handleServiceClick}
                />
            ))}

            <ServiceModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedService?.title || ""}
                description={selectedService?.description || ""}
                detailedDescription={selectedService?.detailedDescription || ""}
                icon={selectedService?.icon || Settings}
            />

            <Footer />
        </main>
    );
}

// Missing icons for the categories
const Activity = (props: any) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
)

const Box = (props: any) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
    </svg>
)
