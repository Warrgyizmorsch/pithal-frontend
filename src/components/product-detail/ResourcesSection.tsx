"use client";

import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import type { IconText, ResourceItem, ResourcesSectionData } from "@/data/products/productDetailTypes";
import { sectionPadding } from "./styles";

export function ResourcesSection({
  section,
  resources,
  supportFeatures,
}: {
  section: ResourcesSectionData;
  resources: ResourceItem[];
  supportFeatures: IconText[];
}) {
  const renderResourceIcon = (title: string) => {
    const strokeColor = "#fa5902";
    if (title.toUpperCase().includes("BROCHURE")) {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    } else if (title.toUpperCase().includes("DATASHEET")) {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      );
    } else {
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    }
  };

  const renderSupportIcon = (iconName: string) => {
    const strokeColor = "#fa5902";
    switch (iconName.toLowerCase()) {
      case "shield":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 11 11 13 15 9" />
          </svg>
        );
      case "clipboard":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <circle cx="12" cy="14" r="3" />
            <path d="m14 14-2.5 2.5-1-1" />
          </svg>
        );
      case "target":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
            <path d="m22 2-6.5 6.5" />
            <path d="M22 6V2h-4" />
          </svg>
        );
      case "headphones":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
    }
  };

  return (
    <section className={`bg-[#f8fafc] ${sectionPadding}`} id={section.id}>
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span style={{ display: "inline-block", height: "8px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "8px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "8px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginRight: "4px" }} />

            <span className="inline-flex items-center text-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>

            <span className="text-lg font-black text-secondary uppercase tracking-[0.1em] ml-1 mr-1" style={{ fontFamily: "var(--font-heading), sans-serif" }}>
              {section.eyebrow}
            </span>

            <span style={{ display: "inline-block", height: "8px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginLeft: "4px" }} />
            <span style={{ display: "inline-block", height: "8px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "8px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
          </div>

          <h2 className="headline text-[clamp(1.8rem,8vw,2.2rem)] sm:text-[clamp(2.2rem,4.6vw,3.25rem)] text-primary">
            {section.title} <span style={{ color: "#fa5902" }}>{section.highlight}</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-7 text-text-muted max-w-2xl mx-auto" style={{ lineHeight: "1.6" }}>
            {section.subtitle}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          {resources.map((resource) => (
            <div 
              key={resource.title} 
              className="bg-white border border-gray-200/80 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-stretch transition-all hover:shadow-md hover:border-gray-300"
            >
              {/* Left Column: Image wrapper */}
              <div className="relative shrink-0 mx-auto sm:mx-0 w-[130px] h-[180px]">
                <Image
                  alt={resource.image.alt}
                  className="object-contain"
                  fill
                  sizes="130px"
                  src={resource.image.src}
                  priority
                />
              </div>

              {/* Right Column: Information details */}
              <div className="flex flex-col flex-1 justify-between py-1">
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <span className="mb-2">
                    {renderResourceIcon(resource.title)}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-primary font-bold uppercase text-left" style={{ fontSize: "0.85rem", letterSpacing: "0.04em", lineHeight: "1.2" }}>
                    {resource.title}
                  </h3>
                  
                  {/* Underline separator */}
                  <div style={{ width: "30px", height: "2px", backgroundColor: "#fa5902", marginTop: "10px", marginBottom: "10px" }} />
                  
                  {/* Description */}
                  <p className="text-text-muted text-left" style={{ fontSize: "0.78rem", lineHeight: "1.4" }}>
                    {resource.description}
                  </p>
                </div>

                {/* Download PDF button link */}
                <a 
                  href={resource.href}
                  className="secondary-btn inline-flex items-center justify-center gap-2 border border-[#fa5902] text-[#fa5902] hover:bg-[#fa5902]/5 transition-colors font-bold uppercase rounded-lg px-4 py-2 mt-4 text-[11px] tracking-[0.08em] w-fit"
                >
                  {resource.actionLabel}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support Features Row */}
        <div className="mt-8 border border-gray-200/80 bg-white p-6 rounded-2xl shadow-sm">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {supportFeatures.map((feature) => (
              <article className="flex items-start gap-3.5" key={feature.title}>
                <span className="text-secondary shrink-0 mt-0.5">
                  {renderSupportIcon(feature.icon)}
                </span>
                <div>
                  <h4 className="text-primary font-bold uppercase text-left" style={{ fontSize: "0.76rem", letterSpacing: "0.06em", lineHeight: "1.2" }}>
                    {feature.title}
                  </h4>
                  <p className="text-text-muted mt-1 text-left" style={{ fontSize: "0.74rem", lineHeight: "1.35" }}>
                    {feature.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 border border-gray-200/60 bg-gray-50/50 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="flex shrink-0 items-center justify-center rounded-2xl bg-white border border-gray-200 shadow-sm" style={{ width: 52, height: 52 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#092a5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                <path d="M2 10h20" />
                <path d="M12 5h4" stroke="#fa5902" strokeWidth="1.5" />
                <path d="M12 8h6" stroke="#fa5902" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-primary font-bold uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.04em", lineHeight: "1.2" }}>
                CAN&apos;T FIND WHAT YOU&apos;RE LOOKING FOR?
              </h4>
              <p className="text-text-muted mt-1" style={{ fontSize: "0.78rem", lineHeight: "1.3" }}>
                Contact our team for customized documents or additional information.
              </p>
            </div>
          </div>
          
          <Button 
            href={"#contact1"}
            className="flex items-center gap-2 rounded-lg bg-secondary text-white border-none py-3 px-6 h-12 text-[12px] font-extrabold tracking-[0.06em] shrink-0"
            variant="primary"
          >
            {section.supportCta.label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
