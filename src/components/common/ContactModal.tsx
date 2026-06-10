"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Lock, FileText, Globe, CheckCircle2, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";

const fieldStyle =
  "mt-2 h-11 w-full rounded-lg border border-primary/20 bg-white px-3 text-xs md:text-sm font-normal text-text-dark outline-none transition-[border-color,box-shadow] placeholder:text-text-muted focus:border-secondary focus:shadow-[0_0_0_3px_rgba(250,89,2,0.10)]";

const labelStyle = "block text-xs md:text-sm font-bold text-primary";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.getAttribute("href") === "#contact") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => {
          setIsAnimating(true);
        }, 10);
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
      setSuccess(null);
      setError(null);
    }, 300);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
      : "Website Modal";

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
        setTimeout(() => {
          handleClose();
        }, 2500);
      } else {
        setError(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Custom Styles for Spring Animation & Grid */}
      <style>{`
        .modal-backdrop-fade {
          transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .modal-backdrop-hidden {
          opacity: 0;
          backdrop-filter: blur(0px);
        }
        .modal-backdrop-show {
          opacity: 1;
          backdrop-filter: blur(6px);
        }

        .modal-card-scale {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out;
        }
        .modal-card-hidden {
          opacity: 0;
          transform: scale(0.9) translateY(20px);
        }
        .modal-card-show {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      `}</style>

      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-slate-900/60 modal-backdrop-fade cursor-pointer",
          isAnimating ? "modal-backdrop-show" : "modal-backdrop-hidden"
        )}
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={cn(
          "relative w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/30 bg-white shadow-2xl modal-card-scale lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:max-h-[90vh]",
          isAnimating ? "modal-card-show" : "modal-card-hidden"
        )}
      >
        {/* Close Button on Modal (Absolute Top Right of entire modal to be clickable above images) */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 z-30 rounded-full p-2 bg-slate-900/20 hover:bg-slate-900/40 text-slate-800 lg:text-slate-600 hover:text-slate-900 transition-colors bg-white shadow-md border border-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Image & Copy (Exact representation of ContactCTA) */}
        <div className="relative min-h-[12rem] sm:min-h-[16rem] overflow-hidden lg:h-full lg:min-h-0 bg-slate-50 flex flex-col justify-start p-6 md:p-8 pt-8 sm:pt-10">
          <Image
            alt="Crushing plant processing aggregates at a quarry"
            className="object-cover object-center"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            src="/images/contact/crushing-plant-contact1.jpg"
          />
          {/* Gradient Overlay for Text Readability */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,rgba(255,255,255,0.95)_40%,rgba(255,255,255,0.7)_60%,transparent_80%)] lg:bg-[linear-gradient(180deg,#fff_0%,#fff_20%,rgba(255,255,255,0.95)_45%,rgba(255,255,255,0.50)_65%,transparent_85%)]"
          />
          
          <div className="relative z-10">
            <p className="mb-2.5 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-primary sm:text-[0.7rem]">
              <span aria-hidden className="flex gap-1">
                <span className="h-[5px] w-2.5 -skew-x-[30deg] bg-secondary" />
                <span className="h-[5px] w-2.5 -skew-x-[30deg] bg-primary" />
              </span>
              Get the Right Solution
            </p>
            <h2 className="headline text-[clamp(1.5rem,6vw,2.2rem)] text-primary leading-tight">
              Looking for the
              <span className="mt-0.5 block text-secondary">
                Right Crushing
              </span>
              <span className="mt-0.5 block text-secondary">Solution?</span>
            </h2>
            <p className="mt-3 max-w-[20rem] text-xs md:text-sm leading-relaxed text-text-dark">
              Share your requirements with us and our experts will help you find the perfect crushing solution for your business.
            </p>
          </div>
        </div>

        {/* Right Side: Exact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelStyle}>
                Name
                <input
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldStyle}
                  name="name"
                  placeholder="Your full name"
                  type="text"
                />
              </label>

              <label className={labelStyle}>
                Company
                <input
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className={fieldStyle}
                  name="company"
                  placeholder="Your company name"
                  type="text"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className={labelStyle}>
                Country
                <select
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className={`${fieldStyle} cursor-pointer text-text-muted`}
                  name="country"
                >
                  <option disabled value="">
                    Select your country
                  </option>
                  <option value="India">India</option>
                  <option value="UAE">UAE</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="USA">USA</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className={labelStyle}>
                Capacity Needed
                <select
                  required
                  value={formData.capacity}
                  onChange={handleChange}
                  className={`${fieldStyle} cursor-pointer text-text-muted`}
                  name="capacity"
                >
                  <option disabled value="">
                    Enter required capacity
                  </option>
                  <option value="Up to 50 TPH">Up to 50 TPH</option>
                  <option value="50 - 100 TPH">50 - 100 TPH</option>
                  <option value="100 - 200 TPH">100 - 200 TPH</option>
                  <option value="200 - 300 TPH">200 - 300 TPH</option>
                  <option value="300+ TPH">300+ TPH</option>
                </select>
              </label>
            </div>

            <label className={labelStyle}>
              Requirement
              <textarea
                required
                value={formData.requirement}
                onChange={handleChange}
                className={`${fieldStyle} h-24 sm:h-20 resize-none py-2`}
                name="requirement"
                placeholder="Briefly describe your requirement"
              />
            </label>
          </div>

          {success && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs font-semibold">
              {success}
            </div>
          )}
          {error && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-semibold">
              {error}
            </div>
          )}

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <button
              type="submit"
              disabled={loading}
              className="min-h-[2.8rem] w-full rounded-lg bg-secondary text-white text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-primary transition-all disabled:opacity-50"
            >
              <FileText aria-hidden size={18} strokeWidth={2} />
              {loading ? "Submitting..." : "Request Quote"}
            </button>
            <a
              href="https://wa.me/919887537129"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[2.8rem] w-full rounded-lg border border-primary text-primary hover:bg-primary hover:text-white text-xs md:text-sm font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              <FaWhatsapp aria-hidden size={18} />
              WhatsApp Consultation
            </a>
          </div>

          <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-text-muted">
            <Lock aria-hidden className="shrink-0 text-secondary" size={14} />
            Your information is safe with us.
          </p>
        </form>
      </div>
    </div>
  );
}
