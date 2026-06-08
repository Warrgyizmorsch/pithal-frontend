import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outlineNavy" | "outlineOrange" | "ghost" | "outlineNavySwap";

const variants: Record<Variant, string> = {
  primary: "primary-btn",
  outlineNavy: "secondary-btn",
  outlineOrange: "secondary-btn",
  ghost: "border-transparent text-primary hover:bg-primary/5",
  outlineNavySwap: "download-btn",
};

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  href,
  variant = "primary",
  type = "button",
  ...props
}: Props) {
  const buttonVariant = variants[variant];
  const isAnimatedButton = ["primary", "outlineNavy", "outlineOrange", "outlineNavySwap"].includes(variant);
  
  const styles = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 border px-6 text-[11px] font-bold uppercase tracking-[0.16em] rounded",
    !isAnimatedButton && "transition-colors",
    buttonVariant,
    className,
  );

  if (href) {
    return (
      <Link className={styles} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} type={type} {...props}>
      {children}
    </button>
  );
}


