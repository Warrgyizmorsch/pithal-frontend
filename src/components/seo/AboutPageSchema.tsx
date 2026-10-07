import React from "react";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "./siteConfig";

export function AboutPageSchema() {
  const pageUrl = `${SITE_URL}/about`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#aboutpage`,
    url: pageUrl,
    name: "About Pithal Machines | Stone Crusher Machine Manufacturer in India",
    description:
      "Learn about Pithal Machines, a leading stone crusher and crushing equipment manufacturer in India with 25+ years of engineering excellence in mining, quarrying and aggregate solutions.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en",
  };

  return <JsonLd data={schema} />;
}

