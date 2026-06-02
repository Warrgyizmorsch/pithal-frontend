"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Globe, Building2, Clock, Settings, ChevronRight, Mail, TrendingUp, Cog, Lightbulb, Lock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

// ─── ICONS ───────────────────────────────────────────────────────────────────

const CalendarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 inline-block mr-1">
    <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 inline-block mr-1">
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const ArrowRight = ({ cls = "w-4 h-4" }: { cls?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" className={cls}>
    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 inline-block mr-1">
    <path d="M1 10s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 inline-block mr-1">
    <path d="M10 3v10M6 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 16h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroStats = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="6" y="5" width="22" height="28" rx="2" stroke="#E8762C" strokeWidth="1.8" />
        <path d="M10 12h14M10 17h14M10 22h9" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M32 25l-5 5-2-2" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "100+",
    label: "ARTICLES",
    sub: "In-depth knowledge\nfor every industry",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <circle cx="20" cy="20" r="14" stroke="#E8762C" strokeWidth="1.8" />
        <path d="M20 6c0 0-8 6-8 14s8 14 8 14M20 6c0 0 8 6 8 14s-8 14-8 14M6 20h28" stroke="#E8762C" strokeWidth="1.4" />
      </svg>
    ),
    value: "20+",
    label: "INDUSTRY TOPICS",
    sub: "Covering key sectors\nand technologies",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <circle cx="20" cy="14" r="7" stroke="#E8762C" strokeWidth="1.8" />
        <path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#E8762C" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    value: "ENGINEERING",
    label: "EXPERTISE",
    sub: "Trusted by industries\nworldwide",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <circle cx="20" cy="20" r="13" stroke="#E8762C" strokeWidth="1.8" />
        <path d="M20 10l2.5 5 5.5.8-4 3.9.9 5.5L20 22.5l-4.9 2.7.9-5.5-4-3.9 5.5-.8L20 10z" stroke="#E8762C" strokeWidth="1.4" fill="none" />
      </svg>
    ),
    value: "INDUSTRIAL",
    label: "BEST PRACTICES",
    sub: "Proven methods for\nbetter performance",
  },
];

const heroSectionStats: {
  value: string;
  label: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}[] = [
  { value: "35+", label: "COUNTRIES", desc: "Global presence across 5 continents", icon: Globe },
  { value: "1500+", label: "INSTALLATIONS", desc: "Successful installations worldwide", icon: Building2 },
  { value: "24/7", label: "SUPPORT", desc: "Round-the-clock support across time zones", icon: Clock },
  { value: "GLOBAL", label: "ENGINEERING ASSISTANCE", desc: "Expert engineering support wherever you are", icon: Settings },
];

const heroFloatingCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 3l1.5 3 3.5.5-2.5 2.4.6 3.5L12 11l-3.1 1.4.6-3.5L7 6.5l3.5-.5L12 3z" stroke="#E8762C" strokeWidth="1.5" fill="none" />
        <path d="M5 20h14M8 17h8" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "PLANT OPTIMIZATION",
    desc: "Improve efficiency and maximize performance",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "ENGINEERING GUIDES",
    desc: "In-depth technical knowledge and how-to resources",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" stroke="#E8762C" strokeWidth="1.5" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "INDUSTRY INSIGHTS",
    desc: "Trends, innovations and expert perspectives",
  },
];

const featuredPosts = [
  {
    tag: "CRUSHING SOLUTIONS",
    title: "How to Choose the Right Crusher for Your Application",
    desc: "A complete guide to selecting the right crusher based on material type, capacity, operating conditions and total cost of ownership.",
    date: "May 20, 2024",
    read: "8 min read",
    img: "/blogpageimg/crusherguide.jpg",
    featured: true,
    large: true,
  },
  {
    tag: "PLANT OPTIMIZATION",
    title: "Maximizing Plant Efficiency: Key Strategies That Work",
    desc: "Explore proven strategies to improve throughput, reduce operational costs and enhance overall plant performance.",
    date: "May 15, 2024",
    read: "6 min read",
    img: "/blogpageimg/crushersection.jpg",
    featured: false,
    large: false,
  },
  {
    tag: "MINING OPERATIONS",
    title: "Reducing Downtime in Mining Operations",
    desc: "Understand the common causes of equipment downtime and how proactive maintenance can minimize disruptions.",
    date: "May 10, 2024",
    read: "7 min read",
    img: "/blogpageimg/miningoperation.jpg",
    featured: false,
    large: false,
  },
];

const categories = [
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <path d="M15 45V30l8-15h14l8 15v15H15z" stroke="#0d1b2e" strokeWidth="2" fill="none" />
        <circle cx="30" cy="28" r="5" stroke="#E8762C" strokeWidth="2" />
        <path d="M10 45h40" stroke="#0d1b2e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "MINING",
    desc: "Insights on mining operations, equipment and productivity.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <circle cx="20" cy="30" r="6" stroke="#0d1b2e" strokeWidth="2" />
        <circle cx="35" cy="25" r="5" stroke="#0d1b2e" strokeWidth="2" />
        <circle cx="45" cy="32" r="4" stroke="#0d1b2e" strokeWidth="2" />
        <path d="M10 42h40" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "AGGREGATES",
    desc: "Best practices for aggregate production and processing.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <path d="M30 8v20M22 28h16M18 44h24" stroke="#0d1b2e" strokeWidth="2" strokeLinecap="round" />
        <rect x="24" y="28" width="12" height="16" stroke="#E8762C" strokeWidth="2" rx="1" />
      </svg>
    ),
    name: "CEMENT",
    desc: "Knowledge hub for cement manufacturing and plant operations.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <rect x="18" y="28" width="24" height="16" rx="1" stroke="#0d1b2e" strokeWidth="2" />
        <path d="M22 28V20a8 8 0 0116 0v8" stroke="#0d1b2e" strokeWidth="2" />
        <path d="M14 44h32" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 8v8" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "CONSTRUCTION",
    desc: "Solutions and insights for construction professionals.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <path d="M20 40l5-10 5 5 5-15 5 20" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 40h36" stroke="#0d1b2e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "RECYCLING",
    desc: "Sustainable practices and recycling technologies.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <circle cx="30" cy="32" r="3" stroke="#0d1b2e" strokeWidth="2" />
        <path d="M30 20v4M30 40v4M20 32h4M36 32h4M22 24l2.8 2.8M34.4 35.2L37.2 38M22 40l2.8-2.8M34.4 28.8L37.2 26" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "MATERIAL HANDLING",
    desc: "Insights on conveying, handling and bulk material systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <path d="M16 44V28l14-16 14 16v16H16z" stroke="#0d1b2e" strokeWidth="2" fill="none" />
        <path d="M22 44V34h16v10" stroke="#E8762C" strokeWidth="2" />
        <path d="M28 30h4v4h-4z" fill="#E8762C" />
      </svg>
    ),
    name: "PLANT OPTIMIZATION",
    desc: "Improve efficiency, reduce costs and maximize performance.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <circle cx="30" cy="30" r="10" stroke="#0d1b2e" strokeWidth="2" fill="none" />
        <path d="M26 26l8 4-8 4V26z" fill="#E8762C" />
        <path d="M30 10v6M30 44v6M10 30h6M44 30h6" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "MAINTENANCE",
    desc: "Maintenance strategies for high performance and reliability.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <rect x="12" y="14" width="36" height="28" rx="2" stroke="#0d1b2e" strokeWidth="2" />
        <path d="M20 22h20M20 28h14M20 34h8" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 28l6 4-6 4V28z" fill="#E8762C" />
      </svg>
    ),
    name: "ENGINEERING GUIDES",
    desc: "Technical guides and resources from industry experts.",
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-10 h-10">
        <circle cx="30" cy="26" r="8" stroke="#0d1b2e" strokeWidth="2" fill="none" />
        <path d="M30 18v-4M26 14l8 8M18 26h4M38 26h4" stroke="#E8762C" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 44c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#0d1b2e" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    name: "INDUSTRY TRENDS",
    desc: "Latest trends, innovations and market perspectives.",
  },
];

