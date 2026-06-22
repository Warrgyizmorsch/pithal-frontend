import Image from "next/image";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import type { ProductHeroData } from "@/data/products/productDetailTypes";
import { ProductCtaButton } from "./ProductCtaButton";
import { ProductIcon } from "./iconMap";

const heroButtonClass = "min-h-[58px] w-full sm:w-auto sm:min-w-[242px] justify-center gap-3 rounded-md px-6 !text-[14px] !font-black !tracking-[0.02em]";
const secondaryHeroButtonClass = `${heroButtonClass} border-secondary/80 bg-primary-dark/25 text-white hover:border-secondary hover:text-secondary`;

function HeroDescription({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>;
  }
  

  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="font-bold text-secondary">{highlight}</span>
      {after}
    </>
  );
}

export function ProductHero({ data }: { data: ProductHeroData }) {
  const currentLabel =
    data.breadcrumb[data.breadcrumb.length - 1]?.label ??
    `${data.title} ${data.highlightedTitle}`;

  return (
    <section className="relative isolate min-h-[calc(100svh-4.25rem)] overflow-hidden bg-primary-dark text-white sm:min-h-[calc(100svh-4.75rem)] xl:min-h-[calc(100svh-5.25rem)]">
      <Image
        alt={data.image.alt}
        className="object-cover object-center"
        fill
        preload
        sizes="100vw"
        src={data.image.src}
      />
      <div className="absolute inset-0 bg-primary-dark/45 lg:bg-transparent" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(1,19,45,0.99)_0%,rgba(3,27,64,0.97)_31%,rgba(3,27,64,0.74)_48%,rgba(3,27,64,0.08)_72%)]" />
      <div className="absolute inset-y-0 left-0 hidden w-[62%] bg-primary-dark/80 [clip-path:polygon(0_0,83%_0,66%_100%,0_100%)] lg:block" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,rgba(255,255,255,.28)_1px,transparent_0)] [background-size:20px_20px]" />
      <div className="absolute left-[48%] top-0 hidden h-[3px] w-[22%] origin-left -rotate-[28deg] bg-secondary lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-secondary/45" />

      <div className="relative z-10 flex min-h-[calc(100svh-4.25rem)] w-full max-w-[1520px] flex-col gap-10 px-10 py-6 lg:justify-between lg:py-8 sm:min-h-[calc(100svh-4.75rem)] xl:min-h-[calc(100svh-5.25rem)]">
        <div className="max-w-[780px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <HeroNavigation
            current={currentLabel}
            eyebrow={data.eyebrow}
            light
            breadcrumbs={data.breadcrumb}
          />

          <h1 className="headline text-[clamp(2rem,7vw,5.5rem)] leading-[0.95] text-white lg:whitespace-nowrap">
            {data.title} <span className="text-secondary">{data.highlightedTitle}</span>
          </h1>
          <p className="mt-2 text-[clamp(1.2rem,2.2vw,1.6rem)] font-black uppercase leading-tight tracking-[0.12em] text-white lg:whitespace-nowrap">
            {data.subtitle}
          </p>
          <span className="mt-3 block h-1.5 w-32 bg-secondary [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] mx-auto lg:mx-0" />
          <p className="mt-5 max-w-[580px] text-[16px] font-medium leading-[1.45] text-white mx-auto lg:mx-0">
            <HeroDescription highlight={data.descriptionHighlight} text={data.description} />
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center lg:justify-start">
            {data.ctas.map((cta, index) => (
              <ProductCtaButton
                className={index === 1 ? secondaryHeroButtonClass : heroButtonClass}
                cta={cta}
                iconSize={19}
                key={cta.label}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-auto w-full max-w-[820px] rounded-xl border border-white/18 bg-primary-dark/95 lg:bg-primary-dark/60 px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-md mx-auto lg:mx-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/30">
            {data.quickStats.map((stat) => (
              <article className="flex items-center gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0" key={stat.label}>
                <ProductIcon className="shrink-0 text-secondary" name={stat.icon} size={40} strokeWidth={1.55} />
                <p className="text-[15px] font-bold leading-tight text-white">
                  <span className="block">{stat.label}</span>
                  <span className="block">{stat.value}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
