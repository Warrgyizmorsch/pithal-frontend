import { Container } from "@/components/common/Container";
import { ProjectCard } from "@/components/common/ProjectCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projects } from "@/data/homeData";
import { Button } from "@/components/common/Button";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="section-space industrial-grid border-y border-border bg-bg-light" id="projects">
      <Container>
        <SectionHeader
          align="left"
          eyebrow="Proven Performance"
          highlight="Real Results."
          subtitle="Installations built for hard rock, aggregate and infrastructure applications across global markets."
          title="Real Projects."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => <ProjectCard index={index} key={project.plant + project.location} {...project} />)}
        </div>
        <div className="mt-9 text-center">
          <Button href="#contact" variant="outlineNavy">View All Projects <ArrowRight aria-hidden size={14} /></Button>
        </div>
      </Container>
    </section>
  );
}
