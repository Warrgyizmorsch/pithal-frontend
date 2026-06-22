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
  Pickaxe,
  Boxes,
  Factory,
  Road,
  Recycle,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { CrushingProcessTimeline } from "@/components/common/CrushingProcessTimeline";

// ─────────────────────────────────────────────────────────────────────────────
// DATA CONFIGURATION (MATCHING SCREENSHOTS EXACTLY)
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  {
    value: "100%",
    label: "Trusted",
    desc: "For Everyone",
    icon: "inst",
  },
  {
    value: "Large",
    label: "Plant Capacity",
    desc: "All India Presence",
    icon: "countries",
  },
  { value: "24/7", label: "SUPPORT", desc: "Always With You", icon: "support" },
  {
    value: "CUSTOM",
    label: "PLANT SOLUTIONS",
    desc: "Built Around Your Needs",
    icon: "custom",
  },
];

const industriesServe = [
  {
    title: "MINING",
    icon: "mining",
    image: "/solutionspage/mining.jpg",
    challenge:
      "High abrasion, tough rock and continuous operation demanding maximum uptime.",
    solution:
      "Heavy-duty crushers designed for high capacity, durability & reliability.",
  },
  {
    title: "AGGREGATES",
    icon: "aggregate",
    image: "/solutionspage/aggregate.jpg",
    challenge:
      "Consistent quality, shape & gradation with high production demands.",
    solution:
      "Advanced crushing & screening systems for superior output & efficiency.",
  },
  {
    title: "CEMENT",
    icon: "cement",
    image: "/solutionspage/cement.jpg",
    challenge:
      "Hard limestone, high temperatures and strict quality requirements.",
    solution:
      "Robust equipment built for high performance in harsh conditions.",
  },
  {
    title: "INFRASTRUCTURE",
    icon: "infra",
    image: "/solutionspage/infrastructure.jpg",
    challenge:
      "Large-scale projects need reliable supply of quality aggregates on time.",
    solution:
      "Efficient, high-capacity solutions that ensure timely project completion.",
  },
  {
    title: "CONSTRUCTION",
    icon: "const",
    image: "/solutionspage/construction.jpg",
    challenge:
      "Tight deadlines, limited space and need for cost-effective solutions.",
    solution:
      "Compact, mobile & efficient crushing systems for every construction need.",
  },
  {
    title: "RECYCLING",
    icon: "recycle",
    image: "/solutionspage/7.jpg",
    challenge:
      "Processing demolition waste efficiently while maintaining environmental compliance.",
    solution:
      "Specialized crushing & screening solutions for maximum recycling.",
  },
];

const challengesSolve = [
  {
    step: "01",
    image: "/solutionspage/challenges we solve 1.jpg",
    challengeTitle: "High Wear & Frequent Downtime",
    challengeDesc:
      "Heavy wear parts lead to breakdowns, production loss, and higher costs.",
    solutionTitle: "Built Tough. Built to Last.",
    solutionDesc:
      "Wear-resistant design, premium materials, and robust engineering for long life.",
    icon: Shield,
  },
  {
    step: "02",
    image: "/solutionspage/challenges we solve 2.jpg",
    challengeTitle: "Inconsistent Output Quality",
    challengeDesc:
      "Irregular size, shape, and gradation affect final product quality.",
    solutionTitle: "Precision Crushing & Screening",
    solutionDesc:
      "Advanced technology ensures uniform output with accurate particle shape.",
    icon: Layers,
  },
  {
    step: "03",
    image: "/solutionspage/challenges we solve 3.jpg",
    challengeTitle: "Low Productivity & High Costs",
    challengeDesc:
      "High energy consumption and inefficient processes increase OPEX.",
    solutionTitle: "High Efficiency, Lower Operating Cost",
    solutionDesc:
      "Energy-efficient machines and optimized designs to maximize productivity.",
    icon: TrendingUp,
  },
  {
    step: "04",
    image: "/solutionspage/challenges we solve 14operations.jpg",
    challengeTitle: "Complex Operations & Maintenance",
    challengeDesc:
      "Difficult maintenance and complex operations lead to delays.",
    solutionTitle: "Easy Operation, Hassle-Free Maintenance",
    solutionDesc:
      "User-friendly machines with easy access for quick maintenance and minimal downtime.",
    icon: Wrench,
  },
];

const challengesBottomBar = [
  {
    label: "Reduced Downtime",
    desc: "Maximum uptime, uninterrupted operations.",
    icon: Shield,
  },
  {
    label: "Better Productivity",
    desc: "Higher output with optimized performance.",
    icon: TrendingUp,
  },
  {
    label: "Lower Operating Cost",
    desc: "Energy-efficient solutions that save more.",
    icon: DollarSign,
  },
  {
    label: "Reliable Performance",
    desc: "Engineered for durability and consistent results.",
    icon: Shield,
  },
  {
    label: "Expert Support",
    desc: "End-to-end support whenever you need.",
    icon: Headphones,
  },
];

const plantWorkflow = [
  {
    step: "01",
    title: "RAW MATERIAL",
    desc: "Excavated material fed into the system.",
    icon: "raw",
    image: "/solutionspage/complete plant processs 1material.jpg",
  },
  {
    step: "02",
    title: "PRIMARY CRUSHER",
    desc: "Reduces large rocks into manageable size.",
    icon: "primary",
    image: "/solutionspage/complete plant processs 2 1material.jpg",
  },
  {
    step: "03",
    title: "SECONDARY CRUSHER",
    desc: "Further reduction for consistent output.",
    icon: "secondary",
    image: "/solutionspage/complete plant processs 3.jpg",
  },
  {
    step: "04",
    title: "SCREENING",
    desc: "Separates material into required sizes.",
    icon: "screen",
    image: "/solutionspage/complete plant processs 4.jpg",
  },
  {
    step: "05",
    title: "PRIME CONVEYOR SYSTEM",
    desc: "Efficient material transfer across stages.",
    icon: "conveyor",
    image: "/solutionspage/complete plant processs 5.jpg",
  },
  {
    step: "06",
    title: "FINAL OUTPUT",
    desc: "High-quality, uniform material ready to use.",
    icon: "final",
    image: "/solutionspage/complete plant processs 6.jpg",
  },
];

const workflowBottomPillars = [
  {
    label: "OPTIMIZED FLOW",
    desc: "Maximized efficiency at every stage.",
    icon: Settings,
  },
  {
    label: "CONSISTENT QUALITY",
    desc: "Uniform output with precise grading.",
    icon: Shield,
  },
  {
    label: "ENERGY EFFICIENT",
    desc: "Smart systems designed for lower power usage.",
    icon: Zap,
  },
  {
    label: "HIGH PRODUCTIVITY",
    desc: "Engineered for continuous operation & higher output.",
    icon: Cpu,
  },
  {
    label: "RELIABLE SUPPORT",
    desc: "End-to-end support for smooth plant performance.",
    icon: Headphones,
  },
];

const operationBullets = [
  {
    title: "EXPERT ENGINEERS",
    desc: "Industry experience you can trust.",
    icon: HardHat,
  },
  {
    title: "TAILORED SOLUTIONS",
    desc: "Custom designs for maximum efficiency.",
    icon: FileText,
  },
  {
    title: "PROVEN RELIABILITY",
    desc: "Engineered for durability and performance.",
    icon: CheckCircle2,
  },
  {
    title: "END-TO-END SUPPORT",
    desc: "From concept to commissioning.",
    icon: Headphones,
  },
];

const engineeringServices = [
  {
    step: "01",
    title: "PLANT PLANNING",
    desc: "We plan your entire crushing plant for optimal workflow, safety, and future scalability.",
    image: "/solutionspage/our services 4 (2).png",
  },
  {
    step: "02",
    title: "MACHINE SELECTION",
    desc: "The right machine for the right application — chosen for performance, efficiency & durability.",
    image: "/solutionspage/our our services (3).png",
  },
  {
    step: "03",
    title: "LAYOUT OPTIMIZATION",
    desc: "We design smart layouts that maximize space utilization, material flow & operational efficiency.",
    image: "/solutionspage/our services 5.png",
  },
  {
    step: "04",
    title: "CAPACITY PLANNING",
    desc: "Data-driven capacity calculations to ensure your plant meets today's needs and tomorrow's growth.",
    image: "/solutionspage/our services , 1.png",
  },
  {
    step: "05",
    title: "SITE CONSULTATION",
    desc: "On-site analysis & expert guidance to create solutions tailored to your exact site conditions.",
    image: "/solutionspage/our services 2.png",
  },
];

const builtApplications = [
  {
    title: "GRANITE CRUSHING",
    desc: "High-capacity crushing solutions designed for hard rock applications with maximum productivity.",
    image: "/solutionspage/application we power 1.jpg",
  },
  {
    title: "LIMESTONE PROCESSING",
    desc: "Efficient processing systems for consistent output and superior material quality.",
    image: "/solutionspage/application we power 2.jpg",
  },
  {
    title: "SAND MANUFACTURING",
    desc: "Advanced sand-making solutions for high-quality manufactured sand and controlled grading.",
    image: "/solutionspage/application we power 3.jpg",
  },
  {
    title: "ROAD CONSTRUCTION",
    desc: "Reliable crushing and screening solutions for road base, sub-base and asphalt applications.",
    image: "/solutionspage/application we power 4.jpg",
  },
  {
    title: "QUARRY OPERATIONS",
    desc: "Complete crushing systems built for demanding quarry environments and continuous use.",
    image: "/solutionspage/application we power 5.jpg",
  },
  {
    title: "INDUSTRIAL MATERIAL HANDLING",
    desc: "Robust material handling solutions for bulk operations across various industrial sectors.",
    image: "/solutionspage/7.jpg",
  },
];

