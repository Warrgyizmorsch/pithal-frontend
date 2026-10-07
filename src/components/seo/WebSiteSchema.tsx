import React from "react";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "./siteConfig";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Pithal Machines",
    description:
      "Pithal Machines designs and manufactures jaw crushers, cone crushers, vibrating screens and complete crushing plants for mining, quarrying and aggregate production in India.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/products?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en",
  };

  return <JsonLd data={schema} />;
}

