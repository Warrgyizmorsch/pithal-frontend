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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-0">
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative flex min-w-0 items-center">
              <article className="flex h-full min-w-0 flex-1 flex-col rounded-2xl border-2 border-primary bg-white p-3 transition-all hover:border-primary/60 hover:shadow-md sm:p-4 xl:p-3">
                <div className="mb-3 flex items-start gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-lg font-black leading-none text-white">
                    {step.number}
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <h3 className="mb-1 text-[11px] font-bold uppercase leading-tight tracking-[0.08em] text-primary xl:text-[9px]">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-[1.5] text-text-dark xl:text-[10px]">
                      {step.text}
                    </p>
                  </div>
                </div>
                <div className="relative mt-auto h-36 w-full sm:h-40">
                  <Image
                    alt={step.title}
                    className="object-contain"
                    fill
                    sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 16.6vw"
                    src={step.image}
                  />
                </div>
              </article>

              {index < processSteps.length - 1 && (
                <div className="z-10 hidden shrink-0 items-center justify-center px-1 pb-14 xl:flex">
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

        <div className="mt-9 flex justify-center sm:mt-12">
          <Button
            className="w-full min-h-12 px-5 text-xs font-bold uppercase tracking-widest min-[420px]:w-auto sm:min-h-14 sm:px-10 sm:text-sm"
            href="#contact"
          >
            Explore Our Plant Solutions <ArrowRight aria-hidden size={18} />
          </Button>
        </div>

      </Container>
    </section>
  );
}
