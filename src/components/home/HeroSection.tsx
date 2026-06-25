import { Button } from "@/components/common/Button";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { StatCard } from "@/components/common/StatCard";
import { stats } from "@/data/homeData";
import { ChevronRight } from "lucide-react";

const heroMachineVideo = "/images/hero/hero-machine-video.mp4";
const heroMachinePoster = "/images/hero/hero-machine-photo.png";

export function HeroSection() {
  return (
    <section
      className="min-h-[500px] relative overflow-hidden bg-white flex flex-col"
      id="home"
    >
      {/* Desktop Crushing Machine Video */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-full lg:block">
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
      <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_25%,rgba(255,255,255,.78)_43%,rgba(255,255,255,.16)_66%,rgba(255,255,255,0)_100%)] lg:block" />

      <div className="relative flex flex-1 flex-col gap-3 px-5 sm:px-8 lg:px-10 pt-7 pb-6 sm:pt-10 sm:pb-8 lg:pt-[2.25rem] lg:pb-8">
        <div className="relative z-20 max-w-[32rem] xl:max-w-[35rem]">
          <HeroNavigation eyebrow="Crushing Strength, Delivering Results." />
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
        <div className="relative z-10 mt-auto mb-6 sm:mb-8 lg:mb-12 w-full max-w-[820px] pt-4">
          {/* Intense white glow behind stats for visibility */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_40%,rgba(255,255,255,0)_85%)] -inset-x-16 -inset-y-16 blur-2xl pointer-events-none" />
          <div className="absolute inset-0 -z-10 bg-white/80 blur-xl -inset-x-8 -inset-y-8 rounded-[3rem] pointer-events-none" />
          <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-4 md:gap-x-8 lg:grid-cols-4 lg:gap-x-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-start gap-4 lg:px-6 ${
                  index !== 0 ? "lg:border-l lg:border-gray-300/70" : ""
                } first:lg:px-0`}
              >
                <StatCard {...stat} compact />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