const performanceMetrics = [
  {
    pct: "92%",
    label: "HIGH OUTPUT EFFICIENCY",
    desc: "Engineered for maximum output with consistent performance across all operations.",
    icon: "gauge",
  },
  {
    pct: "85%",
    label: "REDUCED DOWOWNTIME",
    desc: "Robust design and quality components ensure longer uptime and fewer breakdowns.",
    icon: "clock",
  },
  {
    pct: "30%",
    label: "LOWER OPERATING COST",
    desc: "Optimized design reduces wear, energy consumption, and maintenance costs.",
    icon: "rupee",
  },
  {
    pct: "25%",
    label: "ENERGY EFFICIENT SYSTEMS",
    desc: "Advanced engineering for lower power consumption and sustainable operations.",
    icon: "leaf",
  },
  {
    pct: "40%",
    label: "HIGH PRODUCTION CAPACITY",
    desc: "High-capacity systems built to handle demanding operations with ease.",
    icon: "chart",
  },
];

const performanceSliders = [
  { label: "Overall Equipment Efficiency", value: 92 },
  { label: "System Reliability", value: 85 },
  { label: "Cost Efficiency", value: 70 },
  { label: "Energy Efficiency", value: 75 },
  { label: "Production Capacity", value: 90 },
];

const performanceStatsList = [
  { value: "Best", label: "Quality Commitment", desc: "Excellence in Technology" },
  { value: "Performance", label: "Accurate & Reliable ", desc: "Served" },
  { value: "24/7", label: "Support & Service", desc: "Worldwide" },
];

const smartProcessSteps = [
  {
    step: "01",
    title: "SITE INSPECTION",
    desc: "We assess your site conditions, material characteristics, and production goals.",
    image: "/solutionspage/our smart procss 1.jpg",
  },
  {
    step: "02",
    title: "PLANNING",
    desc: "Our engineers create optimized plant layouts and process flows tailored to your requirements.",
    image: "/solutionspage/our smart procss2.jpg",
  },
  {
    step: "03",
    title: "MACHINE SELECTION",
    desc: "We recommend the right equipment for maximum efficiency and long-term value.",
    image: "/solutionspage/our smart procss3.jpg",
  },
  {
    step: "04",
    title: "INSTALLATION",
    desc: "Our team ensures safe, timely, and precise installation with minimal downtime.",
    image: "/solutionspage/our smart procss 4.jpg",
  },
  {
    step: "05",
    title: "COMMISSIONING",
    desc: "We test, optimize, and fine-tune the system for reliable and consistent performance.",
    image: "/solutionspage/our smart procss 5.jpg",
  },
  {
    step: "06",
    title: "SUPPORT",
    desc: "24/7 support, preventive maintenance, and genuine parts for uninterrupted operations.",
    image: "/solutionspage/our smart procss 6.jpg",
  },
];

const smartProcessPillars = [
  {
    title: "END-TO-END EXPERTISE",
    desc: "Complete solutions from concept to continuous support.",
    icon: Shield,
  },
  {
    title: "ENGINEERED FOR EFFICIENCY",
    desc: "Smart designs that maximize output and reduce costs.",
    icon: Clock,
  },
  {
    title: "QUALITY YOU CAN TRUST",
    desc: "Built with precision engineering and premium components.",
    icon: Star,
  },
  {
    title: "LIFETIME PARTNERSHIP",
    desc: "We grow with you through reliable support and service.",
    icon: Handshake,
  },
];

const globalReachPoints = [
  {
    title: "EXPORT READY",
    desc: "Built to international standards and certified for global delivery.",
    icon: Globe,
  },
  {
    title: "GLOBAL OPERATIONS",
    desc: "Trusted by clients in 50+ countries across 6 continents.",
    icon: Users,
  },
  {
    title: "LARGE-SCALE SUPPORT",
    desc: "End-to-end project support for large-scale installations and long-term operations.",
    icon: Settings,
  },
];

const globalFlagsCards = [
  {
    name: "INDIA",
    flag: "/images/global-presense/partnership-assets/flags/india.png",
    desc: "300 TPH Crushing & Screening Plant",
    image: "/solutionspage/our smart procss 4.jpg",
  },
  {
    name: "INDONESIA",
    flag: "/images/global-presense/partnership-assets/flags/indonesia.png",
    desc: "500 TPH Limestone Processing Plant",
    image: "/solutionspage/global capability 2.jpg",
  },
  {
    name: "UNITED ARAB EMIRATES",
    flag: "/images/global-presense/partnership-assets/flags/uae.png",
    desc: "250 TPH Aggregates Plant",
    image: "/solutionspage/global capability 3.jpg",
  },
  {
    name: "KENYA",
    flag: "/images/global-presense/partnership-assets/flags/kenya.png",
    desc: "200 TPH Crushing Plant",
    image: "/solutionspage/global capability 4.jpg",
  },
  {
    name: "PHILIPPINES",
    flag: "/images/global-presense/partnership-assets/flags/philipines.mhtml",
    desc: "150 TPH Sand Making Plant",
    image: "/solutionspage/global capability 5.jpg",
  },
];

const globalNavyBarMetrics = [
  { value: "End-to-End", label: "Solutions", desc: "Best in the industry" },
  { value: "Made In", label: "India", desc: "Successfull Machines" },
  { value: "Smart", label: "Engineering", desc: "All India" },
  { value: "50+", label: "EXPERTS", desc: "Always there for you" },
  { value: "24/7", label: "SUPPORT", desc: "Always On. Always Ready." },
];

const globalBottomValues = [
  { title: "International Quality Standards", icon: Shield },
  { title: "Timely Delivery & Installation", icon: Clock },
  { title: "Custom Solutions for Every Region", icon: Settings },
  { title: "Trusted by Industry Leaders", icon: Handshake },
];

const whyChooseCards = [
  {
    title: "CUSTOMIZED SOLUTIONS",
    desc: "Tailored solutions designed around your material, capacity and site requirements.",
    icon: "puzzle",
  },
  {
    title: "FAST INSTALLATION",
    desc: "Optimized processes and skilled teams ensure quick and hassle-free installation.",
    icon: "stopwatch",
  },
  {
    title: "EXPERT ENGINEERING",
    desc: "Experienced engineers delivering innovative, reliable and field-proven crushing solutions.",
    icon: "engineer",
  },
  {
    title: "LOW DOWNTIME",
    desc: "Heavy-duty components and precise engineering keep your plant running longer with minimal downtime.",
    icon: "gauge",
  },
  {
    title: "END-TO-END SUPPORT",
    desc: "From planning to commissioning and after-sales support – we are with you at every step.",
    icon: "handshake",
  },
  {
    title: "SCALABLE PLANT DESIGN",
    desc: "Flexible, future-ready plant solutions that grow with your business and production demands.",
    icon: "scalable",
  },
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
    tag: "QUARRY & MINING",
    title: "StoneVera Aggregates Plant",
    cat: "Quarry & Mining",
    loc: "Rajasthan, India",
    image: "/solutionspage/case study 1.jpg",
    capacity: "500 TPH",
    machines: "Jaw Crusher, Cone Crusher, VSI, Screens",
    result: "Increased output by 35% with improved product quality",
  },
  {
    tag: "INFRASTRUCTURE",
    title: "UltraBuild Infrastructure Project",
    cat: "Quarry & Mining",
    loc: "Madhya Pradesh, India",
    image: "/solutionspage/case study 2.jpg",
    capacity: "350 TPH",
    machines:
      "Primary Crusher, Cone Crusher, Vibrating Screen, Conveyor System",
    result: "Reduced operating cost by 20% and ensured consistent output",
  },
  {
    tag: "SAND MANUFACTURING",
    title: "Desert Sand Solutions",
    cat: "Sand Manufacturing",
    loc: "Gujarat, India",
    image: "/solutionspage/case study 3.jpg",
    capacity: "300 TPH",
    machines: "VSI Sand Maker, Washing System, Dewatering Screen",
    result: "Achieved 30% higher sand recovery with superior quality",
  },
  {
    tag: "ROAD CONSTRUCTION",
    title: "MegaRoad Construction Project",
    cat: "Aggregates",
    loc: "Maharashtra, India",
    image: "/solutionspage/case study 4.jpg",
    capacity: "600 TPH",
    machines: "Jaw Crusher, Impact Crusher, Screens, Belt Conveyors",
    result: "Completed project ahead of schedule with high efficiency",
  },
];

