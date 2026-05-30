"use client";

import { User, Building, Globe, Clipboard, Gauge, ShieldCheck, Phone, ArrowRight, Settings, ClipboardList, TrendingUp, Headphones } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import type { ContactSectionData } from "@/data/products/productDetailTypes";

export function ContactSolutionSection({ data }: { data: ContactSectionData }) {
  const renderBenefitIcon = (iconName: string) => {
    const props = { size: 20, strokeWidth: 2.2 };
    switch (iconName.toLowerCase()) {
      case "settings":
        return <Settings {...props} />;
      case "clipboard":
        return <ClipboardList {...props} />;
      case "trending":
        return <TrendingUp {...props} />;
      case "headphones":
        return <Headphones {...props} />;
      default:
        return <Settings {...props} />;
    }
  };

  return (
    <section id={data.id} className="bg-[#f8fafc] py-12 md:py-16">
      <Container>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(229, 231, 235, 0.8)",
            borderRadius: "24px",
            boxShadow: "0 20px 45px rgba(3, 27, 64, 0.05)",
            padding: "50px 40px",
          }}
          className="max-sm:px-5 max-sm:py-8"
        >
          <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] items-stretch">
        {/* Left Column: Information, Benefits & Image Banner */}
        <div className="flex flex-col h-full">
          {/* Section Header with line and slashes */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            {/* Cogwheel icon */}
            <span style={{ display: "inline-flex", alignItems: "center", color: "#fa5902" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>

            <span style={{ fontSize: "11px", fontWeight: 900, color: "#fa5902", letterSpacing: "0.26em", textTransform: "uppercase", fontFamily: "var(--font-heading), sans-serif", marginLeft: "4px" }}>
              {data.eyebrow}
            </span>

            {/* 3 orange accent bars */}
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginLeft: "8px" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)" }} />
            <span style={{ display: "inline-block", height: "7px", width: "3.5px", backgroundColor: "#fa5902", transform: "skewX(-30deg)", marginRight: "8px" }} />
            
            <div style={{ flex: 1, height: "1.5px", backgroundColor: "#fa5902", opacity: 0.25 }} />
          </div>

          <h2 
            className="headline text-primary" 
            style={{ 
              fontSize: "clamp(2rem, 5.5vw, 3.8rem)", 
              lineHeight: "0.95", 
              fontWeight: 900,
              letterSpacing: "0.035em",
              textTransform: "uppercase"
            }}
          >
            {data.title}<br />
            <span style={{ color: "#fa5902" }}>{data.highlight}</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base leading-7 text-text-muted max-w-xl" style={{ lineHeight: "1.7" }}>
            {data.description}
          </p>

          {/* Benefits Grid */}
          <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {data.benefits.map((benefit) => (
              <article key={benefit.title} className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#fa5902" }}>
                    {renderBenefitIcon(benefit.icon)}
                  </span>
                  <h4 
                    className="text-primary font-bold uppercase" 
                    style={{ 
                      fontSize: "0.72rem", 
                      letterSpacing: "0.06em",
                      lineHeight: "1.2"
                    }}
                  >
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-text-muted" style={{ fontSize: "0.74rem", lineHeight: "1.4" }}>
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>

          {/* Large Image Showcase with overlay Contact Strip Banner */}
          <div 
            className="relative w-full mt-8 flex-1 min-h-[380px] overflow-hidden flex items-end p-4 sm:p-5" 
            style={{ 
              borderRadius: "20px",
              boxShadow: "0 15px 35px rgba(3, 27, 64, 0.05)",
              backgroundImage: `url(${data.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat"
            }}
          >
            {/* Contact Strip Banner overlay floating at the bottom */}
            <div 
              className="flex items-center justify-between p-5 text-white gap-4 w-full sm:w-auto sm:max-w-[540px] max-sm:flex-col max-sm:items-stretch relative z-10"
              style={{
                backgroundColor: "#031b40",
                borderRadius: "16px",
                boxShadow: "0 12px 30px rgba(3, 27, 64, 0.3)",
                overflow: "hidden"
              }}
            >
              <div 
                className="absolute text-white pointer-events-none" 
                style={{ 
                  right: "-15px", 
                  bottom: "-25px", 
                  opacity: 0.08, 
                  transform: "rotate(-20deg)" 
                }}
              >
                <svg 
                  width="130" 
                  height="130" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <div className="flex items-center gap-4 flex-1">
                <div 
                  className="flex items-center justify-center rounded-full bg-white text-secondary"
                  style={{ width: 44, height: 44, minWidth: 44, minHeight: 44 }}
                >
                  <Phone size={20} fill="#fa5902" stroke="none" />
                </div>
                <div>
                  <h4 style={{ fontSize: "0.85rem", fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
                    Need immediate assistance?
                  </h4>
                  <p style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.7)", margin: "4px 0 0 0", lineHeight: 1.2 }}>
                    Talk to our crushing experts today.
                  </p>
                </div>
              </div>

              <div style={{ width: "1px", height: "36px", backgroundColor: "rgba(255, 255, 255, 0.15)", margin: "0 12px" }} className="hidden sm:block" />

              <div className="flex flex-col sm:items-end justify-center shrink-0">
                <span style={{ fontSize: "0.7rem", color: "rgba(255, 255, 255, 0.7)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Call Us Now
                </span>
                <a 
                  href={`tel:${data.contactStrip.phone.replace(/\s/g, "")}`}
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#fa5902",
                    lineHeight: 1.2,
                    marginTop: "2px"
                  }}
                >
                  {data.contactStrip.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Form Card */}
        <div 
          className="bg-white p-6 sm:p-8"
          style={{
            border: "1px solid rgba(229, 231, 235, 0.8)",
            borderRadius: "16px",
            boxShadow: "0 20px 45px rgba(3, 27, 64, 0.06)"
          }}
        >
          {/* Card Header with Construction Engineer Icon */}
          <div className="flex items-start gap-4">
            <div 
              className="flex shrink-0 items-center justify-center rounded-xl relative"
              style={{
                width: 56,
                height: 56,
                backgroundColor: "#031b40",
                color: "#ffffff"
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 10a7 7 0 0 1 14 0h-14z" fill="rgba(255,255,255,0.1)" />
                <path d="M3 10h18" strokeWidth="2.5" />
                <path d="M12 3v7" />
                <path d="M9 13.5v1.5a3 3 0 0 0 6 0v-1.5" />
                <path d="M5 20a5 5 0 0 1 10 0H5z" />
              </svg>
              <div 
                className="absolute flex items-center justify-center rounded-full bg-[#031b40]"
                style={{
                  bottom: "6px",
                  right: "6px",
                  width: "16px",
                  height: "16px",
                  border: "1.5px solid #031b40",
                  color: "#fa5902"
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 
                className="text-primary uppercase font-bold" 
                style={{ 
                  fontSize: "0.95rem", 
                  fontWeight: 800, 
                  letterSpacing: "0.06em",
                  lineHeight: "1.2"
                }}
              >
                {data.form.title}
              </h3>
              <p className="mt-1 text-text-muted" style={{ fontSize: "0.76rem", lineHeight: "1.4" }}>
                Fill in your requirements and we&apos;ll get back to you with the best solution.
              </p>
            </div>
          </div>

          {/* Underline separator */}
          <div style={{ width: "100%", height: "1px", backgroundColor: "#fa5902", opacity: 0.15, marginTop: "16px", marginBottom: "20px" }} />

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name Input */}
            <div 
              className="flex items-stretch"
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                height: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "52px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <User size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-4">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  FULL NAME <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder={data.form.fields[0].placeholder}
                  className="w-full bg-transparent border-none outline-none text-base sm:text-[13px] text-primary"
                  style={{ padding: "2px 0 0 0" }}
                />
              </div>
            </div>

            {/* Company Name Input */}
            <div 
              className="flex items-stretch"
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                height: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "52px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Building size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-4">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  COMPANY NAME <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <input 
                  type="text" 
                  name="company"
                  placeholder={data.form.fields[1].placeholder}
                  className="w-full bg-transparent border-none outline-none text-base sm:text-[13px] text-primary"
                  style={{ padding: "2px 0 0 0" }}
                />
              </div>
            </div>

            {/* Country Select Input */}
            <div 
              className="flex items-stretch"
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                height: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "52px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Globe size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 relative">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  COUNTRY <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <select 
                  name="country"
                  className="w-full bg-transparent border-none outline-none text-base sm:text-[13px] text-primary appearance-none cursor-pointer"
                  style={{ padding: "2px 24px 0 0" }}
                  defaultValue=""
                >
                  <option value="" disabled>{data.form.fields[2].placeholder}</option>
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-[20px] text-text-muted">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Requirement / Application Textarea */}
            <div 
              className="flex items-start"
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                height: "100px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "52px",
                  height: "98px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Clipboard size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-4 py-2">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {data.form.dropdown.label} <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <textarea 
                  name="requirement"
                  placeholder={data.form.dropdown.options[0]}
                  className="w-full bg-transparent border-none outline-none text-base sm:text-[13px] text-primary resize-none flex-1"
                  style={{ padding: "4px 0 0 0", marginTop: "2px" }}
                />
              </div>
            </div>

            {/* Capacity Needed Input */}
            <div 
              className="flex items-stretch"
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                height: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "52px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Gauge size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-4">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {data.form.textarea.label} <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <input 
                  type="text" 
                  name="capacity"
                  placeholder="Enter required capacity (TPH)"
                  className="w-full bg-transparent border-none outline-none text-base sm:text-[13px] text-primary"
                  style={{ padding: "2px 0 0 0" }}
                />
                <span style={{ fontSize: "9px", color: "#9ca3af", marginTop: "0.5px" }}>
                  e.g. 100 - 150 TPH
                </span>
              </div>
            </div>

            {/* Security Notice */}
            <div 
              className="flex items-center gap-3"
              style={{
                border: "1.5px solid rgba(9, 42, 92, 0.05)",
                borderRadius: "8px",
                padding: "10px 14px",
                backgroundColor: "#f8fafc"
              }}
            >
              <span style={{ color: "#092a5c" }}>
                <ShieldCheck size={18} strokeWidth={2.2} />
              </span>
              <p style={{ fontSize: "10.5px", color: "#6b7280", lineHeight: "1.4", margin: 0 }}>
                Your information is secure and will only be used to provide the best solution for your business.
              </p>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full min-h-[3.6rem] rounded-lg px-5 flex items-center justify-start gap-4"
              variant="primary"
            >
              <div 
                className="flex items-center justify-center rounded-full bg-white text-secondary shrink-0"
                style={{ width: 34, height: 34 }}
              >
                <ArrowRight size={18} strokeWidth={3} className="text-secondary" />
              </div>
              
              <div style={{ textAlign: "left", textTransform: "none", letterSpacing: "normal" }}>
                <div className="font-extrabold uppercase text-white" style={{ fontSize: "0.9rem", letterSpacing: "0.08em", lineHeight: 1.2 }}>
                  {data.form.button}
                </div>
                <div className="text-white/90" style={{ fontSize: "10px", marginTop: "2px", fontWeight: "normal" }}>
                  Get expert advice for the right crushing solution
                </div>
              </div>
            </Button>
          </form>
          </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


