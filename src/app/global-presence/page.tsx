"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Clock,
  Settings,
  MapPin,
  Zap,
  Truck,
  ArrowRight,
  ChevronRight,
  Shield,
  Award,
  TrendingUp,
  FileText,
  CheckCircle2,
  Users,
  Check,
  Mail,
  Anchor,
  Factory,
  Building2,
  Headphones,
  Ship,
  Handshake,
  HardHat,
  Wrench,
  Box,
  Clipboard,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — matching screenshot content exactly
   ═══════════════════════════════════════════════════════════════════════════ */

const heroStats = [
  {
    Factory,
    Ship,
    value: "35+",
    label: "COUNTRIES",
    desc: "Global presence across 5 continents",
    icon: Globe,
  },
  {
    value: "1500+",
    label: "INSTALLATIONS",
    desc: "Successful installations worldwide",
    icon: Building2,
  },
  {
    value: "24/7",
    label: "SUPPORT",
    desc: "Round-the-clock support across time zones",
    icon: Clock,
  },
  {
    value: "GLOBAL",
    label: "ENGINEERING ASSISTANCE",
    desc: "Expert engineering support wherever you are",
    icon: Settings,
  },
];

const regionsData = [
  {
    id: "middle-east",
    name: "Middle East",
    countriesCount: "15+",
    color: "#FA5902",
    countries: ["UAE", "Oman", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain"],
    desc: "Serving major aggregate, mining, and large-scale infrastructure projects.",
    coords: { x: 550, y: 165 },
  },
  {
    id: "africa",
    name: "Africa",
    countriesCount: "12+",
    color: "#FA5902",
    countries: [
      "South Africa",
      "Kenya",
      "Ghana",
      "Tanzania",
      "Egypt",
      "Zambia",
    ],
    desc: "Extensive presence in gold, iron ore, and limestone mining sectors.",
    coords: { x: 510, y: 240 },
  },
  {
    id: "southeast-asia",
    name: "Southeast Asia",
    countriesCount: "10+",
    color: "#16a34a",
    countries: [
      "Indonesia",
      "Malaysia",
      "Thailand",
      "Philippines",
      "Vietnam",
      "Singapore",
    ],
    desc: "Expanding operations in high-capacity quarrying and material handling.",
    coords: { x: 670, y: 200 },
  },
  {
    id: "europe",
    name: "Europe",
    countriesCount: "8+",
    color: "#7c3aed",
    countries: ["Germany", "France", "UK", "Italy", "Poland", "Spain"],
    desc: "Specialized high-efficiency recycling solutions and premium engineering.",
    coords: { x: 480, y: 110 },
  },
  {
    id: "south-america",
    name: "South America",
    countriesCount: "6+",
    color: "#FA5902",
    countries: ["Brazil", "Chile", "Peru", "Colombia", "Argentina"],
    desc: "Heavy-duty mining installations supported by regional sales partners.",
    coords: { x: 300, y: 250 },
  },
];

const topStats = [
  {
    icon: Globe,
    value: "35+",
    label: "COUNTRIES",
    desc: "Global presence across 5 continents",
  },
  {
    icon: Building2,
    value: "1500+",
    label: "PROJECTS DELIVERED",
    desc: "Successful installations worldwide",
  },
  {
    icon: Factory,
    value: "20+",
    label: "INDUSTRIES SERVED",
    desc: "Diverse industrial applications",
  },
  {
    icon: Ship,
    value: "100%",
    label: "EXPORT CAPABILITY",
    desc: "End-to-end export ready solutions",
  },
];

const projectsData = [
  {
    id: "01",
    flag: "🇰🇪",
    country: "KENYA",
    industry: "Mining Industry",
    title: "300 TPH CRUSHING PLANT",
    capacity: "300 TPH",
    machines: "Jaw Crusher, Cone Crusher, Vibrating Screen, Feeders, Conveyors",
    result: "High efficiency, consistent output with low operating cost.",
    image: "/images/global-presense/kenya-300hp.svg",
  },
  {
    id: "02",
    flag: "🇦🇪",
    country: "UAE",
    industry: "Aggregates Industry",
    title: "500 TPH CRUSHING PLANT",
    capacity: "500 TPH",
    machines:
      "Jaw Crusher, Cone Crusher, Vibrating Screen, Sand Washer, Conveyors",
    result: "Reliable performance with maximum uptime.",
    image: "/images/global-presense/uae-cement.svg",
  },
  {
    id: "03",
    flag: "🇮🇳",
    country: "INDIA",
    industry: "Cement Industry",
    title: "250 TPH CRUSHING PLANT",
    capacity: "250 TPH",
    machines: "Jaw Crusher, Impact Crusher, Vibrating Screen, Conveyors",
    result: "Uniform output quality and improved productivity.",
    image: "/images/global-presense/india-250hp.svg",
  },
  {
    id: "04",
    flag: "🇮🇩",
    country: "INDONESIA",
    industry: "Mining Industry",
    title: "400 TPH CRUSHING PLANT",
    capacity: "400 TPH",
    machines: "Cone Crusher, Vibrating Screen, Feeders, Conveyors",
    result: "Enhanced material processing with reduced downtime.",
    image: "/images/global-presense/indonasia-400hp.svg",
  },
  {
    id: "05",
    flag: "🇿🇦",
    country: "SOUTH AFRICA",
    industry: "Quarry Industry",
    title: "350 TPH CRUSHING PLANT",
    capacity: "350 TPH",
    machines: "Jaw Crusher, Cone Crusher, Vibrating Screen, Conveyors",
    result: "Consistent production with excellent reliability.",
    image: "/images/global-presense/southafrica-350hp.svg",
  },
];

const zonesData = [
  {
    region: "NORTH AMERICA",
    countries: "USA | Canada | Mexico",
    services: "Fast response, Local inventory",
  },
  {
    region: "SOUTH AMERICA",
    countries: "Brazil | Chile | Peru",
    services: "Field support, Parts availability",
  },
  {
    region: "EUROPE",
    countries: "Germany | France | UK",
    services: "Technical experts, Rapid deployment",
  },
  {
    region: "MIDDLE EAST",
    countries: "UAE | Saudi Arabia | Qatar",
    services: "On-ground support, Spare parts",
  },
  {
    region: "AFRICA",
    countries: "South Africa | Kenya | Ghana",
    services: "Local service teams, Training",
  },
  {
    region: "ASIA PACIFIC",
    countries: "Singapore | India | Australia",
    services: "24/7 assistance, Remote monitoring",
  },
];

const testimonials = [
  {
    quote:
      "Pithal Machines delivered a complete crushing solution that exceeded our productivity expectations.",
    author: "Operations Manager, Mining Company, Kenya",
  },
  {
    quote:
      "Their engineering expertise and after-sales support are world-class.",
    author: "Plant Head, Cement Company, UAE",
  },
  {
    quote:
      "From project planning to installation, Pithal Machines has been exceptional.",
    author: "Director, Construction Aggregates, Australia",
  },
];

/* ═══════════════════════════════════════════════════════════════════════════ */

export default function GlobalPresencePage() {
  const [activeRegion, setActiveRegion] = useState("middle-east");
  const activeRegionObj =
    regionsData.find((r) => r.id === activeRegion) || regionsData[0];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-hidden">
        {/* ══════════════════════════════════════════════════════════════════
    SECTION 1 — HERO
    ══════════════════════════════════════════════════════════════════ */}
        <section className="relative isolate overflow-hidden bg-[#f4f8fc] pt-6 pb-6 lg:pt-10">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/global-presense/hero.png"
              alt="Pithal global logistics with crushing equipment, transport truck, cargo ship and world map"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[95%_center]"
            />
            {/* ✅ gradient pushes white further left, opens up more of the image */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,#fff_30%,rgba(255,255,255,0.88)_42%,rgba(255,255,255,0.25)_60%,rgba(255,255,255,0)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f4f8fc] via-[#f4f8fc]/50 to-transparent" />
          </div>

          <Container className="relative z-10 max-w-[1320px] px-2 sm:px-4 lg:px-6">
            {/* Breadcrumb */}
            <div className="mb-10 flex items-center gap-2 text-sm font-semibold text-primary/80">
              <Link href="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 text-primary/50" />
              <span className="text-secondary">Global Presence</span>
            </div>

            <div className="max-w-[640px]">
              {/* ✅ Badge — outline style, orange border + text, NOT filled */}
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-md border border-secondary/40 bg-white/80 px-4 py-2 text-sm font-black uppercase tracking-widest text-secondary">
                <Globe className="h-4 w-4 stroke-[2] text-secondary" />
                Global Presence
              </div>

              {/* ✅ Headline — both lines same large size */}
              <h1 className="headline mb-5 leading-[0.95]">
                <span className="block text-[clamp(2.2rem,4.8vw,4.4rem)] font-black text-primary">
                  ENGINEERING EXCELLENCE.
                </span>
                <span className="block text-[clamp(2.2rem,4.8vw,4.4rem)] font-black text-secondary">
                  DELIVERED WORLDWIDE.
                </span>
              </h1>

              {/* ✅ Description — normal weight (not semibold) */}
              <p className="mb-8 max-w-[500px] text-[clamp(0.95rem,1.1vw,1.05rem)] font-normal leading-relaxed text-[#3f5068]">
                Pithal Engineering delivers advanced crushing &amp; screening
                solutions across the globe with precision, reliability and
                unmatched support. From engineering to installation — we&apos;re
                with you at every step.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  variant="primary"
                  href="#network"
                  className="group h-12 px-7 text-sm font-black tracking-wide"
                >
                  EXPLORE GLOBAL REACH
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outlineNavy"
                  href="/contact"
                  className="group h-12 px-7 text-sm font-black tracking-wide border-2 border-primary bg-white"
                >
                  DISCUSS YOUR PROJECT
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-14 rounded-2xl border border-white/80 bg-white/95 px-4 py-5 shadow-[0_18px_45px_rgba(10,35,70,0.12)] backdrop-blur-sm sm:px-6 lg:mt-20 lg:px-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                {heroStats.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 lg:border-r lg:border-slate-200 lg:px-6 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <s.icon className="h-7 w-7 stroke-[1.6]" />
                    </div>
                    <div>
                      <div className="text-[clamp(1.6rem,2.2vw,2rem)] font-black leading-none text-secondary">
                        {s.value}
                      </div>
                      {/* ✅ Last stat label in orange, others in navy */}
                      <div
                        className={`mt-1 text-sm font-black uppercase tracking-wide ${i === heroStats.length - 1 ? "text-secondary" : "text-primary"}`}
                      >
                        {s.label}
                      </div>
                      <div className="mt-1 max-w-[180px] text-sm font-medium leading-snug text-[#54647b]">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust bar */}
            <div className="mx-auto mt-5 flex max-w-[1000px] flex-col items-center justify-center gap-4 text-center text-sm font-semibold text-[#4a5b72] md:flex-row md:gap-10 md:text-left">
              <span className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-secondary" />
                Engineered for global standards. Delivered with trust. Built for
                performance.
              </span>
              <span className="hidden h-8 w-px bg-slate-300 md:block" />
              <span>
                Manufactured in India. Trusted by industries worldwide.
              </span>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
    SECTION 2 — GLOBAL NETWORK
    ══════════════════════════════════════════════════════════════════ */}
        <section
          id="network"
          className="section-space bg-white border-b border-slate-100"
        >
          <Container>
            {/* ─── Row 1: Header Left + Stat Cards Right ─── */}
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-2">
              {/* LEFT: Label + Headline + Description + Legend */}
              <div className="lg:col-span-5">
                {/* ✅ "OUR GLOBAL NETWORK" with orange dashes on both sides */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-secondary" />
                  <span className="text-xs font-black uppercase tracking-[0.25em] text-secondary">
                    OUR GLOBAL NETWORK
                  </span>
                  <span className="h-px w-8 bg-secondary" />
                </div>

                {/* ✅ Both headline lines same large size */}
                <h2 className="headline leading-[0.95] mb-4">
                  <span className="block text-[clamp(1.8rem,3.4vw,2.8rem)] text-primary font-black">
                    A WORLDWIDE NETWORK.
                  </span>
                  <span className="block text-[clamp(1.8rem,3.4vw,2.8rem)] text-secondary font-black">
                    DELIVERING INDUSTRIAL EXCELLENCE.
                  </span>
                </h2>

                {/* ✅ Normal weight description */}
                <p className="text-sm font-normal text-text-muted max-w-lg leading-relaxed mb-6">
                  Pithal Engineering delivers advanced crushing &amp; screening
                  solutions to clients across the globe. Our strong global
                  network ensures seamless delivery, installation and long-term
                  support.
                </p>

                {/* ✅ Legend row - horizontal with correct icons */}
                <div className="flex flex-wrap gap-5 text-xs font-bold text-primary">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-secondary" /> Projects
                    Delivered
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> Support
                    Locations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Anchor className="w-3.5 h-3.5 text-blue-500" /> Export
                    Ports
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-6 border-t-2 border-dashed border-secondary/70" />
                    Logistics Routes
                  </span>
                </div>
              </div>

              {/* ✅ RIGHT: 4 stat cards — icon on top, number, label, desc (no circle bg on icon) */}
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
                {topStats.map((s, i) => (
                  <div
                    key={i}
                    className="p-6 border border-slate-100 rounded-[1.5rem] bg-white shadow-sm flex flex-col gap-3 transition-all hover:shadow-md"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                      <s.icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <div className="text-[clamp(1.8rem,2.4vw,2.5rem)] font-black text-secondary leading-none">
                      {s.value}
                    </div>
                    <div className="text-xs font-black text-primary uppercase tracking-[0.24em]">
                      {s.label}
                    </div>
                    <div className="text-sm text-text-muted leading-snug">
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ─── Row 2: Region Selector | Map | Highlights ─── */}
            <div className="grid lg:grid-cols-12 gap-4 items-stretch">
              {/* ✅ Region Selector — globe icon per region */}
              <div className="lg:col-span-3 flex flex-col gap-3">
                {/* SELECT REGION header */}
                <div className="bg-secondary text-white rounded-2xl px-4 py-3 font-black text-xs uppercase tracking-[0.28em] flex items-center gap-2">
                  <Globe className="w-4 h-4 text-white flex-shrink-0" />
                  SELECT REGION
                </div>

                {/* Region buttons */}
                {regionsData.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setActiveRegion(reg.id)}
                    className={cn(
                      "w-full text-left px-4 py-4 border rounded-3xl transition-all flex items-center justify-between gap-4",
                      activeRegion === reg.id
                        ? "border-secondary bg-secondary/10"
                        : "border-slate-200 bg-white shadow-sm hover:border-slate-300",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Globe
                        className="w-6 h-6 flex-shrink-0 stroke-[1.8]"
                        style={{ color: reg.color || "#FA5902" }}
                      />
                      <div>
                        <div className="text-sm font-black text-primary uppercase leading-tight">
                          {reg.name}
                        </div>
                        <div className="text-xs font-bold text-secondary mt-1">
                          {reg.countriesCount} Countries
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={cn(
                        "w-3.5 h-3.5 flex-shrink-0",
                        activeRegion === reg.id
                          ? "text-secondary"
                          : "text-slate-300",
                      )}
                    />
                  </button>
                ))}
              </div>

              {/* ✅ Map — FIXED div structure (popup is inside the container now) */}
              <div className="lg:col-span-6 rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-white relative min-h-[420px]">
                <div className="absolute inset-0 bg-slate-950/5" />
                <div className="relative h-full">
                  <Image
                    src="/images/global-presense/global-map.svg"
                    alt="World Map"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-primary/95 text-white px-6 py-5 border-t border-secondary/30 backdrop-blur-sm">
                  <div className="text-[0.65rem] font-black text-secondary uppercase tracking-[0.35em] mb-1">
                    REGIONAL HUB
                  </div>
                  <h4 className="text-sm font-black uppercase tracking-wider mb-2">
                    {activeRegionObj.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {activeRegionObj.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeRegionObj.countries.map((c, i) => (
                      <span
                        key={i}
                        className="text-[0.65rem] font-black uppercase px-2 py-1 bg-white/10 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ✅ Global Highlights — orange icons (not numbered circles) */}
              <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xs font-black text-primary uppercase tracking-[0.28em] border-b border-slate-100 pb-3 mb-5">
                  GLOBAL HIGHLIGHTS
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      icon: Building2,
                      val: "5",
                      label: "CONTINENTS",
                      desc: "Strong global footprint",
                    },
                    {
                      icon: Globe,
                      val: "35+",
                      label: "COUNTRIES",
                      desc: "Expanding every year",
                    },
                    {
                      icon: Factory,
                      val: "1500+",
                      label: "INSTALLATIONS",
                      desc: "Proven performance worldwide",
                    },
                    {
                      icon: Headphones,
                      val: "24/7",
                      label: "SUPPORT",
                      desc: "Always here, wherever you are",
                    },
                  ].map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <h.icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div>
                        <div className="text-xl font-black text-secondary leading-none">
                          {h.val}
                        </div>
                        <div className="text-[0.67rem] font-black text-primary uppercase tracking-[0.24em] mt-1">
                          {h.label}
                        </div>
                        <div className="text-sm text-text-muted mt-1 leading-snug">
                          {h.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── Row 3: Network Strength ─── */}
            <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xs">
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-[0.35em] leading-tight">
                    OUR NETWORK
                    <br />
                    STRENGTH
                  </h4>
                </div>
                <div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-5 justify-items-center">
                  {[
                    {
                      icon: MapPin,
                      title: "STRATEGIC LOCATIONS",
                      desc: "Global support & service in key regions",
                    },
                    {
                      icon: Handshake,
                      title: "STRONG PARTNERSHIPS",
                      desc: "Collaborating with trusted agents & partners",
                    },
                    {
                      icon: Zap,
                      title: "FAST RESPONSE",
                      desc: "Quick support for minimal downtime",
                    },
                    {
                      icon: Shield,
                      title: "RELIABLE DELIVERIES",
                      desc: "On-time shipments with global logistics",
                    },
                    {
                      icon: Settings,
                      title: "LOCAL ASSISTANCE",
                      desc: "Local expertise, global standards",
                    },
                  ].map((it, i) => (
                    <div
                      key={i}
                      className="w-full max-w-[15rem] rounded-[1.75rem] border border-slate-200 bg-white px-3 py-3 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FFECE0] text-[#FA5902]">
                          <it.icon className="w-4.5 h-4.5 stroke-[1.7]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[0.68rem] font-black text-slate-950 uppercase tracking-[0.28em] leading-tight">
                            {it.title}
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-5 text-slate-500">
                        {it.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 3 — EXPORT CAPABILITY
            ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white">
          <div className="overflow-hidden bg-white">
            <div className="relative min-h-[590px] overflow-hidden bg-white lg:min-h-[425px]">
              <Image
                src="/images/global-presense/export-capability.svg"
                alt="Pithal Machines export logistics with crane, cargo container, ship and truck"
                fill
                sizes="100vw"
                className="object-cover object-[72%_center]"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,#fff_33%,rgba(255,255,255,0.92)_45%,rgba(255,255,255,0.22)_64%,rgba(255,255,255,0)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent" />

              <div className="relative z-10 flex min-h-[590px] flex-col justify-between px-5 pb-7 pt-8 sm:px-8 lg:min-h-[425px] lg:px-11 lg:pt-9">
                <div className="max-w-[650px]">
                  <p className="mb-4 flex items-center gap-3 text-[13px] font-black uppercase tracking-[0.07em] text-[#fa5902]">
                    <span className="h-[2px] w-8 bg-[#fa5902]" />
                    OUR EXPORT CAPABILITY
                  </p>
                  <h2 className="headline max-w-[640px] text-[clamp(2.35rem,4.25vw,4.2rem)] leading-[0.94] text-[#061f49]">
                    BUILT TO MEET WORLDWIDE
                    <span className="block text-[#fa5902]">
                      STANDARDS. DELIVERED WITH CARE.
                    </span>
                  </h2>
                  <p className="mt-5 max-w-[560px] text-[clamp(0.95rem,1.15vw,1.08rem)] font-semibold leading-7 text-[#273b5a]">
                    From engineering to export logistics, we ensure our
                    solutions reach you safely, compliantly and on time -
                    anywhere in the world.
                  </p>
                </div>

                <div className="grid max-w-[650px] grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0">
                  {[
                    {
                      icon: CheckCircle2,
                      title: "Export-Ready Systems",
                      desc: "Engineered for global delivery",
                    },
                    {
                      icon: Box,
                      title: "Global Packaging Standards",
                      desc: "Secured, certified & reliable",
                    },
                    {
                      icon: FileText,
                      title: "Documentation Support",
                      desc: "Complete export documentation",
                    },
                    {
                      icon: Shield,
                      title: "International Compliance",
                      desc: "Meet global quality & safety norms",
                    },
                    {
                      icon: Ship,
                      title: "Shipping Coordination",
                      desc: "End-to-end logistics & shipment tracking",
                    },
                  ].map((c, i) => (
                    <div key={i} className="px-3 text-center">
                      <c.icon className="mx-auto mb-3 h-10 w-10 stroke-[1.65] text-[#fa5902]" />
                      <div className="mx-auto max-w-[112px] text-[12px] font-black leading-[1.25] text-[#061f49]">
                        {c.title}
                      </div>
                      <div className="mx-auto mt-3 max-w-[120px] text-[12px] font-semibold leading-5 text-[#40516d]">
                        {c.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-5 top-5 z-10 hidden lg:block">
                <Image
                  src="/images/brand/pithal-logo.png"
                  alt="Pithal Machines Ltd"
                  width={156}
                  height={88}
                  className="h-auto w-[156px]"
                />
              </div>
            </div>

            <div className="mx-auto max-w-[1376px] bg-white px-4 pb-7 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-[10px] bg-[#061f49] px-5 py-4 text-white shadow-[0_18px_35px_rgba(9,31,66,0.18)] sm:px-8 lg:grid lg:min-h-[156px] lg:grid-cols-[1.36fr_repeat(4,1fr)] lg:items-center lg:px-9">
                <div className="relative mb-5 min-h-[124px] overflow-hidden lg:mb-0 lg:h-[128px] lg:min-h-0 lg:pr-8">
                  <Image
                    src="/images/global-presense/export-route-map.png"
                    alt="Worldwide export route map"
                    fill
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="object-cover object-left opacity-95"
                  />
                  <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#061f49] to-transparent" />
                </div>

                {[
                  {
                    value: "35+",
                    label: "COUNTRIES EXPORTED TO",
                    desc: "Expanding globally every year",
                    icon: Globe,
                  },
                  {
                    value: "1500+",
                    label: "SHIPMENTS DELIVERED",
                    desc: "Safe & on-time deliveries",
                    icon: Ship,
                  },
                  {
                    value: "100%",
                    label: "EXPORT-READY EQUIPMENT",
                    desc: "Built to global standards",
                    icon: Box,
                  },
                  {
                    value: "24/7",
                    label: "LOGISTICS SUPPORT",
                    desc: "End-to-end coordination & tracking",
                    icon: Headphones,
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="relative grid grid-cols-[50px_1fr] items-center gap-3 py-4 lg:px-6 lg:py-0 lg:before:absolute lg:before:left-0 lg:before:top-4 lg:before:h-[calc(100%-2rem)] lg:before:w-px lg:before:bg-white/20"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8">
                      <s.icon className="h-8 w-8 stroke-[1.45] text-white" />
                    </div>
                    <div>
                      <div className="text-[clamp(1.85rem,2.25vw,2.2rem)] font-black leading-none text-[#fa5902]">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[12px] font-black uppercase leading-[1.25] tracking-[0.04em] text-white">
                        {s.label}
                      </div>
                      <div className="mt-2 text-[12px] font-semibold leading-[1.35] text-white/82">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid min-h-[268px] gap-0 overflow-hidden rounded-[10px] border border-[#e6ebf3] bg-white shadow-[0_15px_36px_rgba(9,31,66,0.08)] lg:grid-cols-12">
                <div className="border-b border-[#e0e6ef] p-5 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-5">
                  <h3 className="mb-6 text-[15px] font-black uppercase leading-none text-[#061f49]">
                    OUR EXPORT WORKFLOW
                  </h3>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
                    {[
                      { icon: Settings, title: "ENGINEERING & DESIGN" },
                      { icon: Award, title: "MANUFACTURING & TESTING" },
                      { icon: Box, title: "PACKAGING & PRESERVATION" },
                      { icon: FileText, title: "DOCUMENTATION & COMPLIANCE" },
                      { icon: Ship, title: "SHIPPING & TRANSPORT" },
                      { icon: MapPin, title: "SITE DELIVERY & ASSISTANCE" },
                    ].map((step, i) => (
                      <div key={i} className="relative text-center">
                        {i < 5 && (
                          <ArrowRight className="absolute -right-3 top-7 hidden h-4 w-4 text-[#061f49]/65 lg:block" />
                        )}
                        <div className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#f8fafc] text-[#061f49] shadow-[inset_0_0_0_4px_#fff,0_0_0_1px_rgba(9,31,73,0.08),0_6px_14px_rgba(9,31,66,0.04)]">
                          <step.icon className="h-6 w-6 stroke-[1.55]" />
                        </div>
                        <div className="mt-3 text-[15px] font-black leading-none text-[#fa5902]">
                          0{i + 1}
                        </div>
                        <div className="mx-auto mt-2 max-w-[76px] text-[10px] font-black uppercase leading-4 text-[#061f49]">
                          {step.title}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4 rounded-[6px] bg-[#f3f6fa] px-4 py-3 text-[12px] font-semibold leading-5 text-[#273b5a] shadow-[inset_0_0_0_1px_rgba(9,31,66,0.03)]">
                    <Shield className="h-8 w-8 shrink-0 stroke-[1.65] text-[#fa5902]" />
                    <span>
                      Every step is executed with precision to ensure quality,
                      compliance &amp; on-time global delivery.
                    </span>
                  </div>
                </div>

                <div className="relative overflow-hidden border-b border-[#e0e6ef] bg-[#fbfcfe] p-5 lg:col-span-2 lg:border-b-0 lg:border-r lg:p-5">
                  <h3 className="mb-5 text-[14px] font-black uppercase leading-tight text-[#061f49]">
                    DOCUMENTATION SUPPORT
                  </h3>
                  <div className="relative z-10 max-w-[155px] space-y-3">
                    {[
                      "Commercial Invoice",
                      "Packing List",
                      "Certificate of Origin",
                      "Bill of Lading / AWB",
                      "Insurance Documents",
                      "Export Compliance Docs",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[11px] font-bold leading-4 text-[#273b5a]"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#fa5902] p-0.5 text-white" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Image
                    src="/images/global-presense/export-documents-clipboard.png"
                    alt="Export documentation checklist"
                    width={132}
                    height={174}
                    className="pointer-events-none absolute bottom-2 right-[-10px] hidden h-auto w-[116px] sm:block"
                  />
                </div>

                <div className="relative overflow-hidden border-b border-[#e0e6ef] p-5 lg:col-span-2 lg:border-b-0 lg:border-r lg:p-5">
                  <h3 className="mb-5 text-[14px] font-black uppercase leading-tight text-[#061f49]">
                    INTERNATIONAL COMPLIANCE
                  </h3>
                  <div className="relative z-10 max-w-[166px] space-y-3">
                    {[
                      "ISO Certified Processes",
                      "CE & Global Standards",
                      "Material Traceability",
                      "Quality Assurance",
                      "Safety Compliance",
                      "Environmental Compliance",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-[11px] font-bold leading-4 text-[#273b5a]"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 rounded-full bg-[#fa5902] p-0.5 text-white" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Image
                    src="/images/global-presense/export-compliance-badge.png"
                    alt="Compliant and certified badge"
                    width={180}
                    height={130}
                    className="pointer-events-none absolute bottom-8 right-[-4px] hidden h-auto w-[142px] sm:block"
                  />
                </div>

                <div className="flex flex-col justify-between bg-[#fbfcfe] p-5 lg:col-span-3 lg:p-5">
                  <div>
                    <h3 className="mb-4 text-[14px] font-black uppercase leading-tight text-[#061f49]">
                      SHIPPING &amp; LOGISTICS PARTNERS
                    </h3>
                    <p className="mb-5 max-w-[250px] text-[12px] font-semibold leading-5 text-[#40516d]">
                      Partnering with trusted global logistics leaders to ensure
                      reliable delivery.
                    </p>
                    <Image
                      src="/images/global-presense/export-logistics-logos.png"
                      alt="Global logistics partner logos"
                      width={280}
                      height={95}
                      className="h-auto w-full max-w-[280px]"
                    />
                  </div>
                  <Button
                    href="/contact"
                    className="group mt-6 h-10 w-full justify-between rounded-[6px] bg-[#061f49] px-4 text-[11px] font-black tracking-wide shadow-[0_8px_16px_rgba(9,31,66,0.14)] hover:bg-[#fa5902]"
                  >
                    GLOBAL REACH. RELIABLE DELIVERY.
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              <div className="mt-2 grid gap-0 overflow-hidden rounded-[10px] border border-[#e6ebf3] bg-white py-3 shadow-[0_12px_28px_rgba(9,31,66,0.06)] sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: Box,
                    t: "Secure Packaging",
                    d: "Built for long-distance safety",
                  },
                  {
                    icon: Truck,
                    t: "On-Time Delivery",
                    d: "Reliable & scheduled shipments",
                  },
                  {
                    icon: Clock,
                    t: "Real-Time Tracking",
                    d: "Complete shipment visibility",
                  },
                  {
                    icon: Globe,
                    t: "Global Standards",
                    d: "Trusted quality worldwide",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-4 px-5 py-3 lg:border-r lg:border-[#dfe5ee] lg:last:border-r-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff3ec] text-[#fa5902]">
                      <f.icon className="h-7 w-7 stroke-[1.65]" />
                    </div>
                    <div>
                      <div className="text-[13px] font-black leading-none text-[#061f49]">
                        {f.t}
                      </div>
                      <div className="mt-1 text-[12px] font-semibold leading-4 text-[#40516d]">
                        {f.d}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* ══════════════════════════════════════════════════════════════════
            SECTION 4 — INDUSTRIES SERVED
            ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white px-5 py-8 sm:px-8 lg:px-9">
          <div className="mx-auto max-w-[1390px]">
            <div className="mb-7 grid items-end gap-8 lg:grid-cols-[1.08fr_1.52fr]">
              <div>
                <p className="mb-3 flex items-center gap-3 text-[14px] font-black uppercase tracking-[0.06em] text-[#fa5902]">
                  <span className="h-[2px] w-8 bg-[#fa5902]" />
                  INDUSTRIES WE SERVE GLOBALLY
                </p>
                <h2 className="headline text-[clamp(2.6rem,4.4vw,4.6rem)] leading-[0.92] text-[#061f49]">
                  POWERING INDUSTRIES.
                  <span className="block text-[#fa5902]">
                    ACROSS THE WORLD.
                  </span>
                </h2>
                <p className="mt-4 max-w-[590px] text-[16px] font-semibold leading-7 text-[#273b5a]">
                  Pithal Engineering solutions are trusted in diverse industries
                  worldwide. Built for performance. Engineered for global
                  impact.
                </p>
              </div>

              <div className="grid gap-0 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    icon: Globe,
                    value: "35+",
                    label: "COUNTRIES",
                    desc: "Global presence across 5 continents",
                  },
                  {
                    icon: Factory,
                    value: "1500+",
                    label: "INSTALLATIONS",
                    desc: "Successful installations worldwide",
                  },
                  {
                    icon: Settings,
                    value: "20+",
                    label: "INDUSTRIES",
                    desc: "Serving a wide range of industrial applications",
                  },
                  {
                    icon: Users,
                    value: "100%",
                    label: "PERFORMANCE",
                    desc: "Engineered for reliability and long-term results",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[106px] items-start gap-4 px-5 py-2 xl:border-l xl:border-[#cfd6e2]"
                  >
                    <stat.icon className="mt-1 h-12 w-12 shrink-0 stroke-[1.45] text-[#fa5902]" />
                    <div>
                      <div className="text-[30px] font-black leading-none text-[#fa5902]">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[12px] font-black uppercase leading-4 text-[#061f49]">
                        {stat.label}
                      </div>
                      <p className="mt-3 max-w-[140px] text-[11px] font-semibold leading-4 text-[#40516d]">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  id: "01",
                  name: "MINING",
                  country: "South Africa",
                  flag: "🇿🇦",
                  image: "/images/global-presense/mining.svg",
                  icon: "/images/global-presense/industry-icons/mining-cart.png",
                  desc: "Reliable solutions for demanding mining operations.",
                  regions: "Africa, Asia, Australia",
                  applications: "Crushing, Screening, Material Handling",
                  impact: "High output, Reduced downtime",
                },
                {
                  id: "02",
                  name: "AGGREGATES",
                  country: "UAE",
                  flag: "🇦🇪",
                  image: "/images/global-presense/agrigates.svg",
                  icon: "/images/global-presense/industry-icons/aggregates-pile.png",
                  desc: "High-capacity crushing & screening for aggregate production.",
                  regions: "Middle East, Asia, Europe",
                  applications: "Aggregate Production, Road Base, Construction",
                  impact: "Consistent Quality, Optimized Output",
                },
                {
                  id: "03",
                  name: "CEMENT",
                  country: "India",
                  flag: "🇮🇳",
                  image: "/images/global-presense/cement.svg",
                  icon: "/images/global-presense/industry-icons/cement-plant.png",
                  desc: "Advanced engineering for cement manufacturing plants.",
                  regions: "India, Middle East, Africa",
                  applications:
                    "Raw Material Processing, Clinker Grinding, Handling",
                  impact: "Energy Efficient, High Reliability",
                },
                {
                  id: "04",
                  name: "INFRASTRUCTURE",
                  country: "Singapore",
                  flag: "🇸🇬",
                  image: "/images/global-presense/infrastructure.svg",
                  icon: "/images/global-presense/industry-icons/infrastructure-bridge.png",
                  desc: "Powering infrastructure projects with robust & efficient solutions.",
                  regions: "Asia, Africa, South America",
                  applications:
                    "Road Construction, Bridges, Tunnels, Urban Projects",
                  impact: "Durability, Efficiency, Timely Delivery",
                },
                {
                  id: "05",
                  name: "CONSTRUCTION",
                  country: "Brazil",
                  flag: "🇧🇷",
                  image: "/images/global-presense/contruction.svg",
                  icon: "/images/global-presense/industry-icons/construction-crane.png",
                  desc: "Solutions that build the foundation of tomorrow.",
                  regions: "South America, Asia, Africa",
                  applications: "Sand Making, Concrete, Precast, Aggregates",
                  impact: "Stronger Structures, Lower Operating Cost",
                },
                {
                  id: "06",
                  name: "RECYCLING",
                  country: "Germany",
                  flag: "🇩🇪",
                  image: "/images/global-presense/recycling.svg",
                  icon: "/images/global-presense/industry-icons/recycling-loop.png",
                  desc: "Sustainable solutions for a cleaner, greener future.",
                  regions: "Europe, Asia, North America",
                  applications: "C&D Waste, Concrete Recycling, Sorting",
                  impact: "Environment Friendly, Resource Efficient",
                },
              ].map((ind) => (
                <article
                  key={ind.id}
                  className="group relative h-[430px] overflow-hidden rounded-[10px] bg-white shadow-[0_14px_34px_rgba(9,31,66,0.12)] ring-1 ring-[#dfe6ef] sm:h-[330px] lg:h-[306px]"
                >
                  <div className="absolute inset-x-0 top-0 h-[238px] overflow-hidden bg-[#dbe3ef] sm:h-[218px] lg:h-[208px]">
                    <Image
                      src={ind.image}
                      alt={`${ind.name} industry`}
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061f49]/5 via-transparent to-[#061f49]/8" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-[5px] bg-[#061f49] text-[15px] font-black text-white shadow-[0_8px_16px_rgba(9,31,66,0.22)]">
                      {ind.id}
                    </div>
                    <div className="absolute right-4 top-4 flex items-center gap-2 rounded-[7px] bg-white/92 px-3 py-2 text-[12px] font-black text-[#061f49] shadow-[0_8px_18px_rgba(9,31,66,0.14)] backdrop-blur">
                      <span className="text-[18px] leading-none">
                        {ind.flag}
                      </span>
                      {ind.country}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[226px] overflow-hidden sm:h-[176px] lg:h-[164px]">
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[186px] bg-white sm:h-[132px] lg:h-[124px]" />
                    <div className="pointer-events-none absolute -left-10 top-0 h-[132px] w-[126%] rounded-t-[100%] bg-white sm:-left-8 sm:h-[116px] lg:-left-7 lg:h-[108px]" />
                    <div className="relative px-4 pb-4 pt-7 sm:pt-2 lg:pt-1">
                      <div className="mb-3 flex items-end gap-4 lg:mb-2">
                        <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-[10px] bg-white text-[#fa5902] shadow-[0_12px_26px_rgba(9,31,66,0.12)] ring-1 ring-[#eef2f7] lg:h-[78px] lg:w-[78px]">
                          <Image
                            src={ind.icon}
                            alt=""
                            width={58}
                            height={58}
                            className="h-14 w-14 lg:h-[52px] lg:w-[52px]"
                          />
                        </div>
                        <div className="pb-1">
                          <h3 className="headline text-[28px] leading-none text-[#061f49] lg:text-[26px]">
                            {ind.name}
                          </h3>
                          <p className="mt-1 max-w-[270px] text-[13px] font-semibold leading-5 text-[#273b5a] lg:text-[12px] lg:leading-[1.35]">
                            {ind.desc}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-0 border-t border-[#e5ebf2] pt-3 lg:pt-2">
                        {[
                          {
                            icon: MapPin,
                            label: "Regions Served",
                            value: ind.regions,
                          },
                          {
                            icon: Settings,
                            label: "Key Applications",
                            value: ind.applications,
                          },
                          {
                            icon: TrendingUp,
                            label: "Solution Impact",
                            value: ind.impact,
                          },
                        ].map((item, index) => (
                          <div
                            key={item.label}
                            className={`flex gap-2 px-3 first:pl-0 last:pr-0 lg:gap-1.5 lg:px-2 ${
                              index > 0 ? "border-l border-[#e5ebf2]" : ""
                            }`}
                          >
                            <item.icon className="mt-0.5 h-6 w-6 shrink-0 stroke-[1.55] text-[#fa5902] lg:h-5 lg:w-5" />
                            <div>
                              <div className="text-[10px] font-black leading-4 text-[#061f49] lg:text-[9px]">
                                {item.label}
                              </div>
                              <div className="text-[10px] font-semibold leading-4 text-[#40516d] lg:text-[9px] lg:leading-[1.25]">
                                {item.value}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#fa5902]" />
                </article>
              ))}
            </div>

            <div className="mt-6 flex min-h-[62px] flex-col items-center gap-4 rounded-[8px] bg-[#f4f6f9] px-6 py-4 shadow-[0_10px_26px_rgba(9,31,66,0.06)] md:flex-row">
              <div className="flex items-center gap-4 pr-8 text-[#061f49] md:border-r md:border-[#cfd6e2]">
                <Globe className="h-9 w-9 shrink-0 stroke-[1.45] text-[#fa5902]" />
                <span className="text-[15px] font-black uppercase tracking-[0.03em]">
                  GLOBAL IMPACT. LOCAL UNDERSTANDING.
                </span>
              </div>
              <p className="text-center text-[13px] font-semibold leading-5 text-[#273b5a] md:flex-1">
                Delivered to global standards with local support — ensuring the
                best performance, everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 5 — INTERNATIONAL PROJECTS
            ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white px-5 py-8 sm:px-8 lg:px-9">
          <div className="mx-aufix to max-w-[1440px]">
            <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,610px)_minmax(0,1fr)] xl:gap-8">
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#fa5902]" />
                  <span className="text-[14px] font-black uppercase tracking-[0.02em] text-[#fa5902]">
                    GLOBAL PROJECTS. PROVEN RESULTS.
                  </span>
                </div>
                <h2 className="headline max-w-[670px] text-[clamp(2.25rem,3.4vw,3.65rem)] leading-[0.95] text-[#061f49]">
                  DELIVERING EXCELLENCE
                  <br />
                  <span className="text-[#fa5902]">ACROSS BORDERS.</span>
                </h2>
                <p className="mt-5 max-w-[640px] text-[14px] font-semibold leading-[1.65] text-[#273b5a]">
                  Pithal Machines Ltd. has successfully delivered advanced
                  crushing &amp; screening solutions in 35+ countries. Every
                  project reflects our commitment to quality, reliability and
                  long-term performance.
                </p>
              </div>

              <div className="flex min-w-0 flex-wrap items-start justify-start gap-x-5 gap-y-5 self-start lg:mt-[58px] xl:flex-nowrap">
                {[
                  {
                    icon: Globe,
                    value: "35+",
                    label: "COUNTRIES",
                    desc: "Global Presence",
                  },
                  {
                    icon: Clipboard,
                    value: "1500+",
                    label: "INSTALLATIONS",
                    desc: "Successful Projects",
                  },
                  {
                    icon: Settings,
                    value: "20+",
                    label: "INDUSTRIES",
                    desc: "Diverse Applications",
                  },
                  {
                    icon: Shield,
                    value: "100%",
                    label: "PERFORMANCE",
                    desc: "Client Satisfaction",
                  },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex h-[78px] w-[142px] items-start gap-2.5 px-3 py-0 ${
                      index > 0 ? "xl:border-l xl:border-[#cfd6e2]" : ""
                    }`}
                  >
                    <stat.icon className="mt-0.5 h-[38px] w-[38px] shrink-0 stroke-[1.45] text-[#fa5902]" />
                    <div>
                      <div className="text-[26px] font-black leading-none text-[#fa5902]">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-[10px] font-black uppercase leading-3 text-[#061f49]">
                        {stat.label}
                      </div>
                      <p className="mt-3 text-[10px] font-semibold leading-3 text-[#40516d]">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[10px] bg-white shadow-[0_16px_38px_rgba(9,31,66,0.11)] ring-1 ring-[#e3e9f1]">
              <div className="flex items-center justify-between px-4 pb-4 pt-5 sm:px-5">
                <div>
                  <h3 className="text-[18px] font-black uppercase leading-none text-[#061f49]">
                    INTERNATIONAL PROJECTS
                  </h3>
                  <span className="mt-3 block h-px w-14 bg-[#fa5902]" />
                </div>
                <Link
                  href="/projects"
                  className="group flex items-center gap-3 text-[13px] font-black uppercase text-[#061f49]"
                >
                  VIEW ALL PROJECTS
                  <ArrowRight className="h-6 w-6 stroke-[1.6] text-[#fa5902] transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="grid gap-4 px-4 pb-4 sm:grid-cols-2 sm:px-5 lg:grid-cols-5">
                {projectsData.map((p) => (
                  <article
                    key={p.id}
                    className="group flex h-[405px] flex-col overflow-hidden rounded-[7px] bg-white shadow-[0_10px_24px_rgba(9,31,66,0.12)] ring-1 ring-[#dfe6ef]"
                  >
                    <div className="relative h-[166px] shrink-0 overflow-hidden bg-[#dbe3ef]">
                      <Image
                        src={p.image}
                        alt={`${p.country} ${p.title}`}
                        width={320}
                        height={190}
                        sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      />
                      <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-[5px] bg-[#fa5902] text-[13px] font-black text-white shadow-[0_8px_16px_rgba(250,89,2,0.25)]">
                        {p.id}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col px-4 pb-3 pt-3">
                      <div className="mb-3 flex min-h-[30px] items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-[12px] font-black uppercase leading-4 text-[#061f49]">
                          <span className="text-[21px] leading-none">
                            {p.flag}
                          </span>
                          {p.country}
                        </div>
                        <div className="flex max-w-[94px] items-center gap-1.5 text-[9px] font-bold leading-3 text-[#40516d]">
                          <Clipboard className="h-[15px] w-[15px] shrink-0 stroke-[1.7] text-[#fa5902]" />
                          {p.industry}
                        </div>
                      </div>

                      <h4 className="headline mb-4 text-[18px] leading-none text-[#061f49]">
                        {p.title}
                      </h4>

                      <div className="space-y-3">
                        {[
                          {
                            icon: Settings,
                            label: "Capacity",
                            value: p.capacity,
                          },
                          {
                            icon: Wrench,
                            label: "Machines Supplied",
                            value: p.machines,
                          },
                          {
                            icon: Award,
                            label: "Result Delivered",
                            value: p.result,
                          },
                        ].map((row) => (
                          <div
                            key={row.label}
                            className="grid grid-cols-[18px_82px_1fr] gap-2 text-[8.5px] leading-[1.45] text-[#40516d]"
                          >
                            <row.icon className="mt-0.5 h-[16px] w-[16px] stroke-[1.65] text-[#fa5902]" />
                            <div className="font-black text-[#061f49]">
                              {row.label}
                            </div>
                            <div className="font-semibold [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
                              {row.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="h-[2px] shrink-0 bg-[#fa5902]" />
                  </article>
                ))}
              </div>
            </div>

            <div className="grid min-h-[102px] gap-0 rounded-b-[10px] bg-white shadow-[0_10px_28px_rgba(9,31,66,0.08)] ring-1 ring-[#e6ebf2] sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Award,
                  t: "ENGINEERED FOR PERFORMANCE",
                  d: "Built with precision engineering for maximum efficiency and durability.",
                },
                {
                  icon: Globe,
                  t: "ADAPTED GLOBALLY",
                  d: "Solutions customized to meet local requirements and site conditions.",
                },
                {
                  icon: Headphones,
                  t: "SUPPORTED ALWAYS",
                  d: "Global after-sales support ensuring long-term project success.",
                },
                {
                  icon: Handshake,
                  t: "BUILT ON TRUST",
                  d: "Strong relationships with clients across the world.",
                },
              ].map((item, index) => (
                <div
                  key={item.t}
                  className={`flex items-center gap-4 px-8 py-5 ${
                    index > 0 ? "lg:border-l lg:border-[#cfd6e2]" : ""
                  }`}
                >
                  <item.icon className="h-10 w-10 shrink-0 stroke-[1.45] text-[#fa5902]" />
                  <div>
                    <div className="text-[12px] font-black uppercase leading-4 text-[#061f49]">
                      {item.t}
                    </div>
                    <div className="mt-2 text-[11px] font-semibold leading-5 text-[#40516d]">
                      {item.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid min-h-[98px] items-center gap-4 rounded-[8px] bg-[#eef2f6] px-7 py-4 shadow-[0_10px_28px_rgba(9,31,66,0.08)] lg:grid-cols-[330px_1fr_2px_300px]">
              <div className="relative h-[78px] w-full max-w-[330px]">
                <Image
                  src="/images/global-presense/project-footprint-map.png"
                  alt="Global project footprint map"
                  fill
                  sizes="330px"
                  className="object-contain object-left"
                />
              </div>
              <div>
                <h3 className="text-[22px] font-black uppercase leading-none text-[#061f49]">
                  GLOBAL FOOTPRINT. LOCAL COMMITMENT.
                </h3>
                <p className="mt-2 max-w-[560px] text-[13px] font-semibold leading-5 text-[#273b5a]">
                  Delivering world-class crushing &amp; screening solutions that
                  drive industries forward.
                </p>
              </div>
              <div className="hidden h-12 w-px bg-[#fa5902] lg:block" />
              <Button
                href="/contact"
                variant="primary"
                className="h-12 rounded-[7px] px-8 text-[14px] font-black uppercase"
              >
                DISCUSS YOUR PROJECT
                <ArrowRight className="h-6 w-6 stroke-[1.6]" />
              </Button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 6 — SUPPORT SYSTEM
            ══════════════════════════════════════════════════════════════════ */}
        {/* --- ENGINEERING & SUPPORT SYSTEM SECTION --- */}
        <section className="bg-[#f4f7fa] px-4 py-12 sm:px-6 lg:px-8 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            {/* --- TOP HEADER & METRICS GRID --- */}
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_2fr] xl:grid-cols-[450px_1fr]">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-[2px] w-6 bg-[#fa5902]" />
                  <span className="text-[12px] font-black uppercase tracking-wider text-[#fa5902]">
                    OUR ENGINEERING &amp; SUPPORT SYSTEM
                  </span>
                </div>
                <h2 className="text-[clamp(1.8rem,2.8vw,2.4rem)] font-extrabold tracking-tight leading-[1.05] text-[#061f49]">
                  BUILT FOR PERFORMANCE.
                  <br />
                  <span className="text-[#fa5902]">SUPPORTED FOR LIFE.</span>
                </h2>
                <p className="mt-3 max-w-[480px] text-[13px] font-medium leading-5 text-[#40516d]">
                  Our global engineering &amp; support network ensures your
                  operations run smoothly — today and every day ahead.
                </p>
              </div>

              <div className="grid gap-6 pt-2 sm:grid-cols-2 xl:grid-cols-4 lg:pt-6">
                {[
                  {
                    icon: "/images/global-presense/support-icons/global-support.png",
                    title: "GLOBAL SUPPORT",
                    desc: "Support available across 35+ countries",
                  },
                  {
                    icon: "/images/global-presense/support-icons/assistance-headset.png",
                    title: "24/7 ASSISTANCE",
                    desc: "Round-the-clock technical support",
                  },
                  {
                    icon: "/images/global-presense/support-icons/expert-engineers.png",
                    title: "EXPERT ENGINEERS",
                    desc: "Experienced engineers across continents",
                  },
                  {
                    icon: "/images/global-presense/support-icons/uptime-shield.png",
                    title: "MAXIMUM UPTIME",
                    desc: "Minimizing downtime. Maximizing output.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3 px-2 ${
                      index > 0 ? "xl:border-l xl:border-[#cfd6e2]" : ""
                    }`}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-orange-50 p-1">
                      <img
                        src={item.icon}
                        alt=""
                        className="h-9 w-9 object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-[11px] font-black uppercase tracking-wide text-[#061f49]">
                        {item.title}
                      </div>
                      <p className="mt-1 text-[11px] font-medium leading-normal text-[#5c6e8c]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- MAIN INTERACTIVE DIAL / CARD GRID --- */}
            <div className="mt-12 grid items-center gap-4 md:grid-cols-1 lg:grid-cols-[1fr_340px_1fr] xl:grid-cols-[1fr_360px_1fr]">
              {/* LEFT COLUMN: IMAGE ON LEFT, TEXT ON RIGHT */}
              <div className="space-y-4 justify-self-end w-full max-w-[400px]">
                {[
                  {
                    title: "REMOTE SUPPORT",
                    icon: "/images/global-presense/support-icons/remote-support.png",
                    image: "/images/global-presense/remote-support.svg",
                    desc: "Real-time remote monitoring and diagnostics by our expert engineers.",
                    bullets: [
                      "Live issue resolution",
                      "System health monitoring",
                      "Minimized downtime",
                    ],
                  },
                  {
                    title: "ENGINEERING GUIDANCE",
                    icon: "/images/global-presense/support-icons/engineering-guidance.png",
                    image: "/images/global-presense/engineering-guidance.svg",
                    desc: "End-to-end engineering support from concept to commissioning and beyond.",
                    bullets: [
                      "Process & layout optimization",
                      "Equipment selection guidance",
                      "Technical documentation",
                    ],
                  },
                  {
                    title: "INSTALLATION ASSISTANCE",
                    icon: "/images/global-presense/support-icons/installation-assistance.png",
                    image: "/images/global-presense/installation-assistant.svg",
                    desc: "On-site supervision and installation support for smooth and safe project execution.",
                    bullets: [
                      "Site supervision",
                      "Installation guidance",
                      "Commissioning support",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="grid h-[150px] grid-cols-[130px_1fr] overflow-hidden rounded-xl bg-white shadow-[0_6px_16px_rgba(9,31,66,0.05)] ring-1 ring-[#e1e7ef]"
                  >
                    <div className="relative h-full w-full bg-[#dbe3ef]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-3.5">
                      <div className="flex gap-2">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-5 w-5 shrink-0 object-contain"
                        />
                        <div>
                          <h3 className="text-[11.5px] font-black uppercase tracking-wide text-[#061f49]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[10px] font-medium leading-tight text-[#5c6e8c]">
                            {item.desc}
                          </p>
                          <ul className="mt-2 space-y-0.5">
                            {item.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-center gap-1.5 text-[9.5px] font-bold text-[#273b5a]"
                              >
                                <CheckCircle2 className="h-3 w-3 shrink-0 fill-[#fa5902] stroke-white stroke-[2.5]" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MIDDLE COLUMN: CENTRAL HUB DIAGRAM WHEEL */}
              <div className="relative mx-auto hidden h-[360px] w-[360px] lg:block">
                {/* Background Dotted Guidelines */}
                <div className="absolute left-[-15px] top-[75px] h-px w-[45px] border-t border-dashed border-[#cfd6e2]" />
                <div className="absolute left-[-35px] top-[180px] h-px w-[45px] border-t border-dashed border-[#cfd6e2]" />
                <div className="absolute left-[-15px] top-[285px] h-px w-[45px] border-t border-dashed border-[#cfd6e2]" />

                <div className="absolute right-[-15px] top-[75px] h-px w-[45px] border-t border-dashed border-[#cfd6e2]" />
                <div className="absolute right-[-35px] top-[180px] h-px w-[45px] border-t border-dashed border-[#cfd6e2]" />
                <div className="absolute right-[-15px] top-[285px] h-px w-[45px] border-t border-dashed border-[#cfd6e2]" />

                {/* Outer Track Ring */}
                <div className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full border border-gray-200 bg-[#e8edf3]/40 p-5 shadow-inner">
                  <div className="h-full w-full rounded-full bg-white shadow-sm flex items-center justify-center">
                    {/* Brand Core Hub */}
                    <div className="z-10 flex h-[175px] w-[175px] flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_10px_25px_rgba(9,31,66,0.12)] ring-1 ring-[#e1e7ef] p-3">
                      <img
                        src="/images/brand/pithal-logo.png"
                        alt="Pithal Machines Ltd"
                        className="h-auto w-[110px] object-contain"
                      />
                      <div className="mt-2.5 text-[8.5px] font-black tracking-wider uppercase leading-3 text-[#061f49]">
                        SUPPORTING YOUR SUCCESS.
                        <br />
                        <span className="text-[#fa5902]">
                          EVERY STEP OF THE WAY.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6 Satellite Nodes Array with White Icons */}
                {[
                  { icon: "hub-remote", top: "42px", left: "62px" },
                  { icon: "hub-maintenance", top: "42px", right: "62px" },
                  { icon: "hub-engineering", top: "155px", left: "18px" },
                  { icon: "hub-spare-parts", top: "155px", right: "18px" },
                  { icon: "hub-installation", top: "268px", left: "62px" },
                  { icon: "hub-optimization", top: "268px", right: "62px" },
                ].map((node, idx) => (
                  <div
                    key={idx}
                    className="absolute flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#061f49] shadow-[0_4px_10px_rgba(6,31,73,0.25)] ring-[4px] ring-white transition-transform duration-300 hover:scale-110"
                    style={{
                      top: node.top,
                      left: node.left,
                      right: node.right,
                    }}
                  >
                    <img
                      src={`/images/global-presense/support-icons/${node.icon}.png`}
                      alt=""
                      className="h-[22px] w-[22px] object-contain brightness-0 invert"
                    />
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN: TEXT ON LEFT, IMAGE ON RIGHT */}
              <div className="space-y-4 justify-self-start w-full max-w-[400px]">
                {[
                  {
                    title: "SPARE PARTS SUPPORT",
                    icon: "/images/global-presense/support-icons/spare-parts.png",
                    image: "/images/global-presense/space-parts-support.svg",
                    desc: "Genuine spare parts, delivered fast to keep your operations running.",
                    bullets: [
                      "Genuine & quality parts",
                      "Global inventory network",
                      "Fast & reliable delivery",
                    ],
                  },
                  {
                    title: "MAINTENANCE CONSULTATION",
                    icon: "/images/global-presense/support-icons/maintenance-consultation.png",
                    image:
                      "/images/global-presense/maintainence-consultation.svg",
                    desc: "Preventive maintenance programs and expert advice to extend equipment life.",
                    bullets: [
                      "Maintenance planning",
                      "Performance inspection",
                      "Risk & wear analysis",
                    ],
                  },
                  {
                    title: "OPERATIONAL OPTIMIZATION",
                    icon: "/images/global-presense/support-icons/operational-optimization.png",
                    image:
                      "/images/global-presense/operational-optimization.svg",
                    desc: "Data-driven recommendations to improve productivity and reduce operating cost.",
                    bullets: [
                      "Performance improvement",
                      "Process optimization",
                      "Efficiency enhancement",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="grid h-[150px] grid-cols-[1fr_130px] overflow-hidden rounded-xl bg-white shadow-[0_6px_16px_rgba(9,31,66,0.05)] ring-1 ring-[#e1e7ef]"
                  >
                    <div className="p-3.5">
                      <div className="flex gap-2">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-5 w-5 shrink-0 object-contain"
                        />
                        <div>
                          <h3 className="text-[11.5px] font-black uppercase tracking-wide text-[#061f49]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[10px] font-medium leading-tight text-[#5c6e8c]">
                            {item.desc}
                          </p>
                          <ul className="mt-2 space-y-0.5">
                            {item.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex items-center gap-1.5 text-[9.5px] font-bold text-[#273b5a]"
                              >
                                <CheckCircle2 className="h-3 w-3 shrink-0 fill-[#fa5902] stroke-white stroke-[2.5]" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-full w-full bg-[#dbe3ef]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 7 — MANUFACTURING WORKFLOW
            ══════════════════════════════════════════════════════════════════ */}

        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* --- FULL-WIDTH HEADER BACKGROUND ACCENT --- */}
          {/* This container ensures the world map / engineering blueprint asset spreads full-width behind the header text */}
          <div className="absolute top-0 left-0 right-0 h-[280px] pointer-events-none z-0">
            <img
              src="/images/global-presense/background-section-7.png"
              alt=""
              className="w-full h-full object-cover object-center opacity-[0.52]"
            />
          </div>

          <div className="mx-auto max-w-7xl relative z-10">
            {/* --- TOP HEADER --- */}
            <div className="text-center mb-12">
              <div className="relative mb-2 flex items-center justify-center gap-2">
                <span className="h-[1px] w-5 bg-[#fa5902]" />
                <span className="text-[12px] font-black uppercase tracking-wider text-[#fa5902]">
                  OUR PROCESS. YOUR ADVANTAGE.
                </span>
                <span className="h-[1px] w-5 bg-[#fa5902]" />
              </div>
              <h2 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold tracking-tight leading-[1.05] text-[#061f49] mb-3">
                PRECISELY ENGINEERED.
                <br />
                <span className="text-[#fa5902]">PERFECTLY DELIVERED.</span>
              </h2>
              <p className="max-w-[640px] mx-auto text-[13px] font-semibold leading-relaxed text-[#273b5a]">
                From concept to commissioning, our integrated manufacturing
                &amp; export workflow ensures unmatched quality, reliability and
                on-time delivery.
              </p>
            </div>

            {/* --- WORKFLOW TIMELINE CONTAINER --- */}
            <div className="bg-white rounded-2xl border border-[#e1e7ef] p-6 shadow-[0_4px_20px_rgba(9,31,66,0.03)] mb-8">
              <p className="text-center text-[11px] font-black uppercase tracking-widest text-[#061f49] mb-10">
                OUR MANUFACTURING &amp; EXPORT WORKFLOW
              </p>

              <div className="overflow-x-auto pb-4 scrollbar-thin">
                <div className="inline-flex gap-4 min-w-[1000px] xl:min-w-full justify-between items-start px-2">
                  {[
                    {
                      id: "01",
                      name: "ENGINEERING",
                      icon: "🎨",
                      image: "/images/global-presense/engeeniring.svg",
                      bullets: [
                        "3D Design & Simulation",
                        "Process Engineering",
                        "Custom Solutions",
                      ],
                    },
                    {
                      id: "02",
                      name: "MANUFACTURING",
                      icon: "⚙️",
                      image: "/images/global-presense/manufacturing.svg",
                      bullets: [
                        "Advanced Manufacturing",
                        "Precision Fabrication",
                        "In-house Production",
                      ],
                    },
                    {
                      id: "03",
                      name: "QUALITY INSPECTION",
                      icon: "🛡️",
                      image: "/images/global-presense/quality-inspection.svg",
                      bullets: [
                        "Raw Material Inspection",
                        "In-Process Quality Checks",
                        "Final Testing & Certification",
                      ],
                    },
                    {
                      id: "04",
                      name: "PACKAGING",
                      icon: "📦",
                      image: "/images/global-presense/pakaging.svg",
                      bullets: [
                        "Export-Standard Packaging",
                        "Secure Loading Preparation",
                        "Documentation & Labeling",
                      ],
                    },
                    {
                      id: "05",
                      name: "SHIPPING",
                      icon: "🚢",
                      image: "/images/global-presense/shipping.svg",
                      bullets: [
                        "Global Freight Network",
                        "Sea & Land Transportation",
                        "Real-time Shipment Tracking",
                      ],
                    },
                    {
                      id: "06",
                      name: "INSTALLATION",
                      icon: "🔧",
                      image: "/images/global-presense/installation.svg",
                      bullets: [
                        "On-site Installation",
                        "Commissioning Support",
                        "Performance Verification",
                      ],
                    },
                    {
                      id: "07",
                      name: "SUPPORT",
                      icon: "🎧",
                      image: "/images/global-presense/support.svg",
                      bullets: [
                        "24/7 Technical Support",
                        "Spare Parts Availability",
                        "Maintenance & Optimization",
                      ],
                    },
                  ].map((step, idx, arr) => (
                    <div
                      key={step.id}
                      className="flex-1 flex flex-col items-center relative group"
                    >
                      {/* Connector line between top node circles */}
                      {idx < arr.length - 1 && (
                        <div className="absolute top-[18px] left-[calc(50%+18px)] right-[-50%] h-[2px] bg-[#fa5902] z-0" />
                      )}

                      {/* Step Sequence Bubble Indicator */}
                      <div className="relative z-10 mb-2 flex items-center justify-center h-9 w-9 rounded-full bg-[#061f49] text-white font-black text-[12px] ring-[5px] ring-white shadow-sm transition-transform group-hover:scale-105">
                        {step.id}
                      </div>

                      {/* Step Label Name */}
                      <span className="text-[10px] font-black uppercase tracking-wide text-[#061f49] mb-1">
                        {step.name}
                      </span>

                      {/* Accent Dynamic Icon */}
                      <span className="text-base text-orange-500 mb-3">
                        {step.icon}
                      </span>

                      {/* Card Base Structure */}
                      <div className="w-full bg-white rounded-xl border border-[#e2e8f0] p-2.5 shadow-sm hover:border-orange-300 transition-all duration-200">
                        <div className="w-full h-24 rounded-lg overflow-hidden bg-[#f1f5f9] relative mb-3">
                          <img
                            src={step.image}
                            alt={step.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Sub Bullet Descriptive List */}
                        <ul className="text-[10px] font-medium leading-relaxed text-[#40516d] space-y-1 pl-1">
                          {step.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-orange-500 font-bold">
                                •
                              </span>
                              <span className="truncate">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- BUILT IN INDIA DELIVERY FLOW --- */}
            <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-6 lg:p-8 mb-6 relative">
              <p className="text-center text-[12px] font-black uppercase tracking-wider text-[#061f49] mb-2">
                BUILT IN INDIA. DELIVERED GLOBALLY.
              </p>
              <p className="text-center text-[11px] font-medium text-[#5c6e8c] mb-10 max-w-[500px] mx-auto">
                Our streamlined process and export expertise ensure your
                equipment reaches you safely, wherever you are.
              </p>

              {/* Horizontal Connected Node Pathway */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                {[
                  {
                    title: "DESIGNED &\nBUILT IN INDIA",
                    img: "/images/global-presense/india-map.png",
                    style: "rounded-2xl",
                  },
                  {
                    title: "SECURE PACKAGING\n& LOADING",
                    img: "/images/global-presense/pakaging.svg",
                    style: "rounded-full",
                  },
                  {
                    title: "GLOBAL SHIPPING\nNETWORK",
                    img: "/images/global-presense/shipping.svg",
                    style: "rounded-full",
                  },
                  {
                    title: "DELIVERING TO\n35+ COUNTRIES",
                    img: "/images/global-presense/globe.png",
                    style: "rounded-full",
                  },
                  {
                    title: "INSTALLED &\nCOMMISSIONED",
                    img: "/images/global-presense/installation.svg",
                    style: "rounded-full",
                  },
                  {
                    title: "LIFETIME SUPPORT &\nMAINTENANCE",
                    img: "/images/global-presense/support.svg",
                    style: "rounded-full",
                  },
                ].map((stage, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center relative group"
                  >
                    {/* Dashed Connecting Arrow Pipelines between steps */}
                    {i < 5 && (
                      <div className="hidden lg:block absolute top-[45px] left-[75%] w-[50%] h-px border-t-2 border-dashed border-gray-300 z-0 after:content-['►'] after:text-[8px] after:text-gray-400 after:absolute after:right-0 after:-top-[5px]" />
                    )}

                    {/* Graphic Frame Container Wrapper */}
                    <div
                      className={`w-24 h-24 bg-white border border-gray-200 shadow-sm overflow-hidden mb-3 flex items-center justify-center relative transition-transform duration-200 group-hover:scale-105 ${stage.style}`}
                    >
                      <img
                        src={stage.img}
                        alt={stage.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Sequence Title Label Description */}
                    <p className="text-[10px] font-black uppercase leading-tight tracking-wide text-[#061f49] whitespace-pre-line">
                      {stage.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- CORE BRAND PROMISE BANNER FOOTER --- */}
            <div className="bg-[#061f49] rounded-xl px-5 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-orange-500/30 bg-orange-500/10 p-1">
                  <svg
                    className="w-4 h-4 text-[#fa5902]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <span className="text-[12px] font-black uppercase tracking-wide text-white">
                  A PROVEN PROCESS. A PROMISE DELIVERED.
                </span>
              </div>

              <div className="hidden md:block h-4 w-px bg-white/20" />

              <p className="text-[11px] font-medium tracking-wide text-[#cfd6e2] text-center md:text-right">
                Engineering excellence • Manufacturing precision • Global
                delivery • Lifetime partnership
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 8 — CERTIFICATIONS
            ══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#061f49] px-4 pb-6 pt-8 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/global-presense/background-section-8.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-[#061f49]/25" />
          </div>

          <div className="relative mx-auto max-w-[1400px]">
            <div className="mx-auto max-w-[760px] text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-[#fa5902]" />
                <p className="text-[14px] font-black uppercase tracking-wide text-[#fa5902]">
                  CERTIFIED. COMPLIANT. TRUSTED WORLDWIDE.
                </p>
                <span className="h-px w-7 bg-[#fa5902]" />
              </div>
              <h2 className="headline text-[clamp(2.5rem,4vw,4.1rem)] leading-[0.96] text-white">
                BUILT ON STANDARDS.
                <br />
                <span className="text-[#fa5902]">DELIVERED WITH CONFIDENCE.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-[15px] font-semibold leading-7 text-white/90">
                Our commitment to international quality, safety and compliance ensures that
                every Pithal solution meets global benchmarks and exceeds expectations.
              </p>
            </div>

            <div className="relative z-10 mt-5 overflow-hidden rounded-[16px] bg-white text-[#061f49] shadow-[0_18px_38px_rgba(0,0,0,0.25)] ring-1 ring-[#dfe6f0]">
              <div className="grid min-h-[150px] grid-cols-1 divide-y divide-[#cfd6e2] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-6">
                {[
                  {
                    image: "/images/global-presense/certifications/iso-1.png",
                    alt: "ISO 9001:2015",
                    title: "QUALITY MANAGEMENT SYSTEM",
                    desc: "Consistent quality. Every time.",
                    imageClass: "h-[94px] w-[112px]",
                  },
                  {
                    image: "/images/global-presense/certifications/iso-2.png",
                    alt: "ISO 14001:2015",
                    title: "ENVIRONMENTAL MANAGEMENT SYSTEM",
                    desc: "Sustainable operations. Responsible growth.",
                    imageClass: "h-[94px] w-[112px]",
                  },
                  {
                    image: "/images/global-presense/certifications/iso-3.png",
                    alt: "ISO 45001:2018",
                    title: "OCCUPATIONAL HEALTH & SAFETY MANAGEMENT",
                    desc: "Safe workplaces. Protected people.",
                    imageClass: "h-[94px] w-[112px]",
                  },
                  {
                    image: "/images/global-presense/certifications/ce.png",
                    alt: "CE certified equipment",
                    title: "CE CERTIFIED EQUIPMENT",
                    desc: "European safety, health & environmental protection.",
                    imageClass: "h-[82px] w-[108px]",
                  },
                  {
                    image: "/images/global-presense/certifications/bureau-veritas.png",
                    alt: "Bureau Veritas",
                    title: "THIRD PARTY INSPECTION CERTIFIED",
                    desc: "Verified. Validated. Trusted globally.",
                    imageClass: "h-[98px] w-[112px]",
                  },
                  {
                    image: "/images/global-presense/certifications/make-in-india.png",
                    alt: "Proudly made in India",
                    title: "PROUDLY MADE IN INDIA",
                    desc: "Engineering excellence. Global standards. Indian strength.",
                    imageClass: "h-[82px] w-[142px]",
                  },
                ].map((cert) => (
                  <div
                    key={cert.title}
                    className="flex min-h-[150px] items-center gap-0.5 px-1 py-2 lg:px-1 xl:gap-1 xl:px-1"
                  >
                    <div className="flex h-[94px] w-[102px] shrink-0 items-center justify-center">
                      <Image
                        src={cert.image}
                        alt={cert.alt}
                        width={170}
                        height={122}
                        className={`${cert.imageClass} object-contain`}
                      />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-black uppercase leading-[1.45] text-[#061f49] xl:text-[12px]">
                        {cert.title}
                      </h3>
                      <p className="mt-2 text-[9px] font-semibold leading-[1.55] text-[#40516d] xl:text-[9.5px]">
                        {cert.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 9 — PARTNERSHIPS
            ══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white mt-2 px-5 pb-5 pt-8 sm:px-7 lg:px-8">
          <Image
            src="/images/global-presense/partnership-assets/background-section-9.png"
            alt=""
            width={1200}
            height={220}
            className="pointer-events-none absolute left-1/2 top-0 h-[190px] w-full max-w-[1420px] -translate-x-1/2 object-cover opacity-90"
          />

          <div className="relative mx-auto max-w-[1400px]">
            <div className="mx-auto mb-7 max-w-[610px] text-center">
              <div className="mb-2.5 flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-[#fa5902]" />
                <p className="text-[14px] font-black uppercase tracking-wide text-[#fa5902]">
                  GLOBAL PARTNERSHIP. PROVEN TRUST.
                </p>
                <span className="h-px w-7 bg-[#fa5902]" />
              </div>
              <h2 className="headline text-[clamp(2.2rem,3.6vw,3.35rem)] leading-[0.95] text-[#061f49]">
                TRUSTED BY INDUSTRIES.
                <br />
                <span className="text-[#fa5902]">PARTNERED FOR PROGRESS.</span>
              </h2>
              <p className="mx-auto mt-3 max-w-[560px] text-[13px] font-semibold leading-6 text-[#233654]">
                Across continents and industries, we build more than machines -
                we build long-term partnerships grounded in trust, performance and support.
              </p>
            </div>

            <div className="grid items-start gap-3.5 lg:grid-cols-4">
              <div className="relative rounded-[8px] border border-[#dce4ee] bg-white px-3 pb-3 pt-9 shadow-[0_8px_24px_rgba(6,31,73,0.08)]">
                <div className="absolute left-1/2 top-[-23px] flex h-[34px] w-[220px] -translate-x-1/2 items-center justify-center gap-2 rounded-[4px] bg-[#061f49] text-white shadow-[0_8px_18px_rgba(6,31,73,0.24)]">
                  <Factory className="h-4 w-4 text-white" />
                  <span className="text-[12px] font-black uppercase tracking-wide">
                    GLOBAL PARTNERSHIPS
                  </span>
                </div>
                <div className="grid grid-cols-3 overflow-hidden rounded-[6px] border border-[#dfe7f1]">
                  {[
                    "thyssenkrupp-logo.png",
                    "lafarge-logo.png",
                    "holcim-logo.png",
                    "metso-logo.png",
                    "sandvik-logo.png",
                    "cemex-logo.png",
                    "vinci-logo.png",
                    "barrick-logo.png",
                    "afrimat-logo.png",
                  ].map((logo) => (
                    <div
                      key={logo}
                      className="flex h-[54px] items-center justify-center border-b border-r border-[#e5ebf3] bg-white px-2 last:border-r-0"
                    >
                      <Image
                        src={`/images/global-presense/partnership-assets/${logo}`}
                        alt={logo.replace("-logo.png", "").replace(/-/g, " ")}
                        width={110}
                        height={38}
                        className="max-h-[32px] w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center text-[11px] font-semibold text-[#3d4d67]">
                  And many more global partners...
                </p>
              </div>

              <div className="relative rounded-[8px] border border-[#dce4ee] bg-white px-3 pb-3 pt-9 shadow-[0_8px_24px_rgba(6,31,73,0.08)]">
                <div className="absolute left-1/2 top-[-23px] flex h-[34px] w-[245px] -translate-x-1/2 items-center justify-center gap-2 rounded-[4px] bg-[#061f49] text-white shadow-[0_8px_18px_rgba(6,31,73,0.24)]">
                  <Settings className="h-4 w-4 text-white" />
                  <span className="text-[12px] font-black uppercase tracking-wide">
                    INDUSTRIES WE SERVE GLOBALLY
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      label: "MINING",
                      icon: "mining-cart.png",
                    },
                    {
                      label: "AGGREGATES",
                      icon: "aggregates-pile.png",
                    },
                    {
                      label: "CEMENT",
                      icon: "cement-plant.png",
                    },
                    {
                      label: "INFRASTRUCTURE",
                      icon: "infrastructure-bridge.png",
                    },
                    {
                      label: "CONSTRUCTION",
                      icon: "construction-crane.png",
                    },
                    {
                      label: "RECYCLING",
                      icon: "recycling-loop.png",
                    },
                  ].map((industry) => (
                    <div
                      key={industry.label}
                      className="flex h-[85px] flex-col items-center justify-center rounded-[6px] border border-[#dfe7f1] bg-[#fbfcfe]"
                    >
                      <Image
                        src={`/images/global-presense/industry-icons/${industry.icon}`}
                        alt=""
                        width={42}
                        height={42}
                        className="mb-2 h-[38px] w-[38px] object-contain"
                      />
                      <span className="text-[10px] font-black uppercase text-[#061f49]">
                        {industry.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[8px] border border-[#dce4ee] bg-white px-3 pb-3 pt-9 shadow-[0_8px_24px_rgba(6,31,73,0.08)]">
                <div className="absolute left-1/2 top-[-23px] flex h-[34px] w-[215px] -translate-x-1/2 items-center justify-center gap-2 rounded-[4px] bg-[#061f49] text-white shadow-[0_8px_18px_rgba(6,31,73,0.24)]">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-[12px] font-black uppercase tracking-wide">
                    OUR TRUST IN NUMBERS
                  </span>
                </div>
                <div className="grid grid-cols-3 divide-x divide-y divide-[#dfe7f1] overflow-hidden rounded-[6px] border border-[#dfe7f1]">
                  {[
                    ["35+", "COUNTRIES", "Global Presence"],
                    ["1200+", "PROJECTS", "Successfully Delivered"],
                    ["98%", "CLIENT RETENTION", "Long-term Trust"],
                    ["50+", "INDUSTRY EXPERTS", "Specialized Teams"],
                    ["24/7", "SUPPORT", "Always There"],
                    ["100%", "COMMITMENT", "To Excellence"],
                  ].map(([value, label, desc]) => (
                    <div
                      key={`${value}-${label}`}
                      className="flex h-[85px] flex-col items-center justify-center bg-white px-1 text-center"
                    >
                      <div className="text-[25px] font-black leading-none text-[#fa5902]">
                        {value}
                      </div>
                      <div className="mt-1 text-[9px] font-black uppercase leading-tight text-[#061f49]">
                        {label}
                      </div>
                      <div className="mt-1 text-[8px] font-semibold leading-tight text-[#52627a]">
                        {desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-[8px] border border-[#dce4ee] bg-white px-3 pb-3 pt-9 shadow-[0_8px_24px_rgba(6,31,73,0.08)]">
                <div className="absolute left-1/2 top-[-23px] flex h-[34px] w-[220px] -translate-x-1/2 items-center justify-center gap-2 rounded-[4px] bg-[#061f49] text-white shadow-[0_8px_18px_rgba(6,31,73,0.24)]">
                  <Users className="h-4 w-4 text-white" />
                  <span className="text-[12px] font-black uppercase tracking-wide">
                    WHAT OUR CLIENTS SAY
                  </span>
                </div>
                <div className="space-y-2">
                  {[
                    {
                      quote:
                        "Pithal Machines delivered a complete crushing solution that exceeded our expectations in performance, quality and support.",
                      author: "Operations Manager, Mining Company, Kenya",
                      image: "kenya-300hp.svg",
                    },
                    {
                      quote:
                        "Their engineering expertise and after-sales support are world-class. A reliable partner we can always count on.",
                      author: "Plant Head, Cement Company, UAE",
                      image: "uae-cement.svg",
                    },
                    {
                      quote:
                        "From project planning to installation and support, Pithal Machines has been exceptional at every stage.",
                      author: "Director, Construction Aggregates, Australia",
                      image: "australia-aggrigates.svg",
                    },
                  ].map((item) => (
                    <div
                      key={item.author}
                      className="grid grid-cols-[1fr_86px] items-center gap-2 rounded-[6px] border border-[#e3eaf2] bg-white p-2"
                    >
                      <div className="relative pl-6">
                        <span className="absolute left-0 top-[-6px] text-[32px] font-black leading-none text-[#fa5902]">
                          &ldquo;
                        </span>
                        <p className="text-[8.5px] font-bold leading-[1.45] text-[#233654]">
                          {item.quote}
                        </p>
                        <p className="mt-1 text-[8px] font-black leading-tight text-[#52627a]">
                          - {item.author}
                        </p>
                      </div>
                      <Image
                        src={`/images/global-presense/${item.image}`}
                        alt=""
                        width={110}
                        height={65}
                        className="h-[58px] w-[86px] rounded-[4px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 grid overflow-hidden rounded-[6px] bg-[#061f49] text-white shadow-[0_10px_28px_rgba(6,31,73,0.16)] lg:grid-cols-[340px_1fr_285px]">
              <div className="px-6 py-5">
                <h3 className="headline text-[22px] leading-[0.98] text-white">
                  BEYOND EQUIPMENT.
                  <br />
                  <span className="text-[#fa5902]">A PARTNERSHIP THAT LASTS.</span>
                </h3>
                <p className="mt-3 text-[11px] font-semibold leading-5 text-white/85">
                  We stand with you at every step - from concept to commissioning and beyond.
                  Your success is our priority.
                </p>
              </div>
              <div className="grid grid-cols-2 divide-y divide-[#fa5902]/45 border-y border-white/10 md:grid-cols-5 md:divide-x md:divide-y-0 md:border-y-0">
                {[
                  { icon: Globe, title: "GLOBAL SUPPORT", desc: "Local teams. Global strength." },
                  { icon: Users, title: "EXPERT ENGINEERING", desc: "Custom solutions. Proven expertise." },
                  { icon: Clock, title: "FAST RESPONSE", desc: "Quick action. Minimal downtime." },
                  { icon: Box, title: "SPARE PARTS", desc: "Readily available. Reliable supply." },
                  { icon: TrendingUp, title: "PERFORMANCE FOCUS", desc: "Maximizing uptime. Maximizing value." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex min-h-[116px] flex-col items-center justify-center px-4 py-4 text-center"
                  >
                    <item.icon className="h-9 w-9 stroke-[1.7] text-white" />
                    <h4 className="mt-2 text-[10px] font-black uppercase leading-tight text-[#fa5902]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[8.5px] font-semibold leading-tight text-white/80">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative hidden min-h-[116px] lg:block">
                <Image
                  src="/images/global-presense/handshake-section-9.png"
                  alt=""
                  fill
                  sizes="285px"
                  className="object-cover object-right"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#061f49] via-[#061f49]/20 to-transparent" />
              </div>
            </div>

            <div className="mt-3 grid overflow-hidden rounded-[8px] border border-[#fa5902] bg-white shadow-[0_8px_20px_rgba(6,31,73,0.08)] lg:grid-cols-[420px_1fr]">
              <div className="relative px-7 py-5">
                <span className="absolute left-6 top-0 text-[78px] font-black leading-none text-[#fa5902]">
                  &ldquo;
                </span>
                <div className="relative pl-14">
                  <h3 className="headline text-[23px] leading-[1.02] text-[#061f49]">
                    BUILT ON RELIABILITY.
                    <br />
                    <span className="text-[#fa5902]">DRIVEN BY PARTNERSHIP.</span>
                  </h3>
                  <p className="mt-3 max-w-[310px] text-[10.5px] font-semibold leading-5 text-[#233654]">
                    In a world that demands more, we deliver what matters most -
                    reliability, consistency and unwavering support across every border.
                    Our machines are built in India, trusted worldwide.
                  </p>
                  <p className="mt-3 text-[11px] font-black text-[#061f49]">
                    - Pithal Machines Ltd.
                  </p>
                </div>
                <span className="absolute bottom-0 right-6 text-[78px] font-black leading-none text-[#fa5902]">
                  &rdquo;
                </span>
              </div>
              <div className="grid min-h-[155px] grid-cols-2 gap-0 bg-[#edf3f9] p-0 sm:grid-cols-3 lg:grid-cols-6">
                {[
                  ["KENYA", "Mining", "kenya-300hp.svg", "kenya.png"],
                  ["UAE", "Cement", "uae-cement.svg", "uae.png"],
                  ["AUSTRALIA", "Aggregates", "australia-aggrigates.svg", "australia.png"],
                  ["TANZANIA", "Construction", "tanzania-contruction.svg", "tanzania.png"],
                  ["INDONESIA", "Infrastructure", "indonsaia-insfrastucture.svg", "indonesia.png"],
                  ["SAUDI ARABIA", "Recycling", "soudi-arabia.svg", "saudi-arabia.png"],
                ].map(([country, type, image, flag]) => (
                  <div
                    key={country}
                    className="group relative min-h-[142px] overflow-hidden bg-[#061f49] [clip-path:polygon(7%_0,100%_0,93%_100%,0_100%)]"
                  >
                    <Image
                      src={`/images/global-presense/${image}`}
                      alt=""
                      fill
                      sizes="180px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061f49]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-3">
                      <div className="flex items-center gap-2">
                        <Image
                          src={`/images/global-presense/partnership-assets/flags/${flag}`}
                          alt={`${country} flag`}
                          width={36}
                          height={24}
                          className="h-6 w-9 rounded-[2px] border border-white/70 object-cover shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                        />
                        <div>
                          <div className="text-[10px] font-black uppercase leading-none text-white">
                            {country}
                          </div>
                          <div className="mt-1 text-[8px] font-semibold text-white/80">
                            {type}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 flex flex-col items-center justify-between gap-4 rounded-[6px] bg-[#061f49] px-7 py-4 text-white md:flex-row">
              <div className="flex items-center gap-4">
                <Shield className="h-7 w-7 text-[#fa5902]" />
                <h3 className="text-[17px] font-black uppercase tracking-wide">
                  ONE VISION. ONE GOAL. YOUR SUCCESS.
                </h3>
              </div>
              <div className="hidden h-8 w-px bg-white/20 md:block" />
              <p className="text-center text-[11px] font-semibold text-white/85 md:text-left">
                We don't just build machines. We build trust that powers progress worldwide.
              </p>
              <h3 className="text-[17px] font-black uppercase tracking-wide text-[#fa5902]">
                LET&apos;S BUILD THE FUTURE TOGETHER.
              </h3>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 10 — GLOBAL PRESENCE MAP
            ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#f8fbff] px-5 py-5 sm:px-7 lg:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid items-start gap-4 lg:grid-cols-[270px_1fr_345px]">
              <div className="rounded-[12px] bg-[#061f49] p-4 text-white shadow-[0_14px_34px_rgba(6,31,73,0.18)]">
                <h3 className="mb-5 px-2 text-[18px] font-black uppercase leading-none">
                  OUR GLOBAL PRESENCE
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: Globe,
                      value: "65+",
                      label: "COUNTRIES",
                      desc: "Strong operational footprint",
                    },
                    {
                      icon: MapPin,
                      value: "120+",
                      label: "SERVICE LOCATIONS",
                      desc: "Strategically positioned",
                    },
                    {
                      icon: Users,
                      value: "250+",
                      label: "SERVICE EXPERTS",
                      desc: "Local teams. Global strength.",
                    },
                    {
                      icon: Clock,
                      value: "24/7",
                      label: "SUPPORT AVAILABILITY",
                      desc: "Always ready. Always there.",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex min-h-[92px] items-center gap-4 rounded-[8px] border border-[#1b4d87] bg-[#082d60] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
                    >
                      <stat.icon className="h-11 w-11 shrink-0 stroke-[1.9] text-[#fa5902]" />
                      <div>
                        <div className="text-[30px] font-black leading-none text-white">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[11px] font-black uppercase leading-tight text-white">
                          {stat.label}
                        </div>
                        <p className="mt-1 text-[10.5px] font-semibold leading-tight text-white/85">
                          {stat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 text-center">
                  <div className="mb-2 flex items-center justify-center gap-3">
                    <ArrowRight className="h-5 w-5 rotate-180 text-[#fa5902]" />
                    <p className="text-[15px] font-black uppercase tracking-wide text-[#fa5902]">
                      GLOBAL REACH. LOCAL SUPPORT.
                    </p>
                    <ArrowRight className="h-5 w-5 text-[#fa5902]" />
                  </div>
                  <h2 className="headline text-[clamp(2.6rem,4.35vw,4.35rem)] leading-[0.9] text-[#061f49]">
                    WHEREVER YOU OPERATE,
                    <br />
                    <span className="text-[#fa5902]">WE ARE THERE.</span>
                  </h2>
                  <p className="mx-auto mt-2 max-w-[610px] text-[14px] font-semibold leading-6 text-[#233654]">
                    Our global presence ensures faster response, greater uptime
                    and reliable support - wherever your operations are.
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-[12px] bg-[#061f49] shadow-[0_12px_30px_rgba(6,31,73,0.18)] ring-1 ring-[#dbe5f0]">
                  <Image
                    src="/images/global-presense/section-10-map.png"
                    alt="Service coverage worldwide map"
                    width={1914}
                    height={822}
                    className="h-[326px] w-full object-cover"
                    priority={false}
                  />
                </div>
              </div>

              <div className="rounded-[12px] border border-[#dce5ef] bg-white p-4 shadow-[0_14px_34px_rgba(6,31,73,0.08)]">
                <h3 className="mb-5 text-center text-[17px] font-black uppercase text-[#061f49]">
                  REGIONAL SUPPORT ZONES
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: "north-america.png",
                      region: "NORTH AMERICA",
                      countries: "USA | Canada | Mexico",
                      serviceA: "Fast response",
                      serviceB: "Local inventory",
                    },
                    {
                      icon: "south-america.png",
                      region: "SOUTH AMERICA",
                      countries: "Brazil | Chile | Peru",
                      serviceA: "Field support",
                      serviceB: "Parts availability",
                    },
                    {
                      icon: "europe.png",
                      region: "EUROPE",
                      countries: "Germany | France | UK",
                      serviceA: "Technical experts",
                      serviceB: "Rapid deployment",
                    },
                    {
                      icon: "middle-east.png",
                      region: "MIDDLE EAST",
                      countries: "UAE | Saudi Arabia | Qatar",
                      serviceA: "On-ground support",
                      serviceB: "Spare parts network",
                    },
                    {
                      icon: "africa.png",
                      region: "AFRICA",
                      countries: "South Africa | Kenya | Ghana",
                      serviceA: "Local service teams",
                      serviceB: "Training support",
                    },
                    {
                      icon: "asia-pacific.png",
                      region: "ASIA PACIFIC",
                      countries: "Singapore | India | Australia",
                      serviceA: "24/7 assistance",
                      serviceB: "Remote monitoring",
                    },
                  ].map((zone) => (
                    <div
                      key={zone.region}
                      className="grid min-h-[58px] grid-cols-[50px_1fr_110px] items-center gap-3 rounded-[7px] border border-[#e2e9f2] bg-white px-3 shadow-[0_5px_16px_rgba(6,31,73,0.04)]"
                    >
                      <Image
                        src={`/images/global-presense/global-map-assets/${zone.icon}`}
                        alt=""
                        width={50}
                        height={44}
                        className="h-11 w-[50px] object-contain"
                      />
                      <div>
                        <h4 className="text-[11px] font-black uppercase leading-tight text-[#061f49]">
                          {zone.region}
                        </h4>
                        <p className="mt-1 text-[9px] font-bold leading-tight text-[#334762]">
                          {zone.countries}
                        </p>
                      </div>
                      <div className="border-l border-[#d7e0eb] pl-3">
                        <p className="text-[9px] font-black leading-tight text-[#334762]">
                          {zone.serviceA}
                        </p>
                        <p className="mt-1 text-[9px] font-black leading-tight text-[#334762]">
                          {zone.serviceB}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.05fr_1fr_1.05fr]">
              <div className="rounded-[10px] border border-[#dce5ef] bg-white px-7 py-5 shadow-[0_8px_24px_rgba(6,31,73,0.06)]">
                <h3 className="mb-4 text-center text-[13px] font-black uppercase text-[#061f49]">
                  OUR SUPPORT STRUCTURE
                </h3>
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-2">
                  {[
                    {
                      icon: Building2,
                      title: "REGIONAL HUBS",
                      desc: "Strategic control & coordination",
                    },
                    {
                      icon: Wrench,
                      title: "SERVICE CENTERS",
                      desc: "Local service & maintenance",
                    },
                    {
                      icon: HardHat,
                      title: "FIELD ENGINEERS",
                      desc: "On-site support & troubleshooting",
                    },
                    {
                      icon: Settings,
                      title: "CUSTOMER SITE",
                      desc: "Maximum uptime & performance",
                    },
                  ].map((step, index) => (
                    <React.Fragment key={step.title}>
                      <div className="text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#dce5ef] bg-[#f7faff]">
                          <step.icon className="h-7 w-7 stroke-[1.9] text-[#061f49]" />
                        </div>
                        <h4 className="mt-3 text-[9px] font-black uppercase leading-tight text-[#061f49]">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-[8px] font-semibold leading-tight text-[#334762]">
                          {step.desc}
                        </p>
                      </div>
                      {index < 3 && (
                        <ArrowRight className="mt-5 h-6 w-6 text-[#061f49]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="rounded-[10px] border border-[#dce5ef] bg-white px-6 py-5 shadow-[0_8px_24px_rgba(6,31,73,0.06)]">
                <h3 className="mb-4 text-center text-[13px] font-black uppercase text-[#061f49]">
                  RESPONSE TIME COMMITMENT
                </h3>
                <div className="grid grid-cols-4 divide-x divide-[#dce5ef]">
                  {[
                    ["24/7", "Support Availability"],
                    ["4-8 HRS", "Initial Response (Major Regions)"],
                    ["24-48 HRS", "On-site Support (Depending on Region)"],
                    ["> 95%", "First Time Fix Rate"],
                  ].map(([value, label]) => (
                    <div key={value} className="px-3 text-center">
                      <Clock className="mx-auto h-8 w-8 stroke-[1.8] text-[#1c67c7]" />
                      <div className="mt-3 text-[18px] font-black leading-none text-[#061f49]">
                        {value}
                      </div>
                      <p className="mx-auto mt-2 max-w-[86px] text-[8.5px] font-semibold leading-tight text-[#334762]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[10px] border border-[#dce5ef] bg-white px-7 py-5 shadow-[0_8px_24px_rgba(6,31,73,0.06)]">
                <h3 className="text-center text-[13px] font-black uppercase text-[#061f49]">
                  FUTURE GROWTH PLAN
                </h3>
                <p className="mt-1 text-center text-[10px] font-semibold text-[#334762]">
                  Expanding our network to be closer to you.
                </p>
                <div className="mt-5 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
                  {[
                    { icon: MapPin, value: "20+", label: "New Service Centers" },
                    { icon: Users, value: "150+", label: "New Service Experts" },
                    { icon: Globe, value: "40+", label: "New Countries by 2030" },
                  ].map((item, index) => (
                    <React.Fragment key={item.label}>
                      <div className="text-center">
                        <div className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#dce5ef] bg-[#f7faff]">
                          <item.icon className="h-8 w-8 stroke-[1.9] text-[#55a760]" />
                        </div>
                        <div className="mt-2 text-[21px] font-black leading-none text-[#1c67c7]">
                          {item.value}
                        </div>
                        <p className="mx-auto mt-1 max-w-[78px] text-[8.5px] font-black leading-tight text-[#334762]">
                          {item.label}
                        </p>
                      </div>
                      {index < 2 && (
                        <ArrowRight className="h-5 w-5 text-[#061f49]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 grid overflow-hidden rounded-[8px] bg-[#061f49] text-white shadow-[0_10px_28px_rgba(6,31,73,0.16)] lg:grid-cols-[350px_1fr_310px]">
              <div className="relative flex min-h-[88px] items-center gap-5 px-8">
                <Image
                  src="/images/global-presense/section-10-bottombaar.png"
                  alt=""
                  fill
                  sizes="50px"
                  className="object-cover opacity-35"
                />
                <div className="relative h-14 w-14 shrink-0 rounded-full border border-white/20 bg-white/5" />
                <h3 className="relative headline text-[24px] leading-[0.95] text-white">
                  GLOBAL STRENGTH.
                  <br />
                  <span className="text-[#fa5902]">LOCAL COMMITMENT.</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 divide-y divide-[#fa5902]/35 border-y border-white/10 md:grid-cols-3 md:divide-x md:divide-y-0 md:border-y-0">
                {[
                  {
                    icon: Globe,
                    title: "WIDEST COVERAGE",
                    desc: "Reaching more places, serving more industries.",
                  },
                  {
                    icon: Settings,
                    title: "STRONGER CONNECTION",
                    desc: "Local teams with global engineering excellence.",
                  },
                  {
                    icon: Shield,
                    title: "UNMATCHED SUPPORT",
                    desc: "Built to support your success, every step of the way.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex min-h-[88px] items-center gap-4 px-7"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50">
                      <item.icon className="h-7 w-7 stroke-[1.8] text-white" />
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase leading-tight text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[9px] font-semibold leading-tight text-white/80">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex min-h-[88px] items-center border-l border-[#fa5902]/60 px-8">
                <h3 className="headline text-[22px] leading-[0.95] text-white">
                  WE DON&apos;T JUST DELIVER MACHINES.
                  <br />
                  <span className="text-[#fa5902]">WE DELIVER CONFIDENCE.</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SECTION 11 — CTA
            ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#eef4fb] px-5 py-3 sm:px-7 lg:px-8">
          <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[10px] bg-white p-3 shadow-[0_18px_45px_rgba(6,31,73,0.10)]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[8px]">
              <Image
                src="/images/global-presense/global-cta.svg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/78 to-white/0" />
              <div className="relative z-10 max-w-[560px] px-9 py-11">
                <div className="mb-10 flex items-center gap-3">
                  <span className="h-px w-12 bg-[#fa5902]" />
                  <p className="text-[13px] font-black uppercase tracking-wide text-[#061f49]">
                    <span className="mr-2 text-[#fa5902]">12.</span>
                    FINAL GLOBAL CTA
                  </p>
                  <span className="h-px w-12 bg-[#fa5902]" />
                </div>
                <h2 className="headline text-[clamp(3rem,5vw,5rem)] leading-[0.93] text-[#061f49]">
                  LET&apos;S BUILD
                  <br />
                  <span className="text-[#fa5902]">INDUSTRIAL SUCCESS</span>
                  <br />
                  ACROSS BORDERS.
                </h2>
                <p className="mt-6 max-w-[455px] text-[18px] font-semibold leading-8 text-[#233654]">
                  Pithal Machines is ready to collaborate, engineer and deliver
                  world-class solutions that power industries and build a
                  stronger future together.
                </p>
              </div>
            </div>

            <div className="relative z-20 mx-6 mt-[-44px] overflow-hidden rounded-[12px] border border-[#dce5ef] bg-white/95 shadow-[0_16px_36px_rgba(6,31,73,0.12)] backdrop-blur">
              <div className="grid divide-y divide-[#dce5ef] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
                {[
                  {
                    icon: Globe,
                    title: "EXPORT",
                    accent: "CONSULTATION",
                    desc: "Expert guidance for global market success.",
                  },
                  {
                    icon: Users,
                    title: "GLOBAL PROJECT",
                    accent: "DISCUSSION",
                    desc: "Collaborate on large-scale industrial projects.",
                  },
                  {
                    icon: Settings,
                    title: "ENGINEERING",
                    accent: "SUPPORT",
                    desc: "Technical expertise at every stage of your project.",
                  },
                  {
                    icon: Handshake,
                    title: "PARTNERSHIP",
                    accent: "OPPORTUNITIES",
                    desc: "Build long-term partnerships that create value.",
                  },
                  {
                    icon: Mail,
                    title: "INTERNATIONAL",
                    accent: "INQUIRIES",
                    desc: "We&apos;re here to respond to your global requirements.",
                  },
                ].map((card) => (
                  <div
                    key={`${card.title}-${card.accent}`}
                    className="flex min-h-[190px] flex-col items-center justify-center px-7 py-7 text-center"
                  >
                    <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#d6e4f2] bg-[#edf5ff] shadow-[0_8px_18px_rgba(6,31,73,0.08)]">
                      <card.icon className="h-9 w-9 stroke-[1.8] text-[#fa5902]" />
                    </div>
                    <h3 className="mt-5 text-[13px] font-black uppercase leading-[1.15] text-[#061f49]">
                      {card.title}
                      <br />
                      <span className="text-[#fa5902]">{card.accent}</span>
                    </h3>
                    <span className="mt-3 h-[2px] w-6 bg-[#fa5902]" />
                    <p className="mt-4 max-w-[170px] text-[12px] font-semibold leading-5 text-[#334762]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-3 mt-3 grid overflow-hidden rounded-[9px] bg-[#061f49] text-white shadow-[0_10px_30px_rgba(6,31,73,0.18)] lg:grid-cols-[355px_1fr_310px]">
              <div className="relative min-h-[178px] overflow-hidden">
                <Image
                  src="/images/global-presense/section-11-bottombaar.png"
                  alt=""
                  fill
                  sizes="355px"
                  className="object-cover object-left"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#061f49]/30 to-[#061f49]" />
              </div>
              <div className="flex min-h-[178px] flex-col justify-center px-7 py-5">
                <h3 className="headline text-[25px] leading-none text-white">
                  ONE VISION. ONE WORLD.{" "}
                  <span className="text-[#fa5902]">ENDLESS POSSIBILITIES.</span>
                </h3>
                <p className="mt-3 text-[13px] font-semibold leading-6 text-white/90">
                  Let&apos;s create impact. Let&apos;s build the future.
                  <br />
                  Let&apos;s build <span className="font-black text-[#fa5902]">industrial success</span> across borders.
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-4">
                  {[
                    {
                      icon: Globe,
                      title: "GLOBAL REACH",
                      desc: "Delivering solutions worldwide.",
                    },
                    {
                      icon: Shield,
                      title: "TRUST & QUALITY",
                      desc: "Engineering excellence you can rely on.",
                    },
                    {
                      icon: Settings,
                      title: "INNOVATIVE SOLUTIONS",
                      desc: "Technology-driven. Future-ready.",
                    },
                    {
                      icon: Users,
                      title: "BUILT TOGETHER",
                      desc: "Stronger together. Success forever.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-2.5 border-r border-white/15 pr-2.5 last:border-r-0">
                      <item.icon className="h-7 w-7 shrink-0 stroke-[1.8] text-[#fa5902]" />
                      <div>
                        <h4 className="text-[8.5px] font-black uppercase leading-tight text-[#fa5902]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[8px] font-semibold leading-tight text-white/80">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex min-h-[178px] flex-col justify-center bg-[#fa5902] px-8 py-6 pl-12 text-white lg:[clip-path:polygon(13%_0,100%_0,100%_100%,0_100%)]">
                <Image
                  src="/images/global-presense/final-cta-logo-white.png"
                  alt="Pithal Machines Pvt. Ltd."
                  width={230}
                  height={68}
                  className="mb-4 h-auto w-[215px] object-contain"
                />
                <p className="text-[13px] font-semibold leading-6">
                  Your Global Engineering Partner.
                  <br />
                  Today. Tomorrow. Together.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 flex h-10 max-w-[230px] items-center justify-between rounded-[5px] border border-white/70 px-4 text-[11px] font-black uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#fa5902]"
                >
                  LET&apos;S BUILD TOGETHER
                  <span className="ml-3 flex h-10 w-10 items-center justify-center border-l border-white/45">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