const ctaPlanningCards = [
  {
    title: "Engineering Consultation",
    desc: "Connect with our experts to discuss your project needs.",
    icon: Users,
  },
  {
    title: "Request a Quote",
    desc: "Get a detailed, customized quote tailored to your requirements.",
    icon: FileCheck,
  },
  {
    title: "Plant Planning Support",
    desc: "Optimize your plant layout, capacity, and workflow with our experts.",
    icon: Settings,
  },
  {
    title: "Expert Engineering Help",
    desc: "End-to-end engineering support for reliable and efficient operations.",
    icon: Headphones,
  },
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

function renderIndustryIcon(icon: string) {
  switch (icon) {
    case "mining":
      return <Pickaxe size={32} className="text-white" strokeWidth={1.5} />;
    case "aggregate":
      return <Boxes size={32} className="text-white" strokeWidth={1.5} />;
    case "cement":
      return <Factory size={32} className="text-white" strokeWidth={1.5} />;
    case "infra":
      return <Road size={32} className="text-white" strokeWidth={1.5} />;
    case "const":
      return <HardHat size={32} className="text-white" strokeWidth={1.5} />;
    case "recycle":
      return <Recycle size={32} className="text-white" strokeWidth={1.5} />;
    default:
      return <Settings size={32} className="text-white" strokeWidth={1.5} />;
  }
}

function renderCircleStatsIcon(name: string) {
  switch (name) {
    case "inst":
      return (
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" stroke="#ff5a00" />
        </svg>
      );
    case "countries":
      return (
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            stroke="#ff5a00"
            strokeWidth="1"
          />
        </svg>
      );
    case "support":
      return (
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path
            d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
            stroke="#ff5a00"
          />
        </svg>
      );
    case "custom":
      return (
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
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
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#031b40"
          strokeWidth="1.5"
        >
          <path d="M11.75 3a2.25 2.25 0 0 1 2.25 2.25v.75H19a2 2 0 0 1 2 2v5a2.25 2.25 0 0 1-2.25 2.25h-.75V19a2 2 0 0 1-2 2h-5a2.25 2.25 0 0 1-2.25-2.25v-.75H5a2 2 0 0 1-2-2v-5H3a2.25 2.25 0 0 1-2.25-2.25v-1.5A2.25 2.25 0 0 1 3 8h.75V5a2 2 0 0 1 2-2h6z" />
          <path d="M12 9v6" stroke="#ff5a00" strokeWidth="2" />
        </svg>
      );
    case "stopwatch":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#031b40"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="13" r="8" />
          <path d="M12 5V2M9 2h6M12 9v4l3 2" stroke="#ff5a00" strokeWidth="2" />
        </svg>
      );
    case "engineer":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#031b40"
          strokeWidth="1.5"
        >
          <path
            d="M14.7 12.5a4 4 0 0 0-5.4 0M12 2v3M8.5 4.5l2 2M15.5 4.5l-2 2"
            stroke="#ff5a00"
            strokeWidth="1.5"
          />
          <path d="M5 21a7 7 0 0 1 14 0" />
          <circle cx="12" cy="11" r="4" />
        </svg>
      );
    case "gauge":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#031b40"
          strokeWidth="1.5"
        >
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
          <line
            x1="12"
            y1="12"
            x2="19"
            y2="8"
            stroke="#ff5a00"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="2" fill="#031b40" />
        </svg>
      );
    case "handshake":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#031b40"
          strokeWidth="1.5"
        >
          <path d="m11 17 2 2c.6.6 1.5.6 2 0l5-5c.6-.6.6-1.5 0-2l-2-2" />
          <path
            d="m13 14-2-2-4 4c-.6.6-.6 1.5 0 2l2 2c.6.6 1.5.6 2 0l2-2"
            stroke="#ff5a00"
            strokeWidth="2"
          />
          <path d="m14 8-1.5-1.5c-.8-.8-2-.8-2.8 0L3 13c-.6.6-.6 1.5 0 2l1.5 1.5" />
        </svg>
      );
    case "scalable":
      return (
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#031b40"
          strokeWidth="1.5"
        >
          <path d="M3 3v18h18" />
          <path
            d="m18.7 8-5.1 5.2-2.8-2.7-4.8 4.8"
            stroke="#ff5a00"
            strokeWidth="2"
          />
          <path d="M19 5h-4v4" />
        </svg>
      );
    default:
      return null;
  }
}