const latestArticles = [
  {
    tag: "CRUSHING SOLUTIONS",
    tagIcon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><circle cx="10" cy="10" r="7" stroke="#E8762C" strokeWidth="1.5" /><path d="M7 10l2 2 4-4" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    title: "How to Choose the Right Crusher for Your Application",
    desc: "A complete guide to selecting the right crusher based on material type, capacity, operating conditions and total cost of ownership.",
    date: "May 20, 2024",
    read: "8 min read",
    img: "/blogpageimg/crushingsolution3.jpg",
  },
  {
    tag: "PLANT OPTIMIZATION",
    tagIcon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M4 14V8l6-5 6 5v6H4z" stroke="#E8762C" strokeWidth="1.5" fill="none" /><path d="M8 14v-4h4v4" stroke="#E8762C" strokeWidth="1.3" /></svg>
    ),
    title: "Maximizing Plant Efficiency: Key Strategies That Work",
    desc: "Explore proven strategies to improve throughput, reduce operational costs and enhance overall plant performance.",
    date: "May 15, 2024",
    read: "6 min read",
    img: "/blogpageimg/operationaloptimization.jpg",
  },
  {
    tag: "MINING OPERATIONS",
    tagIcon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4"><path d="M10 18V8M6 12l4-4 4 4" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 18h12" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" /></svg>
    ),
    title: "Reducing Downtime in Mining Operations",
    desc: "Understand the common causes of equipment downtime and how proactive maintenance can minimize disruptions.",
    date: "May 10, 2024",
    read: "7 min read",
    img: "/blogpageimg/miningoperation.jpg",
  },
];

const trendingPosts = [
  {
    num: "01",
    tag: "CRUSHING SOLUTIONS",
    title: "How to Choose the Right Crusher for Your Application",
    desc: "A comprehensive guide to selecting the right crusher based on material type, capacity and operational goals.",
    views: "12.4K",
    read: "8",
    category: "Crushing Solutions",
    img: "/blogpageimg/crushingsolution.jpg",
  },
  {
    num: "02",
    tag: "PLANT OPTIMIZATION",
    title: "Maximizing Plant Efficiency: Key Strategies That Work",
    desc: "Explore proven strategies to improve throughput, reduce operational costs and enhance overall plant performance.",
    views: "9.8K",
    read: "6",
    category: "Plant Optimization",
    img: "/blogpageimg/plantoptimization3.jpg",
  },
  {
    num: "03",
    tag: "MINING OPERATIONS",
    title: "Reducing Downtime in Mining Operations",
    desc: "Essential maintenance checklist to maximize equipment uptime, efficiency and reliability.",
    views: "8.4K",
    read: "7",
    category: "Mining Operations",
    img: "/blogpageimg/miningoperation.jpg",
  },
  {
    num: "04",
    tag: "MATERIAL HANDLING",
    title: "Conveyor System Optimization for Better Performance",
    desc: "Learn proper conveyor design, maintenance and monitoring to improve efficiency and reduce downtime.",
    views: "7.1K",
    read: "5",
    category: "Material Handling",
    img: "/blogpageimg/materialhandling.jpg",
  },
  {
    num: "05",
    tag: "MAINTENANCE",
    title: "Essential Maintenance Practices for Longer Equipment Life",
    desc: "Follow these proven maintenance routines to extend equipment lifespan, reduce costs and ensure reliable operations.",
    views: "6.2K",
    read: "9",
    category: "Maintenance",
    img: "/blogpageimg/maintenancechecklist.jpg",
  },
];

const knowledgeHubTopics = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <circle cx="20" cy="20" r="13" stroke="#E8762C" strokeWidth="1.8" />
        <path d="M20 12v4M20 20l3 3" stroke="#E8762C" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2" fill="#E8762C" />
      </svg>
    ),
    title: "CRUSHER SELECTION",
    count: "25+",
    items: ["Jaw Crushers", "Cone Crushers", "VSI Systems", "Capacity Planning"],
    img: "/blogpageimg/crushersection.jpg",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M8 32V16l12-8 12 8v16H8z" stroke="#E8762C" strokeWidth="1.8" fill="none" />
        <path d="M15 32v-8h10v8" stroke="#E8762C" strokeWidth="1.5" />
        <path d="M20 10v4" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "PLANT DESIGN & LAYOUT",
    count: "18+",
    items: ["Plant Layouts", "Material Flow", "Conveyor Design", "Site Planning"],
    img: "/blogpageimg/plantdesignlayout.jpg",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <circle cx="20" cy="20" r="8" stroke="#E8762C" strokeWidth="1.8" fill="none" />
        <path d="M20 12v-4M20 32v4M12 20H8M32 20h4M14.1 14.1l-2.8-2.8M28.7 28.7l2.8 2.8M14.1 25.9l-2.8 2.8M28.7 11.3l2.8-2.8" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "MAINTENANCE BEST PRACTICES",
    count: "22+",
    items: ["Downtime Reduction", "Equipment Life", "Spare Parts", "Inspection Routines"],
    img: "/blogpageimg/maintenancebestpractice.jpg",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <path d="M8 30V18l12-8 12 8v12" stroke="#E8762C" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 30l8-12 8 12" stroke="#E8762C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="14" r="2" fill="#E8762C" />
      </svg>
    ),
    title: "INDUSTRY TRENDS & MARKET INSIGHTS",
    count: "15+",
    items: ["Mining Trends", "Sustainability", "Automation", "Market Insights"],
    img: "/blogpageimg/industrytrends.jpg",
  },
];

