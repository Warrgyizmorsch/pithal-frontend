"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Zap,
  Shield,
  Award,
  Users,
  CheckCircle2,
  Play,
  RotateCcw,
  TrendingUp,
  FileText,
  Workflow,
  Globe,
  Settings2,
  HardHat,
  Cpu,
  Layers,
  Wrench,
  Construction,
  Gem,
  Check,
  Download,
  Calendar,
  FileCheck,
  Handshake,
  DollarSign,
  Star,
  Activity,
  Headphones,
  Building2,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// DATA CONFIGURATION (MATCHING SCREENSHOTS EXACTLY)
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  { value: "500+", label: "INSTALLATIONS", desc: "Across the Globe", icon: "inst" },
  { value: "50+", label: "COUNTRIES", desc: "Global Presence", icon: "countries" },
  { value: "24/7", label: "SUPPORT", desc: "Always With You", icon: "support" },
  { value: "CUSTOM", label: "PLANT SOLUTIONS", desc: "Built Around Your Needs", icon: "custom" },
];

const industriesServe = [
  {
    title: "MINING",
    icon: "mining",
    image: "/images/industries/mining.jpg",
    challenge: "High abrasion, tough rock and continuous operation demanding maximum uptime.",
    solution: "Heavy-duty crushers designed for high capacity, durability & reliability.",
  },
  {
    title: "AGGREGATES",
    icon: "aggregate",
    image: "/images/industries/aggregates.jpg",
    challenge: "Consistent quality, shape & gradation with high production demands.",
    solution: "Advanced crushing & screening systems for superior output & efficiency.",
  },
  {
    title: "CEMENT",
    icon: "cement",
    image: "/images/industries/cement.jpg",
    challenge: "Hard limestone, high temperatures and strict quality requirements.",
    solution: "Robust equipment built for high performance in harsh conditions.",
  },
  {
    title: "INFRASTRUCTURE",
    icon: "infra",
    image: "/images/industries/infrastructure.jpg",
    challenge: "Large-scale projects need reliable supply of quality aggregates on time.",
    solution: "Efficient, high-capacity solutions that ensure timely project completion.",
  },
  {
    title: "CONSTRUCTION",
    icon: "const",
    image: "/images/industries/construction.jpg",
    challenge: "Tight deadlines, limited space and need for cost-effective solutions.",
    solution: "Compact, mobile & efficient crushing systems for every construction need.",
  },
  {
    title: "RECYCLING",
    icon: "recycle",
    image: "/images/industries/recycling.jpg",
    challenge: "Processing demolition waste efficiently while maintaining environmental compliance.",
    solution: "Specialized crushing & screening solutions for maximum recycling.",
  },
];

const challengesSolve = [
  {
    step: "01",
    image: "/images/industries/mining.jpg",
    challengeTitle: "High Wear & Frequent Downtime",
    challengeDesc: "Heavy wear parts lead to breakdowns, production loss, and higher costs.",
    solutionTitle: "Built Tough. Built to Last.",
    solutionDesc: "Wear-resistant design, premium materials, and robust engineering for long life.",
    icon: Shield,
  },
  {
    step: "02",
    image: "/images/projects/rajasthan.jpg",
    challengeTitle: "Inconsistent Output Quality",
    challengeDesc: "Irregular size, shape, and gradation affect final product quality.",
    solutionTitle: "Precision Crushing & Screening",
    solutionDesc: "Advanced technology ensures uniform output with accurate particle shape.",
    icon: Layers,
  },
  {
    step: "03",
    image: "/images/products/belt-conveyor/hero.png",
    challengeTitle: "Low Productivity & High Costs",
    challengeDesc: "High energy consumption and inefficient processes increase OPEX.",
    solutionTitle: "High Efficiency, Lower Operating Cost",
    solutionDesc: "Energy-efficient machines and optimized designs to maximize productivity.",
    icon: TrendingUp,
  },
  {
    step: "04",
    image: "/images/contact/crushing-plant-contact.jpg",
    challengeTitle: "Complex Operations & Maintenance",
    challengeDesc: "Difficult maintenance and complex operations lead to delays.",
    solutionTitle: "Easy Operation, Hassle-Free Maintenance",
    solutionDesc: "User-friendly machines with easy access for quick maintenance and minimal downtime.",
    icon: Wrench,
  },
];

const challengesBottomBar = [
  { label: "Reduced Downtime", desc: "Maximum uptime, uninterrupted operations.", icon: Shield },
  { label: "Better Productivity", desc: "Higher output with optimized performance.", icon: TrendingUp },
  { label: "Lower Operating Cost", desc: "Energy-efficient solutions that save more.", icon: DollarSign },
  { label: "Reliable Performance", desc: "Engineered for durability and consistent results.", icon: Shield },
  { label: "Expert Support", desc: "End-to-end support whenever you need.", icon: Headphones },
];

const plantWorkflow = [
  { step: "01", title: "RAW MATERIAL", desc: "Excavated material fed into the system.", icon: "raw", image: "/images/industries/mining.jpg" },
  { step: "02", title: "PRIMARY CRUSHER", desc: "Reduces large rocks into manageable size.", icon: "primary", image: "/images/products/jaw-crusher/hero.png" },
  { step: "03", title: "SECONDARY CRUSHER", desc: "Further reduction for consistent output.", icon: "secondary", image: "/images/products/cone-crusher/hero.png" },
  { step: "04", title: "SCREENING", desc: "Separates material into required sizes.", icon: "screen", image: "/images/products/vibrating-screen/hero.png" },
  { step: "05", title: "CONVEYOR SYSTEM", desc: "Efficient material transfer across stages.", icon: "conveyor", image: "/images/products/belt-conveyor/hero.png" },
  { step: "06", title: "FINAL OUTPUT", desc: "High-quality, uniform material ready to use.", icon: "final", image: "/images/process/final-output.png" },
];

const workflowBottomPillars = [
  { label: "OPTIMIZED FLOW", desc: "Maximized efficiency at every stage.", icon: Settings },
  { label: "CONSISTENT QUALITY", desc: "Uniform output with precise grading.", icon: Shield },
  { label: "ENERGY EFFICIENT", desc: "Smart systems designed for lower power usage.", icon: Zap },
  { label: "HIGH PRODUCTIVITY", desc: "Engineered for continuous operation & higher output.", icon: Cpu },
  { label: "RELIABLE SUPPORT", desc: "End-to-end support for smooth plant performance.", icon: Headphones },
];

