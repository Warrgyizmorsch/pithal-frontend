import Image from "next/image";
import { Container } from "@/components/common/Container";
import type { IntroCalloutPosition, ProductIntroData } from "@/data/products/productDetailTypes";
import { cn } from "@/lib/utils";
import { ProductCtaButton } from "./ProductCtaButton";
import { ProductIcon } from "./iconMap";
import { sectionPadding } from "./styles";

const calloutCardPositions: Record<IntroCalloutPosition, string> = {
  bottomCenter: "left-[43%] top-[80%]",
  leftBottom: "left-[12%] top-[58%]",
  leftTop: "left-[9%] top-[10%]",
  rightBottom: "right-[3%] top-[62%]",
  rightMiddle: "right-[4%] top-[39%]",
  rightTop: "right-[6%] top-[10%]",
};

const calloutDotPositions: Record<IntroCalloutPosition, string> = {
  bottomCenter: "left-[44%] top-[71%]",
  leftBottom: "left-[31%] top-[54%]",
  leftTop: "left-[37%] top-[25%]",
  rightBottom: "right-[19%] top-[58%]",
  rightMiddle: "right-[31%] top-[48%]",
  rightTop: "right-[25%] top-[25%]",
};

const calloutLinePositions: Record<IntroCalloutPosition, string> = {
  bottomCenter: "left-[45.5%] top-[73%] h-[72px] border-l",
  leftBottom: "left-[19%] top-[55%] h-px w-[110px] border-t",
  leftTop: "left-[26%] top-[19%] h-[70px] w-[120px] border-b border-l",
  rightBottom: "right-[15.5%] top-[60%] h-[82px] w-[82px] border-r border-t",
  rightMiddle: "right-[14%] top-[49%] h-px w-[130px] border-t",
  rightTop: "right-[17%] top-[20%] h-[70px] w-[92px] border-b border-r",
};

const introButtonClass = "min-h-12 w-full sm:w-auto sm:min-w-[190px] justify-center sm:justify-between gap-3 rounded-md px-5 text-[11px] font-black uppercase tracking-wider";
const overviewEyebrowClass = "flex items-center justify-center lg:justify-start gap-2.5 text-lg font-bold uppercase tracking-[0.08em] text-secondary";

function OverviewEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={overviewEyebrowClass}>
      <span aria-hidden>{"///"}</span>
      <span>{children}</span>
      <span aria-hidden>{"///"}</span>
    </p>
  );
}

