import type { Metadata } from "next";
import { ContactSolutionSection } from "@/components/product-detail/ContactSolutionSection";
import { FeaturesSection } from "@/components/product-detail/FeaturesSection";
import { IndustryApplications } from "@/components/product-detail/IndustryApplications";
import { ProcessTimeline } from "@/components/product-detail/ProcessTimeline";
import { ProductHero } from "@/components/product-detail/ProductHero";
import { ProductIntro } from "@/components/product-detail/ProductIntro";
import { ProductStats } from "@/components/product-detail/ProductStats";
import { RelatedMachines } from "@/components/product-detail/RelatedMachines";
import { ResourcesSection } from "@/components/product-detail/ResourcesSection";
import { SpecificationTable } from "@/components/product-detail/SpecificationTable";
import { VideoSection } from "@/components/product-detail/VideoSection";
import { ProductFAQ } from "@/components/product-detail/ProductFAQ";
import { ProductLongContent } from "@/components/product-detail/ProductLongContent";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { primeBucketData } from "@/data/products/primeBucketData";

export const metadata: Metadata = {
  title: "Crusher bucket Manufacturer |Pithal Machine",
  description:
    "Get a high-performance bucket crusher for excavators from Pithal Machine. Explore durable bucket crushers designed for efficient on-site crushing and material processing.",
};

export default function PrimeBucketProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero data={primeBucketData.hero} />
        <ProductStats
          section={primeBucketData.statsSection}
          stats={primeBucketData.stats}
        />
        <ProductIntro data={primeBucketData.intro} />
        <FeaturesSection
          heading="Key Features of"
          highlightText="Prime Bucket Crusher"
          subtitle="Engineered for versatile on-site crushing, the Prime Bucket Crusher combines robust construction with practical operation to support reliable material processing across demanding applications."
        />
        <SpecificationTable
          rows={primeBucketData.specifications}
          section={primeBucketData.specificationsSection}
        />
        <IndustryApplications
          industries={primeBucketData.industries}
          section={primeBucketData.industriesSection}
        />
        <ProcessTimeline
          section={primeBucketData.processSection}
          steps={primeBucketData.processSteps}
        />
        <VideoSection data={primeBucketData.videoSection} />
        <RelatedMachines section={primeBucketData.relatedSection} />
        <ContactSolutionSection data={primeBucketData.contactSection} />
        <ResourcesSection
          resources={primeBucketData.resources}
          section={primeBucketData.resourcesSection}
          supportFeatures={primeBucketData.supportFeatures}
        />
        {primeBucketData.faqSection && <ProductFAQ data={primeBucketData.faqSection} />}
        {primeBucketData.longContent && <ProductLongContent data={primeBucketData.longContent} />}
      </main>
      <Footer />
    </>
  );
}
