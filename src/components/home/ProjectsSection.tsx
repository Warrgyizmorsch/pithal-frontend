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
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-1" id="projects">
      <div aria-hidden className="pointer-events-none absolute right-6 top-[-40px] hidden h-[520px] w-[65%] opacity-100 lg:block">
        <Image alt="World map background" className="object-contain object-center" fill priority sizes="60vw" src="/images/projects/world-map.jpg" />
      </div>
      <Container className="relative">
        <div className="mb-8 grid items-end gap-8 lg:grid-cols-[0.86fr_1.32fr]">
          <header>
            <p className="mb-4 flex items-center gap-3 text-lg font-bold uppercase tracking-[0.1em] text-primary sm:mb-5 sm:text-lg sm:tracking-[0.25em]">
              <span aria-hidden className="flex gap-1">
                <span className="h-[6px] w-3 -skew-x-[30deg] bg-secondary" />
                <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
                <span className="h-[6px] w-3 -skew-x-[30deg] bg-primary" />
              </span>
              Proven Performance
            </p>
            <h2 className="headline text-[clamp(2rem,11vw,2.5rem)] text-primary sm:text-[clamp(2.5rem,4.7vw,4rem)]">
              Real Projects.
              <span className="mt-1 block text-secondary">Real Results.</span>
              
            </h2>
            <span aria-hidden className="mt-4 block h-[3px] w-20 bg-secondary" />
            <div className="mt-4 max-w-[28rem] text-sm leading-7 text-text-dark sm:text-base">
              Our machines are at the heart of some of the world&apos;s most demanding operations. Delivering unmatched
              performance, day in and day out.
            </div>
            <p className="flex sm:inline-flex items-center gap-2 rounded-2xl sm:rounded-full border border-red-500/30 bg-red-500/5 px-4 py-2 text-[13px] sm:text-[15px] font-bold text-red-600 mt-3 w-fit sm:whitespace-nowrap">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
              </span>
              Note: These are sample projects for demonstration purposes only.
            </p>
          </header>
          <div className="mb-2 grid gap-4 overflow-hidden rounded-lg border border-primary/20 bg-white/92 p-4 md:grid-cols-3 md:gap-0 md:p-5 lg:mb-10">
            {proofPoints.map(({ icon: Icon, title, text }, index) => (
              <article className={`flex gap-3 py-2 ${index ? "border-t border-primary/20 pt-5 md:border-l md:border-t-0 md:pl-5 md:pt-2" : ""}`} key={title}>
                <Icon aria-hidden className="h-9 w-9 shrink-0 text-primary sm:h-[43px] sm:w-[43px]" strokeWidth={1.55} />
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
        {/* <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Button className="w-full min-[420px]:w-auto min-[420px]:min-w-[15rem]" href="#contact" variant="outlineNavy">
            View All Projects <ArrowRight aria-hidden size={16} />
          </Button>
          <button aria-label="Previous projects" className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white" type="button">
            <ArrowLeft aria-hidden size={16} />
          </button>
          <button aria-label="Next projects" className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/60 text-secondary transition-colors hover:bg-secondary hover:text-white" type="button">
            <ArrowRight aria-hidden size={16} />
          </button>
        </div> */}
      </Container>
    </section>
  );
}