const operationBullets = [
  { title: "EXPERT ENGINEERS", desc: "Industry experience you can trust.", icon: HardHat },
  { title: "TAILORED SOLUTIONS", desc: "Custom designs for maximum efficiency.", icon: FileText },
  { title: "PROVEN RELIABILITY", desc: "Engineered for durability and performance.", icon: CheckCircle2 },
  { title: "END-TO-END SUPPORT", desc: "From concept to commissioning.", icon: Headphones },
];

const engineeringServices = [
  { step: "01", title: "PLANT PLANNING", desc: "We plan your entire crushing plant for optimal workflow, safety, and future scalability." },
  { step: "02", title: "MACHINE SELECTION", desc: "The right machine for the right application — chosen for performance, efficiency & durability." },
  { step: "03", title: "LAYOUT OPTIMIZATION", desc: "We design smart layouts that maximize space utilization, material flow & operational efficiency." },
  { step: "04", title: "CAPACITY PLANNING", desc: "Data-driven capacity calculations to ensure your plant meets today's needs and tomorrow's growth." },
  { step: "05", title: "SITE CONSULTATION", desc: "On-site analysis & expert guidance to create solutions tailored to your exact site conditions." },
];

const builtApplications = [
  { title: "GRANITE CRUSHING", desc: "High-capacity crushing solutions designed for hard rock applications with maximum productivity.", image: "/images/products/jaw-crusher/hero.png" },
  { title: "LIMESTONE PROCESSING", desc: "Efficient processing systems for consistent output and superior material quality.", image: "/images/products/complete-plants/hero.png" },
  { title: "SAND MANUFACTURING", desc: "Advanced sand-making solutions for high-quality manufactured sand and controlled grading.", image: "/images/projects/oman.jpg" },
  { title: "ROAD CONSTRUCTION", desc: "Reliable crushing and screening solutions for road base, sub-base and asphalt applications.", image: "/images/industries/infrastructure.jpg" },
  { title: "QUARRY OPERATIONS", desc: "Complete crushing systems built for demanding quarry environments and continuous use.", image: "/images/industries/construction.jpg" },
  { title: "INDUSTRIAL MATERIAL HANDLING", desc: "Robust material handling solutions for bulk operations across various industrial sectors.", image: "/images/products/belt-conveyor/hero.png" },
];

const performanceMetrics = [
  { pct: "92%", label: "HIGH OUTPUT EFFICIENCY", desc: "Engineered for maximum output with consistent performance across all operations.", icon: "gauge" },
  { pct: "85%", label: "REDUCED DOWOWNTIME", desc: "Robust design and quality components ensure longer uptime and fewer breakdowns.", icon: "clock" },
  { pct: "30%", label: "LOWER OPERATING COST", desc: "Optimized design reduces wear, energy consumption, and maintenance costs.", icon: "rupee" },
  { pct: "25%", label: "ENERGY EFFICIENT SYSTEMS", desc: "Advanced engineering for lower power consumption and sustainable operations.", icon: "leaf" },
  { pct: "40%", label: "HIGH PRODUCTION CAPACITY", desc: "High-capacity systems built to handle demanding operations with ease.", icon: "chart" },
];

const performanceSliders = [
  { label: "Overall Equipment Efficiency", value: 92 },
  { label: "System Reliability", value: 85 },
  { label: "Cost Efficiency", value: 70 },
  { label: "Energy Efficiency", value: 75 },
  { label: "Production Capacity", value: 90 },
];

const performanceStatsList = [
  { value: "500+", label: "Installations", desc: "Worldwide" },
  { value: "50+", label: "Countries", desc: "Served" },
  { value: "24/7", label: "Support & Service", desc: "Excellence" },
];

const smartProcessSteps = [
  { step: "01", title: "SITE INSPECTION", desc: "We assess your site conditions, material characteristics, and production goals.", image: "/images/contact/crushing-plant-contact.jpg" },
  { step: "02", title: "PLANNING", desc: "Our engineers create optimized plant layouts and process flows tailored to your requirements.", image: "/images/products/jaw-crusher/technical-datasheet.png" },
  { step: "03", title: "MACHINE SELECTION", desc: "We recommend the right equipment for maximum efficiency and long-term value.", image: "/images/products/cone-crusher/main-machine.png" },
  { step: "04", title: "INSTALLATION", desc: "Our team ensures safe, timely, and precise installation with minimal downtime.", image: "/images/products/complete-plants/hero.png" },
  { step: "05", title: "COMMISSIONING", desc: "We test, optimize, and fine-tune the system for reliable and consistent performance.", image: "/images/products/complete-plants/main-machine.png" },
  { step: "06", title: "SUPPORT", desc: "24/7 support, preventive maintenance, and genuine parts for uninterrupted operations.", image: "/images/about/global-impact.png" },
];

const smartProcessPillars = [
  { title: "END-TO-END EXPERTISE", desc: "Complete solutions from concept to continuous support.", icon: Shield },
  { title: "ENGINEERED FOR EFFICIENCY", desc: "Smart designs that maximize output and reduce costs.", icon: Clock },
  { title: "QUALITY YOU CAN TRUST", desc: "Built with precision engineering and premium components.", icon: Star },
  { title: "LIFETIME PARTNERSHIP", desc: "We grow with you through reliable support and service.", icon: Handshake },
];

const globalReachPoints = [
  { title: "EXPORT READY", desc: "Built to international standards and certified for global delivery.", icon: Globe },
  { title: "GLOBAL OPERATIONS", desc: "Trusted by clients in 50+ countries across 6 continents.", icon: Users },
  { title: "LARGE-SCALE SUPPORT", desc: "End-to-end project support for large-scale installations and long-term operations.", icon: Settings },
];

const globalFlagsCards = [
  { name: "INDIA", desc: "300 TPH Crushing & Screening Plant" },
  { name: "INDONESIA", desc: "500 TPH Limestone Processing Plant" },
  { name: "UNITED ARAB EMIRATES", desc: "250 TPH Aggregates Plant" },
  { name: "KENYA", desc: "200 TPH Crushing Plant" },
  { name: "PHILIPPINES", desc: "150 TPH Sand Making Plant" },
];

