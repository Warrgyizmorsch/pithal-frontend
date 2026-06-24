"use client";

import Image from "next/image";
import { useState } from "react";
import { User, Building, Globe, Clipboard, Gauge, ShieldCheck, Phone, ArrowRight, Settings, ClipboardList, TrendingUp, Headphones, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import type { ContactSectionData } from "@/data/products/productDetailTypes";
import { sectionPadding } from "./styles";

const CONTACT_SECTION_BACKGROUND =
  "/images/products-images/universal-quarry-plant-background.png";

export function ContactSolutionSection({ data }: { data: ContactSectionData }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    capacity: "",
    requirement: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const pageSource = typeof window !== "undefined"
      ? (window.location.pathname === "/"
        ? "Home Page"
        : `Page: ${window.location.pathname}`)
      : "Product Page Form";

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: pageSource,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess("Thank you! Your quote request has been submitted successfully.");
        setFormData({
          name: "",
          company: "",
          country: "",
          capacity: "",
          requirement: "",
        });
      } else {
        setError(data.error || "Failed to submit request. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };
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
    <section id={data.id} className={`bg-[#f8fafc] ${sectionPadding}`}>
      <Container>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(229, 231, 235, 0.8)",
            borderRadius: "28px",
            boxShadow: "0 25px 70px rgba(3, 27, 64, 0.06)",
          }}
          className="overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f9fbff_100%)] px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* Left Column: Information, Benefits & Image Banner */}
        <div className="flex min-w-0 flex-col h-full">
          {/* Section Header with line and slashes */}
          <div className="mb-5 flex w-full flex-wrap items-center justify-center gap-1.5 sm:justify-start">
            <span className="inline-flex shrink-0 items-center rounded-full border border-secondary/15 bg-secondary/10 p-2 text-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>

            <span className="ml-1 font-heading text-base font-black uppercase tracking-[0.25em] text-secondary sm:text-lg">
              {data.eyebrow}
            </span>

            <span className="ml-2 hidden h-[7px] w-[3.5px] -skew-x-[30deg] bg-secondary sm:inline-block" />
            <span className="hidden h-[7px] w-[3.5px] -skew-x-[30deg] bg-secondary sm:inline-block" />
            <span className="hidden h-[7px] w-[3.5px] -skew-x-[30deg] bg-secondary sm:inline-block" />

            <div className="hidden h-[1.5px] flex-1 bg-secondary/25 sm:block" />
          </div>

          <h2 
            className="headline text-center text-primary sm:text-left" 
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
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-text-muted sm:mx-0 sm:text-left sm:text-base" style={{ lineHeight: "1.7" }}>
            {data.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {data.benefits.map((benefit) => (
              <article key={benefit.title} className="flex w-full flex-col gap-2.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    {renderBenefitIcon(benefit.icon)}
                  </span>
                  <h4 
                    className="font-bold w-[70%] uppercase text-primary" 
                    style={{ 
                      fontSize: "0.70rem", 
                      letterSpacing: "0.04em",
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
            className="relative mt-8 h-[220px] w-full overflow-hidden p-3 sm:h-[260px] sm:p-4 lg:h-[320px] lg:p-5" 
            style={{ 
              borderRadius: "22px",
              boxShadow: "0 15px 35px rgba(3, 27, 64, 0.05)",
              backgroundImage: `url(${CONTACT_SECTION_BACKGROUND})`,
              backgroundSize: "cover",
              backgroundPosition: "center 25%",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,27,64,0.12)_0%,rgba(3,27,64,0.64)_100%)]" />
            <div
              className="absolute bottom-3 left-3 right-3 z-20 flex w-auto flex-col gap-3 rounded-[28px] border border-white/10 bg-[#031b40]/95 p-3 text-white shadow-[0_14px_35px_rgba(3,27,64,0.35)] backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4"
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

              <div className="flex flex-1 items-center gap-3 sm:gap-4">
                <div 
                  className="flex shrink-0 items-center justify-center rounded-full bg-white/95 text-secondary"
                  style={{ width: 50, height: 50, minWidth: 50, minHeight: 50 }}
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

              <div style={{ width: "1px", height: "34px", backgroundColor: "rgba(255, 255, 255, 0.15)", margin: "0 10px" }} className="hidden sm:block" />

              <div className="flex w-full flex-col items-start justify-center shrink-0 sm:w-auto sm:items-end">
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
          className="w-full h-full min-w-0 rounded-[20px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fdfefe_100%)] p-4 shadow-[0_20px_45px_rgba(3,27,64,0.06)] sm:p-7 lg:p-8"
        >
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:gap-4">
            <div 
              className="flex shrink-0 items-center justify-center rounded-xl relative"
              style={{
                width: 56,
                height: 56,
                backgroundColor: "#031b40",
                color: "#ffffff"
              }}
            >
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src="/icons/contact-cta-product.png"
                  alt="Contact CTA icon"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain p-1"
                />
              </div>
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
              <div className="inline-flex items-center rounded-full border border-secondary/15 bg-secondary/10 px-3 py-1 text-[0.66rem] font-black uppercase tracking-[0.2em] text-secondary">
                Request a quote
              </div>
              <h3 
                className="mt-3 font-bold uppercase text-primary" 
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
          <form className="space-y-3 flex flex-col gap-3 sm:space-y-4" onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div 
              className="flex items-stretch"
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                minHeight: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "48px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <User size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col  justify-center px-3 sm:px-4">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  FULL NAME <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <input 
                  required
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                minHeight: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "48px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Building size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-3 sm:px-4">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  COMPANY NAME <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <input 
                  required
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
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
                minHeight: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "48px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Globe size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-3 sm:px-4 relative">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  COUNTRY <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <select 
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none outline-none text-base sm:text-[13px] text-primary appearance-none cursor-pointer"
                  style={{ padding: "2px 24px 0 0" }}
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
              className="flex items-start transition-all duration-200 focus-within:border-secondary/50 focus-within:shadow-[0_0_0_3px_rgba(250,89,2,0.12)]"
              style={{
                border: "1.5px solid #e5e7eb",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                minHeight: "100px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "48px",
                  height: "98px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Clipboard size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-3 py-2 sm:px-4">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {data.form.dropdown.label} <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <textarea 
                  required
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
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
                minHeight: "64px"
              }}
            >
              <div 
                className="flex shrink-0 items-center justify-center bg-[#f8fafc]"
                style={{
                  width: "48px",
                  color: "#9ca3af",
                  borderRight: "1.5px solid #e5e7eb"
                }}
              >
                <Gauge size={20} strokeWidth={2.2} />
              </div>
              <div className="flex-1 flex flex-col justify-center px-3 sm:px-4">
                <label style={{ fontSize: "8.5px", fontWeight: 800, color: "#6b7280", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {data.form.textarea.label} <span style={{ color: "#fa5902" }}>*</span>
                </label>
                <input 
                  required
                  type="text" 
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleChange}
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
              className="flex flex-col items-start gap-3 sm:flex-row sm:items-center"
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

            {/* Alert messages */}
            {success && (
              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{success}</span>
              </div>
            )}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <Button 
              type="submit"
              disabled={loading}
              className="w-full min-h-[3.6rem] rounded-2xl px-4 py-3 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-start sm:gap-4 disabled:opacity-50"
              variant="primary"
            >
              <div 
                className="flex items-center justify-center rounded-full bg-white text-secondary shrink-0"
                style={{ width: 34, height: 34 }}
              >
                <ArrowRight size={18} strokeWidth={3} className="text-secondary" />
              </div>
              
              <div className="text-center sm:text-left" style={{ textTransform: "none", letterSpacing: "normal" }}>
                <div className="font-extrabold uppercase text-white" style={{ fontSize: "0.9rem", letterSpacing: "0.08em", lineHeight: 1.2 }}>
                  {loading ? "Submitting..." : data.form.button}
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

