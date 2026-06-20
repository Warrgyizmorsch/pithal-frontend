"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import type { RelatedMachine, SectionCopy } from "@/data/products/productDetailTypes";
import { sectionPadding } from "./styles";

const coneIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20l7-15 7 15H5z" />
    <path d="M8 14h8" />
    <path d="M10 9h4" />
  </svg>
);

const vsiIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
  </svg>
);

const feederIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18v4l-4 6H7l-4-6V6z" />
    <path d="M7 16l-2 5M17 16l2 5" />
  </svg>
);

const screenIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M3 14h18" />
    <path d="M9 4v16M15 4v16" />
  </svg>
);

const conveyorIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="18" height="6" rx="3" />
    <circle cx="6" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
    <path d="M4 15l2 4h12l2-4" />
  </svg>
);

const jawIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v18" />
    <path d="M18 3l-8 18" />
    <path d="M6 8h6M6 14h4" />
  </svg>
);

export function RelatedMachines({
  section,
  machines,
}: {
  section: SectionCopy;
  machines: RelatedMachine[];
}) {
  const renderIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "cone":
        return coneIcon;
      case "jaw":
        return jawIcon;
      case "vsi":
        return vsiIcon;
      case "feeder":
        return feederIcon;
      case "screen":
        return screenIcon;
      case "conveyor":
        return conveyorIcon;
      default:
        return coneIcon;
    }
  };

  return (
    <section className={`bg-white ${sectionPadding}`}>
      <Container>
        {/* Section Header with line and slashes */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "40px" }}>
          <div style={{ flex: 1, height: "1.5px", backgroundColor: "#fa5902", opacity: 0.25 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0 24px" }}>
            {/* 3 orange accent bars on left */}
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginRight: "4px" }} />
            
            {/* Cogwheel icon */}
            <span style={{ display: "inline-flex", alignItems: "center", color: "#fa5902" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>

            <span style={{ fontSize: "1.125rem", fontWeight: 900, color: "#fa5902", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "var(--font-heading), sans-serif", marginLeft: "4px" }}>
              {section.eyebrow}
            </span>

            {/* 3 orange accent bars on right */}
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginLeft: "8px" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
          </div>
          <div style={{ flex: 1, height: "1.5px", backgroundColor: "#fa5902", opacity: 0.25 }} />
        </div>

        {/* Section Headline & Description */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 
            className="headline text-primary" 
            style={{ 
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)", 
              lineHeight: "1.1", 
              fontWeight: 900,
              letterSpacing: "0.035em",
              textTransform: "uppercase"
            }}
          >
            {section.title}{" "}
            <span className="text-secondary">{section.highlight}</span>
          </h2>
          {section.subtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg leading-7 text-text-muted">
              {section.subtitle}
            </p>
          )}
        </div>

        {/* Cards Row Container */}
        <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
          {/* Left Arrow Button */}
          <button 
            className="hidden lg:flex items-center justify-center shrink-0"
            style={{
              position: "absolute",
              left: "-56px",
              zIndex: 10,
              width: 44,
              height: 44,
              backgroundColor: "#ffffff",
              border: "1.5px solid #e5e7eb",
              borderRadius: "8px",
              color: "#fa5902",
              boxShadow: "0 4px 12px rgba(3, 27, 64, 0.04)",
              cursor: "pointer",
              transition: "border-color 0.2s, background-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fa5902";
              e.currentTarget.style.backgroundColor = "rgba(250, 89, 2, 0.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          {/* Cards Grid */}
          <div className="grid gap-5 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {machines.map((machine) => (
              <div 
                key={machine.title} 
                className="group flex flex-col justify-between p-5 bg-white transition-all duration-300"
                style={{
                  border: "1px solid rgba(229, 231, 235, 0.8)",
                  borderRadius: "16px",
                  boxShadow: "0 10px 25px rgba(3, 27, 64, 0.03)",
                }}
              >
                <div>
                  {/* Image container */}
                  <div 
                    className="relative w-full overflow-hidden flex items-center justify-center bg-white transition-transform duration-300 group-hover:scale-[1.03]"
                    style={{
                      height: 180,
                      borderRadius: "12px",
                    }}
                  >
                    <Image
                      alt={machine.image.alt}
                      className="object-contain"
                      fill
                      sizes="(max-width: 1023px) 50vw, 20vw"
                      src={machine.image.src}
                      style={{ padding: "8px" }}
                    />
                  </div>

                  {/* Icon Box */}
                  <div 
                    className="flex items-center justify-center rounded-lg bg-[#fa5902]/[0.03]"
                    style={{
                      width: 56,
                      height: 56,
                      border: "1.5px solid rgba(250, 89, 2, 0.15)",
                      color: "#fa5902",
                      marginTop: "20px",
                      marginBottom: "16px"
                    }}
                  >
                    {renderIcon(machine.icon)}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-primary uppercase"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 900,
                      letterSpacing: "0.08em",
                      lineHeight: "1.2"
                    }}
                  >
                    {machine.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mt-2 text-text-muted"
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                      minHeight: "56px"
                    }}
                  >
                    {machine.description}
                  </p>
                </div>

                {/* View Details Link */}
                <div>
                  <Link 
                    href={machine.href}
                    className="inline-flex items-center gap-1.5 font-bold uppercase transition-colors"
                    style={{
                      color: "#fa5902",
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      marginTop: "20px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff7a30";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#fa5902";
                    }}
                  >
                    {machine.actionLabel}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button 
            className="hidden lg:flex items-center justify-center shrink-0"
            style={{
              position: "absolute",
              right: "-56px",
              zIndex: 10,
              width: 44,
              height: 44,
              backgroundColor: "#ffffff",
              border: "1.5px solid #e5e7eb",
              borderRadius: "8px",
              color: "#fa5902",
              boxShadow: "0 4px 12px rgba(3, 27, 64, 0.04)",
              cursor: "pointer",
              transition: "border-color 0.2s, background-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fa5902";
              e.currentTarget.style.backgroundColor = "rgba(250, 89, 2, 0.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e5e7eb";
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "40px" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#fa5902" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#e5e7eb" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#e5e7eb" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#e5e7eb" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#e5e7eb" }} />
        </div>
      </Container>
    </section>
  );
}

