import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { IndustryApplication, SectionCopy } from "@/data/products/productDetailTypes";
import { ProductIcon } from "./iconMap";
import { actionLinkClass, sectionPadding } from "./styles";

export function IndustryApplications({
  section,
  industries,
}: {
  section: SectionCopy;
  industries: IndustryApplication[];
}) {
  return (
    <section className={`industrial-grid bg-white ${sectionPadding}`}>
      <Container>
        <SectionHeader eyebrow={section.eyebrow} highlight={section.highlight} subtitle={section.subtitle} title={section.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <article className="group relative min-h-[360px] overflow-hidden rounded-2xl bg-slate-950 text-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(3,27,64,0.35)]" key={industry.title}>
              <Image
                alt={industry.image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                fill
                sizes="(max-width: 1023px) 100vw, 20vw"
                src={industry.image.src}
              />
              {/* Reduced darkness from top 50% */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/98 from-0% via-slate-950/70 via-40% to-transparent to-[75%]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                {/* Spinning dashed circle around steady icon */}
                <span className="relative mb-4 flex h-11 w-11 items-center justify-center shrink-0">
                  <span className="absolute inset-0 rounded-full border border-dashed border-secondary bg-white animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
                  <span className="relative z-10 text-secondary flex items-center justify-center">
                    <ProductIcon name={industry.icon} size={20} />
                  </span>
                </span>
                <h3 className="text-lg font-bold uppercase tracking-[0.18em] text-white">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{industry.description}</p>
                <Link className={`mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-secondary ${actionLinkClass}`} href={industry.href}>
                  {industry.actionLabel}
                  <ProductIcon name="arrow" size={14} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/70 bg-white px-6 py-6 shadow-sm sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 min-w-[3rem] items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <ProductIcon name="shield" size={20} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  One Solution. Multiple Applications. <span className="text-secondary">Maximum Results.</span>
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Engineered to perform. Built to last.
                </p>
              </div>
            </div>
            <Button href="#contact" variant="primary" className="mt-3 min-h-12 sm:mt-0">
              Request Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
