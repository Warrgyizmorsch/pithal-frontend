import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function ProductCard({
  title,
  description,
  image,
  icon,
  href = "#contact",
}: {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
  href?: string;
}) {
  return (
    <article className="image-hover lift flex h-full flex-col overflow-hidden rounded border border-border bg-white p-4 sm:p-5 xl:p-6">
      <div className="mb-5 flex flex-col items-center sm:mb-6">
        <h3 className="mb-3 text-center text-[13px] font-bold uppercase tracking-[0.16em] text-primary sm:text-[14px] sm:tracking-[0.2em]">{title}</h3>
        <div className="h-[3px] w-16 bg-secondary"></div>
      </div>
      <div className="relative mb-4 h-44 overflow-hidden rounded bg-bg-light sm:mb-6 sm:h-48">
        <Image alt={title} className="object-cover" fill sizes="(max-width: 767px) calc(100vw - 2.5rem), (max-width: 1279px) 50vw, 25vw" src={image} />
      </div>
      <div className="flex flex-grow gap-3 rounded bg-white p-2 text-white sm:gap-4 sm:p-4">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <p className="text-sm leading-6 text-text-muted">{description}</p>
      </div>
      <Button className="mt-6 min-h-10 w-full px-3" href={href} variant="outlineNavy">
        View Details <ArrowRight aria-hidden size={14} />
      </Button>
    </article>
  );
}
