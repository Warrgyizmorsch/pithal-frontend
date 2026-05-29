import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  underline = false,
  highlightBlock = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  underline?: boolean;
  highlightBlock?: boolean;
  className?: string;
}) {
  return (
    <header className={cn(
      "mb-8 sm:mb-10",
      align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl",
      className,
    )}>
      {eyebrow && (
        <p className="accent-bars mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary sm:text-[11px] sm:tracking-[0.26em]">
          {eyebrow}
        </p>
      )}
      <h2 className="headline text-[clamp(1.8rem,9vw,2.2rem)] text-primary sm:text-[clamp(2rem,4.6vw,3.25rem)]">
        {title}
        {highlight && (
          <span className={cn("text-secondary", highlightBlock ? "block" : "inline")}>{highlightBlock ? highlight : ` ${highlight}`}</span>
        )}
      </h2>
      {underline && <span aria-hidden className="mx-auto mt-3 block h-[3px] w-14 bg-secondary" />}
      {subtitle && <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">{subtitle}</p>}
    </header>
  );
}
