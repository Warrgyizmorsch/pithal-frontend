"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/common/Container";
import { products as homeProducts } from "@/data/homeData";
import type { RelatedMachine, SectionCopy } from "@/data/products/productDetailTypes";
import { sectionPadding } from "./styles";

const coneIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 20l7-15 7 15H5z" />
    <path d="M8 14h8" />
    <path d="M10 9h4" />
  </svg>
);

const vsiIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
  </svg>
);

const feederIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18v4l-4 6H7l-4-6V6z" />
    <path d="M7 16l-2 5M17 16l2 5" />
  </svg>
);

const screenIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M3 14h18" />
    <path d="M9 4v16M15 4v16" />
  </svg>
);

const conveyorIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="18" height="6" rx="3" />
    <circle cx="6" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
    <path d="M4 15l2 4h12l2-4" />
  </svg>
);

const jawIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v18" />
    <path d="M18 3l-8 18" />
    <path d="M6 8h6M6 14h4" />
  </svg>
);

export function RelatedMachines({
  section,
}: {
  section: SectionCopy;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const displayMachines = useMemo<RelatedMachine[]>(() => {
    return homeProducts.map((product) => {
      const normalizedTitle = product.title.toLowerCase();
      let icon = "cone";

      if (normalizedTitle.includes("jaw")) icon = "jaw";
      else if (normalizedTitle.includes("vsi")) icon = "vsi";
      else if (normalizedTitle.includes("screen")) icon = "screen";
      else if (normalizedTitle.includes("conveyor")) icon = "conveyor";
      else if (normalizedTitle.includes("bucket")) icon = "feeder";
      else if (normalizedTitle.includes("complete")) icon = "settings";
      else if (normalizedTitle.includes("ultrarock")) icon = "cone";

      return {
        title: product.title,
        description: product.description,
        image: { src: product.image, alt: product.title },
        category: product.title,
        icon,
        href: product.href,
        actionLabel: "VIEW DETAILS",
      };
    });
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const originalLength = displayMachines.length;
  const extendedMachines = useMemo(() => [...displayMachines, ...displayMachines], [displayMachines]);

  useEffect(() => {
    if (originalLength <= visibleCards) return;

    const timer = window.setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [originalLength, visibleCards]);

  useEffect(() => {
    if (activeIndex >= originalLength) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex((prev) => prev - originalLength);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, originalLength]);

  useEffect(() => {
    if (!isTransitioning) {
      const frame = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning]);

  const renderIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "cone":
        return coneIcon;
      case "jaw":
        return jawIcon;
      case "vsi":
        return vsiIcon;
      case "feeder":
        return feederIcon;
      case "screen":
        return screenIcon;
      case "conveyor":
        return conveyorIcon;
      case "settings":
        return coneIcon;
      default:
        return coneIcon;
    }
  };

  const goToPreviousSlide = () => {
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(originalLength);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setActiveIndex(originalLength - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeIndex >= originalLength) {
      setIsTransitioning(false);
      setActiveIndex(activeIndex - originalLength);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setActiveIndex((prev) => prev + 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }
  };

  const cardWidthClass = visibleCards === 1 ? "w-full" : visibleCards === 2 ? "w-full sm:w-1/2" : "w-full sm:w-1/2 xl:w-1/4";
  const slideOffset = `${(activeIndex * 100) / visibleCards}%`;
  const safeDotIndex = activeIndex % originalLength;

  return (
    <section className={`bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] ${sectionPadding}`}>
      <Container>
        <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
          <div className="mb-4 flex items-center justify-center gap-2 sm:gap-3">
            <span className="hidden h-2 w-1.5 skew-x-[-30deg] bg-secondary sm:inline-block" />
            <span className="hidden h-2 w-1.5 skew-x-[-30deg] bg-secondary sm:inline-block" />
            <span className="mr-1 hidden h-2 w-1.5 skew-x-[-30deg] bg-secondary sm:inline-block" />
            <span className="inline-flex items-center text-secondary">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </span>
            <span className="text-base font-black uppercase tracking-[0.2em] text-secondary sm:text-lg">
              {section.eyebrow}
            </span>
            <span className="ml-1 hidden h-2 w-1.5 skew-x-[-30deg] bg-secondary sm:inline-block" />
            <span className="hidden h-2 w-1.5 skew-x-[-30deg] bg-secondary sm:inline-block" />
            <span className="hidden h-2 w-1.5 skew-x-[-30deg] bg-secondary sm:inline-block" />
          </div>

          <h2 className="headline text-[clamp(2rem,5vw,3.25rem)] font-black uppercase leading-[1.08] tracking-[0.03em] text-primary">
            {section.title} <span className="text-secondary">{section.highlight}</span>
          </h2>
          {section.subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-text-muted sm:text-base">
              {section.subtitle}
            </p>
          )}
        </div>

        <div className="relative flex items-center">
          {originalLength > visibleCards && (
            <button
              aria-label="Show previous related products"
              className="absolute left-0 z-20 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-[0_10px_25px_rgba(3,27,64,0.08)] transition hover:border-secondary hover:bg-secondary/5 lg:flex"
              onClick={goToPreviousSlide}
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>
          )}

          <div className="w-full overflow-hidden py-6 -my-6">
            <div
              className={`flex will-change-transform ${isTransitioning ? "transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]" : ""}`}
              style={{ transform: `translateX(-${slideOffset})` }}
            >
              {extendedMachines.map((machine, idx) => (
                <div
                  key={`${machine.title}-${machine.href}-${idx}`}
                  className={`${cardWidthClass} shrink-0 px-2`}
                >
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fcfdff_100%)] p-5 shadow-[0_18px_45px_rgba(3,27,64,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_20px_55px_rgba(3,27,64,0.11)]">
                    <div>
                      <div className="relative flex h-45 items-center justify-center overflow-hidden rounded-[18px] border border-slate-100 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,#f7fbff_60%,#eef4fb_100%)] transition-transform duration-300 group-hover:scale-[1.03]">
                        <Image
                          alt={machine.image.alt}
                          className="object-contain p-3"
                          fill
                          sizes="(max-width: 1023px) 50vw, 20vw"
                          src={machine.image.src}
                        />
                      </div>

                      <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-secondary/20 bg-secondary/5 text-secondary">
                        {renderIcon(machine.icon)}
                      </div>

                      <h3 className="mt-4 text-[0.95rem] font-black uppercase leading-[1.2] tracking-[0.08em] text-primary">
                        {machine.title}
                      </h3>

                      <p className="mt-2 min-h-14 text-[0.9rem] leading-6 text-text-muted">
                        {machine.description}
                      </p>
                    </div>

                    <Link
                      href={machine.href}
                      className="mt-5 inline-flex items-center gap-2 font-black uppercase tracking-[0.08em] text-secondary transition-colors hover:text-primary"
                    >
                      {machine.actionLabel}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {originalLength > visibleCards && (
            <button
              aria-label="Show next related products"
              className="absolute right-0 z-20 hidden h-11 w-11 translate-x-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-secondary shadow-[0_10px_25px_rgba(3,27,64,0.08)] transition hover:border-secondary hover:bg-secondary/5 lg:flex"
              onClick={goToNextSlide}
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {originalLength > visibleCards && (
          <div className="mt-10 flex justify-center gap-2.5">
            {Array.from({ length: originalLength }).map((_, index) => (
              <button
                aria-label={`Go to related products slide ${index + 1}`}
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setActiveIndex(index);
                }}
                className={`h-2.5 w-2.5 rounded-full border-0 p-0 transition ${index === safeDotIndex ? "bg-secondary" : "bg-slate-300"}`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

