import Image from "next/image";
import { Button } from "@/components/common/Button";
import { StatCard } from "@/components/common/StatCard";
import { stats } from "@/data/homeData";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white" id="home">
      <div className="site-shell relative flex min-h-[calc(100svh-4.75rem)] flex-col gap-5 pt-9 sm:min-h-[calc(100svh-5.3rem)] sm:pt-14 lg:min-h-[calc(100svh-5.85rem)] lg:pt-[2.5rem]">
        <div className="relative z-10 max-w-[32rem] xl:max-w-[34rem]">
          <p className="mb-5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary sm:mb-6 sm:gap-3 sm:text-[13px] sm:tracking-[0.2em]">
            <span className="h-[2px] w-6 bg-secondary" /> Built strong. Built to perform.
          </p>
          <h1 className="headline text-[clamp(2.6rem,14vw,3.2rem)] text-primary italic sm:text-[clamp(3.25rem,4.5vw,4.55rem)]">
            Engineering the<br />
            <span className="text-secondary">Future</span><br />
            of Crushing &amp;<br />
            Mining Solutions
          </h1>
          <p className="mt-4 max-w-[28rem] text-[0.95rem] leading-7 text-[#48576c] sm:mt-5 sm:text-[clamp(1rem,1.1vw,1.1rem)]">
            High-performance crushing, screening &amp; mining machinery trusted by industrial leaders worldwide.
          </p>
          <div className="mt-6 flex flex-col gap-3 min-[460px]:flex-row sm:mt-7 sm:gap-4">
            <Button className="w-full min-h-[3.1rem] px-5 text-[12px] rounded-[0.3rem] min-[460px]:w-auto sm:px-7 sm:text-[13px]" href="#products">
              Explore Products <ChevronRight aria-hidden size={16} />
            </Button>
            <Button className="w-full min-h-[3.1rem] px-5 text-[12px] rounded-[0.3rem] min-[460px]:w-auto sm:px-7 sm:text-[13px]" href="#contact" variant="outlineNavy">
              Request A Quote <ChevronRight aria-hidden size={16} />
            </Button>
          </div>
        </div>
        <div className="relative mt-8 h-[18rem] w-[calc(100%+2rem)] -translate-x-4 sm:mt-10 sm:h-[32rem] lg:absolute lg:-bottom-1 lg:-left-[clamp(2.5rem,6.5vw,7rem)] lg:-right-[clamp(2.5rem,6.5vw,7rem)] lg:top-0 lg:mt-0 lg:h-auto lg:w-auto lg:translate-x-0">
          <Image
            alt="Mobile crushing machine operating in a quarry"
            className="object-cover object-center"
            fill
            priority
            sizes="95vw"
            src="/images/hero/hero-machine-photo.png"
          />
        </div>
        <div className="relative z-10 mt-auto lg:w-[min(50rem,70vw)]">
          <div
            aria-hidden
            className="absolute inset-y-0 -left-[clamp(1.25rem,3.25vw,3.25rem)] right-0 border-t border-border bg-gradient-to-r sm:right-0 lg:-right-28 lg:bg-gradient-to-r lg:from-white lg:from-[70%] lg:via-white/78 lg:via-[88%] lg:to-transparent lg:backdrop-blur-[1px]"
          />
          <div className="relative grid pb-5 pt-1 sm:grid-cols-2 lg:grid-cols-4 lg:pb-7">
            {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
