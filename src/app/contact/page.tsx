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
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// DATA CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  { value: "1500+", label: "INSTALLATIONS", desc: "Proven performance across industries." },
  { value: "35+", label: "COUNTRIES", desc: "Global presence. Trusted worldwide." },
  { value: "Engineering Experts", label: "PROFESSIONALS", desc: "Experienced professionals delivering & innovating." },
  { value: "Fast Response Support", label: "24/7 HELPLINE", desc: "Quick turnaround. Always here to help." },
];

const contactInformation = [
  {
    channel: "HEAD OFFICE",
    icon: MapPin,
    content: "Pithal Machinery Private Limited\nGondal Road, Plot No. 68,\nVillage Kothariya,\nRajkot - 360022, Gujarat, India",
    linkText: "View on Map",
    href: "https://maps.google.com/?q=Pithal+Machinery+Rajkot"
  },
  {
    channel: "PHONE NUMBER",
    icon: Phone,
    content: "Main Line: +91 281 238 7381\nMobile / WhatsApp: +91 99099 25667",
    linkText: "Call Us Now",
    href: "tel:+912812387381"
  },
  {
    channel: "EMAIL ADDRESS",
    icon: Mail,
    content: "General Enquiries: info@pithalindia.com\nSales Enquiries: sales@pithalindia.com",
    linkText: "Send an Email",
    href: "mailto:info@pithalindia.com"
  },
  {
    channel: "EXPORT ENQUIRIES",
    icon: Globe,
    content: "Global Sales: exports@pithalindia.com\nInternational Support: +91 281 238 7381",
    linkText: "Explore Global Network",
    href: "/global-presence"
  },
  {
    channel: "WORKING HOURS",
    icon: Clock,
    content: "Monday – Saturday: 09:00 AM – 06:00 PM (IST)\nSunday: Closed",
    linkText: "Schedule a Meeting",
    href: "mailto:info@pithalindia.com?subject=Schedule%20a%20Meeting"
  }
];

const consultationBenefits = [
  { title: "Plant Planning", desc: "Customized plant layouts and process solutions designed for maximum efficiency." },
  { title: "Machine Selection", desc: "Right equipment selection to match your material, capacity and operational goals." },
  { title: "Capacity Optimization", desc: "Improve productivity, reduce downtime and maximize return on investment." },
  { title: "Engineering Support", desc: "End-to-end technical support from concept to commissioning and beyond." },
  { title: "Export Assistance", desc: "Global delivery support with documentation, logistics and regulatory assistance." }
];

const teamDirectory = [
  {
    department: "SALES",
    icon: Handshake,
    name: "Mr. Ronak Soni",
    role: "Sales Manager",
    email: "sales@pithalindia.com",
    phone: "+91 281 238 7381",
    image: "" // Placeholder
  },
  {
    department: "TECHNICAL SUPPORT",
    icon: Headphones,
    name: "Mr. Dhaval Patel",
    role: "Senior Engineer – Support",
    email: "support@pithalindia.com",
    phone: "+91 281 238 7382",
    image: "" // Placeholder
  },
  {
    department: "PROJECTS",
    icon: HardHat,
    name: "Mr. Hardik Mehta",
    role: "Project Manager",
    email: "projects@pithalindia.com",
    phone: "+91 281 238 7383",
    image: "" // Placeholder
  },
  {
    department: "EXPORTS",
    icon: Globe,
    name: "Mr. Viral Shah",
    role: "Export Manager",
    email: "exports@pithalindia.com",
    phone: "+91 281 238 7384",
    image: "" // Placeholder
  },
  {
    department: "CAREERS",
    icon: Users,
    name: "Ms. Krupa Joshi",
    role: "HR Manager",
    email: "careers@pithalindia.com",
    phone: "+91 281 238 7385",
    image: "" // Placeholder
  },
  {
    department: "GENERAL ENQUIRIES",
    icon: Mail,
    name: "Mr. Jaydeep Vyas",
    role: "Admin Executive",
    email: "info@pithalindia.com",
    phone: "+91 281 238 7380",
    image: "" // Placeholder
  }
];

