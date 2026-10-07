import React from "react";
import type { ProductDetailData } from "@/data/products/productDetailTypes";
import { OrganizationSchema } from "./OrganizationSchema";
import { ProductSchema } from "./ProductSchema";
import { BreadcrumbSchema } from "./BreadcrumbSchema";
import { FAQSchema } from "./FAQSchema";

export type ProductPageSchemasProps = {
  data: ProductDetailData;
  category?: string;
};

/**
 * Composite helper for product detail pages that renders:
 * 1. Organization Schema
 * 2. Product Schema
 * 3. BreadcrumbList Schema
 * 4. FAQPage Schema (if faqs are available)
 */
export function ProductPageSchemas({ data, category }: ProductPageSchemasProps) {
  const productName = data.hero.highlightedTitle
    ? `${data.hero.title} ${data.hero.highlightedTitle}`.replace(/\s+/g, " ").trim()
    : data.hero.title;

  return (
    <>
      <OrganizationSchema />
      <ProductSchema
        name={productName}
        description={data.hero.description}
        image={data.hero.image?.src}
        url={`/products/${data.slug}`}
        category={category || "Industrial Stone Crushers"}
        sku={data.slug}
      />
      <BreadcrumbSchema items={data.hero.breadcrumb} />
      {data.faqSection?.faqs && data.faqSection.faqs.length > 0 && (
        <FAQSchema faqs={data.faqSection.faqs} />
      )}
    </>
  );
}

