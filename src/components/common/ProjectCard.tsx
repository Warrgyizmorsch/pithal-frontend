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
    <article className="image-hover  flex h-full min-w-[24rem] min-h-[21rem] flex-col overflow-hidden rounded-lg border border-primary/25 bg-white transition-shadow hover:shadow-[0_12px_32px_rgb(3_27_64_/_0.08)] sm:min-h-[22rem] lg:min-h-[23rem]">
      <div className="relative h-48 shrink-0 overflow-hidden sm:h-52 lg:h-56">
        <Image
          alt={`${plant} in ${location}`}
          className="object-cover"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={image}
        />
      </div>
      <div className="grid flex-grow gap-4 px-5 py-4 min-[420px]:grid-cols-[1fr_auto] min-[420px]:items-center sm:px-6 sm:py-5">
        <div className="flex min-w-0 gap-3.5">
          <MapPin aria-hidden className="mt-0.5 shrink-0 text-primary" size={30} strokeWidth={1.6} />
          <div>
            <h3 className="text-[0.92rem] font-bold uppercase leading-snug text-text-dark sm:text-base">{plant}</h3>
            <p className="mt-1.5 text-sm text-text-dark sm:text-[0.95rem]">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3.5 border-t border-primary/25 pt-4 min-[420px]:border-l min-[420px]:border-t-0 min-[420px]:pl-5 min-[420px]:pt-0">
          <Gauge aria-hidden className="text-primary" size={32} strokeWidth={1.45} />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-text-dark">Capacity</p>
            <p className="mt-1 text-xl font-bold uppercase text-secondary">{capacity}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
