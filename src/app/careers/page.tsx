"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Users, Settings, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "300+", label: "Team Members Worldwide" },
  { value: "24/7", label: "Operational Support" },
  { value: "MULTIPLE", label: "Departments & Roles" },
  { value: "Growth", label: "Career Development Programs" },
];

const heroStats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M5 20h14M8 20V12m8 8V12"
          stroke="var(--secondary)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M4 9.5h4M16 9.5h4M7 4.5h10"
          stroke="var(--secondary)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    value: "300+",
    title: "Employees",
    desc: "Driven by skill. United by purpose.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <circle cx="12" cy="12" r="9" stroke="var(--secondary)" strokeWidth="1.8" />
        <path
          d="M12 7.5v4.5l3 1.5"
          stroke="var(--secondary)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    value: "24/7",
    title: "Manufacturing",
    desc: "Round-the-clock operations built on precision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <rect
          x="4"
          y="7"
          width="16"
          height="10"
          rx="2"
          stroke="var(--secondary)"
          strokeWidth="1.8"
        />
        <path
          d="M8 11h3M8 15h3"
          stroke="var(--secondary)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15 11h2M15 15h2"
          stroke="var(--secondary)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    value: "Multiple",
    title: "Departments",
    desc: "Engineering, Production, Sales, Service & more.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M5 16l4-4 3 3 7-7"
          stroke="var(--secondary)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: "Growth",
    title: "Opportunities",
    desc: "Build your career with continuous learning.",
  },
];