const globalNavyBarMetrics = [
  { value: "50+", label: "COUNTRIES", desc: "Global Presence" },
  { value: "1000+", label: "PROJECTS", desc: "Successfully Delivered" },
  { value: "15M+ TPH", label: "Installed Capacity", desc: "Worldwide" },
  { value: "500+", label: "EXPERTS", desc: "Across the Globe" },
  { value: "24/7", label: "GLOBAL SUPPORT", desc: "Always On. Always Ready." },
];

const globalBottomValues = [
  { title: "International Quality Standards", icon: Shield },
  { title: "Timely Delivery & Installation", icon: Clock },
  { title: "Custom Solutions for Every Region", icon: Settings },
  { title: "Trusted by Global Industry Leaders", icon: Handshake },
  { title: "Sustainable & Future-Ready Engineering", icon: Zap },
];

const whyChooseCards = [
  { title: "CUSTOMIZED SOLUTIONS", desc: "Tailored solutions designed around your material, capacity and site requirements.", icon: "puzzle" },
  { title: "FAST INSTALLATION", desc: "Optimized processes and skilled teams ensure quick and hassle-free installation.", icon: "stopwatch" },
  { title: "EXPERT ENGINEERING", desc: "Experienced engineers delivering innovative, reliable and field-proven crushing solutions.", icon: "engineer" },
  { title: "LOW DOWNTIME", desc: "Heavy-duty components and precise engineering keep your plant running longer with minimal downtime.", icon: "gauge" },
  { title: "END-TO-END SUPPORT", desc: "From planning to commissioning and after-sales support – we are with you at every step.", icon: "handshake" },
  { title: "SCALABLE PLANT DESIGN", desc: "Flexible, future-ready plant solutions that grow with your business and production demands.", icon: "scalable" },
];

const whyChooseBottomStats = [
  { label: "Reliable Performance", icon: Shield },
  { label: "Quality Assured", icon: Award },
  { label: "Cost Efficient", icon: DollarSign },
  { label: "Energy Efficient", icon: Zap },
  { label: "Customer Focused", icon: Users },
  { label: "Long-Term Partnership", icon: Headphones },
];

const caseStudiesData = [
  {
    tag: "LIMESTONE PLANT",
    title: "250 TPH Limestone Crushing Plant",
    cat: "Quarry & Mining",
    loc: "Madhya Pradesh, India",
    image: "/images/projects/madhya-pradesh.jpg",
    metrics: [
      { val: "35%", label: "Higher Productivity" },
      { val: "20%", label: "Lower Downtime" },
      { val: "98%", label: "Material Consistency" }
    ]
  },
  {
    tag: "SAND PLANT",
    title: "200 TPH Sand Manufacturing Plant",
    cat: "Sand Manufacturing",
    loc: "Rajasthan, India",
    image: "/images/projects/rajasthan.jpg",
    metrics: [
      { val: "30%", label: "Higher Output" },
      { val: "15%", label: "Energy Savings" },
      { val: "99%", label: "Gradation Accuracy" }
    ]
  },
  {
    tag: "INFRASTRUCTURE PROJECT",
    title: "300 TPH Infrastructure Crushing Project",
    cat: "Aggregates",
    loc: "Maharashtra, India",
    image: "/images/projects/oman.jpg",
    metrics: [
      { val: "40%", label: "Higher Capacity" },
      { val: "25%", label: "Lower Operating Cost" },
      { val: "100%", label: "Safe & Reliable Operation" }
    ]
  },
  {
    tag: "CEMENT PLANT SOLUTION",
    title: "Complete Crushing Solution for Cement Plant",
    cat: "Industrial",
    loc: "Gujarat, India",
    image: "/images/projects/indonesia.jpg",
    metrics: [
      { val: "20%", label: "Process Efficiency" },
      { val: "24/7", label: "Continuous Operation" },
      { val: "Zero", label: "Unplanned Shutdown" }
    ]
  }
];

const ctaPlanningCards = [
  { title: "Engineering Consultation", desc: "Connect with our experts to discuss your project needs.", icon: Users },
  { title: "Request a Quote", desc: "Get a detailed, customized quote tailored to your requirements.", icon: FileCheck },
  { title: "Plant Planning Support", desc: "Optimize your plant layout, capacity, and workflow with our experts.", icon: Settings },
  { title: "Expert Engineering Help", desc: "End-to-end engineering support for reliable and efficient operations.", icon: Headphones },
];

const ctaNavyOverlayMetrics = [
  { title: "Customized Solutions", icon: FileCheck },
  { title: "High Performance & Reliability", icon: Settings },
  { title: "Cost Efficient Operations", icon: TrendingUp },
  { title: "End-to-End Support", icon: Handshake },
];

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM RENDERING ICONS
// ─────────────────────────────────────────────────────────────────────────────

function renderCircleStatsIcon(name: string) {
  switch (name) {
    case "inst":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" stroke="#ff5a00" />
        </svg>
      );
    case "countries":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#ff5a00" strokeWidth="1" />
        </svg>
      );
    case "support":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="#ff5a00" />
        </svg>
      );
    case "custom":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" fill="#ff5a00" stroke="#ff5a00" />
        </svg>
      );
    default:
      return null;
  }
}

