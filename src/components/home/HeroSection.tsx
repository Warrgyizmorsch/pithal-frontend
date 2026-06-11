import { Button } from "@/components/common/Button";
import { StatCard } from "@/components/common/StatCard";
import { stats } from "@/data/homeData";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/common/Container";

const heroMachineVideo = "/images/hero/hero-machine-video.mp4";
const heroMachinePoster = "/images/hero/hero-machine-photo.png";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-white flex flex-col lg:h-[calc(100vh-4.25rem)] xl:h-[calc(100vh-5.25rem)]"
      id="home"
    >
      {/* Desktop Crushing Machine Video */}

      <Container className="relative flex flex-1 flex-col gap-3 pt-7 pb-6 sm:pt-10 sm:pb-8 lg:pt-[2.25rem] lg:pb-8">
        <div className="pointer-events-none absolute right-0 top-[50%] hidden h-[min(36rem,95%)] w-[75vw] -translate-y-1/2 lg:block xl:h-[min(50rem,100%)] xl:w-full">
          <video
            aria-label="Mobile crushing machine operating in a quarry"
            autoPlay
            className="h-full w-full object-cover object-right"
            loop
            muted
            playsInline
            poster={heroMachinePoster}
            preload="metadata"
          >
            <source src={heroMachineVideo} type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 max-w-[32rem] xl:max-w-[35rem]">
          <p className="mb-3 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary sm:mb-4 sm:gap-3 sm:text-[13px] sm:tracking-[0.2em]">
            <span className="h-[2px] w-6 bg-secondary" /> Built strong. Built to
            perform.
          </p>
          <h1 className="headline text-[clamp(2.45rem,11vw,3.05rem)] leading-[0.96] text-primary italic sm:text-[clamp(3.2rem,5vw,4.45rem)] lg:text-[clamp(3.65rem,4.25vw,4.65rem)]">
            Engineering the
            <br />
            <span className="text-secondary">Future</span>
            <br />
            of Crushing &amp;
            <br />
            Mining Solutions
          </h1>
          <p className="mt-3 max-w-[28rem] text-[0.95rem] leading-7 text-[#48576c] sm:text-[clamp(1rem,1.1vw,1.1rem)] pt-5">
            High-performance crushing, screening &amp; mining machinery trusted
            by industrial leaders worldwide.
          </p>
          <div className="mt-4 flex flex-col gap-3 min-[460px]:flex-row sm:mt-5 sm:gap-4">
            <Button
              className="w-full min-h-[3.1rem] px-5 text-[12px] rounded-[0.3rem] min-[460px]:w-auto sm:px-7 sm:text-[13px]"
              href="#products"
            >
              Explore Products <ChevronRight aria-hidden size={16} />
            </Button>
            <Button
              className="w-full min-h-[3.1rem] px-5 text-[12px] rounded-[0.3rem] min-[460px]:w-auto sm:px-7 sm:text-[13px]"
              href="#contact1"
              variant="outlineNavy"
            >
              Request A Quote <ChevronRight aria-hidden size={16} />
            </Button>
          </div>
        </div>
        {/* Mobile/Tablet Background Video */}
        <div className="pointer-events-none absolute inset-0 z-0 lg:hidden opacity-60">
          <video
            aria-label="Mobile crushing machine operating in a quarry"
            autoPlay
            className="h-full w-full object-cover object-center"
            loop
            muted
            playsInline
            poster={heroMachinePoster}
            preload="metadata"
          >
            <source src={heroMachineVideo} type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 mt-auto w-full max-w-[780px] pt-5 border-t border-gray-200/60">
          <div className="relative grid grid-cols-2 gap-y-6 sm:gap-x-4 md:gap-x-8 lg:grid-cols-4 lg:gap-x-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-start gap-4 lg:px-6 ${
                  index !== 0 ? "lg:border-l lg:border-gray-300/70" : ""
                }`}
              >
                <StatCard {...stat} compact />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
