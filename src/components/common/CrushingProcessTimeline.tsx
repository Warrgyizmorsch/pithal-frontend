"use client";

import React from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight } from "lucide-react";

const solutionsProcessSteps = [
  {
    number: "01",
    title: "RAW MATERIAL",
    text: "Excavated material fed into the system.",
    video: "/workvideo/magnific_animate-this-image-as-the_LUm7UMHswO.mp4"
  },
  {
    number: "02",
    title: "FEED HOPPER",
    text: "Regulates continuous and uniform material flow.",
    video: "/workvideo/magnific_animate-this-image-as-the_SOfPNJrUb8.mp4"
  },
  {
    number: "03",
    title: "PRIMARY CRUSHER",
    text: "Reduces large rocks into manageable size.",
    video: "/workvideo/magnific_animate-this-image-as-the_vunFBBia47.mp4"
  },
  {
    number: "04",
    title: "SECONDARY CRUSHER",
    text: "Further reduction for consistent output.",
    video: "/workvideo/magnific_animate-this-image-as-the_WMwpnNgcXe.mp4"
  },
  {
    number: "05",
    title: "SCREENING",
    text: "Separates material into required sizes.",
    video: "/workvideo/magnific_animate-this-image-as-the_1soSjUvr4r.mp4"
  },
  {
    number: "06",
    title: "CONVEYOR SYSTEM",
    text: "Efficient material transfer across stages.",
    video: "/workvideo/magnific_animate-this-image-as-a-c_kLBgSFq16B.mp4"
  },
  {
    number: "07",
    title: "FINAL OUTPUT",
    text: "High-quality, uniform material ready to use.",
    video: "/workvideo/magnific_animate-this-image-as-a-c_xgIwPatjfW.mp4"
  }
];

export function CrushingProcessTimeline() {
  const [mounted, setMounted] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const desktopVideoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

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
      setActiveIndex((prev) => (prev + 1) % solutionsProcessSteps.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + solutionsProcessSteps.length) % solutionsProcessSteps.length);
    }
  };

  // Set mounted state
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Automatic transition every 4 seconds
  React.useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutionsProcessSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [mounted, activeIndex]);

  // Synchronize playing and pausing based on the active index
  React.useEffect(() => {
    if (!mounted) return;
    
    // Play/Pause desktop videos
    desktopVideoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play/Pause mobile videos
    mobileVideoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === activeIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex, mounted]);

  return (
    <section className="section-space bg-white">
      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="COMPLETE PLANT SOLUTIONS"
          title="INTELLIGENT SYSTEMS."
          highlight="SEAMLESS PERFORMANCE."
          subtitle="From raw material to final product, our complete plant solutions are engineered for maximum efficiency, reliability, and productivity."
        />

        {/* Desktop View (Grid Layout) */}
        <div className="hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 xl:items-stretch xl:gap-4">
          {solutionsProcessSteps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={step.number}
                className="relative min-w-0 flex"
              >
                <article
                  className={`flex h-full min-w-0 flex-1 flex-col rounded-2xl border-2 bg-white px-3 pt-3 pb-2 transition-all duration-300 sm:px-4 sm:pt-4 sm:pb-3 xl:px-2 xl:pt-2 xl:pb-1 ${
                    isActive
                      ? "z-20 border-secondary shadow-xl sm:scale-[1.03]"
                      : "border-primary/20 sm:scale-[0.98] sm:opacity-60"
                  }`}
                >
                  <div className="mb-3 flex items-start gap-2">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-black leading-none text-secondary transition-colors duration-300 ${
                        isActive ? "border-2 border-secondary bg-white" : "border-2 border-primary/20 bg-white"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col justify-center">
                      <h3 className="mb-1 text-[11px] font-bold uppercase leading-tight tracking-[0.08em] text-primary xl:text-[9px]">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-[1.5] text-text-dark xl:text-[10px]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-auto h-52 w-full overflow-hidden rounded-xl bg-white min-[420px]:h-60 sm:h-64">
                    {mounted ? (
                      <video
                        ref={(el) => {
                          desktopVideoRefs.current[index] = el;
                        }}
                        className="h-full w-full object-contain"
                        muted
                        playsInline
                        loop
                      >
                        <source
                          src={step.video}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="h-full w-full bg-slate-50/50 flex items-center justify-center text-[10px] font-medium text-slate-400">
                        Loading...
                      </div>
                    )}
                    <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle,_transparent_50%,_#ffffff_98%)]" />
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Mobile View (Center-mode Carousel Layout) */}
      <div 
        className="sm:hidden relative w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(calc(15vw - ${activeIndex * 70}vw))` }}
        >
          {solutionsProcessSteps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={step.number}
                className="w-[70vw] flex-shrink-0 px-2.5 transition-all duration-500"
                style={{
                  transform: isActive ? "scale(1.04)" : "scale(0.92)",
                  opacity: isActive ? 1 : 0.45,
                }}
              >
                <article
                  className={`relative flex h-[430px] min-w-0 flex-col justify-end rounded-2xl border-2 overflow-hidden p-3 transition-all duration-300 ${
                    isActive
                      ? "border-secondary shadow-2xl"
                      : "border-primary/20"
                  }`}
                >
                  <div className="absolute inset-0 z-0 bg-white">
                    {mounted ? (
                      <video
                        ref={(el) => {
                          mobileVideoRefs.current[index] = el;
                        }}
                        className="h-full w-full object-cover"
                        muted
                        playsInline
                        loop
                      >
                        <source
                          src={step.video}
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      <div className="h-full w-full bg-slate-100 flex items-center justify-center text-[10px] font-medium text-slate-400">
                        Loading...
                      </div>
                    )}
                  </div>

                  <div className="absolute top-3 left-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-white font-black shadow-lg">
                    {step.number}
                  </div>

                  <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-xl p-3 border border-gray-100 shadow-md">
                    <h3 className="mb-1 text-[13px] font-bold uppercase leading-tight tracking-[0.05em] text-primary">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-[1.5] text-[#48576c]">
                      {step.text}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <Container>
        {/* Mobile Dots Indicator */}
        <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
          {solutionsProcessSteps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                aria-label={`Show process step ${step.number}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-8 bg-secondary" : "w-2.5 bg-primary/20"
                }`}
                key={step.number}
                onClick={() => setActiveIndex(index)}
                type="button"
              />
            );
          })}
        </div>

        {/* Bottom Moving/Animated Flow Arrow */}
        <div className="flex justify-center items-center gap-3 mt-10 text-secondary">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-slate-400">PROCESS FLOW</span>
          <div className="relative w-14 h-6 overflow-hidden flex items-center">
            <ArrowRight
              size={22}
              className="absolute text-secondary"
              style={{
                animation: "horizontal-move 1.5s infinite ease-in-out",
              }}
            />
          </div>
          <style jsx global>{`
            @keyframes horizontal-move {
              0% {
                left: -25px;
                opacity: 0;
              }
              50% {
                left: 12px;
                opacity: 1;
              }
              100% {
                left: 50px;
                opacity: 0;
              }
            }
          `}</style>
        </div>

        <div className="mt-9 flex justify-center sm:mt-12">
          <Button
            className="w-full min-h-12 px-5 text-xs font-bold uppercase tracking-widest min-[420px]:w-auto sm:min-h-14 sm:px-10 sm:text-sm"
            href="#contact"
          >
            Explore Our Plant Solutions <ArrowRight aria-hidden size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
