"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { products } from "@/data/homeData";
import { ArrowRight, Zap, Grid3x3, Boxes, Factory } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % products.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
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
        
        {/* Desktop View (Grid Layout) */}
        <div className="hidden md:flex flex-wrap justify-center gap-5">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="w-full md:w-[calc(50%-0.625rem)] xl:w-[calc(33.333%-0.85rem)] flex shrink-0"
            >
              <ProductCard {...product} icon={productIcons[index % productIcons.length]} />
            </div>
          ))}
        </div>

        {/* Mobile View (Slider Layout) */}
        <div 
          className="md:hidden relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={product.title}
                className="w-full flex-shrink-0 px-1"
              >
                <ProductCard {...product} icon={productIcons[index % productIcons.length]} />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to product slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-secondary" : "w-2.5 bg-primary/20"
                }`}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-9 text-center">
          <Button href="#contact" variant="outlineNavy">View All Products <ArrowRight aria-hidden size={14} /></Button>
        </div> */}
      </Container>
    </section>
  );
}
