"use client";

import React from "react";
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
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const sliderRef = React.useRef<HTMLDivElement | null>(null);

  const scrollSliderTo = React.useCallback((index: number) => {
    const slider = sliderRef.current;
    const slide = slider?.querySelector<HTMLElement>(
      `[data-project-slide="${index}"]`,
    );
    if (!slider || !slide) return;

    const sliderRect = slider.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const centeredLeft =
      slider.scrollLeft +
      slideRect.left -
      sliderRect.left -
      (slider.clientWidth - slide.offsetWidth) / 2;

    slider.scrollTo({
      behavior: "smooth",
      left: centeredLeft,
    });
  }, []);

  const scrollToProject = React.useCallback((index: number) => {
    const nextIndex = (index + projects.length) % projects.length;

    setActiveIndex(nextIndex);
    scrollSliderTo(nextIndex);
  }, [scrollSliderTo]);

  React.useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % projects.length;
        scrollSliderTo(nextIndex);

        return nextIndex;
      });
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isPaused, scrollSliderTo]);

  const handleScroll = React.useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slides = Array.from(
      slider.querySelectorAll<HTMLElement>("[data-project-slide]"),
    );
    const sliderCenter =
      slider.getBoundingClientRect().left + slider.clientWidth / 2;
    const closestSlide = slides.reduce(
      (closest, slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - sliderCenter);

        return distance < closest.distance
          ? { distance, index: Number(slide.dataset.projectSlide) }
          : closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: activeIndex },
    );

    if (closestSlide.index !== activeIndex) {
      setActiveIndex(closestSlide.index);
    }
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-1" id="projects">
      <div aria-hidden className="pointer-events-none absolute right-12 top-[-20px] hidden h-[400px] w-[55%] opacity-100 lg:block">
        <Image alt="World map background" className="object-contain object-center" fill priority sizes="50vw" src="/images/projects/world-map.jpg" />
      </div>
      <Container className="relative">
        <div className="mb-8 grid items-end gap-8 lg:grid-cols-[0.86fr_1.32fr]">
          <header>
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:mb-5 sm:text-[11px] sm:tracking-[0.25em]">
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
            <p className="mt-4 max-w-[28rem] text-sm leading-7 text-text-dark sm:text-base">
              Our machines are at the heart of some of the world&apos;s most demanding operations. Delivering unmatched
              performance, day in and day out.
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
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          <div
            aria-label="Projects carousel"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:-mx-10 lg:scroll-px-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
            onScroll={handleScroll}
            ref={sliderRef}
          >
            {projects.map((project, index) => (
              <div
                className="flex w-full shrink-0 snap-center sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
                data-project-slide={index}
                key={project.plant + project.location}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {projects.map((project, index) => (
            <button
              aria-label={`Show ${project.plant} in ${project.location}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-secondary" : "w-2.5 bg-primary/20"
              }`}
              key={project.plant + project.location}
              onClick={() => scrollToProject(index)}
              type="button"
            />
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          <Button className="w-full min-[420px]:w-auto min-[420px]:min-w-[15rem]" href="#contact" variant="outlineNavy">
            View All Projects <ArrowRight aria-hidden size={16} />
          </Button>
          <button aria-label="Previous projects" className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white" onClick={() => scrollToProject(activeIndex - 1)} type="button">
            <ArrowLeft aria-hidden size={16} />
          </button>
          <button aria-label="Next projects" className="flex h-12 w-12 items-center justify-center rounded-full border border-secondary/60 text-secondary transition-colors hover:bg-secondary hover:text-white" onClick={() => scrollToProject(activeIndex + 1)} type="button">
            <ArrowRight aria-hidden size={16} />
          </button>
        </div>
      </Container>
    </section>
  );
}
