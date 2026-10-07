import React from "react";
import { JsonLd } from "./JsonLd";
import { toAbsoluteUrl } from "./siteConfig";

export type BreadcrumbItem = {
  name?: string;
  label?: string;
  url?: string;
  href?: string;
};

export type BreadcrumbSchemaProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name || item.label || `Page ${index + 1}`,
      item: toAbsoluteUrl(item.url || item.href || "/"),
    })),
  };

  return <JsonLd data={schema} />;
}