const hubStats = [
  {
    value: "80+",
    label: "TECHNICAL ARTICLES",
    sub: "In-depth engineering content",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    value: "10+",
    label: "KNOWLEDGE CATEGORIES",
    sub: "Across key industrial topics",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    value: "INDUSTRY",
    label: "BEST PRACTICES",
    sub: "Proven methods and strategies",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    value: "ENGINEERING",
    label: "EXPERTISE",
    sub: "Trusted by industries worldwide",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12a10 10 0 0 1 20 0H2z" />
        <path d="M5 12V8a7 7 0 0 1 14 0v4" />
        <path d="M12 2v6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
];

const expertQuotes = [
  {
    quote: "Selecting the right crusher is not just about capacity. It's about matching the equipment to your material, application and long-term operational goals.",
    author: "VIKRAM DESHPANDE",
    role: "Chief Engineering Officer",
    experience: "24+ Years Experience",
  },
  {
    quote: "Plant efficiency is achieved through the right combination of engineering design, equipment reliability and continuous optimization.",
    author: "RAHUL SATHE",
    role: "Head of Plant Design",
    experience: "20+ Years Experience",
  },
  {
    quote: "Preventive maintenance and regular inspections are the key to minimizing downtime and maximizing the life of critical equipment.",
    author: "SACHIN KULKARNI",
    role: "Head of Maintenance",
    experience: "22+ Years Experience",
  },
  {
    quote: "The future of our industry lies in smart engineering, automation and sustainable practices that create value while reducing environmental impact.",
    author: "AMIT MHATRE",
    role: "Head of Technology",
    experience: "18+ Years Experience",
  },
];

const expertStats = [
  {
    title: "ENGINEERING EXPERTS",
    subtitle: "20+ Industry Specialists",
  },
  {
    title: "YEARS OF EXPERIENCE",
    subtitle: "Average 20+ Years",
  },
  {
    title: "TECHNICAL INSIGHTS",
    subtitle: "Real-world Industry Knowledge",
  },
  {
    title: "PROVEN SOLUTIONS",
    subtitle: "Delivering Measurable Results",
  },
];

const resourceGuides = [
  {
    title: "Plant Planning Guide",
    desc: "A comprehensive guide to plant planning, site selection and capacity planning.",
    items: ["Site Assessment", "Capacity Planning", "Layout Options"],
    icon: Building2,
    img: "/blogpageimg/plantplann.jpg",
  },
  {
    title: "Crusher Selection Guide",
    desc: "Step-by-step guide to selecting the right crusher for your materials.",
    items: ["Crusher Type Overview", "Material Suitability", "Output Specifications"],
    icon: Settings,
    img: "/blogpageimg/crushingsolution.jpg",
  },
  {
    title: "Maintenance Checklist",
    desc: "Essential maintenance checklist to maximize equipment uptime and reliability.",
    items: ["Daily Inspection", "Wear Parts Replacement", "Performance Benchmarks", "Maintenance Log"],
    icon: Clock,
    img: "/blogpageimg/maintenancechecklist.jpg",
  },
  {
    title: "Operational Optimization Guide",
    desc: "How to assess plant performance, increase efficiency and reduce costs.",
    items: ["Process Optimization", "Efficiency Improvement", "Cost Reduction Strategies", "KPI Monitoring"],
    icon: Globe,
    img: "/blogpageimg/operationaloptimization.jpg",
  },
];

// ─── BLUEPRINT ICON SVGS ──────────────────────────────────────────────────────
const CrushingSystemsIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 14h40l-8 14H20L12 14z" />
    <path d="M20 28l-2 18h28l-2-18" />
    <path d="M32 20l6 20H26l6-20z" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity="0.1" />
    <circle cx="24" cy="18" r="2" fill="currentColor" stroke="none" />
    <circle cx="38" cy="18" r="3" fill="currentColor" stroke="none" />
    <circle cx="27" cy="42" r="1.5" fill="var(--color-secondary)" stroke="none" />
    <circle cx="34" cy="43" r="1.5" fill="var(--color-secondary)" stroke="none" />
  </svg>
);

const ScreeningPlantsIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 20l36 12" strokeWidth="2" />
    <path d="M14 30l36 12" strokeDasharray="3 3" />
    <path d="M18 40l32 10" strokeDasharray="1 3" />
    <circle cx="28" cy="26" r="6" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity="0.1" />
    <path d="M25 26h6" stroke="var(--color-secondary)" />
    <path d="M16 38v8m0-8l-2 2 4 2-4 2 2 2" />
    <path d="M44 48v8m0-8l-2 2 4 2-4 2 2 2" />
    <circle cx="18" cy="18" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="28" cy="34" r="2" fill="var(--color-secondary)" stroke="none" />
    <circle cx="42" cy="46" r="1.5" fill="var(--color-secondary)" stroke="none" />
  </svg>
);

const ConveyorsIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="24" width="44" height="12" rx="6" strokeWidth="2" />
    <circle cx="16" cy="30" r="4" />
    <circle cx="32" cy="30" r="4" stroke="var(--color-secondary)" />
    <circle cx="48" cy="30" r="4" />
    <path d="M16 20l4-3 6 3 8-4 10 4" stroke="var(--color-secondary)" strokeWidth="2" />
    <circle cx="22" cy="17" r="1.5" fill="var(--color-secondary)" stroke="none" />
    <circle cx="32" cy="15" r="2" fill="var(--color-secondary)" stroke="none" />
    <circle cx="42" cy="18" r="1.5" fill="var(--color-secondary)" stroke="none" />
  </svg>
);

const MiningEquipmentIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="44" width="28" height="8" rx="4" />
    <circle cx="18" cy="48" r="2" fill="currentColor" stroke="none" />
    <circle cx="26" cy="48" r="2" fill="currentColor" stroke="none" />
    <circle cx="34" cy="48" r="2" fill="currentColor" stroke="none" />
    <path d="M16 44V32h16v12H16z" />
    <path d="M24 32v-6h6v6" />
    <path d="M32 36l12-14 8 8" strokeWidth="2" />
    <path d="M48 28l-4 8-6-4 4-8 6 4z" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity="0.1" />
    <path d="M38 32l-2-2M40 34l-2-2" stroke="var(--color-secondary)" />
  </svg>
);

const PlantAutomationIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="14" width="44" height="28" rx="3" />
    <path d="M24 42l-4 8h24l-4-8" />
    <path d="M16 34l8-8 10 6 12-12" stroke="var(--color-secondary)" strokeWidth="2" />
    <circle cx="46" cy="20" r="2.5" fill="var(--color-secondary)" stroke="none" />
    <circle cx="20" cy="22" r="3" />
    <path d="M20 18v2M20 24v2M17 22h2M23 22h2" />
  </svg>
);

const MaintenanceIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="36" cy="28" r="10" strokeWidth="2" />
    <circle cx="36" cy="28" r="4" />
    <line x1="36" y1="18" x2="36" y2="15" strokeWidth="2.5" />
    <line x1="36" y1="38" x2="36" y2="41" strokeWidth="2.5" />
    <line x1="26" y1="28" x2="23" y2="28" strokeWidth="2.5" />
    <line x1="46" y1="28" x2="49" y2="28" strokeWidth="2.5" />
    <line x1="29" y1="21" x2="27" y2="19" strokeWidth="2.5" />
    <line x1="43" y1="35" x2="45" y2="37" strokeWidth="2.5" />
    <line x1="29" y1="35" x2="27" y2="37" strokeWidth="2.5" />
    <line x1="43" y1="21" x2="45" y2="19" strokeWidth="2.5" />
    <path d="M12 52l18-18" strokeWidth="3.5" stroke="var(--color-secondary)" />
    <path d="M14 54l-4-4 4-4M26 34l8-8-4-4-8 8" stroke="var(--color-secondary)" />
    <path d="M12 44a6 6 0 00-6-6v4a2 2 0 012 2h4z" stroke="var(--color-secondary)" fill="var(--color-secondary)" fillOpacity="0.1" />
  </svg>
);

const InfrastructureProjectsIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 50h44M6 54h52" />
    <path d="M24 54l-4-10M40 54l4-10" />
    <path d="M16 44V14h8" />
    <path d="M12 14h28l-8 8H12" stroke="var(--color-secondary)" strokeWidth="2" />
    <path d="M34 20v12" />
    <path d="M32 32h4M34 32v4" />
    <path d="M16 24l8-10M24 24l8-10M32 24l8-10" stroke="var(--color-secondary)" strokeWidth="1" />
  </svg>
);

const MaterialProcessingIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 12h36l-10 20H24L14 12z" strokeWidth="2" />
    <path d="M20 38h24l-6 8H26l-6-8z" stroke="var(--color-secondary)" />
    <circle cx="28" cy="20" r="3" fill="currentColor" stroke="none" />
    <circle cx="36" cy="18" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="32" cy="24" r="3.5" fill="currentColor" stroke="none" />
    <circle cx="24" cy="48" r="1.5" fill="var(--color-secondary)" stroke="none" />
    <circle cx="32" cy="50" r="2.5" fill="var(--color-secondary)" stroke="none" />
    <circle cx="40" cy="48" r="1.5" fill="var(--color-secondary)" stroke="none" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-12 h-12 stroke-primary" viewBox="0 0 64 64" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 44V12l32 32H12z" strokeWidth="2" />
    <path d="M18 38V20l18 18H18z" stroke="var(--color-secondary)" strokeWidth="1" />
    <path d="M40 14L32 36M40 14l8 22" />
    <path d="M38 14h4M40 10v4" />
    <circle cx="32" cy="36" r="1" fill="currentColor" stroke="none" />
    <circle cx="48" cy="36" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const getTopicIcon = (iconId: string) => {
  switch (iconId) {
    case "crusher":
      return <CrushingSystemsIcon />;
    case "screening":
      return <ScreeningPlantsIcon />;
    case "conveyor":
      return <ConveyorsIcon />;
    case "mining":
      return <MiningEquipmentIcon />;
    case "automation":
      return <PlantAutomationIcon />;
    case "maintenance":
      return <MaintenanceIcon />;
    case "infrastructure":
      return <InfrastructureProjectsIcon />;
    case "processing":
      return <MaterialProcessingIcon />;
    case "design":
      return <DesignIcon />;
    default:
      return <CrushingSystemsIcon />;
  }
};

const coverageTopics = [
  {
    title: "Crushing Systems",
    desc: "Expert insights on crusher types, selection, performance optimization and wear parts.",
    articles: "25+",
    iconId: "crusher",
  },
  {
    title: "Screening Plants",
    desc: "Best practices for screening solutions, efficiency improvement and application guidelines.",
    articles: "18+",
    iconId: "screening",
  },
  {
    title: "Conveyors",
    desc: "Design, selection and optimization strategies for reliable and efficient material handling.",
    articles: "20+",
    iconId: "conveyor",
  },
  {
    title: "Mining Equipment",
    desc: "Insights on equipment selection, productivity improvement and operational excellence.",
    articles: "22+",
    iconId: "mining",
  },
  {
    title: "Plant Automation",
    desc: "Explore automation technologies, control systems and digital solutions for modern plants.",
    articles: "16+",
    iconId: "automation",
  },
  {
    title: "Maintenance",
    desc: "Preventive maintenance, reliability improvement and best practices to reduce downtime.",
    articles: "24+",
    iconId: "maintenance",
  },
  {
    title: "Infrastructure Projects",
    desc: "Engineering insights for roads, bridges, tunnels and large-scale infrastructure developments.",
    articles: "15+",
    iconId: "infrastructure",
  },
  {
    title: "Material Processing",
    desc: "Process optimization, equipment configuration and flow improvement techniques.",
    articles: "19+",
    iconId: "processing",
  },
  {
    title: "Design",
    desc: "Engineering design principles, plant layouts and capacity planning best practices.",
    articles: "17+",
    iconId: "design",
  },
];

// ─── IMAGE PLACEHOLDER ────────────────────────────────────────────────────────

function ImgBox({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  label?: string;
}) {
  return (
    <div className={`${fill ? "absolute inset-0 w-full h-full" : "relative"} bg-gray-200 overflow-hidden ${className}`} style={!fill && height ? { height } : {}}>
      <img
        src={src}
        alt={alt}
        {...(fill ? {} : { width: width || 400, height: height || 300 })}
        className={`object-cover w-full h-full ${fill ? "absolute inset-0" : ""}`}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs font-medium pointer-events-none">
          {label}
        </div>
      )}
    </div>
  );
}

// ─── SECTION HEADER ───────────────────────────────────────────────────────────

function SectionHeader({ eyebrow, title, sub, linkText, linkHref, dark = false }: {
  eyebrow?: string;
  title: string;
  sub?: string;
  linkText?: string;
  linkHref?: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
      <div>
        {eyebrow && (
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-orange-500 inline-block" />
            <span className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-orange-400" : "text-orange-500"}`}>{eyebrow}</span>
            <span className="w-8 h-0.5 bg-orange-500 inline-block" />
          </div>
        )}
        <h2 className={`text-3xl font-extrabold ${dark ? "text-white" : "text-[#0d1b2e]"}`}>{title}</h2>
        {sub && <p className={`text-sm mt-2 ${dark ? "text-gray-400" : "text-gray-500"}`}>{sub}</p>}
      </div>
      {linkText && linkHref && (
        <Button
          variant="ghost"
          href={linkHref}
          className={`flex items-center gap-2 text-sm font-bold whitespace-nowrap mt-1 p-0 min-h-0 border-0 ${dark ? "text-orange-400 hover:text-orange-300" : "text-[#0d1b2e] hover:text-orange-500"} transition-colors`}
        >
          {linkText}
          <ArrowRight />
        </Button>
      )}
    </div>
  );
}

