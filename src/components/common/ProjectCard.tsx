import Image from "next/image";
import { Gauge, MapPin } from "lucide-react";

export function ProjectCard({
  location,
  plant,
  capacity,
  image,
}: {
  location: string;
  plant: string;
  capacity: string;
  image: string;
}) {
  return (
    <article className="image-hover flex h-full flex-col overflow-hidden rounded-lg border border-primary/25 bg-white transition-shadow hover:shadow-[0_12px_32px_rgb(3_27_64_/_0.08)]">
      <div className="relative h-[7.8rem] shrink-0 overflow-hidden sm:h-[8.4rem]">
        <Image
          alt={`${plant} in ${location}`}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={image}
        />
      </div>
      <div className="grid gap-3 px-4 py-3 min-[420px]:grid-cols-[1fr_auto] min-[420px]:items-center flex-grow">
        <div className="flex min-w-0 gap-3">
          <MapPin aria-hidden className="mt-0.5 shrink-0 text-primary" size={27} strokeWidth={1.6} />
          <div>
            <h3 className="text-[0.8rem] font-bold uppercase text-text-dark sm:text-[0.85rem]">{plant}</h3>
            <p className="mt-1 text-sm text-text-dark">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-primary/25 pt-3 min-[420px]:border-l min-[420px]:border-t-0 min-[420px]:pl-4 min-[420px]:pt-0">
          <Gauge aria-hidden className="text-primary" size={29} strokeWidth={1.45} />
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-text-dark">Capacity</p>
            <p className="mt-0.5 text-lg font-bold uppercase text-secondary">{capacity}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
