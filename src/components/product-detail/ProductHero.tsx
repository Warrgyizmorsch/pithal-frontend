import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
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
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-primary-dark text-white lg:min-h-[800px]">
      <Image
        alt={data.image.alt}
        className="object-cover object-center"
        fill
        priority
        sizes="100vw"
        src={data.image.src}
      />
      <div className="absolute inset-0 bg-primary-dark/45 lg:bg-transparent" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(1,19,45,0.99)_0%,rgba(3,27,64,0.97)_31%,rgba(3,27,64,0.74)_48%,rgba(3,27,64,0.08)_72%)]" />
      <div className="absolute inset-y-0 left-0 hidden w-[62%] bg-primary-dark/80 [clip-path:polygon(0_0,83%_0,66%_100%,0_100%)] lg:block" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,rgba(255,255,255,.28)_1px,transparent_0)] [background-size:20px_20px]" />
      <div className="absolute left-[48%] top-0 hidden h-[3px] w-[22%] origin-left -rotate-[28deg] bg-secondary lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-secondary/45" />

      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1693px] flex-col px-6 pb-7 pt-9 sm:px-10 lg:min-h-[800px] lg:px-[68px]">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-4 text-[15px] font-medium text-white/90">
          {data.breadcrumb.map((item, index) => (
            <span className="flex items-center gap-5" key={item.label}>
              <Link className={index === data.breadcrumb.length - 1 ? "font-bold text-secondary" : "transition-colors hover:text-secondary"} href={item.href}>
                {index === 0 ? <Home aria-hidden size={23} /> : item.label}
              </Link>
              {index < data.breadcrumb.length - 1 && <ChevronRight aria-hidden className="text-white/55" size={15} />}
            </span>
          ))}
        </nav>

        <div className="mt-[70px] max-w-[780px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="mb-6 flex items-center justify-center lg:justify-start gap-4">
            <div className="min-w-[260px] sm:min-w-[330px] max-w-full">
              <p className="text-[18px] font-black uppercase leading-none tracking-[0.03em] text-secondary">{data.eyebrow}</p>
              <span className="mt-2.5 block h-[2px] w-full bg-secondary" />
            </div>
            <ProductIcon className="hidden text-secondary/80 sm:block" name="settings" size={28} strokeWidth={1.3} />
          </div>

          <h1 className="headline text-[clamp(2.5rem,8vw,7.35rem)] leading-[0.9] text-white lg:whitespace-nowrap">
            {data.title} <span className="text-secondary">{data.highlightedTitle}</span>
          </h1>
          <p className="mt-3 text-[clamp(1.45rem,2.6vw,1.95rem)] font-black uppercase leading-tight tracking-[0.12em] text-white lg:whitespace-nowrap">
            {data.subtitle}
          </p>
          <span className="mt-4 block h-2 w-40 bg-secondary [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] mx-auto lg:mx-0" />
          <p className="mt-6 max-w-[610px] text-[18px] font-medium leading-[1.45] text-white mx-auto lg:mx-0">
            <HeroDescription highlight={data.descriptionHighlight} text={data.description} />
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center lg:justify-start">
            {data.ctas.map((cta, index) => (
              <ProductCtaButton
                className={index === 1 ? secondaryHeroButtonClass : heroButtonClass}
                cta={cta}
                iconSize={21}
                key={cta.label}
              />
            ))}
          </div>
        </div>

        <div className="mt-auto w-full max-w-[820px] rounded-2xl border border-white/18 bg-primary-dark/95 lg:bg-primary-dark/60 px-7 py-6 shadow-[0_22px_55px_rgba(0,0,0,0.25)] backdrop-blur-md mx-auto lg:mx-0">
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
