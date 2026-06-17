"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Zap,
  Shield,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  FileText,
  Workflow,
  Wrench,
  Download,
  Calendar,
  Handshake,
  Headphones,
  Building2,
  AlertTriangle,
  MapPin,
  Star,
  Activity,
  Layers,
  Clock,
  Check,
  Ban,
  Shuffle,
  Maximize2,
  Users,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM ICONS & MARKUPS
// ─────────────────────────────────────────────────────────────────────────────

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
  bgClass = "bg-white",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
  bgClass?: string;
}) {
  return (
    <div className="mx-auto max-w-5xl text-center mb-12">
      <div className="relative flex justify-center items-center mb-4 w-full max-w-4xl mx-auto">
        <div className="absolute left-[15%] right-[50%] top-1/2 -translate-y-1/2 h-[1px] bg-secondary flex items-center">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
        </div>
        <div className="absolute left-[50%] right-[15%] top-1/2 -translate-y-1/2 h-[1px] bg-secondary flex items-center justify-end">
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
        </div>
        <div
          className={cn(
            "relative px-6 z-10 font-black uppercase text-[17px] tracking-[0.24em] text-secondary",
            light ? "bg-slate-900" : bgClass,
          )}
        >
          {eyebrow}
        </div>
      </div>
      <h2
        className={cn(
          "text-center text-[clamp(1.75rem,4.5vw,2.75rem)] font-black leading-[1.1] tracking-tight uppercase",
          light ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      <span
        aria-hidden
        className="mx-auto mt-4.5 block h-[2.5px] w-12 bg-secondary"
      />
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4.5 max-w-2xl text-center text-[12.5px] leading-relaxed",
            light ? "text-slate-350" : "text-text-muted font-medium",
          )}
        >
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
        <section className="relative overflow-hidden flex items-center py-8 lg:py-6 text-white min-h-[calc(100vh-4.25rem)] sm:min-h-[calc(100vh-4.75rem)] lg:h-[calc(100vh-4.25rem)] xl:h-[calc(100vh-5.25rem)] bg-[#031b40]">
          <Container className="relative z-10 w-full flex flex-col justify-between gap-8 lg:gap-2.5 py-4 lg:py-2 lg:h-full">
            {/* Background Image & Overlays contained inside Container */}
            <div className="absolute inset-0 z-0">
              <Image
                alt="Rajasthan Zinc Crushing Plant"
                className="object-cover object-center"
                fill
                priority
                sizes="(max-width: 1520px) 100vw, 1520px"
                src="/projectimg/rajasthan zinc crushing plant.jpg"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 to-transparent z-[1]" />
              <div className="pointer-events-none absolute inset-0 industrial-grid opacity-35 z-[1]" />
            </div>

            {/* Breadcrumb */}
            <div className="relative z-10 flex items-center flex-wrap gap-2 mb-4 lg:mb-1.5 text-xs sm:text-sm font-semibold text-white/60">
              <Link
                href="/"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <ChevronRight size={10} className="text-white/40" />
              <Link
                href="/projects"
                className="text-white/80 hover:text-secondary transition-colors"
              >
                Projects & Case Studies
              </Link>
              <ChevronRight size={10} className="text-white/40" />
              <span className="text-white">Rajasthan Zinc Crushing Plant</span>
            </div>

            <div className="relative z-10 grid gap-12 lg:gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column Text */}
              <div>
                <div className="flex items-center gap-2.5 mb-2.5 text-secondary">
                  <CheckCircle2 size={24} className="text-secondary" />
                  <span className="text-xl font-black uppercase tracking-[0.24em] text-secondary">
                    FEATURED PROJECT
                  </span>
                </div>

                <h1 className="text-[clamp(2.5rem,6vw,3.75rem)] lg:text-[clamp(2.5rem,4vw,3.3rem)] font-black uppercase leading-[1.02] tracking-tight text-white">
                  RAJASTHAN<span className="mx-3">ZINC</span>
                  <br />
                  CRUSHING PLANT
                </h1>

                <h2 className="text-lg md:text-xl lg:text-base font-black text-secondary uppercase tracking-widest mt-2">
                  500 TPH Crushing & Screening Solution
                </h2>

                <p className="mt-3 max-w-2xl text-base md:text-lg lg:text-sm leading-relaxed text-slate-200 font-medium">
                  A robust and high-performance crushing system designed to
                  deliver consistent output, maximum efficiency, and long-term
                  reliability in demanding mining conditions.
                </p>

                {/* Quick Specs Blocks */}
                <div className="mt-4 lg:mt-2.5 flex flex-wrap gap-x-8 lg:gap-x-6 gap-y-4 lg:gap-y-2 pt-4 lg:pt-2.5 border-t border-white/20">
                  <div className="flex items-center gap-2.5 text-sm lg:text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    <Building2
                      size={24}
                      className="text-secondary lg:w-6 lg:h-6"
                    />
                    <span className="uppercase text-white/70 font-medium">
                      Industry:
                    </span>{" "}
                    Mining
                  </div>
                  <div className="flex items-center gap-2.5 text-sm lg:text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    <MapPin
                      size={24}
                      className="text-secondary lg:w-6 lg:h-6"
                    />
                    <span className="uppercase text-white/70 font-medium">
                      Location:
                    </span>{" "}
                    Rajasthan, India
                  </div>
                  <div className="flex items-center gap-2.5 text-sm lg:text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    <Activity
                      size={24}
                      className="text-secondary lg:w-6 lg:h-6"
                    />
                    <span className="uppercase text-white/70 font-medium">
                      Capacity:
                    </span>{" "}
                    500 TPH
                  </div>
                  <div className="flex items-center gap-2.5 text-sm lg:text-xs font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    <Layers
                      size={24}
                      className="text-secondary lg:w-6 lg:h-6"
                    />
                    <span className="uppercase text-white/70 font-medium">
                      Material:
                    </span>{" "}
                    Zinc Ore
                  </div>
                </div>

                <div className="mt-4.5 lg:mt-3 flex flex-wrap gap-4">
                  <Button
                    href="#overview"
                    variant="primary"
                    className="flex items-center justify-center gap-2 group text-xs font-black tracking-[0.14em] px-8 py-5.5 lg:py-4"
                  >
                    EXPLORE PROJECT
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </Button>
                  <Button
                    href="#contact"
                    variant="outlineOrange"
                    className="flex items-center justify-center gap-2 text-xs font-black tracking-[0.14em] px-8 py-5.5 lg:py-4 text-white border-white/20 hover:bg-white/5"
                  >
                    <Download size={14} className="mr-0.5" />
                    DOWNLOAD CASE STUDY
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Stats row */}
            <div className="relative z-10 mt-4 lg:mt-2 bg-white text-slate-800 rounded-2xl p-4 sm:p-6 md:p-8 lg:py-6 lg:px-6 shadow-[0_8px_30px_rgba(3,27,64,0.06)]">
              <div className="grid gap-x-4 gap-y-6 lg:gap-y-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-start lg:divide-x lg:divide-slate-100">
                <div className="flex flex-col items-center text-center min-[420px]:flex-row min-[420px]:items-center min-[420px]:text-left gap-2.5 min-[420px]:gap-4 lg:gap-3 lg:px-2 group">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center text-secondary transition-all duration-300">
                    <Building2 size={60} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xl sm:text-2xl lg:text-lg font-black text-primary leading-none">
                      500 TPH
                    </h4>
                    <p className="text-[9px] sm:text-[10px] lg:text-[8px] font-black text-slate-400 uppercase tracking-wider mt-1 sm:mt-1.5 lg:mt-1 leading-tight">
                      Plant Capacity
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center min-[420px]:flex-row min-[420px]:items-center min-[420px]:text-left gap-2.5 min-[420px]:gap-4 lg:gap-3 lg:px-4 group">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center text-secondary transition-all duration-300">
                    <Shield size={60} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xl sm:text-2xl lg:text-lg font-black text-primary leading-none">
                      98%
                    </h4>
                    <p className="text-[9px] sm:text-[10px] lg:text-[8px] font-black text-slate-400 uppercase tracking-wider mt-1 sm:mt-1.5 lg:mt-1 leading-tight">
                      Plant Availability
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center min-[420px]:flex-row min-[420px]:items-center min-[420px]:text-left gap-2.5 min-[420px]:gap-4 lg:gap-3 lg:px-4 group">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center text-secondary transition-all duration-300">
                    <TrendingUp size={60} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xl sm:text-2xl lg:text-lg font-black text-primary leading-none">
                      35%
                    </h4>
                    <p className="text-[9px] sm:text-[10px] lg:text-[8px] font-black text-slate-400 uppercase tracking-wider mt-1 sm:mt-1.5 lg:mt-1 leading-tight">
                      Increase in Productivity
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center min-[420px]:flex-row min-[420px]:items-center min-[420px]:text-left gap-2.5 min-[420px]:gap-4 lg:gap-3 lg:px-4 group">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center text-secondary transition-all duration-300">
                    <Clock size={60} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xl sm:text-2xl lg:text-lg font-black text-primary leading-none">
                      24/7
                    </h4>
                    <p className="text-[9px] sm:text-[10px] lg:text-[8px] font-black text-slate-400 uppercase tracking-wider mt-1 sm:mt-1.5 lg:mt-1 leading-tight">
                      Continuous Operation
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center min-[420px]:flex-row min-[420px]:items-center min-[420px]:text-left gap-2.5 min-[420px]:gap-4 lg:gap-3 lg:px-4 group">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center text-secondary transition-all duration-300">
                    <Handshake size={60} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xl sm:text-2xl lg:text-lg font-black text-primary leading-none">
                      End-to-End
                    </h4>
                    <p className="text-[9px] sm:text-[10px] lg:text-[8px] font-black text-slate-400 uppercase tracking-wider mt-1 sm:mt-1.5 lg:mt-1 leading-tight">
                      Solution Delivered
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center min-[420px]:flex-row min-[420px]:items-center min-[420px]:text-left gap-2.5 min-[420px]:gap-4 lg:gap-3 lg:px-4 group">
                  <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center text-secondary transition-all duration-300">
                    <Headphones size={60} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xl sm:text-2xl lg:text-lg font-black text-primary leading-none">
                      Lifetime
                    </h4>
                    <p className="text-[9px] sm:text-[10px] lg:text-[8px] font-black text-slate-400 uppercase tracking-wider mt-1 sm:mt-1.5 lg:mt-1 leading-tight">
                      After-Sales Support
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: EXECUTIVE SUMMARY */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white" id="overview">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              {/* Left text column */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[2px] w-10 bg-secondary" />
                  <span className="text-[17px] font-black uppercase tracking-[0.24em] text-secondary">
                    PROJECT OVERVIEW
                  </span>
                </div>
                <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-black uppercase leading-tight text-primary">
                  <span className="lg:whitespace-nowrap">Executive Summary</span>
                </h2>
                <span
                  aria-hidden
                  className="mt-4 block h-[2.5px] w-12 bg-secondary"
                />
                <p className="mt-5 text-lg md:text-xl leading-relaxed text-slate-600 font-medium">
                  This project was executed to deliver a high-performance
                  crushing and screening solution for zinc ore processing with
                  maximum efficiency, reliability, and minimal downtime.
                </p>
              </div>

              {/* Right: reduced height image */}
              <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-md bg-[url('/projectimg/overview.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-slate-950/10 z-10" />
              </div>
            </div>

            {/* 6 Metric Cards — 3 columns, below both columns */}
            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-sm">
                  <Building2 size={30} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Client Industry
                  </p>
                  <h4 className="text-xs sm:text-sm lg:text-base font-black uppercase text-primary mt-1">
                    Mining Industry
                  </h4>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium leading-none mt-1">
                    Zinc Ore Processing
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-sm">
                  <MapPin size={30} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Location
                  </p>
                  <h4 className="text-xs sm:text-sm lg:text-base font-black uppercase text-primary mt-1">
                    Udaipur, Rajasthan
                  </h4>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium leading-none mt-1">
                    India
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-sm">
                  <Activity size={30} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Plant Capacity
                  </p>
                  <h4 className="text-xs sm:text-sm lg:text-base font-black uppercase text-primary mt-1">
                    500 TPH
                  </h4>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium leading-none mt-1">
                    Crushing & Screening Plant
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-sm">
                  <Layers size={30} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Material Type
                  </p>
                  <h4 className="text-xs sm:text-sm lg:text-base font-black uppercase text-primary mt-1">
                    Zinc Ore
                  </h4>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium leading-none mt-1">
                    Up to 400mm Feed Size
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-sm">
                  <Calendar size={30} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Project Duration
                  </p>
                  <h4 className="text-xs sm:text-sm lg:text-base font-black uppercase text-primary mt-1">
                    14 Months
                  </h4>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium leading-none mt-1">
                    Design to Commissioning
                  </p>
                </div>
              </div>

              <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-4 sm:p-5 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 text-secondary shadow-sm">
                  <Wrench size={30} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Machines Supplied
                  </p>
                  <h4 className="text-xs sm:text-sm lg:text-base font-black uppercase text-primary mt-1">
                    4 Major Machines
                  </h4>
                  <p className="text-[9px] sm:text-xs text-slate-500 font-medium leading-none mt-1">
                    Jaw, Cone, Screen, Conveyors
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: OVERCOMING OPERATIONAL CHALLENGES */}
        {/* ========================================================================= */}
        <section className="py-10 bg-slate-50" id="challenge">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
              {/* Left Column list */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-[2px] w-10 bg-secondary" />
                    <span className="text-[17px] font-black uppercase tracking-[0.24em] text-secondary">
                      THE CHALLENGE
                    </span>
                  </div>
                  <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-black uppercase leading-tight text-primary">
                    <span className="lg:whitespace-nowrap">Overcoming Operational Challenges</span>
                  </h2>
                  <span
                    aria-hidden
                    className="mt-4 block h-[2.5px] w-12 bg-secondary"
                  />
                  <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600 font-medium">
                    The client was facing multiple operational bottlenecks that
                    were impacting productivity, increasing downtime and
                    affecting the overall profitability of the plant.
                  </p>

                  {/* 5 Challenge Cards */}
                  <div className="mt-7 grid gap-3">
                    {[
                      {
                        icon: TrendingDown,
                        title: "Low Productivity",
                        desc: "Existing plant configuration was unable to achieve desired output, leading to low production rates.",
                      },
                      {
                        icon: Clock,
                        title: "High Downtime",
                        desc: "Frequent breakdowns and inefficient equipment resulted in unplanned downtime and revenue loss.",
                      },
                      {
                        icon: Ban,
                        title: "Material Blockage",
                        desc: "High moisture content and improper material flow caused blockages and frequent stoppages.",
                      },
                      {
                        icon: Shuffle,
                        title: "Inconsistent Output",
                        desc: "Irregular product gradation and low-quality output affected downstream operations.",
                      },
                      {
                        icon: Maximize2,
                        title: "Scaling & Future Readiness",
                        desc: "The existing setup lacked scalability to meet future production demands.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-4 items-start bg-white border border-slate-100 rounded-xl p-4 shadow-sm"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary shadow-sm">
                          <item.icon size={26} className="text-secondary" />
                        </div>
                        <div>
                          <h4 className="text-base font-black uppercase tracking-wider text-primary leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column representative photo & navy warning block */}
              <div className="flex flex-col gap-8">
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
                <div className="bg-[#031b40] rounded-2xl p-8 md:p-10 text-white border border-white/5 shadow-md flex items-center gap-6">
                  <AlertTriangle
                    size={96}
                    className="text-secondary animate-pulse shrink-0"
                  />
                  <span className="w-[1.5px] self-stretch bg-white/20 shrink-0 rounded-full" />
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest text-secondary">
                      LIMITING TOTAL POTENTIAL
                    </h4>
                    <p className="mt-3 text-base leading-relaxed text-slate-300 font-medium">
                      These challenges were limiting the plant&apos;s true
                      potential and impacting overall operational efficiency.
                      Pithal was engaged to deliver a complete end-to-end
                      solution to overcome these issues and ensure maximum
                      performance.
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
        {/* ========================================================================= */}
        {/* SECTION 4: PITHAL ENGINEERING SOLUTION */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white" id="solution">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left checklist */}
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[17px] font-black uppercase tracking-[0.24em] text-[#fa5902]">
                    OUR SOLUTION
                  </span>
                  <span className="h-[2px] w-16 bg-[#fa5902]/60" />
                </div>
                <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold text-[#092a5c] leading-[1.1] mb-5">
                  <span className="lg:whitespace-nowrap">Pithal Engineering Solution</span>
                </h2>
                <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed mb-8">
                  Pithal delivered a customized, high-performance crushing &
                  screening solution engineered for maximum efficiency,
                  consistency and long-term operational reliability.
                </p>

                {/* 5 List Cards with dividers */}
                <div className="flex flex-col gap-6">
                  {[
                    {
                      title: "Strategic Machine Selection",
                      desc: "Selected high-efficiency crushers, screens and conveyors to handle zinc ore with optimal crushing and throughput.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 21H2V3h5v4h4V3h5v4h4v14z" />
                          <path
                            d="M18 11h-2v2h2v-2zm-6 0H8v2h4v-2zm6 4h-2v2h2v-2zm-6 0H8v2h4v-2z"
                            strokeWidth="1"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Optimized Workflow Design",
                      desc: "Engineered a smooth material flow with ideal crushing, screening and conveying sequence to eliminate bottlenecks.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="5" r="2.5" />
                          <circle cx="5" cy="12" r="2.5" />
                          <circle cx="19" cy="12" r="2.5" />
                          <circle cx="12" cy="19" r="2.5" />
                          <line x1="12" y1="7.5" x2="12" y2="16.5" />
                          <line x1="7.5" y1="12" x2="16.5" y2="12" />
                        </svg>
                      ),
                    },
                    {
                      title: "Advanced Engineering Strategy",
                      desc: "Applied proven engineering principles and innovative designs to ensure durability, safety and performance.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <ellipse
                            cx="12"
                            cy="12"
                            rx="9"
                            ry="3"
                            transform="rotate(30 12 12)"
                          />
                          <ellipse
                            cx="12"
                            cy="12"
                            rx="9"
                            ry="3"
                            transform="rotate(-30 12 12)"
                          />
                          <ellipse
                            cx="12"
                            cy="12"
                            rx="9"
                            ry="3"
                            transform="rotate(90 12 12)"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Performance Optimization Logic",
                      desc: "Fine-tuned equipment settings and system parameters to maximize output while minimizing energy consumption.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 3v18h18" />
                          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                          <path d="M15 8h4v4" />
                        </svg>
                      ),
                    },
                    {
                      title: "Intelligent Plant Layout Planning",
                      desc: "Designed a compact, future-ready plant layout for efficient operations, easy maintenance and scalability.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M9 3v18M3 9h18M9 15h12M15 9v12" />
                        </svg>
                      ),
                    },
                  ].map((item, i, arr) => (
                    <div key={i} className="flex flex-col w-full">
                      <div className="flex gap-4.5 items-start">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#fa5902]/20 text-[#fa5902] shadow-sm">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-sm sm:text-base font-extrabold text-[#092a5c] leading-tight mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      {i < arr.length - 1 && (
                        <div className="border-b border-slate-100/80 w-full mt-5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Columns */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                {/* Visual Card (Flowchart + Image) */}
                <div className="bg-[#f8fafc] border border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                  <div className="text-center">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#092a5c] tracking-wide mb-5">
                      Integrated & Optimized Plant Flow
                    </h3>

                    {/* Horizontal Timeline Circles */}
                    <div className="flex items-center justify-between gap-1">
                      {[
                        {
                          step: "Raw Material Feed",
                          icon: (
                            <svg
                              className="w-5 h-5 text-[#fa5902]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 3L5 9l2 8 8 3 4-6-2-5z" />
                              <path d="M12 3l3 8-7 4" />
                            </svg>
                          ),
                        },
                        {
                          step: "Primary Crushing",
                          icon: (
                            <svg
                              className="w-5 h-5 text-[#fa5902]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M18 3H6a2 2 0 00-2 2v3a4 4 0 004 4h8a4 4 0 004-4V5a2 2 0 00-2-2z" />
                              <path d="M12 12v9m-4-5h8" />
                            </svg>
                          ),
                        },
                        {
                          step: "Secondary Crushing",
                          icon: (
                            <svg
                              className="w-5 h-5 text-[#fa5902]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M12 3l8 12H4L12 3z" />
                              <circle cx="12" cy="12" r="3" />
                            </svg>
                          ),
                        },
                        {
                          step: "Screening Process",
                          icon: (
                            <svg
                              className="w-5 h-5 text-[#fa5902]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="3" width="18" height="18" rx="2" />
                              <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
                            </svg>
                          ),
                        },
                        {
                          step: "Final Product Output",
                          icon: (
                            <svg
                              className="w-5 h-5 text-[#fa5902]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="12" cy="12" r="3" />
                              <circle cx="12" cy="5" r="2.5" />
                              <circle cx="12" cy="19" r="2.5" />
                              <circle cx="5" cy="12" r="2.5" />
                              <circle cx="19" cy="12" r="2.5" />
                              <path d="M12 7.5v4m0 1v4M7.5 12h4m1 0h4" />
                            </svg>
                          ),
                        },
                      ].map((item, i) => (
                        <React.Fragment key={i}>
                          <div className="flex flex-col items-center text-center flex-1">
                            <div className="h-11 w-11 rounded-full bg-white border border-[#fa5902]/20 flex items-center justify-center shadow-sm">
                              {item.icon}
                            </div>
                            <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-700 mt-2.5 max-w-[75px] leading-tight">
                              {item.step}
                            </span>
                          </div>
                          {i !== 4 && (
                            <span className="text-slate-350 text-base font-bold select-none self-start mt-3">
                              →
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Plant Image Box */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-900 shadow-sm flex items-center justify-center">
                    <Image
                      src="/projectimg/pithal%20engineering%20solution.jpg"
                      alt="Pithal Engineering Solution"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* 4 Bottom Values Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-2 pt-2">
                  {[
                    {
                      title: "Reliability",
                      text: "Engineered for continuous operation with minimal downtime.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <path d="M9 11l2 2 4-4" />
                        </svg>
                      ),
                    },
                    {
                      title: "Efficiency",
                      text: "Higher throughput with optimized power consumption.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 20V10M12 20V4M6 20v-6" />
                          <path
                            d="M3 12h18"
                            strokeDasharray="2 2"
                            strokeWidth="1"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Consistency",
                      text: "Uniform output quality for improved process performance.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </svg>
                      ),
                    },
                    {
                      title: "Scalability",
                      text: "Future-ready design to support capacity expansion.",
                      icon: (
                        <svg
                          className="w-5 h-5 text-[#fa5902]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      ),
                    },
                  ].map((val, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start md:border-r md:border-slate-200/80 md:last:border-r-0 md:pr-3 md:pl-2"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fa5902]/5 text-[#fa5902] mb-2 shadow-sm">
                        {val.icon}
                      </div>
                      <h4 className="text-[13px] sm:text-sm font-extrabold text-[#092a5c] mb-1">
                        {val.title}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] leading-relaxed text-slate-500 font-medium">
                        {val.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footnote Bar */}
                <div className="bg-[#fff9f6] border border-[#fbe5da] rounded-2xl p-4.5 flex gap-4 items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#fbe5da] text-[#fa5902] shadow-sm">
                    <svg
                      className="w-5 h-5 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <p className="text-[11px] sm:text-xs leading-normal text-slate-600 font-medium">
                    Our engineering team combined deep domain expertise with
                    advanced design tools and real-world experience to deliver a
                    solution that exceeds operational expectations and drives
                    long-term value.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: PLANT WORKFLOW (ENGINEERED FLOW. OPTIMIZED PERFORMANCE.) */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* SECTION 5: PLANT WORKFLOW (ENGINEERED FLOW. OPTIMIZED PERFORMANCE.) */}
        {/* ========================================================================= */}
        <section className="py-10 bg-slate-50" id="workflow">
          <Container>
            {/* Custom Section Header */}
            <div className="mx-auto max-w-5xl text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3 text-[17px] font-black uppercase tracking-[0.24em] text-[#fa5902]">
                <span className="h-[1.5px] w-12 bg-[#fa5902]/60" />
                PLANT WORKFLOW
                <span className="h-[1.5px] w-12 bg-[#fa5902]/60" />
              </div>
              <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold text-[#092a5c] leading-[1.1] mb-4">
                <span className="lg:whitespace-nowrap">ENGINEERED FLOW. OPTIMIZED PERFORMANCE.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                Our integrated crushing & screening solution is designed to
                ensure smooth material flow, maximum efficiency and consistent
                output quality.
              </p>
            </div>

            {/* Horizontal Timeline Steps (6) */}
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-4 relative z-20">
              {[
                {
                  number: "01",
                  name: "RAW MATERIAL",
                  desc: "Run-of-mine material dumped into hopper",
                  icon: (
                    <svg
                      className="w-11 h-11 text-slate-500 mx-auto my-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 3L5 9l2 8 8 3 4-6-2-5z" />
                      <path d="M12 3l3 8-7 4" />
                      <circle cx="8" cy="14" r="0.5" fill="currentColor" />
                      <circle cx="15" cy="11" r="0.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  number: "02",
                  name: "PRIMARY CRUSHER",
                  desc: "Jaw crusher reduces material size",
                  icon: (
                    <svg
                      className="w-11 h-11 text-slate-500 mx-auto my-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 6h16M4 18h16M6 6l2 12m10-12l-2 12" />
                      <rect x="9" y="9" width="6" height="6" rx="1" />
                    </svg>
                  ),
                },
                {
                  number: "03",
                  name: "SECONDARY CRUSHER",
                  desc: "Cone crusher further reduces material",
                  icon: (
                    <svg
                      className="w-11 h-11 text-slate-500 mx-auto my-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 3L5 17h14L12 3z" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  ),
                },
                {
                  number: "04",
                  name: "SCREENING",
                  desc: "Vibrating screens separate material by size",
                  icon: (
                    <svg
                      className="w-11 h-11 text-slate-500 mx-auto my-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path
                        d="M6 5v14M10 5v14M14 5v14M18 5v14M3 9h18M3 14h18"
                        strokeDasharray="1 1"
                      />
                    </svg>
                  ),
                },
                {
                  number: "05",
                  name: "CONVEYOR SYSTEM",
                  desc: "Efficient conveying ensures continuous flow",
                  icon: (
                    <svg
                      className="w-11 h-11 text-slate-500 mx-auto my-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="9" width="18" height="6" rx="3" />
                      <circle cx="6" cy="12" r="1" fill="currentColor" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                      <circle cx="18" cy="12" r="1" fill="currentColor" />
                      <path d="M3 12h18" strokeDasharray="2 2" />
                    </svg>
                  ),
                },
                {
                  number: "06",
                  name: "FINAL OUTPUT",
                  desc: "High-quality, uniform material ready for use",
                  icon: (
                    <svg
                      className="w-11 h-11 text-slate-500 mx-auto my-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 5L4 19h16L12 5z" />
                      <path d="M12 10l5 9H7l5-9z" />
                    </svg>
                  ),
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Connectors (Circle to Circle) */}
                  {idx !== 5 && (
                    <div className="hidden lg:block absolute top-[24px] left-[calc(50%+24px)] right-[calc(-50%+24px)] h-[1px] bg-slate-200">
                      <div className="absolute right-0 -top-1 border-t border-r border-slate-350 w-2 h-2 rotate-45" />
                    </div>
                  )}

                  {/* Circle Number */}
                  <div className="h-12 w-12 rounded-full bg-white border border-[#fa5902]/25 text-[#fa5902] flex items-center justify-center font-extrabold text-sm sm:text-base shadow-sm mb-3">
                    {step.number}
                  </div>

                  {/* Step Icon */}
                  {step.icon}

                  {/* Step Title & Desc */}
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#092a5c] mt-2 mb-1">
                    {step.name}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-slate-500 font-medium px-2 max-w-[170px]">
                    {step.desc}
                  </p>

                  {/* Vertical Dotted Connector Lines pointing down to the main workflow image below */}
                  <div className="hidden lg:flex flex-col items-center mt-5 h-20 pointer-events-none z-20">
                    <div className="w-[1px] h-full border-l border-dashed border-[#fa5902]/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#fa5902] shadow-[0_0_8px_rgba(250,89,2,0.9)]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Plant Workflow Wide Image Box */}
            <div className="relative aspect-[3/1] sm:aspect-[5/1] lg:aspect-[8/1] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-sm mb-12 mt-8 lg:-mt-16 flex items-center justify-center z-10">
              <Image
                alt="Engineered flow"
                src="/projectimg/engineered flow.jpg"
                fill
                className="object-cover object-center"
              />
              {/* Fade from top overlay */}
              <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Bottom 4 Stats Pills in Card */}
            <div className="bg-white border border-slate-100/90 rounded-3xl p-6 shadow-sm">
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-150">
                {[
                  {
                    title: "OPTIMIZED FLOW",
                    desc: "Smooth material flow at every stage",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        <path d="M2 12h20" />
                      </svg>
                    ),
                  },
                  {
                    title: "HIGHER EFFICIENCY",
                    desc: "Maximized throughput with minimal downtime",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 20V10M12 20V4M6 20v-6" />
                        <path d="M18 10l-6-6-6 6" />
                      </svg>
                    ),
                  },
                  {
                    title: "CONSISTENT QUALITY",
                    desc: "Uniform output with precise screening",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                      </svg>
                    ),
                  },
                  {
                    title: "LOWER OPERATING COST",
                    desc: "Reduced wear, energy & maintenance",
                    icon: (
                      <svg
                        className="w-5 h-5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    ),
                  },
                ].map((pill, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-center px-4 first:pl-0 last:pr-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fa5902]/5 text-[#fa5902] shadow-sm">
                      {pill.icon}
                    </div>
                    <div>
                      <h4 className="text-[13px] sm:text-sm font-extrabold text-[#092a5c] leading-tight mb-1">
                        {pill.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium leading-normal">
                        {pill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: MACHINES & EQUIPMENT */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white" id="equipment">
          <Container>
            {/* Custom Section Header */}
            <div className="mx-auto max-w-5xl text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3 text-[17px] font-black uppercase tracking-[0.24em] text-[#fa5902]">
                <span className="h-[1.5px] w-12 bg-[#fa5902]/60" />
                MACHINES & EQUIPMENT
                <span className="h-[1.5px] w-12 bg-[#fa5902]/60" />
              </div>
              <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold text-[#092a5c] leading-[1.1] mb-4">
                <span className="lg:whitespace-nowrap">ADVANCED MACHINES. SUPERIOR PERFORMANCE.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                High-efficiency equipment selected and configured to deliver
                maximum productivity, reliability and consistent output quality.
              </p>
            </div>

            {/* 5 Equipment columns */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-12">
              {[
                {
                  number: "01",
                  name: "JAW CRUSHER",
                  model: "PEW 1100 x 750",
                  img: "/images/products/jaw-crusher/main-machine.png",
                  role: "Primary crushing of run-of-mine material into manageable size.",
                  roleIcon: (
                    <svg
                      className="w-5.5 h-5.5 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M22 21H2V3h5v4h4V3h5v4h4v14z" />
                    </svg>
                  ),
                  specs: [
                    { label: "Feed Opening", val: "1100 x 750 mm" },
                    { label: "Max Feed Size", val: "630 mm" },
                    { label: "Capacity", val: "200 - 350 TPH" },
                    { label: "Motor Power", val: "110 kW" },
                    { label: "Weight", val: "15,800 kg" },
                  ],
                },
                {
                  number: "02",
                  name: "CONE CRUSHER",
                  model: "PCH 220",
                  img: "/images/products/cone-crusher/main-machine.png",
                  role: "Secondary crushing for further size reduction and shape control.",
                  roleIcon: (
                    <svg
                      className="w-5.5 h-5.5 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  specs: [
                    { label: "Max Feed Size", val: "185 mm" },
                    { label: "Capacity", val: "150 - 250 TPH" },
                    { label: "Closed Side CSS", val: "13 - 38 mm" },
                    { label: "Motor Power", val: "160 kW" },
                    { label: "Weight", val: "18,500 kg" },
                  ],
                },
                {
                  number: "03",
                  name: "VSI CRUSHER",
                  model: "PVSI 1145",
                  img: "/images/products/vsi-crusher/product-review.png",
                  role: "Tertiary crushing & shaping for high-quality, cubical products.",
                  roleIcon: (
                    <svg
                      className="w-5.5 h-5.5 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="9"
                        ry="3"
                        transform="rotate(30 12 12)"
                      />
                    </svg>
                  ),
                  specs: [
                    { label: "Rotor Diameter", val: "1145 mm" },
                    { label: "Max Feed Size", val: "60 mm" },
                    { label: "Capacity", val: "120 - 200 TPH" },
                    { label: "Motor Power", val: "200 kW" },
                    { label: "Weight", val: "14,200 kg" },
                  ],
                },
                {
                  number: "04",
                  name: "VIBRATING SCREEN",
                  model: "3YK 2160",
                  img: "/images/products/vibrating-screen/product-review.png",
                  role: "Separation and classification of material by size.",
                  roleIcon: (
                    <svg
                      className="w-5.5 h-5.5 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 3v18M15 3v18M3 9h18" />
                    </svg>
                  ),
                  specs: [
                    { label: "Screen Size", val: "2100 x 6000 mm" },
                    { label: "Decks", val: "3" },
                    { label: "Capacity", val: "200 - 300 TPH" },
                    { label: "Motor Power", val: "18.5 kW" },
                    { label: "Weight", val: "6,800 kg" },
                  ],
                },
                {
                  number: "05",
                  name: "BELT CONVEYORS",
                  model: "BC Series",
                  img: "/images/products/belt-conveyor/product-review.png",
                  role: "Efficient material transfer between different stages of the plant.",
                  roleIcon: (
                    <svg
                      className="w-5.5 h-5.5 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="9" width="18" height="6" rx="3" />
                      <circle cx="6" cy="12" r="1" fill="currentColor" />
                    </svg>
                  ),
                  specs: [
                    { label: "Belt Width", val: "800 - 1500 mm" },
                    { label: "Belt Speed", val: "1.6 - 2.5 m/s" },
                    { label: "Capacity", val: "150 - 500 TPH" },
                    { label: "Motor Power", val: "5.5 - 22 kW" },
                    { label: "Conveyor Length", val: "Up to 60 m" },
                  ],
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="group bg-[#f8fafc]/40 hover:bg-white border border-slate-100 hover:border-slate-200/80 rounded-3xl p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Circle counter + Titles */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-7 w-7 rounded-full bg-white border border-[#fa5902]/20 text-[#fa5902] flex items-center justify-center font-extrabold text-xs shrink-0 shadow-sm">
                        {card.number}
                      </div>
                      <div>
                        <h4 className="text-[13px] sm:text-sm font-extrabold text-[#092a5c] leading-tight">
                          {card.name}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-1">
                          {card.model}
                        </p>
                      </div>
                    </div>

                    {/* Machine image */}
                    <div className="relative aspect-[1.1/1] w-full rounded-2xl overflow-hidden my-4 bg-white flex items-center justify-center">
                      <Image
                        src={card.img}
                        alt={card.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Role Section */}
                    <div className="mt-4 pt-4 border-t border-slate-100/80 flex gap-2.5 items-start">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fa5902]/5 text-[#fa5902] shadow-sm">
                        {card.roleIcon}
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-[#092a5c] uppercase tracking-widest leading-none">
                          Role In Plant:
                        </p>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500 font-medium">
                          {card.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Specs Section */}
                  <div className="mt-4 pt-4 border-t border-slate-100/80 flex gap-2.5 items-start">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fa5902]/5 text-[#fa5902] shadow-sm">
                      <svg
                        className="w-5.5 h-5.5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-black text-[#092a5c] uppercase tracking-widest leading-none mb-2.5">
                        Key Specifications:
                      </p>
                      <div className="space-y-1.5">
                        {card.specs.map((sp, i) => (
                          <div
                            key={i}
                            className="flex justify-between text-[10.5px] leading-none"
                          >
                            <span className="text-slate-400 font-medium">
                              {sp.label}
                            </span>
                            <span className="text-[#092a5c] font-black">
                              {sp.val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom footnote bar with split layout */}
            <div className="bg-white border border-slate-100/90 rounded-3xl p-6 shadow-sm mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:divide-x lg:divide-slate-150">
              {/* Left Quality block */}
              <div className="lg:col-span-5 flex gap-4.5 items-start">
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl bg-[#fa5902]/5 text-[#fa5902] shadow-sm">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                      strokeWidth="0.5"
                      strokeDasharray="1 1"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#092a5c] leading-tight mb-2">
                    BUILT FOR DURABILITY. ENGINEERED FOR RESULTS.
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    All machines are selected for optimal performance, low
                    maintenance and long service life in the toughest operating
                    conditions.
                  </p>
                </div>
              </div>

              {/* Right 4 stats blocks */}
              <div className="lg:col-span-7 lg:pl-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    title: "High Efficiency",
                    desc: "Maximized output with low energy consumption",
                    icon: (
                      <svg
                        className="w-6.5 h-6.5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M18 20V10M12 20V4M6 20v-6" />
                        <path d="M18 10l-6-6-6 6" />
                      </svg>
                    ),
                  },
                  {
                    title: "Reliable Performance",
                    desc: "Designed for continuous operation",
                    icon: (
                      <svg
                        className="w-6.5 h-6.5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 11l2 2 4-4" />
                      </svg>
                    ),
                  },
                  {
                    title: "Low Maintenance",
                    desc: "Easy access design for quick inspection & servicing",
                    icon: (
                      <svg
                        className="w-6.5 h-6.5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Proven Technology",
                    desc: "Globally trusted equipment with local support",
                    icon: (
                      <svg
                        className="w-6.5 h-6.5 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    ),
                  },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-start pl-2">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fa5902]/5 text-[#fa5902] mb-2 shadow-sm">
                      {stat.icon}
                    </div>
                    <h5 className="text-[12px] sm:text-[13px] font-extrabold text-[#092a5c] leading-tight mb-1">
                      {stat.title}
                    </h5>
                    <p className="text-[10px] leading-relaxed text-slate-500 font-medium">
                      {stat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: INSTALLATION & EXECUTION */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white" id="installation">
          <Container>
            <SectionTitle
              eyebrow="INSTALLATION & EXECUTION"
              title={
                <span className="lg:whitespace-nowrap">
                  BUILT ON PRECISION. EXECUTED TO PERFECTION.
                </span>
              }
              subtitle="From equipment handling to installation and commissioning, every step is executed with precision, safety and strict quality standards."
            />

            {/* 6 Grid Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  number: "01",
                  name: "PLANT SETUP",
                  desc: "Complete plant layout and equipment arrangement as per engineered design.",
                  img: "/projectimg/plant setup.jpg",
                },
                {
                  number: "02",
                  name: "CRANE LIFTING",
                  desc: "Safe and efficient lifting of heavy machinery using advanced cranes and rigging.",
                  img: "/projectimg/crane lifting.jpg",
                },
                {
                  number: "03",
                  name: "EQUIPMENT INSTALLATION",
                  desc: "Precise installation and alignment of crushers, screens and conveyors.",
                  img: "/projectimg/equipment installation.jpg",
                },
                {
                  number: "04",
                  name: "FABRICATION",
                  desc: "In-house fabrication of structural components ensuring strength and durability.",
                  img: "/projectimg/fabrication.jpg",
                },
                {
                  number: "05",
                  name: "SITE ENGINEERS",
                  desc: "Our expert team supervising on-site execution with strict adherence to safety and quality.",
                  img: "/projectimg/site engineers.jpg",
                },
                {
                  number: "06",
                  name: "COMMISSIONING",
                  desc: "Final testing, trial runs and commissioning for smooth and reliable plant operation.",
                  img: "/projectimg/commissioning.jpg",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
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
                      <p className="text-[10px] text-slate-500 font-medium leading-relaxed mt-1">
                        {step.desc}
                      </p>
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
        {/* ========================================================================= */}
        {/* SECTION 8: MEASURABLE RESULTS. MAXIMUM IMPACT. */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white" id="results">
          <Container>
            {/* Custom Section Header */}
            <div className="mx-auto max-w-5xl text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3 text-[17px] font-black uppercase tracking-[0.24em] text-[#fa5902]">
                <span className="h-[1.5px] w-12 bg-[#fa5902]/60" />
                RESULTS & PERFORMANCE
                <span className="h-[1.5px] w-12 bg-[#fa5902]/60" />
              </div>
              <h2 className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-extrabold text-[#092a5c] leading-[1.1] mb-4">
                <span className="lg:whitespace-nowrap">MEASURABLE RESULTS. MAXIMUM IMPACT.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                Our engineered solution delivered significant improvement in
                productivity, reliability and operational efficiency, ensuring
                consistent output and lower operating costs.
              </p>
            </div>

            {/* Top row: 5 cards (Horizontal Layout) */}
            <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-5 mb-12">
              {[
                {
                  pct: "35%",
                  title: "HIGHER PRODUCTIVITY",
                  desc: "Increased throughput with optimized crushing & screening process.",
                  icon: (
                    <svg
                      className="w-9 h-9 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M23 6l-9.5 9.5-5-5L1 18" />
                      <path d="M17 6h6v6" />
                    </svg>
                  ),
                },
                {
                  pct: "20%",
                  title: "LOWER DOWNTIME",
                  desc: "Enhanced equipment reliability and reduced breakdowns.",
                  icon: (
                    <svg
                      className="w-9 h-9 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                      <path d="M12 7v5l4 2" />
                    </svg>
                  ),
                },
                {
                  pct: "25%",
                  title: "MATERIAL CONSISTENCY",
                  desc: "Uniform output quality with precise screening & reduction.",
                  icon: (
                    <svg
                      className="w-9 h-9 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="2" />
                      <circle cx="12" cy="6" r="1.5" />
                      <circle cx="12" cy="18" r="1.5" />
                      <circle cx="6" cy="12" r="1.5" />
                      <circle cx="18" cy="12" r="1.5" />
                      <circle cx="8" cy="8" r="1.5" />
                      <circle cx="16" cy="16" r="1.5" />
                      <circle cx="16" cy="8" r="1.5" />
                      <circle cx="8" cy="16" r="1.5" />
                    </svg>
                  ),
                },
                {
                  pct: "15%",
                  title: "ENERGY OPTIMIZATION",
                  desc: "Lower power consumption with efficient equipment integration.",
                  icon: (
                    <svg
                      className="w-9 h-9 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  ),
                },
                {
                  pct: "24/7",
                  title: "CONTINUOUS OPERATION",
                  desc: "Built for nonstop performance and maximum uptime.",
                  icon: (
                    <svg
                      className="w-9 h-9 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <text
                        x="12"
                        y="15"
                        textAnchor="middle"
                        fontSize="8"
                        fontWeight="bold"
                        fill="currentColor"
                      >
                        24/7
                      </text>
                    </svg>
                  ),
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-[#f8fafc]/40 border border-slate-100 hover:border-slate-200 rounded-3xl p-5 flex gap-4 items-center shadow-sm"
                >
                  {/* Left Icon circle */}
                  <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#fa5902]/5 text-[#fa5902] shadow-sm">
                    {card.icon}
                  </div>
                  {/* Right content */}
                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-[#fa5902] leading-none block">
                      {card.pct}
                    </span>
                    <h4 className="text-[10px] font-black uppercase text-[#092a5c] mt-1.5 leading-tight">
                      {card.title}
                    </h4>
                    <p className="mt-1 text-[10px] leading-relaxed text-slate-500 font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle comparative barchart & Outcomes grid */}
            <div className="grid gap-8 lg:grid-cols-12 mb-12">
              {/* Comparative barchart block */}
              <div className="lg:col-span-6 bg-[#031b40] rounded-3xl p-6.5 text-white border border-white/5 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xs font-black uppercase tracking-widest text-slate-350">
                      PERFORMANCE COMPARISON
                    </h3>

                    {/* Legend */}
                    <div className="flex gap-4 text-[10px] font-bold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 bg-slate-500 rounded-sm" />
                        <span className="text-slate-300">
                          BEFORE (Existing Plant)
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 bg-[#fa5902] rounded-sm" />
                        <span className="text-slate-300">
                          AFTER (Pithal Solution)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Bars Chart Area */}
                  <div className="flex h-[240px] items-stretch gap-4.5 pt-4 border-b border-white/10 pb-2">
                    {/* Y-Axis Labels */}
                    <div className="flex flex-col justify-between text-[10px] text-slate-400 font-bold pr-2 h-[200px] select-none">
                      <span>100%</span>
                      <span>80%</span>
                      <span>60%</span>
                      <span>40%</span>
                      <span>20%</span>
                      <span>0%</span>
                    </div>

                    {/* Chart Columns */}
                    <div className="flex-1 grid grid-cols-5 gap-4 h-[200px]">
                      {[
                        {
                          label: "Productivity",
                          before: 65,
                          after: 100,
                          beforeHt: "h-[65%]",
                          afterHt: "h-[100%]",
                        },
                        {
                          label: "Downtime",
                          before: 100,
                          after: 80,
                          beforeHt: "h-[100%]",
                          afterHt: "h-[80%]",
                        },
                        {
                          label: "Material Consistency",
                          before: 70,
                          after: 95,
                          beforeHt: "h-[70%]",
                          afterHt: "h-[95%]",
                        },
                        {
                          label: "Energy Efficiency",
                          before: 75,
                          after: 90,
                          beforeHt: "h-[75%]",
                          afterHt: "h-[90%]",
                        },
                        {
                          label: "Overall Efficiency",
                          before: 65,
                          after: 95,
                          beforeHt: "h-[65%]",
                          afterHt: "h-[95%]",
                        },
                      ].map((bar, i) => (
                        <div
                          key={i}
                          className="flex flex-col justify-end items-center h-full relative"
                        >
                          {/* Bars Side-by-Side */}
                          <div className="flex items-end justify-center w-full gap-1.5 h-full">
                            {/* Before Bar */}
                            <div
                              className={`w-full ${bar.beforeHt} bg-slate-500 rounded-t-sm relative flex flex-col justify-end items-center group`}
                            >
                              <span className="absolute -top-5 text-[9px] font-black text-slate-300">
                                {bar.before}%
                              </span>
                            </div>

                            {/* After Bar */}
                            <div
                              className={`w-full ${bar.afterHt} bg-[#fa5902] rounded-t-sm relative flex flex-col justify-end items-center group`}
                            >
                              <span className="absolute -top-5 text-[9px] font-black text-[#fa5902]">
                                {bar.after}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* X-Axis Category Labels */}
                  <div className="flex pl-[36px] mt-2">
                    <div className="flex-1 grid grid-cols-5 gap-4 text-center">
                      {[
                        "Productivity",
                        "Downtime",
                        "Material Consistency",
                        "Energy Efficiency",
                        "Overall Efficiency",
                      ].map((lbl, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-extrabold uppercase text-slate-400 leading-tight"
                        >
                          {lbl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-[9px] text-slate-400 font-medium">
                  * Results may vary based on site conditions and material
                  characteristics.
                </div>
              </div>

              {/* Right column outcomes checklist and image */}
              <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12">
                {/* Left side checklist */}
                <div className="md:col-span-7 p-6.5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#092a5c] mb-6">
                      KEY OUTCOMES DELIVERED
                    </h3>

                    <div className="space-y-4 pt-2">
                      {[
                        "Consistent high-quality output",
                        "Reduced operating & maintenance costs",
                        "Improved equipment life & reliability",
                        "Optimized flow & reduced bottlenecks",
                        "Higher ROI with short-term payback",
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3 items-center">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fa5902] text-white shadow-sm">
                            <svg
                              className="w-5.5 h-5.5 stroke-[3]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </div>
                          <span className="text-[11px] sm:text-xs font-extrabold text-[#092a5c] tracking-wide uppercase">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side faded image */}
                <div className="md:col-span-5 relative min-h-[200px] md:min-h-full bg-slate-900">
                  <Image
                    src="/projectimg/rajasthan zinc crushing plant.jpg"
                    alt="Crushing Plant Outcomes"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover object-right"
                  />
                  {/* Left fading overlay */}
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/40 to-transparent z-10 pointer-events-none hidden md:block" />
                  <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none md:hidden" />
                </div>
              </div>
            </div>

            {/* Bottom 3-Column Footnote Bar */}
            <div className="bg-[#fff9f6] border border-[#fbe5da] rounded-3xl p-6 shadow-sm mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center divide-y md:divide-y-0 md:divide-x md:divide-[#fbe5da]">
              {/* Left Block */}
              <div className="md:col-span-4 flex gap-4 items-center pl-0">
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#fbe5da] text-[#fa5902] shadow-sm">
                  <svg
                    className="w-8.5 h-8.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                      strokeWidth="0.5"
                      strokeDasharray="1 1"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-black uppercase text-[#092a5c] leading-tight">
                    ENGINEERED FOR PERFORMANCE.
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5 leading-none">
                    PROVEN IN REAL-WORLD OPERATIONS.
                  </p>
                </div>
              </div>

              {/* Center Block (Testimonial Quote) */}
              <div className="md:col-span-4 px-4 flex flex-col justify-center text-center">
                <blockquote className="text-[11px] sm:text-xs font-medium text-slate-600 leading-relaxed italic">
                  “ The Pithal solution has transformed our operations with
                  higher efficiency, consistent output and exceptional
                  reliability. ”
                </blockquote>
                <cite className="text-[10px] text-[#fa5902] font-black uppercase tracking-wider not-italic mt-1.5 block">
                  — Plant Head, Leading Mining Company
                </cite>
              </div>

              {/* Right Block */}
              <div className="md:col-span-4 flex gap-4 items-center justify-end pr-0 pl-4">
                <div>
                  <h4 className="text-[11px] sm:text-xs font-black uppercase text-[#092a5c] leading-tight text-right">
                    BUILT TO DELIVER.
                  </h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-0.5 leading-none text-right">
                    DESIGNED TO PERFORM.
                  </p>
                </div>
                <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl bg-white border border-[#fbe5da] text-[#fa5902] shadow-sm">
                  <svg
                    className="w-8.5 h-8.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: CLIENT TESTIMONIAL */}
        {/* ========================================================================= */}
        <section className="py-10 bg-slate-50" id="testimonials">
          <Container>
            <SectionTitle
              eyebrow="CLIENT TESTIMONIAL"
              bgClass="bg-slate-50"
              title={
                <span className="lg:whitespace-nowrap">
                  TRUSTED BY INDUSTRY LEADERS.{" "}
                  <span className="text-secondary">PROVEN BY RESULTS.</span>
                </span>
              }
              subtitle="Our commitment to engineering excellence and customer success has earned the trust of leading companies across industries."
            />

            {/* Main testimonial block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#e2e8f0] bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mb-8 items-stretch">
              {/* Left Side: Handshake Image */}
              <div className="relative min-h-[220px] lg:min-h-full">
                <Image
                  src="/projectimg/trusted by leaders.jpg"
                  alt="Client Testimonial"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Right Side: Quote and Profile */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  {/* Orange Quote Icon */}
                  <div className="text-secondary mb-2 flex items-center select-none">
                    <span className="text-[64px] font-serif leading-none h-8 text-[#fa5902] font-black">
                      “
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="text-lg sm:text-[20px] font-bold text-[#092a5c] leading-relaxed italic pr-4">
                    &ldquo; Pithal delivered a reliable crushing solution
                    tailored to our operational requirements with excellent
                    support throughout installation and commissioning. &rdquo;
                  </blockquote>

                  {/* Divider line */}
                  <div className="w-full h-[1px] bg-slate-100 my-6" />

                  {/* Secondary/Sub-quote description */}
                  <p className="text-xs sm:text-[13px] leading-relaxed text-slate-500 font-medium">
                    The team demonstrated deep engineering expertise, understood
                    our challenges and delivered a plant that exceeded our
                    productivity expectations.
                  </p>
                </div>

                {/* Profile Badge & Info */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                  {/* Author / Company */}
                  <div className="flex items-center gap-4">
                    {/* Circle N Logo Avatar */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-[#fa5902]/20 shadow-sm relative overflow-hidden">
                      <svg
                        className="w-7 h-7 text-[#fa5902]"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                      >
                        <path d="M20,20 L38,20 L68,68 L68,20 L80,20 L80,80 L62,80 L32,32 L32,80 L20,80 Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#092a5c] leading-none">
                        Ravi Sharma
                      </h4>
                      <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                        Plant Head{" "}
                        <span className="text-slate-300 font-normal">|</span>{" "}
                        Leading Mining Company
                      </p>
                    </div>
                  </div>

                  {/* Location & Date */}
                  <div className="flex gap-4 text-[11px] font-bold uppercase text-slate-500 leading-none">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#fa5902]" /> Rajasthan,
                      India
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#fa5902]" /> 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 5 stats bar & Rating Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
              {/* Left 4 Stats Bar */}
              <div className="lg:col-span-9 bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {/* Shield */}
                <div className="flex items-center gap-4 md:pl-2">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff9f6] text-[#fa5902]">
                    <Shield className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                      98%
                    </span>
                    <span className="text-[11px] font-black text-[#092a5c] uppercase tracking-wider block mt-1 leading-tight">
                      Client Satisfaction
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5 block leading-none">
                      Across all projects
                    </span>
                  </div>
                </div>

                {/* Handshake */}
                <div className="flex items-center gap-4 md:pl-6 pt-4 md:pt-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff9f6] text-[#fa5902]">
                    <Handshake className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                      150+
                    </span>
                    <span className="text-[11px] font-black text-[#092a5c] uppercase tracking-wider block mt-1 leading-tight">
                      Successful Projects
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5 block leading-none">
                      Delivered on time
                    </span>
                  </div>
                </div>

                {/* Users */}
                <div className="flex items-center gap-4 md:pl-6 pt-4 md:pt-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff9f6] text-[#fa5902]">
                    <Users className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                      100+
                    </span>
                    <span className="text-[11px] font-black text-[#092a5c] uppercase tracking-wider block mt-1 leading-tight">
                      Happy Clients
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5 block leading-none">
                      Across industries
                    </span>
                  </div>
                </div>

                {/* Headphones */}
                <div className="flex items-center gap-4 md:pl-6 pt-4 md:pt-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff9f6] text-[#fa5902]">
                    <Headphones className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                      24/7
                    </span>
                    <span className="text-[11px] font-black text-[#092a5c] uppercase tracking-wider block mt-1 leading-tight">
                      After-Sales Support
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5 block leading-none">
                      Always there for you
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Rating Card */}
              <div className="lg:col-span-3 bg-white border border-[#e2e8f0] rounded-3xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-center text-left">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Star
                        key={s}
                        size={16}
                        fill="#fa5902"
                        className="text-[#fa5902]"
                      />
                    ))}
                  </div>
                  <span className="text-[18px] font-black text-[#092a5c] ml-1">
                    4.9/5
                  </span>
                </div>
                <span className="text-[12px] font-black text-[#092a5c] uppercase tracking-wider block leading-tight">
                  Average Client Rating
                </span>
                <span className="text-[10px] text-slate-400 font-medium mt-1 block leading-none">
                  Based on 100+ reviews
                </span>
              </div>
            </div>

            {/* Logo Carousel Container */}
            <div className="bg-slate-50 border border-[#e2e8f0] rounded-[24px] p-5 flex flex-col items-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#092a5c]/60 mb-5">
                PROUD TO PARTNER WITH INDUSTRY LEADERS
              </p>

              <div className="w-full flex items-center justify-between gap-6 px-2">
                {/* Left Arrow */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#fa5902] transition-colors shadow-sm cursor-pointer shrink-0">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Companies Image */}
                <div className="relative flex-1 h-20 sm:h-24 md:h-28 w-full flex items-center justify-center overflow-hidden max-w-[90%] md:max-w-[95%] mx-auto">
                  <img
                    src="/projectimg/companies.png"
                    alt="Trusted Partner Companies"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Right Arrow */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#fa5902] transition-colors shadow-sm cursor-pointer shrink-0">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: GLOBAL REACH */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white" id="global-reach">
          <Container>
            <SectionTitle
              eyebrow="GLOBAL CAPABILITY & SUPPORT"
              bgClass="bg-white"
              title={
                <span className="lg:whitespace-nowrap">
                  GLOBAL REACH. LOCAL SUPPORT.{" "}
                  <span className="text-secondary">ALWAYS WITH YOU.</span>
                </span>
              }
              subtitle="Pithal Engineering delivers world-class solutions backed by strong global capabilities and dedicated support at every stage of your plant's journey."
            />

            {/* Main Section Grid */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch mb-12">
              {/* Left Column: Map & Machinery Image */}
              <div className="lg:col-span-4 relative min-h-[240px] lg:min-h-full overflow-hidden rounded-[24px] border border-slate-100 shadow-sm">
                <Image
                  src="/projectimg/global reach local support.jpg"
                  alt="Global Reach Map"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover object-center animate-fade-in"
                />
                <div className="absolute inset-0 bg-slate-900/10 z-10 pointer-events-none" />
              </div>

              {/* Right Column: 4 vertical cards */}
              <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {/* Card 1: EXPORT READINESS */}
                <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#fa5902]/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div>
                    {/* Dark Blue Circle containing Orange Globe Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#031b40] mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </div>

                    <h4 className="text-center text-xs font-black uppercase text-[#031b40] tracking-wider">
                      EXPORT READINESS
                    </h4>
                    <span className="mx-auto mt-2 mb-4 block h-[2px] w-6 bg-[#fa5902]" />

                    <ul className="space-y-3 mt-4 text-left">
                      {[
                        "Equipment designed to global quality standards",
                        "Compliant with international safety & performance norms",
                        "Exported to 35+ countries across 6 continents",
                        "End-to-end documentation & logistics support",
                      ].map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-xs leading-relaxed text-slate-600 font-medium items-start"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-[#fa5902] shrink-0 mt-0.5"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Faint Background Globe Watermark */}
                  <svg
                    className="absolute -bottom-6 -right-6 w-20 h-20 text-slate-100 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>

                {/* Card 2: AFTER-SALES SUPPORT */}
                <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#fa5902]/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div>
                    {/* Dark Blue Circle containing Orange Headphones Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#031b40] mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M3 18v-6a9 9 0 0 1 18 0v6M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>

                    <h4 className="text-center text-xs font-black uppercase text-[#031b40] tracking-wider">
                      AFTER-SALES SUPPORT
                    </h4>
                    <span className="mx-auto mt-2 mb-4 block h-[2px] w-6 bg-[#fa5902]" />

                    <ul className="space-y-3 mt-4 text-left">
                      {[
                        "24/7 dedicated support team",
                        "Quick response & on-site assistance",
                        "Genuine spare parts availability",
                        "AMC & service contracts for worry-free operations",
                      ].map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-xs leading-relaxed text-slate-600 font-medium items-start"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-[#fa5902] shrink-0 mt-0.5"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Faint Background Gear Watermark */}
                  <svg
                    className="absolute -bottom-6 -right-6 w-20 h-20 text-slate-100 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>

                {/* Card 3: ENGINEERING ASSISTANCE */}
                <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#fa5902]/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div>
                    {/* Dark Blue Circle containing Engineer Avatar Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#031b40] mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                        <path d="M8 5a6 6 0 0 1 8 0" strokeWidth="2" />
                        <path d="M12 2v3" strokeWidth="2" />
                      </svg>
                    </div>

                    <h4 className="text-center text-xs font-black uppercase text-[#031b40] tracking-wider">
                      ENGINEERING ASSISTANCE
                    </h4>
                    <span className="mx-auto mt-2 mb-4 block h-[2px] w-6 bg-[#fa5902]" />

                    <ul className="space-y-3 mt-4 text-left">
                      {[
                        "Process optimization & plant performance review",
                        "Upgradation & capacity enhancement support",
                        "Custom solutions tailored to your needs",
                        "Expert guidance from concept to commissioning",
                      ].map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-xs leading-relaxed text-slate-600 font-medium items-start"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-[#fa5902] shrink-0 mt-0.5"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Faint Background Drafting/Compass Watermark */}
                  <svg
                    className="absolute -bottom-6 -right-6 w-20 h-20 text-slate-100 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M16 16.2L12 12m0 0L8 7.8M12 12l4-4.2M12 12l-4 4.2" />
                  </svg>
                </div>

                {/* Card 4: OPERATIONAL GUIDANCE */}
                <div className="bg-white border border-slate-150 rounded-2xl p-6 shadow-[0_4px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#fa5902]/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
                  <div>
                    {/* Dark Blue Circle containing Orange Chart & Magnifying Glass Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#031b40] mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-[#fa5902]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                        <circle cx="18" cy="6" r="3" />
                        <line x1="20" y1="8" x2="22" y2="10" />
                      </svg>
                    </div>

                    <h4 className="text-center text-xs font-black uppercase text-[#031b40] tracking-wider">
                      OPERATIONAL GUIDANCE
                    </h4>
                    <span className="mx-auto mt-2 mb-4 block h-[2px] w-6 bg-[#fa5902]" />

                    <ul className="space-y-3 mt-4 text-left">
                      {[
                        "Operational training for better efficiency",
                        "Preventive maintenance guidance",
                        "Troubleshooting & performance monitoring",
                        "Continuous support for maximum uptime",
                      ].map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-xs leading-relaxed text-slate-600 font-medium items-start"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-[#fa5902] shrink-0 mt-0.5"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Faint Background Chart Watermark */}
                  <svg
                    className="absolute -bottom-6 -right-6 w-20 h-20 text-slate-100 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom stats banner & Action call */}
            <div className="bg-white border border-slate-150 rounded-[32px] p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 5 Statistics Column */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-5 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100 items-center">
                {/* Country Stat */}
                <div className="flex flex-col items-center justify-center pt-0">
                  <svg
                    className="w-7 h-7 text-[#fa5902] mx-auto mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                    35+
                  </span>
                  <span className="mt-1 text-[10px] font-black uppercase tracking-wider text-[#092a5c] leading-tight">
                    COUNTRIES
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-none">
                    Global Presence
                  </span>
                </div>

                {/* Installations Stat */}
                <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
                  <svg
                    className="w-7 h-7 text-[#fa5902] mx-auto mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                    <path d="M9 22V12h6v10M8 6h2M14 6h2M8 10h2M14 10h2" />
                  </svg>
                  <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                    TRUSTED
                  </span>
                  <span className="mt-1 text-[10px] font-black uppercase tracking-wider text-[#092a5c] leading-tight">
                    INSTALLATIONS
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-none">
                    Proven Worldwide
                  </span>
                </div>

                {/* Support Stat */}
                <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
                  <svg
                    className="w-7 h-7 text-[#fa5902] mx-auto mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                    24/7
                  </span>
                  <span className="mt-1 text-[10px] font-black uppercase tracking-wider text-[#092a5c] leading-tight">
                    SUPPORT
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-none">
                    Always Available
                  </span>
                </div>

                {/* Experts Stat */}
                <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
                  <svg
                    className="w-7 h-7 text-[#fa5902] mx-auto mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82" />
                  </svg>
                  <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                    100+
                  </span>
                  <span className="mt-1 text-[10px] font-black uppercase tracking-wider text-[#092a5c] leading-tight">
                    EXPERTS
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-none">
                    Engineering Excellence
                  </span>
                </div>

                {/* Response Stat */}
                <div className="flex flex-col items-center justify-center pt-4 sm:pt-0">
                  <svg
                    className="w-7 h-7 text-[#fa5902] mx-auto mb-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-[22px] font-black text-[#092a5c] leading-none block">
                    48 HRS
                  </span>
                  <span className="mt-1 text-[10px] font-black uppercase tracking-wider text-[#092a5c] leading-tight">
                    RESPONSE TIME
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium mt-0.5 leading-none">
                    Quick & Reliable
                  </span>
                </div>
              </div>

              {/* Right Partner & ARC Map Actions */}
              <div className="lg:col-span-4 pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-slate-150 flex items-center justify-between gap-4 pt-6 lg:pt-0">
                <div className="flex-1 text-left">
                  <span className="text-xs font-black uppercase text-[#fa5902] tracking-wider block">
                    PARTNER WITH PITHAL ENGINEERING
                  </span>
                  <p className="text-[11px] leading-relaxed text-slate-500 font-bold uppercase tracking-wider mt-1">
                    From engineering excellence to lifetime support, we ensure
                    your success at every step.
                  </p>
                  <Button
                    href="#contact"
                    variant="primary"
                    className="bg-[#031b40] hover:bg-[#031b40]/90 text-white rounded-lg mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-wider py-3.5 px-5 transition-colors"
                  >
                    LET&apos;S BUILD YOUR SUCCESS STORY <ArrowRight size={14} />
                  </Button>
                </div>

                {/* Custom decorative SVG connection map */}
                <svg
                  className="w-32 h-20 text-slate-200 hidden md:block shrink-0"
                  viewBox="0 0 120 70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M10,20 Q15,15 20,20 T30,25"
                    strokeWidth="0.5"
                    strokeDasharray="1 1"
                  />
                  <path
                    d="M40,30 Q50,25 60,35 T70,40"
                    strokeWidth="0.5"
                    strokeDasharray="1 1"
                  />
                  <path
                    d="M85,15 Q95,20 105,15 T115,25"
                    strokeWidth="0.5"
                    strokeDasharray="1 1"
                  />
                  {/* Orange connection lines */}
                  <path
                    d="M25,25 Q55,5 85,20"
                    stroke="#fa5902"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  <path
                    d="M25,25 Q65,45 100,35"
                    stroke="#fa5902"
                    strokeWidth="1.2"
                    fill="none"
                  />
                  {/* Dots */}
                  <circle cx="25" cy="25" r="2" fill="#fa5902" />
                  <circle cx="85" cy="20" r="2" fill="#fa5902" />
                  <circle cx="100" cy="35" r="2" fill="#fa5902" />
                </svg>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 11: RELATED CASE STUDIES */}
        {/* ========================================================================= */}
        <section className="py-10 bg-white" id="case-studies">
          <Container>
            <SectionTitle
              eyebrow="RELATED CASE STUDIES"
              title={
                <span className="lg:whitespace-nowrap">
                  EXPLORE MORE{" "}
                  <span className="text-secondary">SUCCESS STORIES</span>
                </span>
              }
              subtitle="Discover how Pithal Engineering's innovative solutions have helped industries achieve higher efficiency, reliability and maximum ROI."
            />

            {/* 4 Cards Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
              {[
                {
                  tag: "LIMESTONE PLANT",
                  title: "250 TPH Limestone Crushing Plant",
                  loc: "Madhya Pradesh, India",
                  img: "/projectimg/lime stone plant.jpg",
                  metrics: [
                    { val: "35%", text: "Higher Productivity" },
                    { val: "20%", text: "Lower Downtime" },
                    { val: "98%", text: "Material Consistency" },
                  ],
                },
                {
                  tag: "SAND PLANT",
                  title: "200 TPH Sand Manufacturing Plant",
                  loc: "Rajasthan, India",
                  img: "/projectimg/sand plant.jpg",
                  metrics: [
                    { val: "30%", text: "Higher Output" },
                    { val: "15%", text: "Energy Savings" },
                    { val: "99%", text: "Gradation Accuracy" },
                  ],
                },
                {
                  tag: "INFRASTRUCTURE PROJECT",
                  title: "300 TPH Infrastructure Crushing Project",
                  loc: "Maharashtra, India",
                  img: "/projectimg/18.jpg",
                  metrics: [
                    { val: "40%", text: "Higher Capacity" },
                    { val: "25%", text: "Lower Operating Cost" },
                    { val: "100%", text: "Safe & Reliable Operation" },
                  ],
                },
                {
                  tag: "CEMENT PLANT SOLUTION",
                  title: "Complete Crushing Solution for Cement Plant",
                  loc: "Gujarat, India",
                  img: "/projectimg/17.jpg",
                  metrics: [
                    { val: "20%", text: "Process Efficiency" },
                    { val: "24/7", text: "Continuous Operation" },
                    { val: "Zero", text: "Unplanned Shutdown" },
                  ],
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
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
                      <span className="absolute left-4 top-4 z-20 text-[10px] font-black uppercase tracking-widest bg-white text-secondary px-3 py-1 rounded border border-slate-100 leading-none shadow-sm">
                        {card.tag}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-black uppercase text-primary leading-tight group-hover:text-secondary transition-colors">
                        {card.title}
                      </h3>
                      <span className="inline-flex gap-2 items-center text-xs font-black text-slate-400 uppercase tracking-wider mt-2.5">
                        <MapPin size={12} className="text-secondary" />{" "}
                        {card.loc}
                      </span>

                      {/* 3 cols metrics */}
                      <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                        {card.metrics.map((met, i) => (
                          <div key={i} className="px-1">
                            <span className="text-sm font-black text-secondary leading-none block">
                              {met.val}
                            </span>
                            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block mt-2 leading-tight">
                              {met.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="#contact"
                      className="w-full inline-flex items-center justify-between text-xs font-black uppercase tracking-widest text-secondary group-hover:text-primary transition-colors border-t border-slate-100 pt-5"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom contact help banner */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="flex items-center gap-6 text-center md:text-left">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-secondary shadow-sm">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wider text-primary">
                    HAVE A SIMILAR PROJECT IN MIND?
                  </h4>
                  <p className="text-base text-slate-500 font-medium mt-2">
                    Let our experts design a customized solution tailored to
                    your operational needs.
                  </p>
                </div>
              </div>

              {/* horizontal capabilities and button */}
              <div className="flex flex-wrap items-center justify-center gap-10">
                <div className="flex flex-col gap-3">
                  {[
                    "Expert Engineering Support",
                    "Tailored Solutions for Your Needs",
                    "End-to-End Project Execution",
                  ].map((val, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400"
                    >
                      <CheckCircle2 size={16} className="text-secondary" />
                      {val}
                    </div>
                  ))}
                </div>
                <Button
                  href="#contact"
                  variant="primary"
                  className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest py-5 px-10 leading-none"
                >
                  DISCUSS YOUR PROJECT <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12: LET'S BUILD YOUR NEXT INDUSTRIAL SUCCESS STORY (CTA PART 1) */}
        {/* ========================================================================= */}
        <section
          className="relative overflow-hidden bg-[#031b40] pt-12 pb-16 sm:pb-32 text-white"
          id="contact"
        >
          {/* Background Dusk Crushing Plant Image on Right */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0 opacity-40 lg:opacity-75">
            <Image
              src="/projectimg/rajasthan zinc crushing plant.jpg"
              alt="Industrial Plant Sunset"
              fill
              className="object-cover object-right"
            />
            {/* Dark overlay to tone down image brightness */}
            <div className="absolute inset-0 bg-[#031b40]/30 z-10" />
            {/* Gradient Overlay to blend the image into dark blue on the left */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-1/3 bg-gradient-to-r from-[#031b40] via-[#031b40]/80 to-transparent z-20 hidden lg:block" />
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#031b40] to-transparent z-20 lg:hidden" />
          </div>

          <Container className="relative z-10">
            {/* Header Block */}
            <div className="max-w-3xl mb-8 text-left relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-6 bg-[#fa5902]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-[0.24em] text-[#fa5902]">
                  YOUR VISION. OUR ENGINEERING.
                </span>
              </div>

              <h2 className="text-[clamp(1.85rem,5.5vw,3.5rem)] font-black uppercase leading-[1.1] tracking-tight text-white mt-4">
                Let&apos;s Build Your Next <br />
                <span className="text-[#fa5902] relative inline-block">
                  Industrial Success Story.
                  <span className="absolute bottom-0 left-0 w-24 h-[3.5px] bg-[#fa5902]" />
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-medium">
                From concept to commissioning, we deliver engineered solutions
                that drive efficiency, reliability and long-term value for your
                business.
              </p>
            </div>

            {/* 4 Horizontal values aligned on the left */}
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-start gap-x-6 gap-y-6 mt-10">
              {[
                {
                  title: "Proven Expertise",
                  text: "Decades of experience in heavy engineering",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 11 2 2 4-4" />
                    </svg>
                  ),
                },
                {
                  title: "Tailored Solutions",
                  text: "Custom-built for your operational needs",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" y1="21" x2="4" y2="14" />
                      <line x1="4" y1="10" x2="4" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="3" />
                      <line x1="20" y1="21" x2="20" y2="16" />
                      <line x1="20" y1="12" x2="20" y2="3" />
                      <line x1="2" y1="14" x2="6" y2="14" />
                      <line x1="10" y1="8" x2="14" y2="8" />
                      <line x1="18" y1="16" x2="22" y2="16" />
                    </svg>
                  ),
                },
                {
                  title: "Maximum ROI",
                  text: "Optimized performance that delivers results",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  ),
                },
                {
                  title: "End-to-End Support",
                  text: "We partner with you at every stage",
                  icon: (
                    <svg
                      className="w-8 h-8 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                    </svg>
                  ),
                },
              ].map((val, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 group w-full sm:max-w-[230px]"
                >
                  <div className="shrink-0 text-secondary mt-0.5">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white leading-tight">
                      {val.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-normal text-slate-400 font-medium">
                      {val.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 12 PART 2: OVERLAPPING CARDS ON SOLID WHITE BACKGROUND */}
        {/* ========================================================================= */}
        <section className="bg-white pb-20 relative z-10">
          <Container>
            {/* 4 Big navy cards - overlapping the boundary */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:transform sm:-translate-y-1/2 mt-8 sm:mt-0 -mb-12 sm:-mb-24 lg:-mb-28 relative z-20">
              {[
                {
                  title: "Engineering Consultation",
                  desc: "Talk to our experts and get the right solution for your goals.",
                  btn: "SCHEDULE CONSULTATION",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                      <path d="M8 5a6 6 0 0 1 8 0" />
                      <path d="M12 2v3" />
                    </svg>
                  ),
                },
                {
                  title: "Project Planning",
                  desc: "We plan every detail to ensure smooth execution and delivery.",
                  btn: "PLAN YOUR PROJECT",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path d="M9 12l2 2 4-4M9 16h6" />
                    </svg>
                  ),
                },
                {
                  title: "Plant Optimization",
                  desc: "Improve efficiency, reduce downtime and cut operating costs.",
                  btn: "OPTIMIZE YOUR PLANT",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33" />
                    </svg>
                  ),
                },
                {
                  title: "Request Proposal",
                  desc: "Share your requirements and we'll prepare a tailored proposal.",
                  btn: "REQUEST PROPOSAL",
                  icon: (
                    <svg
                      className="w-10 h-10 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M9 15l2 2 4-4" />
                    </svg>
                  ),
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#0b1c36] border border-white/10 rounded-2xl p-6 lg:p-7 flex flex-col justify-between hover:border-[#fa5902]/50 transition-all duration-300 shadow-xl group text-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#fa5902] group-hover:border-[#fa5902]/40 transition-colors">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-black uppercase tracking-wider text-white leading-tight">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 font-medium">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                  <Button
                    href="#contact"
                    variant="outlineOrange"
                    className="mt-6 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest py-2.5 px-4 border-[#fa5902] text-[#fa5902] hover:bg-[#fa5902] hover:text-white transition-all leading-none"
                  >
                    {card.btn} <ArrowRight size={14} />
                  </Button>
                </div>
              ))}
            </div>

            {/* 5 bottom validation badges - on clean white background */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 border-t border-slate-150 pt-10">
              {[
                {
                  text: "Trusted by Industry Leaders Worldwide",
                  icon: (
                    <svg
                      className="w-4 h-4 text-[#fa5902]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 12l2 2 4-4" />
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                },
                {
                  text: "35+ Countries",
                  icon: (
                    <svg
                      className="w-4 h-4 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
                    </svg>
                  ),
                },
                {
                  text: "TRUSTED Installations",
                  icon: (
                    <svg
                      className="w-4 h-4 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                      <path d="M9 22V12h6v10" />
                    </svg>
                  ),
                },
                {
                  text: "24/7 Support",
                  icon: (
                    <svg
                      className="w-4 h-4 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    </svg>
                  ),
                },
                {
                  text: "Safety. Quality. Reliability.",
                  icon: (
                    <svg
                      className="w-4 h-4 text-[#fa5902]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        fill="none"
                      />
                    </svg>
                  ),
                },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500"
                >
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