const processSteps = [
  { step: "01", title: "INQUIRY", desc: "Share your requirements through our contact form, email or call. Our team acknowledges your inquiry promptly.", icon: FileText },
  { step: "02", title: "CONSULTATION", desc: "Our experts understand your needs in detail and discuss the best possible solutions tailored to your operations.", icon: Users },
  { step: "03", title: "ENGINEERING REVIEW", desc: "We analyze technical requirements, create concepts and evaluate the most efficient and cost-effective approach.", icon: Settings },
  { step: "04", title: "PROPOSAL", desc: "You receive a detailed proposal including technical specifications, scope of supply, timelines and commercials for your consideration.", icon: FileCheck },
  { step: "05", title: "EXECUTION SUPPORT", desc: "Once approved, we ensure seamless project execution, installation support and long-term partnership for continuous success.", icon: Construction }
];

const processCommitments = [
  { label: "TRANSPARENT PROCESS", desc: "Clear communication at every step.", icon: Shield },
  { label: "TIMELY RESPONSE", desc: "Quick turnaround and on-time delivery.", icon: Clock },
  { label: "EXPERT GUIDANCE", desc: "Industry experts guiding you from start to finish.", icon: Users },
  { label: "COMMITTED TO YOUR SUCCESS", desc: "Your performance is our long-term priority.", icon: Award }
];

const industryNeeds = [
  { title: "CUSTOM PLANT DESIGN", desc: "Tailor-made plant layouts and engineering solutions built around your material, capacity and site requirements.", icon: "factory" },
  { title: "CRUSHER SELECTION", desc: "Expert guidance to help you choose the right equipment for maximum productivity and cost efficiency.", icon: "crusher" },
  { title: "OPERATIONAL OPTIMIZATION", desc: "Improve output, reduce downtime and lower operational costs with proven optimization strategies and solutions.", icon: "charts" },
  { title: "PROJECT CONSULTATION", desc: "End-to-end project consulting including feasibility studies, process planning and engineering support.", icon: "consult" },
  { title: "EXPORT REQUIREMENTS", desc: "Assistance with export documentation, logistics coordination and global compliance to ensure smooth deliveries.", icon: "export" },
  { title: "AFTER-SALES SUPPORT", desc: "Reliable after-sales service, spare parts support and maintenance to keep your operations running smoothly.", icon: "support" }
];

const globalReachPoints = [
  { value: "35+", label: "COUNTRIES", desc: "Serving clients across the globe with proven solutions." },
  { value: "FAST RESPONSE", label: "SUPPORT", desc: "Dedicated support teams ensuring quick response and resolution." },
  { value: "RELIABLE SUPPORT", label: "STABILITY", desc: "After-sales support and spare availability you can rely on." },
  { value: "EXPORT EXPERTISE", label: "LOGISTICS", desc: "End-to-end export assistance and documentation support." }
];

const globalPresenceRegions = [
  { name: "EUROPE", countries: "Countries: 8+", desc: "Strong presence in key European markets with reliable partners." },
  { name: "MIDDLE EAST", countries: "Countries: 10+", desc: "Serving the core industries with advanced crushing solutions." },
  { name: "ASIA", countries: "Countries: 12+", desc: "Expanding rapidly across emerging and industrial economies." },
  { name: "AFRICA", countries: "Countries: 12+", desc: "Empowering mining and construction industries across Africa." },
  { name: "SOUTH AMERICA", countries: "Countries: 6+", desc: "Delivering performance and reliability across growing markets." },
  { name: "GLOBAL REACH", countries: "35+ Countries", desc: "A global network built on trust, quality and expertise." }
];

