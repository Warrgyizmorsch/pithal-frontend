"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Settings,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  TrendingUp,
  FileText,
  Globe,
  HardHat,
  Layers,
  Wrench,
  Construction,
  Check,
  Calendar,
  FileCheck,
  Handshake,
  Activity,
  Headphones,
  Building2,
  Lock,
  MessageSquare,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// DATA CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  {
    value: "TRUSTED",
    label: "INSTALLATIONS",
    desc: "Proven performance across industries.",
  },
  {
    value: "24X7",
    label: "SUPPORT",
    desc: "Always With You",
  },
  {
    value: "Engineering Experts",
    label: "PROFESSIONALS",
    desc: "Experienced professionals delivering & innovating.",
  },
  {
    value: "BEST",
    label: "In Class",
    desc: "Fast Response and Helpline",
  },
];

const contactInformation = [
  {
    channel: "HEAD OFFICE",
    icon: MapPin,
    content:
      "Pithal Machines Ltd.\nBuilding No. 1, First Floor,\nNational Highway 27, Sukher Road,\nVillage Sukher, Tehsil Badgaon,\nDistrict Udaipur, Rajasthan – 313011, India",
    linkText: "View on Map",
    href: "https://www.google.com/maps/dir//TASS,+National+Highway+27,+Sukher+Rd,+Rajasthan+313011/@24.6422969,73.7165995,16.76z/data=!4m16!1m7!3m6!1s0x3967e44236e80ead:0xbce661d60cd0cf9c!2sTASS!8m2!3d24.6412473!4d73.7172356!16s%2Fg%2F11bt_j7kgp!4m7!1m0!1m5!1m1!1s0x3967e44236e80ead:0xbce661d60cd0cf9c!2m2!1d73.7172679!2d24.641242?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    channel: "PHONE NUMBER",
    icon: Phone,
    content: "+91 98875 37129",
    linkText: "Call Us Now",
    href: "tel:+919887537129",
  },
  {
    channel: "EMAIL ADDRESS",
    icon: Mail,
    content:
      "General Enquiries: info@pithalmachine.com\nSales Enquiries: sales@pithalmachine.com",
    linkText: "Send an Email",
    href: "mailto:info@pithalmachine.com",
  },
  {
    channel: "WORKING HOURS",
    icon: Clock,
    content: "Monday – Saturday: 09:00 AM – 06:00 PM (IST)\nSunday: Closed",
    linkText: "Schedule a Meeting",
    href: "mailto:info@pithalmachine.com?subject=Schedule%20a%20Meeting",
  },
];

const consultationBenefits = [
  {
    title: "Plant Planning",
    desc: "Customized plant layouts and process solutions designed for maximum efficiency.",
  },
  {
    title: "Machine Selection",
    desc: "Right equipment selection to match your material, capacity and operational goals.",
  },
  {
    title: "Capacity Optimization",
    desc: "Improve productivity, reduce downtime and maximize return on investment.",
  },
  {
    title: "Engineering Support",
    desc: "End-to-end technical support from concept to commissioning and beyond.",
  },
  {
    title: "Export Assistance",
    desc: "Global delivery support with documentation, logistics and regulatory assistance.",
  },
];

const teamDirectory = [
  {
    department: "SALES",
    icon: Handshake,
    name: "Mr. Ronak Soni",
    role: "Sales Manager",
    email: "sales@pithalmachine.com",
    phone: "+91 98875 37129",
    image: "", // Placeholder
  },
  {
    department: "TECHNICAL SUPPORT",
    icon: Headphones,
    name: "Mr. Dhaval Patel",
    role: "Senior Engineer – Support",
    email: "support@pithalmachine.com",
    phone: "+91 98875 37129",
    image: "", // Placeholder
  },
  {
    department: "PROJECTS",
    icon: HardHat,
    name: "Mr. Hardik Mehta",
    role: "Project Manager",
    email: "projects@pithalmachine.com",
    phone: "+91 98875 37129",
    image: "", // Placeholder
  },
  {
    department: "EXPORTS",
    icon: Globe,
    name: "Mr. Viral Shah",
    role: "Export Manager",
    email: "exports@pithalmachine.com",
    phone: "+91 98875 37129",
    image: "", // Placeholder
  },
  {
    department: "CAREERS",
    icon: Users,
    name: "Ms. Krupa Joshi",
    role: "HR Manager",
    email: "careers@pithalmachine.com",
    phone: "+91 98875 37129",
    image: "", // Placeholder
  },
  {
    department: "GENERAL ENQUIRIES",
    icon: Mail,
    name: "Mr. Jaydeep Vyas",
    role: "Admin Executive",
    email: "info@pithalmachine.com",
    phone: "+91 98875 37129",
    image: "", // Placeholder
  },
];

const processSteps = [
  {
    step: "01",
    title: "INQUIRY",
    desc: "Share your requirements through our contact form, email or call. Our team acknowledges your inquiry promptly.",
    icon: FileText,
  },
  {
    step: "02",
    title: "CONSULTATION",
    desc: "Our experts understand your needs in detail and discuss the best possible solutions tailored to your operations.",
    icon: Users,
  },
  {
    step: "03",
    title: "ENGINEERING REVIEW",
    desc: "We analyze technical requirements, create concepts and evaluate the most efficient and cost-effective approach.",
    icon: Settings,
  },
  {
    step: "04",
    title: "PROPOSAL",
    desc: "You receive a detailed proposal including technical specifications, scope of supply, timelines and commercials for your consideration.",
    icon: FileCheck,
  },
  {
    step: "05",
    title: "EXECUTION SUPPORT",
    desc: "Once approved, we ensure seamless project execution, installation support and long-term partnership for continuous success.",
    icon: Construction,
  },
];

