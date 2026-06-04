"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { processSteps } from "@/data/homeData";
import { ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  React.useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === hoveredIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [hoveredIndex]);

  return (
    <section className="section-space bg-white">
      <Container>
        {/* Section Header */}
        <SectionHeader
          eyebrow="Smart Crushing Process"
          title="Built for Maximum Efficiency."
          highlight="Engineered to Perform."
          subtitle="Our advanced crushing plants are designed to deliver maximum reduction, consistent quality, and higher productivity."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row xl:justify-center xl:items-stretch xl:gap-5">
          {processSteps.map((step, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            return (
              <div
                key={step.number}
                className="relative flex min-w-0 xl:flex-1 xl:min-w-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <article
                  className={`flex h-full min-w-0 flex-1 flex-col rounded-2xl border-2 transition-all duration-300 p-3 sm:p-4 xl:p-3 bg-white ${
                    isHovered
                      ? "border-secondary scale-[1.03] shadow-xl z-20"
                      : isAnyHovered
                      ? "border-primary/20 opacity-60 scale-[0.98]"
                      : "border-primary hover:shadow-md"
                  }`}
                >
                  <div className="mb-3 flex items-start gap-2">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-black leading-none text-white transition-colors duration-300 ${
                        isHovered ? "bg-secondary" : "bg-primary"
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
                  <div className="relative mt-auto h-80 w-full sm:h-80 overflow-hidden rounded-xl bg-white">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="h-full w-full object-contain"
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src={
                          step.number === "01" ? "/workvideo/magnific_animate-this-image-as-a-c_kLBgSFq16B.mp4" :
                          step.number === "02" ? "/workvideo/magnific_animate-this-image-as-a-c_xgIwPatjfW.mp4" :
                          step.number === "03" ? "/workvideo/magnific_animate-this-image-as-the_1soSjUvr4r.mp4" :
                          step.number === "04" ? "/workvideo/magnific_animate-this-image-as-the_LUm7UMHswO.mp4" :
                          step.number === "05" ? "/workvideo/magnific_animate-this-image-as-the_SOfPNJrUb8.mp4" :
                          "/workvideo/magnific_animate-this-image-as-the_WMwpnNgcXe.mp4"
                        }
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    {/* Fade vignette to blend corners with the white card background */}
                    <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle,_transparent_50%,_#ffffff_98%)]" />
                  </div>
                </article>

            </div>
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
