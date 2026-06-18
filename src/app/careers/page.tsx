"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Users,
  Settings,
  BookOpen,
  ShieldCheck,
  Home,
  Trophy,
  Lightbulb,
  Globe,
  Briefcase,
  Award,
  Megaphone,
  TrendingUp,
  FileText,
  Cpu,
  Wrench,
  ArrowRight,
  Search,
  MapPin,
  RotateCcw,
  Wallet,
  UserCheck,
  Upload,
  Mail,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/common/Container";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "Excellent", label: "Team Members Worldwide" },
  { value: "24/7", label: "Operational Support" },
  { value: "MULTIPLE", label: "Departments & Roles" },
  { value: "Growth", label: "Career Development Programs" },
];

const heroStats = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.0"
        className="h-14 w-14 text-[#fa5902] stroke-[1.0]"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    value: "Excellent",
    title: "EMPLOYEES",
    desc: "Driven by skill. United by purpose.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.0"
        className="h-14 w-14 text-[#fa5902] stroke-[1.0]"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    value: "24/7",
    title: "MANUFACTURING",
    desc: "Round-the-clock operations built on precision.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.0"
        className="h-14 w-14 text-[#fa5902] stroke-[1.0]"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <line x1="9" y1="22" x2="9" y2="16" />
        <line x1="15" y1="22" x2="15" y2="16" />
        <line x1="9" y1="16" x2="15" y2="16" />
        <path d="M8 6h2v2H8V6zm6 0h2v2h-2V6zm-6 4h2v2H8v-2zm6 0h2v2h-2v-2z" />
      </svg>
    ),
    value: "MULTIPLE",
    title: "DEPARTMENTS",
    desc: "Engineering, Production, Sales, Service & more.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.0"
        className="h-14 w-14 text-[#fa5902] stroke-[1.0]"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        <path d="M17 8h3v3" />
        <rect x="7" y="16" width="2" height="4" />
        <rect x="12" y="12" width="2" height="8" />
        <rect x="17" y="9" width="2" height="11" />
      </svg>
    ),
    value: "GROWTH",
    title: "OPPORTUNITIES",
    desc: "Build your career with continuous learning.",
  },
];

const advantages = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-11 h-11"
        stroke="var(--secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20V10" />
        <path d="M18 20V4" />
        <path d="M6 20v-4" />
      </svg>
    ),
    title: "Career Growth",
    desc: "Clear career paths, performance recognition and opportunities to grow with the organization.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-11 h-11"
        stroke="var(--secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 11l2 2 4-4" />
      </svg>
    ),
    title: "Stable & Trusted Organization",
    desc: "Be part of a financially strong, professionally managed multinational company.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-11 h-11"
        stroke="var(--secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Industrial Exposure",
    desc: "Work on challenging projects and gain hands-on experience across industries.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-11 h-11"
        stroke="var(--secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 10l-4 3V4l-8 6v10h20v-7l-8-3z" />
      </svg>
    ),
    title: "Advanced Manufacturing",
    desc: "Leverage cutting-edge technology, modern systems and world-class manufacturing processes.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-11 h-11"
        stroke="var(--secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Learning Opportunities",
    desc: "Continuous learning through training, certifications, workshops and knowledge sharing.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-11 h-11"
        stroke="var(--secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Professional Culture",
    desc: "Collaborative environment built on respect, integrity, teamwork and open communication.",
  },
];

const galleryImages = [
  { src: "/images/about/factory-floor.png", alt: "Factory Floor" },
  { src: "/images/about/manufacturing-01.png", alt: "Manufacturing" },
  { src: "/images/about/manufacturing-02.png", alt: "Team Work" },
  { src: "/images/about/factory-hero.png", alt: "Factory Hero" },
  { src: "/images/about/manufacturing-03.png", alt: "Operations" },
  { src: "/images/about/global-impact.png", alt: "Global Impact" },
];

const roles = {
  management: [
    { title: "HR Manager", type: "Full Time", dept: "Human Resources" },
    { title: "Plant Manager", type: "Full Time", dept: "Operations" },
    { title: "Sales Manager", type: "Full Time", dept: "Sales & BD" },
    { title: "Finance Manager", type: "Full Time", dept: "Finance" },
    { title: "Project Manager", type: "Full Time", dept: "Projects" },
  ],
  office: [
    { title: "Sales Executive", type: "Full Time", dept: "Sales" },
    { title: "Account Executive", type: "Full Time", dept: "Finance" },
    { title: "Marketing Coordinator", type: "Full Time", dept: "Marketing" },
    { title: "Admin Executive", type: "Full Time", dept: "Admin" },
    { title: "Customer Support", type: "Full Time", dept: "Support" },
  ],
  production: [
    { title: "Mechanical Engineer", type: "Full Time", dept: "Engineering" },
    { title: "Welder / Fabricator", type: "Full Time", dept: "Production" },
    { title: "Quality Inspector", type: "Full Time", dept: "QC" },
    { title: "CNC Operator", type: "Full Time", dept: "Manufacturing" },
    { title: "Assembly Technician", type: "Full Time", dept: "Production" },
  ],
};

type Opening = {
  title: string;
  exp: string;
  location: string;
  type: string;
  hot: boolean;
  department?: string;
  salary?: string;
  openings?: string;
};

const openings: Opening[] = [
  {
    title: "Vice President – Marketing",
    exp: "18 - 24 Years",
    location: "Rajasthan",
    type: "Full Time",
    department: "Management",
    salary: "₹18 - 24 LPA",
    openings: "01",
    hot: true,
  },
  {
    title: "VMC Operator",
    exp: "10+ Years",
    location: "Rajasthan",
    type: "Full Time",
    department: "Production & Technical",
    salary: "₹40,000+",
    openings: "10",
    hot: false,
  },
  {
    title: "Technical Coordinator",
    exp: "7+ Years",
    location: "Rajasthan",
    type: "Full Time",
    department: "Office & Coordination",
    salary: "₹75,000+",
    openings: "07",
    hot: false,
  },
  {
    title: "Welder",
    exp: "5+ Years",
    location: "Rajasthan",
    type: "Full Time",
    department: "Production & Technical",
    salary: "₹30,000+",
    openings: "40",
    hot: false,
  },
  {
    title: "Marketing Manager",
    exp: "8+ Years",
    location: "Rajasthan",
    type: "Full Time",
    department: "Office & Coordination",
    salary: "₹50,000+",
    openings: "08",
    hot: false,
  },
];

const poweredImages = [
  "/images/about/manufacturing-01.png",
  "/images/about/manufacturing-02.png",
  "/images/about/manufacturing-03.png",
  "/images/about/factory-floor.png",
  "/images/about/impact-plant.png",
  "/images/about/factory-hero.png",
  "/images/about/manufacturing-exelilence-1.png",
  "/images/about/manufacturing-exelilence-2.png",
];

const poweredStats = [
  { value: "Excellent", label: "Team Members" },
  { value: "98%", label: "Retention Rate" },
  { value: "25+", label: "Yrs Experience" },
  { value: "40+", label: "Countries Served" },
];

const benefits = [
  {
    icon: "💰",
    title: "Competitive Salary",
    desc: "Industry-standard compensation with performance bonuses.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    desc: "Structured career ladder with mentorship programs.",
  },
  {
    icon: "🏥",
    title: "Health & Safety",
    desc: "Comprehensive health coverage and safe work environment.",
  },
  {
    icon: "🎓",
    title: "Skill Development",
    desc: "Regular training, workshops, and certifications sponsored.",
  },
  {
    icon: "💻",
    title: "Modern Tools",
    desc: "Work with the latest industrial software and machinery.",
  },
  {
    icon: "🤝",
    title: "Professional Culture",
    desc: "Inclusive workplace that respects every individual.",
  },
];

const growSkillsImages = [
  "/images/about/manufacturing-01.png",
  "/images/about/manufacturing-02.png",
  "/images/about/manufacturing-03.png",
  "/images/about/factory-hero.png",
  "/images/about/experience-main.png",
  "/images/about/global-impact.png",
];

const trainingAreas = [
  "Technical Training",
  "Industrial Safety",
  "Professional Skills",
  "Leadership Skills",
  "Senior Coach Course",
];

const journey = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Submit your CV and cover letter through our portal.",
  },
  {
    step: "02",
    title: "Screening",
    desc: "Our HR team reviews your profile and experience.",
  },
  {
    step: "03",
    title: "Technical Round",
    desc: "Domain-specific interview with the department head.",
  },
  {
    step: "04",
    title: "Final Interview",
    desc: "Leadership round with senior management.",
  },
  {
    step: "05",
    title: "Offer & Onboarding",
    desc: "Receive your offer letter and join the Pithal family.",
  },
];

const foundationCards = [
  {
    title: "Innovation First",
    desc: "We push boundaries in industrial engineering and design.",
  },
  {
    title: "Safety Culture",
    desc: "Every role upholds our commitment to workplace safety.",
  },
  {
    title: "Global Standards",
    desc: "Work to international quality benchmarks every day.",
  },
  {
    title: "Team Excellence",
    desc: "Collaborative teams that deliver precision outcomes.",
  },
  {
    title: "Sustainability",
    desc: "Building machines that respect our planet's future.",
  },
  {
    title: "Customer Focus",
    desc: "Everything we do is driven by client satisfaction.",
  },
];

