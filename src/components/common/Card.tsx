import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn("lift rounded border border-border bg-white", className)}>
      {children}
    </article>
  );
}
