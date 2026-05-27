import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight, Play } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="section-space bg-white" id="video">
      <Container>
        <SectionHeader
          eyebrow="Video Showcase"
          highlight="Proven Performance."
          subtitle="See our crushing solutions in action. Built for the toughest challenges, engineered for unmatched results."
          title="Powerful Machines."
        />

        <div className="group relative aspect-[1.48] overflow-hidden rounded-xl border-2 border-primary/60 min-[480px]:aspect-[1.9] md:aspect-[2079/756] md:rounded-3xl">
          <Image
            alt="Aggregate plant machinery video preview"
            className="object-cover object-center"
            fill
            sizes="(max-width: 639px) calc(100vw - 2.5rem), (max-width: 1023px) calc(100vw - 4rem), 1160px"
            src="/images/hero/video-showcase-photo.jpg"
          />
          <button
            aria-label="Play machinery performance video"
            className="absolute left-1/2 top-1/2 flex h-[clamp(3.6rem,9vw,7rem)] w-[clamp(3.6rem,9vw,7rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-secondary text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
            type="button"
          >
            <Play aria-hidden className="ml-1 h-[42%] w-[42%] fill-current" />
          </button>
        </div>

        <div className="mt-6 text-center sm:mt-7">
          <Button className="w-full min-h-12 px-5 text-xs min-[420px]:w-auto sm:px-10 sm:text-sm lg:min-h-14 lg:px-12" href="#video">
            Watch Full Video <ArrowRight aria-hidden size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
