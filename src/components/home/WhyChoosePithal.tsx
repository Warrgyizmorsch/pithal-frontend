import { Container } from "@/components/common/Container";
import Image from "next/image";
import {
  Factory,
  Headphones,
  Settings,
  ShieldCheck,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Precision Engineering",
    description:
      "Designed with advanced technology for maximum efficiency and reliability.",
    icon: Settings,
  },
  {
    title: "Global Quality Standards",
    description:
      "Manufactured under strict quality control with global certifications.",
    icon: ShieldCheck,
  },
  {
    title: "High Output Efficiency",
    description:
      "Optimized performance for higher productivity and lower operational costs.",
    icon: TrendingUp,
  },
  {
    title: "Custom Plant Solutions",
    description:
      "Tailor-made crushing and screening plants for diverse application needs.",
    icon: Factory,
  },
  {
    title: "Low Maintenance Design",
    description:
      "Built for toughness with easy maintenance and longer service life.",
    icon: Wrench,
  },
  {
    title: "After-Sales Support",
    description:
      "Dedicated support team ensuring maximum uptime and quick service.",
    icon: Headphones,
  },
];

export default function WhyChoosePithal() {
  return (
    <section
      className="relative overflow-hidden  bg-white"
      id="solutions"
    >
      <Container className="relative z-10 grid items-center border-b-[3px] border-secondary gap-8 lg:grid-cols-12">
        {/* Left Side: Content Column */}
        <div className="py-9 px-0 lg:col-span-6 lg:py-[clamp(2.3rem,3vw,3.1rem)] z-10">
          <div className="max-w-[42rem]">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.21em] text-secondary">
              <span aria-hidden className="flex gap-1">
                <span className="h-[6px] w-4 -skew-x-[32deg] bg-secondary" />
                <span className="h-[6px] w-4 -skew-x-[32deg] bg-secondary" />
                <span className="h-[6px] w-4 -skew-x-[32deg] bg-secondary" />
              </span>
              Why Choose Pithal
            </p>

            <h2 className="headline text-[clamp(1.9rem,9vw,2.2rem)] text-primary sm:text-[clamp(2.05rem,3.35vw,3.2rem)] pb-4">
              Engineered for More.
              <span className="mt-1 block text-secondary">Built to Last.</span>
            </h2>

            <span aria-hidden className="mt-4 block h-[3px] w-20 bg-secondary" />
            <p className="mt-3 max-w-[34rem] text-[0.8rem] leading-6 text-primary/85 sm:text-sm">
              At Pithal Machines, we combine innovative engineering, robust
              manufacturing, and stringent quality standards to deliver
              crushing and screening solutions that outperform in every
              condition.
            </p>

            <div className="mt-4 grid gap-x-7 sm:grid-cols-2">
              {features.map(({ title, description, icon: Icon }, index) => (
                <article
                  className={`flex gap-3 py-3 sm:min-h-[5.5rem] ${index < features.length - 1 ? "border-b border-border sm:border-b-0" : ""} ${index < 4 ? "sm:border-b sm:border-border" : ""}`}
                  key={title}
                >
                  <span className="flex h-[2.85rem] w-[2.85rem] shrink-0 items-center justify-center rounded border border-secondary/65 text-secondary">
                    <Icon aria-hidden size={23} strokeWidth={1.55} />
                  </span>
                  <div>
                    <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.04em] text-primary sm:text-[0.8rem]">
                      {title}
                    </h3>
                    <span aria-hidden className="my-1.5 block h-0.5 w-6 bg-secondary" />
                    <p className="text-[0.68rem] leading-[1.45] text-primary/85 sm:text-[0.73rem]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Desktop Image */}
        <div className="hidden lg:flex lg:col-span-6 lg:items-center lg:justify-end ">
          <div className="absolute right-0 top-[50%] hidden h-[min(36rem,95%)] w-[75vw] -translate-y-1/2 lg:block xl:h-[min(50rem,100%)] xl:w-full">
            <Image
              alt="Pithal engineered mobile crushing machine"
              className="h-full w-full object-cover object-right"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 1px"
              src="/images/hero/engineered-machine.png"
            />
          </div>
        </div>

        {/* Mobile Image Fallback inside the container */}
        <div className="relative z-0 mt-5 aspect-[1672/941] w-full max-h-[17rem] overflow-hidden sm:mt-7 sm:max-h-[22rem] lg:hidden rounded-[1.5rem] border border-secondary/10">
          <Image
            alt="Pithal engineered mobile crushing machine"
            className="object-cover"
            fill
            sizes="100vw"
            src="/images/hero/engineered-machine.png"
          />
        </div>
      </Container>
    </section>
  );
}