function renderWhyChooseIcon(icon: string) {
  switch (icon) {
    case "puzzle":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#031b40" strokeWidth="1.5">
          <path d="M11.75 3a2.25 2.25 0 0 1 2.25 2.25v.75H19a2 2 0 0 1 2 2v5a2.25 2.25 0 0 1-2.25 2.25h-.75V19a2 2 0 0 1-2 2h-5a2.25 2.25 0 0 1-2.25-2.25v-.75H5a2 2 0 0 1-2-2v-5H3a2.25 2.25 0 0 1-2.25-2.25v-1.5A2.25 2.25 0 0 1 3 8h.75V5a2 2 0 0 1 2-2h6z" />
          <path d="M12 9v6" stroke="#ff5a00" strokeWidth="2" />
        </svg>
      );
    case "stopwatch":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#031b40" strokeWidth="1.5">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 5V2M9 2h6M12 9v4l3 2" stroke="#ff5a00" strokeWidth="2" />
        </svg>
      );
    case "engineer":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#031b40" strokeWidth="1.5">
          <path d="M14.7 12.5a4 4 0 0 0-5.4 0M12 2v3M8.5 4.5l2 2M15.5 4.5l-2 2" stroke="#ff5a00" strokeWidth="1.5" />
          <path d="M5 21a7 7 0 0 1 14 0" />
          <circle cx="12" cy="11" r="4" />
        </svg>
      );
    case "gauge":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#031b40" strokeWidth="1.5">
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
          <line x1="12" y1="12" x2="19" y2="8" stroke="#ff5a00" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill="#031b40" />
        </svg>
      );
    case "handshake":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#031b40" strokeWidth="1.5">
          <path d="m11 17 2 2c.6.6 1.5.6 2 0l5-5c.6-.6.6-1.5 0-2l-2-2" />
          <path d="m13 14-2-2-4 4c-.6.6-.6 1.5 0 2l2 2c.6.6 1.5.6 2 0l2-2" stroke="#ff5a00" strokeWidth="2" />
          <path d="m14 8-1.5-1.5c-.8-.8-2-.8-2.8 0L3 13c-.6.6-.6 1.5 0 2l1.5 1.5" />
        </svg>
      );
    case "scalable":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#031b40" strokeWidth="1.5">
          <path d="M3 3v18h18" />
          <path d="m18.7 8-5.1 5.2-2.8-2.7-4.8 4.8" stroke="#ff5a00" strokeWidth="2" />
          <path d="M19 5h-4v4" />
        </svg>
      );
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SOLUTIONS MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects =
    activeTab === "All Projects"
      ? caseStudiesData
      : caseStudiesData.filter((p) => p.cat === activeTab || (activeTab === "Quarry & Mining" && p.cat === "Quarry & Mining"));

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-800">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & STATS BANNER */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white h-[calc(100vh-4.25rem)] sm:h-[calc(100vh-4.75rem)] xl:h-[calc(100vh-5.25rem)] text-primary">
          <Image
            alt="Pithal complete crushing and screening plant"
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
            src="/images/products/complete-plants/hero.png"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_22%,rgba(255,255,255,.88)_38%,rgba(255,255,255,.36)_58%,rgba(255,255,255,0)_78%)]"
          />
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-45" />
          <Container className="relative z-10 h-full flex flex-col justify-between pt-3 pb-4 sm:pt-4 sm:pb-5 lg:pt-6 lg:pb-6">
            <div>
              {/* Breadcrumb */}
              <div className="mb-3 flex items-center gap-2 text-xs font-medium text-primary/70">
                <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                <ChevronRight size={10} />
                <span>Solutions & Applications</span>
              </div>

              <div className="max-w-[650px] py-1 lg:py-3">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-[1.5px] w-6 bg-secondary" />
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-secondary">
                    SOLUTIONS
                  </span>
                </div>
                
                <h1 className="headline text-[clamp(2.35rem,5.5vw,4.2rem)] uppercase leading-[0.92] tracking-tight text-primary">
                  ENGINEERED SOLUTIONS <br />
                  FOR <span className="text-secondary">EVERY INDUSTRY.</span>
                </h1>
                
                <span aria-hidden className="mt-4 block h-[2px] w-14 bg-secondary" />

                <p className="mt-4 max-w-[560px] text-sm md:text-[17px] leading-relaxed text-primary font-medium">
                  From rugged mining operations to large-scale infrastructure projects, we deliver crushing solutions that maximize performance, minimize downtime, and drive <span className="text-secondary font-bold italic">real results</span>.
                </p>
                
                <div className="mt-5 flex flex-wrap gap-4">
                  <Button href="#industries" variant="primary" className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5">
                    EXPLORE SOLUTIONS
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Button>
                  <Button href="#contact" variant="outlineNavy" className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5">
                    <Download size={14} className="mr-0.5" />
                    DOWNLOAD BROCHURE
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats row below Hero */}
            <div className="bg-white text-slate-800 rounded-2xl p-4 md:py-5 md:px-6 shadow-[0_8px_30px_rgba(3,27,64,0.06)] relative z-20">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4.5 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-200/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] text-primary">
                      {renderCircleStatsIcon(stat.icon)}
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-primary leading-none">{stat.value}</h4>
                      <p className="text-xs md:text-sm font-black text-secondary uppercase tracking-widest mt-1.5">{stat.label}</p>
                      <p className="text-xs md:text-sm text-slate-500 mt-0.5">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: SOLUTIONS THAT POWER EVERY INDUSTRY */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24" id="industries">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  INDUSTRIES WE SERVE
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                SOLUTIONS THAT POWER <span className="text-secondary">EVERY INDUSTRY</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                From raw material to final output, our engineered crushing solutions are built to perform in the toughest industrial environments.
              </p>
            </div>

            {/* Grid of 6 cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {industriesServe.map((item, i) => (
                <div key={i} className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] w-full bg-slate-900">
                    <Image
                      alt={`${item.title.toLowerCase()} crushing solution`}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src={item.image}
                    />
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />

                    {/* Dark blue circle overlay */}
                    <div className="absolute left-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-primary border border-white/10 shadow-lg group-hover:bg-secondary transition-colors">
                      <Settings size={18} className="text-white" />
                    </div>

                    {/* Title inside image */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-lg font-black uppercase tracking-wider text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body elements */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="inline-flex gap-1.5 items-center text-xs font-black uppercase text-secondary tracking-wider">
                          <HelpCircle size={11} />
                          CHALLENGE
                        </span>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <span className="inline-flex gap-1.5 items-center text-xs font-black uppercase text-primary tracking-wider">
                          <CheckCircle2 size={11} />
                          OUR SOLUTION
                        </span>
                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    <Link href="#contact" className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors">
                      EXPLORE {item.title} SOLUTIONS
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: CHALLENGES WE SOLVE (Every Challenge. Engineered Solution.) */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  CHALLENGES WE SOLVE
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                Every Challenge. <span className="text-secondary">Engineered Solution.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We understand the real challenges of industrial operations and deliver solutions that improve performance, reduce downtime, and maximize productivity.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              {/* Left Column comparison rows */}
              <div className="space-y-6">
                {challengesSolve.map((row, i) => {
                  const SolIcon = row.icon;
                  return (
                    <div key={i} className="flex flex-col md:flex-row items-center gap-4">
                      {/* Left: Challenge Card */}
                      <div className="relative flex-1 w-full p-4 bg-orange-50/50 border border-orange-100 rounded-xl flex gap-3.5 items-start">
                        <span className="text-xs font-black uppercase tracking-wider text-secondary mt-0.5">
                          {row.step}
                        </span>
                        <div>
                          <h4 className="text-xs md:text-sm font-black uppercase text-secondary tracking-wider">
                            INDUSTRY CHALLENGE: {row.challengeTitle}
                          </h4>
                          <p className="mt-1 text-xs md:text-sm leading-relaxed text-slate-600">
                            {row.challengeDesc}
                          </p>
                        </div>
                      </div>

                      {/* Middle Connector */}
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-secondary shrink-0">
                        <ChevronRight size={14} className="rotate-90 md:rotate-0" />
                      </div>

                      {/* Right: Solution Card */}
                      <div className="flex-1 w-full p-4 bg-blue-50/40 border border-blue-100/80 rounded-xl flex gap-3.5 items-start">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shrink-0 mt-0.5">
                          <SolIcon size={12} />
                        </div>
                        <div>
                          <h4 className="text-xs md:text-sm font-black uppercase text-primary tracking-wider">
                            PITHAL SOLUTION: {row.solutionTitle}
                          </h4>
                          <p className="mt-1 text-xs md:text-sm leading-relaxed text-slate-600">
                            {row.solutionDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column visual with premium overlay */}
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-slate-800">
                <Image
                  src="/images/about/about-hero-industrial-generated.png"
                  alt="Complete Assembly System"
                  fill
                  className="object-cover opacity-80"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                />
                <div className="absolute inset-0 z-10" />
              
              </div>
            </div>

            {/* Bottom 5-column values banner */}
            <div className="mt-16 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 items-center sm:divide-x sm:divide-slate-100">
                {challengesBottomBar.map((item, i) => {
                  const BIcon = item.icon;
                  return (
                    <div key={i} className="text-center px-4 flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary mb-2.5">
                        <BIcon size={26} />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-primary">
                        {item.label}
                      </h4>
                      <p className="mt-1 text-xs md:text-sm text-slate-500 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: COMPLETE PLANT SOLUTIONS (Intelligent Systems. Seamless Performance) */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  COMPLETE PLANT SOLUTIONS
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                INTELLIGENT SYSTEMS. <span className="text-secondary">SEAMLESS PERFORMANCE.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                From raw material to final product, our complete plant solutions are engineered for maximum efficiency, reliability, and productivity.
              </p>
            </div>

            {/* 6 columns */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 relative">
              {plantWorkflow.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center p-4 bg-slate-50 border border-slate-200/50 rounded-xl hover:border-slate-300 transition-colors">
                  
                  {/* Icon badge */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary">
                    {i === 0 && <Layers size={26} />}
                    {i === 1 && <Settings size={26} />}
                    {i === 2 && <Settings2 size={26} />}
                    {i === 3 && <Activity size={26} />}
                    {i === 4 && <TrendingUp size={26} />}
                    {i === 5 && <Award size={26} />}
                  </div>

                  <h3 className="mt-4 text-xs md:text-sm font-black uppercase tracking-wider text-primary leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-500 min-h-[44px]">
                    {item.desc}
                  </p>

                  {/* Arched Photo representer */}
                  <div className="mt-4 w-full aspect-[4/3] rounded-lg overflow-hidden relative border border-slate-200 bg-slate-800">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center border border-dashed border-slate-600/30 m-1.5 rounded">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">STAGE 0{item.step}</span>
                      </div>
                    )}
                  </div>

                  {/* Process Connect Arrow */}
                  {i < 5 && (
                    <div className="absolute right-[-14px] top-1/3 -translate-y-1/2 hidden lg:block z-20 bg-primary text-white rounded-full p-1 border border-slate-200">
                      <ChevronRight size={10} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Timeline dots overlay */}
            <div className="mt-10 relative flex justify-between px-[8%] items-center">
              <div className="absolute inset-x-0 h-[1.5px] bg-slate-200/80 z-0" />
              {plantWorkflow.map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary flex items-center justify-center text-[10px] font-black text-secondary shadow-sm bg-white">
                    {item.step}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom 5-column banner card */}
            <div className="mt-14 bg-white border border-slate-200/80 rounded-2xl p-6.5 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 items-center sm:divide-x sm:divide-slate-100">
                {workflowBottomPillars.map((item, i) => {
                  const PIcon = item.icon;
                  return (
                    <div key={i} className="text-center px-4 flex flex-col items-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary mb-2.5">
                        <PIcon size={26} />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-primary">
                        {item.label}
                      </h4>
                      <p className="mt-1 text-xs md:text-sm text-slate-500 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: ENGINEERED AROUND YOUR OPERATION */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Top Grid layout */}
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center mb-16">
              {/* Left Column info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1.5px] w-6 bg-secondary" />
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-secondary">
                    CUSTOM ENGINEERING SOLUTIONS
                  </span>
                </div>
                
                <h2 className="headline text-primary text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] uppercase">
                  ENGINEERED AROUND <br />
                  <span className="text-secondary">YOUR OPERATION.</span>
                </h2>
                
                <span aria-hidden className="block h-[2.5px] w-12 bg-secondary my-5" />
                
                <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-xl font-medium">
                  Every site is unique. Our engineering experts design and deliver customized crushing solutions that match your goals, site conditions, and production requirements.
                </p>

                {/* Bullets grid layout */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {operationBullets.map((item, i) => {
                    const BIcon = item.icon;
                    return (
                      <div key={i} className="flex gap-3.5 items-start">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-200 text-secondary">
                          <BIcon size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-wide text-primary">
                            {item.title}
                          </h4>
                          <p className="mt-0.5 text-xs md:text-sm text-text-muted">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column CAD Drawing representation */}
              <div className="relative aspect-[4/3] w-full rounded-2xl bg-slate-900 border border-slate-200 overflow-hidden flex items-center justify-center shadow-xl">
                <Image
                  src="/images/products/jaw-crusher/technical-datasheet.png"
                  alt="CAD Engineering Blueprint"
                  fill
                  className="object-cover opacity-50"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 z-10 text-left p-4">
                  <span className="text-sm font-black uppercase tracking-widest text-white block">CAD Engineering Blueprint</span>
                  <p className="text-xs text-slate-300 mt-0.5">3D machine sizing & topography flow calculation</p>
                </div>
              </div>
            </div>

            {/* Bottom block: Our Engineering Services */}
            <div className="border-t border-slate-200 pt-14">
              {/* Bracketed Title Header */}
              <div className="relative flex justify-center items-center mb-10 w-full max-w-4xl mx-auto">
                <div className="absolute left-[8%] right-[50%] top-0 h-[1.5px] bg-secondary flex items-start">
                  <div className="h-3 w-[1.5px] bg-secondary" />
                </div>
                <div className="absolute left-[50%] right-[8%] top-0 h-[1.5px] bg-secondary flex items-start justify-end">
                  <div className="h-3 w-[1.5px] bg-secondary" />
                </div>
                <div className="relative bg-white px-6">
                  <span className="text-sm font-black uppercase tracking-[0.24em] text-primary">
                    OUR ENGINEERING SERVICES
                  </span>
                </div>
              </div>

              {/* 5 columns */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {engineeringServices.map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl hover:bg-slate-100/70 transition-colors flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-secondary">
                        {item.step}
                      </span>
                      <h4 className="mt-2 text-sm font-black uppercase tracking-wide text-primary leading-tight">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs md:text-sm leading-relaxed text-text-muted">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 flex justify-end">
                      <ChevronRight size={14} className="text-secondary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: BUILT FOR EVERY APPLICATION */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  APPLICATIONS WE POWER
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                BUILT FOR <span className="text-secondary">EVERY APPLICATION.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Our crushing solutions are engineered to perform across a wide range of industries and applications — delivering results where it matters most.
              </p>
            </div>

            {/* Grid of 6 cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {builtApplications.map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-xl bg-slate-900 text-white min-h-[300px] flex flex-col justify-end p-6 border border-slate-800 shadow-md">
                  
                  {/* Photo with dark overlay */}
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="absolute inset-0 border border-dashed border-slate-800 m-3 rounded-lg z-0 flex items-center justify-center">
                      <span className="text-xs uppercase font-black tracking-widest text-slate-800">IMAGE AREA {i + 1}</span>
                    </div>
                  )}

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-slate-950/75 z-10 transition-colors duration-300 group-hover:bg-slate-950/65" />

                  {/* Top orange circular badge */}
                  <div className="absolute left-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-secondary border border-white/10 shadow-lg">
                    <CheckCircle2 size={18} className="text-white" />
                  </div>

                  {/* Text body */}
                  <div className="relative z-20">
                    <h3 className="text-lg font-black uppercase tracking-wider text-white group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    
                    <span className="block h-[1.5px] w-6 bg-secondary my-2" />
                    
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <Link href="#contact" className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-secondary hover:text-white transition-colors">
                      EXPLORE SOLUTIONS
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Banner */}
            <div className="mt-14 bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-secondary">
                  <HelpCircle size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase text-primary tracking-wide">
                    Have a unique application?
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500">
                    Our engineers will design a solution tailored to your exact needs.
                  </p>
                </div>
              </div>

              <Button href="#contact" variant="primary" className="flex items-center gap-2 group text-xs px-6 py-3 shrink-0">
                TALK TO AN EXPERT
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: MEASURABLE PERFORMANCE. MAXIMUM RESULTS. */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  OUR PERFORMANCE. YOUR ADVANTAGE.
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                MEASURABLE PERFORMANCE. <span className="text-secondary">MAXIMUM RESULTS.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Our engineered crushing solutions are built to deliver superior performance, reduce operational costs, and maximize your productivity.
              </p>
            </div>

            {/* 5-Column Gauges Card Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-16">
              {performanceMetrics.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200/80 p-5.5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    {/* Gauge circle or Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                      {i === 0 && <Cpu size={16} />}
                      {i === 1 && <Clock size={16} />}
                      {i === 2 && <DollarSign size={16} />}
                      {i === 3 && <Zap size={16} />}
                      {i === 4 && <TrendingUp size={16} />}
                    </div>

                    <span className="text-xl font-black text-secondary flex items-center gap-0.5">
                      {item.pct}
                      <span className="text-sm font-bold text-slate-400">↑</span>
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-black uppercase tracking-wider text-primary leading-tight">
                    {item.label}
                  </h3>
                  
                  <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Lower layout stats with sliders */}
            <div className="grid gap-12 lg:grid-cols-3 lg:items-center border-t border-slate-200/80 pt-16">
              {/* Left Column Image Box */}
              <div className="relative aspect-square w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex items-center justify-center">
                <Image
                  src="/images/about/factory-floor.png"
                  alt="Factory Floor"
                  fill
                  className="object-cover opacity-20"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="relative text-center p-4 z-10">
                  <Construction size={40} className="text-secondary mx-auto mb-2" />
                  <span className="text-sm font-black uppercase tracking-widest text-primary leading-tight block">PERFORMANCE THAT<br />DRIVES YOUR SUCCESS</span>
                  <p className="text-xs md:text-sm text-slate-500 mt-2 max-w-[200px] mx-auto">
                    Our solutions are designed to maximize every aspect of your operations.
                  </p>
                </div>
              </div>

              {/* Middle Column Sliders */}
              <div className="space-y-5">
                {performanceSliders.map((slider, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      <span>{slider.label}</span>
                      <span className="text-secondary">{slider.value}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: `${slider.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column Stats */}
              <div className="space-y-6 lg:pl-6">
                {performanceStatsList.map((item, i) => (
                  <div key={i} className="flex items-center gap-4.5 bg-white border border-slate-200/80 p-4.5 rounded-xl">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                      {i === 0 && <Building2 size={20} />}
                      {i === 1 && <Globe size={20} />}
                      {i === 2 && <Headphones size={20} />}
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black text-primary leading-none">
                        {item.value}
                      </h4>
                      <p className="text-xs font-black text-secondary uppercase tracking-widest mt-1.5">
                        {item.label}
                      </p>
                      <p className="text-xs md:text-sm text-slate-500 mt-0.5">
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
        {/* SECTION 8: INTELLIGENT SMART PROCESS WORKFLOW */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  OUR SMART PROCESS
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                INTELLIGENT WORKFLOW. <span className="text-secondary">SEAMLESS RESULTS.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                From initial consultation to lifelong support — our structured process ensures efficiency, transparency, and performance at every stage.
              </p>
            </div>

            {/* 6 Step cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 relative mb-14">
              
              {/* Connecting line */}
              <div className="absolute top-[32px] left-[10%] right-[10%] h-[1.5px] border-t border-dashed border-slate-200 hidden lg:block z-0" />

              {smartProcessSteps.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center z-10 bg-slate-50 border border-slate-200/50 p-4.5 rounded-xl">
                  {/* Photo overlay step */}
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative mb-4 border border-slate-200">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 100vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center border border-dashed border-slate-600/30 m-1.5 rounded bg-slate-800">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">PHASE {item.step}</span>
                      </div>
                    )}

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-primary text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow z-10">
                      {item.step}
                    </div>
                  </div>

                  {/* Icon badge */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary mb-3 shadow-sm">
                    {i === 0 && <HardHat size={16} />}
                    {i === 1 && <FileText size={16} />}
                    {i === 2 && <Settings size={16} />}
                    {i === 3 && <Construction size={16} />}
                    {i === 4 && <FileCheck size={16} />}
                    {i === 5 && <Headphones size={16} />}
                  </div>

                  <h3 className="text-sm font-black uppercase tracking-wider text-primary leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-500">
                    {item.desc}
                  </p>

                  {/* Flow Arrow */}
                  {i < 5 && (
                    <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 hidden lg:block z-20 bg-primary text-white rounded-full p-1 border border-slate-200">
                      <ChevronRight size={10} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Dots timeline */}
            <div className="relative flex justify-between px-[8%] items-center mb-16">
              <div className="absolute inset-x-0 h-[1.5px] bg-slate-200/80 z-0" />
              {smartProcessSteps.map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-secondary shadow-md" />
                </div>
              ))}
            </div>

            {/* Bottom 4 values banner card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6.5 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-center sm:divide-x sm:divide-slate-100">
                {smartProcessPillars.map((item, i) => {
                  const PIcon = item.icon;
                  return (
                    <div key={i} className="px-5 flex gap-4 items-start">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary">
                        <PIcon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-black uppercase text-primary tracking-wide leading-tight">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs md:text-sm text-slate-500 leading-normal">
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
        {/* SECTION 9: GLOBAL CAPABILITY (Engineered to Perform. Delivered Worldwide) */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  GLOBAL CAPABILITY
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              
              <h2 className="headline text-primary text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] uppercase">
                ENGINEERED TO PERFORM. <br />
                <span className="text-secondary">DELIVERED WORLDWIDE.</span>
              </h2>
              
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-slate-600">
                From design to delivery, installation to support — our solutions power industries across the globe with unmatched reliability and performance.
              </p>
            </div>

            {/* Map and points columns */}
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center mb-16">
              {/* Left Column values */}
              <div className="space-y-6">
                {globalReachPoints.map((item, i) => {
                  const RIcon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200/60">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-secondary">
                        <RIcon size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-black uppercase tracking-wide text-primary leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-text-muted">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column Map representation */}
              <div className="relative aspect-[16/10] w-full rounded-2xl border border-slate-200 overflow-hidden flex items-center justify-center shadow-inner bg-slate-50">
                <Image
                  src="/images/projects/world-map.jpg"
                  alt="Supply Locations Network"
                  fill
                  className="object-cover opacity-30 mix-blend-multiply"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent" />
                <div className="relative text-center p-4 z-10">
                  <Globe size={40} className="text-secondary animate-pulse mb-2 mx-auto" />
                  <span className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-800">Supply Locations Network</span>
                  <p className="text-xs text-slate-500 mt-0.5">India primary center & regional offices</p>
                </div>
              </div>
            </div>

            {/* 5 flags cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-16">
              {globalFlagsCards.map((card, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[120px]">
                  <div className="absolute inset-0 border border-dashed border-slate-200/40 m-1.5 rounded-lg z-0" />
                  <div className="relative z-10">
                    <span className="text-xs font-black uppercase text-secondary tracking-widest">
                      {card.name}
                    </span>
                    <h4 className="mt-1 text-sm font-black uppercase text-primary leading-snug">
                      {card.desc}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Blue Banner Metric Stats */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm mb-8">
              <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 sm:divide-x sm:divide-slate-200">
                {globalNavyBarMetrics.map((item, i) => (
                  <div key={i} className="text-center px-4 flex flex-col justify-center">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                      {item.label}
                    </span>
                    <h4 className="mt-2 text-2xl md:text-3xl font-black text-secondary leading-none">
                      {item.value}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 mt-1 leading-normal font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom White values row */}
            <div className="bg-slate-50 text-slate-800 border border-slate-200/80 rounded-2xl p-6.5 shadow-sm flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {globalBottomValues.map((item, i) => {
                const VIcon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <VIcon size={14} className="text-secondary" />
                    <span className="text-sm font-black uppercase tracking-wide text-primary">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: SOLUTIONS BUILT AROUND YOUR SUCCESS */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  WHY CHOOSE PITHAL SOLUTIONS
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                Solutions built around <span className="text-secondary">your success.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We combine engineering excellence with practical solutions to deliver maximum performance, reliability, and long-term value.
              </p>
            </div>

            {/* Grid of 6 cards with orange circular arcs */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              {whyChooseCards.map((item, i) => (
                <div key={i} className="group relative flex flex-col bg-slate-50 border border-slate-200/80 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-slate-300">
                  
                  {/* Left-side circle container with orange crescent */}
                  <div className="flex gap-5 items-start">
                    
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md">
                      {/* Orange outer arc segment overlay */}
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

                      {renderWhyChooseIcon(item.icon)}
                    </div>

                    <div>
                      <h3 className="text-base font-black uppercase tracking-[0.10em] text-primary">
                        {item.title}
                      </h3>
                      
                      <span className="block h-[1.5px] w-6 bg-secondary my-2" />
                      
                      <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                </div>
              ))}
            </div>

            {/* Bottom 6 stats row */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6.5 shadow-sm flex flex-wrap items-center justify-center gap-6 md:gap-12">
              {whyChooseBottomStats.map((item, i) => {
                const SIcon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-secondary">
                      <SIcon size={12} />
                    </div>
                    <span className="text-sm font-black uppercase tracking-wide text-primary">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: CASE STUDIES (Proven Solutions. Real Results.) */}
        {/* ========================================================================= */}
        <section className="bg-white py-16 lg:py-24" id="case-studies">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="relative flex justify-center items-center mb-4 w-full max-w-4xl mx-auto">
                <div className="absolute left-[20%] right-[50%] top-2 h-[1px] bg-secondary flex items-start">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary -mt-[0.5px]" />
                </div>
                <div className="absolute left-[50%] right-[20%] top-2 h-[1px] bg-secondary flex items-start justify-end">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary -mt-[0.5px]" />
                </div>
                <div className="relative bg-slate-100 px-6 z-10">
                  <span className="text-sm font-black uppercase tracking-[0.24em] text-secondary">
                    CASE STUDIES
                  </span>
                </div>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                PROVEN SOLUTIONS. <span className="text-secondary">REAL RESULTS.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Delivering performance-driven solutions across industries with precision engineering, advanced technology, and reliable support.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
              {["All Projects", "Quarry & Mining", "Aggregates", "Sand Manufacturing", "Industrial"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-full border transition-all duration-300",
                    activeTab === tab
                      ? "bg-secondary border-secondary text-white shadow-md"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 4 Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              {filteredProjects.map((item, idx) => (
                <div key={idx} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Photo box represented with tags */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="absolute inset-0 border border-dashed border-slate-700/60 m-2 rounded-lg z-0 flex items-center justify-center">
                          <span className="text-xs font-black uppercase tracking-widest text-slate-500">Related Plant Visual {idx+1}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-slate-950/15 z-10" />
                      <span className="absolute left-3 top-3 z-20 text-[10px] font-black uppercase tracking-widest bg-white text-secondary px-2 py-0.5 rounded border border-slate-100 leading-none">
                        {item.tag}
                      </span>
                    </div>

                    <div className="p-4.5">
                      <h3 className="text-sm md:text-base font-black uppercase text-primary leading-tight group-hover:text-secondary transition-colors">
                        {item.title}
                      </h3>
                      <span className="inline-flex gap-1 items-center text-xs font-black text-slate-400 uppercase tracking-wider mt-1.5">
                        <MapPin size={9} className="text-secondary" /> {item.loc}
                      </span>

                      {/* 3 cols metrics */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-3 gap-1.5 text-center">
                        {item.metrics.map((met, i) => (
                          <div key={i} className="px-0.5">
                            <span className="text-sm font-black text-secondary leading-none block">{met.val}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5 leading-tight">{met.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4.5 pt-0">
                    <Link href="#contact" className="w-full inline-flex items-center justify-between text-xs font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors border-t border-slate-100 pt-3">
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel navigation dots */}
            <div className="flex justify-center items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-secondary" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: LET'S ENGINEER YOUR NEXT CRUSHING SOLUTION (CTA) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white py-16 lg:py-24" id="contact">
          <Container className="relative z-10">
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  READY TO BUILD. READY TO PERFORM.
                </span>
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="h-3 w-1.5 skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                Let's Engineer Your <br />
                <span className="text-secondary">Next Crushing Solution.</span>
              </h2>
              <span aria-hidden className="mx-auto mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mx-auto mt-5 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                From concept to commissioning, we deliver engineering-driven solutions that maximize performance, efficiency, and long-term value.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              
              {/* Left Column Content */}
              <div>
                {/* 4 Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {ctaPlanningCards.map((card, i) => {
                    const CIcon = card.icon;
                    return (
                      <div key={i} className="bg-slate-50 border border-slate-200/60 p-4.5 rounded-xl flex flex-col justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-white shadow-sm text-secondary mb-3.5">
                          <CIcon size={16} />
                        </div>
                        <div>
                          <h4 className="text-sm font-black uppercase tracking-wide text-primary leading-tight">
                            {card.title}
                          </h4>
                          <p className="mt-1 text-xs md:text-sm leading-normal text-slate-500">
                            {card.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Buttons block */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="#contact" variant="primary" className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5">
                    <Calendar size={14} className="mr-0.5" />
                    Schedule a Consultation
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Button>
                  <Button href="#contact" variant="outlineOrange" className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5 text-secondary border-secondary/20 hover:bg-slate-50">
                    <FileText size={14} className="mr-0.5" />
                    Request a Quote
                    <ArrowRight size={14} />
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <Shield size={14} className="text-secondary" />
                  <span className="text-xs md:text-sm text-slate-500 font-medium">
                    Trusted by industries worldwide for reliable, high-performance crushing solutions.
                  </span>
                </div>
              </div>

              {/* Right Column photo with overlay banner */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-slate-800">
                <Image
                  src="/images/contact/crushing-plant-contact.jpg"
                  alt="Pithal Engineering Officer"
                  fill
                  className="object-cover opacity-60"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-slate-900/10 z-10" />
                <div className="absolute inset-0 border border-dashed border-slate-700/60 m-4 rounded-xl flex items-center justify-center z-20 bg-slate-900/30 backdrop-blur-[1px]">
                  <div className="text-center p-4">
                    <HardHat size={40} className="text-secondary mx-auto mb-2 animate-pulse" />
                    <span className="text-sm font-black uppercase tracking-widest text-slate-300 font-bold">Pithal Engineering Officer</span>
                  </div>
                </div>

                {/* Overlay Navy stats banner on the bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-[#031b40]/95 text-white p-4.5 z-20 border-t border-white/5 backdrop-blur-sm">
                  <div className="grid grid-cols-4 gap-2 text-center divide-x divide-white/10">
                    {ctaNavyOverlayMetrics.map((item, i) => {
                      const MIcon = item.icon;
                      return (
                        <div key={i} className="px-1 flex flex-col items-center justify-center">
                          <MIcon size={14} className="text-secondary" />
                          <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-300 leading-tight">
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
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
