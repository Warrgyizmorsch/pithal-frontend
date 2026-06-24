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
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { primeBucketData } from "@/data/products/primeBucketData";

export const metadata: Metadata = {
  title: "Prime Bucket Crusher | Pithal Machine Pvt.",
  description:
    "Heavy-duty bucket systems designed for maximum capacity and durability in material handling.",
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
          heading="Engineered For"
          highlightText="Maximum Efficiency"
          subtitle="Our PrimeBucket systems are built with advanced engineering and premium quality components to deliver unmatched material handling performance."
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
      </main>
      <Footer />
    </>
  );
}
