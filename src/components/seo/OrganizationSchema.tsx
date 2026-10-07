import React from "react";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "./siteConfig";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Pithal Machines",
    legalName: "Pithal Machines Limited",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/images/brand/pithal-logo.png`,
      caption: "Pithal Machines Logo",
    },
    image: `${SITE_URL}/images/brand/pithal-logo.png`,
    description:
      "Pithal Machines is a leading stone crusher and crushing equipment manufacturer in India, providing jaw crushers, cone crushers, VSI crushers, vibrating screens and complete crushing plant solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot no G1- 232, Riico, Industrial Area Kaladwas",
      addressLocality: "Udaipur",
      addressRegion: "Rajasthan",
      postalCode: "313003",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9887537129",
        contactType: "sales",
        email: "sales@pithalmachine.com",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9929944645",
        contactType: "customer service",
        email: "info@pithalmachine.com",
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/pithalmachines/",
      "https://www.instagram.com/pithalmachines/?hl=en",
      "https://www.youtube.com/@PithalMachines",
      "https://www.linkedin.com/company/pithal-machine/?viewAsMember=true",
    ],
  };

  return <JsonLd data={schema} />;
}

