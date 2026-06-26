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
    <section 
      className="relative min-h-[500px] lg:min-h-[600px] xl:min-h-[650px] flex flex-col justify-center overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2d4a 50%, #0d1929 100%)' }}
    >
      <div 
        className="absolute top-auto bottom-0 right-0 w-full h-[50%] md:top-0 md:bottom-auto md:h-full md:w-[65%] lg:w-[88%] pointer-events-none z-0
                   [clip-path:polygon(0_30%,100%_0,100%_100%,0%_100%)]
                   md:[clip-path:polygon(30%_0,100%_0,100%_100%,10%_100%)]
                   lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"
      >
        <Image
          alt={data.image.alt}
          className="object-contain object-center md:object-right"
          fill
          preload
          sizes="(max-width: 768px) 100vw, 65vw"
          src={data.image.src}
        />
        {/* Overlay fade effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/80 to-transparent md:hidden block" />
      </div>



      {/* Dots Pattern */}
      <div 
        className="absolute w-[100px] h-[100px] opacity-75 hidden md:block z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 2px)',
          backgroundSize: '15px 15px',
          top: '20%',
          left: '3%'
        }}
      />
      <div 
        className="absolute w-[100px] h-[100px] opacity-75 hidden md:block z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 2px, transparent 2px)',
          backgroundSize: '15px 15px',
          bottom: '25%',
          left: '40%'
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-secondary/45 z-10" />

      <div className="relative z-10 flex w-full max-w-[1520px] flex-col gap-10 px-5 sm:px-8 lg:px-10 py-8 lg:justify-between lg:py-10 mx-auto">
        <div className="max-w-[650px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <HeroNavigation
            current={currentLabel}
            eyebrow={data.eyebrow}
            light
            breadcrumbs={data.breadcrumb}
          />

          <h1 className="headline text-[clamp(2rem,6.2vw,4.8rem)] leading-[0.95] text-white">
            {data.title} <span className="text-secondary">{data.highlightedTitle}</span>
          </h1>
          <p className="mt-2 text-[clamp(1.1rem,1.8vw,1.4rem)] font-black uppercase leading-tight tracking-[0.12em] text-white">
            {data.subtitle}
          </p>
          <span className="mt-3 block h-1.5 w-32 bg-secondary [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] mx-auto lg:mx-0" />
          <p className="mt-5 max-w-[500px] text-[16px] font-medium leading-[1.45] text-white mx-auto lg:mx-0">
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
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/30">
            {data.quickStats.map((stat) => (
              <article className="flex flex-col items-center text-center sm:flex-row sm:text-left gap-2 sm:gap-4 lg:px-6 lg:first:pl-0 lg:last:pr-0" key={stat.label}>
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
