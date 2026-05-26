import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { processSteps } from "@/data/homeData";
import { ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  return (
    <section className="section-space bg-white">
      <Container>
        <SectionHeader
          eyebrow="Smart Crushing Process"
          highlight="Engineered to Perform."
          subtitle="Our advanced crushing plants deliver maximum reduction, consistent quality and higher productivity."
          title="Built for Maximum Efficiency."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
          {processSteps.map((step, index) => (
            <article className="relative border border-border bg-white p-3" key={step.number}>
              {index < processSteps.length - 1 && (
                <ArrowRight aria-hidden className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 bg-white text-secondary lg:block" size={17} />
              )}
              <div className="flex items-start gap-2">
                <span className="text-sm font-black text-secondary">{step.number}</span>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wide text-primary">{step.title}</h3>
                  <p className="mt-1 text-[10px] leading-4 text-text-muted">{step.text}</p>
                </div>
              </div>
              <div className="relative mt-4 h-32">
                <Image alt={step.title} className="object-contain" fill sizes="(max-width: 1024px) 50vw, 16vw" src={step.image} />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Button href="#contact">Explore Our Plant Solutions <ArrowRight aria-hidden size={14} /></Button>
        </div>
      </Container>
    </section>
  );
}
