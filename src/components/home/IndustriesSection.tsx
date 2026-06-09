import { Container } from "@/components/common/Container";
import { IndustryCard } from "@/components/common/IndustryCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { industries } from "@/data/homeData";

export function IndustriesSection() {
  return (
    <section className="section-space bg-white" id="about">
      <Container>
        <SectionHeader
          eyebrow="Industries We Serve"
          highlight="Building Nations."
          subtitle="Our crushing and screening solutions are trusted across a wide range of industries, delivering performance, reliability, and efficiency in every application."
          title="Powering Industries."
          underline
          className="[&_h2]:text-[clamp(1.4rem,5vw,2.4rem)] [&_h2]:sm:text-[clamp(1.6rem,3.2vw,2.6rem)] max-w-none"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => <IndustryCard key={industry.title} {...industry} />)}
        </div>
      </Container>
    </section>
  );
}
