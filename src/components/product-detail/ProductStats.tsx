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
  const [beforePerformance, afterPerformance = ""] = text.split(performance);
  const [betweenHighlights, afterResults = ""] = afterPerformance.split(results);

  return (
    <div className="mx-auto mt-8 flex max-w-[620px] items-center justify-center gap-4 border border-secondary/35 bg-white px-6 py-3.5 text-center text-[15px] uppercase tracking-[0.04em] text-primary shadow-sm rounded-lg sm:rounded-none sm:[clip-path:polygon(4%_0,96%_0,100%_50%,96%_100%,4%_100%,0_50%)]">
      <ProductIcon name="shield" size={22} strokeWidth={1.8} />
      <p>
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
    <section className="relative bg-white px-3 pb-12 pt-0 sm:px-4 lg:pb-16">
      <div className="pointer-events-none absolute inset-0 industrial-grid opacity-80" />
      <Container className="relative -mt-1 max-w-[1710px] rounded-[22px] border border-border/90 bg-white/96 px-6 py-12 shadow-[0_16px_36px_rgba(3,27,64,0.12)] sm:px-10 lg:px-12 lg:py-14">
        <div className="pointer-events-none absolute right-0 top-0 hidden h-72 w-[42%] opacity-[0.08] lg:block">
          <div className="h-full w-full bg-[url('/images/hero/video-showcase-photo.jpg')] bg-cover bg-center" />
        </div>

        <header className="relative mx-auto mb-8 max-w-5xl text-center">
          <div className="mb-6 flex items-center justify-center gap-5">
            <span className="hidden h-px flex-1 bg-secondary/75 md:block" />
            <span className="flex items-center gap-6 text-[18px] font-medium uppercase tracking-[0.18em] text-primary">
              <span className="text-secondary">{"////"}</span>
              <span>
                <span className="text-secondary">{section.eyebrow.split(" ")[0]}</span>{" "}
                {section.eyebrow.split(" ").slice(1).join(" ")}
              </span>
              <span className="text-secondary">{"////"}</span>
            </span>
            <span className="hidden h-px flex-1 bg-secondary/75 md:block" />
          </div>
          <h2 className="headline text-[clamp(2.35rem,5vw,4rem)] text-primary">
            {section.title} <span className="text-secondary">{section.highlight}</span>
          </h2>
          <p className="mt-3 text-[17px] leading-[1.45] text-text-dark">
            <SplitSubtitle text={section.subtitle} />
          </p>
        </header>

        <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stats.map((stat, index) => (
            <Card className="relative min-h-[340px] overflow-visible rounded-lg border-border bg-white px-5 py-8 text-center shadow-[0_8px_22px_rgba(3,27,64,0.12)]" key={stat.label}>
              <div className="mx-auto mb-7 flex h-[104px] w-[104px] items-center justify-center rounded-full border border-dashed border-secondary bg-white text-primary">
                <ProductIcon name={stat.icon} size={56} strokeWidth={1.45} />
              </div>
              <h3 className="text-[20px] font-black uppercase tracking-[0.02em] text-primary">{stat.label}</h3>
              <span className="mx-auto mt-5 block h-[2px] w-9 bg-secondary" />
              {stat.label === "Application" ? (
                <p className="mt-6 text-[18px] font-medium leading-[1.45] text-primary">
                  {stat.value.split(", ").map((line) => (
                    <span className="block" key={line}>{line}</span>
                  ))}
                </p>
              ) : (
                <p className="headline mt-6 text-[clamp(3rem,4vw,4rem)] leading-none text-secondary">{stat.value}</p>
              )}
              {stat.unit && <p className="mt-2.5 text-[20px] font-medium leading-snug text-text-dark">{stat.unit}</p>}
              {stat.description && <p className="mt-2.5 text-xs leading-5 text-text-muted">{stat.description}</p>}
              {index < stats.length - 1 && (
                <span aria-hidden className="absolute -right-[17px] top-1/2 z-10 hidden h-10 w-8 -translate-y-1/2 bg-secondary [clip-path:polygon(0_0,55%_50%,0_100%,45%_100%,100%_50%,45%_0)] xl:block" />
              )}
            </Card>
          ))}
        </div>
        <PerformanceStrip text={section.ctaText} />
        {section.cta && (
          <div className="mt-5 flex justify-center">
            <ProductCtaButton className={compactButtonClass} cta={section.cta} />
          </div>
        )}
      </Container>
    </section>
  );
}
