"use client";

import React from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { products } from "@/data/homeData";
import {
  ArrowRight,
  Boxes,
  ChevronLeft,
  ChevronRight,
  Factory,
  Grid3x3,
  Zap,
} from "lucide-react";

const productIcons = [
  <div key="crushers" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Zap className="text-secondary" size={24} />
  </div>,
  <div key="screening" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Grid3x3 className="text-secondary" size={24} />
  </div>,
  <div key="feeders" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Boxes className="text-secondary" size={24} />
  </div>,
  <div key="plants" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Factory className="text-secondary" size={24} />
  </div>,
];

export function ProductCategories() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const sliderRef = React.useRef<HTMLDivElement | null>(null);

  const scrollSliderTo = React.useCallback((index: number) => {
    const slider = sliderRef.current;
    const slide = slider?.querySelector<HTMLElement>(
      `[data-product-slide="${index}"]`,
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

  const scrollToProduct = React.useCallback((index: number) => {
    const nextIndex = (index + products.length) % products.length;

    setActiveIndex(nextIndex);
    scrollSliderTo(nextIndex);
  }, [scrollSliderTo]);

  React.useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % products.length;
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
      slider.querySelectorAll<HTMLElement>("[data-product-slide]"),
    );
    const sliderCenter =
      slider.getBoundingClientRect().left + slider.clientWidth / 2;
    const closestSlide = slides.reduce(
      (closest, slide) => {
        const slideRect = slide.getBoundingClientRect();
        const slideCenter = slideRect.left + slideRect.width / 2;
        const distance = Math.abs(slideCenter - sliderCenter);
        return distance < closest.distance
          ? { distance, index: Number(slide.dataset.productSlide) }
          : closest;
      },
      { distance: Number.POSITIVE_INFINITY, index: activeIndex },
    );

    if (closestSlide.index !== activeIndex) {
      setActiveIndex(closestSlide.index);
    }
  }, [activeIndex]);

  return (
    <section className="section-space bg-bg-light" id="products">
      
      <Container>
        
        <SectionHeader
          eyebrow="Our Products"
          highlight="Engineered for Results."
          subtitle="High-performance crushing and screening solutions designed to deliver maximum productivity, reliability and value in every operation."
          title="Built for Performance."
        />
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchEnd={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
        >
          <div
            aria-label="Product carousel"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:-mx-10 lg:scroll-px-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
            onScroll={handleScroll}
            ref={sliderRef}
          >
            {products.map((product, index) => (
              <div
                className="flex w-full shrink-0 snap-center md:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.85rem)]"
                data-product-slide={index}
                key={product.title}
              >
                <ProductCard
                  {...product}
                  icon={productIcons[index % productIcons.length]}
                />
              </div>
            ))}
          </div>

          <button
            aria-label="Previous product"
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_14px_30px_rgba(3,27,64,0.14)] transition-colors hover:border-secondary hover:text-secondary md:flex"
            onClick={() => scrollToProduct(activeIndex - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden size={21} />
          </button>
          <button
            aria-label="Next product"
            className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-[0_14px_30px_rgba(3,27,64,0.14)] transition-colors hover:border-secondary hover:text-secondary md:flex"
            onClick={() => scrollToProduct(activeIndex + 1)}
            type="button"
          >
            <ChevronRight aria-hidden size={21} />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {products.map((product, index) => (
            <button
              aria-label={`Show ${product.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-secondary" : "w-2.5 bg-primary/20"
              }`}
              key={product.title}
              onClick={() => scrollToProduct(index)}
              type="button"
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
          <button
            aria-label="Previous product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm"
            onClick={() => scrollToProduct(activeIndex - 1)}
            type="button"
          >
            <ChevronLeft aria-hidden size={20} />
          </button>
          <button
            aria-label="Next product"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm"
            onClick={() => scrollToProduct(activeIndex + 1)}
            type="button"
          >
            <ChevronRight aria-hidden size={20} />
          </button>
        </div>

        <div className="mt-9 text-center">
          <Button href="#contact" variant="outlineNavy">View All Products <ArrowRight aria-hidden size={14} /></Button>
        </div>
      </Container>
    </section>
  );
}
