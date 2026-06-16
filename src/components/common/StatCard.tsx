import { Cog, Factory, Globe, Headset, ShieldCheck, UsersRound } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  factory: Factory,
  gear: Cog,
  globe: Globe,
  partners: UsersRound,
  headset: Headset,
  shield: ShieldCheck,
};

export function StatCard({
  value,
  label,
  icon,
  compact = false,
  className,
}: {
  value: string;
  label: string;
  icon: string;
  compact?: boolean;
  className?: string;
}) {
  const Icon = icons[icon as keyof typeof icons] ?? Globe;

  return (
    <article
      className={cn(
        "flex items-center gap-3 border-border",
        !className && "pl-0 pr-3 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0",
        compact ? "py-3 lg:py-3" : "py-4 lg:py-4 lg:pr-8",
        className
      )}
    >
      <Icon
        aria-hidden
        className={cn(
          "shrink-0 text-primary",
          compact ? "h-8 w-8 sm:h-9 sm:w-9" : "h-9 w-9 sm:h-[43px] sm:w-[43px]",
        )}
        strokeWidth={1.25}
      />
      <div>
        <p
          className={cn(
            "headline leading-none text-secondary",
            compact ? "text-[1.75rem] sm:text-[2rem]" : "text-[1.85rem] sm:text-[2.15rem]",
          )}
        >
          {value}
        </p>
        <p
          className={cn(
            "mt-1 max-w-32 font-bold uppercase text-primary",
            compact ? "text-[11px] leading-[1.15]" : "text-xs leading-[1.25]",
          )}
        >
          {label}
        </p>
      </div>
    </article>
  );
}
