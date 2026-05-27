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

        {/* Section Header */}
        <SectionHeader
          eyebrow="Smart Crushing Process"
          title="Built for Maximum Efficiency."
          highlight="Engineered to Perform."
          subtitle="Our advanced crushing plants are designed to deliver maximum reduction, consistent quality, and higher productivity."
        />

        {/* ── Process Steps Grid ── */}
        <div className="relative flex items-stretch gap-0">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative flex items-center flex-1 min-w-0">

              {/* Card */}
              <article className="flex-1 min-w-0 h-full rounded-2xl border-2 border-primary bg-white p-3 flex flex-col transition-all hover:border-primary/60 hover:shadow-md">

                {/* Top: Number + Title + Description */}
                <div className="flex items-start gap-2 mb-3">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white text-lg font-black font-condensed leading-none">
                    {step.number}
                  </div>

                  {/* Title + Description */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.1em] text-primary leading-tight mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[10px] leading-[1.55] text-text-dark">
                      {step.text}
                    </p>
                  </div>
                </div>

                {/* Step Image */}
                <div className="relative h-40 w-full mt-auto">
                  <Image
                    alt={step.title}
                    className="object-contain"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 16.6vw"
                    src={step.image}
                  />
                </div>
              </article>

              {/* Orange Arrow Connector */}
              {index < processSteps.length - 1 && (
                <div className="flex-shrink-0 flex items-center justify-center px-1 pb-14 z-10">
                  <ArrowRight
                    aria-hidden
                    className="text-secondary"
                    size={24}
                    strokeWidth={2.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <div className="mt-12 flex justify-center">
          <Button
            className="min-h-14 px-10 text-sm font-bold tracking-widest uppercase"
            href="#contact"
          >
            Explore Our Plant Solutions <ArrowRight aria-hidden size={18} />
          </Button>
        </div>

      </Container>
    </section>
  );
}