// Helper icons for Section 7 (Trending Insights)
const LargeEyeIcon = () => (
  <svg className="w-5 h-5 text-primary mx-auto mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const LargeClockIcon = () => (
  <svg className="w-5 h-5 text-primary mx-auto mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const LargeFolderIcon = () => (
  <svg className="w-5 h-5 text-secondary mx-auto mb-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <>
      <Header />
      <main className="blog-page bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════ */}
      <section
        className="relative bg-cover bg-center pt-16 pb-10 lg:pt-20 lg:pb-12 overflow-hidden"
        style={{
          backgroundImage: "url('/blogpageimg/top.jpg')",
        }}
      >
        {/* faint map background */}
        

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-muted">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-secondary">Blog</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-secondary">
                <Globe className="w-3 h-3" /> Blog
              </div>
              <h1 className="headline text-[clamp(2.15rem,5vw,3.3rem)] text-primary leading-[0.92] mb-4">
                ENGINEERING INSIGHTS.<br />
                <span className="text-secondary">DELIVERED WORLDWIDE.</span>
              </h1>
              <p className="text-sm leading-relaxed text-text-muted max-w-lg mb-6">
                Pithal Engineering delivers advanced crushing & screening solutions across the globe with precision, reliability and unmatched support. From engineering to installation — we&apos;re with you at every step.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" className="group" href="#network">
                  EXPLORE GLOBAL REACH <ArrowRight cls="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outlineNavy" className="group" href="/contact">
                  DISCUSS YOUR PROJECT <ArrowRight cls="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
           
          </div>

          {/* Stats strip */}
          <div className="mt-12 rounded-xl border border-slate-100 bg-slate-50 p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroSectionStats.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full border border-secondary/20 bg-secondary/5 flex items-center justify-center text-secondary flex-shrink-0">
                  <s.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-2xl font-black text-secondary">{s.value}</div>
                  <div className="text-xs font-bold text-primary uppercase tracking-wide">{s.label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════
          SECTION 3 — FEATURED INSIGHTS
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="FEATURED INSIGHTS"
            title="Featured Insights"
            sub="Curated knowledge from industry experts"
            linkText="View all insights →"
            linkHref="#"
          />

          <div className="grid md:grid-cols-2 gap-6 min-h-0 md:min-h-[500px]">
            {/* Large featured card */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer min-h-[350px] sm:min-h-[400px]">
              <ImgBox src={featuredPosts[0].img} alt={featuredPosts[0].title} fill label="Featured Image" className="group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/90 via-[#0d1b2e]/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#0d1b2e] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider">FEATURED</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-3 block">{featuredPosts[0].tag}</span>
                <h3 className="text-white text-2xl font-extrabold leading-tight mb-3">{featuredPosts[0].title}</h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-5 max-w-md">{featuredPosts[0].desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-gray-400 text-xs">
                    <span><CalendarIcon />{featuredPosts[0].date}</span>
                    <span><ClockIcon />{featuredPosts[0].read}</span>
                  </div>
                  <Button variant="primary" href="#" className="h-10 min-h-0 text-xs px-4 py-2 flex items-center gap-2">
                    Read More <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"><ArrowRight cls="w-3 h-3" /></div>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right column — 2 smaller cards */}
            <div className="flex flex-col gap-6">
              {featuredPosts.slice(1).map((post, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden group cursor-pointer flex-1 min-h-[200px] sm:min-h-[185px]">
                  <ImgBox src={post.img} alt={post.title} fill label="Article Image" className="group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/90 via-[#0d1b2e]/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <span className="text-orange-400 text-[10px] font-bold uppercase tracking-wider mb-2 block">{post.tag}</span>
                    <h3 className="text-white text-base font-extrabold leading-tight mb-3">{post.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-400 text-[10px]">
                        <span><CalendarIcon />{post.date}</span>
                        <span><ClockIcon />{post.read}</span>
                      </div>
                      <Button variant="ghost" href="#" className="text-white text-[10px] font-bold flex items-center gap-1 hover:text-orange-400 p-0 min-h-0 border-0">
                        Read More <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center"><ArrowRight cls="w-3 h-3" /></div>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — EXPLORE BY CATEGORY
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-secondary mb-3">
                Explore By Category
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2e] tracking-tight">
                Find insights across key industries and topics
              </h2>
            </div>
            <Button
              variant="ghost"
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#0d1b2e] hover:text-secondary p-0 min-h-0 border-0"
            >
              View all categories <ArrowRight cls="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href="#"
                className="group rounded-lg border border-slate-200 bg-white p-4 sm:p-6 text-center shadow-sm transition duration-300 hover:border-secondary/50 hover:shadow-lg flex flex-col h-full"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary transition duration-300 group-hover:bg-secondary/20">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#0d1b2e] mb-3">
                  {cat.name}
                </h3>
                <p className="text-[0.82rem] leading-6 text-slate-500 mb-6 flex-grow">{cat.desc}</p>
                <div className="mt-auto flex justify-center">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-secondary transition duration-300 group-hover:bg-secondary group-hover:text-white">
                    <ArrowRight cls="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — LATEST ARTICLES
      ══════════════════════════════════════════ */}
      <section id="articles" className="py-10 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-secondary mb-3">
                Latest Articles
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2e] tracking-tight">
                Stay updated with the latest insights, trends and expert perspectives.
              </h2>
            </div>
            <Button
              variant="ghost"
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#0d1b2e] hover:text-secondary p-0 min-h-0 border-0"
            >
              View all articles <ArrowRight cls="w-4 h-4" />
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {latestArticles.slice(0, 3).map((art, i) => (
              <div key={i} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-lg flex flex-col h-full">
                <div className="relative h-48 sm:h-72 overflow-hidden flex-shrink-0">
                  <ImgBox src={art.img} alt={art.title} fill label="Article image" className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary self-start">
                    {art.tagIcon}
                    {art.tag}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0d1b2e] leading-tight mb-4 group-hover:text-secondary transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 mb-6 flex-grow">{art.desc}</p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500 mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-5">
                      <span className="flex items-center gap-2 text-slate-500"><CalendarIcon />{art.date}</span>
                      <span className="flex items-center gap-2 text-slate-500"><ClockIcon />{art.read}</span>
                    </div>
                    <Button variant="ghost" href="#" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-secondary/80 p-0 min-h-0 border-0">
                      Read More <ArrowRight cls="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — INDUSTRIAL KNOWLEDGE HUB
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-10 h-0.5 bg-secondary" />
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.25em]">INDUSTRIAL KNOWLEDGE HUB</span>
              <span className="w-10 h-0.5 bg-secondary" />
            </div>
            <h2 className="text-center text-[2.25rem] sm:text-[3rem] font-bold text-primary leading-[1.15] tracking-tight font-sans">
              EXPERT INSIGHTS ACROSS EVERY STAGE<br />
              OF <span className="text-secondary">INDUSTRIAL OPERATIONS.</span>
            </h2>
            <p className="text-sm text-text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
              Access expert knowledge, proven methodologies and industry insights to optimize performance,
              drive efficiency and build better outcomes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_auto_1.05fr] lg:items-center">
            {/* Left column cards */}
            <div className="space-y-6">
              {knowledgeHubTopics.slice(0, 2).map((topic, i) => (
                <div key={i} className="rounded-lg border border-slate-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-200">
                  <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-stretch min-h-[220px]">
                    <div className="p-5 sm:p-7 flex flex-col justify-between">
                      <div>
                        {/* Header: Circle Icon Badge on left, text stack on right */}
                        <div className="flex items-center gap-3.5 mb-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white text-secondary shadow-sm flex-shrink-0">
                            {topic.icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-extrabold text-primary leading-tight tracking-wide">{topic.title}</h3>
                            <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.18em] mt-1.5 block">{topic.count} ARTICLES</span>
                          </div>
                        </div>
                        {/* Bullet checklist */}
                        <ul className="space-y-2 mb-6">
                          {topic.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                              <span className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Explore Link */}
                      <Button variant="ghost" href="#" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary hover:text-secondary p-0 min-h-0 border-0">
                        EXPLORE ARTICLES <span className="text-secondary font-black text-xs">→</span>
                      </Button>
                    </div>
                    {/* Image with Left-to-Right Fade */}
                    <div className="relative h-52 lg:h-auto overflow-hidden">
                      <ImgBox src={topic.img} alt={topic.title} fill label="Topic image" className="object-cover" />
                      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none hidden lg:block" />
                      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none lg:hidden" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center hub graphic */}
            <div className="relative hidden lg:flex h-[480px] w-[260px] items-center justify-center px-4">
              {/* Graphic background SVG */}
              <svg className="absolute inset-0 w-full h-full text-slate-200 pointer-events-none" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="1" />
                <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="40" r="2.5" fill="var(--secondary)" />
                <circle cx="100" cy="160" r="2.5" fill="var(--secondary)" />
                <circle cx="40" cy="100" r="2.5" fill="var(--secondary)" />
                <circle cx="160" cy="100" r="2.5" fill="var(--secondary)" />
              </svg>

              {/* Labels */}
              <div className="absolute top-3 flex justify-center w-full">
                <div className="rounded-full border border-slate-100 bg-white px-4 py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm whitespace-nowrap">
                  Engineering Knowledge
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-x-[42%] -translate-y-1/2 z-11">
                <div className="rounded-full border border-slate-100 bg-white px-4 py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm whitespace-nowrap">
                  Technical Resources
                </div>
              </div>

              <div className="absolute right-0 top-1/2 translate-x-[42%] -translate-y-1/2 z-11 ">
                <div className="rounded-full border border-slate-100 bg-white px-4 py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm whitespace-nowrap">
                  Industry Expertise
                </div>
              </div>

              <div className="absolute bottom-3 flex justify-center w-full">
                <div className="rounded-full border border-slate-100 bg-white px-4 py-1.5 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 shadow-sm whitespace-nowrap">
                  Best Practices
                </div>
              </div>

              {/* Central Logo Circle */}
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-md text-3xl font-black text-secondary">
                P
              </div>
            </div>

            {/* Right column cards */}
            <div className="space-y-6">
              {knowledgeHubTopics.slice(2, 4).map((topic, i) => (
                <div key={i} className="rounded-lg border border-slate-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-200">
                  <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-stretch min-h-[220px]">
                    <div className="p-5 sm:p-7 flex flex-col justify-between">
                      <div>
                        {/* Header: Circle Icon Badge on left, text stack on right */}
                        <div className="flex items-center gap-3.5 mb-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white text-secondary shadow-sm flex-shrink-0">
                            {topic.icon}
                          </div>
                          <div>
                            <h3 className="text-sm font-extrabold text-primary leading-tight tracking-wide">{topic.title}</h3>
                            <span className="text-[9px] font-bold text-secondary uppercase tracking-[0.18em] mt-1.5 block">{topic.count} ARTICLES</span>
                          </div>
                        </div>
                        {/* Bullet checklist */}
                        <ul className="space-y-2 mb-6">
                          {topic.items.map((item, j) => (
                            <li key={j} className="flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                              <span className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Explore Link */}
                      <Button variant="ghost" href="#" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary hover:text-secondary p-0 min-h-0 border-0">
                        EXPLORE ARTICLES <span className="text-secondary font-black text-xs">→</span>
                      </Button>
                    </div>
                    {/* Image with Left-to-Right Fade */}
                    <div className="relative h-52 lg:h-auto overflow-hidden">
                      <ImgBox src={topic.img} alt={topic.title} fill label="Topic image" className="object-cover" />
                      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none hidden lg:block" />
                      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent pointer-events-none lg:hidden" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Unified Bottom stats banner */}
          <div className="mt-12 bg-white rounded-xl border border-slate-100 p-5 sm:p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
              {hubStats.map((s, i) => (
                <div key={i} className="flex gap-4 items-center px-4 first:pl-0 last:pr-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0 shadow-sm">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-primary leading-tight">{s.value}</div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">{s.label}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-normal font-medium">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 7 — TRENDING INSIGHTS
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 h-0.5 bg-secondary" />
                <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-primary">TRENDING INSIGHTS</h2>
                <span className="w-8 h-0.5 bg-secondary" />
              </div>
              <p className="text-xs text-text-muted font-medium">Most popular reads from our industry experts</p>
            </div>
            <Button
              variant="ghost"
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary hover:text-secondary p-0 min-h-0 border-0"
            >
              View all insights <span className="text-secondary font-black text-xs">→</span>
            </Button>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-slate-100 bg-bg-light shadow-sm">
            {trendingPosts.map((post, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 items-center p-4 sm:p-6 border-b border-slate-100 last:border-b-0 bg-white ${i === trendingPosts.length - 1 ? 'border-b-0' : ''}`}>
                
                {/* 1. Left unified badge & image block */}
                <div className="flex rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 w-full lg:w-auto" style={{ height: 110 }}>
                  {/* Number Badge */}
                  <div className="w-14 bg-primary-dark flex items-center justify-center text-white text-base font-black flex-shrink-0">
                    {post.num}
                  </div>
                  {/* Image */}
                  <div className="flex-1 lg:w-48 relative bg-slate-100">
                    <ImgBox src={post.img} alt={post.title} fill className="object-cover" />
                  </div>
                </div>

                {/* 2. Middle Text Block with vertical divider on the right */}
                <div className="min-w-0 lg:pr-8 lg:border-r lg:border-slate-100 h-full flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">
                    {post.tag}
                  </span>
                  <h3 className="text-primary font-extrabold text-base leading-snug mb-2 hover:text-secondary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-slate-500 font-medium">{post.desc}</p>
                </div>

                {/* 3. Right Stats Columns */}
                <div className="grid grid-cols-3 gap-6 w-full lg:w-[260px] text-center flex-shrink-0">
                  {/* Views */}
                  <div>
                    <LargeEyeIcon />
                    <div className="text-sm font-extrabold text-primary">{post.views}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Views</div>
                  </div>
                  {/* Read Time */}
                  <div>
                    <LargeClockIcon />
                    <div className="text-sm font-extrabold text-primary">{post.read}</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">min read</div>
                  </div>
                  {/* Category */}
                  <div className="flex flex-col justify-between h-full">
                    <LargeFolderIcon />
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wide leading-tight px-1">{post.category}</div>
                  </div>
                </div>

              </div>
            ))}

            <div className="p-6 text-center bg-white border-t border-slate-100 flex justify-center">
              <Button
                variant="ghost"
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-secondary bg-white px-8 py-3 text-xs font-bold uppercase tracking-[0.16em] text-secondary transition hover:bg-secondary hover:text-white shadow-sm min-h-0 h-11"
              >
                Explore More Insights <span className="font-black text-xs">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 8 — RESOURCE CENTER
      ══════════════════════════════════════════ */}
      <section id="solutions" className="py-10 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">RESOURCE CENTER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2e] leading-tight">
              EXPERT RESOURCES.
              <br />
              <span className="text-orange-500">PRACTICAL SOLUTIONS.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              Download our expert guides, checklists and technical resources to improve efficiency,
              reduce downtime and maximize performance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-5 mb-8">
            {resourceGuides.map((guide, i) => {
              const IconComponent = guide.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-orange-300 hover:shadow-xl flex flex-col h-full"
                >
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <ImgBox src={guide.img} alt={guide.title} fill label="Guide Image" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2e]/70 to-transparent" />
                  </div>
                  {/* Floating Icon - placed outside the overflow-hidden parent to prevent clipping */}
                  <div className="absolute left-1/2 top-52 z-20 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white bg-white text-orange-500 shadow-lg">
                      <IconComponent className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="pt-10 px-4 sm:px-6 pb-5 sm:pb-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[#0d1b2e] font-extrabold text-lg mb-3">{guide.title}</h4>
                      <p className="text-sm leading-relaxed text-slate-600 mb-5">{guide.desc}</p>
                      <ul className="space-y-3 mb-6">
                        {guide.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-center gap-2 rounded-full bg-orange-500 text-white border-orange-500 hover:bg-orange-600 hover:text-white mt-auto"
                    >
                      <DownloadIcon />DOWNLOAD RESOURCE
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom guide form */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 sm:p-7 flex flex-col md:flex-row items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path d="M12 2l2 4 4.5.6-3.3 3.2.8 4.5L12 12 7 14.3l.8-4.5L4.5 6.6 9 6 12 2z" stroke="#E8762C" strokeWidth="1.5" fill="none" />
                  <path d="M6 19h12M9 22h6" stroke="#E8762C" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-[#0d1b2e] text-sm">NEED A CUSTOM GUIDE?</p>
                <p className="text-gray-500 text-xs">Tell us your industry needs and we will send you the relevant resources.</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col sm:flex-row flex-wrap gap-3 w-full">
              <input type="text" placeholder="Full Name" className="border border-gray-300 rounded px-4 py-2.5 text-sm w-full sm:flex-1 sm:min-w-36 focus:outline-none focus:border-orange-400" />
              <input type="email" placeholder="Work Email" className="border border-gray-300 rounded px-4 py-2.5 text-sm w-full sm:flex-1 sm:min-w-36 focus:outline-none focus:border-orange-400" />
              <input type="text" placeholder="Company Name" className="border border-gray-300 rounded px-4 py-2.5 text-sm w-full sm:flex-1 sm:min-w-36 focus:outline-none focus:border-orange-400" />
              <Button variant="primary" className="w-full sm:w-auto whitespace-nowrap">
                GET RESOURCES →
              </Button>
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 md:text-left md:ml-2">
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 9 — EXPERT PERSPECTIVES
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">EXPERT INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b2e] leading-tight">
              EXPERT PERSPECTIVES.
              <br />
              <span className="text-orange-500">REAL INDUSTRY EXPERIENCE.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              Our engineering experts share their insights, technical perspectives and industry observations
              to help you stay ahead.
            </p>
          </div>

              <div className="grid gap-5 md:grid-cols-4 mb-10">
            {expertQuotes.map((q, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate-200 bg-white p-5 sm:p-8 shadow-sm transition hover:border-orange-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-3xl font-black text-orange-500">
                    “
                  </div>
                  <p className="text-sm leading-7 text-slate-700 italic">{q.quote}</p>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sm font-black text-[#0d1b2e]">
                    {q.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#0d1b2e] leading-tight">
                      {q.author}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-orange-500">
                      {q.role}
                    </p>
                  </div>
                  <p className="ml-auto text-[10px] uppercase tracking-[0.2em] text-slate-500">
                    {q.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 10 — NEWSLETTER
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-white overflow-hidden shadow-xl lg:grid lg:grid-cols-12 min-h-[580px]">
            {/* Left Column */}
            <div className="lg:col-span-7 p-5 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center bg-white">
              {/* Badge */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/30 bg-secondary/5 text-secondary shadow-sm">
                  <Mail className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
                    STAY INFORMED. STAY AHEAD.
                  </p>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-[2.25rem] sm:text-[3rem] font-bold text-primary leading-[1.1] tracking-tight mb-5 font-sans">
                Insights that power<br />
                better <span className="text-secondary">decisions.</span>
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-text-muted leading-relaxed max-w-[500px] mb-8">
                Subscribe to our insights newsletter and get expert knowledge, industry updates and practical engineering solutions delivered to your inbox.
              </p>

              {/* Pillars/Features */}
              <div className="grid gap-6 sm:grid-cols-3 mb-10">
                {[
                  {
                    icon: <TrendingUp className="w-6 h-6 text-secondary stroke-[1.8]" />,
                    title: "Engineering Trends",
                    subtitle: "Stay updated with the latest industry trends and developments.",
                  },
                  {
                    icon: <Cog className="w-6 h-6 text-secondary stroke-[1.8]" />,
                    title: "Plant Optimization Tips",
                    subtitle: "Actionable tips to improve efficiency, performance and productivity.",
                  },
                  {
                    icon: <Lightbulb className="w-6 h-6 text-secondary stroke-[1.8]" />,
                    title: "Industrial Innovations",
                    subtitle: "Discover new technologies and innovations shaping the future.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-3">
                    <div>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-primary mb-1">{item.title}</p>
                      <p className="text-[11px] leading-relaxed text-text-muted">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Subscription Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Subscribed: ${email}`);
                  setEmail("");
                }}
                className="flex flex-col sm:flex-row gap-3 items-stretch max-w-[520px] mb-4"
              >
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-4 flex items-center text-text-muted">
                    <Mail className="w-4 h-4 stroke-[1.8]" />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 rounded-lg border border-border bg-white pl-11 pr-4 text-sm text-text-dark outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all placeholder:text-text-muted"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="h-12 min-h-0 rounded-lg px-6 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  SUBSCRIBE TO INSIGHTS <ArrowRight cls="w-4 h-4 text-white" />
                </Button>
              </form>

              {/* Privacy Note */}
              <p className="flex items-center gap-2 text-[11px] text-text-muted tracking-wide mt-2">
                <Lock className="w-3.5 h-3.5" />
                <span>We respect your privacy. No spam, ever. Unsubscribe anytime.</span>
              </p>
            </div>

            {/* Right Column (Image + Overlay Card) */}
            <div className="lg:col-span-5 relative min-h-[450px] lg:min-h-full overflow-hidden bg-slate-100">
              <Image
                src="/blogpageimg/plantoptimization2.jpg"
                alt="Crushing plant in operation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Desktop mask */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent pointer-events-none hidden lg:block" />
              {/* Mobile mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none lg:hidden" />

              {/* Overlaid Card */}
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-[310px] bg-white rounded-lg border border-slate-100 p-5 shadow-2xl z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                    PITHAL <span className="text-secondary">INSIGHTS</span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                    <Mail className="w-3.5 h-3.5 stroke-[1.8]" />
                  </div>
                </div>

                {/* Sub-header */}
                <p className="text-[10px] text-text-muted font-semibold mb-3">
                  Expert knowledge. Practical solutions.
                </p>

                {/* Thumbnail */}
                <div className="relative h-20 w-full overflow-hidden rounded-lg mb-3 bg-slate-50">
                  <Image
                    src="/blogpageimg/plantoptimization2.jpg"
                    alt="Maximizing Plant Efficiency thumbnail"
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>

                {/* Headline */}
                <h3 className="text-sm font-extrabold text-primary leading-tight mb-1.5">
                  Maximizing Plant Efficiency: Key Strategies That Work
                </h3>

                {/* Subtext */}
                <p className="text-[11px] leading-relaxed text-text-muted mb-3.5">
                  Explore proven strategies to improve throughput, reduce costs and enhance overall performance.
                </p>

                {/* Link */}
                <Button
                  variant="ghost"
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary hover:text-secondary/80 p-0 min-h-0 border-0"
                >
                  <span>Read more</span>
                  <span className="text-xs">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 11 — COMPREHENSIVE COVERAGE
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-secondary mb-3 text-center">
              — INDUSTRY TOPICS —
            </p>
            <h2 className="text-center text-[2.25rem] sm:text-[3rem] font-bold text-primary leading-[1.15] tracking-tight font-sans">
              COMPREHENSIVE COVERAGE.<br />
              REAL INDUSTRY <span className="text-secondary">KNOWLEDGE.</span>
            </h2>
            <p className="text-center text-sm text-text-muted max-w-2xl mx-auto mt-4 leading-relaxed">
              In-depth articles, expert guides and technical insights across every critical area of industrial operations.
            </p>

            {/* Stats Pill */}
            <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 mt-6 text-[11px] text-primary font-bold uppercase tracking-[0.12em] bg-bg-light border border-border/80 px-6 py-2.5 rounded-full max-w-fit mx-auto shadow-sm">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 stroke-secondary mr-1.5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5a2 2 0 012-2h3a2 2 0 012 2v12a2 2 0 00-2-2H5a2 2 0 00-2 2V5z" />
                <path d="M17 5a2 2 0 00-2-2h-3a2 2 0 00-2 2v12a2 2 0 012-2h3a2 2 0 012 2V5z" />
              </svg>
              <span>9 CORE TOPICS</span>
              <span className="text-secondary font-black">•</span>
              <span>100+ EXPERT ARTICLES</span>
              <span className="text-secondary font-black">•</span>
              <span>CONTINUOUSLY UPDATED</span>
            </div>
          </div>

          {/* Grid of Topic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-10">
            {coverageTopics.map((topic, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-border/60 p-5 sm:p-6 flex gap-5 hover:border-secondary/40 hover:shadow-lg transition-all group cursor-pointer"
              >
                {/* Schematic Circular Badge */}
                <div className="flex-shrink-0 w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-bg-light border border-border/50 flex items-center justify-center overflow-hidden">
                  {getTopicIcon(topic.iconId)}
                </div>

                {/* Content Column */}
                <div className="flex-1 flex flex-col min-w-0">
                  <h3 className="font-sans text-[15px] font-bold text-primary tracking-wide mb-1.5 uppercase">
                    {topic.title}
                  </h3>
                  <p className="text-text-muted text-[12px] leading-relaxed mb-4">
                    {topic.desc}
                  </p>

                  {/* Bottom metrics & arrow */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-auto">
                    <div className="flex items-center gap-1.5 text-text-muted text-[10px] font-bold uppercase tracking-wider">
                      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 stroke-text-muted" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 2v12a1 1 0 001 1h8a1 1 0 001-1V5l-3-3H4a1 1 0 00-1 1z" />
                        <path d="M9 2v3h3" />
                      </svg>
                      <span>{topic.articles} ARTICLES</span>
                    </div>
                    <span className="text-secondary text-base font-bold transition-transform group-hover:translate-x-1 duration-200">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dark Bottom Banner */}
          <div className="bg-primary-dark rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 mt-12 shadow-md">
            <div className="flex items-center gap-4">
              {/* Circle with Book icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/30 bg-secondary/5 text-secondary flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 stroke-secondary" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5a2 2 0 012-2h3a2 2 0 012 2v12a2 2 0 00-2-2H5a2 2 0 00-2 2V5z" />
                  <path d="M17 5a2 2 0 00-2-2h-3a2 2 0 00-2 2v12a2 2 0 012-2h3a2 2 0 012 2V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-[14px] uppercase tracking-wider mb-1">
                  EXPLORE. LEARN. IMPROVE.
                </h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Dive into expert content across all topics and enhance your industrial expertise.
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              href="#"
              className="border border-secondary/60 text-secondary hover:bg-secondary hover:text-white rounded-lg px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 transition-all whitespace-nowrap cursor-pointer min-h-0 h-11"
            >
              <span>VIEW ALL TOPICS</span>
              <span className="text-xs">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 12 — FROM INSIGHTS TO SOLUTIONS
      ══════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-[#fafafa]/50 p-8 sm:p-12 shadow-sm">
            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center justify-between gap-8">
              {/* Left Column */}
              <div className="lg:col-span-7">
                {/* Badge Row */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-secondary/20 bg-secondary/5 text-secondary shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5.5 h-5.5 stroke-secondary" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                  </div>
                  <span className="text-secondary text-[11px] font-extrabold uppercase tracking-[0.2em]">
                    FROM INSIGHTS TO SOLUTIONS
                  </span>
                </div>

                {/* Headline */}
                <h2 className="text-[2.25rem] sm:text-[2.75rem] font-bold text-primary leading-[1.1] tracking-tight font-sans">
                  Learned About<br />
                  Plant Optimization?
                </h2>

                {/* Description */}
                <p className="text-text-muted text-sm mt-4 leading-relaxed max-w-[500px]">
                  Turn engineering insights into real-world performance with our crushing solutions.
                </p>
              </div>

              {/* Right Column Buttons */}
              <div className="lg:col-span-5 flex flex-wrap items-center justify-start lg:justify-end gap-4">
                <Button
                  variant="primary"
                  href="/solutions"
                  className="px-7 py-3.5 rounded-lg flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer min-h-0 h-12"
                >
                  <span>View Solutions</span>
                  <span className="text-sm">→</span>
                </Button>
                <Button
                  variant="outlineNavy"
                  href="/contact"
                  className="px-7 py-3.5 rounded-lg flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer min-h-0 h-12"
                >
                  <span>Talk To Experts</span>
                  <span className="text-sm">→</span>
                </Button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200/60 my-8" />

            {/* Horizontal Pills list */}
            <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-4">
              {/* Pill 1 */}
              <div className="bg-white rounded-full border border-border/80 px-5 py-2.5 flex items-center gap-2.5 shadow-sm text-text-dark font-bold text-[11px] uppercase tracking-wide">
                <svg className="w-5 h-5 stroke-secondary" viewBox="0 0 64 64" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 14h40l-8 14H20L12 14z" />
                  <path d="M20 28l-2 18h28l-2-18" />
                  <path d="M32 20l6 20H26l6-20z" />
                </svg>
                <span>Crushing Systems</span>
              </div>

              <span className="text-secondary font-black">•</span>

              {/* Pill 2 */}
              <div className="bg-white rounded-full border border-border/80 px-5 py-2.5 flex items-center gap-2.5 shadow-sm text-text-dark font-bold text-[11px] uppercase tracking-wide">
                <svg className="w-5 h-5 stroke-secondary" viewBox="0 0 64 64" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 20l36 12" />
                  <path d="M14 30l36 12" strokeDasharray="2 2" />
                  <circle cx="28" cy="26" r="6" />
                </svg>
                <span>Screening Plants</span>
              </div>

              <span className="text-secondary font-black">•</span>

              {/* Pill 3 */}
              <div className="bg-white rounded-full border border-border/80 px-5 py-2.5 flex items-center gap-2.5 shadow-sm text-text-dark font-bold text-[11px] uppercase tracking-wide">
                <svg className="w-5 h-5 stroke-secondary" viewBox="0 0 64 64" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 44V12l32 32H12z" />
                  <path d="M40 14L32 36M40 14l8 22" />
                </svg>
                <span>Plant Design</span>
              </div>

              <span className="text-secondary font-black">•</span>

              {/* Pill 4 */}
              <div className="bg-white rounded-full border border-border/80 px-5 py-2.5 flex items-center gap-2.5 shadow-sm text-text-dark font-bold text-[11px] uppercase tracking-wide">
                <svg className="w-5 h-5 stroke-secondary" viewBox="0 0 64 64" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 12h36l-10 20H24L14 12z" />
                  <path d="M20 38h24l-6 8H26l-6-8z" />
                </svg>
                <span>Material Processing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POPUP STRIP — LET'S ENGINEER
      ══════════════════════════════════════════ */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-[#fafafa]/50 p-5 sm:p-10 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left side text */}
            <div className="flex flex-col gap-3">
              {/* Orange accent line */}
              <div className="w-8 h-1 bg-secondary rounded" />
              <h3 className="text-[1.75rem] sm:text-[2.25rem] font-bold text-primary leading-tight font-sans uppercase">
                LET'S ENGINEER<br />
                <span className="text-secondary">BETTER</span> INDUSTRIAL OUTCOMES.
              </h3>
            </div>

            {/* Right side buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 lg:justify-end w-full lg:w-auto">
              {/* Button 1: Explore Solutions */}
              <Button
                variant="primary"
                href="/solutions"
                className="px-5 py-3.5 rounded-lg flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer min-h-0 h-[46px] w-full sm:w-auto"
              >
                {/* Factory outline icon */}
                <svg className="w-5 h-5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20h20M5 17V7l5 3v7M10 17v-5l5 2v3M15 17v-3l5 1v2" />
                </svg>
                <span>Explore Solutions</span>
                <span className="text-sm">→</span>
              </Button>

              {/* Button 2: Discuss Your Project */}
              <Button
                variant="outlineNavy"
                href="/contact"
                className="px-5 py-3.5 rounded-lg flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer min-h-0 h-[46px] w-full sm:w-auto"
              >
                {/* Chat icon */}
                <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
                <span>Discuss Your Project</span>
                <span className="text-sm">→</span>
              </Button>

              {/* Button 3: Speak With Experts */}
              <Button
                variant="ghost"
                href="/contact"
                className="border border-slate-300 text-primary hover:bg-bg-light px-5 py-3.5 rounded-lg flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-wider transition-all shadow-sm cursor-pointer min-h-0 h-[46px] w-full sm:w-auto"
              >
                {/* Users icon */}
                <svg className="w-5 h-5 stroke-primary" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
                <span>Speak With Experts</span>
                <span className="text-sm">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}