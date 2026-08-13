import { Container } from "@/components/common/Container";
import { IndustryCard } from "@/components/common/IndustryCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { industries } from "@/data/homeData";

export function IndustriesSection() {
  return (
    <section className="section-space bg-white" id="about">
      <Container>
        <SectionHeader
          highlight="CRUSHING & SCREENING SOLUTIONS"
          subtitle="At Pithal Machines, we deliver reliable crushing and screening solutions for mining, infrastructure, cement, construction and other material-processing industries, engineered for productivity, efficiency and consistent performance."
          title="INDUSTRIES WE SERVE WITH"
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
