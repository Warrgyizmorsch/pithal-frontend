"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { UserPlus, Lock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const fieldStyle =
  "mt-2 h-12 w-full rounded-lg border border-primary/20 bg-white px-4 text-sm font-normal text-text-dark outline-none transition-[border-color,box-shadow] placeholder:text-text-muted focus:border-secondary focus:shadow-[0_0_0_3px_rgba(250,89,2,0.10)]";

const labelStyle = "block text-sm font-bold text-primary";

export function DealerForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    business_type: "",
    experience: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("/api/dealers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(
          "Thank you! Your dealer application has been submitted successfully.",
        );
        setFormData({
          name: "",
          company: "",
          country: "",
          business_type: "",
          experience: "",
        });
      } else {
        setError(data.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      setError(
        "Something went wrong. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="scroll-mt-24 bg-white !pt-0" id="contact">
      <Container>
        <div className="overflow-hidden rounded-[1.15rem] border border-primary/80 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:max-h-[620px]">
          <div className="relative min-h-[16rem] sm:min-h-[22rem] overflow-hidden lg:h-full lg:min-h-0">
            <Image
              alt="Global distribution and partnership"
              className="object-cover object-center"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              src="/images/contact/crushing-plant-contact1.jpg"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#fff_43%,rgba(255,255,255,0.98)_51%,rgba(255,255,255,0.40)_62%,transparent_74%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_55%,#fff_98%)] lg:block"
            />
            <div className="relative px-5 pb-8 pt-7 min-[380px]:px-7 sm:px-10 sm:pt-10 lg:px-10 lg:pt-10">
              <p className="mb-4 flex items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary min-[380px]:gap-3 min-[380px]:tracking-[0.2em] sm:text-[0.76rem]">
                <span aria-hidden className="flex gap-1">
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                </span>
                Partner with Excellence
                <span aria-hidden className="hidden gap-1 sm:flex">
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                </span>
              </p>
              <h2 className="headline text-[clamp(2.05rem,11.6vw,2.85rem)] text-primary sm:text-[clamp(2.55rem,3.5vw,3.7rem)]">
                Become an
                <span className="mt-1 block text-secondary">
                  Authorized Pithal
                </span>
                <span className="mt-1 block text-secondary">Dealer</span>
              </h2>
              
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="m-3 rounded-2xl border border-primary/20 bg-white px-4 py-6 min-[380px]:m-4 min-[380px]:px-5 sm:m-6 sm:px-7 sm:py-7 lg:m-6 lg:ml-0 lg:px-8 lg:py-6 lg:flex lg:flex-col lg:justify-between"
          >
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-3">
              <label className={labelStyle}>
                Full Name
                <input
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldStyle}
                  name="name"
                  placeholder="Contact person name"
                  type="text"
                />
              </label>

              <label className={labelStyle}>
                Company Name
                <input
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className={fieldStyle}
                  name="company"
                  placeholder="Your organization name"
                  type="text"
                />
              </label>

              <label className={labelStyle}>
                Country / Region
                <select
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className={`${fieldStyle} cursor-pointer text-text-muted`}
                  name="country"
                >
                  <option disabled value="">
                    Select territory
                  </option>
                  <option value="India">India</option>
                  <option value="UAE">UAE</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="USA">USA</option>
                  <option value="Africa">Africa</option>
                  <option value="South East Asia">South East Asia</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className={labelStyle}>
                Current Business Type
                <select
                  required
                  value={formData.business_type}
                  onChange={handleChange}
                  className={`${fieldStyle} cursor-pointer text-text-muted`}
                  name="business_type"
                >
                  <option disabled value="">
                    Select business type
                  </option>
                  <option value="Machinery Dealer">Machinery Dealer</option>
                  <option value="Engineering Firm">Engineering Firm</option>
                  <option value="Spare Parts Provider">Spare Parts Provider</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className={`${labelStyle} lg:col-span-2`}>
                Industry Experience
                <textarea
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className={`${fieldStyle} h-[5.75rem] lg:h-[4.25rem] resize-none py-3`}
                  name="experience"
                  placeholder="Briefly describe your experience in the crushing/mining industry"
                />
              </label>
            </div>

            {success && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs font-semibold">
                {success}
              </div>
            )}
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs font-semibold">
                {error}
              </div>
            )}

            <div className="mt-6 lg:mt-4 grid gap-3 lg:grid-cols-2 lg:gap-4">
              <Button
                className="min-h-[3.4rem] w-full rounded-lg px-3 text-sm tracking-[0.03em] sm:min-h-[3.7rem] sm:px-4"
                type="submit"
                disabled={loading}
              >
                <UserPlus aria-hidden size={23} strokeWidth={2} />
                {loading ? "Submitting..." : "Apply as Dealer"}
              </Button>
              <Button
                className="min-h-[3.4rem] w-full rounded-lg px-3 text-sm tracking-[0.02em] sm:min-h-[3.7rem] sm:px-4"
                href="https://wa.me/919887537129"
                variant="outlineNavy"
              >
                <FaWhatsapp aria-hidden size={23} />
                Partnership Inquiry
              </Button>
            </div>

            <p className="mt-5 lg:mt-3 flex items-center justify-center gap-2 text-center text-sm text-text-muted sm:mt-6">
              <Lock aria-hidden className="shrink-0" size={16} />
              Your business data is handled securely.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
