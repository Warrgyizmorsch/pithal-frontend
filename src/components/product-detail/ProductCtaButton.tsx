import { Button } from "@/components/common/Button";
import type { ProductCta } from "@/data/products/productDetailTypes";
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
    <Button className={className} href={type === "submit" ? undefined : cta.href} type={type} variant={cta.variant}>
      {leadingIcon && <ProductIcon name={leadingIcon} size={iconSize} strokeWidth={2} />}
      {cta.label}
      {hasArrowIcon && <ProductIcon name="arrow" size={iconSize} strokeWidth={2} />}
    </Button>
  );
}
