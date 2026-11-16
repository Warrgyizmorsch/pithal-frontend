"use client";

import { useState, type FormEvent } from "react";
import type { CityFAQ } from "@/lib/city-content";
import styles from "./CityInteractions.module.css";

export function CityFAQs({ faqs }: { faqs: CityFAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className={styles.faqs}>{faqs.map((faq, index) => <div className={styles.faq} key={index}>
    <button type="button" aria-expanded={open === index} aria-controls={`city-faq-${index}`} onClick={() => setOpen(open === index ? null : index)}>
      <span>{faq.question}</span><span className={styles.toggle} aria-hidden>{open === index ? "−" : "+"}</span>
    </button>
    <p id={`city-faq-${index}`} hidden={open !== index}>{faq.answer}</p>
  </div>)}</div>;
}

export function CityMobileMenu() {
  const [open, setOpen] = useState(false);
  return <div className={styles.mobileMenu}>
    <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="city-mobile-nav" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
    {open && <nav id="city-mobile-nav" aria-label="Mobile navigation">{[["Home", "/"], ["Products", "#products"], ["Solutions", "/solutions"], ["Become a Dealer", "/become-a-dealer"], ["Blog", "/blog"], ["About Us", "/about"], ["Contact Us", "#quote"]].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
  </div>;
}

export function CityQuoteForm({ city, sourcePage, productName = "Stone Crusher", quick = false }: { city: string; productName?: string; sourcePage: string; quick?: boolean }) {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<{ error: boolean; text: string } | null>(null);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setPending(true);
    setMessage(null);
    try {
      const phone = String(data.get("phone") || "");
      if (phone.replace(/\D/g, "").length < 7) throw new Error("Please enter a valid phone number.");
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        fullName: data.get("fullName"), email: data.get("email") || undefined, phone,
        companyName: data.get("companyName") || "", productInterest: productName, capacity: data.get("capacity"), country: "India",
        message: `Product: ${productName}. Required capacity: ${data.get("capacity")}. Project city: ${data.get("projectCity") || city}. ${data.get("message") || "Callback requested from city page."}`,
        sourcePage,
      }) });
      const result = await response.json();
      if (!response.ok || !result.success || result.savedToDatabase === false) throw new Error(result.savedToDatabase === false ? "We could not save your request. Please try again or call +91 98875 37129." : result.error || "Could not send your request. Please try again.");
      setMessage({ error: false, text: "Thank you. Our engineer will contact you about your project." });
      form.reset();
    } catch (error) {
      setMessage({ error: true, text: error instanceof Error ? error.message : "Could not send your request. Please try again." });
    } finally {
      setPending(false);
    }
  }
  return <form onSubmit={submit} aria-label={quick ? "Quick quote" : "Request a quote"} className={quick ? styles.quickForm : styles.quoteForm}>
    {quick && <div className={styles.quickHeading}><div>Get a price for {city}</div><p>Share 3 details — our engineer calls you back.</p></div>}
    <div className={quick ? styles.quickFields : styles.fields}>
      <label>{quick ? "Name" : "Full name"}<input name="fullName" autoComplete="name" required maxLength={100} placeholder={quick ? "Your name" : undefined} /></label>
      {!quick && <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>}
      <label>Phone<input name="phone" type="tel" autoComplete="tel" required maxLength={25} placeholder={quick ? "+91" : undefined} /></label>
      {!quick && <><label>Company<input name="companyName" autoComplete="organization" maxLength={150} /></label><label>Project city<input name="projectCity" defaultValue={city} required maxLength={100} /></label></>}
      <label className={quick ? styles.full : undefined}>Required capacity<select name="capacity"><option>150–250 TPH</option><option>250–400 TPH</option><option>400–600 TPH</option><option>Not sure yet</option></select></label>
      {!quick && <label className={styles.full}>Your requirement<textarea name="message" rows={4} maxLength={5000} placeholder="Rock type, final product sizes, site location…" /></label>}
    </div>
    <button type="submit" disabled={pending}>{pending ? "Sending…" : quick ? "Request Callback" : "Request Quote"}</button>
    {message && <p className={message.error ? styles.error : styles.success} role={message.error ? "alert" : "status"}>{message.text}</p>}
  </form>;
}
