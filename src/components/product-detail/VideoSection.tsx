"use client";

import Image from "next/image";
import { Shield, Settings, Wrench, TrendingUp, CheckCircle2, Play, Film } from "lucide-react";
import { Container } from "@/components/common/Container";
import type { VideoSectionData } from "@/data/products/productDetailTypes";
import { sectionPadding } from "./styles";

export function VideoSection({ data }: { data: VideoSectionData }) {
  const renderIcon = (iconName: string) => {
    const props = { size: 22, strokeWidth: 2.2 };
    switch (iconName) {
      case "shield":
        return <Shield {...props} />;
      case "settings":
        return <Settings {...props} />;
      case "wrench":
        return <Wrench {...props} />;
      case "trending":
        return <TrendingUp {...props} />;
      default:
        return <CheckCircle2 {...props} />;
    }
  };

  return (
    <section className={`bg-white ${sectionPadding}`}>
      <Container>
        {/* Section Header with line and slashes */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "50px" }}>
          <div style={{ flex: 1, height: "1.5px", backgroundColor: "#fa5902", opacity: 0.25 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0 24px" }}>
            {/* 3 orange accent bars on left */}
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginRight: "4px" }} />
            
            {/* Cogwheel icon */}
            <span style={{ display: "inline-flex", alignItems: "center", color: "#fa5902" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>

            <span style={{ fontSize: "1.125rem", fontWeight: 900, color: "#fa5902", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-heading), sans-serif", marginLeft: "4px" }}>
              {data.eyebrow}
            </span>

            {/* 3 orange accent bars on right */}
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginLeft: "8px" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
          </div>
          <div style={{ flex: 1, height: "1.5px", backgroundColor: "#fa5902", opacity: 0.25 }} />
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Left Column: Title & Benefits */}
          <div>
            <h2 
              className="headline text-primary" 
              style={{ 
                fontSize: "clamp(2rem, 5.5vw, 3.8rem)", 
                lineHeight: "0.95", 
                fontWeight: 900,
                letterSpacing: "0.035em",
              }}
            >
              {data.title}<br />
              <span className="text-secondary">{data.highlight}</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-7 text-text-muted max-w-lg" style={{ lineHeight: "1.7" }}>
              {data.description}
            </p>

            <ul className="mt-10 space-y-8">
              {data.features?.map((feature) => (
                <li key={feature.title} className="flex items-start gap-5">
                  {/* Icon Box */}
                  <div 
                    className="flex shrink-0 items-center justify-center rounded-xl bg-[#fa5902]/[0.03]"
                    style={{
                      width: 60,
                      height: 60,
                      border: "1.5px solid rgba(250, 89, 2, 0.15)",
                      color: "#fa5902"
                    }}
                  >
                    {(() => {
                      const props = { size: 30, strokeWidth: 2.2 };
                      switch (feature.icon) {
                        case "shield": return <Shield {...props} />;
                        case "settings": return <Settings {...props} />;
                        case "wrench": return <Wrench {...props} />;
                        case "trending": return <TrendingUp {...props} />;
                        default: return <CheckCircle2 {...props} />;
                      }
                    })()}
                  </div>
                  
                  {/* Text Block */}
                  <div className="flex-1 min-w-0" style={{ paddingTop: "4px" }}>
                    <h4 
                      className="text-primary uppercase" 
                      style={{ 
                        fontSize: "0.95rem", 
                        fontWeight: 900, 
                        letterSpacing: "0.1em",
                        lineHeight: "1.2"
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p 
                      className="mt-1.5 text-text-muted" 
                      style={{ 
                        fontSize: "0.9rem", 
                        lineHeight: "1.6"
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Video Card */}
          <div 
            className="border border-border bg-[#f8fafc] p-3.5 self-start"
            style={{
              borderRadius: "16px",
              boxShadow: "0 20px 45px rgba(3, 27, 64, 0.06)",
            }}
          >
            {/* Video Player */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-primary-dark">
              <Image
                alt={data.thumbnail.alt}
                className="object-cover opacity-90"
                fill
                sizes="(max-width: 1023px) 100vw, 58vw"
                src={data.thumbnail.src}
              />
              <div className="absolute inset-0 bg-primary-dark/15" />
              
              {/* Large central play button */}
              <button 
                aria-label={data.button.label}
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#fa5902] text-white shadow-2xl transition-transform hover:scale-105"
                style={{
                  width: 76,
                  height: 76,
                  border: "4px solid #ffffff",
                  boxShadow: "0 10px 30px rgba(250, 89, 2, 0.5)",
                }}
              >
                <Play fill="#ffffff" stroke="none" style={{ width: 28, height: 28, marginLeft: "4px" }} />
              </button>

              {/* Bottom timeline controls overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3"
                style={{
                  background: "linear-gradient(to top, rgba(3, 27, 64, 0.95) 0%, rgba(3, 27, 64, 0.4) 70%, transparent 100%)",
                }}
              >
                {/* Left Controls */}
                <div className="flex items-center gap-4">
                  {/* Play Icon */}
                  <button style={{ color: "#ffffff", opacity: 0.9 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  
                  {/* Time Display */}
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255, 255, 255, 0.75)", fontFamily: "monospace" }}>
                    0:00 / {data.duration}
                  </span>
                </div>

                {/* Progress Bar Slider */}
                <div style={{ flex: 1, margin: "0 16px", position: "relative", display: "flex", alignItems: "center" }}>
                  {/* Background track */}
                  <div style={{ width: "100%", height: "4px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "2px" }} />
                  {/* Filled track */}
                  <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: "40%", height: "4px", backgroundColor: "#fa5902", borderRadius: "2px" }} />
                  {/* Handle */}
                  <div 
                    style={{ 
                      position: "absolute", 
                      left: "40%", 
                      top: "50%", 
                      transform: "translate(-50%, -50%)", 
                      width: "10px", 
                      height: "10px", 
                      backgroundColor: "#fa5902", 
                      borderRadius: "50%",
                      boxShadow: "0 0 6px rgba(250, 89, 2, 0.8)"
                    }} 
                  />
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-3.5" style={{ color: "rgba(255, 255, 255, 0.75)" }}>
                  {/* Volume Icon */}
                  <button style={{ color: "inherit" }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                  </button>
                  
                  {/* Settings Icon */}
                  <button style={{ color: "inherit" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </button>
                  
                  {/* Fullscreen Icon */}
                  <button style={{ color: "inherit" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Under-video Bottom Bar */}
            <div className="mt-4 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-stretch">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div 
                  className="flex shrink-0 items-center justify-center rounded-xl bg-[#fa5902]/[0.05]"
                  style={{
                    width: 44,
                    height: 44,
                    border: "1.5px solid rgba(250, 89, 2, 0.15)",
                    color: "#fa5902"
                  }}
                >
                  <Film size={20} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 
                    className="text-primary uppercase" 
                    style={{ 
                      fontSize: "0.78rem", 
                      fontWeight: 800, 
                      letterSpacing: "0.08em",
                      lineHeight: "1.2"
                    }}
                  >
                    {data.caption}
                  </h4>
                  <p 
                    className="mt-0.5 text-text-muted" 
                    style={{ 
                      fontSize: "0.72rem", 
                      lineHeight: "1.4"
                    }}
                  >
                    {data.subCaption}
                  </p>
                </div>
              </div>
              <div className="shrink-0 max-sm:w-full">
                <a
                  href={data.button.href}
                  className="inline-flex items-center justify-center gap-2 rounded-md font-bold uppercase transition-colors max-sm:w-full"
                  style={{
                    border: "1.5px solid #fa5902",
                    color: "#fa5902",
                    backgroundColor: "transparent",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    padding: "10px 18px",
                    whiteSpace: "nowrap"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(250, 89, 2, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {data.button.label}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

