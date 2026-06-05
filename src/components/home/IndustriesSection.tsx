"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { IndustryCard } from "@/components/common/IndustryCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { industries } from "@/data/homeData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function IndustriesSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const sliderRef = React.useRef<HTMLDivElement | null>(null);

  const scrollSliderTo = React.useCallback((index: number) => {
    const slider = sliderRef.current;
    const slide = slider?.querySelector<HTMLElement>(
      `[data-industry-slide="${index}"]`,
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

  const scrollToIndustry = React.useCallback((index: number) => {
    const nextIndex = (index + industries.length) % industries.length;

    setActiveIndex(nextIndex);
    scrollSliderTo(nextIndex);
  }, [scrollSliderTo]);

  React.useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % industries.length;
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
      slider.querySelectorAll<HTMLElement>("[data-industry-slide]"),
    );
    const sliderCenter =
      slider.getBoundingClientRect().left + slider.clientWidth / 2;
    const closestSlide = slides.reduce(
      (closest, slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - sliderCenter);

        return distance < closest.distance
          ? { distance, index: Number(slide.dataset.industrySlide) }
          : closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: activeIndex },
    );

    if (closestSlide.index !== activeIndex) {
      setActiveIndex(closestSlide.index);
    }
  }, [activeIndex]);

  return (
    <section className="section-space bg-white" id="about">
      <Container>
        <SectionHeader
          eyebrow="Industries We Serve"
          highlight="Building Nations."
          subtitle="Our crushing and screening solutions are trusted across a wide range of industries, delivering performance, reliability, and efficiency in every application."
          title="Powering Industries."
          underline
        />

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          <div
            aria-label="Industries carousel"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:-mx-10 lg:scroll-px-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
            onScroll={handleScroll}
            ref={sliderRef}
          >
            {industries.map((industry, index) => (
              <div
                className="w-full shrink-0 snap-center sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
                data-industry-slide={index}
                key={industry.title}
              >
                <IndustryCard {...industry} />
              </div>
            ))}
          </div>

          <button
            aria-label="Previous industry"
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_14px_30px_rgba(3,27,64,0.14)] transition-colors hover:border-secondary hover:text-secondary md:flex"
            onClick={() => scrollToIndustry(activeIndex - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden size={21} />
          </button>
          <button
            aria-label="Next industry"
            className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_14px_30px_rgba(3,27,64,0.14)] transition-colors hover:border-secondary hover:text-secondary md:flex"
            onClick={() => scrollToIndustry(activeIndex + 1)}
            type="button"
          >
            <ChevronRight aria-hidden size={21} />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {industries.map((industry, index) => (
            <button
              aria-label={`Show ${industry.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-secondary" : "w-2.5 bg-primary/20"
              }`}
              key={industry.title}
              onClick={() => scrollToIndustry(index)}
              type="button"
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
          <button
            aria-label="Previous industry"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm"
            onClick={() => scrollToIndustry(activeIndex - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden size={20} />
          </button>
          <button
            aria-label="Next industry"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm"
            onClick={() => scrollToIndustry(activeIndex + 1)}
            type="button"
          >
            <ChevronRight aria-hidden size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}