const faqData = [
  {
    question: "How quickly do you respond to inquiries?",
    tag: "FAST RESPONSE",
    icon: Clock,
    answer: "We understand the value of time. Our team typically responds to all inquiries within 24 hours. For urgent requirements, you can call us directly for immediate assistance from our engineering experts."
  },
  {
    question: "Can you support international projects?",
    tag: "GLOBAL SUPPORT",
    icon: Globe,
    answer: "Yes, we support installations in over 35+ countries. Our team handles complete export logistics, customs compliance, and coordinates with certified local partners for on-site commissioning and service."
  },
  {
    question: "Do you offer plant design consultation?",
    tag: "ENGINEERING EXPERTISE",
    icon: FileText,
    answer: "Absolutely. Our expert design engineers use advanced 3D CAD modeling software to simulate materials flows and topography, ensuring your plant layout is optimized for efficiency and future scalability."
  },
  {
    question: "Can you customize machines as per our requirements?",
    tag: "CUSTOM SOLUTIONS",
    icon: Settings,
    answer: "We specialize in tailor-made configurations. Whether it's adjusted crusher dimensions, customized structural mounts, or specific conveyor configurations, we design around your exact capacity and rock hardness constraints."
  },
  {
    question: "Do you provide installation and commissioning support?",
    tag: "END-TO-END SUPPORT",
    icon: Wrench,
    answer: "Yes. Our senior field engineers travel globally to supervise physical assembly, align gears, test electrical subsystems, and verify target output before handing over operations to your crew."
  }
];