function renderApplicationIcon(title: string) {
  switch (title) {
    case "GRANITE CRUSHING":
      return <Gem size={26} className="text-white" strokeWidth={1.5} />;
    case "LIMESTONE PROCESSING":
      return <Layers size={26} className="text-white" strokeWidth={1.5} />;
    case "SAND MANUFACTURING":
      return <Sparkles size={26} className="text-white" strokeWidth={1.5} />;
    case "ROAD CONSTRUCTION":
      return <Road size={26} className="text-white" strokeWidth={1.5} />;
    case "QUARRY OPERATIONS":
      return <Pickaxe size={26} className="text-white" strokeWidth={1.5} />;
    case "INDUSTRIAL MATERIAL HANDLING":
      return <Boxes size={26} className="text-white" strokeWidth={1.5} />;
    default:
      return <Settings size={26} className="text-white" strokeWidth={1.5} />;
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
      : caseStudiesData.filter(
          (p) =>
            p.cat === activeTab ||
            (activeTab === "Quarry & Mining" && p.cat === "Quarry & Mining"),
        );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 text-slate-800">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO & STATS BANNER */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-white text-primary lg:min-h-[calc(100svh-4.25rem)] xl:min-h-[calc(100svh-5.25rem)]">
          <Image
            alt="Pithal complete crushing and screening plant"
            className="object-cover object-center"
            fill
            preload
            sizes="100vw"
            src="/solutionspage/ffirst page.jpg"
          />
          <div 
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_22%,rgba(255,255,255,.88)_38%,rgba(255,255,255,.36)_58%,rgba(255,255,255,0)_78%)]"
          />
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-45" />
          <div className="relative z-10 flex w-full max-w-[1520px] flex-col gap-10 px-10 py-6 lg:min-h-[calc(100svh-4.25rem)] lg:justify-between lg:py-8 xl:min-h-[calc(100svh-5.25rem)]">
            <div className="z-20">
              <div className="max-w-[650px] py-0 lg:py-2">
                <HeroNavigation current="Solutions & Applications" eyebrow="Solutions" />

                <h1 className="headline mb-4 text-[clamp(2.15rem,5.2vw,4rem)] uppercase leading-[1.05] tracking-tight text-primary sm:mb-6">
                  ENGINEERED SOLUTIONS <br />
                  FOR <span className="text-secondary">EVERY INDUSTRY.</span>
                </h1>

                <p className="mt-8 max-w-[560px] text-sm font-medium leading-6 text-primary md:text-[16px] lg:leading-7">
                  From rugged mining operations to large-scale infrastructure
                  projects, we deliver crushing solutions that maximize
                  performance, minimize downtime, and drive{" "}
                  <span className="text-secondary font-bold italic">
                    real results
                  </span>
                  .
                </p>

                <div className="mt-5 flex flex-wrap gap-3 lg:mt-8">
                  <Button
                    href="#contact"
                    variant="primary"
                    className="group flex min-h-[50px] items-center justify-center gap-2 px-5 py-4 text-xs font-black tracking-[0.14em] sm:px-7"
                  >
                    EXPLORE SOLUTIONS
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Button>
                  <Button
                    href=""
                    variant="outlineNavy"
                    className="flex min-h-[50px] items-center justify-center gap-2 px-5 py-4 text-xs font-black tracking-[0.14em] sm:px-7"
                  >
                    <Download size={14} className="mr-0.5" />
                    DOWNLOAD BROCHURE
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats row below Hero */}
            <div className="relative z-20 rounded-xl bg-white p-3 text-slate-800 shadow-[0_14px_34px_rgba(3,27,64,0.08)] sm:rounded-2xl sm:p-4 md:px-5 md:py-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
                  >
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-primary shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] lg:h-22 lg:w-22">
                      {renderCircleStatsIcon(stat.icon)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[22px] font-black leading-none text-primary md:text-2xl">
                        {stat.value}
                      </h4>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-wider text-secondary md:text-xs">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 truncate text-[11px] text-slate-500 md:text-xs">
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
        {/* SECTION 2: SOLUTIONS THAT POWER EVERY INDUSTRY */}
        {/* ========================================================================= */}
        <section
          className="relative overflow-hidden bg-white py-[60px]"
          id="industries"
        >
          {/* Faint Gears Blueprint Schematic on Left */}
          <div className="absolute -left-20 top-8 h-96 w-96 text-slate-200/40 pointer-events-none select-none opacity-45">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="w-full h-full"
            >
              <circle cx="80" cy="100" r="60" strokeDasharray="6 4" />
              <circle cx="80" cy="100" r="45" />
              <circle cx="80" cy="100" r="30" strokeWidth="0.4" />
              <circle cx="80" cy="100" r="15" />
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = (80 + 45 * Math.cos(angle)).toFixed(2);
                const y1 = (100 + 45 * Math.sin(angle)).toFixed(2);
                const x2 = (80 + 65 * Math.cos(angle)).toFixed(2);
                const y2 = (100 + 65 * Math.sin(angle)).toFixed(2);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth="1.2"
                  />
                );
              })}
              <circle cx="155" cy="150" r="40" strokeDasharray="4 3" />
              <circle cx="155" cy="150" r="30" />
              <circle cx="155" cy="150" r="10" />
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x1 = (155 + 30 * Math.cos(angle)).toFixed(2);
                const y1 = (150 + 30 * Math.sin(angle)).toFixed(2);
                const x2 = (155 + 45 * Math.cos(angle)).toFixed(2);
                const y2 = (155 + 45 * Math.sin(angle)).toFixed(2);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth="1.2"
                  />
                );
              })}
            </svg>
          </div>

          {/* Faint Crushing Plant Schematic on Right */}
          <div className="absolute -right-20 top-12 h-96 w-96 text-slate-200/40 pointer-events-none select-none opacity-45">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="w-full h-full"
            >
              <line x1="20" y1="180" x2="180" y2="180" strokeWidth="1.5" />
              <rect x="40" y="100" width="30" height="80" />
              <line x1="40" y1="100" x2="70" y2="180" />
              <line x1="70" y1="100" x2="40" y2="180" />
              <rect x="110" y="60" width="40" height="120" />
              <line x1="110" y1="60" x2="150" y2="120" />
              <line x1="150" y1="60" x2="110" y2="120" />
              <line x1="110" y1="120" x2="150" y2="180" />
              <line x1="150" y1="120" x2="110" y2="180" />
              <line x1="70" y1="120" x2="110" y2="80" strokeWidth="2" />
              <circle cx="70" cy="120" r="3" fill="currentColor" />
              <circle cx="110" cy="80" r="3" fill="currentColor" />
              <line x1="150" y1="90" x2="190" y2="160" strokeWidth="2" />
              <polygon points="30,60 80,60 70,100 40,100" />
            </svg>
          </div>

          <Container className="relative z-10">
            {/* Header Block */}
            <div className="mx-auto max-w-full text-center mb-12 px-4">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.08em] text-secondary">
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
                <span className="text-lg">INDUSTRIES WE SERVE</span>
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-center whitespace-nowrap text-[clamp(1rem,4vw,3.2rem)] font-black leading-[1.1] text-primary">
                SOLUTIONS THAT POWER{" "}
                <span className="text-secondary">EVERY INDUSTRY</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                From raw material to final output, our engineered crushing
                solutions are built to perform in the toughest industrial
                environments.
              </p>
            </div>

            {/* Grid of 6 cards */}
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {industriesServe.map((item, i) => (
                <div
                  key={i}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                    <Image
                      alt={`${item.title.toLowerCase()} crushing solution`}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      src={item.image}
                    />

                    {/* Dark bottom gradient overlay for title legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />

                    {/* Dark blue square/rounded box with orange/white icon */}
                    <div className="absolute left-4 top-4 z-20 flex h-16 w-16 items-center justify-center rounded-xl bg-[#092a5c] border border-white/10 shadow-lg group-hover:bg-secondary transition-all duration-350">
                      {renderIndustryIcon(item.icon)}
                    </div>

                    {/* Title inside image at bottom left */}
                    <div className="absolute bottom-4 left-5 z-20">
                      <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body elements */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div className="grid grid-cols-2 gap-4 pb-5">
                      {/* Left: Challenge */}
                      <div className="pr-2">
                        <span className="inline-flex gap-1.5 items-center text-[11px] font-black uppercase text-slate-800 tracking-wider">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-3.5 w-3.5 text-secondary shrink-0"
                          >
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                          CHALLENGE
                        </span>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                          {item.challenge}
                        </p>
                      </div>

                      {/* Right: Our Solution */}
                      <div className="pl-4 border-l border-slate-100">
                        <span className="inline-flex gap-1.5 items-center text-[11px] font-black uppercase text-slate-800 tracking-wider">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="h-3.5 w-3.5 text-primary shrink-0"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9 12l2 2 4-4" />
                          </svg>
                          OUR SOLUTION
                        </span>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    {/* Explore solutions bottom bar */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="#contact"
                        className="text-xs font-bold uppercase tracking-wider text-secondary transition-colors group-hover:text-primary"
                      >
                        EXPLORE {item.title} SOLUTIONS
                      </Link>
                      <ArrowRight
                        size={14}
                        className="text-secondary transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: CHALLENGES WE SOLVE (Every Challenge. Engineered Solution.) */}
        {/* ========================================================================= */}
        <section
          className="relative overflow-hidden bg-white py-[60px]"
          id="challenges"
        >
          {/* Faint Gears Blueprint Schematic on Left */}
          <div className="absolute -left-16 top-6 h-64 w-64 text-slate-200/40 pointer-events-none select-none opacity-40">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="w-full h-full"
            >
              <circle cx="40" cy="40" r="25" strokeDasharray="3 2" />
              <circle cx="40" cy="40" r="18" />
              <circle cx="40" cy="40" r="5" />
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x1 = (40 + 18 * Math.cos(angle)).toFixed(2);
                const y1 = (40 + 18 * Math.sin(angle)).toFixed(2);
                const x2 = (40 + 27 * Math.cos(angle)).toFixed(2);
                const y2 = (40 + 27 * Math.sin(angle)).toFixed(2);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth="1"
                  />
                );
              })}
            </svg>
          </div>

          {/* Faint Gears Blueprint Schematic on Right */}
          <div className="absolute -right-16 top-6 h-64 w-64 text-slate-200/40 pointer-events-none select-none opacity-40">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              className="w-full h-full"
            >
              <circle cx="60" cy="40" r="25" strokeDasharray="3 2" />
              <circle cx="60" cy="40" r="18" />
              <circle cx="60" cy="40" r="5" />
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45 * Math.PI) / 180;
                const x1 = (60 + 18 * Math.cos(angle)).toFixed(2);
                const y1 = (40 + 18 * Math.sin(angle)).toFixed(2);
                const x2 = (60 + 27 * Math.cos(angle)).toFixed(2);
                const y2 = (60 + 27 * Math.sin(angle)).toFixed(2);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    strokeWidth="1"
                  />
                );
              })}
            </svg>
          </div>

          <Container className="relative z-10">
            {/* Header Block */}
            <div className="mx-auto max-w-full text-center mb-12 px-4">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.08em] text-secondary">
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
                <span className="text-lg">CHALLENGES WE SOLVE</span>
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-center whitespace-nowrap text-[clamp(1rem,4vw,3.2rem)] font-black leading-[1.1] text-primary">
                Every Challenge.{" "}
                <span className="text-secondary">
                  Engineered
                </span>{" "}
                Solution.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We understand the real challenges of industrial operations and
                deliver solutions that improve performance, reduce downtime, and
                maximize productivity.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
              {/* Left Column: Challenge Cards */}
              <div className="flex flex-col gap-4 justify-between">
                {challengesSolve.map((row, i) => {
                  const SolIcon = row.icon;
                  return (
                    <div
                      key={i}
                      className="group relative flex flex-col md:flex-row items-stretch rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {/* Left: Thumbnail Image Box */}
                      <div className="p-3 shrink-0 flex items-center justify-center bg-#fa5902/10">
                        <div className="relative w-full md:w-[170px] aspect-[16/10] md:h-[110px] overflow-hidden rounded-xl border border-slate-200/60 shadow-sm bg-#fa5902/10">
                          <Image
                            src={row.image}
                            alt={row.challengeTitle}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="170px"
                          />
                          {/* Step Badge */}
                          <div className="absolute top-2 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#031b40] text-[10px] font-black text-white border border-white/20">
                            {row.step}
                          </div>
                        </div>
                      </div>

                      {/* Middle: Challenge Box */}
                      <div className="relative flex-1 bg-[#fa5902]/10 p-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#fa5902]/15">
                        <span className="inline-flex gap-1.5 items-center text-[10px] font-black uppercase text-secondary tracking-wider">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="h-3 w-3 text-secondary shrink-0"
                          >
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                          INDUSTRY CHALLENGE
                        </span>
                        <h4 className="mt-1 text-sm md:text-base font-extrabold text-slate-800 leading-tight uppercase tracking-wide">
                          {row.challengeTitle}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed font-medium">
                          {row.challengeDesc}
                        </p>

                        {/* Overlapping connector arrow */}
                        <div className="hidden md:flex absolute right-[-16px] top-1/2 -translate-y-1/2 z-20 h-8 w-8 items-center justify-center rounded-full bg-white border border-slate-200 shadow text-secondary group-hover:scale-110 transition-all duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="h-3.5 w-3.5 text-secondary"
                          >
                            <path
                              d="M5 12h14M12 5l7 7-7 7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Right: Solution Box */}
                      <div className="flex-1 bg-[#031b40]/10 p-5 md:pl-8 flex gap-4 items-center">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#092a5c] border border-white/10 shadow text-white">
                          <SolIcon
                            size={32}
                            className="text-white"
                            strokeWidth={1.5}
                          />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase text-[#38bdf8] tracking-wider block">
                            PITHAL SOLUTION
                          </span>
                          <h4 className="mt-0.5 text-sm md:text-base font-extrabold text-primary leading-tight uppercase tracking-wide">
                            {row.solutionTitle}
                          </h4>
                          <p className="mt-1 text-xs text-slate-500 leading-relaxed font-medium">
                            {row.solutionDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Large plant visual */}
              <div className="relative hidden lg:block w-full min-h-[450px] overflow-hidden rounded-2xl border border-slate-200/60 shadow-md">
                <Image
                  src="/solutionspage/challenges we solve 5.jpg"
                  alt="Pithal Machines Crushing Plant"
                  fill
                  className="object-cover"
                  sizes="25vw"
                  priority
                />
              </div>
            </div>

            {/* Bottom horizontal banner */}
            <div className="mt-12 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 items-center">
                {challengesBottomBar.map((item, i) => {
                  const BIcon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3.5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-orange-100 bg-[#fdfbf9] text-secondary shadow-[inset_0_1.5px_3px_rgba(250,89,2,0.04)]">
                        <BIcon
                          size={28}
                          className="text-secondary"
                          strokeWidth={1.8}
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs md:text-sm font-black uppercase tracking-wider text-slate-800 leading-tight">
                          {item.label}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500 leading-normal font-medium truncate">
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
        {/* SECTION 4: COMPLETE PLANT SOLUTIONS (Intelligent Systems. Seamless Performance) */}
        {/* ========================================================================= */}
        <CrushingProcessTimeline />

        {/* ========================================================================= */}
        {/* SECTION 5: ENGINEERED AROUND YOUR OPERATION */}
        {/* ========================================================================= */}
        <section
          className="relative overflow-hidden bg-white pt-[60px] pb-[10px]"
          id="engineering"
        >
          {/* Blueprint Image Background (Aligned to the Right) */}
          <div
            className="absolute right-0 top-0 h-full w-full lg:w-[55%] pointer-events-none select-none opacity-20 lg:opacity-100 z-0"
            style={{
              maskImage:
                "radial-gradient(ellipse at center, black 25%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 25%, transparent 85%)",
            }}
          >
            <Image
              src="/solutionspage/blueprint_1440x780.png"
              alt="Engineering Blueprint Background"
              fill
              className="object-contain object-right"
              priority
            />
          </div>

          <Container className="relative z-10">
            {/* Top Grid layout */}
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center mb-4">
              {/* Left Column info */}
              <div className="max-w-2xl relative z-10">
                <div className="flex items-center gap-2 mb-4 text-xs font-black uppercase tracking-[0.24em] text-secondary">
                  <span className="h-[1.5px] w-6 bg-secondary rounded-full" />
                  <span className="text-lg">CUSTOM ENGINEERING SOLUTIONS</span>
                  <span className="h-[1.5px] w-6 bg-secondary rounded-full" />
                </div>

                <h2 className="headline text-primary text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] uppercase">
                  ENGINEERED AROUND <br />
                  <span className="text-secondary">YOUR OPERATION.</span>
                </h2>

                <p className="mt-6 text-sm md:text-base leading-relaxed text-slate-600 font-medium">
                  Every site is unique. Our engineering experts design and
                  deliver customized crushing solutions that match your goals,
                  site conditions, and production requirements.
                </p>

                {/* Bullets horizontal row layout */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {operationBullets.map((item, i) => {
                    const BIcon = item.icon;
                    return (
                      <div
                        key={i}
                        className="text-center flex flex-col items-center"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200/80 bg-white text-secondary mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-secondary transition-all duration-300">
                          <BIcon size={28} className="text-secondary" />
                        </div>
                        <h4 className="text-[13px] md:text-sm font-black uppercase tracking-wide text-primary leading-tight">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column (Empty to let background blueprint show clearly on desktop) */}
              <div className="hidden lg:block h-[280px]" />
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5B: OUR ENGINEERING SERVICES */}
        {/* ========================================================================= */}
        <section className="bg-white pt-[20px] pb-[60px]">
          <Container>
            {/* Bottom block: Our Engineering Services */}
            <div className="pt-0">
              {/* Bracketed Title Header */}
              <div className="flex justify-center items-center mb-10 w-full max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  <span className="h-[2px] w-8 bg-secondary rounded-full" />
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="text-primary font-black">
                    OUR ENGINEERING SERVICES
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="h-[2px] w-8 bg-secondary rounded-full" />
                </div>
              </div>

              {/* 5 columns */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {engineeringServices.map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white border border-slate-200/60 p-5 pt-12 rounded-2xl flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Step Badge on Top Left */}
                    <div className="absolute top-4 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#e6effc] text-xs font-black text-[#092a5c]">
                      {item.step}
                    </div>

                    <div>
                      {item.image && (
                        <div className="relative w-full aspect-[16/10] mb-4 flex items-center justify-center">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className={cn(
                              "object-contain p-1 transition-transform duration-500",
                              i === 2 || i === 4
                                ? "scale-[1.4] -translate-x-12 group-hover:scale-[1.45]"
                                : "group-hover:scale-105",
                            )}
                            sizes="(min-width: 1024px) 15vw, 30vw"
                          />
                        </div>
                      )}
                      <h4 className="mt-2 text-sm font-black uppercase tracking-wide text-primary leading-tight">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-xs md:text-sm leading-relaxed text-text-muted font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* <div className="mt-5 pt-3 flex justify-end">
                      <ArrowRight
                        size={20}
                        className="text-secondary group-hover:translate-x-1.5 transition-transform duration-300"
                      />
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: BUILT FOR EVERY APPLICATION */}
        {/* ========================================================================= */}
        <section className="bg-white py-[30px]">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-3xl text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
                <span className="text-lg">APPLICATIONS WE POWER</span>
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                BUILT FOR{" "}
                <span className="text-secondary">EVERY APPLICATION.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Our crushing solutions are engineered to perform across a wide
                range of industries and applications — delivering results where
                it matters most.
              </p>
            </div>

            {/* Grid of 6 cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {builtApplications.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl bg-slate-900 text-white min-h-[300px] flex flex-col justify-end p-6 border border-slate-800 shadow-md"
                >
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
                      <span className="text-xs uppercase font-black tracking-widest text-slate-800">
                        IMAGE AREA {i + 1}
                      </span>
                    </div>
                  )}

                  {/* Bottom shadow fade for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10" />

                  {/* Top orange circular badge */}
                  <div className="absolute left-6 top-6 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-secondary border border-white/10 shadow-lg">
                    {renderApplicationIcon(item.title)}
                  </div>

                  {/* Text body */}
                  <div className="relative z-20 pt-30">
                    <h3 className="text-lg font-black uppercase tracking-wider text-white group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>

                    <span className="block h-[1.5px] w-6 bg-secondary my-2" />

                    <p className="text-sm text-slate-300 leading-relaxed mb-1">
                      {item.desc}
                    </p>

                    {/* <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-secondary hover:text-white transition-colors"
                    >
                      EXPLORE SOLUTIONS
                      <ArrowRight size={12} />
                    </Link> */}
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
                    Our engineers will design a solution tailored to your exact
                    needs.
                  </p>
                </div>
              </div>

              <Button
                href="#contact1"
                variant="primary"
                className="flex items-center gap-2 group text-xs px-6 py-3 shrink-0"
              >
                TALK TO AN EXPERT
                <ArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: MEASURABLE PERFORMANCE. MAXIMUM RESULTS. */}
        {/* ========================================================================= */}
        <section className="bg-white py-[60px] relative overflow-hidden">
          {/* Blueprint gears background motif */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none z-0">
            {/* Left Gear */}
            <svg
              className="absolute left-[-100px] top-[10%] w-[350px] h-[350px] animate-[spin_60s_linear_infinite]"
              viewBox="0 0 100 100"
              fill="none"
              stroke="#092a5c"
              strokeWidth="0.5"
            >
              <circle cx="50" cy="50" r="30" />
              <circle cx="50" cy="50" r="15" />
              {[...Array(12)].map((_, i) => (
                <path
                  key={i}
                  d="M 50 12 L 50 20 M 47 12 L 53 12"
                  transform={`rotate(${i * 30} 50 50)`}
                />
              ))}
            </svg>
            {/* Right Factory/Gears */}
            <svg
              className="absolute right-[-120px] top-[5%] w-[450px] h-[450px]"
              viewBox="0 0 200 200"
              fill="none"
              stroke="#092a5c"
              strokeWidth="0.5"
            >
              {/* Gear 1 */}
              <circle cx="150" cy="70" r="45" />
              <circle cx="150" cy="70" r="20" />
              {[...Array(18)].map((_, i) => (
                <path
                  key={i}
                  d="M 150 15 L 150 25"
                  transform={`rotate(${i * 20} 150 70)`}
                />
              ))}
              {/* Gear 2 meshing */}
              <circle cx="80" cy="130" r="35" />
              <circle cx="80" cy="130" r="15" />
              {[...Array(14)].map((_, i) => (
                <path
                  key={i}
                  d="M 80 85 L 80 95"
                  transform={`rotate(${i * 25.7} 80 130)`}
                />
              ))}
            </svg>
          </div>

          <Container className="relative z-10">
            {/* Header Block */}
            <div className="mx-auto max-w-full text-center mb-12 px-4">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.08em] text-secondary">
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
                <span className="text-lg">OUR PERFORMANCE. YOUR ADVANTAGE.</span>
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-center whitespace-nowrap text-[clamp(0.85rem,3.8vw,3.2rem)] font-black leading-[1.1] text-primary uppercase">
                MEASURABLE PERFORMANCE.{" "}
                <span className="text-secondary">MAXIMUM RESULTS.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm md:text-base leading-relaxed text-text-muted font-medium">
                Our engineered crushing solutions are built to deliver superior
                performance, reduce operational costs, and maximize your
                productivity.
              </p>
            </div>

            {/* 5-Column Gauges Card Grid */}
            <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-5 mb-10">
              {performanceMetrics.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#f8faff] border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header alignment: Icon Left, Pct Right */}
                    <div className="flex items-center justify-between gap-3 mb-4.5">
                      <div className="shrink-0">
                        {i === 0 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 54 54"
                            fill="none"
                          >
                            <circle
                              cx="27"
                              cy="27"
                              r="26"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1"
                            />
                            {/* Speedometer arc */}
                            <path
                              d="M15 35 A 16 16 0 1 1 39 35"
                              fill="none"
                              stroke="#b2c6e6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeDasharray="3 3"
                            />

                            {/* Needle */}
                            <path
                              d="M27 27 L 33 21"
                              stroke="#092a5c"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <circle cx="27" cy="27" r="3" fill="#092a5c" />
                            {/* Gear bottom right */}
                            <circle
                              cx="39"
                              cy="35"
                              r="4.5"
                              fill="#fff"
                              stroke="#fa5902"
                              strokeWidth="1.5"
                            />
                            <circle cx="39" cy="35" r="1.5" fill="#fa5902" />
                          </svg>
                        )}
                        {i === 1 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 54 54"
                            fill="none"
                          >
                            <circle
                              cx="27"
                              cy="27"
                              r="26"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1"
                            />
                            {/* Clock Face */}
                            <circle
                              cx="27"
                              cy="25"
                              r="13"
                              stroke="#092a5c"
                              strokeWidth="2.2"
                              fill="none"
                            />
                            {/* Ticks */}
                            <path
                              d="M27 12 L27 14 M27 36 L27 38 M14 25 L16 25 M38 25 L40 25"
                              stroke="#092a5c"
                              strokeWidth="1.5"
                            />
                            {/* Hands */}
                            <path
                              d="M27 25 L27 18 M27 25 L32 25"
                              stroke="#092a5c"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            {/* Down arrow inside bottom right */}
                            <path
                              d="M37 28 L37 36 M34 33 L37 36 L40 33"
                              stroke="#fa5902"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {i === 2 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 54 54"
                            fill="none"
                          >
                            <circle
                              cx="27"
                              cy="27"
                              r="26"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1"
                            />
                            {/* Gear */}
                            <circle
                              cx="25"
                              cy="25"
                              r="11"
                              stroke="#092a5c"
                              strokeWidth="2"
                              fill="none"
                            />
                            {[...Array(8)].map((_, idx) => (
                              <path
                                key={idx}
                                d="M 25 11 L 25 14"
                                stroke="#092a5c"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                transform={`rotate(${idx * 45} 25 25)`}
                              />
                            ))}
                            <circle cx="25" cy="25" r="6" fill="#fff" />
                            {/* Rupee symbol */}
                            <path
                              d="M22 20 H28 M22 23 H28 M25 20 C28 20 28 25 25 25 H22 M24 25 L28 30"
                              stroke="#fa5902"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {/* Up arrow right */}
                            <path
                              d="M36 26 L36 34 M33 31 L36 34 L39 31"
                              stroke="#fa5902"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {i === 3 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 54 54"
                            fill="none"
                          >
                            <circle
                              cx="27"
                              cy="27"
                              r="26"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1"
                            />
                            {/* Energy circular gauge */}
                            <path
                              d="M17 33 A 12 12 0 1 1 37 33"
                              stroke="#b2c6e6"
                              strokeWidth="2"
                              fill="none"
                              strokeDasharray="2 2"
                            />
                            <path
                              d="M17 33 A 12 12 0 1 1 35 24"
                              stroke="#fa5902"
                              strokeWidth="2.5"
                              fill="none"
                              strokeLinecap="round"
                            />
                            {/* Leaf or energy symbol */}
                            <path
                              d="M24 28 C24 22 28 20 30 20 C30 24 26 28 24 28 Z"
                              fill="#fa5902"
                              opacity="0.8"
                            />
                            <path
                              d="M22 30 C22 25 25 23 27 23 C27 27 24 30 22 30 Z"
                              fill="#092a5c"
                            />
                            {/* Up arrow */}
                            <path
                              d="M37 26 L37 33 M34 30 L37 33 L40 30"
                              stroke="#fa5902"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {i === 4 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 54 54"
                            fill="none"
                          >
                            <circle
                              cx="27"
                              cy="27"
                              r="26"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1"
                            />
                            {/* Bar Chart */}
                            <rect
                              x="18"
                              y="28"
                              width="3.5"
                              height="8"
                              rx="1"
                              fill="#092a5c"
                            />
                            <rect
                              x="24"
                              y="24"
                              width="3.5"
                              height="12"
                              rx="1"
                              fill="#092a5c"
                            />
                            <rect
                              x="30"
                              y="20"
                              width="3.5"
                              height="16"
                              rx="1"
                              fill="#092a5c"
                            />
                            <rect
                              x="36"
                              y="15"
                              width="3.5"
                              height="21"
                              rx="1"
                              fill="#fa5902"
                            />
                            {/* Up arrow diagonal */}
                            <path
                              d="M41 14 L41 22 M37 18 L41 14 L45 18"
                              stroke="#fa5902"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>

                      <div className="flex items-baseline gap-1">
                        <span className="text-[28px] font-extrabold text-[#fa5902] leading-none tracking-tight">
                          {item.pct}
                        </span>
                        <span className="text-[18px] font-bold text-[#fa5902]">
                          ↑
                        </span>
                      </div>
                    </div>

                    <h3 className="text-[13px] font-extrabold uppercase tracking-wider text-[#092a5c]">
                      {item.label}
                    </h3>

                    {/* Thin horizontal separator line */}
                    <div className="w-8 h-[2px] bg-[#fa5902] my-3.5 group-hover:w-16 transition-all duration-300" />

                    <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lower layout stats with sliders */}
            <div className="bg-[#f8faff] border border-slate-100 rounded-3xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center relative z-10">
                {/* Left Column Text and Image Box (5 cols) */}
                <div className="lg:col-span-5 relative aspect-[16/11] w-full rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm">
                  {/* Background Image - positioned properly to prevent cutting off */}
                  <Image
                    src="/solutionspage/our performance your advantage.jpg"
                    alt="Crushing Plant Equipment"
                    fill
                    className="object-cover object-right-bottom"
                    sizes="(min-width: 1024px) 35vw, 100vw"
                  />
                  {/* Text Overlay Box (aligned to the left) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/85 to-transparent flex flex-col justify-center p-6 md:p-8 max-w-[70%] z-10">
                    <h3 className="text-[20px] md:text-[22px] font-extrabold uppercase tracking-wide text-[#092a5c] leading-tight">
                      PERFORMANCE THAT
                      <br />
                      <span className="text-[#fa5902]">
                        DRIVES YOUR SUCCESS
                      </span>
                    </h3>
                    <div className="w-10 h-[2px] bg-[#fa5902] my-3" />
                    <p className="text-[12px] md:text-[13px] leading-relaxed text-slate-600 font-medium">
                      Our solutions are designed <br /> to maximize every aspect
                      of <br /> your operations – from efficiency <br /> and
                      productivity to cost savings <br /> and sustainability.
                    </p>
                  </div>
                </div>

                {/* Middle Column Sliders (4 cols) */}
                <div className="lg:col-span-4 space-y-6 lg:px-2">
                  {performanceSliders.map((slider, i) => (
                    <div key={i} className="flex items-center gap-4.5">
                      {/* Metric Icon */}
                      <div className="shrink-0">
                        {i === 0 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 52 52"
                            fill="none"
                          >
                            <circle
                              cx="26"
                              cy="26"
                              r="25"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M15 34 A 14 14 0 1 1 37 34"
                              stroke="#fa5902"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              fill="none"
                            />
                            <path
                              d="M26 26 L 33 19"
                              stroke="#092a5c"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            <circle cx="26" cy="26" r="3" fill="#092a5c" />
                          </svg>
                        )}
                        {i === 1 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 52 52"
                            fill="none"
                          >
                            <circle
                              cx="26"
                              cy="26"
                              r="25"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1.5"
                            />
                            <circle
                              cx="26"
                              cy="25"
                              r="11"
                              stroke="#092a5c"
                              strokeWidth="2.5"
                              fill="none"
                            />
                            <path
                              d="M26 25 L 26 19 M26 25 L 30 25"
                              stroke="#092a5c"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M35 29 L35 36 M32 33 L35 36 L38 33"
                              stroke="#fa5902"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {i === 2 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 52 52"
                            fill="none"
                          >
                            <circle
                              cx="26"
                              cy="26"
                              r="25"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1.5"
                            />
                            <circle
                              cx="23"
                              cy="23"
                              r="10"
                              stroke="#092a5c"
                              strokeWidth="2.2"
                              fill="none"
                            />
                            <path
                              d="M20 19 H26 M20 23 H26 M23 19 C26 19 26 23 23 23 M22 23 L26 28"
                              stroke="#fa5902"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M34 26 L34 34 M31 31 L34 34 L37 31"
                              stroke="#fa5902"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {i === 3 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 52 52"
                            fill="none"
                          >
                            <circle
                              cx="26"
                              cy="26"
                              r="25"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M23 31 C23 24 28 22 30 22 C30 26 26 31 23 31 Z"
                              fill="#fa5902"
                              opacity="0.8"
                            />
                            <path
                              d="M20 33 C20 28 24 25 25 25 C25 29 22 33 20 33 Z"
                              fill="#092a5c"
                            />
                          </svg>
                        )}
                        {i === 4 && (
                          <svg
                            className="w-13 h-13"
                            viewBox="0 0 52 52"
                            fill="none"
                          >
                            <circle
                              cx="26"
                              cy="26"
                              r="25"
                              fill="#fff"
                              stroke="#e6eefc"
                              strokeWidth="1.5"
                            />
                            <rect
                              x="18"
                              y="28"
                              width="3"
                              height="8"
                              rx="0.5"
                              fill="#092a5c"
                            />
                            <rect
                              x="23"
                              y="24"
                              width="3"
                              height="12"
                              rx="0.5"
                              fill="#092a5c"
                            />
                            <rect
                              x="28"
                              y="20"
                              width="3"
                              height="16"
                              rx="0.5"
                              fill="#fa5902"
                            />
                            <path
                              d="M33 19 L33 26 M30 22 L33 19 L36 22"
                              stroke="#fa5902"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Title, Progress Bar, and Percent */}
                      <div className="flex-1">
                        <div className="flex justify-between items-center text-[12.5px] font-extrabold text-[#092a5c] tracking-wide mb-1.5">
                          <span>{slider.label}</span>
                        </div>
                        <div className="flex items-center gap-3.5">
                          <div className="h-3 flex-1 bg-slate-200/70 rounded-full relative overflow-visible">
                            {/* Inner progress bar */}
                            <div
                              className="h-full rounded-full relative animate-moving-glow"
                              style={{ width: `${slider.value}%` }}
                            >
                              {/* Glowing/Border Circle Point Handle */}
                              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4.5 h-4.5 bg-white border-[4px] border-[#092a5c] rounded-full shadow-md z-10" />
                            </div>
                          </div>
                          <span className="text-[13.5px] font-black text-[#092a5c] w-9 text-right shrink-0">
                            {slider.value}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column Stats Cards (3 cols) */}
                <div className="lg:col-span-3 space-y-5 lg:pl-4">
                  {performanceStatsList.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4.5 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm performance-card-hover"
                    >
                      {/* Round icon badge */}
                      <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#fdf2eb] transition-all duration-300 icon-badge-inner">
                        {i === 0 && (
                          <Building2 size={26} className="text-[#fa5902]" />
                        )}
                        {i === 1 && (
                          <Globe size={26} className="text-[#fa5902]" />
                        )}
                        {i === 2 && (
                          <Headphones size={26} className="text-[#fa5902]" />
                        )}
                      </div>
                      <div className="leading-tight">
                        <h4 className="text-[28px] font-extrabold text-[#fa5902] tracking-tight">
                          {item.value}
                        </h4>
                        <p className="text-[12.5px] font-extrabold text-[#092a5c] uppercase tracking-wider mt-0.5">
                          {item.label}
                        </p>
                        <p className="text-[12px] text-slate-500 font-medium mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: INTELLIGENT SMART PROCESS WORKFLOW */}
        {/* ========================================================================= */}
        <section className="bg-white py-[60px]">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-full text-center mb-16 px-4">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.08em] text-secondary">
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
                <span className="text-lg">OUR SMART PROCESS</span>
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-center whitespace-nowrap text-[clamp(0.85rem,3.5vw,3.2rem)] font-black leading-[1.1] text-primary">
                INTELLIGENT WORKFLOW.{" "}
                <span className="text-secondary">SEAMLESS RESULTS.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                From initial consultation to lifelong support — our structured
                process ensures efficiency, transparency, and performance at
                every stage.
              </p>
            </div>

            {/* 6 Step cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 relative mb-1">
              {/* Connecting line */}
              <div className="absolute top-[32px] left-[10%] right-[10%] h-[1.5px] border-t border-dashed border-slate-200 hidden lg:block z-0" />

              {smartProcessSteps.map((item, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center text-center z-10 bg-slate-50 border border-slate-200/50 p-4.5 rounded-xl process-card-hover"
                >
                  {/* Photo wrapper step */}
                  <div className="w-full aspect-[4/3] relative mb-4">
                    <div className="absolute inset-0 rounded-lg overflow-hidden border border-slate-200">
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
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            PHASE {item.step}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-white border-2 border-[#fa5902] text-[#fa5902] text-[13.5px] font-black uppercase w-8 h-8 flex items-center justify-center rounded-full shadow-md z-30 transition-all duration-300 step-badge">
                      {item.step}
                    </div>
                  </div>

                  {/* Spacer to handle the overlapping circle and provide layout room */}
                  <div className="h-4" />

                  {/* Icon badge without background circle */}
                  <div className="flex items-center justify-center text-secondary mb-4 transition-all duration-300 process-icon">
                    {i === 0 && <HardHat size={36} />}
                    {i === 1 && <FileText size={36} />}
                    {i === 2 && <Settings size={36} />}
                    {i === 3 && <Construction size={36} />}
                    {i === 4 && <FileCheck size={36} />}
                    {i === 5 && <Headphones size={36} />}
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

            {/* Dots timeline with glowing pin locator effect */}
            <div className="relative flex justify-between px-[8%] items-center mb-5">
              <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-slate-200 via-secondary to-slate-200 z-0" />
              {smartProcessSteps.map((item, i) => (
                <div
                  key={i}
                  className="relative z-10 flex flex-col items-center justify-center w-8 h-8"
                >
                  {/* Outer animated ripple pulse */}
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-secondary/30 animate-ping" />

                  {/* Core Pin Dot */}
                  <div className="relative h-3 w-3 rounded-full bg-[#fa5902] shadow-md border-2 border-white" />
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
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-sm">
                        <PIcon size={27} />
                      </div>
                      <div>
                        <h4 className="text-[13px] font-black uppercase text-primary tracking-wide leading-tight">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-slate-500 leading-normal">
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
        {/* <section className="relative overflow-hidden bg-[#f8faff] py-[60px]">
          <Container className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                  <span className="h-[2px] w-8 bg-secondary rounded-full" />
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>GLOBAL CAPABILITY</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span className="h-[2px] w-8 bg-secondary rounded-full" />
                </div>

                <h2 className="headline text-primary text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] uppercase">
                  ENGINEERED TO PERFORM. <br />
                  <span className="text-secondary">DELIVERED WORLDWIDE.</span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500 font-medium">
                  From design to delivery, installation to support – our solutions power industries across the globe with unmatched reliability and performance.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200/80">
                  {globalReachPoints.map((item, i) => {
                    const RIcon = item.icon;
                    return (
                      <div
                        key={i}
                        className="text-center flex flex-col items-center group"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-200/80 text-[#fa5902] shadow-sm mb-3.5 group-hover:scale-105 transition-transform duration-300">
                          <RIcon size={24} className="stroke-[2]" />
                        </div>
                        <h4 className="text-[12px] font-extrabold uppercase tracking-wide text-[#092a5c] mb-1">
                          {item.title}
                        </h4>
                        <span className="block w-6 h-[1.5px] bg-[#fa5902] mb-1.5 mx-auto" />
                        <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-visible flex items-center justify-center">
                <Image
                  src="/solutionspage/global capability 1.jpg"
                  alt="Supply Locations Network"
                  fill
                  className="object-contain  select-none pointer-events-none"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />

                
              </div>
            </div>

            <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-5 mb-12">
              {globalFlagsCards.map((card, i) => {
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/60 shadow-sm bg-white flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      {card.image && (
                        <Image
                          src={card.image}
                          alt={card.name}
                          fill
                          className="object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                          sizes="(min-width: 1024px) 20vw, 50vw"
                        />
                      )}
                    </div>
                    <div className="bg-[#092a5c] p-4 text-left flex-1 flex flex-col justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white border border-white/20 shadow-inner group-hover:scale-105 transition-all duration-300">
                          {card.flag.startsWith("/") ? (
                            <Image
                              src={card.flag}
                              alt={`${card.name} flag`}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xl leading-none drop-shadow-sm">
                                {card.flag}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="text-[13px] font-extrabold uppercase tracking-wide text-white">
                          {card.name}
                        </span>
                      </div>
                      <p className="mt-3 text-[11.5px] text-slate-200 leading-snug font-medium">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-[#092a5c] to-[#041630] border border-white/10 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(3,27,64,0.3)] mb-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-5 industrial-grid" />
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
                {globalNavyBarMetrics.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="group/stat flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-4 pl-0 lg:pl-6 first:pl-0"
                    >
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#fa5902] group-hover/stat:border-[#fa5902]/30 group-hover/stat:bg-[#fa5902]/10 transition-all duration-300">
                        {i === 0 && (
                          <Globe
                            size={30}
                            className="text-[#fa5902] stroke-[1.8]"
                          />
                        )}
                        {i === 1 && (
                          <Building2
                            size={30}
                            className="text-[#fa5902] stroke-[1.8]"
                          />
                        )}
                        {i === 2 && (
                          <Settings
                            size={30}
                            className="text-[#fa5902] stroke-[1.8]"
                          />
                        )}
                        {i === 3 && (
                          <Users
                            size={30}
                            className="text-[#fa5902] stroke-[1.8]"
                          />
                        )}
                        {i === 4 && (
                          <Headphones
                            size={30}
                            className="text-[#fa5902] stroke-[1.8]"
                          />
                        )}
                      </div>
                      <div className="text-center sm:text-left">
                        <h4 className="text-3xl font-black text-[#fa5902] leading-none tracking-tight group-hover/stat:translate-x-0.5 transition-transform duration-300">
                          {item.value}
                        </h4>
                        <p className="text-[11px] font-black text-white uppercase tracking-widest mt-2">
                          {item.label}
                        </p>
                        <p className="text-[11px] text-slate-300 mt-1 leading-snug font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-wrap items-center justify-between gap-6 px-8 mt-10">
              {globalBottomValues.map((item, i) => {
                const VIcon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fdf2eb]">
                      <VIcon size={18} className="text-[#fa5902] stroke-[2]" />
                    </div>
                    <span className="text-[12px] font-extrabold uppercase tracking-wide text-[#092a5c]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
            </div>

            
          </Container>
        </section> */}

        {/* ========================================================================= */}
        {/* SECTION 10: SOLUTIONS BUILT AROUND YOUR SUCCESS */}
        {/* ========================================================================= */}
        <section className="bg-white py-[60px]">
          <Container>
            {/* Header Block */}
            <div className="mx-auto max-w-full text-center mb-16 px-4">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.08em] text-secondary">
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
                <span className="text-lg">WHY CHOOSE PITHAL SOLUTIONS</span>
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-center whitespace-nowrap text-[clamp(0.85rem,4vw,3.2rem)] font-black leading-[1.1] text-primary">
                SOLUTIONS BUILT AROUND{" "}
                <span className="text-secondary">YOUR SUCCESS.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                We combine engineering excellence with practical solutions to
                deliver maximum performance, reliability, and long-term value.
              </p>
            </div>

            {/* Grid of 6 cards with orange circular arcs */}
            <style>{`
              @keyframes arc-spin {
                0%   { stroke-dashoffset: 0;    filter: drop-shadow(0 0 4px #ff5a00); }
                100% { stroke-dashoffset: -370; filter: drop-shadow(0 0 4px #ff5a00); }
              }
              .why-card:hover .arc-circle {
                animation: arc-spin 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
              }
            `}</style>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              {whyChooseCards.map((item, i) => (
                <div
                  key={i}
                  className="why-card group relative flex flex-col bg-slate-50 border border-slate-200/80 p-7 rounded-xl min-h-[160px] hover:shadow-xl hover:-translate-y-1 hover:border-secondary/40 hover:bg-white transition-all duration-300 cursor-default"
                >
                  {/* Orange accent bar on left on hover */}
                  <span className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Left-side circle container with orange crescent */}
                  <div className="flex gap-5 items-start">
                    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      {/* Orange outer arc — partial by default, full circle + glow on hover */}
                      <svg
                        className="absolute -inset-[1.5px] h-[98px] w-[98px] -rotate-45 pointer-events-none"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          className="arc-circle"
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

                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {renderWhyChooseIcon(item.icon)}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-black uppercase tracking-[0.10em] text-primary group-hover:text-secondary transition-colors duration-300">
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
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-secondary">
                      <SIcon size={27} />
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
        {/* <section className="bg-bg-light section-space" id="case-studies">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-secondary">
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span>CASE STUDIES</span>
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                <span className="h-[2px] w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-center text-[clamp(2.2rem,5vw,3.2rem)] font-black leading-[1.1] text-primary">
                PROVEN SOLUTIONS. <span className="text-secondary">REAL RESULTS.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm md:text-base leading-relaxed text-text-muted">
                Delivering performance-driven solutions across industries with
                precision engineering, advanced technology, and reliable
                support.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
              {[
                "All Projects",
                "Quarry & Mining",
                "Aggregates",
                "Sand Manufacturing",
                "Industrial",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-full border transition-all duration-300",
                    activeTab === tab
                      ? "bg-secondary border-secondary text-white shadow-md"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50",
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              {filteredProjects.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                    <div className="absolute bottom-3 left-3 z-20 flex h-13 w-13 items-center justify-center rounded-full bg-white/90 border border-slate-100 shadow">
                      {idx === 0 && <Pickaxe size={30} className="text-secondary" strokeWidth={1.8} />}
                      {idx === 1 && <Construction size={30} className="text-secondary" strokeWidth={1.8} />}
                      {idx === 2 && <Sparkles size={30} className="text-secondary" strokeWidth={1.8} />}
                      {idx === 3 && <Road size={30} className="text-secondary" strokeWidth={1.8} />}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[15px] font-black text-primary leading-tight group-hover:text-secondary transition-colors mb-1">
                      {item.title}
                    </h3>
                    <span className="inline-flex gap-1.5 items-center text-[11px] font-bold text-secondary uppercase tracking-wider mb-4">
                      <MapPin size={10} className="text-secondary" />
                      {item.cat}
                    </span>

                    <div className="flex-1 space-y-0 divide-y divide-slate-100 border-t border-slate-100">
                      <div className="flex items-start justify-between py-3 gap-2">
                        <span className="text-[13px] text-slate-400 font-medium shrink-0">Capacity</span>
                        <span className="text-[13px] font-black text-primary text-right">{item.capacity}</span>
                      </div>
                      <div className="flex items-start justify-between py-3 gap-2">
                        <span className="text-[13px] text-slate-400 font-medium shrink-0">Location</span>
                        <span className="text-[13px] font-black text-primary text-right">{item.loc}</span>
                      </div>
                      <div className="flex items-start justify-between py-3 gap-2">
                        <span className="text-[13px] text-slate-400 font-medium shrink-0 mt-0.5">Machines Used</span>
                        <span className="text-[13px] font-bold text-slate-600 text-right leading-snug">{item.machines}</span>
                      </div>
                      <div className="flex items-start justify-between py-3 gap-2">
                        <span className="text-[13px] text-slate-400 font-medium shrink-0 mt-0.5">Result Achieved</span>
                        <span className="text-[13px] font-black text-primary text-right leading-snug">{item.result}</span>
                      </div>
                    </div>

                    <Link
                      href="#contact"
                      className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-sm md:text-base font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                    >
                      View Details
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
          </Container>
        </section> */}

        {/* ========================================================================= */}
        {/* SECTION 12: LET'S ENGINEER YOUR NEXT CRUSHING SOLUTION (CTA) */}
        {/* ========================================================================= */}
        <section
          className="relative bg-[#f4f7fb] py-16 lg:py-24 overflow-hidden font-sans"
          id="contact"
        >
          {/* Faint blueprint background pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
              {/* LEFT COLUMN: Text, Cards, Buttons */}
              <div className="lg:w-[55%] flex flex-col pt-4">
                {/* Tagline */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center">
                    <span className="w-10 h-[2px] bg-[#ea580c]"></span>
                  </div>
                  <span className="text-sm sm:text-lg font-black uppercase tracking-[0.2em] text-[#ea580c]">
                    Ready to Build. Ready to Perform.
                  </span>
                  <div className="flex items-center">
                    <span className="w-10 h-[2px] bg-[#ea580c]"></span>
                  </div>
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.05] text-[#0f172a] tracking-tight mb-6">
                  Let&apos;s Engineer Your <br />
                  <span className="text-[#ea580c]">
                    Next Crushing Solution.
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-slate-600 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-medium">
                  From concept to commissioning, we deliver engineering-driven
                  solutions that maximize performance, efficiency, and long-term
                  value.
                </p>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-3 text-[#ea580c]">
                      <svg
                        className="w-11 h-11"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-[13px] font-black text-[#0f172a] mb-1.5 leading-snug">
                      Engineering
                      <br />
                      Consultation
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      Connect with our experts to discuss your project needs.
                    </p>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-3 text-[#ea580c]">
                      <svg
                        className="w-11 h-11"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-[13px] font-black text-[#0f172a] mb-1.5 leading-snug">
                      Request a<br />
                      Quote
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      Get a detailed, customized quote tailored to your
                      requirements.
                    </p>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-3 text-[#ea580c]">
                      <svg
                        className="w-11 h-11"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-[13px] font-black text-[#0f172a] mb-1.5 leading-snug">
                      Plant Planning
                      <br />
                      Support
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      Optimize your plant layout, capacity, and workflow with
                      our experts.
                    </p>
                  </div>
                  {/* Card 4 */}
                  <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                    <div className="mb-3 text-[#ea580c]">
                      <svg
                        className="w-11 h-11"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-[13px] font-black text-[#0f172a] mb-1.5 leading-snug">
                      Expert Engineering
                      <br />
                      Help
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      End-to-end engineering support for reliable and efficient
                      operations.
                    </p>
                  </div>
                </div>

                {/* Buttons & Trust Badge */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Orange Solid Button */}
                    <a
                      href="#contact1"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#d44d0a] text-white px-8 py-4 rounded-xl text-[13px] font-black tracking-wide transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      Schedule a Consultation
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/919887537129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-4 rounded-xl text-[13px] font-black tracking-wide transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WhatsApp Consultation
                    </a>
                  </div>
                  {/* Trust text */}
                  <div className="flex items-center gap-3 text-slate-500 mt-2">
                    <svg
                      className="w-5 h-5 text-slate-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                    <span className="text-[13px] font-medium">
                      Trusted by industries worldwide for reliable,
                      high-performance crushing solutions.
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Image */}
              <div className="lg:w-[45%] relative w-full h-[400px] lg:h-[650px] rounded-tl-[100px] rounded-tr-[20px] rounded-b-[20px] overflow-hidden shadow-xl mt-8 lg:mt-0">
                <img
                  src="/solutionspage/ready to build ready to perform.jpg"
                  alt="Engineering Professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* NAVY OVERLAY BANNER - Floating exactly like the picture */}
            <div className="relative lg:absolute lg:bottom-0 lg:right-4 xl:right-12 lg:w-[680px] mt-8 lg:mt-0 z-20 bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden border border-white/5">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-700/60 p-2 py-3">
                <div className="flex flex-col items-center justify-center p-3.5 text-center gap-2.5 hover:bg-slate-800/30 transition-colors">
                  <svg
                    className="w-10 h-10 text-[#ea580c]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    ></path>
                  </svg>
                  <span className="text-[12px] font-bold text-slate-100 tracking-wide">
                    Customized
                    <br />
                    Solutions
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center p-3.5 text-center gap-2.5 hover:bg-slate-800/30 transition-colors">
                  <svg
                    className="w-10 h-10 text-[#ea580c]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-[12px] font-bold text-slate-100 tracking-wide">
                    High Performance
                    <br />& Reliability
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center p-3.5 text-center gap-2.5 hover:bg-slate-800/30 transition-colors">
                  <svg
                    className="w-10 h-10 text-[#ea580c]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                  <span className="text-[12px] font-bold text-slate-100 tracking-wide">
                    Cost Efficient
                    <br />
                    Operations
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center p-3.5 text-center gap-2.5 hover:bg-slate-800/30 transition-colors">
                  <svg
                    className="w-10 h-10 text-[#ea580c]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  <span className="text-[12px] font-bold text-slate-100 tracking-wide">
                    End-to-End
                    <br />
                    Support
                  </span>
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
