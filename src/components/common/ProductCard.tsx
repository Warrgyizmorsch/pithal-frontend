import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function ProductCard({
  title,
  description,
  image,
  icon,
}: {
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}) {
  return (
    <article className="image-hover lift overflow-hidden border border-border bg-white p-6 rounded flex flex-col h-full">
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-primary text-center mb-3">{title}</h3>
        <div className="h-[3px] w-16 bg-secondary"></div>
      </div>
      <div className="relative mb-6 h-48 overflow-hidden bg-bg-light rounded">
        <Image alt={title} className="object-cover" fill sizes="(max-width: 768px) 100vw, 25vw" src={image} />
      </div>
      <div className="flex gap-4 flex-grow bg-linear-to-t from-primary-dark to-primary/90 p-4 rounded text-white">
        <div className="flex-shrink-0">
          {icon}
        </div>
        <p className="text-sm leading-6 text-text-muted">{description}</p>
      </div>
      <Button className="w-full min-h-10 px-3 mt-6" href="#contact" variant="outlineOrange">
        View Details <ArrowRight aria-hidden size={14} />
      </Button>
    </article>
  );
}
