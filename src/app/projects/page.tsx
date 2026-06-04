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
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM ICONS & MARKUPS
// ─────────────────────────────────────────────────────────────────────────────

function SectionTitle({ eyebrow, title, subtitle, light = false }: { eyebrow: string; title: React.ReactNode; subtitle?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-12">
      <div className="relative flex justify-center items-center mb-4 w-full max-w-4xl mx-auto">
        <div className="absolute left-[15%] right-[50%] top-2 h-[1px] bg-secondary flex items-start">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary -mt-[0.5px]" />
        </div>
        <div className="absolute left-[50%] right-[15%] top-2 h-[1px] bg-secondary flex items-start justify-end">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary -mt-[0.5px]" />
        </div>
        <div className={cn("relative px-6 z-10 font-black uppercase text-[10px] tracking-[0.24em] text-secondary", light ? "bg-slate-900" : "bg-white")}>
          {eyebrow}
        </div>
      </div>
      <h2 className={cn("text-center text-[clamp(1.75rem,4.5vw,2.75rem)] font-black leading-[1.1] tracking-tight uppercase", light ? "text-white" : "text-primary")}>
        {title}
      </h2>
      <span aria-hidden className="mx-auto mt-4.5 block h-[2.5px] w-12 bg-secondary" />
      {subtitle && (
        <p className={cn("mx-auto mt-4.5 max-w-2xl text-center text-[12.5px] leading-relaxed", light ? "text-slate-350" : "text-text-muted font-medium")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-slate-800 antialiased font-sans">
        
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (Rajasthan Zinc Crushing Plant) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden h-[calc(100vh-4.25rem)] sm:h-[calc(100vh-4.75rem)] xl:h-[calc(100vh-5.25rem)] min-h-[600px] flex items-center py-4 lg:py-6 text-white">
          <Image
            alt="Rajasthan Zinc Crushing Plant"
            className="object-cover object-center"
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            src="/projectimg/rajasthan zinc crushing plant.jpg"
          />
          <div className="pointer-events-none absolute inset-0 bg-slate-950/70" />
          <div className="pointer-events-none absolute inset-0 industrial-grid opacity-35" />
          <Container className="relative z-10 w-full h-full flex flex-col justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-2 text-[11px] font-medium text-slate-400">
              <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
              <ChevronRight size={10} />
              <Link href="/projects" className="hover:text-secondary transition-colors">Projects & Case Studies</Link>
              <ChevronRight size={10} />
              <span className="text-slate-300">Rajasthan Zinc Crushing Plant</span>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column Text */}
              <div>
                <div className="flex items-center gap-2.5 mb-2.5 text-secondary">
                  <CheckCircle2 size={13} className="text-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-secondary">
                    FEATURED PROJECT
                  </span>
                </div>
                
                <h1 className="text-[clamp(2.5rem,6vw,3.75rem)] font-black uppercase leading-[1.02] tracking-tight text-white">
                  RAJASTHAN ZINC <br />
                  CRUSHING PLANT
                </h1>
                
                <h2 className="text-sm md:text-base font-black text-secondary uppercase tracking-widest mt-2">
                  500 TPH Crushing & Screening Solution
                </h2>
                
                <p className="mt-3 max-w-xl text-xs md:text-[13px] leading-relaxed text-slate-300 font-medium">
                  A robust and high-performance crushing system designed to deliver consistent output, maximum efficiency, and long-term reliability in demanding mining conditions.
                </p>

                {/* Quick Specs Blocks */}
                <div className="mt-4 flex flex-wrap gap-x-6.5 gap-y-3 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                    <Building2 size={13} className="text-secondary" />
                    <span className="uppercase text-slate-400 font-medium">Industry:</span> Mining
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                    <MapPin size={13} className="text-secondary" />
                    <span className="uppercase text-slate-400 font-medium">Location:</span> Rajasthan, India
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                    <Activity size={13} className="text-secondary" />
                    <span className="uppercase text-slate-400 font-medium">Capacity:</span> 500 TPH
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-300">
                    <Layers size={13} className="text-secondary" />
                    <span className="uppercase text-slate-400 font-medium">Material:</span> Zinc Ore
                  </div>
                </div>
                
                <div className="mt-4.5 flex flex-wrap gap-4">
                  <Button href="#overview" variant="primary" className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5">
                    EXPLORE PROJECT
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Button>
                  <Button href="#contact" variant="outlineOrange" className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5 text-white border-white/20 hover:bg-white/5">
                    <Download size={14} className="mr-0.5" />
                    DOWNLOAD CASE STUDY
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Stats row */}
            <div className="mt-4 bg-white text-slate-800 rounded-2xl p-6 md:p-6 shadow-[0_8px_30px_rgba(3,27,64,0.06)] relative z-20">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-6 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="pt-4 md:pt-0 first:pt-0 flex flex-col items-center md:items-start md:px-4 first:pl-0">
                  <Building2 size={16} className="text-secondary mb-1.5" />
                  <h4 className="text-xl font-black text-primary leading-none">500 TPH</h4>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Plant Capacity</p>
                </div>
                <div className="pt-4 md:pt-0 flex flex-col items-center md:items-start md:px-4">
                  <Shield size={16} className="text-secondary mb-1.5" />
                  <h4 className="text-xl font-black text-primary leading-none">98%</h4>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Plant Availability</p>
                </div>
                <div className="pt-4 md:pt-0 flex flex-col items-center md:items-start md:px-4">
                  <TrendingUp size={16} className="text-secondary mb-1.5" />
                  <h4 className="text-xl font-black text-primary leading-none">35%</h4>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Increase in Productivity</p>
                </div>
                <div className="pt-4 md:pt-0 flex flex-col items-center md:items-start md:px-4">
                  <Clock size={16} className="text-secondary mb-1.5" />
                  <h4 className="text-xl font-black text-primary leading-none">24/7</h4>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Continuous Operation</p>
                </div>
                <div className="pt-4 md:pt-0 flex flex-col items-center md:items-start md:px-4">
                  <Handshake size={16} className="text-secondary mb-1.5" />
                  <h4 className="text-xl font-black text-primary leading-none">End-to-End</h4>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Solution Delivered</p>
                </div>
                <div className="pt-4 md:pt-0 flex flex-col items-center md:items-start md:px-4">
                  <Headphones size={16} className="text-secondary mb-1.5" />
                  <h4 className="text-xl font-black text-primary leading-none">Lifetime</h4>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">After-Sales Support</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: EXECUTIVE SUMMARY */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white" id="overview">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Left text column */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1.5px] w-6 bg-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-secondary">
                    PROJECT OVERVIEW
                  </span>
                </div>
                <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-black uppercase leading-tight text-primary">
                  Executive Summary
                </h2>
                <span aria-hidden className="mt-4 block h-[2.5px] w-12 bg-secondary" />
                <p className="mt-5 text-xs md:text-[13px] leading-relaxed text-slate-600 font-medium">
                  This project was executed to deliver a high-performance crushing and screening solution for zinc ore processing with maximum efficiency, reliability, and minimal downtime.
                </p>

                {/* 6 Grid Metrics */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4.5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Industry</p>
                      <h4 className="text-xs font-black uppercase text-primary mt-0.5">Mining Industry</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">Zinc Ore Processing</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4.5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                      <h4 className="text-xs font-black uppercase text-primary mt-0.5">Udaipur, Rajasthan</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">India</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4.5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <Activity size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Plant Capacity</p>
                      <h4 className="text-xs font-black uppercase text-primary mt-0.5">500 TPH</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">Crushing & Screening Plant</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4.5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <Layers size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Material Type</p>
                      <h4 className="text-xs font-black uppercase text-primary mt-0.5">Zinc Ore</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">Up to 400mm Feed Size</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4.5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Duration</p>
                      <h4 className="text-xs font-black uppercase text-primary mt-0.5">14 Months</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">Design to Commissioning</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4.5 flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm">
                      <Wrench size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Machines Supplied</p>
                      <h4 className="text-xs font-black uppercase text-primary mt-0.5">4 Major Machines</h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-none mt-0.5">Jaw, Cone, Screen, Conveyors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column representative photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md bg-[url('/projectimg/overview.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-slate-950/10 z-10" />
                <div className="absolute inset-0 border border-dashed border-slate-700/60 m-4 rounded-xl flex items-center justify-center">
                  <div className="text-center p-4">
                   </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: OVERCOMING OPERATIONAL CHALLENGES */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50" id="challenge">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
              
              {/* Left Column list */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[1.5px] w-6 bg-secondary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-secondary">
                      THE CHALLENGE
                    </span>
                  </div>
                  <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-black uppercase leading-tight text-primary">
                    Overcoming Operational Challenges
                  </h2>
                  <span aria-hidden className="mt-4 block h-[2.5px] w-12 bg-secondary" />
                  <p className="mt-5 text-xs md:text-[13px] leading-relaxed text-slate-600 font-medium">
                    The client was facing multiple operational bottlenecks that were impacting productivity, increasing downtime and affecting the overall profitability of the plant.
                  </p>

                  {/* 5 Checklist Items */}
                  <div className="mt-7 space-y-4">
                    {[
                      { title: "Low Productivity", desc: "Existing plant configuration was unable to achieve desired output, leading to low production rates." },
                      { title: "High Downtime", desc: "Frequent breakdowns and inefficient equipment resulted in unplanned downtime and revenue loss." },
                      { title: "Material Blockage", desc: "High moisture content and improper material flow caused blockages and frequent stoppages." },
                      { title: "Inconsistent Output", desc: "Irregular product gradation and low-quality output affected downstream operations." },
                      { title: "Scaling & Future Readiness", desc: "The existing setup lacked scalability to meet future production demands." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4.5 items-start">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-slate-100 text-secondary shadow-sm">
                          <AlertTriangle size={12} className="text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-[11.5px] font-black uppercase tracking-wider text-primary leading-tight">{item.title}</h4>
                          <p className="text-[10.5px] text-slate-500 font-medium leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column representative photo & navy warning block */}
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-md flex-1 min-h-[220px]">
                  <Image
                    src="/projectimg/overcoming%20operational%20cahllenges.jpg"
                    alt="Overcoming Operational Challenges"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 z-10" />
                </div>

                {/* Warning Card */}
                <div className="bg-[#031b40] rounded-2xl p-5 md:p-6 text-white border border-white/5 shadow-md flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-white/10 text-secondary shadow">
                    <AlertTriangle size={20} className="text-secondary animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-[11.5px] font-black uppercase tracking-widest text-secondary">
                      LIMITING TOTAL POTENTIAL
                    </h4>
                    <p className="mt-1.5 text-[10.5px] leading-relaxed text-slate-300 font-medium">
                      These challenges were limiting the plant's true potential and impacting overall operational efficiency. Pithal was engaged to deliver a complete end-to-end solution to overcome these issues and ensure maximum performance.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: PITHAL ENGINEERING SOLUTION */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white" id="solution">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              
              {/* Left checklist */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1.5px] w-6 bg-secondary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.24em] text-secondary">
                    OUR SOLUTION
                  </span>
                </div>
                <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-black uppercase leading-tight text-primary">
                  Pithal Engineering Solution
                </h2>
                <span aria-hidden className="mt-4 block h-[2.5px] w-12 bg-secondary" />
                <p className="mt-5 text-xs md:text-[13px] leading-relaxed text-slate-600 font-medium mb-8">
                  Pithal delivered a customized, high-performance crushing & screening solution engineered for maximum efficiency, consistency and long-term operational reliability.
                </p>

                {/* 5 List Cards */}
                <div className="space-y-4">
                  {[
                    { title: "Strategic Machine Selection", desc: "Selected high-efficiency crushers, screens and conveyors to handle zinc ore with optimal crushing and throughput." },
                    { title: "Optimized Workflow Design", desc: "Engineered a smooth material flow with ideal crushing, screening and conveying sequence to eliminate bottlenecks." },
                    { title: "Advanced Engineering Strategy", desc: "Applied proven engineering principles and innovative designs to ensure durability, safety and performance." },
                    { title: "Performance Optimization Logic", desc: "Fine-tuned equipment settings and system parameters to maximize output while minimizing energy consumption." },
                    { title: "Intelligent Plant Layout Planning", desc: "Designed a compact, future-ready plant layout for efficient operations, easy maintenance and scalability." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded bg-slate-50 border border-slate-100 text-secondary shadow-sm">
                        <Check size={14} className="text-secondary stroke-[3]" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-wider text-primary leading-tight">{item.title}</h4>
                        <p className="text-[10px] text-slate-500 font-medium leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right graphical visualization */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col gap-6.5 shadow-sm">
                <div className="text-center md:text-left">
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary">
                    Integrated & Optimized Plant Flow
                  </h3>
                  
                  {/* Timeline circles */}
                  <div className="mt-5 flex items-center justify-between gap-1 border-b border-slate-200 pb-5">
                    {[
                      { step: "Raw Material Feed" },
                      { step: "Primary Crushing" },
                      { step: "Secondary Crushing" },
                      { step: "Screening Process" },
                      { step: "Final Product Output" }
                    ].map((step, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center text-center">
                          <div className="h-8.5 w-8.5 rounded-full bg-white border-2 border-secondary text-secondary flex items-center justify-center font-black text-[10px] shadow-sm">
                            {i+1}
                          </div>
                          <span className="text-[8px] font-bold uppercase tracking-wider text-slate-400 mt-2 max-w-[50px] leading-tight">
                            {step.step}
                          </span>
                        </div>
                        {i !== 4 && <ChevronRight size={10} className="text-slate-350" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* 3D circuit box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900 flex items-center justify-center">
                  <Image
                    src="/projectimg/pithal%20engineering%20solution.jpg"
                    alt="Pithal Engineering Solution"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* 4 Bottom values grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4.5 pt-5 border-t border-slate-200">
                  {[
                    { title: "Reliability", text: "Continuous operation with minimal downtime." },
                    { title: "Efficiency", text: "Higher throughput with optimized power." },
                    { title: "Consistency", text: "Uniform output quality for improved process." },
                    { title: "Scalability", text: "Future-ready design supporting expansion." }
                  ].map((val, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <h4 className="text-[10px] font-black uppercase tracking-wider text-primary">{val.title}</h4>
                      <p className="mt-1 text-[9.5px] leading-relaxed text-slate-500 font-medium">{val.text}</p>
                    </div>
                  ))}
                </div>

                {/* Text footnote bar */}
                <div className="bg-slate-100 rounded-xl p-3 border border-slate-200 text-center">
                  <p className="text-[9.5px] leading-normal text-slate-500 font-medium">
                    Our engineering team combined deep domain expertise with advanced design tools and real-world experience to deliver a solution that exceeds operational expectations and drives long-term value.
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: PLANT WORKFLOW (ENGINEERED FLOW. OPTIMIZED PERFORMANCE.) */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50" id="workflow">
          <Container>
            <SectionTitle
              eyebrow="PLANT WORKFLOW"
              title={<>ENGINEERED FLOW. <span className="text-secondary">OPTIMIZED PERFORMANCE.</span></>}
              subtitle="Our integrated crushing & screening solution is designed to ensure smooth material flow, maximum efficiency and consistent output quality."
            />

            {/* Horizontal Timeline Steps (6) */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 mb-12">
              {[
                { number: "01", name: "RAW MATERIAL", desc: "Run-of-mine material dumped into hopper" },
                { number: "02", name: "PRIMARY CRUSHER", desc: "Jaw crusher reduces material size" },
                { number: "03", name: "SECONDARY CRUSHER", desc: "Cone crusher further reduces material" },
                { number: "04", name: "SCREENING", desc: "Vibrating screens separate material by size" },
                { number: "05", name: "CONVEYOR SYSTEM", desc: "Efficient conveying ensures continuous flow" },
                { number: "06", name: "FINAL OUTPUT", desc: "High-quality, uniform material ready for use" }
              ].map((step, idx) => (
                <div key={idx} className="relative bg-white border border-slate-150 p-5 rounded-2xl flex flex-col justify-between group hover:border-secondary transition-all duration-300">
                  {idx !== 5 && (
                    <span className="hidden lg:block absolute top-[28px] left-[calc(100%-8px)] right-[-14px] h-[1px] bg-slate-200 z-10" />
                  )}
                  <div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-secondary border border-slate-200 font-black text-[10px] mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <h4 className="text-[10.5px] font-black uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                      {step.name}
                    </h4>
                    <p className="mt-2 text-[9.5px] leading-relaxed text-slate-500 font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Plant Workflow Wide Image Box */}
            <div className="relative aspect-[4/1] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md mb-12 flex items-center justify-center">
              <Image
                alt="Engineered flow"
                src="/projectimg/engineered flow.jpg"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-slate-950/10 z-10" />
            </div>

            {/* Bottom 4 Stats Pills */}
            <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "OPTIMIZED FLOW", desc: "Smooth material flow at every stage" },
                { title: "HIGHER EFFICIENCY", desc: "Maximized throughput with minimal downtime" },
                { title: "CONSISTENT QUALITY", desc: "Uniform output with precise screening" },
                { title: "LOWER OPERATING COST", desc: "Reduced wear, energy & maintenance" }
              ].map((pill, i) => (
                <div key={i} className="bg-white border border-slate-150 p-4.5 rounded-xl flex gap-3.5 items-start">
                  <div className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary">
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <h4 className="text-[10.5px] font-black uppercase tracking-wider text-primary leading-tight">{pill.title}</h4>
                    <p className="mt-1 text-[9.5px] leading-normal text-slate-500 font-medium">{pill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: MACHINES & EQUIPMENT */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white" id="equipment">
          <Container>
            <SectionTitle
              eyebrow="MACHINES & EQUIPMENT"
              title={<>ADVANCED MACHINES. <span className="text-secondary">SUPERIOR PERFORMANCE.</span></>}
              subtitle="High-efficiency equipment selected and configured to deliver maximum productivity, reliability and consistent output quality."
            />

            {/* 5 Equipment columns */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-12">
              {[
                {
                  number: "01",
                  name: "JAW CRUSHER",
                  model: "PEW 1100 x 750",
                  img: "/images/products/jaw-crusher/main-machine.png",
                  role: "Primary crushing of run-of-mine material into manageable size.",
                  specs: [
                    { label: "Feed Opening", val: "1100 x 750 mm" },
                    { label: "Max Feed Size", val: "630 mm" },
                    { label: "Capacity", val: "200 - 350 TPH" },
                    { label: "Motor Power", val: "110 kW" },
                    { label: "Weight", val: "15,800 kg" }
                  ]
                },
                {
                  number: "02",
                  name: "CONE CRUSHER",
                  model: "PCH 220",
                  img: "/images/products/cone-crusher/main-machine.png",
                  role: "Secondary crushing for further size reduction and shape control.",
                  specs: [
                    { label: "Max Feed Size", val: "185 mm" },
                    { label: "Capacity", val: "150 - 250 TPH" },
                    { label: "Closed Side Setting", val: "13 - 38 mm" },
                    { label: "Motor Power", val: "160 kW" },
                    { label: "Weight", val: "18,500 kg" }
                  ]
                },
                {
                  number: "03",
                  name: "VSI CRUSHER",
                  model: "PVSI 1145",
                  img: "/images/products/vsi-crusher/product-review.png",
                  role: "Tertiary crushing & shaping for high-quality, cubical products.",
                  specs: [
                    { label: "Rotor Diameter", val: "1145 mm" },
                    { label: "Max Feed Size", val: "60 mm" },
                    { label: "Capacity", val: "120 - 200 TPH" },
                    { label: "Motor Power", val: "200 kW" },
                    { label: "Weight", val: "14,200 kg" }
                  ]
                },
                {
                  number: "04",
                  name: "VIBRATING SCREEN",
                  model: "3YK 2160",
                  img: "/images/products/vibrating-screen/product-review.png",
                  role: "Separation and classification of material by size.",
                  specs: [
                    { label: "Screen Size", val: "2100 x 6000 mm" },
                    { label: "Decks", val: "3" },
                    { label: "Capacity", val: "200 - 300 TPH" },
                    { label: "Motor Power", val: "18.5 kW" },
                    { label: "Weight", val: "6,800 kg" }
                  ]
                },
                {
                  number: "05",
                  name: "BELT CONVEYORS",
                  model: "BC Series",
                  img: "/images/products/belt-conveyor/product-review.png",
                  role: "Efficient material transfer between different stages of the plant.",
                  specs: [
                    { label: "Belt Width", val: "800 - 1500 mm" },
                    { label: "Belt Speed", val: "1.6 - 2.5 m/s" },
                    { label: "Capacity", val: "150 - 500 TPH" },
                    { label: "Motor Power", val: "5.5 - 22 kW" },
                    { label: "Conveyor Length", val: "Up to 60 m" }
                  ]
                }
              ].map((card, idx) => (
                <div key={idx} className="group bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-slate-200/80 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    {/* Circle counter */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="flex h-6.5 w-6.5 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary font-black text-[9px] shadow-sm">
                        {card.number}
                      </span>
                      <Workflow size={13} className="text-slate-300" />
                    </div>

                    <h4 className="text-[11.5px] font-black uppercase text-primary leading-tight">{card.name}</h4>
                    <p className="text-[9.5px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-0.5">{card.model}</p>

                    {/* Machine image */}
                    <div className="relative aspect-[1.1/1] w-full rounded overflow-hidden border border-slate-100 my-4">
                      <Image
                        src={card.img}
                        alt={card.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="mt-3.5 border-t border-slate-100 pt-3">
                      <p className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">Role In Plant:</p>
                      <p className="mt-1 text-[9.5px] leading-normal text-slate-600 font-medium">{card.role}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">Key Specifications:</p>
                    {card.specs.map((sp, i) => (
                      <div key={i} className="flex justify-between text-[9px] font-bold uppercase leading-none mt-1">
                        <span className="text-slate-400 font-medium">{sp.label}</span>
                        <span className="text-primary font-black">{sp.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom footnote bar */}
            <div className="border border-slate-200/80 rounded-xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-[11.5px] font-black uppercase tracking-wider text-primary">
                  BUILT FOR DURABILITY. ENGINEERED FOR RESULTS.
                </h4>
                <p className="text-[10px] text-slate-500 font-medium mt-1">
                  All machines are selected for optimal performance, low maintenance and long service life in the toughest operating conditions.
                </p>
              </div>

              {/* 4 values list */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                {["High Efficiency", "Reliable Performance", "Low Maintenance", "Proven Technology"].map((val, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-widest text-slate-500">
                    <CheckCircle2 size={12} className="text-secondary" />
                    {val}
                  </div>
                ))}
              </div>
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: INSTALLATION & EXECUTION */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50" id="installation">
          <Container>
            <SectionTitle
              eyebrow="INSTALLATION & EXECUTION"
              title={<>BUILT ON PRECISION. <span className="text-secondary">EXECUTED TO PERFECTION.</span></>}
              subtitle="From equipment handling to installation and commissioning, every step is executed with precision, safety and strict quality standards."
            />

            {/* 6 Grid Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { number: "01", name: "PLANT SETUP", desc: "Complete plant layout and equipment arrangement as per engineered design.", img: "/projectimg/plant setup.jpg" },
                { number: "02", name: "CRANE LIFTING", desc: "Safe and efficient lifting of heavy machinery using advanced cranes and rigging.", img: "/projectimg/crane lifting.jpg" },
                { number: "03", name: "EQUIPMENT INSTALLATION", desc: "Precise installation and alignment of crushers, screens and conveyors.", img: "/projectimg/equipment installation.jpg" },
                { number: "04", name: "FABRICATION", desc: "In-house fabrication of structural components ensuring strength and durability.", img: "/projectimg/fabrication.jpg" },
                { number: "05", name: "SITE ENGINEERS", desc: "Our expert team supervising on-site execution with strict adherence to safety and quality.", img: "/projectimg/site engineers.jpg" },
                { number: "06", name: "COMMISSIONING", desc: "Final testing, trial runs and commissioning for smooth and reliable plant operation.", img: "/projectimg/commissioning.jpg" }
              ].map((step, idx) => (
                <div key={idx} className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Photo represented box */}
                  <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={step.img}
                      alt={step.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/15 z-10" />
                  </div>

                  {/* Text card body */}
                  <div className="p-5 flex gap-4 items-start">
                    <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-slate-50 text-secondary border border-slate-200 font-black text-[9px] group-hover:bg-secondary group-hover:text-white transition-colors">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="text-[11.5px] font-black uppercase text-primary leading-tight group-hover:text-secondary transition-colors">
                        {step.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed mt-1">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: MEASURABLE RESULTS. MAXIMUM IMPACT. */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white" id="results">
          <Container>
            <SectionTitle
              eyebrow="RESULTS & PERFORMANCE"
              title={<>MEASURABLE RESULTS. <span className="text-secondary">MAXIMUM IMPACT.</span></>}
              subtitle="Our engineered solution delivered significant improvement in productivity, reliability and operational efficiency, ensuring consistent output and lower operating costs."
            />

            {/* Top row: 5 cards */}
            <div className="grid gap-4.5 grid-cols-2 md:grid-cols-5 mb-12">
              {[
                { pct: "35%", title: "HIGHER PRODUCTIVITY", desc: "Increased throughput with optimized crushing & screening process." },
                { pct: "20%", title: "LOWER DOWNTIME", desc: "Enhanced equipment reliability and reduced breakdowns." },
                { pct: "25%", title: "IMPROVED MATERIAL CONSISTENCY", desc: "Uniform output quality with precise screening & reduction." },
                { pct: "15%", title: "ENERGY OPTIMIZATION", desc: "Lower power consumption with efficient equipment integration." },
                { pct: "24/7", title: "CONTINUOUS OPERATION", desc: "Built for nonstop performance and maximum uptime." }
              ].map((card, i) => (
                <div key={i} className="bg-slate-50/50 border border-slate-150 p-4.5 rounded-2xl flex flex-col items-center text-center shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-secondary shadow-sm mb-3.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-xl lg:text-2xl font-black text-secondary leading-none block">{card.pct}</span>
                  <h4 className="text-[10px] font-black uppercase text-primary mt-2 leading-tight">{card.title}</h4>
                  <p className="mt-1.5 text-[9px] leading-relaxed text-slate-500 font-medium">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Middle comparative barchart & Outcomes grid */}
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Comparative barchart block */}
              <div className="bg-[#031b40] rounded-2xl p-6.5 text-white border border-white/5 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-6">
                    PERFORMANCE COMPARISON
                  </h3>
                  
                  <div className="space-y-6 pt-2">
                    {[
                      { label: "Productivity", before: 65, after: 100 },
                      { label: "Downtime", before: 100, after: 80 },
                      { label: "Material Consistency", before: 70, after: 95 },
                      { label: "Energy Efficiency", before: 75, after: 90 },
                      { label: "Overall Efficiency", before: 65, after: 95 }
                    ].map((bar, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[9px] uppercase font-bold text-slate-400">
                          <span>{bar.label}</span>
                          <div className="flex gap-3">
                            <span>Before: <strong className="text-slate-200">{bar.before}%</strong></span>
                            <span>After: <strong className="text-secondary">{bar.after}%</strong></span>
                          </div>
                        </div>
                        {/* Two visual stacked bars */}
                        <div className="space-y-1">
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-500 rounded-full" style={{ width: `${bar.before}%` }} />
                          </div>
                          <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary rounded-full" style={{ width: `${bar.after}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 text-[8.5px] text-slate-400 font-medium">
                  * Results may vary based on site conditions and material characteristics.
                </div>
              </div>

              {/* Right column outcomes checklist */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6.5 md:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6">
                    KEY OUTCOMES DELIVERED
                  </h3>
                  
                  <div className="space-y-4 pt-2">
                    {[
                      "Consistent high-quality output",
                      "Reduced operating & maintenance costs",
                      "Improved equipment life & reliability",
                      "Optimized flow & reduced bottlenecks",
                      "Higher ROI with short-term payback"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center">
                        <div className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full bg-white border border-slate-100 text-secondary shadow-sm">
                          <Check size={12} className="text-secondary stroke-[3]" />
                        </div>
                        <span className="text-[11px] font-black uppercase text-primary tracking-wide">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtitle brand bar */}
                <div className="mt-8 pt-6 border-t border-slate-250 grid grid-cols-3 gap-2.5 text-center">
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-primary leading-tight">ENGINEERED</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 leading-none">For Performance</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-secondary leading-tight">PROVEN</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 leading-none">In Real-World</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-primary leading-tight">BUILT</h4>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-0.5 leading-none">To Deliver</p>
                  </div>
                </div>
              </div>

            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: CLIENT TESTIMONIAL */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50" id="testimonials">
          <Container>
            <SectionTitle
              eyebrow="CLIENT TESTIMONIAL"
              title={<>TRUSTED BY INDUSTRY LEADERS. <span className="text-secondary">PROVEN BY RESULTS.</span></>}
              subtitle="Our commitment to engineering excellence and customer success has earned the trust of leading companies across industries."
            />

            {/* Main testimonial block */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch mb-12">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md">
                <Image
                  src="/projectimg/trusted by leaders.jpg"
                  alt="Client Testimonial"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-950/15 z-10" />
              </div>

              {/* Quote block */}
              <div className="bg-white border border-slate-200 rounded-2xl p-7 lg:p-9.5 shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-xl font-black text-secondary leading-none">“</span>
                  <blockquote className="mt-1 text-sm md:text-[15px] font-bold text-primary leading-relaxed">
                    Pithal delivered a reliable crushing solution tailored to our operational requirements with excellent support throughout installation and commissioning.
                  </blockquote>
                  <p className="mt-4 text-[11px] leading-relaxed text-slate-500 font-medium">
                    The team demonstrated deep engineering expertise, understood our challenges and delivered a plant that exceeded our productivity expectations.
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                  <div>
                    <h4 className="text-[11.5px] font-black uppercase text-primary leading-none">Ravi Sharma</h4>
                    <p className="text-[9.5px] text-slate-400 font-bold uppercase tracking-widest mt-1">Plant Head — Leading Mining Company</p>
                  </div>
                  <div className="flex gap-4.5 text-[9.5px] font-bold uppercase text-slate-400 leading-none">
                    <span className="flex items-center gap-1"><MapPin size={11} className="text-secondary" /> Rajasthan, India</span>
                    <span className="flex items-center gap-1"><Calendar size={11} className="text-secondary" /> 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 5 stats bar */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6.5 shadow-sm grid gap-6 grid-cols-2 md:grid-cols-5 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100 items-center mb-12">
              <div className="pt-3 md:pt-0 first:pt-0">
                <span className="text-xl font-black text-primary leading-none block">98%</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest block mt-1.5 leading-none">Client Satisfaction</span>
                <span className="text-[9px] text-slate-400 font-medium mt-0.5 leading-none">Across all projects</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-xl font-black text-primary leading-none block">150+</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest block mt-1.5 leading-none">Successful Projects</span>
                <span className="text-[9px] text-slate-400 font-medium mt-0.5 leading-none">Delivered on time</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-xl font-black text-primary leading-none block">100+</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest block mt-1.5 leading-none">Happy Clients</span>
                <span className="text-[9px] text-slate-400 font-medium mt-0.5 leading-none">Across industries</span>
              </div>
              <div className="pt-3 md:pt-0">
                <span className="text-xl font-black text-primary leading-none block">24/7</span>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest block mt-1.5 leading-none">After-Sales Support</span>
                <span className="text-[9px] text-slate-400 font-medium mt-0.5 leading-none">Always there for you</span>
              </div>
              <div className="pt-3 md:pt-0 flex flex-col items-center">
                <div className="flex gap-0.5 text-secondary">
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={11} fill="currentColor" />)}
                </div>
                <span className="text-[9px] font-black text-secondary uppercase tracking-widest block mt-1.5 leading-none">4.9/5 Rating</span>
                <span className="text-[9px] text-slate-400 font-medium mt-0.5 leading-none">Based on 100+ reviews</span>
              </div>
            </div>

            {/* Logo Carousel */}
            <div className="text-center">
              <p className="text-[9.5px] font-black uppercase tracking-widest text-slate-400 mb-6">
                PROUD TO PARTNER WITH INDUSTRY LEADERS
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-50">
                {["TATA STEEL", "vedanta", "ADITYA BIRLA HINDALCO", "JINDAL STEEL & POWER", "UltraTech Cement", "NCL", "Shree Cement"].map((logo, i) => (
                  <span key={i} className="text-xs font-black uppercase tracking-wider text-slate-450">{logo}</span>
                ))}
              </div>
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: GLOBAL REACH */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-white" id="global-reach">
          <Container>
            <SectionTitle
              eyebrow="GLOBAL CAPABILITY & SUPPORT"
              title={<>GLOBAL REACH. LOCAL SUPPORT. <span className="text-secondary">ALWAYS WITH YOU.</span></>}
              subtitle="Pithal Engineering delivers world-class solutions backed by strong global capabilities and dedicated support at every stage of your plant's journey."
            />

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center mb-12">
              {/* Left reach world map image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md">
                <Image
                  src="/projectimg/global reach local support.jpg"
                  alt="Global Reach Map"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-slate-950/15 z-10" />
              </div>

              {/* Right col: 4 cards list */}
              <div className="grid gap-4.5 sm:grid-cols-2">
                {[
                  { title: "EXPORT READINESS", desc: ["Equipment designed to global quality standards", "Compliant with international safety & performance norms", "Exported to 35+ countries across 6 continents", "End-to-end documentation & logistics support"] },
                  { title: "AFTER-SALES SUPPORT", desc: ["24/7 dedicated support team", "Quick response & on-site assistance", "Genuine spare parts availability", "AMC & service contracts for worry-free operations"] },
                  { title: "ENGINEERING ASSISTANCE", desc: ["Process optimization & plant performance review", "Upgradation & capacity enhancement support", "Custom solutions tailored to your needs", "Expert guidance from concept to commissioning"] },
                  { title: "OPERATIONAL GUIDANCE", desc: ["Operational training for better efficiency", "Preventive maintenance guidance", "Troubleshooting & performance monitoring", "Continuous support for maximum uptime"] }
                ].map((card, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-150 p-4.5 rounded-xl flex flex-col justify-between">
                    <div>
                      <h4 className="text-[11px] font-black uppercase text-primary mb-3 leading-tight">{card.title}</h4>
                      <ul className="space-y-1.5">
                        {card.desc.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2 text-[9.5px] leading-normal text-slate-500 font-medium items-start">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary mt-1.5" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 5 stats bar */}
            <div className="bg-[#031b40] rounded-2xl p-6.5 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="grid gap-6 grid-cols-2 md:grid-cols-5 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 items-center flex-1">
                {[
                  { val: "35+", label: "COUNTRIES", desc: "Global Presence" },
                  { val: "1500+", label: "INSTALLATIONS", desc: "Proven Worldwide" },
                  { val: "24/7", label: "SUPPORT", desc: "Always Available" },
                  { val: "100+", label: "EXPERTS", desc: "Engineering Excellence" },
                  { val: "48 HRS", label: "RESPONSE TIME", desc: "Quick & Reliable" }
                ].map((item, i) => (
                  <div key={i} className="pt-3 md:pt-0 flex flex-col items-center justify-center first:pt-0">
                    <span className="text-xl font-black text-secondary leading-none block">{item.val}</span>
                    <span className="mt-1 text-[8.5px] font-black uppercase tracking-widest text-white leading-tight">{item.label}</span>
                    <span className="text-[8.5px] text-slate-400 font-medium mt-0.5 leading-tight">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Action card beside stats */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4.5 flex flex-col justify-between max-w-xs text-center md:text-left">
                <p className="text-[9.5px] leading-relaxed text-slate-300 font-medium">
                  <strong>PARTNER WITH PITHAL ENGINEERING</strong> — From engineering excellence to lifetime support, we ensure your success at every step.
                </p>
                <Button href="#contact" variant="primary" className="mt-3.5 flex items-center justify-center gap-1.5 text-[8.5px] font-black uppercase tracking-widest py-3 px-5">
                  LET'S BUILD YOUR SUCCESS STORY <ArrowRight size={11} />
                </Button>
              </div>
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: RELATED CASE STUDIES */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-24 bg-slate-50" id="case-studies">
          <Container>
            <SectionTitle
              eyebrow="RELATED CASE STUDIES"
              title={<>EXPLORE MORE <span className="text-secondary">SUCCESS STORIES</span></>}
              subtitle="Discover how Pithal Engineering's innovative solutions have helped industries achieve higher efficiency, reliability and maximum ROI."
            />

            {/* 4 Cards Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {[
                {
                  tag: "LIMESTONE PLANT",
                  title: "250 TPH Limestone Crushing Plant",
                  loc: "Madhya Pradesh, India",
                  img: "/projectimg/lime stone plant.jpg",
                  metrics: [
                    { val: "35%", text: "Higher Productivity" },
                    { val: "20%", text: "Lower Downtime" },
                    { val: "98%", text: "Material Consistency" }
                  ]
                },
                {
                  tag: "SAND PLANT",
                  title: "200 TPH Sand Manufacturing Plant",
                  loc: "Rajasthan, India",
                  img: "/projectimg/sand plant.jpg",
                  metrics: [
                    { val: "30%", text: "Higher Output" },
                    { val: "15%", text: "Energy Savings" },
                    { val: "99%", text: "Gradation Accuracy" }
                  ]
                },
                {
                  tag: "INFRASTRUCTURE PROJECT",
                  title: "300 TPH Infrastructure Crushing Project",
                  loc: "Maharashtra, India",
                  img: "/projectimg/18.jpg",
                  metrics: [
                    { val: "40%", text: "Higher Capacity" },
                    { val: "25%", text: "Lower Operating Cost" },
                    { val: "100%", text: "Safe & Reliable Operation" }
                  ]
                },
                {
                  tag: "CEMENT PLANT SOLUTION",
                  title: "Complete Crushing Solution for Cement Plant",
                  loc: "Gujarat, India",
                  img: "/projectimg/17.jpg",
                  metrics: [
                    { val: "20%", text: "Process Efficiency" },
                    { val: "24/7", text: "Continuous Operation" },
                    { val: "Zero", text: "Unplanned Shutdown" }
                  ]
                }
              ].map((card, idx) => (
                <div key={idx} className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Photo box represented with tags */}
                    <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/15 z-10" />
                      <span className="absolute left-3 top-3 z-20 text-[8px] font-black uppercase tracking-widest bg-white text-secondary px-2 py-0.5 rounded border border-slate-100 leading-none">
                        {card.tag}
                      </span>
                    </div>

                    <div className="p-4.5">
                      <h3 className="text-[12.5px] font-black uppercase text-primary leading-tight group-hover:text-secondary transition-colors">
                        {card.title}
                      </h3>
                      <span className="inline-flex gap-1 items-center text-[9px] font-black text-slate-400 uppercase tracking-wider mt-1.5">
                        <MapPin size={9} className="text-secondary" /> {card.loc}
                      </span>

                      {/* 3 cols metrics */}
                      <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-3 gap-1.5 text-center">
                        {card.metrics.map((met, i) => (
                          <div key={i} className="px-0.5">
                            <span className="text-[11px] font-black text-secondary leading-none block">{met.val}</span>
                            <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block mt-1.5 leading-tight">{met.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4.5 pt-0">
                    <Link href="#contact" className="w-full inline-flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors border-t border-slate-100 pt-3">
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom contact help banner */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-5 md:p-6.5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3.5 text-center md:text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary shadow-sm">
                  <FileText size={18} />
                </div>
                <div>
                  <h4 className="text-[11.5px] font-black uppercase tracking-wider text-primary">
                    HAVE A SIMILAR PROJECT IN MIND?
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-1">
                    Let our experts design a customized solution tailored to your operational needs.
                  </p>
                </div>
              </div>

              {/* horizontal capabilities and button */}
              <div className="flex flex-wrap items-center justify-center gap-6.5">
                {["Expert Engineering Support", "Tailored Solutions for Your Needs", "End-to-End Project Execution"].map((val, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[9.5px] font-black uppercase tracking-widest text-slate-400">
                    <CheckCircle2 size={12} className="text-secondary" />
                    {val}
                  </div>
                ))}
                <Button href="#contact" variant="primary" className="flex items-center justify-center gap-1.5 text-[9px] font-black uppercase tracking-widest py-3 px-6 leading-none">
                  DISCUSS YOUR PROJECT <ArrowRight size={11} />
                </Button>
              </div>
            </div>

          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: LET'S BUILD YOUR NEXT INDUSTRIAL SUCCESS STORY (CTA) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#031b40] py-20 lg:py-24 text-white" id="contact">
          <Container className="relative z-10">
            {/* Header Block */}
            <div className="max-w-3xl mb-16 text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-secondary">
                YOUR VISION. OUR ENGINEERING.
              </span>
              <h2 className="text-[clamp(2.2rem,6vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight mt-4 text-white">
                Let's Build Your Next <br />
                <span className="text-secondary">Industrial Success Story.</span>
              </h2>
              <span aria-hidden className="mt-5 block h-[2.5px] w-12 bg-secondary" />
              <p className="mt-5 max-w-xl text-xs md:text-[13px] leading-relaxed text-slate-350 font-medium">
                From concept to commissioning, we deliver engineered solutions that drive efficiency, reliability and long-term value for your business.
              </p>
            </div>

            {/* 4 Horizontal values */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-4 mb-12 border-b border-white/10 pb-8">
              {[
                { title: "Proven Expertise", text: "Decades of experience in heavy engineering" },
                { title: "Tailored Solutions", text: "Custom-built for your operational needs" },
                { title: "Maximum ROI", text: "Optimized performance that delivers results" },
                { title: "End-to-End Support", text: "We partner with you at every stage" }
              ].map((val, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-secondary">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-white leading-tight">{val.title}</h4>
                    <p className="mt-1 text-[9.5px] leading-normal text-slate-400 font-medium">{val.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Big navy cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {[
                { title: "Engineering Consultation", desc: "Talk to our experts and get the right solution for your goals.", btn: "SCHEDULE CONSULTATION" },
                { title: "Project Planning", desc: "We plan every detail to ensure smooth execution and delivery.", btn: "PLAN YOUR PROJECT" },
                { title: "Plant Optimization", desc: "Improve efficiency, reduce downtime and cut operating costs.", btn: "OPTIMIZE YOUR PLANT" },
                { title: "Request Proposal", desc: "Share your requirements and we'll prepare a tailored proposal.", btn: "REQUEST PROPOSAL" }
              ].map((card, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6.5 flex flex-col justify-between hover:border-secondary transition-all">
                  <div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary mb-5">
                      <Workflow size={16} />
                    </div>
                    <h3 className="text-[13px] font-black uppercase tracking-wider text-white leading-tight">{card.title}</h3>
                    <p className="mt-2.5 text-[10.5px] leading-relaxed text-slate-400 font-medium">{card.desc}</p>
                  </div>
                  <Button href="#contact" variant="outlineOrange" className="mt-6 flex items-center justify-center gap-1.5 text-[9px] font-black uppercase tracking-widest py-3 px-5 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
                    {card.btn} <ArrowRight size={11} />
                  </Button>
                </div>
              ))}
            </div>

            {/* 5 bottom validation badges */}
            <div className="flex flex-wrap items-center justify-center gap-6.5 border-t border-white/10 pt-8 opacity-60">
              {["Trusted by Industry Leaders Worldwide", "35+ Countries", "1500+ Installations", "24/7 Support", "Safety. Quality. Reliability."].map((badge, i) => (
                <span key={i} className="text-[9.5px] font-black uppercase tracking-widest text-slate-350">{badge}</span>
              ))}
            </div>

          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
