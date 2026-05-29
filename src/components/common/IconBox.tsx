import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function IconBox({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded border border-secondary/45 bg-secondary/10 text-secondary", className)}>
      {children}
    </span>
  );
}
