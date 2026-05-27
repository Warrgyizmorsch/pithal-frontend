import Image from "next/image";
import { Container } from "@/components/common/Container";
import { ProjectCard } from "@/components/common/ProjectCard";
import { projects } from "@/data/homeData";
import { Button } from "@/components/common/Button";
import { ArrowLeft, ArrowRight, BadgeCheck, Gauge, Headphones } from "lucide-react";

const proofPoints = [
  {
    icon: BadgeCheck,
    title: "High Reliability",
    text: "Engineered for continuous performance in the toughest conditions.",
  },
  {
    icon: Gauge,
    title: "Maximum Productivity",
    text: "Optimized solutions for higher output and better efficiency.",
  },
  {
    icon: Headphones,
    title: "Global Trust",
    text: "Trusted by leading mining and construction companies worldwide.",
  },
];

export function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16" id="projects">
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 hidden h-120 w-[70%] opacity-200 lg:block">
        <Image alt="World map background" className="object-cover object-right" fill priority sizes="50vw" src="/images/projects/world-map.jpg" />
      </div>
      <Container className="relative">
        <div className="mb-8 grid items-end gap-8 lg:grid-cols-[0.86fr_1.32fr]">
          <header>
            <p className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              <span aria-hidden className="flex gap-1">
                <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
              </span>
              Proven Performance
            </p>
            <h2 className="headline text-[clamp(2.5rem,4.7vw,4rem)] text-primary">
              Real Projects.
              <span className="mt-1 block text-secondary">Real Results.</span>
            </h2>
            <span aria-hidden className="mt-4 block h-[3px] w-20 bg-secondary" />
            <p className="mt-4 max-w-[28rem] text-sm leading-7 text-text-dark sm:text-base">
              Our machines are at the heart of some of the world&apos;s most demanding operations. Delivering unmatched
              performance, day in and day out.
            </p>
          </header>
          <div className="grid overflow-hidden rounded-lg border border-primary/20 bg-white/92 p-5 mb-10 sm:grid-cols-3">
            {proofPoints.map(({ icon: Icon, title, text }, index) => (
              <article className={`flex gap-4 py-2 ${index ? "sm:border-l sm:border-primary/20 sm:pl-5" : ""}`} key={title}>
                <Icon aria-hidden className="shrink-0 text-primary" size={43} strokeWidth={1.55} />
                <div>
                  <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.06em] text-primary">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-text-dark">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.plant + project.location} {...project} />)}
        </div>
        <div className="mt-7 flex items-center justify-center gap-5">
          <Button className="min-w-[15rem]" href="#contact" variant="outlineNavy">
            View All Projects <ArrowRight aria-hidden size={16} />
          </Button>
          <button aria-label="Previous projects" className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white" type="button">
            <ArrowLeft aria-hidden size={16} />
          </button>
          <button aria-label="Next projects" className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/60 text-secondary transition-colors hover:bg-secondary hover:text-white" type="button">
            <ArrowRight aria-hidden size={16} />
          </button>
        </div>
      </Container>
    </section>
  );
}