function renderIndustryNeedIcon(icon: string) {
  switch (icon) {
    case "factory":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
          <path d="M4 16h16" />
          <rect x="2" y="9" width="20" height="4" rx="1" />
          <path d="M9 22V12h6v10" />
        </svg>
      );
    case "crusher":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "charts":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <path d="M3 3v18h18" />
          <path d="m18.7 8-5.1 5.2-2.8-2.7-4.8 4.8" />
        </svg>
      );
    case "consult":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "export":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "support":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
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
    requirement: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.fullName}. Your inquiry has been logged successfully!`);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      industry: "",
      requirement: ""
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-800">

        {/* ========================================================================= */}
        {/* SECTION 1: HERO & STATS BANNER */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white pt-4 pb-12 text-primary lg:pt-6 lg:pb-14">
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-30" />
          <div className="pointer-events-none absolute right-0 top-0 h-[60%] w-[50%] rounded-bl-[60%] border-l border-secondary/20 border-b border-secondary/20" />
          <Container className="relative z-10">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-xs font-medium text-primary/70">
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight size={10} />
              <span className="text-secondary">Contact Us</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column Text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1.5px] w-6 bg-secondary" />
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-secondary">
                    CONTACT US
                  </span>
                </div>
                
                <h1 className="headline text-[clamp(2.35rem,5.4vw,4rem)] uppercase leading-[0.96] tracking-tight text-primary">
                  LET&apos;S BUILD <br />
                  INDUSTRIAL SOLUTIONS <span className="text-secondary">TOGETHER.</span>
                </h1>
                
                <span aria-hidden className="mt-6 block h-[2px] w-14 bg-secondary" />

                <p className="mt-6 max-w-xl text-sm md:text-[18px] lg:text-[20px] leading-relaxed text-primary font-medium">
                  Partner with our engineering experts to design, build and deliver high-performance solutions that drive your operations forward.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="#consultation" variant="primary" className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5">
                    TALK TO OUR EXPERTS
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Button>
                </div>
              </div>

              {/* Right Column Photo */}
              <div className="relative min-h-[300px] w-full overflow-hidden rounded-bl-[5rem] rounded-tl-[1.5rem] bg-slate-100 lg:min-h-[390px] border border-slate-200 shadow-md">
                <Image
                  alt="Pithal Engineering Team"
                  className="object-cover object-center"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  src="/images/contact/crushing-plant-contact.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
              </div>
            </div>

            {/* Stats row below Hero */}
            <div className="mt-10 bg-white text-slate-800 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(3,27,64,0.06)] relative z-20">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4.5 group">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-200/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] text-primary">
                      {i === 0 && <Building2 size={18} className="text-secondary" />}
                      {i === 1 && <Globe size={18} className="text-secondary" />}
                      {i === 2 && <Users size={18} className="text-secondary" />}
                      {i === 3 && <Headphones size={18} className="text-secondary" />}
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-black text-primary leading-none">{stat.value}</h4>
                      <p className="text-xs font-black text-secondary uppercase tracking-widest mt-1.5">{stat.label}</p>
                      <p className="text-xs md:text-sm text-slate-500 mt-0.5">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
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
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  GET IN TOUCH
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                CONTACT INFORMATION
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We&apos;re here to help you with tailored industrial solutions. Reach out to our team through any of the following channels.
              </p>
            </div>

            {/* Grid of 5 Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {contactInformation.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="group relative flex flex-col bg-white border border-slate-200 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:border-slate-300 justify-between min-h-[220px]">
                    <div className="space-y-4">
                      {/* Top icon in orange outlined circle */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-secondary/20 shadow-sm text-secondary">
                        <Icon size={20} />
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-wider text-primary">
                          {info.channel}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                          {info.content}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 pt-3 border-t border-slate-100">
                      <a href={info.href} target={info.href.startsWith("http") ? "_blank" : "_self"} className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                        {info.linkText}
                        <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
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
              <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl shadow-sm">
                <span className="text-xs font-black uppercase tracking-widest text-secondary block">
                  ENGINEERING CONSULTATION
                </span>
                <h2 className="headline text-[clamp(1.8rem,4vw,2.5rem)] font-black text-primary uppercase mt-2">
                  TELL US ABOUT YOUR REQUIREMENT
                </h2>
                <p className="text-xs md:text-sm text-slate-500 mt-2">
                  Share your project details and our engineering experts will get back to you with the right solution.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">Full Name *</label>
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
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">Company Name *</label>
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
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">Email Address *</label>
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
                      <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">Phone Number *</label>
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
                    <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">Industry / Sector *</label>
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
                    <label className="text-xs font-bold text-slate-700 uppercase block mb-1.5">Your Requirement / Project Details *</label>
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

                  <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button type="submit" className="bg-secondary text-white font-black uppercase text-xs tracking-widest px-8 py-4.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary transition-colors duration-300">
                      SUBMIT ENQUIRY
                      <ArrowRight size={14} />
                    </button>
                    <div className="flex items-center gap-2 text-slate-400 text-xs">
                      <Lock size={14} className="text-secondary" />
                      <span>Your information is secure and kept confidential.</span>
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
                      <div key={i} className="flex gap-4 p-4.5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                          {i === 0 && <Layers size={18} />}
                          {i === 1 && <Settings size={18} />}
                          {i === 2 && <TrendingUp size={18} />}
                          {i === 3 && <Headphones size={18} />}
                          {i === 4 && <Globe size={18} />}
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
            <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-[1.5px] w-6 bg-secondary" />
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  OUR STRENGTH
                </span>
                <span className="h-[1.5px] w-6 bg-secondary" />
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                STATE-OF-THE-ART MANUFACTURING FACILITY
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Our advanced manufacturing infrastructure, skilled workforce and commitment to quality enable us to deliver high-performance equipment that exceeds global standards.
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
                  src="/images/about/factory-hero.png"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 z-10" />
                
                {/* Bottom Left Label Banner */}
                <div className="relative z-20 bg-primary/95 text-white p-4.5 rounded-lg border border-white/5 max-w-md backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase text-white tracking-wide">
                        MANUFACTURING FACILITY
                      </h4>
                      <p className="mt-1 text-xs text-slate-300">
                        Advanced infrastructure built for precision and performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (4 small cards in 2x2 grid) */}
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { title: "PRODUCTION WORKSHOP", desc: "Precision machining and fabrication with world-class equipment.", image: "/images/about/factory-floor.png" },
                  { title: "ENGINEERING DEPARTMENT", desc: "Expert engineers delivering innovative and customized solutions.", image: "/images/about/manufacturing-exelilence-1.png" },
                  { title: "PRODUCTION FLOOR", desc: "Efficient processes ensuring consistent quality and timely delivery.", image: "/images/about/manufacturing-02.png" },
                  { title: "QUALITY ASSURANCE", desc: "Rigorous testing and inspection at every stage to ensure reliability.", image: "/images/about/manufacturing-03.png" }
                ].map((item, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 min-h-[220px] lg:min-h-[238px] flex flex-col justify-end p-4.5 shadow-sm">
                    <Image
                      alt={item.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      src={item.image}
                    />
                    <div className="absolute inset-0 bg-slate-950/50 z-10" />
                    
                    {/* Bottom Left Overlay */}
                    <div className="relative z-20 bg-primary/95 text-white p-3.5 rounded-lg border border-white/5 backdrop-blur-xs">
                      <h4 className="text-xs font-black uppercase text-white tracking-wide leading-tight">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[10.5px] text-slate-300 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: DEPARTMENT CONTACT DIRECTORY */}
        {/* ========================================================================= */}
        <section className="bg-white py-12 lg:py-16" id="directory">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-[1.5px] w-6 bg-secondary" />
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  OUR TEAM. YOUR SUPPORT.
                </span>
                <span className="h-[1.5px] w-6 bg-secondary" />
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                DEPARTMENT CONTACT DIRECTORY
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Connect with the right team for your specific needs. Our experts are ready to assist you.
              </p>
            </div>

            {/* Grid of 6 Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamDirectory.map((member, i) => {
                const DIcon = member.icon;
                return (
                  <div key={i} className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Card Header with orange icon badge */}
                      <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                        <span className="text-xs font-black tracking-widest text-secondary uppercase">
                          {member.department}
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow-xs text-secondary">
                          <DIcon size={14} />
                        </div>
                      </div>

                      {/* Profile details */}
                      <div className="flex items-center gap-4 py-1">
                        {/* Styled grey circle container as profile photo placeholder */}
                        <div className="h-14 w-14 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-400 shrink-0 shadow-inner">
                          <Users size={24} />
                        </div>
                        <div>
                          <h4 className="text-sm font-black text-primary leading-tight">
                            {member.name}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 font-bold">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* Contact links */}
                      <div className="space-y-2 border-t border-slate-200/60 pt-3">
                        <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-secondary transition-colors">
                          <Mail size={13} className="text-secondary" />
                          <span>{member.email}</span>
                        </a>
                        <a href={`tel:${member.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-secondary transition-colors">
                          <Phone size={13} className="text-secondary" />
                          <span>{member.phone}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom commitments strip */}
            <div className="mt-12 bg-slate-50 border border-slate-200/80 rounded-2xl p-5.5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Shield size={16} className="text-secondary" />
                <span className="font-semibold">We ensure your query reaches the right expert for a quick and effective response.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Clock size={16} className="text-secondary" />
                <span className="font-semibold">Average Response Time: Within 24 Hours</span>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: SUPPORTING INDUSTRIES & WORLDWIDE REACH */}
        {/* ========================================================================= */}
        <section className="bg-slate-50 py-12 lg:py-16" id="worldwide-reach">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.10fr] lg:items-center">
              
              {/* Left Column Content */}
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-secondary block">
                  GLOBAL SUPPORT NETWORK
                </span>
                <h2 className="headline text-[clamp(2rem,4.2vw,3rem)] font-black text-primary uppercase mt-2">
                  SUPPORTING INDUSTRIES.<br />
                  <span className="text-secondary">AROUND THE WORLD.</span>
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed max-w-lg mt-3">
                  Pithal Machinery is trusted in 35+ countries across 6 continents. Our global support network ensures you get the right solutions and timely support, wherever you operate.
                </p>

                {/* Metrics highlights list */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {globalReachPoints.map((item, i) => (
                    <div key={i} className="flex gap-3.5 p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                        {i === 0 && <Globe size={18} />}
                        {i === 1 && <Clock size={18} />}
                        {i === 2 && <Shield size={18} />}
                        {i === 3 && <Layers size={18} />}
                      </div>
                      <div>
                        <h4 className="text-base font-black text-primary leading-tight">
                          {item.value}
                        </h4>
                        <p className="text-xs text-slate-500 font-bold uppercase mt-1 leading-none">
                          {item.label}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Map representation */}
              <div className="relative aspect-[16/10] w-full rounded-2xl border border-slate-200 bg-white overflow-hidden flex items-center justify-center p-6 shadow-sm">
                <Image
                  src="/images/about/global-benchmarks-map.png"
                  alt="Worldwide Support Hubs Map"
                  fill
                  className="object-contain opacity-80 p-2"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2.5 px-4">
                  {["EUROPE", "MIDDLE EAST", "ASIA", "AFRICA", "SOUTH AMERICA"].map((region) => (
                    <span key={region} className="bg-primary text-white text-[9px] font-black uppercase px-2 py-1 rounded shadow-md border border-white/10 tracking-wider">
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom presence regions columns */}
            <div className="mt-10 pt-10 border-t border-slate-200/80">
              <h3 className="text-xs font-black tracking-widest text-primary uppercase text-center mb-8">
                OUR PRESENCE BY REGION
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
                {globalPresenceRegions.map((region, i) => (
                  <div key={i} className="bg-white border border-slate-200/85 p-4 rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase text-secondary tracking-widest leading-none block">
                        {region.name}
                      </span>
                      <span className="text-xs font-bold text-primary mt-1 block">
                        {region.countries}
                      </span>
                      <p className="mt-2 text-[10.5px] leading-relaxed text-slate-500">
                        {region.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-2 border-t border-slate-100 flex justify-end">
                      <Globe size={12} className="text-secondary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom features strip */}
            <div className="mt-12 bg-white border border-slate-200/85 rounded-xl p-4.5 flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {["Global Footprint. Local Commitment.", "24/7 Support Availability", "Spare Parts Support", "On-site Assistance", "Technical Expertise"].map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                    <Check size={10} className="stroke-[3]" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wide text-primary">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: SOLUTIONS TAILORED TO YOUR INDUSTRY NEEDS */}
        {/* ========================================================================= */}
        <section className="bg-white py-12 lg:py-16" id="industry-needs">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-[1.5px] w-6 bg-secondary" />
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  WHY CLIENTS CONTACT PITHAL
                </span>
                <span className="h-[1.5px] w-6 bg-secondary" />
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                SOLUTIONS TAILORED TO YOUR INDUSTRY NEEDS
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                From concept to commissioning, clients connect with us for engineering solutions that drive performance, efficiency and long-term value.
              </p>
            </div>

            {/* Grid of 6 cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industryNeeds.map((need, i) => (
                <div key={i} className="group relative flex flex-col bg-slate-50 border border-slate-200/80 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-slate-300">
                  <div className="flex gap-5 items-start">
                    {/* Icon circle */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md">
                      {renderIndustryNeedIcon(need.icon)}
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.10em] text-primary">
                        {need.title}
                      </h3>
                      <span className="block h-[1.5px] w-6 bg-secondary my-2" />
                      <p className="mt-1 text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
                        {need.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom banner block */}
            <div className="mt-12 bg-slate-50 border border-slate-200/80 rounded-2xl p-6.5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm">
              <div className="flex items-center gap-3">
                <Handshake size={18} className="text-secondary shrink-0" />
                <span className="font-semibold text-primary">Our commitment doesn&apos;t end with the sale. We partner with you for long-term success.</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-secondary shrink-0" />
                <span className="font-semibold text-primary">From your first enquiry to long-term support, we&apos;re with you at every step.</span>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: FROM INQUIRY TO INDUSTRIAL IMPACT (OUR PROCESS) */}
        {/* ========================================================================= */}
        <section className="bg-slate-50 py-12 lg:py-16" id="process">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  OUR PROCESS
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                FROM INQUIRY TO INDUSTRIAL IMPACT
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We follow a structured and transparent process to ensure you receive the right solution with efficiency, accuracy and reliability.
              </p>
            </div>

            {/* 5 step horizontal nodes */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 relative mb-14">
              {processSteps.map((step, i) => {
                const SIcon = step.icon;
                return (
                  <div key={i} className="relative flex flex-col items-center text-center p-5 bg-white border border-slate-200/80 rounded-xl shadow-xs">
                    
                    {/* Circle icon with crescent arc outline */}
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md">
                      <svg className="absolute -inset-[1.5px] h-[66px] w-[66px] -rotate-45 pointer-events-none" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="47"
                          stroke="#ff5a00"
                          strokeWidth="2.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray="70 300"
                        />
                      </svg>
                      <SIcon size={20} className="text-primary" />
                    </div>

                    <span className="mt-4 bg-secondary text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow z-10">
                      {step.step}
                    </span>

                    <h3 className="mt-3 text-sm font-black uppercase tracking-wider text-primary leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-500 min-h-[50px] font-medium">
                      {step.desc}
                    </p>

                    {/* Timeline connector circle node */}
                    {i < 4 && (
                      <div className="absolute right-[-14px] top-1/3 -translate-y-1/2 hidden lg:flex z-20 h-4.5 w-4.5 items-center justify-center rounded-full bg-white border border-slate-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom commitments strip */}
            <div className="bg-white border border-slate-200/85 rounded-2xl p-6.5 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center sm:divide-x sm:divide-slate-100">
                {processCommitments.map((item, i) => {
                  const PIcon = item.icon;
                  return (
                    <div key={i} className="px-5 flex gap-4 items-start">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                        <PIcon size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-black uppercase text-primary tracking-wide leading-tight">
                          {item.label}
                        </h4>
                        <p className="mt-1 text-xs md:text-sm text-slate-500 leading-normal font-medium">
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
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Find answers to common questions about our solutions, services and support. Can&apos;t find what you&apos;re looking for? Contact our team.
              </p>
            </div>

            {/* Accordion elements list */}
            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              {faqData.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                const FIcon = faq.icon;
                return (
                  <div key={index} className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-xs hover:border-slate-300 transition-colors">
                    {/* Header bar button */}
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        {/* Toggle Circle Icon */}
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-secondary shrink-0">
                          {isOpen ? <Minus size={14} className="stroke-[3.5]" /> : <Plus size={14} className="stroke-[3.5]" />}
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
                        <ChevronRight size={16} className={cn("text-slate-400 transition-transform", isOpen ? "rotate-90" : "")} />
                      </div>
                    </button>

                    {/* Answer content box */}
                    {isOpen && (
                      <div className="p-5.5 pt-0 border-t border-slate-100 bg-slate-50/50 flex gap-4.5 items-start">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-xs mt-1">
                          <Headphones size={16} />
                        </div>
                        <p className="text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* FAQ Footer block */}
            <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-2xl p-5.5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <Headphones size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-primary tracking-wide">
                    STILL HAVE QUESTIONS?
                  </h4>
                  <p className="text-xs text-slate-500">
                    Our team is here to help you with any specific requirements or technical queries.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 lg:gap-8">
                <a href="tel:+912812387373" className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-secondary transition-colors">
                  <Phone size={13} className="text-secondary" />
                  <span>CALL US: +91 281 238 7373</span>
                </a>
                <a href="mailto:info@pithalindia.com" className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-secondary transition-colors">
                  <Mail size={13} className="text-secondary" />
                  <span>EMAIL US: info@pithalindia.com</span>
                </a>
                <a href="mailto:info@pithalindia.com?subject=Consultation" className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-secondary transition-colors">
                  <Calendar size={13} className="text-secondary" />
                  <span>SCHEDULE MEETING</span>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: VISIT OUR FACILITY FIRSTHAND */}
        {/* ========================================================================= */}
        <section className="bg-slate-50 py-12 lg:py-16" id="facility">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  VISIT OUR FACILITY
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2rem,4.2vw,3rem)] font-black leading-[1.1] text-primary">
                EXPERIENCE OUR MANUFACTURING EXCELLENCE FIRSTHAND.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We welcome you to visit our state-of-the-art manufacturing facility and see our advanced engineering, quality processes and world-class infrastructure in action.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left visual column */}
              <div>
                {/* Large main facility exterior photo */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-900">
                  <Image
                    alt="Pithal Anand Plant Building exterior"
                    className="object-cover"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    src="/images/about/factory-hero.png"
                  />
                </div>
                
                {/* 4 smaller floor images row */}
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {[
                    { label: "Advanced Manufacturing", image: "/images/about/manufacturing-exelilence-2.png" },
                    { label: "Precision Engineering", image: "/images/about/manufacturing-exelilence-3.png" },
                    { label: "Quality Production", image: "/images/about/manufacturing-exelilence-4.png" },
                    { label: "Engineering Excellence", image: "/images/about/manufacturing-exelilence-5.png" }
                  ].map((sub, i) => (
                    <div key={i} className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-800">
                      <Image
                        alt={sub.label}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        fill
                        sizes="15vw"
                        src={sub.image}
                      />
                      <div className="absolute inset-0 bg-slate-950/20 z-10" />
                      <div className="absolute bottom-2 inset-x-2 z-20 bg-primary/90 text-white text-[8px] md:text-[9.5px] font-black uppercase text-center py-1 rounded border border-white/5 truncate">
                        {sub.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Address card with map pointer */}
              <div className="bg-[#031b40] text-white p-6 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xl">
                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase text-secondary tracking-widest block border-b border-white/10 pb-2">
                    OUR FACILITY
                  </span>

                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex gap-4 items-start">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Address</span>
                        <p className="mt-1 text-xs md:text-sm text-slate-200 leading-relaxed font-semibold">
                          Pithal Machinery Private Limited<br />
                          Survey No. 25, Near GIDC Estate,<br />
                          Vithal Udyognagar, Anand - 388 121,<br />
                          Gujarat, India.
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 items-start">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                        <Phone size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Phone</span>
                        <a href="tel:+912812387373" className="mt-1 text-xs md:text-sm text-slate-200 block font-semibold hover:text-secondary">
                          +91 281 238 7373
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 items-start">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                        <Mail size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Email</span>
                        <a href="mailto:info@pithalindia.com" className="mt-1 text-xs md:text-sm text-slate-200 block font-semibold hover:text-secondary">
                          info@pithalindia.com
                        </a>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex gap-4 items-start">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                        <Clock size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Working Hours</span>
                        <p className="mt-1 text-xs md:text-sm text-slate-200 font-semibold">
                          Monday - Saturday<br />
                          09:00 AM to 06:00 PM (IST)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map pointer placeholder */}
                <div className="mt-6 relative h-[140px] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-grid" />
                  <div className="text-center p-3 z-10">
                    <MapPin size={24} className="text-secondary mx-auto mb-1 animate-bounce" />
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Pithal Machinery Anand Plant</span>
                    <p className="text-[9px] text-slate-500 mt-0.5">Latitude 22.5562 / Longitude 72.9511</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom strip see experience trust */}
            <div className="mt-12 bg-white border border-slate-200/80 rounded-2xl p-5.5 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 leading-none">
                  SEE. EXPERIENCE. TRUST.
                </span>
                <div className="flex items-center gap-6 mt-3 text-xs md:text-sm font-bold text-primary">
                  {["World-Class Infrastructure", "Expert Team", "Quality Assured"].map((f, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-secondary" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Plan visit banner CTA */}
              <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex items-center justify-between gap-6 max-w-md w-full">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-secondary shrink-0" />
                  <div>
                    <h4 className="text-xs font-black uppercase text-primary leading-tight">
                      PLAN YOUR VISIT
                    </h4>
                    <p className="text-[10.5px] text-slate-500">
                      Schedule a visit to our facility and meet our engineering team.
                    </p>
                  </div>
                </div>
                <Button href="mailto:info@pithalindia.com?subject=Visit%20Plant" variant="primary" className="text-[9.5px] px-4 py-2.5 shrink-0 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  SCHEDULE VISIT
                  <ArrowRight size={10} />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: FINAL CTA BANNER */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:pb-24">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-slate-900 text-white min-h-[380px] lg:min-h-[460px] flex flex-col justify-center p-8 md:p-12 lg:p-16">
              
              {/* Plant Visual Background */}
              <Image
                src="/images/contact/crushing-plant-contact.jpg"
                alt="Pithal Crushing Plant Officer"
                fill
                className="object-cover object-right opacity-30"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
              
              {/* Content box */}
              <div className="relative z-10 max-w-xl text-left">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary mb-6">
                  <MessageSquare size={18} />
                </div>
                
                <h2 className="headline text-[clamp(2rem,5vw,3.5rem)] font-black text-white uppercase leading-[0.96] tracking-tight">
                  LET&apos;S DISCUSS YOUR <br />
                  <span className="text-secondary">INDUSTRIAL REQUIREMENTS.</span>
                </h2>

                <p className="mt-6 text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                  Our experts are ready to understand your needs and provide the right solutions for your business.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <Button href="tel:+912812387373" variant="primary" className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5 bg-[#031b40] hover:bg-secondary border-none">
                    <Phone size={14} />
                    CALL NOW
                  </Button>
                  <Button href="#consultation" variant="outlineOrange" className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5 text-white border-white/20 hover:bg-white hover:text-primary">
                    <Mail size={14} />
                    SEND INQUIRY
                  </Button>
                  <Button href="mailto:info@pithalindia.com?subject=Consultation" variant="outlineOrange" className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5 text-white border-white/20 hover:bg-white hover:text-primary">
                    <Calendar size={14} />
                    SCHEDULE CONSULTATION
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
