import React from "react";
import { JsonLd } from "./JsonLd";
import { SITE_URL, toAbsoluteUrl } from "./siteConfig";

export type WebPageSchemaProps = {
  title: string;
  description: string;
  url?: string;
};

export function WebPageSchema({
  title,
  description,
  url = "/",
}: WebPageSchemaProps) {
  const pageUrl = toAbsoluteUrl(url);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en",
  };

  return <JsonLd data={schema} />;
}

