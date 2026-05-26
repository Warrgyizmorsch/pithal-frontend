import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const fieldStyle = "h-12 w-full border border-border bg-white px-4 text-sm outline-none transition-colors placeholder:text-text-muted/65 focus:border-secondary";

export function ContactCTA() {
  return (
    <section className="section-space bg-white" id="contact">
      <Container>
        <div className="overflow-hidden border border-border lg:grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative bg-bg-light p-7 sm:p-10">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-secondary">Get the Right Solution</p>
            <h2 className="headline text-[clamp(2.1rem,4vw,3.25rem)] text-primary">
              Looking for the Right <span className="text-secondary">Crushing Solution?</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-text-muted">
              Share your requirements with us and our experts will help plan the perfect crushing solution for your business.
            </p>
            <div className="relative mt-8 h-56 overflow-hidden">
              <Image alt="Turnkey crushing solution at a quarry" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 45vw" src="/images/projects/quarry.svg" />
            </div>
          </div>
          <form className="grid gap-4 p-7 sm:grid-cols-2 sm:p-10">
            <label className="text-xs font-bold uppercase tracking-wider text-primary">
              Name
              <input className={`${fieldStyle} mt-2 font-normal normal-case tracking-normal`} placeholder="Your full name" />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-primary">
              Company Name
              <input className={`${fieldStyle} mt-2 font-normal normal-case tracking-normal`} placeholder="Company name" />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-primary">
              Email
              <input className={`${fieldStyle} mt-2 font-normal normal-case tracking-normal`} placeholder="Email address" type="email" />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-primary">
              Phone
              <input className={`${fieldStyle} mt-2 font-normal normal-case tracking-normal`} placeholder="Phone number" type="tel" />
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-primary sm:col-span-2">
              Product Requirement
              <select className={`${fieldStyle} mt-2 font-normal normal-case tracking-normal text-text-muted`} defaultValue="">
                <option disabled value="">Select product requirement</option>
                <option>Crushing Plant</option>
                <option>Screening Solution</option>
                <option>Feeder</option>
                <option>Turnkey Consultation</option>
              </select>
            </label>
            <label className="text-xs font-bold uppercase tracking-wider text-primary sm:col-span-2">
              Message
              <textarea className={`${fieldStyle} mt-2 h-28 resize-none py-3 font-normal normal-case tracking-normal`} placeholder="Tell us about capacity and application" />
            </label>
            <div className="mt-2 flex flex-wrap gap-3 sm:col-span-2">
              <Button type="submit">Send Inquiry <ArrowRight aria-hidden size={14} /></Button>
              <Button href="https://wa.me/919887537129" variant="outlineOrange">
                <FaWhatsapp aria-hidden size={15} /> WhatsApp Consultation
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
