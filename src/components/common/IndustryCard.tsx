import Image from "next/image";
import {
  Building2,
  Factory,
  HardHat,
  Mountain,
  Pickaxe,
  Recycle,
  type LucideIcon,
} from "lucide-react";

const industryIcons: Record<string, LucideIcon> = {
  aggregate: Mountain,
  cement: Factory,
  construction: HardHat,
  infrastructure: Building2,
  mining: Pickaxe,
  recycling: Recycle,
};

export function IndustryCard({
  title,
  text,
  image,
  icon,
}: {
  title: string;
  text: string;
  image: string;
  icon: string;
}) {
  const Icon = industryIcons[icon] ?? Factory;

  return (
    <article className="group image-hover relative min-h-[14.2rem] overflow-hidden rounded-xl border border-primary/90 bg-primary-dark sm:min-h-[15.2rem]">
      <Image alt={title} className="object-cover" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" src={image} />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark from-[0%] via-primary-dark/92 via-[27%] to-transparent to-[64%] transition-opacity duration-300 group-hover:opacity-95" />
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 px-4 pb-4 pt-12 text-white sm:gap-4 sm:px-5 sm:pb-5">
        <Icon aria-hidden className="mb-0.5 h-9 w-9 shrink-0 text-secondary sm:h-[45px] sm:w-[45px]" strokeWidth={1.8} />
        <div>
          <h3 className="headline text-[1.28rem] leading-none">{title}</h3>
          <span aria-hidden className="mt-2 block h-[3px] w-11 bg-secondary" />
          <p className="mt-2 text-xs leading-[1.55] text-white">{text}</p>
        </div>
      </div>
    </article>
  );
}
