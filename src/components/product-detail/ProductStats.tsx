import { Card } from "@/components/common/Card";
import { Container } from "@/components/common/Container";
import type { ProductStat, ProductStatsSectionData } from "@/data/products/productDetailTypes";
import { ProductCtaButton } from "./ProductCtaButton";
import { ProductIcon } from "./iconMap";
import { compactButtonClass } from "./styles";

function SplitSubtitle({ text }: { text: string }) {
  const sentences = text.split(". ").filter(Boolean);

  return (
    <>
      {sentences.map((sentence, index) => (
        <span className="block" key={sentence}>
          {sentence}
          {index < sentences.length - 1 ? "." : ""}
        </span>
      ))}
    </>
  );
}

function PerformanceStrip({ text }: { text: string }) {
  const performance = "Performance";
  const results = "Results";

  if (!text.includes(performance) || !text.includes(results)) {
    return (
      <div className="mx-auto mt-5 flex max-w-[520px] items-center justify-center gap-3 rounded-lg border border-secondary/35 bg-white px-4 py-2.5 text-center text-xs uppercase tracking-[0.04em] text-primary shadow-sm sm:rounded-none sm:[clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
        <ProductIcon name="shield" size={17} strokeWidth={1.8} />
        <p className="whitespace-nowrap text-[10px] sm:text-xs">{text}</p>
      </div>
    );
  }

  const [beforePerformance, afterPerformance = ""] = text.split(performance);
  const [betweenHighlights, afterResults = ""] = afterPerformance.split(results);

  return (
    <div className="mx-auto mt-5 flex max-w-[520px] items-center justify-center gap-3 rounded-lg border border-secondary/35 bg-white px-4 py-2.5 text-center text-xs uppercase tracking-[0.04em] text-primary shadow-sm sm:rounded-none sm:[clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
      <ProductIcon name="shield" size={17} strokeWidth={1.8} />
      <p className="whitespace-nowrap text-[10px] sm:text-xs">
        {beforePerformance}
        <span className="text-secondary">{performance}</span>
        {betweenHighlights}
        <span className="text-secondary">{results}</span>
        {afterResults}
      </p>
    </div>
  );
}

export function ProductStats({
  section,
  stats,
}: {
  section: ProductStatsSectionData;
  stats: ProductStat[];
}) {
  return (
    <section className="relative bg-white pb-8 pt-0 lg:pb-10">
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-80" />
      <div className="relative -mt-1 w-full border-y border-border/90 bg-white/96 py-7 shadow-[0_10px_24px_rgba(3,27,64,0.08)] lg:py-8">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-48 w-[38%] opacity-[0.06] lg:block">
          <div className="h-full w-full bg-[url('/images/hero/video-showcase-photo.jpg')] bg-cover bg-center" />
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <header className="relative mx-auto mb-6 max-w-4xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="hidden h-px flex-1 bg-secondary/75 md:block" />
              <span className="flex items-center gap-4 text-lg font-bold uppercase tracking-[0.08em] text-primary sm:text-xl sm:tracking-[0.1em]">
                <span className="text-secondary">{"///"}</span>
                <span>
                  <span className="text-secondary">{section.eyebrow.split(" ")[0]}</span>{" "}
                  {section.eyebrow.split(" ").slice(1).join(" ")}
                </span>
                <span className="text-secondary">{"///"}</span>
              </span>
              <span className="hidden h-px flex-1 bg-secondary/75 md:block" />
            </div>
            <h2 className="headline text-[clamp(1.8rem,9vw,2.2rem)] text-primary sm:text-[clamp(2rem,4.6vw,3.25rem)]">
              {section.title} <span className="text-secondary">{section.highlight}</span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
              <SplitSubtitle text={section.subtitle} />
            </p>
          </header>

          <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {stats.map((stat, index) => (
              <Card className="relative min-h-[210px] overflow-visible rounded-xl border-border bg-white px-3 py-4 text-center shadow-[0_6px_16px_rgba(3,27,64,0.1)]" key={stat.label}>
                <div className="mx-auto mb-4 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-dashed border-secondary bg-white text-primary">
                  <ProductIcon name={stat.icon} size={42} strokeWidth={1.55} />
                </div>
                <h3 className="text-[13px] font-black uppercase tracking-[0.02em] text-primary sm:text-sm">{stat.label}</h3>
                <span className="mx-auto mt-3 block h-[2px] w-7 bg-secondary" />
                {stat.label === "Application" ? (
                  <p className="mt-3 text-[13px] font-medium leading-[1.35] text-primary sm:text-sm">
                    {stat.value.split(", ").map((line) => (
                      <span className="block" key={line}>{line}</span>
                    ))}
                  </p>
                ) : (
                  <p className="headline mt-3 text-[clamp(1.8rem,2.6vw,2.4rem)] leading-none text-secondary">{stat.value}</p>
                )}
                {stat.unit && <p className="mt-1.5 text-[13px] font-medium leading-snug text-text-dark sm:text-sm">{stat.unit}</p>}
                {stat.description && <p className="mt-1.5 text-[10px] leading-4 text-text-muted">{stat.description}</p>}
                {index < stats.length - 1 && (
                  <span aria-hidden className="absolute -right-[11px] top-1/2 z-10 hidden h-7 w-5 -translate-y-1/2 bg-secondary [clip-path:polygon(0_0,55%_50%,0_100%,45%_100%,100%_50%,45%_0)] xl:block" />
                )}
              </Card>
            ))}
          </div>
          <PerformanceStrip text={section.ctaText} />
          {section.cta && (
            <div className="mt-4 flex justify-center">
              <ProductCtaButton className={`${compactButtonClass} min-h-9 px-4 text-[10px] tracking-[0.13em]`} cta={section.cta} iconSize={14} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
