import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { ProcessStep, SectionCopy } from "@/data/products/productDetailTypes";
import { ProductIcon } from "./iconMap";
import { sectionPadding } from "./styles";

const benefitIcons: Record<string, string> = {
  target: "/icons/high-efficiency.png",
  settings: "/icons/reliable-performace.png",
  shield: "/icons/consistance-quality.png",
  handCoins: "/icons/cost-effective.png",
};

const processBenefits = [
  {
    icon: "target",
    title: "High Efficiency",
    description: "Optimized process flow for maximum productivity.",
  },
  {
    icon: "settings",
    title: "Reliable Performance",
    description: "Engineered for continuous operation in tough conditions.",
  },
  {
    icon: "shield",
    title: "Consistent Quality",
    description: "Precise crushing & screening for uniform output.",
  },
  {
    icon: "handCoins",
    title: "Cost Effective",
    description: "Lower operating cost with higher return on investment.",
  },
];

export function ProcessTimeline({
  section,
  steps,
}: {
  section: SectionCopy;
  steps: ProcessStep[];
}) {
  return (
    <section className={`bg-bg-light ${sectionPadding}`}>
      <Container>
        <SectionHeader
          eyebrow={section.eyebrow}
          highlight={section.highlight}
          title={section.title}
          className="max-w-full"
        />
        {section.subtitle && (
          <p className="mx-auto mt-4 max-w-3xl text-center leading-8 text-text-muted sm:text-lg">
            {section.subtitle}
          </p>
        )}

        <div className="mt-12 grid gap-5 items-stretch sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.number} className="relative h-full">
              <article className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-border bg-white shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
                <div className="relative rounded-t-[1.5rem] pt-6 bg-slate-50">
                  <div className="relative h-[180px] overflow-hidden rounded-t-[1.5rem]">
                    <Image
                      alt={step.image.alt}
                      className="object-contain p-4"
                      fill
                      sizes="(max-width: 1000px) 100vw, 20vw"
                      src={step.image.src}
                    />
                  </div>
                  <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-secondary/20 bg-white text-secondary shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                      {step.iconFile ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          alt={`${step.title} icon`}
                          src={`/icons/${step.iconFile}`}
                          style={{ width: 34, height: 34, objectFit: "contain", maxWidth: "none" }}
                        />
                      ) : (
                        <ProductIcon name={step.icon ?? "target"} size={20} strokeWidth={2} />
                      )}
                    </span>
                  </div>
                </div>

                <div className="relative flex-1 px-6 pb-6 pt-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold uppercase tracking-[0.1em] text-secondary">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary">
                          {step.title}
                        </h3>
                        <span className="mt-2 block h-[2px] w-10 rounded-full bg-secondary" />
                      </div>
                    </div>
                    <p className="text-sm leading-6 text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>

              {index !== steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-1.7rem] top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-lg xl:flex z-20">
                  <ProductIcon name="arrow" size={18} strokeWidth={2.5} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-12 flex items-center justify-between gap-6 rounded-2xl bg-white border-[1.5px] border-border shadow-[0_16px_36px_rgba(15,23,42,0.08)] max-lg:flex-wrap max-sm:flex-col max-sm:gap-4"
          style={{
            padding: "20px 32px",
          }}
        >
          {processBenefits.map((benefit, index) => (
            <div
              className={
                `flex items-start gap-3.5 flex-1 min-w-0 ${
                  index < processBenefits.length - 1
                    ? "border-r border-border pr-6 max-lg:border-r-0 max-lg:pr-0"
                    : ""
                } max-lg:basis-[calc(50%-10px)] max-sm:basis-full`
              }
              key={benefit.title}
            >
              <span
                className="flex shrink-0 items-center justify-center rounded-full bg-white"
                style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  minHeight: 48,
                  border: "1.5px solid var(--border)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src={benefitIcons[benefit.icon] ?? ""}
                  style={{ width: 28, height: 28, objectFit: "contain", maxWidth: "none" }}
                />
              </span>
              <div>
                <h4
                  className="uppercase text-primary"
                  style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em", lineHeight: 1.2 }}
                >
                  {benefit.title}
                </h4>
                <p
                  className="mt-1 text-text-muted"
                  style={{ fontSize: "0.75rem", lineHeight: 1.6 }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
