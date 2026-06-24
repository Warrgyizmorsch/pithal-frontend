import { Button } from "@/components/common/Button";
import type { ProductCta } from "@/data/products/productDetailTypes";
import { cn } from "@/lib/utils";
import { ProductIcon } from "./iconMap";

export function ProductCtaButton({
  cta,
  className,
  iconSize = 16,
  type,
}: {
  cta: ProductCta;
  className?: string;
  iconSize?: number;
  type?: "button" | "submit";
}) {
  const hasArrowIcon = cta.icon === "arrow";
  const leadingIcon = cta.icon && !hasArrowIcon ? cta.icon : undefined;

  return (
    <Button
      className={cn("text-center leading-none", className)}
      href={type === "submit" ? undefined : cta.href}
      type={type}
      variant={cta.variant}
    >
      <span className="inline-flex items-center justify-center gap-2 text-center">
        {leadingIcon && <ProductIcon className="shrink-0" name={leadingIcon} size={iconSize} strokeWidth={2} />}
        <span className="leading-none">{cta.label}</span>
        {hasArrowIcon && <ProductIcon className="shrink-0" name="arrow" size={iconSize} strokeWidth={2} />}
      </span>
    </Button>
  );
}
