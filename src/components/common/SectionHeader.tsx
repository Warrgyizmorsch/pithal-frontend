import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  underline = false,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  underline?: boolean;
}) {
  return (
    <header className={cn("mb-10", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl")}>
      {eyebrow && (
        <p className="accent-bars mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-secondary">
          
          {eyebrow}
          
        </p>
      )}
      <h2 className="headline text-[clamp(2rem,4.6vw,3.25rem)] text-primary">
        {title} {highlight && <span className="text-secondary">{highlight}</span>}
      </h2>
      {underline && <span aria-hidden className="mx-auto mt-3 block h-[3px] w-14 bg-secondary" />}
      {subtitle && <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">{subtitle}</p>}
    </header>
  );
}
