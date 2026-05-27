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

        <div className="group relative aspect-[2079/756] min-h-[16rem] overflow-hidden rounded-3xl border-2 border-primary/60">
          <Image
            alt="Aggregate plant machinery video preview"
            className="object-cover"
            fill
            sizes="(max-width: 768px) calc(100vw - 2.5rem), 1160px"
            src="/images/hero/video-showcase-photo.jpg"
          />
          <button
            aria-label="Play machinery performance video"
            className="absolute left-1/2 top-1/2 flex h-[clamp(5rem,9vw,7rem)] w-[clamp(5rem,9vw,7rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-secondary text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary"
            type="button"
          >
            <Play aria-hidden className="ml-1 h-[42%] w-[42%] fill-current" />
          </button>
        </div>

        <div className="mt-7 text-center">
          <Button className="min-h-14 px-12 text-sm" href="#video">
            Watch Full Video <ArrowRight aria-hidden size={18} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