const advantages = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path
          d="M10 22L16 16L24 24L30 18"
          stroke="var(--secondary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 28H33"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Career Growth",
    desc: "Clear career paths, performance recognition and opportunities to grow with the organization.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" stroke="var(--secondary)" strokeWidth="2" />
        <path
          d="M12 20h16M20 12v16"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Stable & Trusted Organization",
    desc: "Be part of a financially strong, professionally managed multinational company.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect
          x="10"
          y="10"
          width="20"
          height="20"
          rx="3"
          stroke="var(--secondary)"
          strokeWidth="2"
        />
        <path
          d="M14 18h12M14 24h12"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Industrial Exposure",
    desc: "Work on challenging projects and gain hands-on experience across industries.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path
          d="M12 30V18L20 10L28 18V30"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22H24"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Advanced Manufacturing",
    desc: "Leverage cutting-edge technology, modern systems and world-class manufacturing processes.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path
          d="M20 10L20 18"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 26H28"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14 14L18 18L14 22"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 14L22 18L26 22"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Learning Opportunities",
    desc: "Continuous learning through training, certifications, workshops and knowledge sharing.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="14" r="5" stroke="var(--secondary)" strokeWidth="2" />
        <path
          d="M10 30C10 24 14 20 20 20C26 20 30 24 30 30"
          stroke="var(--secondary)"
          strokeWidth="2"
        />
        <path
          d="M16 30H24"
          stroke="var(--secondary)"
          strokeWidth="2"
          strokeLinecap="round"
        />
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
    exp: "8–12 Yrs",
    location: "Rajasthan",
    type: "Full Time",
    department: "Management",
    salary: "₹18 – 24 LPA",
    openings: "01",
    hot: true,
  },
  {
    title: "CNC Operator",
    exp: "2–5 Yrs",
    location: "Rajasthan",
    type: "Full Time",
    department: "Production & Technical",
    salary: "₹40,000+",
    openings: "10",
    hot: false,
  },
  {
    title: "Technical Coordinator",
    exp: "3–6 Yrs",
    location: "Rajasthan",
    type: "Full Time",
    department: "Office & Coordination",
    salary: "₹75,000+",
    openings: "07",
    hot: false,
  },
  {
    title: "Sr. Accountant",
    exp: "4–8 Yrs",
    location: "Rajasthan",
    type: "Full Time",
    department: "Office & Coordination",
    salary: "₹30,000+",
    openings: "02",
    hot: false,
  },
  {
    title: "Marketing Manager",
    exp: "5–9 Yrs",
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
  { value: "300+", label: "Team Members" },
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
  const [filterDept, setFilterDept] = useState("All Departments");

  return (
    <>
      <Header />
      <main className="careers-page bg-white text-gray-900 font-sans overflow-x-hidden">
        
        {/* ── SECTION 1: HERO ── */}
        <section className="relative overflow-hidden bg-white pt-4 pb-12 text-primary lg:pt-6 lg:pb-16">
          <Image
                  alt="Pithal Machines manufacturing and team"
                  className="object-cover object-center"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  src="/careerimg/20.jpg"
                />
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-45" />
          <div className="pointer-events-none absolute right-0 top-0 h-[58%] w-[55%] rounded-bl-[55%] border-l border-secondary/25 border-b border-secondary/25" />

          <div className="relative z-10 mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-secondary">Careers</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-secondary">
                  CAREERS
                </div>

                <h1 className="headline text-[clamp(2.15rem,5vw,3.3rem)] text-white leading-[0.92] mb-4">
                  BUILD MACHINES. <br />
                  FOR A <span className="text-secondary">STRONGER FUTURE.</span>
                </h1>

                <span
                  aria-hidden
                  className="mt-6 block h-[2px] w-14 bg-secondary"
                />

                <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/90 mb-6">
                  Join Pithal Machines and be part of a team that engineers
                  high-performance solutions and powers industries across the
                  globe.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    href="#openings"
                    variant="primary"
                    className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5"
                  >
                    EXPLORE OPPORTUNITIES
                    <ChevronRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Button>
                  <Button
                    href="#about"
                    variant="outlineNavy"
                    className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5"
                  >
                    LIFE AT PITHAL
                  </Button>
                </div>
              </div>

              
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10 pb-0 pt-4">
            <div className="grid gap-4 rounded-xl border border-white/10 bg-white/50 p-3 text-white shadow-[0_28px_80px_rgba(9,25,59,0.22)] sm:grid-cols-2 xl:grid-cols-4 sm:p-4">
              {heroStats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-primary-dark/90 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                      {item.value}
                    </div>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 2: ADVANTAGES ── */}
        <section className="py-16 bg-white">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-14">
              <p className="text-secondary text-xs font-bold uppercase tracking-[0.35em] mb-3">
                WHY JOIN PITHAL MACHINES
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight font-sans">
                Advantages That Shape Your Future
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 text-slate-500">
                At Pithal Machines, we empower you with opportunities,
                resources, and a culture that helps you grow, innovate and
                achieve more every day.
              </p>
              <div className="mx-auto mt-6 h-1 w-24 bg-secondary rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {advantages.map((a, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.14)] transition hover:-translate-y-1"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                    {a.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 mb-3">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-500">{a.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-xl bg-primary-dark border border-slate-800 px-6 py-8 shadow-[0_28px_80px_rgba(15,23,42,0.24)]">
              <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-center">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 21h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 21V10.5C7 9.675 7.675 9 8.5 9h7c.825 0 1.5.675 1.5 1.5V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9.5 9V6.5a3.5 3.5 0 0 1 7 0V9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] font-bold text-secondary mb-2">
                      We don&apos;t just build machines.
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-white leading-tight">
                      We build people, capabilities and a better tomorrow
                      together.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-slate-800 pt-5 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                  {[
                    { icon: "👥", label: "Employee Focused" },
                    { icon: "🏆", label: "Excellence Driven" },
                    { icon: "💡", label: "Innovation Led" },
                    { icon: "🌍", label: "Global Opportunities" },
                  ].map((item, idx) => (
                    <div key={idx} className="text-left sm:text-center">
                      <div className="text-xl">{item.icon}</div>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300">
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
        <section id="about" className="py-16 bg-gray-50/50">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center mb-8">
              {/* Left text */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-[1.5px] w-6 bg-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-secondary">
                    LIFE AT PITHAL
                  </span>
                </div>
                <h2 className="text-3xl sm:text-[2.6rem] font-black text-primary leading-[1.08] tracking-tight uppercase mb-6">
                  A Place to Grow.
                  <br />
                  <span className="text-secondary">A Team to Inspire.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8 text-xs sm:text-[13px] font-medium max-w-xl">
                  At Pithal Machines, we foster a culture of collaboration,
                  innovation and continuous improvement. Here, every
                  individual plays a part in building world-class solutions
                  that power industries worldwide.
                </p>

                {/* Stat pills (Redesigned as Feature Cards from image) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                        className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm flex flex-col items-center justify-between min-h-[145px]"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-50 text-secondary border border-slate-100 mb-3">
                          <Icon size={20} className="text-secondary stroke-[1.8]" />
                        </div>
                        <h4 className="text-[9px] font-black uppercase tracking-wider text-primary leading-tight">
                          {card.title}
                        </h4>
                        <p className="text-[9px] text-slate-400 font-medium mt-1.5 leading-normal">
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
                    <div className="bg-[#031b40] py-3 text-center border-t border-[#031b40]">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white">
                        {img.alt}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* bottom Gallery Grid Row (4 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-200">
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
                  <div className="bg-[#031b40] py-3 text-center border-t border-[#031b40]">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white">
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: EXPLORE ROLES ── */}
        <section className="py-16 bg-white">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-secondary text-xs font-bold uppercase tracking-[0.35em] mb-2">
                DEPARTMENTS & OPPORTUNITIES
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight font-sans">
                Explore Roles. Build Your Career.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 text-slate-500">
                At Pithal Machines, we offer diverse career opportunities across
                departments. Find the right path that fits your skills and
                ambitions.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Management Card */}
              <div className="rounded-lg bg-white border border-slate-200 shadow-[0_22px_55px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col h-full">
                <div className="p-8 text-center flex-1 flex flex-col">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7"
                      aria-hidden
                    >
                      <path
                        d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 uppercase mb-4">
                    Management Roles
                  </h3>
                  <div className="overflow-hidden rounded-lg mb-6 h-40 relative">
                    <Image
                      src="/careerimg/management roles.jpg"
                      alt="Management"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-0 divide-y mt-auto">
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Vice President – Marketing
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Vice President – Technical
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Vice President – Commercial
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/5 border-t border-slate-100 px-6 py-4 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-white shadow">
                    <svg
                      viewBox="0 0 20 20"
                      className="w-6 h-6 text-primary"
                      fill="none"
                    >
                      <path
                        d="M10 3v8"
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 16h8"
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">
                      Lead teams. Drive strategy.
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Create impact at the highest level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Card */}
              <div className="rounded-lg bg-white border border-slate-200 shadow-[0_22px_55px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col h-full">
                <div className="p-8 text-center flex-1 flex flex-col">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7"
                      aria-hidden
                    >
                      <path
                        d="M4 7h16M4 12h16M4 17h16"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 uppercase mb-4">
                    Office & Coordination Roles
                  </h3>
                  <div className="overflow-hidden rounded-lg mb-6 h-40 relative">
                    <Image
                      src="/careerimg/office and coordination roles.jpg"
                      alt="Office"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-0 divide-y mt-auto">
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Technical Coordinator
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Marketing Manager
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Commercial Coordinator
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Marketing Executive
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/5 px-6 py-4 flex items-center gap-4 border-t border-slate-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-white shadow">
                    <svg
                      viewBox="0 0 20 20"
                      className="w-6 h-6 text-secondary"
                      fill="none"
                    >
                      <path
                        d="M3 10h14"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 6h6v8"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">
                      Support operations. Drive coordination.
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Be the force behind our success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Production Card */}
              <div className="rounded-lg bg-white border border-slate-200 shadow-[0_22px_55px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col h-full">
                <div className="p-8 text-center flex-1 flex flex-col">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-7 h-7"
                      aria-hidden
                    >
                      <path
                        d="M3 13h18M6 6h12M6 20h12"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 uppercase mb-4">
                    Production & Technical Roles
                  </h3>
                  <div className="overflow-hidden rounded-lg mb-6 h-40 relative">
                    <Image
                      src="/careerimg/production & technical roles.jpg"
                      alt="Production"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-0 divide-y mt-auto">
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          VMC Operator
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          CNC Operator
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-700">
                          Boring Machine Operator
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          className="w-4 h-4 text-secondary/70"
                          fill="none"
                        >
                          <path
                            d="M6 4l6 6-6 6"
                            stroke="var(--secondary)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/5 px-6 py-4 flex items-center gap-4 border-t border-slate-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-white shadow">
                    <svg
                      viewBox="0 0 20 20"
                      className="w-6 h-6 text-secondary"
                      fill="none"
                    >
                      <path
                        d="M4 12h12"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 6h8v8"
                        stroke="var(--secondary)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">
                      Build with precision. Operate with excellence.
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      Power the machines that power industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-white border border-slate-100 shadow-[0_22px_55px_rgba(15,23,42,0.12)] px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
        <section id="openings" className="py-16 bg-gray-50">
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">
                WE ARE HIRING
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary font-sans">
                Current Openings
              </h2>
              <div className="w-16 h-1 bg-secondary mx-auto mt-4" />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-lg p-4 shadow-lg mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <label className="sr-only">Search</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                        <path
                          d="M21 21l-4.35-4.35"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="11"
                          cy="11"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Search job title or keyword"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={filterDept}
                    onChange={(e) => setFilterDept(e.target.value)}
                    className="border border-gray-200 rounded px-4 py-3 text-sm bg-white"
                  >
                    <option>All Departments</option>
                    <option>Management</option>
                    <option>Office & Coordination</option>
                    <option>Production & Technical</option>
                  </select>
                  <select className="border border-gray-200 rounded px-4 py-3 text-sm bg-white">
                    <option>All Experience</option>
                    <option>0–2 Yrs</option>
                    <option>3–5 Yrs</option>
                    <option>5+ Yrs</option>
                  </select>
                  <select className="border border-gray-200 rounded px-4 py-3 text-sm bg-white">
                    <option>All Locations</option>
                    <option>Rajasthan</option>
                    <option>Gujarat</option>
                  </select>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setFilterDept("");
                    }}
                    className="ml-2 text-sm text-sky-600"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Openings list */}
            <div className="space-y-4">
              {openings
                .filter((o) =>
                  o.title.toLowerCase().includes(searchTerm.toLowerCase()),
                )
                .map((job, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gray-100 rounded-xl p-5 shadow-[0_16px_45px_rgba(15,23,42,0.10)] hover:shadow-xl transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                  >
                    {/* Role & Department */}
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${job.hot ? "bg-secondary/10 text-secondary" : "bg-primary/5 text-primary"}`}
                      >
                        {/* Role Icon */}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-7 h-7"
                        >
                          <path
                            d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-[17px] font-bold text-primary">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          <span
                            className={`text-[13px] font-medium ${job.hot ? "text-secondary" : "text-primary"}`}
                          >
                            {job.department || "Production & Technical"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-3 md:w-1/6">
                      <div className="text-gray-600 border border-gray-200 rounded-full p-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[13px] text-gray-500 mb-0.5">
                          Experience
                        </div>
                        <div className="text-[14px] font-semibold text-primary">
                          {job.exp || "10+ Years"}
                        </div>
                      </div>
                    </div>

                    {/* Salary Range */}
                    <div className="flex items-center gap-3 md:w-1/6">
                      <div className="text-gray-600 border border-gray-200 rounded-full p-2">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[13px] text-gray-500 mb-0.5">
                          Salary Range
                        </div>
                        <div className="text-[14px] font-semibold text-primary">
                          {job.salary || "₹40,000+"}
                        </div>
                      </div>
                    </div>

                    {/* Openings */}
                    <div className="flex items-center gap-3 md:w-1/6">
                      <div className="text-gray-600 border border-gray-200 rounded-full p-2">
                        <svg
                          className="w-5 h-5"
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
                        <div className="text-[13px] text-gray-500 mb-0.5">
                          Openings
                        </div>
                        <div className="text-[14px] font-semibold text-primary">
                          {job.openings || "01"}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col items-center justify-center shrink-0 w-32 gap-2">
                      <Button
                        href="#"
                        variant="primary"
                        className="w-full h-10 min-h-0 flex items-center justify-center gap-2 text-[11px] font-bold tracking-wider"
                      >
                        Apply Now
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Button>
                      <Button
                        href="#"
                        variant="ghost"
                        className="w-full h-8 min-h-0 text-[11px] font-bold text-primary hover:text-secondary"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
            </div>

            {/* Bottom notice */}
            <div className="mt-10 text-center border border-dashed border-gray-300 rounded-lg p-8">
              <p className="text-gray-500 text-sm mb-2 font-medium">
                Can&apos;t see the right role?
              </p>
              <p className="text-gray-400 text-xs mb-5">
                Drop your resume and we&apos;ll reach out when a relevant opportunity
                opens up.
              </p>
              <Button
                href="mailto:careers@pithalmachines.com"
                variant="primary"
                className="inline-flex items-center gap-2"
              >
                Send Your Resume
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <path
                    d="M4 10h12M10 4l6 6-6 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: POWERED BY PEOPLE ── */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-secondary" />
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">
                  Our Manufacturing Strength
                </p>
                <div className="w-12 h-[2px] bg-secondary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight mb-4 font-sans">
                Powered by People. Driven by Precision.
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-[15px]">
                At Pithal Machines, our advanced infrastructure, skilled
                workforce and cutting-edge technology{" "}
                <br className="hidden md:block" />
                come together to deliver world-class engineering solutions.
              </p>
            </div>

            {/* Top Stats */}
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-12">
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
                  value: "300+",
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
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {stat.icon}
                    </svg>
                  </div>
                  <div>
                    <div className="text-[22px] font-extrabold text-secondary leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1">
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
                { title: "CNC OPERATIONS", img: "/careerimg/cnc operation.jpg" },
                { title: "WELDING", img: "/careerimg/welding.jpg" },
                { title: "ASSEMBLY", img: "/careerimg/manufacturing experience.jpg" },

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

            {/* Bottom Features Banner */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xl flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-6">
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
                <div key={i} className="flex items-start gap-4 max-w-[220px]">
                  <div className="text-primary shrink-0">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {feature.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-primary leading-tight mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-[12px] text-gray-500 leading-snug">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: EMPLOYEE BENEFITS ── */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Header Section */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-secondary" />
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">
                  Employee Benefits
                </p>
                <div className="w-12 h-[2px] bg-secondary" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4 font-sans">
                We Care<span className="text-secondary">.</span> We Grow
                <span className="text-secondary">.</span> We Succeed Together
                <span className="text-primary">.</span>
              </h2>

              <p className="text-gray-600 text-[15px] mt-4 max-w-2xl mx-auto">
                We believe in empowering our people with the right
                opportunities, resources and environment to achieve their best.
              </p>
            </div>

            {/* Benefits Grid (6 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 xl:gap-6 mb-16">
              {[
                {
                  title: "Competitive\nSalary",
                  desc: "Attractive pay packages and performance-based incentives.",
                  borderColor: "border-secondary",
                  icon: (
                    <div className="relative flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4 mx-auto group-hover:-translate-y-1 transition-transform">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div className="absolute top-0 right-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        ₹
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Career\nGrowth",
                  desc: "Clear career paths with continuous growth opportunities.",
                  borderColor: "border-blue-600",
                  icon: (
                    <div className="relative flex items-center justify-center w-16 h-16 bg-primary/5 rounded-full mb-4 mx-auto group-hover:-translate-y-1 transition-transform">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 12v8m4-5v5m4-8v8"
                        />
                      </svg>
                      <div className="absolute top-1 right-1 w-4 h-4 text-secondary">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 3l-6 6-4-4-8 8v5l8-8 4 4 8-8z" />
                        </svg>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Stable\nOrganization",
                  desc: "Be a part of a financially strong and trusted multinational company.",
                  borderColor: "border-emerald-400",
                  icon: (
                    <div className="relative flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-4 mx-auto group-hover:-translate-y-1 transition-transform">
                      <svg
                        className="w-9 h-9 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                      <div className="absolute top-1 right-1 w-4 h-4 bg-secondary rounded-full flex items-center justify-center text-white text-[10px]">
                        ✓
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Skill\nDevelopment",
                  desc: "Regular training, workshops and upskilling to keep you ahead.",
                  borderColor: "border-purple-500",
                  icon: (
                    <div className="relative flex items-center justify-center w-16 h-16 bg-purple-50 rounded-full mb-4 mx-auto group-hover:-translate-y-1 transition-transform">
                      <svg
                        className="w-9 h-9 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 14l9-5-9-5-9 5 9 5z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="absolute bottom-2 -right-1 w-3 h-6 bg-secondary rounded-sm"></div>
                    </div>
                  ),
                },
                {
                  title: "Modern\nInfrastructure",
                  desc: "Work with advanced machines and world-class facilities.",
                  borderColor: "border-red-500",
                  icon: (
                    <div className="relative flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-4 mx-auto group-hover:-translate-y-1 transition-transform">
                      <svg
                        className="w-9 h-9 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <div className="absolute bottom-1 right-0 text-secondary">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                          <path
                            fillRule="evenodd"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "Professional\nEnvironment",
                  desc: "Collaborative culture focused on respect, integrity and teamwork.",
                  borderColor: "border-blue-400",
                  icon: (
                    <div className="relative flex items-center justify-center w-16 h-16 bg-primary/5 rounded-full mb-4 mx-auto group-hover:-translate-y-1 transition-transform">
                      <svg
                        className="w-9 h-9 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-secondary mt-2">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 22h20L12 2z" />
                        </svg>
                      </div>
                    </div>
                  ),
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg p-6 shadow-[0_16px_45px_rgba(15,23,42,0.12)] border-b-[5px] ${b.borderColor} text-center flex flex-col items-center group transition-all duration-300 hover:shadow-xl`}
                >
                  {b.icon}
                  <h3 className="font-extrabold text-primary text-[17px] mb-3 leading-tight whitespace-pre-line">
                    {b.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Growth Banner */}
            <div className="bg-primary-dark rounded-xl shadow-xl flex flex-col lg:flex-row relative overflow-hidden border-l-[12px] border-secondary">
              {/* Text & List Section */}
              <div className="flex-1 flex flex-col md:flex-row items-center p-8 md:p-12 lg:pr-6 z-10">
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
                  <ul className="space-y-4">
                    {[
                      "Recognition & Rewards",
                      "Health & Safety",
                      "Work-Life Balance",
                      "Long-Term Career Opportunities",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg
                          className="w-[22px] h-[22px] text-secondary flex-shrink-0"
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
                        <span className="text-gray-200 text-[15px] font-medium tracking-wide">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="w-full lg:w-[45%] xl:w-[40%] relative min-h-[300px] lg:min-h-full">
                {/* Gradient overlay to smoothly blend dark section and image on large screens if needed, otherwise distinct line */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-primary-dark to-transparent z-10"></div>
                <img
                  src="/placeholder-workers.jpg"
                  alt="Happy Workers"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: GROW YOUR SKILLS ── */}
        <section className="py-16 bg-white relative">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Top Hero Section */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between mb-12 min-h-[300px]">
              {/* Left Text Content */}
              <div className="w-full lg:w-1/2 pr-0 lg:pr-12 relative z-10 py-8 lg:py-16 bg-white/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-white lg:via-white lg:to-transparent">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-[2px] bg-secondary" />
                  <p className="text-secondary text-xs font-bold uppercase tracking-widest">
                    Training & Growth
                  </p>
                  <div className="w-10 h-[2px] bg-secondary" />
                </div>

                <h2 className="text-5xl md:text-[56px] font-extrabold text-primary uppercase tracking-tight leading-[1.1] mb-2 font-sans">
                  Grow Your Skills.
                </h2>
                <h2 className="text-5xl md:text-[56px] font-extrabold text-secondary uppercase tracking-tight leading-[1.1] mb-6 font-sans">
                  Shape Your Future.
                </h2>

                <p className="text-gray-600 text-[16px] leading-relaxed max-w-xl">
                  At Pithal Machines, we invest in your growth. Through
                  structured training, real-world projects and continuous
                  learning, we help you build a strong foundation for a
                  long-term career.
                </p>
              </div>

              {/* Right Image Background (Fades into left) */}
              <div className="absolute inset-0 lg:left-1/3 z-0 hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10 w-1/3"></div>
                <img
                  src="/placeholder-training-hero.jpg"
                  alt="Training and Growth"
                  className="w-full h-full object-cover object-top lg:object-center rounded-tr-xl rounded-br-xl"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>
            </div>

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
                  className="bg-white rounded-lg shadow-[0_18px_45px_rgba(15,23,42,0.12)] border border-gray-100 p-5 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-full ${card.iconBg === "bg-orange-50" ? "bg-secondary/10" : card.iconBg === "bg-blue-50" ? "bg-primary/5" : card.iconBg} text-primary flex items-center justify-center mb-4`}
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
                      className="w-full h-full object-cover"
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

            {/* Bottom Stats Banner */}
            <div className="bg-primary-dark rounded-xl shadow-xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-20">
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
              <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-around w-full gap-6 lg:gap-4">
                {[
                  {
                    value: "50+",
                    label: "Training Programs Every Year",
                    iconBg: "bg-blue-500/20",
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
                    iconBg: "bg-secondary/20",
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
                    iconBg: "bg-green-500/20",
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
                    iconBg: "bg-purple-500/20",
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
                    iconBg: "bg-secondary/20",
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
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-md ${stat.iconBg} ${stat.iconColor} flex items-center justify-center shrink-0`}
                      >
                        <svg
                          className="w-4 h-4"
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
                    <div className="text-gray-300 text-[12px] font-medium leading-snug pr-4">
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
        <section className="py-16 bg-[#fafbfd]">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-secondary" />
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">
                  Hiring Process
                </p>
                <div className="w-12 h-[2px] bg-secondary" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4 font-sans">
                Your Journey to Pithal Machines
              </h2>

              <p className="text-gray-500 text-[15px] mt-4 max-w-2xl mx-auto font-medium">
                Our structured and transparent hiring process ensures the right
                opportunity <br className="hidden md:block" />
                for both you and our organization.
              </p>
            </div>

            {/* Journey Steps (6 Columns) */}
            <div className="relative mb-12">
              {/* Background Connecting Dotted Line (Desktop Only) */}
              <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] border-t-2 border-dotted border-slate-400 z-0 opacity-60"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
                {[
                  {
                    num: "01",
                    title: "Application",
                    desc: "Submit your application through our careers portal with your updated details.",
                    borderColor: "border-secondary",
                    badgeBg: "bg-secondary",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    ),
                  },
                  {
                    num: "02",
                    title: "Screening",
                    desc: "Our HR team reviews your application and shortlists suitable profiles.",
                    borderColor: "border-primary",
                    badgeBg: "bg-primary",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    ),
                  },
                  {
                    num: "03",
                    title: "Interview",
                    desc: "Initial HR interview to understand your experience, skills and career aspirations.",
                    borderColor: "border-emerald-500",
                    badgeBg: "bg-emerald-500",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    ),
                  },
                  {
                    num: "04",
                    title: "Technical Round",
                    desc: "Role-specific technical assessment or practical test to evaluate your expertise.",
                    borderColor: "border-purple-500",
                    badgeBg: "bg-purple-500",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    ),
                  },
                  {
                    num: "05",
                    title: "Selection",
                    desc: "Final evaluation by the panel and confirmation of your selection.",
                    borderColor: "border-red-500",
                    badgeBg: "bg-red-500",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z M20 12l-2-2m0 0l-2 2m2-2v6"
                      />
                    ),
                  },
                  {
                    num: "06",
                    title: "Onboarding",
                    desc: "Welcome to Pithal Machines! Get onboarded and begin your journey with us.",
                    borderColor: "border-blue-500",
                    badgeBg: "bg-blue-500",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    ),
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative group"
                  >
                    {/* Top Icon Circle */}
                    <div className="w-[88px] h-[88px] bg-white rounded-full flex items-center justify-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 relative mb-8 z-10 transition-transform group-hover:scale-105">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {step.icon}
                      </svg>
                      {/* Number Badge */}
                      <div
                        className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 ${step.badgeBg} text-white text-[12px] font-bold rounded-full flex items-center justify-center border-[3px] border-white shadow-sm`}
                      >
                        {step.num}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`bg-white rounded-xl p-5 lg:p-6 shadow-[0_16px_45px_rgba(15,23,42,0.12)] border-b-[5px] ${step.borderColor} text-center w-full h-full transition-shadow group-hover:shadow-xl flex flex-col`}
                    >
                      <h4 className="font-extrabold text-primary text-[16px] mb-3">
                        {step.title}
                      </h4>
                      <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Features Banner */}
            <div className="bg-[#f0f4f8] rounded-xl border border-[#e2e8f0] p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border border-[#e2e8f0] text-primary flex items-center justify-center shrink-0 shadow-sm">
                      <svg
                        className="w-6 h-6"
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
          </div>
        </section>

        {/* ── SECTION 10: BUILD WITH RIGHT FOUNDATION ── */}
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-secondary" />
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">
                  Eligibility & Qualifications
                </p>
                <div className="w-12 h-[2px] bg-secondary" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight uppercase mb-4 font-sans">
                Build Your Career With The Right Foundation.
              </h2>

              <p className="text-gray-600 text-[15px] mt-3 max-w-3xl mx-auto font-medium">
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
                  className="bg-white rounded-lg shadow-[0_16px_42px_rgba(15,23,42,0.12)] border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow group"
                >
                  {/* Top Icon & Title Area */}
                  <div className="pt-6 pb-4 px-4 flex flex-col items-center justify-center">
                    <div className="w-[52px] h-[52px] rounded-full border-2 border-primary/10 flex items-center justify-center text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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

            {/* Bottom Banner */}
            <div className="bg-primary-dark rounded-xl overflow-hidden flex flex-col lg:flex-row shadow-xl">
              {/* Left side: Image */}
              <div className="w-full lg:w-[28%] relative min-h-[250px] lg:min-h-[auto]">
                <img
                  src="/placeholder-banner-worker.jpg"
                  alt="Worker"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                {/* Subtle gradient to blend into the dark blue on desktop */}
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary-dark to-transparent"></div>
              </div>

              {/* Middle side: Quote */}
              <div className="w-full lg:w-[32%] p-8 lg:py-12 lg:px-10 flex flex-col justify-center relative z-10">
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
              <div className="w-full lg:w-[40%] p-8 lg:py-12 lg:pr-12 lg:pl-0 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  {[
                    {
                      title: "Passion to Learn",
                      desc: "A strong desire to learn and grow every day.",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z M19 11l-2 2-3-3"
                        />
                      ),
                    },
                    {
                      title: "Team Player",
                      desc: "Work collaboratively and support team success.",
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
                      title: "Positive Attitude",
                      desc: "A can-do attitude and willingness to take on challenges.",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      ),
                    },
                    {
                      title: "Commitment to Excellence",
                      desc: "Deliver quality and strive for excellence in all you do.",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      ),
                    },
                  ].map((trait, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center shrink-0 text-white mt-1">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {trait.icon}
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-[14px] mb-1 leading-snug">
                          {trait.title}
                        </h4>
                        <p className="text-[12px] text-gray-400 leading-snug">
                          {trait.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 11: TESTIMONIALS ── */}
        <section className="py-16 bg-[#fafbfd]">
          <div className="max-w-[1400px] mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-[2px] bg-secondary" />
                <p className="text-secondary text-xs font-bold uppercase tracking-widest">
                  Employee Testimonials
                </p>
                <div className="w-12 h-[2px] bg-secondary" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mb-4 font-sans">
                Real People<span className="text-secondary">.</span> Real
                Growth<span className="text-secondary">.</span> Real Impact
                <span className="text-secondary">.</span>
              </h2>

              <p className="text-primary text-[15px] mt-4 font-medium max-w-2xl mx-auto leading-relaxed">
                Our people are at the heart of everything we do.
                <br />
                <span className="text-gray-500">
                  Here&apos;s what they have to say about their journey at Pithal
                  Machines.
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
                  img: "/placeholder-rahul.jpg",
                },
                {
                  quote:
                    "The supportive environment and continuous learning opportunities have strengthened my skills and confidence.",
                  name: "Sneha Jadhav",
                  role: "Design Engineer",
                  years: "3+ Years at Pithal",
                  img: "/placeholder-sneha.jpg",
                },
                {
                  quote:
                    "I enjoy working on challenging projects and collaborating with a talented team that always pushes for excellence.",
                  name: "Akash More",
                  role: "Production Supervisor",
                  years: "6+ Years at Pithal",
                  img: "/placeholder-akash.jpg",
                },
                {
                  quote:
                    "Pithal Machines gives me the platform to learn, innovate and grow my career in the right direction.",
                  name: "Priya Deshmukh",
                  role: "Marketing Executive",
                  years: "2+ Years at Pithal",
                  img: "/placeholder-priya.jpg",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-8 shadow-[0_18px_48px_rgba(15,23,42,0.12)] border border-gray-100 flex flex-col h-full relative"
                >
                  {/* Top Quotes Icon */}
                  <div className="absolute top-8 right-8 text-secondary font-heading text-5xl leading-none">
                    “
                  </div>

                  {/* Quote Text */}
                  <p className="text-primary text-[15px] font-bold leading-relaxed mb-8 flex-1 relative z-10 pr-6">
                    “{t.quote}”
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 mb-6"></div>

                  {/* Author Profile */}
                  <div className="flex items-start gap-4">
                    <div className="w-[52px] h-[52px] bg-gray-200 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                      <img
                        src={t.img}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"; // Fallback generic avatar
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-extrabold text-primary text-[15px] leading-tight mb-1">
                        {t.name}
                      </h4>
                      <p className="text-gray-500 text-[12px] leading-snug font-medium mb-1">
                        {t.role}
                      </p>
                      <p className="text-primary text-[12px] font-bold leading-snug mb-1">
                        {t.years}
                      </p>

                      {/* Star Rating */}
                      <div className="flex gap-[2px]">
                        {[...Array(5)].map((_, j) => (
                          <svg
                            key={j}
                            className="w-3.5 h-3.5 text-secondary fill-current"
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
        <section className="py-12 bg-white flex justify-center">
          <div className="max-w-[1200px] w-full px-6">
            <div className="bg-[#fcfdff] border border-gray-100 shadow-[0_24px_70px_rgba(15,23,42,0.14)] rounded-xl overflow-hidden">
              {/* Top Main Section */}
              <div className="flex flex-col lg:flex-row items-center p-6 lg:p-8 border-b border-gray-100 gap-8">
                {/* Left Side: Logo & Text */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:w-[45%] shrink-0">
                  {/* Circular Logo */}
                  <div className="w-[88px] h-[88px] bg-white rounded-full flex items-center justify-center shrink-0 border border-gray-100 shadow-sm relative p-4">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      className="w-full h-full"
                    >
                      {/* Simplified Pithal P logo representation */}
                      <path
                        d="M50 15c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35c0-10.3-4.5-19.6-11.6-26.1"
                        stroke="var(--secondary)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="15 15"
                      />
                      <path
                        d="M45 35h15c8.3 0 15 6.7 15 15s-6.7 15-15 15H45V35z"
                        fill="var(--primary)"
                      />
                      <path d="M45 50h15" stroke="#fff" strokeWidth="4" />
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-[28px] lg:text-[32px] font-extrabold text-primary tracking-tight leading-[1.1] mb-1 font-sans uppercase">
                      Build Your Future
                    </h2>
                    <h2 className="text-[28px] lg:text-[32px] font-extrabold text-secondary tracking-tight leading-[1.1] mb-3 font-sans uppercase">
                      With Pithal Machines.
                    </h2>
                    <p className="text-[#4b5563] text-[13px] font-medium leading-relaxed max-w-sm">
                      Join a team that builds innovative solutions, drives
                      industrial progress and creates long-term impact.
                    </p>
                  </div>
                </div>

                {/* Middle Vertical Divider (Desktop only) */}
                <div className="hidden lg:block w-px h-28 bg-gray-200 shrink-0 mx-2"></div>

                {/* Middle: 4 Icons Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:w-[35%] w-full">
                  {[
                    {
                      title: "CAREER\nGROWTH",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6 M4 12v8m4-5v5m4-8v8"
                        />
                      ),
                    },
                    {
                      title: "CONTINUOUS\nLEARNING",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                      ),
                    },
                    {
                      title: "INDUSTRIAL\nEXPOSURE",
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
                      title: "FUTURE\nOPPORTUNITIES",
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      ),
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <svg
                        className="w-[34px] h-[34px] text-primary mb-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {/* Simulated Orange highlight on icons as per design */}
                        <path
                          d="M17 7l4 4-4 4"
                          stroke="var(--secondary)"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0"
                        />
                        {item.icon}
                      </svg>
                      <h4 className="text-primary text-[10px] font-bold uppercase tracking-wider whitespace-pre-line leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* Right Vertical Divider (Desktop only) */}
                <div className="hidden lg:block w-px h-28 bg-gray-200 shrink-0 mx-2"></div>

                {/* Right Side: Action Buttons */}
                <div className="flex flex-col gap-3 lg:w-[20%] w-full shrink-0">
                  <Button
                    href="#"
                    variant="primary"
                    className="w-full flex items-center justify-between h-12 shadow-sm group"
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
                          strokeWidth={1.5}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-white">
                        Upload Your CV
                      </span>
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
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>

                  <Button
                    href="#"
                    variant="outlineNavy"
                    className="w-full flex items-center justify-between h-12 shadow-sm group"
                  >
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[11px] font-bold uppercase tracking-wide">
                        Explore Open Positions
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Bottom Bar Section */}
              <div className="bg-[#fafbfd] py-4 px-6 flex flex-wrap justify-between items-center gap-4">
                {[
                  {
                    text: "300+ Professionals",
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
                    text: "Advanced Manufacturing Environment",
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
                    text: "Continuous Learning Culture",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    ),
                  },
                  {
                    text: "Growth-Focused Opportunities",
                    icon: (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6 M4 12v8m4-5v5m4-8v8"
                      />
                    ),
                  },
                ].map((feature, idx, arr) => (
                  <div
                    key={idx}
                    className="flex items-center flex-1 min-w-[200px] justify-center lg:justify-start"
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-[18px] h-[18px] text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {/* Simulated Orange highlight on bottom icons */}
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="var(--secondary)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0"
                        />
                        {feature.icon}
                      </svg>
                      <span className="text-[#334155] text-[12px] font-semibold">
                        {feature.text}
                      </span>
                    </div>
                    {/* Vertical separators between items */}
                    {idx !== arr.length - 1 && (
                      <div className="hidden lg:block w-px h-5 bg-gray-200 ml-auto mr-4"></div>
                    )}
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
