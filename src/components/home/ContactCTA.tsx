import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { FileText, Lock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const fieldStyle =
  "mt-2 h-12 w-full rounded-lg border border-primary/20 bg-white px-4 text-sm font-normal text-text-dark outline-none transition-[border-color,box-shadow] placeholder:text-text-muted focus:border-secondary focus:shadow-[0_0_0_3px_rgba(250,89,2,0.10)]";

const labelStyle = "block text-sm font-bold text-primary";

export function ContactCTA() {
  return (
    <section className="scroll-mt-24 bg-white py-8 sm:py-10 lg:py-12" id="contact">
      <Container>
        <div className="overflow-hidden rounded-[1.15rem] border border-primary/80 lg:grid lg:h-[calc(100vh-8rem)] lg:min-h-[580px] lg:max-h-[750px] lg:grid-cols-[0.95fr_1.05fr] xl:h-[calc(100vh-8.5rem)]">
          <div className="relative min-h-[34rem] overflow-hidden sm:min-h-[39rem] lg:h-full lg:min-h-0">
            <Image
              alt="Crushing plant processing aggregates at a quarry"
              className="object-cover object-bottom"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              src="/images/contact/crushing-plant-contact.jpg"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,#fff_0%,#fff_43%,rgba(255,255,255,0.98)_51%,rgba(255,255,255,0.40)_62%,transparent_74%)]"
            />
            <div
              aria-hidden
              className="absolute inset-0 hidden bg-[linear-gradient(90deg,transparent_55%,#fff_98%)] lg:block"
            />
            <div className="relative px-5 pb-8 pt-7 min-[380px]:px-7 sm:px-10 sm:pt-10 lg:px-[clamp(2.3rem,3.3vw,4rem)] lg:pt-[clamp(2.3rem,3vw,3.4rem)]">
              <p className="mb-4 flex items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary min-[380px]:gap-3 min-[380px]:tracking-[0.2em] sm:text-[0.76rem]">
                <span aria-hidden className="flex gap-1">
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                </span>
                Get the Right Solution
                <span aria-hidden className="hidden gap-1 sm:flex">
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                  <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                </span>
              </p>
              <h2 className="headline text-[clamp(2.05rem,11.6vw,2.85rem)] text-primary sm:text-[clamp(2.55rem,3.5vw,3.7rem)]">
                Looking for the
                <span className="mt-1 block text-secondary">Right Crushing</span>
                <span className="mt-1 block text-secondary">Solution?</span>
              </h2>
              <span aria-hidden className="mt-4 block h-[3px] w-20 bg-gradient-to-r from-secondary via-secondary to-primary" />
              <p className="mt-4 max-w-[27rem] text-sm leading-7 text-text-dark sm:text-base">
                Share your requirements with us and our experts will help you find the perfect crushing solution for
                your business.
              </p>
            </div>
          </div>

          <form className="m-3 rounded-2xl border border-primary/20 bg-white px-4 py-6 min-[380px]:m-4 min-[380px]:px-5 sm:m-6 sm:px-7 sm:py-7 lg:m-[clamp(1.45rem,2.1vw,2.25rem)] lg:ml-0 lg:px-[clamp(1.65rem,2vw,2.1rem)] lg:h-[calc(100%-2*clamp(1.45rem,2.1vw,2.25rem))] lg:flex lg:flex-col lg:justify-between">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-3">
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

              <label className={`${labelStyle} lg:col-span-2`}>
                Requirement
                <textarea
                  className={`${fieldStyle} h-[5.75rem] lg:h-[4.25rem] resize-none py-3`}
                  name="requirement"
                  placeholder="Briefly describe your requirement"
                />
              </label>
            </div>

            <div className="mt-6 lg:mt-4 grid gap-3 lg:grid-cols-2 lg:gap-4">
              <Button
                className="min-h-[3.4rem] w-full rounded-lg px-3 text-sm tracking-[0.03em] sm:min-h-[3.7rem] sm:px-4"
                type="submit"
              >
                <FileText aria-hidden size={23} strokeWidth={2} />
                Request Quote
              </Button>
              <Button
                className="min-h-[3.4rem] w-full rounded-lg px-3 text-sm tracking-[0.02em] sm:min-h-[3.7rem] sm:px-4"
                href="https://wa.me/919887537129"
                variant="outlineNavy"
              >
                <FaWhatsapp aria-hidden size={23} />
                WhatsApp Consultation
              </Button>
            </div>

            <p className="mt-5 lg:mt-3 flex items-center justify-center gap-2 text-center text-sm text-text-muted sm:mt-6">
              <Lock aria-hidden className="shrink-0" size={16} />
              Your information is safe with us.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
