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
      "mb-5 sm:mb-6",
      align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl",
      className,
    )}>
      <h2 className="headline text-primary text-[clamp(1.65rem,5.5vw,1.95rem)] sm:text-[2.5rem] leading-[1.02] sm:leading-tight">
        <span className="block sm:inline">{title}</span>{" "}
        {highlight && (
          <span className={cn("text-secondary", highlightBlock ? "block" : "block sm:inline")}>
            {highlight}
          </span>
        )}
      </h2>
      {underline && <span aria-hidden className="mx-auto mt-2.5 block h-[3px] w-14 bg-secondary" />}
      {subtitle && <p className="mt-3 sm:mt-3.5 text-sm leading-6 sm:leading-7 text-text-muted sm:text-base">{subtitle}</p>}
    </header>
  );
}
