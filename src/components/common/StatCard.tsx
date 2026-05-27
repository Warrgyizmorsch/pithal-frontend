import { Cog, Factory, Globe, UsersRound } from "lucide-react";

const icons = {
  factory: Factory,
  gear: Cog,
  globe: Globe,
  partners: UsersRound,
};

export function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  const Icon = icons[icon as keyof typeof icons] ?? Globe;

  return (
    <article className="flex items-center gap-3 border-border py-4 pl-0 pr-3 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 lg:py-4 lg:pr-8">
      <Icon aria-hidden className="h-9 w-9 shrink-0 text-primary sm:h-[43px] sm:w-[43px]" strokeWidth={1.25} />
      <div>
        <p className="headline text-[1.85rem] leading-none text-secondary sm:text-[2.15rem]">{value}</p>
        <p className="mt-1 max-w-32 text-xs font-bold uppercase leading-[1.25] text-primary">{label}</p>
      </div>
    </article>
  );
}