export function ProductIntro({ data }: { data: ProductIntroData }) {
  return (
    <section className={`relative overflow-hidden bg-white ${sectionPadding}`}>
      <Container className="max-w-[1480px]">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-center">
          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-full">
              <OverviewEyebrow>{data.eyebrow}</OverviewEyebrow>
            </div>
            <h2 className="headline mt-5 text-[clamp(2.4rem,4.35vw,4rem)] leading-[0.96] text-primary text-center lg:text-left">
              {data.title}
              <span className="block text-secondary">{data.highlight}</span>
            </h2>
            <p className="mt-5 max-w-[560px] text-sm leading-7 text-text-dark sm:text-[15px] text-center lg:text-left mx-auto lg:mx-0">
              {data.description}
            </p>
            <span aria-hidden className="mt-7 block h-[2px] w-16 bg-secondary mx-auto lg:mx-0" />

            <div className="mt-7 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border w-full">
              {data.features.map((feature) => (
                <article className="px-2.5 flex flex-col items-center text-center lg:items-start lg:text-left" key={feature.title}>
                  <ProductIcon className="mb-4 text-secondary" name={feature.icon} size={42} strokeWidth={1.45} />
                  <h3 className="text-[11px] font-black uppercase tracking-[0.03em] text-primary">{feature.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-5 text-text-dark">{feature.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 w-full flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <ProductIcon className="text-secondary" name="settings" size={28} />
                <div>
                  <h3 className="text-base font-black uppercase tracking-[0.04em] text-primary">{data.applications.eyebrow}</h3>
                  <span className="mt-1.5 block h-[2px] w-9 bg-secondary mx-auto lg:mx-0" />
                </div>
              </div>
              <p className="mt-4 max-w-[570px] whitespace-pre-line text-sm leading-6 text-text-dark text-center lg:text-left mx-auto lg:mx-0">
                {data.applications.description}
              </p>
              <div className="mt-6 grid grid-cols-2 overflow-hidden rounded border-t border-l border-border sm:grid-cols-5 w-full">
                {data.applications.items.map((item) => (
                  <article className="flex min-h-[96px] flex-col items-center justify-center border-b border-r border-border p-3 text-center" key={item.label}>
                    <ProductIcon className="text-secondary" name={item.icon} size={38} strokeWidth={1.45} />
                    <h4 className="mt-2.5 text-[10px] font-black uppercase tracking-[0.03em] text-primary">{item.label}</h4>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row w-full justify-center lg:justify-start">
              {data.ctas.map((cta) => (
                <ProductCtaButton className={introButtonClass} cta={cta} iconSize={17} key={cta.label} />
              ))}
            </div>
          </div>

          <div>
            <div className="relative min-h-[320px] sm:min-h-[520px] lg:min-h-[680px]">
              <div className="absolute inset-0 border-l-2 border-secondary bg-bg-light [clip-path:polygon(8%_0,100%_0,100%_88%,92%_100%,16%_100%,0_86%,0_16%)]" />
              <div className="absolute inset-0 opacity-30 [clip-path:polygon(8%_0,100%_0,100%_88%,92%_100%,16%_100%,0_86%,0_16%)]">
                <Image
                  alt=""
                  aria-hidden
                  className="object-cover"
                  fill
                  sizes="(max-width: 1023px) 100vw, 55vw"
                  src="/images/hero/video-showcase-photo.jpg"
                />
              </div>
              <div className="absolute inset-0 bg-white/62 [clip-path:polygon(8%_0,100%_0,100%_88%,92%_100%,16%_100%,0_86%,0_16%)]" />
              <Image
                alt={data.image.alt}
                className="z-10 object-contain object-center p-5 drop-shadow-[0_24px_38px_rgba(3,27,64,0.16)] lg:p-8"
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                src={data.image.src}
              />

              {data.callouts.map((callout) => (
                <div key={callout.label}>
                  <span
                    aria-hidden
                    className={cn(
                      "absolute z-10 hidden border-dashed border-secondary/60 lg:block",
                      calloutLinePositions[callout.position],
                    )}
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "absolute z-20 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-secondary text-white shadow-md lg:flex",
                      calloutDotPositions[callout.position],
                    )}
                  >
                    <ProductIcon name="plus" size={13} strokeWidth={2.5} />
                  </span>
                  <article
                    className={cn(
                      "absolute z-20 hidden w-[160px] rounded-xl border border-border bg-white/95 p-3 shadow-[0_12px_28px_rgba(3,27,64,0.1)] lg:block",
                      calloutCardPositions[callout.position],
                    )}
                  >
                    <h3 className="text-[11px] font-black uppercase tracking-[0.03em] text-primary">{callout.label}</h3>
                    <p className="mt-2 text-[12px] leading-5 text-text-dark">{callout.text}</p>
                  </article>
                </div>
              ))}
            </div>

            {/* Mobile annotations grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden">
              {data.callouts.map((callout) => (
                <article
                  className="rounded-2xl border border-border bg-white p-4 shadow-sm"
                  key={callout.label}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-white shrink-0">
                      <ProductIcon name="plus" size={11} strokeWidth={2.5} />
                    </span>
                    <h3 className="text-xs font-black uppercase tracking-[0.03em] text-primary">{callout.label}</h3>
                  </div>
                  <p className="text-[13px] leading-5 text-text-dark">{callout.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