const testimonials = [
  {
    name: "Rajan Sharma",
    role: "Senior Mechanical Engineer",
    years: "6 years at Pithal",
    text: "Working at Pithal has given me exposure to international projects that I never imagined in my early career.",
    img: "/images/about/our-foundation-1.png",
  },
  {
    name: "Priya Mehta",
    role: "HR Business Partner",
    years: "4 years at Pithal",
    text: "The culture here genuinely supports growth. I've been promoted twice and learned more than in my entire previous career.",
    img: "/images/about/our-foundation-2.png",
  },
  {
    name: "Deepak Verma",
    role: "Plant Operations Manager",
    years: "9 years at Pithal",
    text: "Pithal is a place where your performance speaks. The leadership listens and invests in people who deliver.",
    img: "/images/about/our-foundation-3.png",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function CareersPage() {
  const [activeRoleTab, setActiveRoleTab] = useState<
    "management" | "office" | "production"
  >("management");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("");

  return (
    <>
      <Header />
      <main className="careers-page bg-white text-gray-900 font-sans overflow-x-hidden">
        <Container className="relative overflow-hidden bg-white text-primary lg:h-[calc(100vh-90px)] lg:min-h-[600px] flex flex-col justify-between pt-4 pb-4 lg:pt-6 lg:pb-6">
          {/* Full Background Image covering the entire section */}
          <div className="absolute inset-0 z-0">
            <Image
              alt="Pithal Machines manufacturing and team"
              className="object-cover object-center lg:object-right"
              fill
              priority
              src="/careerimg/20.jpg"
            />
            {/* Responsive white gradient overlay: vertical fade on mobile, strong horizontal fade on desktop */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/70 lg:bg-gradient-to-r lg:from-white lg:via-white lg:via-[28%] lg:to-transparent z-10 pointer-events-none" />
          </div>

          <div className="relative z-22 mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 flex-grow flex flex-col justify-center">
            {/* Breadcrumbs */}
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link
                href="/"
                className="hover:text-[#fa5902] transition-colors flex items-center gap-1.5"
              >
                <Home size={14} className="stroke-[2]" />
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
              <span className="text-slate-500">Careers</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="py-2">
                {/* Careers Tag with line */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-lg font-extrabold uppercase tracking-[0.08em] text-[#fa5902]">
                    CAREERS
                  </span>
                  <span className="h-[1.5px] w-12 bg-[#fa5902]" />
                </div>

                <h1 className="font-extrabold text-[2.5rem] sm:text-[3.25rem] lg:text-[3.5rem] leading-[1.05] tracking-tight text-[#092a5c] uppercase">
                  BUILD MACHINES.
                  <br />
                  <span className="text-[#fa5902]">BUILD YOUR FUTURE.</span>
                </h1>

                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-600 max-w-lg">
                  Join Pithal Machines and be a part of a team that engineers
                  high-performance solutions and powers industries across the
                  globe.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="#openings"
                    className="inline-flex items-center justify-center gap-3.5 bg-[#fa5902] text-white px-7 py-4 rounded-lg text-xs font-black tracking-[0.14em] hover:bg-[#e04f02] transition-colors"
                  >
                    EXPLORE OPPORTUNITIES
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-4 h-4"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex items-center justify-center gap-3.5 border border-[#092a5c] text-[#092a5c] px-7 py-4 rounded-lg text-xs font-black tracking-[0.14em] hover:bg-slate-50 transition-colors"
                  >
                    LIFE AT PITHAL
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-4 h-4"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Spacer on desktop to allow background image to be visible on the right without forcing extra height */}
              <div className="hidden lg:block h-[100px] pointer-events-none" />
            </div>
          </div>

          {/* Stats Card Banner */}
          <div className="relative z-20 mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 pb-0 pt-4 mt-auto">
            <div className="grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-0 rounded-2xl bg-[#031b40] p-4 sm:p-6 text-white shadow-[0_28px_80px_rgba(9,25,59,0.22)] lg:divide-x lg:divide-slate-700/50">
              {heroStats.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col min-[420px]:flex-row items-center min-[420px]:items-start text-center min-[420px]:text-left gap-3 sm:gap-4 p-2 sm:p-4 lg:px-6"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center">
                    <div className="scale-75 sm:scale-90 lg:scale-100">
                      {item.icon}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold tracking-tight text-white leading-none">
                      {item.value}
                    </div>
                    <p className="mt-1.5 text-[10px] sm:text-xs lg:text-[13px] font-extrabold uppercase tracking-wider text-[#fa5902] truncate">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-slate-300 font-medium line-clamp-2 lg:line-clamp-none">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* ── SECTION 2: ADVANTAGES ── */}
        <section className="py-10 bg-white">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-14">
              <p className="text-secondary text-lg font-bold uppercase tracking-[0.08em] mb-3">
                WHY JOIN PITHAL MACHINES
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight font-sans">
                Advantages That Shape Your Future
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-7 text-slate-500">
                At Pithal Machines, we empower you with opportunities,
                resources, and a culture that helps you grow, innovate and
                achieve more every day.
              </p>
              <div className="mx-auto mt-6 h-1.5 w-28 bg-secondary rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {advantages.map((a, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.14)] flex flex-col items-center text-center career-card-hover"
                  style={{ "--accent-color": "#fa5902" } as React.CSSProperties}
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all duration-300 icon-box">
                    {a.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 transition-colors duration-300">
                    {a.title}
                  </h3>
                  <p className="text-[15px] sm:text-base leading-relaxed text-slate-500">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Full-width flat banner - screen touching */}
          <div className="w-full bg-[#ebf1fd] border-y border-slate-200 py-8 sm:py-10 mt-14 shadow-sm">
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
              <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#092a5c] text-white animate-pulse">
                    {/* Prize / Trophy Icon */}
                    <Trophy className="h-9 w-9 stroke-[1.8]" />
                  </div>
                  <div className="border-l-4 border-solid border-secondary pl-4">
                    <p className="text-lg uppercase tracking-[0.08em] font-extrabold text-[#092a5c] mb-1">
                      We don&apos;t just build machines.
                    </p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-black text-secondary leading-tight">
                      We build people, capabilities and a better tomorrow
                      together.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-6 gap-x-2 sm:grid-cols-4 pt-5 lg:pt-0 border-t border-slate-200/60 lg:border-t-0 lg:border-l lg:border-slate-300 lg:pl-6 lg:divide-x lg:divide-slate-300">
                  {[
                    {
                      icon: <Users size={30} className="stroke-[1.8]" />,
                      label: "Employee Focused",
                    },
                    {
                      icon: <Trophy size={30} className="stroke-[1.8]" />,
                      label: "Excellence Driven",
                    },
                    {
                      icon: <Lightbulb size={30} className="stroke-[1.8]" />,
                      label: "Innovation Led",
                    },
                    {
                      icon: <Globe size={30} className="stroke-[1.8]" />,
                      label: "Global Opportunities",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center text-center px-1 sm:px-2 first:pl-0"
                    >
                      <div className="text-secondary mb-2 shrink-0">
                        {item.icon}
                      </div>
                      <p className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#092a5c] leading-tight text-center">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: A PLACE TO GROW ── */}
        <section id="about" className="py-10 bg-gray-50/50">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center mb-2">
              {/* Left text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[3px] w-8 bg-secondary rounded-full" />
                  <span className="text-lg font-black uppercase tracking-[0.08em] text-secondary">
                    LIFE AT PITHAL
                  </span>
                </div>
                <h2 className="text-4xl sm:text-[3.25rem] font-black text-primary leading-[1.08] tracking-tight uppercase mb-6">
                  A PLACE TO GROW.
                  <br />A TEAM{" "}
                  <span className="text-secondary">TO INSPIRE.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base font-medium max-w-xl">
                  At Pithal Machines, we foster a culture of collaboration,
                  innovation and continuous improvement. Here, every individual
                  plays a part in building world-class solutions that power
                  industries worldwide.
                </p>

                {/* Stat pills (Redesigned as Feature Cards from image) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-2 md:gap-x-0 md:divide-x md:divide-slate-200 mt-8">
                  {[
                    {
                      icon: Users,
                      title: "COLLABORATIVE TEAMS",
                      desc: "Work together. Achieve together.",
                    },
                    {
                      icon: Settings,
                      title: "HANDS-ON EXPERIENCE",
                      desc: "Real projects. Real impact.",
                    },
                    {
                      icon: BookOpen,
                      title: "LEARNING & DEVELOPMENT",
                      desc: "Grow your skills. Shape your future.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "SAFETY & WELL-BEING",
                      desc: "Your safety. Our priority.",
                    },
                  ].map((card, i) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center text-center px-4 first:pl-0"
                      >
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-slate-100 mb-4">
                          <Icon
                            size={40}
                            className="text-secondary stroke-[1.8]"
                          />
                        </div>
                        <h4 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-primary leading-tight max-w-[150px]">
                          {card.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-2 leading-relaxed max-w-[160px]">
                          {card.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: 2x2 Gallery Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    src: "/careerimg/team%20collab.jpg",
                    alt: "TEAM COLLABORATION",
                  },
                  {
                    src: "/careerimg/heavy engineeering.jpg",
                    alt: "ADVANCED MANUFACTURING",
                  },
                  {
                    src: "/careerimg/state%20of%20the%20art%20facility.jpg",
                    alt: "STATE-OF-THE-ART FACILITY",
                  },
                  {
                    src: "/careerimg/knowledge%20sharing.jpg",
                    alt: "KNOWLEDGE SHARING",
                  },
                ].map((img, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-slate-250/60 shadow-sm bg-white flex flex-col"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="bg-[#031b40] py-2 text-center border-t border-[#031b40]">
                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* bottom Gallery Grid Row (4 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {[
                {
                  src: "/careerimg/skilled%20workforce.jpg",
                  alt: "SKILLED WORKFORCE",
                },
                {
                  src: "/careerimg/training%20%26%20upskilling.jpg",
                  alt: "TRAINING & UPSKILLING",
                },
                {
                  src: "/careerimg/engineering%20excellence.jpg",
                  alt: "ENGINEERING EXCELLENCE",
                },
                {
                  src: "/careerimg/A%20team%20that%20builds%20the%20future.jpg",
                  alt: "A TEAM THAT BUILDS THE FUTURE",
                },
              ].map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-slate-250/60 shadow-sm bg-white flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-[#031b40] py-2 text-center border-t border-[#031b40]">
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-white">
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: EXPLORE ROLES ── */}
        <section className="py-10 bg-white">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-secondary text-lg font-bold uppercase tracking-[0.08em] mb-2">
                DEPARTMENTS & OPPORTUNITIES
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight font-sans">
                Explore Roles. Build Your Career.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-7 text-slate-500">
                At Pithal Machines, we offer diverse career opportunities across
                departments. Find the right path that fits your skills and
                ambitions.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: "Management Roles",
                  icon: Users,
                  image: "/careerimg/management roles.jpg",
                  roles: [
                    { title: "Vice President – Marketing", icon: Megaphone },
                    { title: "Vice President – Technical", icon: Settings },
                    { title: "Vice President – Commercial", icon: TrendingUp },
                  ],
                  footer: {
                    icon: Award,
                    line1: "Lead teams. Drive strategy.",
                    line2: "Create impact at the highest level.",
                  },
                },
                {
                  title: "Office & Coordination Roles",
                  icon: Briefcase,
                  image: "/careerimg/office and coordination roles.jpg",
                  roles: [
                    { title: "Technical Coordinator", icon: Settings },
                    { title: "Marketing Manager", icon: Megaphone },
                    { title: "Commercial Coordinator", icon: TrendingUp },
                    { title: "Marketing Executive", icon: FileText },
                  ],
                  footer: {
                    icon: Award,
                    line1: "Support operations. Drive coordination.",
                    line2: "Be the force behind our success.",
                  },
                },
                {
                  title: "Production & Technical Roles",
                  icon: Cpu,
                  image: "/careerimg/production & technical roles.jpg",
                  roles: [
                    { title: "VMC Operator", icon: Wrench },
                    { title: "CNC Operator", icon: Cpu },
                    { title: "Boring Machine Operator", icon: Settings },
                  ],
                  footer: {
                    icon: Award,
                    line1: "Build with precision. Operate with excellence.",
                    line2: "Power the machines that power industries.",
                  },
                },
              ].map((dept, i) => {
                const DeptIcon = dept.icon;
                const FooterIcon = dept.footer.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-3xl border border-slate-100 shadow-[0_15px_50px_rgba(3,27,64,0.06)] flex flex-col justify-between overflow-hidden h-full pt-8"
                  >
                    {/* Top Section: Icon & Title */}
                    <div className="text-center px-6 mb-6">
                      <div
                        className={`mx-auto mb-3 inline-flex h-16 w-16 items-center justify-center rounded-full ${i === 1 ? "bg-[#f6e6d3]" : i === 2 ? "bg-[#ecf5ef]" : "bg-[#eef4ff]"} text-primary border border-blue-50/50`}
                      >
                        <DeptIcon
                          size={28}
                          className="text-[#092a5c] stroke-[1.8]"
                        />
                      </div>
                      <h3 className="text-base font-black tracking-wider text-[#092a5c] uppercase">
                        {dept.title}
                      </h3>
                      <div className="h-[3px] w-8 bg-secondary mx-auto mt-2.5 rounded-full" />
                    </div>

                    {/* Image */}
                    <div className="px-6 mb-6">
                      <div className="overflow-hidden rounded-2xl h-44 relative shadow-sm">
                        <Image
                          src={dept.image}
                          alt={dept.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Roles List */}
                    <div className="px-6 flex-1 flex flex-col justify-start">
                      <div className="space-y-4 mb-6">
                        {dept.roles.map((role, idx) => {
                          const RoleIcon = role.icon;
                          return (
                            <div
                              key={idx}
                              className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0 last:pb-0"
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${i === 1 ? "bg-[#f6e6d3]" : i === 2 ? "bg-[#ecf5ef]" : "bg-[#eef4ff]"} text-[#092a5c]`}
                                >
                                  <RoleIcon
                                    size={20}
                                    className="text-[#092a5c] stroke-[1.8]"
                                  />
                                </div>
                                <span className="text-[14px] sm:text-base font-bold text-[#092a5c] leading-tight">
                                  {role.title}
                                </span>
                              </div>
                              <ArrowRight
                                size={18}
                                className="text-secondary hover:translate-x-1 transition-transform cursor-pointer"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div
                      className={`${i === 1 ? "bg-[#f6e6d3]" : i === 2 ? "bg-[#ecf5ef]" : "bg-[#f4f7fe]"} px-6 py-4 flex items-center gap-4 border-t border-slate-100 mt-auto`}
                    >
                      <FooterIcon
                        size={38}
                        className="text-[#092a5c] stroke-[1.8] shrink-0"
                      />
                      <div className="text-left">
                        <p className="text-[13px] sm:text-sm text-slate-600 font-semibold">
                          {dept.footer.line1}
                        </p>
                        <p className="text-base sm:text-lg font-black text-[#092a5c] leading-tight mt-1">
                          {dept.footer.line2}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Full-width flat banner - screen touching */}
          <div className="w-full bg-white border-y border-slate-200 py-6 mt-8 shadow-sm">
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-secondary"
                    fill="none"
                  >
                    <path
                      d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z"
                      stroke="var(--secondary)"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-700">
                    Every role plays a part.
                  </p>
                  <p className="text-lg font-semibold text-secondary">
                    Find your path. Grow with Pithal Machines.
                  </p>
                </div>
              </div>
              <Button
                href="#openings"
                variant="outlineNavy"
                className="inline-flex items-center gap-3 border border-secondary/30 text-secondary px-5 py-3 rounded-md font-bold hover:bg-secondary/5 min-h-0 h-11"
              >
                VIEW OPEN POSITIONS
                <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none">
                  <path
                    d="M6 4l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: CURRENT OPENINGS ── */}
        <section id="openings" className="py-10 bg-[#f8fafc]">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="w-12 h-0.5 bg-secondary inline-block" />
                <span className="text-[#092a5c] text-lg sm:text-xl font-black uppercase tracking-[0.08em]">
                  OPEN POSITIONS
                </span>
                <span className="w-12 h-0.5 bg-secondary inline-block" />
              </div>
              <h2 className="text-4xl sm:text-[3.25rem] font-black text-[#092a5c] tracking-wider uppercase">
                CURRENT OPENINGS
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-slate-500 text-sm sm:text-base font-medium">
                Explore exciting career opportunities at Pithal Machines. Filter
                by department,
                <br className="hidden sm:block" />
                experience or location to find the right role for you.
              </p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-4 shadow-[0_10px_35px_rgba(3,27,64,0.03)] border border-slate-100 mb-8">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                    <Search size={18} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search job title or keyword"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 bg-[#f8fafc] focus:outline-none focus:border-slate-300 transition-colors"
                  />
                </div>

                {/* Dropdowns & Clear button */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <select
                    value={filterDept}
                    onChange={(e) => setFilterDept(e.target.value)}
                    className="border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 bg-white focus:outline-none cursor-pointer min-w-[160px]"
                  >
                    <option value="">All Departments</option>
                    <option value="Management">Management</option>
                    <option value="Office & Coordination">
                      Office & Coordination
                    </option>
                    <option value="Production & Technical">
                      Production & Technical
                    </option>
                  </select>

                  <select className="border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 bg-white focus:outline-none cursor-pointer min-w-[140px]">
                    <option>All Experience</option>
                    <option>0–2 Yrs</option>
                    <option>3–5 Yrs</option>
                    <option>5+ Yrs</option>
                  </select>

                  <select className="border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 bg-white focus:outline-none cursor-pointer min-w-[140px]">
                    <option>All Locations</option>
                    <option>Rajasthan</option>
                    <option>Gujarat</option>
                  </select>

                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setFilterDept("");
                    }}
                    className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600 hover:text-secondary transition-colors px-2 py-3"
                  >
                    Clear Filters
                    <RotateCcw
                      size={16}
                      className="stroke-[2.2] text-[#092a5c]"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Openings list */}
            <div className="space-y-4">
              {openings
                .filter((o) => {
                  const matchSearch = o.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
                  const matchDept = filterDept
                    ? o.department === filterDept
                    : true;
                  return matchSearch && matchDept;
                })
                .map((job, i) => {
                  // Determine specific styles and icons based on job titles to match mockup exactly
                  let badgeBg = "bg-blue-50/70 text-[#092a5c]";
                  let badgeText = "text-blue-600";
                  let deptIcon = <Users size={28} className="stroke-[1.8]" />;
                  let btnBg = "bg-[#092a5c] hover:bg-[#031b40]";

                  if (job.title === "VMC Operator") {
                    badgeBg = "bg-orange-50/70 text-secondary";
                    badgeText = "text-secondary";
                    deptIcon = <Settings size={28} className="stroke-[1.8]" />;
                    btnBg = "bg-secondary hover:bg-[#d94801]";
                  } else if (job.title === "Technical Coordinator") {
                    badgeBg = "bg-emerald-50/70 text-emerald-600";
                    badgeText = "text-emerald-600";
                    deptIcon = <UserCheck size={28} className="stroke-[1.8]" />;
                    btnBg = "bg-[#092a5c] hover:bg-[#031b40]";
                  } else if (job.title === "Welder") {
                    badgeBg = "bg-orange-50/70 text-secondary";
                    badgeText = "text-secondary";
                    deptIcon = <Wrench size={28} className="stroke-[1.8]" />;
                    btnBg = "bg-secondary hover:bg-[#d94801]";
                  } else if (job.title === "Marketing Manager") {
                    badgeBg = "bg-blue-50/70 text-[#092a5c]";
                    badgeText = "text-blue-600";
                    deptIcon = (
                      <TrendingUp size={28} className="stroke-[1.8]" />
                    );
                    btnBg = "bg-[#092a5c] hover:bg-[#031b40]";
                  }

                  return (
                    <div
                      key={i}
                      className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_8px_30px_rgba(3,27,64,0.03)] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 job-card-hover"
                    >
                      {/* 1. Role & Department Info */}
                      <div className="flex items-center gap-4 lg:w-1/3">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 job-icon-container ${badgeBg}`}
                        >
                          {deptIcon}
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-[#092a5c] leading-snug">
                            {job.title}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <Briefcase size={15} className={badgeText} />
                            <span
                              className={`text-sm font-black uppercase tracking-wide ${badgeText}`}
                            >
                              {job.department}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 2. Experience Column */}
                      <div className="flex items-center gap-3 lg:w-[15%]">
                        <Award
                          size={26}
                          className="stroke-[1.8] text-slate-500 shrink-0"
                        />
                        <div>
                          <div className="text-[12px] font-extrabold text-slate-400 uppercase tracking-wide leading-none mb-1">
                            Experience
                          </div>
                          <div className="text-[15px] font-black text-[#092a5c]">
                            {job.exp}
                          </div>
                        </div>
                      </div>

                      {/* 3. Salary Range Column */}
                      <div className="flex items-center gap-3 lg:w-[18%]">
                        <Wallet
                          size={26}
                          className="stroke-[1.8] text-slate-500 shrink-0"
                        />
                        <div>
                          <div className="text-[12px] font-extrabold text-slate-400 uppercase tracking-wide leading-none mb-1">
                            Salary Range
                          </div>
                          <div className="text-[15px] font-black text-[#092a5c]">
                            {job.salary}
                          </div>
                        </div>
                      </div>

                      {/* 4. Openings Column */}
                      <div className="flex items-center gap-3 lg:w-[15%]">
                        <Users
                          size={26}
                          className="stroke-[1.8] text-slate-500 shrink-0"
                        />
                        <div>
                          <div className="text-[12px] font-extrabold text-slate-400 uppercase tracking-wide leading-none mb-1">
                            Openings
                          </div>
                          <div className="text-[15px] font-black text-[#092a5c]">
                            {job.openings}
                          </div>
                        </div>
                      </div>

                      {/* 5. Action Buttons (Apply & View Details) */}
                      <div className="flex flex-col items-center justify-center shrink-0 lg:w-40 gap-2">
                        <Link
                          href="#"
                          className={`w-full h-10 rounded-xl ${btnBg} text-white flex items-center justify-center gap-2 text-xs font-black tracking-wider transition-all duration-300 apply-btn shadow-sm`}
                        >
                          Apply Now
                          <ArrowRight size={14} className="stroke-[2.5]" />
                        </Link>
                        <Link
                          href="#"
                          className="w-full text-center text-xs font-bold text-slate-400 hover:text-secondary transition-colors pt-1"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Full-width flat banner - screen touching */}
          <div className="w-full bg-[#ebf1fd] border-y border-slate-200/60 py-6 mt-8 shadow-sm">
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="h-14 w-14 rounded-full bg-[#092a5c] text-white flex items-center justify-center shrink-0 shadow-md">
                  <FileText size={26} className="stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#092a5c]">
                    Don&apos;t see the right role?
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">
                    Send us your CV and we&apos;ll reach out when a suitable
                    opportunity opens up.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <Link
                  href="#"
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-[#092a5c] font-black border border-slate-200 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  Upload Your CV
                  <Upload size={16} className="stroke-[2.2]" />
                </Link>

                <div className="h-8 w-[1px] bg-slate-350 hidden md:block" />

                <Link
                  href="mailto:careers@pithalmachines.com"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs sm:text-sm font-black text-[#092a5c] hover:text-secondary transition-colors py-2"
                >
                  <Mail size={16} className="stroke-[2.2]" />
                  careers@pithalmachines.com
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: POWERED BY PEOPLE ── */}
        <section className="py-10 bg-[#f8f9fa]">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-secondary inline-block" />
                <p className="text-[#092a5c] text-lg sm:text-xl font-black uppercase tracking-[0.08em]">
                  Our Manufacturing Strength
                </p>
                <span className="w-12 h-0.5 bg-secondary inline-block" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary uppercase tracking-tight mb-4 font-sans">
                Powered by People. Driven by Precision.
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
                At Pithal Machines, our advanced infrastructure, skilled
                workforce and cutting-edge technology{" "}
                <br className="hidden md:block" />
                come together to deliver world-class engineering solutions.
              </p>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 mb-12 max-w-[1200px] mx-auto w-full">
              {[
                {
                  value: "150,000+",
                  label: "SQ. FT. MANUFACTURING AREA",
                  icon: (
                    <path
                      d="M3 21h18M5 21V8l7-4 7 4v13M5 12h14M9 21v-5a2 2 0 012-2h2a2 2 0 012 2v5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  value: "100+",
                  label: "ADVANCED MACHINES",
                  icon: (
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  value: "Excellent",
                  label: "SKILLED PROFESSIONALS",
                  icon: (
                    <path
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  value: "24/7",
                  label: "OPERATIONS",
                  icon: (
                    <path
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  value: "100%",
                  label: "QUALITY COMMITMENT",
                  icon: (
                    <path
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 px-2 justify-center min-[420px]:justify-start last:col-span-2 last:md:col-span-1 last:lg:col-span-1 last:flex strength-stat-hover cursor-default"
                >
                  <div className="w-11 h-11 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center shrink-0 transition-all duration-300 stat-icon-circle">
                    <svg
                      className="w-5.5 h-5.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {stat.icon}
                    </svg>
                  </div>
                  <div className="text-left min-w-0">
                    <div className="text-xl sm:text-[22px] font-extrabold text-secondary leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-1.5 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { title: "FABRICATION", img: "/careerimg/fabrication.jpg" },
                {
                  title: "CNC OPERATIONS",
                  img: "/careerimg/cnc operation.jpg",
                },
                { title: "WELDING", img: "/careerimg/welding.jpg" },
                {
                  title: "ASSEMBLY",
                  img: "/careerimg/manufacturing experience.jpg",
                },

                {
                  title: "STATE-OF-THE-ART PLANT",
                  img: "/careerimg/state of the art plant.jpg",
                },
                {
                  title: "PRECISION MACHINING",
                  img: "/careerimg/precision machining.jpg",
                },
                {
                  title: "HEAVY ENGINEERING CAPABILITY",
                  img: "/careerimg/heavy engineeering.jpg",
                },
                {
                  title: "TECHNICAL WORKFORCE",
                  img: "/careerimg/technical  workforce.jpg",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col rounded-md overflow-hidden bg-white shadow-lg border border-gray-200 group"
                >
                  <div className="relative h-[220px] bg-slate-200 overflow-hidden">
                    {/* Replace standard img tag with Next/Image if you are using Next.js */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback display if image isn't loaded
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove(
                          "hidden",
                        );
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div className="hidden absolute inset-0 bg-[#cbd5e1] flex items-center justify-center text-slate-500 text-sm">
                      Image: {item.title}
                    </div>
                  </div>
                  <div className="bg-primary text-white text-center py-3.5 px-2">
                    <h3 className="text-[13px] font-bold uppercase tracking-wider">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Features Banner - Full width, flat corners, screen touching */}
          <div className="w-full bg-white border-y border-slate-200 py-10 mt-12 shadow-sm">
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center lg:divide-x lg:divide-blue-100">
              {[
                {
                  title: "Advanced Machinery",
                  desc: "High-performance machines for superior output.",
                  icon: (
                    <path
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  title: "Skilled Workforce",
                  desc: "Experienced professionals driving excellence.",
                  icon: (
                    <path
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  title: "Precision & Quality",
                  desc: "Strict processes ensuring highest standards.",
                  icon: (
                    <path
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  title: "Safety First",
                  desc: "Safe work environment is our top priority.",
                  icon: (
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
                {
                  title: "Continuous Improvement",
                  desc: "Innovating every day to build a stronger tomorrow.",
                  icon: (
                    <path
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ),
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-start gap-3 lg:pl-2 lg:pr-1 first:pl-0 text-left feature-banner-hover cursor-default"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-[#092a5c]/20 bg-[#ebf1fd]/40 text-[#092a5c] feature-icon-wrapper">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[21px] font-black text-primary leading-tight mb-2 uppercase">
                      {feature.title}
                    </h4>
                    <p className="text-[17px] text-gray-500 leading-snug font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: EMPLOYEE BENEFITS ── */}
        <section className="py-10 bg-[#f8f9fa]">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            {/* Header Section */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-secondary inline-block" />
                <p className="text-[#092a5c] text-lg sm:text-xl font-black uppercase tracking-[0.08em]">
                  Employee Benefits
                </p>
                <span className="w-12 h-0.5 bg-secondary inline-block" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-4 font-sans">
                We Care<span className="text-secondary">.</span> We Grow
                <span className="text-secondary">.</span> We Succeed Together
                <span className="text-primary">.</span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
                We believe in empowering our people with the right
                opportunities, resources and environment to achieve their best.
              </p>
            </div>

            {/* Benefits Grid (6 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 xl:gap-6 mb-16">
              {[
                {
                  title: "Competitive Salary",
                  desc: "Attractive pay packages and performance-based incentives.",
                  borderColor: "border-[#fa5902]",
                  accentColor: "#fa5902",
                  icon: (
                    <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                      {/* Wallet/Money Bag Icon */}
                      <path
                        d="M12 40h12l14 8h16a4 4 0 000-8H36l-8-4-10-8H12"
                        stroke="#092a5c"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="42" cy="22" r="10" fill="#fa5902" />
                      <path
                        d="M39 19h6M39 22h6M42 19c-2 0-3 1-3 3s1 2 3 2 3 1 3 3-1 3-3 3M42 16v12"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Career Growth",
                  desc: "Clear career paths with continuous growth opportunities.",
                  borderColor: "border-blue-600",
                  accentColor: "#2563eb",
                  icon: (
                    <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                      {/* Stairs/Climbing Icon */}
                      <path
                        d="M10 50h10V40h10V30h10V20h10"
                        stroke="#092a5c"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M40 12l10 8-10 8"
                        stroke="#fa5902"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="10" cy="50" r="3" fill="#092a5c" />
                    </svg>
                  ),
                },
                {
                  title: "Stable Organization",
                  desc: "Be a part of a financially strong and trusted multinational company.",
                  borderColor: "border-emerald-500",
                  accentColor: "#10b981",
                  icon: (
                    <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                      {/* Building/Shield Icon */}
                      <path
                        d="M16 50V20l16-8 16 8v30"
                        stroke="#092a5c"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 50h40"
                        stroke="#092a5c"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M32 25v15"
                        stroke="#fa5902"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M26 31l6-6 6 6"
                        stroke="#fa5902"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Skill Development",
                  desc: "Regular training, workshops and upskilling to keep you ahead.",
                  borderColor: "border-purple-600",
                  accentColor: "#9333ea",
                  icon: (
                    <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                      {/* Book/Gear Icon */}
                      <path
                        d="M18 12h28v40H18z"
                        stroke="#092a5c"
                        strokeWidth="3.5"
                      />
                      <path d="M18 20h28" stroke="#092a5c" strokeWidth="2" />
                      <circle
                        cx="32"
                        cy="38"
                        r="8"
                        stroke="#fa5902"
                        strokeWidth="3"
                      />
                      <path
                        d="M32 34v8M28 38h8"
                        stroke="#fa5902"
                        strokeWidth="2"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Modern Infrastructure",
                  desc: "Work with advanced machines and world-class facilities.",
                  borderColor: "border-[#fa5902]",
                  accentColor: "#fa5902",
                  icon: (
                    <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                      {/* Factory/Technology Icon */}
                      <path
                        d="M10 50V20l10 10V20l10 10V15l14 10v25H10z"
                        fill="#092a5c"
                      />
                      <rect
                        x="18"
                        y="38"
                        width="6"
                        height="6"
                        fill="white"
                        opacity="0.4"
                      />
                      <rect
                        x="28"
                        y="38"
                        width="6"
                        height="6"
                        fill="white"
                        opacity="0.4"
                      />
                      <circle cx="44" cy="42" r="6" fill="#fa5902" />
                    </svg>
                  ),
                },
                {
                  title: "Professional Environment",
                  desc: "Collaborative culture focused on respect, integrity and teamwork.",
                  borderColor: "border-blue-600",
                  accentColor: "#2563eb",
                  icon: (
                    <svg viewBox="0 0 64 64" className="w-20 h-20" fill="none">
                      {/* People/Handshake Icon */}
                      <circle cx="22" cy="24" r="5" fill="#092a5c" />
                      <circle cx="42" cy="24" r="5" fill="#092a5c" />
                      <path
                        d="M14 44c0-5 4-8 8-8s8 3 8 8M34 44c0-5 4-8 8-8s8 3 8 8"
                        fill="#092a5c"
                      />
                      <path
                        d="M28 30l4 4 4-4"
                        stroke="#fa5902"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[28px] pt-8 pb-6 px-5 shadow-[0_12px_45px_rgba(3,27,64,0.06)] relative overflow-hidden text-center flex flex-col items-center benefit-card-premium group"
                  style={
                    { "--accent-color": b.accentColor } as React.CSSProperties
                  }
                >
                  {/* Shimmer Effect Div */}
                  <div className="shine-effect" />

                  {/* Icon Wrapper */}
                  <div className="benefit-icon-wrapper mb-6 relative z-10">
                    <div className="w-28 h-28 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                      {b.icon}
                    </div>
                  </div>

                  <h3 className="font-black text-[#092a5c] text-[18px] sm:text-[19px] leading-tight text-center relative z-10">
                    {b.title}
                  </h3>
                  <div
                    className={`h-[3px] w-10 mx-auto mt-2 rounded-full relative z-10`}
                    style={{ backgroundColor: b.accentColor }}
                  />
                  <p className="text-[13px] text-slate-500 leading-relaxed font-medium mt-3 text-center relative z-10">
                    {b.desc}
                  </p>

                  {/* Expanding line on hover */}
                  <div
                    className={`absolute bottom-0 left-0 h-[6px] w-0 group-hover:w-full transition-all duration-500 ease-out`}
                    style={{ backgroundColor: b.accentColor }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Growth Banner - Full width, flat corners, screen touching */}
          <div className="w-full bg-primary-dark shadow-xl border-l-[12px] border-secondary border-y border-border">
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row relative overflow-hidden">
              {/* Text & List Section */}
              <div className="flex-1 flex flex-col md:flex-row items-center py-8 md:py-12 z-10">
                {/* Quote & Title */}
                <div className="w-full md:w-auto md:pr-10 mb-8 md:mb-0">
                  <div className="text-secondary text-6xl md:text-7xl font-heading leading-none h-10 mb-2">
                    “
                  </div>
                  <h3 className="text-white font-bold text-3xl md:text-4xl leading-snug tracking-tight mb-5">
                    Your Growth is
                    <br />
                    Our Commitment.
                  </h3>
                  <div className="w-12 h-1 bg-secondary"></div>
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="hidden md:block w-px h-32 bg-slate-700/60 mx-4 lg:mx-8"></div>

                {/* Checkmark List */}
                <div className="w-full md:w-auto md:pl-6 lg:pl-10">
                  <ul className="space-y-5">
                    {[
                      "Recognition & Rewards",
                      "Health & Safety",
                      "Work-Life Balance",
                      "Long-Term Career Opportunities",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4.5">
                        <svg
                          className="w-[28px] h-[28px] text-secondary flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="11"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M7 12.5L10.5 16L17 8"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-white text-[17px] sm:text-[20px] font-bold tracking-wide">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="hidden lg:block lg:w-[45%] xl:w-[40%] relative lg:min-h-full">
                {/* Gradient overlay to smoothly blend dark section and image on both sides */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-transparent to-primary-dark z-10"></div>
                <img
                  src="/careerimg/skilled%20workforce.jpg"
                  alt="Skilled workforce at Pithal Machines"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: GROW YOUR SKILLS ── */}
        <section className="py-0 bg-white relative w-full overflow-hidden">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center min-h-0 lg:min-h-[460px]">
            {/* Left Column - Content */}
            <div className="w-full lg:w-[48%] py-12 lg:py-16 text-left">
              {/* Tag */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-[2px] bg-[#fa5902]"></span>
                <span className="text-[#fa5902] text-lg font-black uppercase tracking-[0.08em]">
                  Training & Growth
                </span>
                <span className="w-6 h-[2px] bg-[#fa5902]"></span>
              </div>

              {/* Heading */}
              <h2 className="text-[36px] sm:text-[44px] md:text-[50px] font-black text-[#092a5c] uppercase tracking-tight leading-[1.08] mb-1 font-sans">
                Grow Your Skills.
              </h2>
              <h2 className="text-[36px] sm:text-[44px] md:text-[50px] font-black text-[#092a5c] uppercase tracking-tight leading-[1.08] mb-5 font-sans">
                Shape <span className="text-[#fa5902]">Your Future.</span>
              </h2>

              {/* Orange Underline */}
              <div className="w-24 h-[1.5px] bg-[#fa5902] mb-6"></div>

              {/* Paragraph */}
              <p className="text-slate-650 text-[14px] sm:text-[15px] leading-relaxed max-w-lg font-medium">
                At Pithal Machines, we invest in your growth. Through structured
                training, real-world projects and continuous learning, we help
                you build a strong foundation for a long-term career.
              </p>
            </div>

            {/* Right Column - Image wrapper */}
            <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block z-0">
              {/* Smooth Fade Transition from Left */}
              <div className="absolute inset-y-0 left-0 w-[120px] bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <img
                src="/careerimg/training-and-upskilling.jpg"
                alt="Training and Growth"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Fallback image for mobile/tablet where absolute column is hidden */}
          <div className="w-full h-[300px] sm:h-[380px] relative lg:hidden z-0">
            <img
              src="/careerimg/training-and-upskilling.jpg"
              alt="Training and Growth"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80";
              }}
            />
          </div>
        </section>

        <section className="py-10 bg-white relative">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            {/* 5-Column Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative z-20 mb-12">
              {[
                {
                  title: "Technical Learning",
                  desc: "Gain hands-on knowledge through structured training programs and real-time manufacturing projects.",
                  img: "/careerimg/technical learning.jpg",
                  iconBg: "bg-blue-50",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  ),
                },
                {
                  title: "Skill Development",
                  desc: "Enhance your technical and industrial skills with continuous learning and upskilling initiatives.",
                  img: "/careerimg/skill development.jpg",
                  iconBg: "bg-orange-50",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ),
                },
                {
                  title: "Industrial Exposure",
                  desc: "Work on diverse machines and projects that give you strong industry exposure.",
                  img: "/careerimg/industry experiendce.jpg",
                  iconBg: "bg-teal-50",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  ),
                },
                {
                  title: "Leadership Growth",
                  desc: "Opportunities to take ownership, lead teams and grow into future leaders of the organization.",
                  img: "/careerimg/leadership growth.jpg",
                  iconBg: "bg-purple-50",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                },
                {
                  title: "Manufacturing Expertise",
                  desc: "Build deep expertise in advanced manufacturing, quality standards and engineering excellence.",
                  img: "/careerimg/manufacturing experience.jpg",
                  iconBg: "bg-red-50",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  ),
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-gray-100 p-5 flex flex-col items-center text-center training-card-hover"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-full ${card.iconBg === "bg-orange-50" ? "bg-secondary/10" : card.iconBg === "bg-blue-50" ? "bg-primary/5" : card.iconBg} text-primary flex items-center justify-center mb-4 transition-all duration-300 training-icon-box`}
                  >
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {card.icon}
                    </svg>
                  </div>

                  {/* Title & Divider */}
                  <h3 className="font-extrabold text-primary text-[13px] uppercase tracking-wider mb-2 h-8 flex items-center justify-center">
                    {card.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-secondary mb-4 rounded-full"></div>

                  {/* Image */}
                  <div className="w-full h-[110px] bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 training-image-box"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-[12px] leading-snug font-medium">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stats Banner - Full width, flat corners, screen touching */}
          <div className="w-full bg-primary-dark shadow-xl py-6 lg:py-8 border-y border-border">
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-20">
              {/* Left Intro text */}
              <div className="flex items-center gap-5 w-full lg:w-auto shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-secondary/30 flex items-center justify-center relative bg-secondary/10">
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wide leading-tight">
                    We Grow Together.
                  </h4>
                  <h4 className="text-secondary font-extrabold text-[15px] uppercase tracking-wide leading-tight mb-1">
                    Your Journey Matters.
                  </h4>
                  <p className="text-gray-400 text-[12px] max-w-[200px] leading-snug">
                    From learning to leadership - we support every step of your
                    career.
                  </p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden lg:block w-px h-16 bg-slate-700/60 mx-2"></div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-6 lg:gap-0 lg:divide-x lg:divide-slate-700/60">
                {[
                  {
                    value: "50+",
                    label: "Training Programs Every Year",
                    iconBg: "bg-blue-500",
                    iconColor: "text-blue-400",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    ),
                  },
                  {
                    value: "200+",
                    label: "Employees Trained Annually",
                    iconBg: "bg-secondary",
                    iconColor: "text-secondary",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    ),
                  },
                  {
                    value: "80%",
                    label: "Internal Growth Opportunities",
                    iconBg: "bg-green-500",
                    iconColor: "text-green-400",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    ),
                  },
                  {
                    value: "1000+",
                    label: "Skills Upgraded Every Year",
                    iconBg: "bg-purple-500",
                    iconColor: "text-purple-400",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    ),
                  },
                  {
                    value: "Future",
                    label: "Ready Careers Built Here",
                    iconBg: "bg-secondary",
                    iconColor: "text-secondary",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    ),
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2 lg:pl-6 lg:first:pl-0 w-full"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full ${stat.iconBg} text-white flex items-center justify-center shrink-0`}
                      >
                        <svg
                          className="w-[22px] h-[22px]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {stat.icon}
                        </svg>
                      </div>
                      <div className="text-secondary font-extrabold text-[22px] leading-none">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-gray-300 text-[12px] font-medium leading-snug text-center lg:px-2">
                      {stat.label.split(" ").map((word, wIdx, arr) => (
                        <span key={wIdx}>
                          {word}
                          {wIdx === Math.floor(arr.length / 2) - 1 ? (
                            <br className="hidden lg:block" />
                          ) : (
                            " "
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 9: YOUR JOURNEY ── */}
        <section className="py-10 bg-[#fafbfd]">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-secondary inline-block" />
                <p className="text-[#092a5c] text-lg sm:text-xl font-black uppercase tracking-[0.08em]">
                  Hiring Process
                </p>
                <span className="w-12 h-0.5 bg-secondary inline-block" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-4 font-sans">
                Your Journey to Pithal Machines
              </h2>

              <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-medium">
                Our structured and transparent hiring process ensures the right
                opportunity <br className="hidden md:block" />
                for both you and our organization.
              </p>
            </div>

            {/* Journey Steps (6 Columns) */}
            <div className="relative mb-12">
              {/* Background Connecting Dotted Line (Desktop Only) */}
              <div className="hidden lg:block absolute top-[48px] left-[8.33%] right-[8.33%] border-t-2 border-dotted border-slate-300 z-0 opacity-80"></div>

              {/* Orange Midpoint Dots (Desktop Only) */}
              <div className="hidden lg:block absolute top-[48px] left-0 right-0 z-0 pointer-events-none">
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#fa5902] border-2 border-white shadow-md"
                  style={{ left: "16.66%" }}
                />
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#fa5902] border-2 border-white shadow-md"
                  style={{ left: "33.33%" }}
                />
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#fa5902] border-2 border-white shadow-md"
                  style={{ left: "50%" }}
                />
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#fa5902] border-2 border-white shadow-md"
                  style={{ left: "66.66%" }}
                />
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#fa5902] border-2 border-white shadow-md"
                  style={{ left: "83.33%" }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
                {[
                  {
                    num: "01",
                    title: "Application",
                    desc: "Submit your application through our careers portal with your updated details.",
                    borderColor: "border-[#fa5902]",
                    accentColor: "#fa5902",
                    icon: (
                      <svg
                        viewBox="0 0 64 64"
                        className="w-14 h-14"
                        fill="none"
                      >
                        <rect
                          x="18"
                          y="10"
                          width="28"
                          height="44"
                          rx="3"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          fill="none"
                        />
                        <path
                          d="M24 20h16M24 28h16M24 36h10"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M38 48l8-8 3 3-8 8h-3v-3z"
                          fill="#fa5902"
                          stroke="#092a5c"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    num: "02",
                    title: "Screening",
                    desc: "Our HR team reviews your application and shortlists suitable profiles.",
                    borderColor: "border-[#092a5c]",
                    accentColor: "#092a5c",
                    icon: (
                      <svg
                        viewBox="0 0 64 64"
                        className="w-14 h-14"
                        fill="none"
                      >
                        <rect
                          x="18"
                          y="14"
                          width="28"
                          height="38"
                          rx="3"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          fill="none"
                        />
                        <path
                          d="M26 14v-4h12v4"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="32"
                          cy="26"
                          r="5"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          fill="none"
                        />
                        <path
                          d="M24 38c0-3.5 3.5-6 8-6s8 2.5 8 6"
                          stroke="#fa5902"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M24 44h16"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    num: "03",
                    title: "Interview",
                    desc: "Initial HR interview to understand your experience, skills and career aspirations.",
                    borderColor: "border-[#10b981]",
                    accentColor: "#10b981",
                    icon: (
                      <svg
                        viewBox="0 0 64 64"
                        className="w-14 h-14"
                        fill="none"
                      >
                        <circle
                          cx="20"
                          cy="26"
                          r="4.5"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M13 39c0-3.5 3-5.5 7-5.5s7 2 7 5.5"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="44"
                          cy="26"
                          r="4.5"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M37 39c0-3.5 3-5.5 7-5.5s7 2 7 5.5"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 45h40M18 45v7M46 45v7"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M24 14h16a4 4 0 014 4v4a4 4 0 01-4 4h-4l-4 4v-4h-4a4 4 0 01-4-4v-4a4 4 0 014-4z"
                          fill="none"
                          stroke="#fa5902"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                        <circle cx="29" cy="19" r="1.5" fill="#fa5902" />
                        <circle cx="32" cy="19" r="1.5" fill="#fa5902" />
                        <circle cx="35" cy="19" r="1.5" fill="#fa5902" />
                      </svg>
                    ),
                  },
                  {
                    num: "04",
                    title: "Technical Round",
                    desc: "Role-specific technical assessment or practical test to evaluate your expertise.",
                    borderColor: "border-[#8b5cf6]",
                    accentColor: "#8b5cf6",
                    icon: (
                      <svg
                        viewBox="0 0 64 64"
                        className="w-14 h-14"
                        fill="none"
                      >
                        <rect
                          x="14"
                          y="16"
                          width="36"
                          height="24"
                          rx="2"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          fill="none"
                        />
                        <path
                          d="M8 40h48c2 0 4 2 4 4v1H4v-1c0-2 2-2 4-4z"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          fill="none"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29 44h6"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M23 25l-4 3 4 3M41 25l4 3-4 3M34 23l-4 10"
                          stroke="#fa5902"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    num: "05",
                    title: "Selection",
                    desc: "Final evaluation by the panel and confirmation of your selection.",
                    borderColor: "border-[#fa5902]",
                    accentColor: "#fa5902",
                    icon: (
                      <svg
                        viewBox="0 0 64 64"
                        className="w-14 h-14"
                        fill="none"
                      >
                        <circle
                          cx="28"
                          cy="22"
                          r="7.5"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          fill="none"
                        />
                        <path
                          d="M12 43c0-6.5 6.5-11 16-11s16 4.5 16 11"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <circle
                          cx="46"
                          cy="38"
                          r="8"
                          fill="white"
                          stroke="#fa5902"
                          strokeWidth="3"
                        />
                        <path
                          d="M42 38l3 3 5-5"
                          stroke="#fa5902"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    num: "06",
                    title: "Onboarding",
                    desc: "Welcome to Pithal Machines! Get onboarded and begin your journey with us.",
                    borderColor: "border-[#3b82f6]",
                    accentColor: "#3b82f6",
                    icon: (
                      <svg
                        viewBox="0 0 64 64"
                        className="w-14 h-14"
                        fill="none"
                      >
                        <path
                          d="M22 38l6 6c1.5 1.5 4 1.5 5.5 0l15-15c1.5-1.5 1.5-4 0-5.5s-4-1.5-5.5 0L28 38l-3-3"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M34 26l-3-3c-1.5-1.5-4-1.5-5.5 0s-1.5 4 0 5.5l3 3"
                          stroke="#092a5c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M32 12v-4M23 16l-3-3M41 16l3-3"
                          stroke="#fa5902"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative group process-step-hover"
                    style={
                      {
                        "--accent-color": step.accentColor,
                      } as React.CSSProperties
                    }
                  >
                    {/* Top Icon Circle */}
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_-3px_rgba(0,0,0,0.08)] border border-gray-100 relative mb-12 z-30 step-icon-box">
                      {step.icon}
                    </div>

                    {/* Content Card */}
                    <div
                      className={`bg-white rounded-xl pt-7 pb-4 px-4 shadow-[0_16px_45px_rgba(15,23,42,0.12)] border-b-[1px] border-slate-100 text-center w-full h-[170px] transition-shadow group-hover:shadow-xl flex flex-col justify-center relative process-card-content z-10`}
                    >
                      {/* Overlapping Number Badge */}
                      <div
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#fa5902] text-white text-[12px] font-black rounded-full flex items-center justify-center border-[3px] border-white shadow-md z-50"
                        style={{ backgroundColor: step.accentColor }}
                      >
                        {step.num}
                      </div>

                      <h4 className="font-extrabold text-primary text-[18px] sm:text-[19px] mb-1">
                        {step.title}
                      </h4>
                      <div
                        className="w-8 h-[2px] mx-auto mb-2.5 rounded-full"
                        style={{ backgroundColor: step.accentColor }}
                      />
                      <p className="text-[14px] sm:text-[14.5px] text-gray-500 leading-relaxed font-medium">
                        {step.desc}
                      </p>

                      {/* Center-expanding bottom line */}
                      <div className="expanding-line" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Features Banner - Full width, flat corners, screen touching */}
          <div className="w-full bg-[#f0f4f8] border-y border-[#e2e8f0] py-10 mt-12 shadow-sm">
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              {[
                {
                  title: "Timely Updates",
                  desc: "We keep you informed at every step of the process.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                },
                {
                  title: "Fair & Transparent",
                  desc: "Merit-based evaluation with a transparent approach.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ),
                },
                {
                  title: "Equal Opportunity",
                  desc: "We value diversity and provide equal opportunities for all.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  ),
                },
                {
                  title: "People First",
                  desc: "We look for talent, attitude and a passion to grow.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  ),
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-start gap-4 lg:pl-2 lg:pr-1 first:pl-0 text-left"
                >
                  <div className="w-20 h-20 rounded-full bg-white border border-slate-200 text-primary flex items-center justify-center shrink-0 shadow-sm">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-primary text-[15px] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[13px] text-gray-500 leading-snug font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 10: BUILD WITH RIGHT FOUNDATION ── */}
        <section className="py-10 bg-[#f8f9fa]">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-secondary inline-block" />
                <p className="text-[#092a5c] text-lg sm:text-xl font-black uppercase tracking-[0.08em]">
                  Eligibility & Qualifications
                </p>
                <span className="w-12 h-0.5 bg-secondary inline-block" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight uppercase mb-4 font-sans">
                Build Your Career With The Right Foundation.
              </h2>

              <p className="text-gray-600 text-base sm:text-lg mt-3 max-w-3xl mx-auto font-medium">
                We welcome talented and motivated individuals who are eager to
                learn, <br className="hidden md:block" />
                grow and contribute to world-class engineering solutions.
              </p>
            </div>

            {/* Qualification Cards Grid (6 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
              {[
                {
                  title: "ITI / Diploma",
                  img: "/careerimg/ITI.jpg",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  ),
                  points: [
                    "ITI in relevant trades",
                    "Diploma in Mechanical / Production / Mechatronics",
                    "Strong hands-on aptitude",
                    "Willingness to learn",
                  ],
                },
                {
                  title: "B.Tech / BE",
                  img: "/careerimg/B TECH.jpg",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  ),
                  points: [
                    "B.Tech / BE in Mechanical, Production, Industrial or related fields",
                    "Strong technical knowledge",
                    "Problem-solving mindset",
                    "Interest in innovation",
                  ],
                },
                {
                  title: "MBA",
                  img: "/careerimg/MBA.jpg",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  points: [
                    "MBA in Marketing, Operations, Finance or related fields",
                    "Strategic thinking",
                    "Leadership potential",
                    "Analytical approach",
                  ],
                },
                {
                  title: "Industry Experience",
                  img: "/careerimg/Industry experiendce.jpg",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z M19 11l-2 2-3-3"
                    />
                  ),
                  points: [
                    "Relevant experience in manufacturing industry",
                    "Understanding of industrial processes",
                    "Ability to work in dynamic environments",
                    "Result-driven approach",
                  ],
                },
                {
                  title: "Technical Skills",
                  img: "/careerimg/technical skills.jpg",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ),
                  points: [
                    "Knowledge of machines, tools & processes",
                    "CAD/CAM knowledge (preferred)",
                    "Quality & safety awareness",
                    "Continuous improvement mindset",
                  ],
                },
                {
                  title: "Communication Skills",
                  img: "/careerimg/communication skillsexplosure.jpg",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                  points: [
                    "Clear verbal & written communication",
                    "Team collaboration",
                    "Professional attitude",
                    "Adaptability & openness",
                  ],
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-[0_16px_42px_rgba(15,23,42,0.12)] border border-gray-100 overflow-hidden flex flex-col qualification-card-hover group"
                >
                  {/* Top Icon & Title Area */}
                  <div className="pt-6 pb-4 px-4 flex flex-col items-center justify-center">
                    <div className="w-[52px] h-[52px] rounded-full border-2 border-primary/10 flex items-center justify-center text-primary mb-3 transition-all duration-300 qual-icon-box">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {card.icon}
                      </svg>
                    </div>
                    <h3 className="font-extrabold text-primary text-[13px] uppercase tracking-wide text-center">
                      {card.title}
                    </h3>
                  </div>

                  {/* Middle Image */}
                  <div className="h-[120px] w-full bg-slate-200 relative overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  {/* Bottom List Area */}
                  <div className="p-5 flex-1 bg-white">
                    <ul className="space-y-3">
                      {card.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <svg
                            className="w-[15px] h-[15px] text-secondary mt-[2px] shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M8 12.5L10.5 15L16 9"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[12px] text-gray-700 font-medium leading-snug">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner - Full width, flat corners, screen touching */}
          <div className="w-full bg-primary-dark overflow-hidden flex flex-col lg:flex-row shadow-xl border-y border-border">
            {/* Left side: Image */}
            <div className="w-full lg:w-[28%] relative min-h-[250px] lg:min-h-[auto]">
              <img
                src="careerimg/32.jpg"
                alt="Worker"
                className="absolute inset-0 w-full h-full object-cover object-[2%_top]"
              />
              {/* Double-sided gradient fade */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primary-dark via-transparent to-primary-dark z-10"></div>
            </div>

            {/* Content columns aligned with container bounds */}
            <div className="flex-1 flex flex-col lg:flex-row lg:pr-[max(1.25rem,calc((100vw-1520px)/2+1.25rem))]">
              {/* Middle side: Quote */}
              <div className="w-full lg:w-[45%] p-8 lg:py-12 lg:px-10 flex flex-col justify-center relative z-10">
                <div className="text-secondary text-6xl lg:text-7xl font-heading leading-none h-8 lg:h-10 mb-2">
                  “
                </div>
                <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-1 tracking-tight">
                  We look for potential.
                </h3>
                <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-6 tracking-tight">
                  We build the future.
                </h3>
                <div className="w-12 h-[3px] bg-secondary"></div>
              </div>

              {/* Right side: 4 Traits Grid */}
              <div className="w-full lg:w-[55%] p-8 lg:py-12 lg:pr-12 lg:pl-0 flex flex-col justify-center">
                <div className="flex flex-col divide-y divide-slate-700/40">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 sm:divide-x sm:divide-slate-700/40 pb-6 lg:pb-8">
                    {/* Passion to Learn */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center shrink-0 text-white mt-1">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z M19 11l-2 2-3-3"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[16px] sm:text-[17px] mb-1.5 leading-snug">
                          Passion to Learn
                        </h4>
                        <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed">
                          A strong desire to learn and grow every day.
                        </p>
                      </div>
                    </div>
                    {/* Team Player */}
                    <div className="flex items-start gap-4 sm:pl-6 lg:pl-8">
                      <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center shrink-0 text-white mt-1">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[16px] sm:text-[17px] mb-1.5 leading-snug">
                          Team Player
                        </h4>
                        <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed">
                          Work collaboratively and support team success.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 sm:divide-x sm:divide-slate-700/40 pt-6 lg:pt-8">
                    {/* Positive Attitude */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center shrink-0 text-white mt-1">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[16px] sm:text-[17px] mb-1.5 leading-snug">
                          Positive Attitude
                        </h4>
                        <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed">
                          A can-do attitude and willingness to take on
                          challenges.
                        </p>
                      </div>
                    </div>
                    {/* Commitment to Excellence */}
                    <div className="flex items-start gap-4 sm:pl-6 lg:pl-8">
                      <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center shrink-0 text-white mt-1">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[16px] sm:text-[17px] mb-1.5 leading-snug">
                          Commitment to Excellence
                        </h4>
                        <p className="text-[13px] sm:text-[14px] text-gray-400 leading-relaxed">
                          Deliver quality and strive for excellence in all you
                          do.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 11: TESTIMONIALS ── */}
        <section className="py-10 bg-[#fafbfd]">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-12 h-0.5 bg-secondary inline-block" />
                <p className="text-[#092a5c] text-lg sm:text-xl font-black uppercase tracking-[0.08em]">
                  Employee Testimonials
                </p>
                <span className="w-12 h-0.5 bg-secondary inline-block" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-4 font-sans">
                Real People<span className="text-secondary">.</span> Real Growth
                <span className="text-secondary">.</span> Real Impact
                <span className="text-secondary">.</span>
              </h2>

              <p className="text-primary text-base sm:text-lg mt-4 font-medium max-w-2xl mx-auto leading-relaxed">
                Our people are at the heart of everything we do.
                <br />
                <span className="text-gray-500">
                  Here&apos;s what they have to say about their journey at
                  Pithal Machines.
                </span>
              </p>
            </div>

            {/* Testimonials Grid (4 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  quote:
                    "Working at Pithal Machines has helped me grow technically and professionally through real industrial exposure.",
                  name: "Rahul Patil",
                  role: "CNC Operator",
                  years: "5+ Years at Pithal",
                  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                },
                {
                  quote:
                    "The supportive environment and continuous learning opportunities have strengthened my skills and confidence.",
                  name: "Sneha Jadhav",
                  role: "Design Engineer",
                  years: "3+ Years at Pithal",
                  img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
                },
                {
                  quote:
                    "I enjoy working on challenging projects and collaborating with a talented team that always pushes for excellence.",
                  name: "Akash More",
                  role: "Production Supervisor",
                  years: "6+ Years at Pithal",
                  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
                },
                {
                  quote:
                    "Pithal Machines gives me the platform to learn, innovate and grow my career in the right direction.",
                  name: "Priya Deshmukh",
                  role: "Marketing Executive",
                  years: "2+ Years at Pithal",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[20px] p-8 shadow-[0_16px_40px_rgba(15,23,42,0.08)] border border-slate-100 flex flex-col h-full relative transition-all duration-300 testimonial-card-hover"
                >
                  {/* Top Quotes Icon */}
                  <div className="absolute top-8 right-8 text-[#fa5902] font-heading text-5xl leading-none opacity-80 transition-all duration-500 quote-icon">
                    “
                  </div>

                  {/* Quote Text */}
                  <p className="text-[#092a5c] text-[16px] font-bold leading-relaxed mb-6 flex-1 relative z-10 pr-6">
                    “{t.quote}”
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-100 mb-6"></div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-slate-100 rounded-[14px] overflow-hidden shrink-0 border-2 border-slate-100 transition-all duration-300 profile-img-container">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const fallbacks = [
                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", // Rahul (Man with glasses)
                            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80", // Sneha (Woman)
                            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80", // Akash (Man)
                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80", // Priya (Woman)
                          ];
                          e.currentTarget.src = fallbacks[i] || fallbacks[0];
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-black text-[#092a5c] text-[16px] sm:text-[17px] leading-tight mb-1 transition-colors duration-300">
                        {t.name}
                      </h4>
                      <p className="text-slate-500 text-[13px] font-semibold leading-none mb-1">
                        {t.role}
                      </p>
                      <p className="text-slate-400 text-[12px] font-medium leading-none mb-2">
                        {t.years}
                      </p>

                      {/* Star Rating */}
                      <div className="flex gap-[2px]">
                        {[...Array(5)].map((_, j) => (
                          <svg
                            key={j}
                            className="w-[15px] h-[15px] text-[#fa5902] fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 12: FINAL CTA ── */}
        <section className="pt-10 pb-0 bg-[#f8f9fa] w-full">
          <div className="bg-white border-y border-[#e2e8f0] shadow-[0_16px_48px_rgba(15,23,42,0.04)] rounded-none overflow-hidden w-full">
            {/* Top Main Section */}
            <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 py-8 lg:py-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-2">
              {/* Left Side: Logo & Text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:w-[42%] w-full shrink-0">
                {/* Circular Logo */}
                <Image
                  src="/images/brand/pithal-logo.png"
                  alt="Pithal Machines Logo"
                  width={220}
                  height={94}
                  className="object-contain shrink-0"
                />

                <div className="text-center sm:text-left">
                  <h2 className="text-[28px] lg:text-[31px] font-extrabold text-[#092a5c] tracking-tight leading-[1.1] font-sans uppercase">
                    Build Your Future
                  </h2>
                  <h2 className="text-[28px] lg:text-[31px] font-extrabold text-[#fa5902] tracking-tight leading-[1.1] mb-3 font-sans uppercase">
                    With Pithal Machines.
                  </h2>
                  <p className="text-[#5a6e85] text-[13px] md:text-[14px] font-medium leading-relaxed max-w-sm">
                    Join a team that builds innovative solutions, drives
                    industrial progress and creates long-term impact.
                  </p>
                </div>
              </div>

              {/* Middle Vertical Divider (Desktop only) */}
              <div className="hidden lg:block w-px h-28 bg-[#e2e8f0] shrink-0 mx-6"></div>

              {/* Middle: 4 Icons Section */}
              <div className="flex flex-row items-stretch justify-between lg:w-[36%] w-full py-4 lg:py-0 divide-x divide-slate-100">
                {[
                  {
                    title: "CAREER\nGROWTH",
                    icon: (
                      <svg
                        className="w-[38px] h-[38px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="14"
                          width="3"
                          height="6"
                          rx="1"
                          fill="#092a5c"
                        />
                        <rect
                          x="9"
                          y="10"
                          width="3"
                          height="10"
                          rx="1"
                          fill="#092a5c"
                        />
                        <rect
                          x="15"
                          y="5"
                          width="3"
                          height="15"
                          rx="1"
                          fill="#092a5c"
                        />
                        <path
                          d="M 3 15 L 9 9 L 14 11 L 21 3"
                          stroke="#fa5902"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M 17 3 H 21 V 7"
                          stroke="#fa5902"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "CONTINUOUS\nLEARNING",
                    icon: (
                      <svg
                        className="w-[38px] h-[38px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 3L2 8L12 13L22 8L12 3Z"
                          stroke="#092a5c"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 10.5V16.5C6 16.5 8.5 19.5 12 19.5C15.5 19.5 18 16.5 18 16.5V10.5"
                          stroke="#092a5c"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 9.5V15.5"
                          stroke="#fa5902"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <circle cx="20" cy="16.5" r="1.5" fill="#fa5902" />
                      </svg>
                    ),
                  },
                  {
                    title: "INDUSTRIAL\nEXPOSURE",
                    icon: (
                      <svg
                        className="w-[38px] h-[38px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 21V9L14 6V11L9 8V13L4 10V21H19Z"
                          stroke="#092a5c"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="6"
                          y="15"
                          width="2"
                          height="3"
                          fill="#fa5902"
                        />
                        <rect
                          x="11"
                          y="15"
                          width="2"
                          height="3"
                          fill="#fa5902"
                        />
                        <circle cx="16.5" cy="13.5" r="1" fill="#fa5902" />
                      </svg>
                    ),
                  },
                  {
                    title: "FUTURE\nOPPORTUNITIES",
                    icon: (
                      <svg
                        className="w-[38px] h-[38px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="7"
                          r="4"
                          stroke="#092a5c"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 18C2 14.5 5 13 8 13C11 13 14 14.5 14 18V20H2V18Z"
                          stroke="#092a5c"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="16"
                          cy="7"
                          r="3.5"
                          stroke="#fa5902"
                          strokeWidth="2"
                        />
                        <path
                          d="M12.5 13.5C13.5 12.8 14.8 12.5 16 12.5C18.5 12.5 21.5 13.5 21.5 16.5V18.5"
                          stroke="#fa5902"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center justify-center text-center px-1"
                  >
                    <div className="mb-3 flex items-center justify-center h-[40px]">
                      {item.icon}
                    </div>
                    <h4 className="text-[#092a5c] text-[10.5px] font-extrabold uppercase tracking-wider whitespace-pre-line leading-tight">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Right Vertical Divider (Desktop only) */}
              <div className="hidden lg:block w-px h-28 bg-[#e2e8f0] shrink-0 mx-6"></div>

              {/* Right Side: Action Buttons */}
              <div className="flex flex-col gap-3 lg:w-[22%] w-full shrink-0">
                <a
                  href="#"
                  className="w-full flex items-center justify-between h-[52px] bg-[#fa5902] text-white rounded-xl font-bold uppercase tracking-wider text-[12px] px-6 transition-all hover:bg-[#e04f02] shadow-[0_4px_15px_rgba(250,89,2,0.15)] group"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span>Upload Your CV</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                <a
                  href="#openings"
                  className="w-full flex items-center justify-between h-[52px] bg-white text-[#092a5c] border-2 border-[#092a5c] rounded-xl font-bold uppercase tracking-wider text-[12px] px-6 transition-all hover:bg-slate-50 group"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#092a5c]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Explore Open Positions</span>
                  </div>
                  <svg
                    className="w-4 h-4 text-[#092a5c] transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom Bar Section */}
            <div className="bg-[#f8f9fa] border-t border-[#e2e8f0] py-5">
              <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row justify-between items-center gap-4 lg:divide-x lg:divide-slate-200/80">
                {[
                  {
                    text: "Excellent Professionals",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#092a5c]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.75}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    text: "Advanced Manufacturing Environment",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#092a5c]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.75}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    text: "Continuous Learning Culture",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#092a5c]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.75}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    ),
                  },
                  {
                    text: "Growth-Focused Opportunities",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#092a5c]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.75}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6 M4 12v8m4-5v5m4-8v8"
                        />
                      </svg>
                    ),
                  },
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 justify-center w-full lg:w-auto ${idx !== 0 ? "lg:pl-6" : ""}`}
                  >
                    <div className="flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-[#334155] text-[13px] font-semibold tracking-wide">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .careers-page {
            scroll-behavior: smooth;
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
