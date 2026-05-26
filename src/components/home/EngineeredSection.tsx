import Image from "next/image";
import { Container } from "@/components/common/Container";
import { FeatureCard } from "@/components/common/FeatureCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { features } from "@/data/homeData";

export function EngineeredSection() {
  return (
    <section className="overflow-hidden border-y border-border bg-white" id="solutions">
      <Container className="grid lg:grid-cols-[1.02fr_0.98fr]">
        <div className="section-space pr-0 lg:pr-14">
          <SectionHeader
            align="left"
            eyebrow="Why Choose Us"
            highlight="Built to Last."
            subtitle="Our innovative engineering, robust manufacturing and intelligent quality standards deliver crushing and screening solutions customers rely on."
            title="Engineered for More."
          />
          <div className="grid gap-x-7 gap-y-7 sm:grid-cols-2">
            {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
          </div>
        </div>
        <div className="relative min-h-[25rem] border-t-4 border-secondary lg:-mr-10 lg:min-h-full lg:border-l-4 lg:border-t-0 lg:[clip-path:polygon(11%_0,100%_0,100%_100%,0_100%)]">
          <Image alt="Engineered heavy duty crusher" className="object-cover" fill sizes="(max-width: 1024px) 100vw, 50vw" src="/images/hero/engineered-machine.svg" />
        </div>
      </Container>
    </section>
  );
}