const processCommitments = [
  {
    label: "TRANSPARENT PROCESS",
    desc: "Clear communication at every step.",
    icon: Shield,
  },
  {
    label: "TIMELY RESPONSE",
    desc: "Quick turnaround and on-time delivery.",
    icon: Clock,
  },
  {
    label: "EXPERT GUIDANCE",
    desc: "Industry experts guiding you from start to finish.",
    icon: Users,
  },
  {
    label: "COMMITTED TO YOUR SUCCESS",
    desc: "Your performance is our long-term priority.",
    icon: Award,
  },
];

const industryNeeds = [
  {
    title: "CUSTOM PLANT DESIGN",
    desc: "Tailor-made plant layouts and engineering solutions built around your material, capacity and site requirements.",
    icon: "factory",
  },
  {
    title: "CRUSHER SELECTION",
    desc: "Expert guidance to help you choose the right equipment for maximum productivity and cost efficiency.",
    icon: "crusher",
  },
  {
    title: "OPERATIONAL OPTIMIZATION",
    desc: "Improve output, reduce downtime and lower operational costs with proven optimization strategies and solutions.",
    icon: "charts",
  },
  {
    title: "PROJECT CONSULTATION",
    desc: "End-to-end project consulting including feasibility studies, process planning and engineering support.",
    icon: "consult",
  },
  {
    title: "EXPORT REQUIREMENTS",
    desc: "Assistance with export documentation, logistics coordination and compliance to ensure smooth deliveries.",
    icon: "export",
  },
  {
    title: "AFTER-SALES SUPPORT",
    desc: "Reliable after-sales service, spare parts support and maintenance to keep your operations running smoothly.",
    icon: "support",
  },
];

const globalReachPoints = [
  {
    value: "35+",
    label: "COUNTRIES",
    desc: "Serving clients across the globe with proven solutions.",
  },
  {
    value: "FAST RESPONSE",
    label: "SUPPORT",
    desc: "Dedicated support teams ensuring quick response and resolution.",
  },
  {
    value: "RELIABLE SUPPORT",
    label: "STABILITY",
    desc: "After-sales support and spare availability you can rely on.",
  },
  {
    value: "EXPORT EXPERTISE",
    label: "LOGISTICS",
    desc: "End-to-end export assistance and documentation support.",
  },
];

const globalPresenceRegions = [
  {
    name: "EUROPE",
    countries: "Countries: 8+",
    desc: "Strong presence in key European markets with reliable partners.",
  },
  {
    name: "MIDDLE EAST",
    countries: "Countries: 10+",
    desc: "Serving the core industries with advanced crushing solutions.",
  },
  {
    name: "ASIA",
    countries: "Countries: 12+",
    desc: "Expanding rapidly across emerging and industrial economies.",
  },
  {
    name: "AFRICA",
    countries: "Countries: 12+",
    desc: "Empowering mining and construction industries across Africa.",
  },
  {
    name: "SOUTH AMERICA",
    countries: "Countries: 6+",
    desc: "Delivering performance and reliability across growing markets.",
  },
  {
    name: "GLOBAL REACH",
    countries: "35+ Countries",
    desc: "A global network built on trust, quality and expertise.",
  },
];

const faqData = [
  {
    question: "How quickly do you respond to inquiries?",
    tag: "FAST RESPONSE",
    icon: Clock,
    answer:
      "We understand the value of time. Our team typically responds to all inquiries within 24 hours. For urgent requirements, you can call us directly for immediate assistance from our engineering experts.",
  },
  {
    question: "Can you support international projects?",
    tag: "GLOBAL SUPPORT",
    icon: Globe,
    answer:
      "Yes, we support installations in over 35+ countries. Our team handles complete export logistics, customs compliance, and coordinates with certified local partners for on-site commissioning and service.",
  },
  {
    question: "Do you offer plant design consultation?",
    tag: "ENGINEERING EXPERTISE",
    icon: FileText,
    answer:
      "Absolutely. Our expert design engineers use advanced 3D CAD modeling software to simulate materials flows and topography, ensuring your plant layout is optimized for efficiency and future scalability.",
  },
  {
    question: "Can you customize machines as per our requirements?",
    tag: "CUSTOM SOLUTIONS",
    icon: Settings,
    answer:
      "We specialize in tailor-made configurations. Whether it's adjusted crusher dimensions, customized structural mounts, or specific conveyor configurations, we design around your exact capacity and rock hardness constraints.",
  },
  {
    question: "Do you provide installation and commissioning support?",
    tag: "END-TO-END SUPPORT",
    icon: Wrench,
    answer:
      "Yes. Our senior field engineers travel globally to supervise physical assembly, align gears, test electrical subsystems, and verify target output before handing over operations to your crew.",
  },
];

