"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { IndustryApplication, SectionCopy } from "@/data/products/productDetailTypes";
import { ProductIcon } from "./iconMap";
import { actionLinkClass, sectionPadding } from "./styles";

export function IndustryApplications({
  section,
  industries,
}: {
  section: SectionCopy;
  industries: IndustryApplication[];
}) {
  return (
    <section className={`industrial-grid bg-white ${sectionPadding}`}>
      <Container>
        <SectionHeader eyebrow={section.eyebrow} highlight={section.highlight} subtitle={section.subtitle} title={section.title} />
        <MobileCarousel className="gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <article className="group relative min-h-[360px] overflow-hidden rounded-2xl bg-slate-950 text-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(3,27,64,0.35)]" key={industry.title}>
              <Image
                alt={industry.image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                fill
                sizes="(max-width: 1023px) 100vw, 20vw"
                src={industry.image.src}
              />
              {/* Reduced darkness from top 50% */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/98 from-0% via-slate-950/70 via-40% to-transparent to-[75%]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                {/* Spinning dashed circle around steady icon */}
                <span className="relative mb-4 flex h-11 w-11 items-center justify-center shrink-0">
                  <span className="absolute inset-0 rounded-full border border-dashed border-secondary bg-white animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
                  <span className="relative z-10 text-secondary flex items-center justify-center">
                    <ProductIcon name={industry.icon} size={20} />
                  </span>
                </span>
                <h3 className="text-lg font-bold uppercase tracking-[0.18em] text-white">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{industry.description}</p>
                <Link className={`mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-secondary ${actionLinkClass}`} href={industry.href}>
                  {industry.actionLabel}
                  <ProductIcon name="arrow" size={14} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </MobileCarousel>

        <div className="mt-10 rounded-2xl border border-border/70 bg-white px-6 py-6 shadow-sm sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-12 w-12 min-w-[3rem] items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <ProductIcon name="shield" size={20} />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  One Solution. Multiple Applications. <span className="text-secondary">Maximum Results.</span>
                </p>
                <p className="mt-2 text-sm text-text-muted">
                  Engineered to perform. Built to last.
                </p>
              </div>
            </div>
            <Button href="#contact" variant="primary" className="mt-3 min-h-12 sm:mt-0">
              Request Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface MobileCarouselProps {
  children: React.ReactNode;
  className?: string; // The grid class for desktop
}

function MobileCarousel({ children, className }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const childrenArray = React.Children.toArray(children);

  // Use IntersectionObserver to update currentIndex when user swipes manually
  useEffect(() => {
    if (!scrollRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentIndex(index);
          }
        });
      },
      {
        root: scrollRef.current,
        threshold: 0.6, // Fire when 60% of the card is visible
      }
    );

    const childNodes = scrollRef.current.children;
    for (let i = 0; i < childNodes.length; i++) {
      observer.observe(childNodes[i]);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        const childLeft = child.offsetLeft;
        const childWidth = child.offsetWidth;
        const containerWidth = container.offsetWidth;
        // Calculate position to center the child
        const scrollPosition = childLeft - (containerWidth / 2) + (childWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, []);

  const handleNext = useCallback(() => {
    scrollToIndex((currentIndex + 1) % childrenArray.length);
  }, [currentIndex, childrenArray.length, scrollToIndex]);

  const handlePrev = useCallback(() => {
    scrollToIndex((currentIndex - 1 + childrenArray.length) % childrenArray.length);
  }, [currentIndex, childrenArray.length, scrollToIndex]);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500); // 3.5 seconds
    
    // Interval restarts when currentIndex changes (manual swipe or auto-slide)
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
      {/* Mobile Slider View */}
      <div className="block md:hidden w-full relative group pb-1">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full no-scrollbar pb-1 items-stretch"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {childrenArray.map((child, idx) => (
            <div 
              key={idx} 
              data-index={idx}
              className="w-full shrink-0 snap-center px-1 flex flex-col"
            >
              <div className="h-full w-full flex flex-col">
                {child}
              </div>
            </div>
          ))}
        </div>
        
        {/* Arrows and Dots */}
        <div className="flex justify-center items-center gap-5 mt-2">
          <button 
            onClick={handlePrev}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-primary hover:bg-secondary hover:text-white transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5">
            {childrenArray.map((_, idx) => (
              <span 
                key={idx} 
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === currentIndex ? "bg-secondary w-4" : "bg-slate-300 w-1.5"
                )}
              />
            ))}
          </div>
          <button 
            onClick={handleNext}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-primary hover:bg-secondary hover:text-white transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      {/* Desktop Grid View */}
      <div className={cn("hidden md:grid mt-8", className)}>
        {children}
      </div>
    </>
  );
}
