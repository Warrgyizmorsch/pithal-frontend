import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { FileText, Lock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const fieldStyle =
  "mt-2 h-12 w-full rounded-lg border border-primary/20 bg-white px-4 text-sm font-normal text-text-dark outline-none transition-colors placeholder:text-text-muted focus:border-secondary";

const labelStyle = "block text-sm font-bold text-primary";

export function ContactCTA() {
  return (
    <section className="scroll-mt-24 bg-white py-12 sm:py-14 lg:py-16" id="contact">
      <Container className="max-w-none! px-[clamp(1.4rem,2.5vw,3rem)]">
        <div className="overflow-hidden rounded-2xl border border-primary/70 lg:grid lg:min-h-[52rem] lg:grid-cols-[0.94fr_1.06fr]">
          <div className="relative min-h-[47rem] overflow-hidden lg:min-h-0">
            <Image
              alt="Crushing plant processing aggregates at a quarry"
              className="object-cover object-bottom"
              fill
              sizes="(max-width: 1024px) 100vw, 47vw"
              src="/images/projects/karnataka.jpg"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#fff_44%,rgba(255,255,255,0.96)_54%,rgba(255,255,255,0.18)_67%,transparent_78%)]"
            />
            <div className="relative px-7 pb-10 pt-9 sm:px-12 sm:pt-12 lg:px-[clamp(3rem,4vw,5.25rem)] lg:pt-[clamp(3rem,4.2vw,5rem)]">
              <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
                <span aria-hidden className="flex gap-1">
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                </span>
                Get the Right Solution
              </p>
              <h2 className="headline text-[clamp(2.5rem,4.7vw,4rem)] text-primary">
                Looking for the
                <span className="mt-1 block text-secondary">Right Crushing</span>
                <span className="mt-1 block text-secondary">Solution?</span>
              </h2>
              <span aria-hidden className="mt-4 block h-[3px] w-20 bg-secondary" />
              <p className="mt-5 max-w-[29rem] text-sm leading-7 text-text-dark sm:text-base">
                Share your requirements with us and our experts will help you find the perfect crushing solution for
                your business.
              </p>
            </div>
          </div>

          <form className="m-4 rounded-xl border border-primary/20 bg-white px-5 py-7 sm:m-7 sm:px-8 sm:py-8 lg:m-[clamp(2rem,3vw,3.25rem)] lg:ml-0">
            <div className="grid gap-[clamp(1.25rem,2vh,1.7rem)]">
              <label className={labelStyle}>
                Name
                <input className={fieldStyle} name="name" placeholder="Your full name" type="text" />
              </label>

              <label className={labelStyle}>
                Company
                <input className={fieldStyle} name="company" placeholder="Your company name" type="text" />
              </label>

              <label className={labelStyle}>
                Country
                <select className={`${fieldStyle} cursor-pointer text-text-muted`} defaultValue="" name="country">
                  <option disabled value="">
                    Select your country
                  </option>
                  <option>India</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>USA</option>
                  <option>Other</option>
                </select>
              </label>

              <label className={labelStyle}>
                Requirement
                <textarea
                  className={`${fieldStyle} h-24 resize-none py-3`}
                  name="requirement"
                  placeholder="Briefly describe your requirement"
                />
              </label>

              <label className={labelStyle}>
                Capacity Needed
                <select className={`${fieldStyle} cursor-pointer text-text-muted`} defaultValue="" name="capacity">
                  <option disabled value="">
                    Enter required capacity (e.g. 100 TPH)
                  </option>
                  <option>Up to 50 TPH</option>
                  <option>50 - 100 TPH</option>
                  <option>100 - 200 TPH</option>
                  <option>200 - 300 TPH</option>
                  <option>300+ TPH</option>
                </select>
              </label>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Button
                className="min-h-[4.4rem] whitespace-nowrap rounded-lg px-4 text-sm tracking-[0.03em]"
                type="submit"
              >
                <FileText aria-hidden size={23} strokeWidth={2} />
                Request Quote
              </Button>
              <Button
                className="min-h-[4.4rem] whitespace-nowrap rounded-lg px-4 text-sm tracking-[0.02em]"
                href="https://wa.me/919887537129"
                variant="outlineOrange"
              >
                <FaWhatsapp aria-hidden size={23} />
                WhatsApp Consultation
              </Button>
            </div>

            <p className="mt-7 flex items-center justify-center gap-3 text-sm text-text-muted">
              <Lock aria-hidden size={16} />
              Your information is safe with us.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
