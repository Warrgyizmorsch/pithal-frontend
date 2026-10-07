import React from "react";
import { JsonLd } from "./JsonLd";
import { SITE_URL, toAbsoluteUrl } from "./siteConfig";

export type ProductSchemaProps = {
  name: string;
  description: string;
  image?: string;
  url?: string;
  category?: string;
  sku?: string;
};

export function ProductSchema({
  name,
  description,
  image,
  url = "/products",
  category = "Crushing Machinery",
  sku,
}: ProductSchemaProps) {
  const productUrl = toAbsoluteUrl(url);
  const imageUrl = image ? toAbsoluteUrl(image) : `${SITE_URL}/images/brand/pithal-logo.png`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: name,
    description: description,
    image: imageUrl,
    url: productUrl,
    category: category,
    sku: sku || name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    brand: {
      "@type": "Brand",
      name: "Pithal Machines",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: productUrl,
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  };

  return <JsonLd data={schema} />;
}