function renderIndustryNeedIcon(icon: string) {
  switch (icon) {
    case "factory":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16h16" />
          <rect x="2" y="9" width="20" height="4" rx="1" />
          <path d="M9 22V12h6v10" />
        </svg>
      );
    case "crusher":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "charts":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <path d="M3 3v18h18" />
          <path d="m18.7 8-5.1 5.2-2.8-2.7-4.8 4.8" />
        </svg>
      );
    case "consult":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "export":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "support":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      );
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactUsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    const formattedRequirement = `Industry/Sector: ${formData.industry}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.requirement}`;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.companyName,
          requirement: formattedRequirement,
          source:
            typeof window !== "undefined"
              ? window.location.pathname === "/"
                ? "Home Page"
                : `Page: ${window.location.pathname}`
              : "Contact Us Page",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMsg({
          type: "success",
          text: `Thank you ${formData.fullName}. Your inquiry has been submitted successfully!`,
        });
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          industry: "",
          requirement: "",
        });
      } else {
        setStatusMsg({
          type: "error",
          text: data.error || "Failed to submit inquiry. Please try again.",
        });
      }
    } catch (err) {
      setStatusMsg({
        type: "error",
        text: "Something went wrong. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & STATS BANNER */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden pt-4 pb-12 text-white lg:pt-6 lg:pb-14">
          {/* Background image — must be direct child of the relative section */}
          <Image
            src="/contactus/front.jpg"
            alt="Pithal Crushing Plant"
            fill
            preload
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}

          {/* Industrial grid overlay */}
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-10 z-[2]" />
          {/* Corner accent */}
          <div className="pointer-events-none absolute right-0 top-0 h-[60%] w-[50%] rounded-bl-[60%] border-l border-secondary/25 border-b border-secondary/25 z-[3]" />

          <div className="relative z-10 w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 py-6 lg:py-8">
            <div className="max-w-3xl flex flex-col items-center lg:items-start text-center lg:text-left w-full mx-auto lg:mx-0">
              <HeroNavigation current="Contact Us" eyebrow="Contact Us" light />

              <h1 className="headline text-[clamp(2.35rem,5.4vw,4rem)] uppercase leading-[0.96] tracking-tight text-secondary text-center lg:text-left">
                LET&apos;S BUILD <br />
                <span className="text-primary">INDUSTRIAL SOLUTIONS</span>{" "}
                <span className="text-secondary">TOGETHER.</span>
              </h1>

              <span
                aria-hidden
                className="mt-6 block h-[2px] w-14 bg-secondary mx-auto lg:mx-0"
              />

              <p className="mt-6 max-w-xl text-sm md:text-[18px] lg:text-[20px] leading-relaxed text-slate-300 font-medium text-center lg:text-left mx-auto lg:mx-0">
                Partner with our engineering experts to design, build and
                deliver high-performance solutions that drive your operations
                forward.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center lg:justify-start">
                <Button
                  href="#consultation"
                  variant="primary"
                  className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5 w-full sm:w-auto"
                >
                  TALK TO OUR EXPERTS
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Button>
                <Button
                  href="#contact-info"
                  variant="outlineOrange"
                  className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5 text-white border-white/25 hover:bg-white hover:text-primary w-full sm:w-auto"
                >
                  VIEW CONTACT INFO
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>

            {/* Stats row below Hero */}
            <div className="mt-10 bg-white  border-white/10 text-white rounded-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.2)] relative z-20">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/10 text-secondary">
                      {i === 0 && <Building2 size={55} />}
                      {i === 1 && <Globe size={55} />}
                      {i === 2 && <Users size={55} />}
                      {i === 3 && <Headphones size={55} />}
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-primary leading-none">
                        {stat.value}
                      </h4>
                      <p className="text-xs font-black text-primary uppercase tracking-widest mt-1.5">
                        {stat.label}
                      </p>
                      <p className="text-xs md:text-sm text-black mt-0.5">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: CONTACT INFORMATION */}
        {/* ========================================================================= */}
        <section className="bg-slate-50 py-12 lg:py-16" id="contact-info">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-3 w-1.5 skew-x-[-28deg] bg-secondary"
                    />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  GET IN TOUCH
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-3 w-1.5 skew-x-[-28deg] bg-secondary"
                    />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                CONTACT INFORMATION
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary"
              />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We&apos;re here to help you with tailored industrial solutions.
                Reach out to our team through any of the following channels.
              </p>
            </div>

            {/* Grid of 4 Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInformation.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden flex flex-col bg-white border border-slate-200 p-6 rounded-xl hover:shadow-xl transition-all duration-500 hover:border-primary justify-between min-h-[220px]"
                  >
                    {/* Sliding Background */}
                    <div className="absolute inset-0 bg-[#092a5c]/95 backdrop-blur-sm -translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0 z-0" />

                    <div className="space-y-4 relative z-10">
                      {/* Top icon in orange outlined circle */}
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border border-secondary/20 shadow-sm text-secondary transition-colors duration-500 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                        <Icon size={55} />
                      </div>

                      <div>
                        <h3 className="text-sm font-black uppercase tracking-wider text-primary transition-colors duration-500 group-hover:text-white">
                          {info.channel}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-line font-medium transition-colors duration-500 group-hover:text-slate-300">
                          {info.content}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-100 relative z-10 transition-colors duration-500 group-hover:border-white/20">
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : "_self"
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-secondary group-hover:text-white transition-colors duration-500"
                      >
                        <div className=" items-center justify-center text-secondary transition-colors duration-500 group-hover:bg-secondary group-hover:text-white group-hover:border-secondary">
                          <Icon size={20} />
                        </div>
                        {info.linkText}
                        <ArrowRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: ENGINEERING CONSULTATION FORM */}
        {/* ========================================================================= */}
        <section className="bg-white py-12 lg:py-16" id="consultation">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
              {/* Left Column: Form */}
              <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-xl shadow-sm">
                <span className="text-xs font-black uppercase tracking-widest text-secondary block">
                  ENGINEERING CONSULTATION
                </span>
                <h2 className="headline text-[clamp(1.8rem,4vw,2.5rem)] font-black text-primary uppercase mt-2">
                  TELL US ABOUT YOUR REQUIREMENT
                </h2>
                <p className="text-xs md:text-sm text-slate-500 mt-2">
                  Share your project details and our engineering experts will
                  get back to you with the right solution.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 text-slate-400">
                          <Users size={16} />
                        </span>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">
                        Company Name *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 text-slate-400">
                          <Building2 size={16} />
                        </span>
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter company name"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 text-slate-400">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter email address"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 text-slate-400">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter phone number"
                          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">
                      Industry / Sector *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3.5 text-slate-400">
                        <Activity size={16} />
                      </span>
                      <select
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-secondary transition-colors appearance-none"
                      >
                        <option value="">Select your industry</option>
                        <option value="mining">Mining</option>
                        <option value="aggregates">Aggregates</option>
                        <option value="cement">Cement</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="construction">Construction</option>
                        <option value="recycling">Recycling</option>
                      </select>
                      <span className="absolute right-3 top-4 pointer-events-none text-slate-400">
                        <ChevronRight size={14} className="rotate-90" />
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">
                      Your Requirement / Project Details *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3.5 text-slate-400">
                        <FileText size={16} />
                      </span>
                      <textarea
                        name="requirement"
                        required
                        value={formData.requirement}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Describe your requirement, capacity, material type, expected output, or any specific challenges..."
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-xs md:text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {statusMsg && (
                    <div
                      className={cn(
                        "p-3.5 rounded-lg text-xs font-semibold border",
                        statusMsg.type === "success"
                          ? "bg-green-50 border-green-200 text-green-700"
                          : "bg-red-50 border-red-200 text-red-700",
                      )}
                    >
                      {statusMsg.text}
                    </div>
                  )}

                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-secondary text-white font-black uppercase text-xs tracking-widest px-8 py-4.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
                      <ArrowRight size={14} />
                    </button>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Lock size={14} className="text-secondary" />
                      <span>
                        Your information is secure and kept confidential.
                      </span>
                    </div>
                  </div>
                </form>
              </div>

              {/* Right Column: Why Pithal? */}
              <div className="flex flex-col justify-between py-2">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-secondary block">
                    WHY CONTACT PITHAL?
                  </span>
                  <h2 className="headline text-[clamp(1.8rem,4vw,2.5rem)] font-black text-primary uppercase mt-2">
                    ENGINEERING EXPERTISE YOU CAN RELY ON
                  </h2>

                  <div className="mt-8 space-y-4">
                    {consultationBenefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4.5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                          {i === 0 && <Layers size={50} />}
                          {i === 1 && <Settings size={50} />}
                          {i === 2 && <TrendingUp size={50} />}
                          {i === 3 && <Headphones size={50} />}
                          {i === 4 && <Globe size={50} />}
                        </div>
                        <div>
                          <h4 className="text-sm font-black uppercase text-primary leading-tight">
                            {benefit.title}
                          </h4>
                          <p className="mt-1 text-xs md:text-sm text-slate-500 leading-normal font-medium">
                            {benefit.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: STATE-OF-THE-ART MANUFACTURING FACILITY */}
        {/* ========================================================================= */}
        <section className="bg-slate-50 py-12 lg:py-16">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-5xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-[1.5px] w-6 bg-secondary" />
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  OUR STRENGTH
                </span>
                <span className="h-[1.5px] w-6 bg-secondary" />
              </div>
              <h2 className="whitespace-nowrap headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[6] text-primary">
                STATE-OF-THE-ART MANUFACTURING FACILITY
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary"
              />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Our advanced manufacturing infrastructure, skilled workforce and
                commitment to quality enable us to deliver high-performance
                equipment that exceeds global standards.
              </p>
            </div>

            {/*collage grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Left Column (large card) */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 min-h-[350px] lg:min-h-[500px] flex flex-col justify-end p-6 shadow-md">
                <Image
                  alt="Pithal Manufacturing Facility Building"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src="/contactus/manufacturingfcility.jpg"
                />

                {/* Bottom Left Label Banner */}
                <div className="relative z-20 bg-primary/95 text-white p-4.5 rounded-lg border border-white/5 max-w-md backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                      <Building2 size={40} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase text-white tracking-wide">
                        MANUFACTURING FACILITY
                      </h4>
                      <p className="mt-1 text-xs text-slate-300">
                        Advanced infrastructure built for precision and
                        performance.Advanced infrastructure built for precision
                        and performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "PRODUCTION WORKSHOP",
                    desc: "Precision machining and fabrication with world-class equipment.",
                    image: "/contactus/production.jpg",
                    icon: HardHat,
                  },
                  {
                    title: "ENGINEERING DEPARTMENT",
                    desc: "Expert engineers delivering innovative and customized solutions.",
                    image: "/contactus/engineeringdep.jpg",
                    icon: Settings,
                  },
                  {
                    title: "PRODUCTION FLOOR",
                    desc: "Efficient processes ensuring consistent quality and timely delivery.",
                    image: "/contactus/productionfloor.jpg",
                    icon: Construction,
                  },
                  {
                    title: "QUALITY ASSURANCE",
                    desc: "Rigorous testing and inspection at every stage to ensure reliability.",
                    image: "/contactus/qualityassuarance.jpg",
                    icon: Shield,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl min-h-[240px]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />

                      {/* dark overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Bottom Card */}
                      <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-primary/95 backdrop-blur-md px-4 py-3">
                        <div className="flex items-start gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-secondary/30 bg-secondary/10">
                            <Icon className="h-6 w-6 text-secondary" />
                          </div>

                          <div>
                            <h3 className="text-sm font-black uppercase tracking-wide text-white">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-xs leading-relaxed text-slate-300">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: DEPARTMENT CONTACT DIRECTORY */}
        {/* ========================================================================= */}
        <section className="bg-[#f8f9fc] py-8 lg:py-15" id="directory">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
              <div className="flex items-center justify-center mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-secondary">
                  OUR TEAM. YOUR SUPPORT.
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4vw,2.75rem)] font-black leading-[1.2] text-primary uppercase">
                DEPARTMENT CONTACT DIRECTORY
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base text-slate-500">
                Connect with the right team for your specific needs. Our experts
                are ready to assist you.
              </p>
            </div>

            {/* Grid of 6 Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1520px] mx-auto">
              {teamDirectory.map((member, i) => {
                const DIcon = member.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  >
                    {/* Top Row: Icon + Department */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-secondary shrink-0">
                        <DIcon size={26} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-black tracking-wide text-primary uppercase leading-none">
                          {member.department}
                        </h3>
                        {/* Small orange underline */}
                        <div className="h-[3px] w-12 bg-secondary mt-2"></div>
                      </div>
                    </div>

                    {/* Bottom Row: Profile details */}
                    <div className="flex gap-4">
                      {/* Profile Image */}
                      <div className="h-20 w-20 rounded-full bg-slate-100 overflow-hidden shrink-0">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-slate-400 border border-slate-200 rounded-full">
                            <Users size={32} />
                          </div>
                        )}
                      </div>

                      {/* Name, Role & Contact Info */}
                      <div className="flex flex-col justify-center">
                        <h4 className="text-[17px] font-bold text-primary leading-tight">
                          {member.name}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1 mb-3">
                          {member.role}
                        </p>

                        {/* Contact links */}
                        <div className="space-y-2">
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-2.5 text-[13px] font-medium text-slate-600 hover:text-secondary transition-colors"
                          >
                            <Mail size={16} className="text-secondary" />
                            <span>{member.email}</span>
                          </a>
                          <a
                            href={`tel:${member.phone.replace(/\s+/g, "")}`}
                            className="flex items-center gap-2.5 text-[13px] font-medium text-slate-600 hover:text-secondary transition-colors"
                          >
                            <Phone size={16} className="text-secondary" />
                            <span>{member.phone}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom commitments strip */}
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-sm text-slate-600 max-w-4xl mx-auto">
              <div className="flex items-center gap-2.5">
                <Shield size={18} className="text-secondary" />
                <span>
                  We ensure your query reaches the right expert for a quick and
                  effective response.
                </span>
              </div>

              {/* Vertical divider (hidden on mobile) */}
              <span className="hidden md:block h-5 w-[1px] bg-slate-300"></span>

              <div className="flex items-center gap-2.5">
                <Clock size={18} className="text-secondary" />
                <span>
                  <span className="font-semibold text-primary">
                    Average Response Time:
                  </span>{" "}
                  Within 24 Hours
                </span>
              </div>
            </div>
          </Container>
        </section>
        {/* ========================================================================= */}
        {/* SECTION 6: SUPPORTING INDUSTRIES & WORLDWIDE REACH (HIDDEN) */}
        {/* ========================================================================= 
        <section className="relative overflow-hidden bg-primary-dark py-8 lg:py-12" id="worldwide-reach">
          ... (content hidden) ...
        </section>
        */}

        {/* ========================================================================= */}
        {/* SECTION 7: SOLUTIONS TAILORED TO YOUR INDUSTRY NEEDS */}
        {/* ========================================================================= */}
        <section className="bg-[#f8f9fc] py-16 lg:py-6" id="industry-needs">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
              <span className="text-sm font-bold uppercase tracking-wider text-secondary block mb-4">
                WHY CLIENTS CONTACT PITHAL
              </span>
              <h2 className="headline text-[clamp(2rem,4vw,2.75rem)] font-black leading-[1.2] text-primary uppercase">
                SOLUTIONS TAILORED TO YOUR INDUSTRY NEEDS
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base text-slate-500">
                From concept to commissioning, clients connect with us for
                engineering solutions <br className="hidden sm:block" /> that
                drive performance, efficiency and long-term value.
              </p>
            </div>

            {/* Grid of 6 cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1520px] mx-auto">
              {industryNeeds.map((need, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-white p-8 rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(3,27,64,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Sliding Accent Background */}
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-[#fa5902] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  {/* Icon circle */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 border border-slate-100/80 mb-6 shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <div className="text-secondary group-hover:text-white transition-colors duration-500 [&>svg]:!w-10 [&>svg]:!h-10">
                      {renderIndustryNeedIcon(need.icon)}
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold uppercase tracking-wide text-primary transition-colors duration-300 group-hover:text-secondary">
                    {need.title}
                  </h3>
                  <span className="block h-[2px] w-8 bg-secondary my-4" />
                  <p className="text-sm text-slate-500 leading-relaxed px-2 font-medium">
                    {need.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom banner block */}
            <div className="mt-12 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-6 md:p-8 flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-12 max-w-5xl mx-auto">
              <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
                <Handshake
                  size={48}
                  className="text-secondary shrink-0"
                  strokeWidth={1}
                />
                <div className="text-[13px] md:text-sm text-slate-600 text-left">
                  <span className="font-bold text-primary block">
                    Our commitment doesn't end with the sale.
                  </span>
                  We partner with you for long-term success.
                </div>
              </div>

              {/* Vertical Divider */}
              <span className="hidden md:block h-12 w-[1px] bg-slate-200 shrink-0"></span>

              <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
                <Calendar
                  size={48}
                  className="text-secondary shrink-0"
                  strokeWidth={1}
                />
                <div className="text-[13px] md:text-sm text-slate-600 text-left">
                  From your first enquiry to long-term support,
                  <span className="font-bold text-primary block">
                    we're with you at every step.
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: FROM INQUIRY TO INDUSTRIAL IMPACT (OUR PROCESS) */}
        {/* ========================================================================= */}
        <section className="bg-[#f8f9fc] py-16 lg:py-6" id="process">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="text-sm font-bold uppercase tracking-wider text-secondary block mb-3">
                OUR PROCESS
              </span>
              <div className="h-[2px] w-12 bg-secondary mx-auto mb-6"></div>
              <h2 className="headline text-[clamp(1.75rem,3.5vw,2.75rem)] font-black leading-[1.2] text-primary uppercase mb-4">
                FROM INQUIRY TO INDUSTRIAL IMPACT
              </h2>
              <p className="mx-auto max-w-2xl text-center text-sm md:text-base text-slate-500">
                We follow a structured and transparent process to ensure you
                receive
                <br className="hidden sm:block" /> the right solution with
                efficiency, accuracy and reliability.
              </p>
            </div>

            {/* 5 Step Timeline Flow */}
            <div className="relative max-w-[1520px] mx-auto mb-10">
              {/* Horizontal Dashed Line (Desktop only) */}
              <div className="hidden lg:block absolute top-[64px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-slate-300 z-0"></div>

              <div className="grid gap-12 lg:gap-4 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
                {processSteps.map((step, i) => {
                  const SIcon = step.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center relative group cursor-pointer"
                    >
                      {/* Main Circle Icon Box */}
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white mb-5 shrink-0 z-10 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(250,89,2,0.12)] transition-all duration-500">
                        {/* Full gray border */}
                        <div className="absolute inset-0 rounded-full border border-slate-200"></div>
                        {/* Partial Orange Arc (Top-Left) - Rotates on hover */}
                        <div className="absolute inset-[-1px] rounded-full border-[3px] border-transparent border-t-secondary border-l-secondary -rotate-[30deg] group-hover:rotate-[150deg] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"></div>

                        {/* Icon - Scales and changes color to secondary orange */}
                        <SIcon
                          size={56}
                          strokeWidth={1}
                          className="text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-500"
                        />
                      </div>

                      {/* Step Number Badge */}
                      <div className="bg-secondary text-white text-[13px] font-black px-4 py-1 rounded-full shadow-md -mt-10 relative z-20 mb-5 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                        {step.step || `0${i + 1}`}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-[15px] font-black uppercase tracking-wide text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed text-slate-500 px-2 lg:px-4 font-medium">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom commitments strip */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] max-w-[1520px] mx-auto">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center lg:divide-x lg:divide-slate-200">
                {processCommitments.map((item, i) => {
                  const PIcon = item.icon;
                  return (
                    <div
                      key={i}
                      className={`flex gap-4 items-center ${i !== 0 ? "lg:pl-8" : ""}`}
                    >
                      {/* Subtle gray circle with dark primary icon */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-primary">
                        <PIcon size={24} strokeWidth={1.5} />
                      </div>
                      <div className="text-left">
                        <h4 className="text-[12px] lg:text-[13px] font-black uppercase text-primary tracking-wide leading-tight mb-1">
                          {item.label}
                        </h4>
                        <p className="text-[12px] text-slate-500 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: FAQs ACCORDION */}
        {/* ========================================================================= */}
        <section className="bg-white py-12 lg:py-16" id="faq">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-secondary">
                  FAQS
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary"
              />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Find answers to common questions about our solutions, services
                and support. Can&apos;t find what you&apos;re looking for?
                Contact our team.
              </p>
            </div>

            {/* Accordion elements list */}
            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              {faqData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                const FIcon = faq.icon;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors"
                  >
                    {/* Header bar button */}
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        {/* Toggle Circle Icon */}
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-secondary shrink-0">
                          {isOpen ? (
                            <Minus size={14} className="stroke-[3.5]" />
                          ) : (
                            <Plus size={14} className="stroke-[3.5]" />
                          )}
                        </div>
                        <span className="text-sm md:text-base font-black text-primary uppercase">
                          {faq.question}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <FIcon size={11} className="text-secondary" />
                          {faq.tag}
                        </span>
                        <ChevronRight
                          size={16}
                          className={cn(
                            "text-slate-400 transition-transform",
                            isOpen ? "rotate-90" : "",
                          )}
                        />
                      </div>
                    </button>

                    {/* Answer content box */}
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="p-5.5 pt-0 border-t border-slate-100 bg-slate-50/50 flex gap-4.5 items-start">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-xs mt-1">
                            <Headphones size={16} />
                          </div>
                          <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* FAQ Footer block */}
            <div className="max-w-[1520px] mx-auto bg-[#f8f9fc] border border-slate-100 rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-sm">
              {/* Left Section */}
              <div className="flex items-center gap-5 lg:max-w-[40%]">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md">
                  <Headphones size={30} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[17px] font-black uppercase text-primary tracking-wide mb-1">
                    STILL HAVE QUESTIONS?
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed pr-4">
                    Our team is here to help you with any specific requirements
                    or technical queries.
                  </p>
                </div>
              </div>

              {/* Vertical Divider (Desktop) */}
              <div className="hidden lg:block w-[1px] h-16 bg-slate-200 shrink-0"></div>

              {/* Right Section (Contact Links) */}
              <div className="flex flex-col sm:flex-row w-full lg:w-auto flex-1 justify-between gap-6 lg:gap-4">
                {/* Call Us */}
                <a
                  href="tel:+912812387373"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-secondary group-hover:border-secondary transition-colors">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black uppercase text-primary tracking-wide">
                      CALL US
                    </h4>
                    <p className="text-[13px] text-slate-500 mt-0.5">
                      +91 281 238 7373
                    </p>
                  </div>
                </a>

                {/* Email Us */}
                <a
                  href="mailto:info@pithalindia.com"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-secondary group-hover:border-secondary transition-colors">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black uppercase text-primary tracking-wide">
                      EMAIL US
                    </h4>
                    <p className="text-[13px] text-slate-500 mt-0.5">
                      info@pithalindia.com
                    </p>
                  </div>
                </a>

                {/* Schedule Meeting */}
                <a
                  href="mailto:info@pithalindia.com?subject=Consultation"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-secondary group-hover:border-secondary transition-colors">
                    <Calendar size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black uppercase text-primary tracking-wide">
                      SCHEDULE MEETING
                    </h4>
                    <p className="text-[13px] text-slate-500 mt-0.5">
                      Book a consultation
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: VISIT OUR FACILITY FIRSTHAND */}
        {/* ========================================================================= */}
        <section className="bg-[#f8f9fc] py-16 lg:py-24" id="facility">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-12">
              <span className="text-sm font-bold uppercase tracking-wider text-secondary block mb-4">
                VISIT OUR FACILITY
              </span>
              <h2 className="headline text-[clamp(1.75rem,3.5vw,2.75rem)] font-black leading-[1.2] text-primary uppercase mb-4">
                EXPERIENCE OUR MANUFACTURING EXCELLENCE FIRSTHAND.
              </h2>
              <p className="mx-auto max-w-2xl text-center text-sm md:text-base text-slate-500">
                We welcome you to visit our state-of-the-art manufacturing
                facility and see our advanced engineering, quality processes and
                world-class infrastructure in action.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
              {/* Left Visual Column */}
              <div className="flex flex-col gap-4">
                {/* Large main facility exterior photo */}
                <div className="relative aspect-[16/9] lg:aspect-[2/1.05] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-200">
                  <img
                    alt="Pithal Anand Plant Building exterior"
                    className="w-full h-full object-cover"
                    src="/contactus/manufacturingfcility.jpg"
                  />
                </div>

                {/* 4 Smaller Floor Images Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    {
                      label: "Advanced Manufacturing",
                      image: "/contactus/advancemanufacturing.jpg",
                    },
                    {
                      label: "Precision Engineering",
                      image: "/contactus/precision engineering.jpg",
                    },
                    {
                      label: "Quality Production",
                      image: "/contactus/quality production.jpg",
                    },
                    {
                      label: "Engineering Excellence",
                      image: "/contactus/engineering excellence.jpg",
                    },
                  ].map((sub, i) => (
                    <div
                      key={i}
                      className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-300"
                    >
                      <img
                        alt={sub.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={sub.image}
                      />
                      {/* Bottom Gradient for Text Readability */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/90 to-transparent z-10" />
                      <div className="absolute bottom-2 inset-x-2 z-20 flex items-center justify-center gap-1.5 text-white">
                        <Settings size={12} className="shrink-0" />
                        <span className="text-[10px] md:text-[11px] font-bold uppercase text-center leading-tight">
                          {sub.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Address Card with Map */}
              <div className="bg-[#0b172a] text-white p-8 rounded-xl flex flex-col justify-between shadow-xl">
                <div>
                  <h3 className="text-sm font-bold uppercase text-secondary tracking-widest text-center mb-6">
                    OUR FACILITY
                  </h3>

                  <div className="space-y-5">
                    {/* Address */}
                    <div className="flex gap-4 items-start border-b border-white/10 pb-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-secondary">
                        <MapPin size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Address
                        </span>
                        <p className="text-[13px] text-slate-200 leading-relaxed font-medium">
                          <strong className="font-bold text-white">
                            Pithal Machinery Private Limited
                          </strong>
                          <br />
                          Building No. 1, First Floor,
                          <br />
                          National Highway 27, Sukher Road, Village Sukher,
                          <br />
                          Tehsil Badgaon, District Udaipur, Rajasthan – 313011,
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 items-start border-b border-white/10 pb-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-secondary">
                        <Phone size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Phone
                        </span>
                        <a
                          href="tel:+912812387373"
                          className="text-[13px] text-white font-medium hover:text-secondary transition-colors"
                        >
                          +91 281 238 7373
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 items-start border-b border-white/10 pb-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-secondary">
                        <Mail size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Email
                        </span>
                        <a
                          href="mailto:info@pithalindia.com"
                          className="text-[13px] text-white font-medium hover:text-secondary transition-colors"
                        >
                          info@pithalindia.com
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex gap-4 items-start">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-secondary">
                        <Clock size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Working Hours
                        </span>
                        <p className="text-[13px] text-white font-medium leading-relaxed">
                          Monday - Saturday
                          <br />
                          09:00 AM to 06:00 PM (IST)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Map Mimic */}
                <div className="mt-8 relative h-48 w-full rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://maps.google.com/maps?q=TASS,%20National%20Highway%2027,%20Sukher%20Rd,%20Rajasthan%20313011&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Bottom Strip: See. Experience. Trust. */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-8 lg:gap-6 items-start lg:items-center">
              {/* Main Title Col */}
              <div className="flex gap-4">
                <Users
                  size={32}
                  className="text-secondary shrink-0 mt-1"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="text-base font-black uppercase tracking-wide text-primary mb-2">
                    SEE. EXPERIENCE. TRUST.
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">
                    Discover how our advanced infrastructure, skilled team and
                    commitment to quality deliver reliable solutions to clients
                    worldwide.
                  </p>
                </div>
              </div>

              {/* Feature 1 */}
              <div className="flex gap-3">
                <ShieldCheck
                  size={24}
                  className="text-primary shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="text-[13px] font-bold text-primary mb-1">
                    World-Class Infrastructure
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    Modern manufacturing facility with advanced machinery and
                    technology.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-3">
                <Handshake
                  size={24}
                  className="text-primary shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="text-[13px] font-bold text-primary mb-1">
                    Expert Team
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    Experienced engineers and technicians dedicated to quality &
                    innovation.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-3">
                <Award
                  size={24}
                  className="text-secondary shrink-0"
                  strokeWidth={1.5}
                />
                <div>
                  <h4 className="text-[13px] font-bold text-primary mb-1">
                    Quality Assured
                  </h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    Rigorous quality control at every stage of manufacturing.
                  </p>
                </div>
              </div>

              {/* Plan Visit Card */}
              <div className="bg-[#0b172a] rounded-xl p-5 flex flex-col justify-between h-full shadow-lg">
                <div className="flex gap-3 mb-4">
                  <Calendar
                    size={24}
                    className="text-secondary shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="text-[13px] font-bold text-white uppercase tracking-wider mb-1">
                      Plan Your Visit
                    </h4>
                    <p className="text-[12px] text-slate-300 leading-relaxed">
                      Schedule a visit to our facility and meet our engineering
                      team.
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:info@pithalindia.com?subject=Schedule%20a%20Visit"
                  className="bg-secondary hover:bg-orange-600 text-white text-[12px] font-bold uppercase tracking-wider py-2.5 px-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  SCHEDULE A VISIT <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: FINAL CTA BANNER */}
        {/* ========================================================================= */}
        <section className="bg-[#f8f9fc] py-16 lg:pb-24">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg min-h-[280px] lg:min-h-[340px] flex flex-col justify-center border border-slate-200">
              {/* Right Side Background Image */}
              <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0">
                <img
                  src="/contactus/2.jpg"
                  alt="Pithal Crushing Plant Officer"
                  className="w-full h-full object-cover object-top lg:object-right"
                />
              </div>

              {/* Gradient Overlay to blend image with left side (fades only the transition area on all screen sizes) */}
              <div className="absolute inset-0 bg-gradient-to-r from-white from-[35%] via-white/80 via-[50%] to-transparent to-[75%] z-10 w-full" />

              {/* Decorative Dots Pattern */}
              <div
                className="hidden lg:block absolute top-12 left-40 z-10 w-48 h-12 opacity-35 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#94a3b8 2.5px, transparent 2.5px)",
                  backgroundSize: "14px 14px",
                }}
              ></div>

              {/* Content Box */}
              <div className="relative z-20 p-6 md:p-8 lg:p-10 max-w-3xl text-left">
                {/* Orange Icon Badge */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-secondary mb-6">
                  <MessageSquare
                    size={28}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                </div>

                <h2 className="headline text-[clamp(2rem,4vw,3.5rem)] font-black text-primary uppercase leading-[1.05] tracking-tight">
                  LET'S DISCUSS YOUR <br className="hidden sm:block" />
                  <span className="text-secondary">
                    INDUSTRIAL REQUIREMENTS.
                  </span>
                </h2>

                <p className="mt-5 text-sm md:text-[15px] text-slate-500 leading-relaxed font-medium max-w-xl">
                  Our experts are ready to understand your needs and provide the
                  right solutions for your business.
                </p>

                {/* Buttons Row */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  {/* Call Now Button */}
                  <a
                    href="tel:+919887537129"
                    className="flex items-center justify-center gap-2.5 bg-[#0b172a] hover:bg-[#1e293b] text-white text-[12px] font-bold tracking-wide px-6 py-3.5 rounded-md transition-colors"
                  >
                    <div className="flex items-center justify-center h-5 w-5 rounded-full border border-white/40">
                      <Phone size={11} strokeWidth={2} />
                    </div>
                    CALL NOW
                  </a>

                  {/* Send Inquiry Button */}
                  <a
                    href="#contact1"
                    className="flex items-center justify-center gap-2.5 bg-white border border-secondary text-secondary hover:bg-orange-50 text-[12px] font-bold tracking-wide px-6 py-3.5 rounded-md transition-colors shadow-sm"
                  >
                    <Mail size={16} strokeWidth={2} />
                    SEND INQUIRY
                  </a>

                  {/* Schedule Consultation Button */}
                  <a
                    href="mailto:info@pithalmachine.com?subject=Consultation"
                    className="flex items-center justify-center gap-2.5 bg-white border border-[#0b172a] text-[#0b172a] hover:bg-slate-50 text-[12px] font-bold tracking-wide px-6 py-3.5 rounded-md transition-colors shadow-sm"
                  >
                    <Calendar size={16} strokeWidth={2} />
                    SCHEDULE CONSULTATION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
