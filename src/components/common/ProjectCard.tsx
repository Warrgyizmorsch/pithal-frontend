import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProjectCard({
  location,
  plant,
  capacity,
  result,
  index,
}: {
  location: string;
  plant: string;
  capacity: string;
  result: string;
  index: number;
}) {
  return (
    <article className="image-hover lift overflow-hidden border border-border bg-white">
      <div className="relative h-40 overflow-hidden">
        <Image
          alt={`${plant} in ${location}`}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          src={index % 2 ? "/images/projects/plant.svg" : "/images/projects/quarry.svg"}
        />
        <span className="absolute left-3 top-3 bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {capacity}
        </span>
      </div>
      <div className="p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">{location}</p>
        <h3 className="mt-2 text-sm font-bold uppercase text-primary">{plant}</h3>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
          <p className="text-xs text-text-muted">{result}</p>
          <a className="flex shrink-0 items-center gap-1 text-[11px] font-bold uppercase text-secondary" href="#contact">
            View <ArrowRight aria-hidden size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}
