import React from "react";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "./siteConfig";

export function ContactPageSchema() {
  const pageUrl = `${SITE_URL}/contact`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#contactpage`,
    url: pageUrl,
    name: "Contact Pithal Machines | Get Stone Crusher Quotes & Technical Consultation",
    description:
      "Contact Pithal Machines for crushing equipment enquiries, stone crusher machine cost estimates, turnkey plant designs and 24x7 customer support.",
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

