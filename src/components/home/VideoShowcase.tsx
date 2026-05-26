import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ArrowRight, Play } from "lucide-react";

export function VideoShowcase() {
  return (
    <section className="section-space bg-bg-light" id="video">
      <Container>
        <SectionHeader
          eyebrow="Video Showcase"
          highlight="Proven Performance."
          subtitle="See our crushing solutions in action, built for the toughest challenges and engineered for unmatched results."
          title="Powerful Machines."
        />
        <div className="relative h-[clamp(17rem,44vw,31rem)] overflow-hidden border border-border">
          <Image alt="Aggregate plant machinery video preview" className="object-cover" fill sizes="100vw" src="/images/hero/video-showcase.svg" />
          <div className="absolute inset-0 bg-primary/20" />
          <button aria-label="Play machinery performance video" className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-xl transition-transform hover:scale-105">
            <Play aria-hidden className="ml-1 fill-current" size={32} />
          </button>
        </div>
        <div className="mt-7 text-center">
          <Button href="#video">Watch Full Video <ArrowRight aria-hidden size={14} /></Button>
        </div>
      </Container>
    </section>
  );
}
