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
import { coneCrusherData } from "@/data/products/coneCrusherData";

export const metadata: Metadata = {
  title: "Prime Cone Crushers | Pithal Machine Pvt.",
  description:
    "High-efficiency secondary and tertiary Prime Cone Crushers engineered for mining, aggregates, cement, and infrastructure industries.",
};

export default function ConeCrusherProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero data={coneCrusherData.hero} />
        <ProductStats section={coneCrusherData.statsSection} stats={coneCrusherData.stats} />
        <ProductIntro data={coneCrusherData.intro} />
        <FeaturesSection 
          heading="Engineered For"
          highlightText="Superior Performance"
          subtitle="Our Prime Cone Crushers are built with advanced engineering and premium quality components to deliver unmatched performance, reliability and efficiency."
        />
        <SpecificationTable rows={coneCrusherData.specifications} section={coneCrusherData.specificationsSection} />
        <IndustryApplications industries={coneCrusherData.industries} section={coneCrusherData.industriesSection} />
        <ProcessTimeline section={coneCrusherData.processSection} steps={coneCrusherData.processSteps} />
        <VideoSection data={coneCrusherData.videoSection} />
        <RelatedMachines section={coneCrusherData.relatedSection} />
        <ContactSolutionSection data={coneCrusherData.contactSection} />
        <ResourcesSection resources={coneCrusherData.resources} section={coneCrusherData.resourcesSection} supportFeatures={coneCrusherData.supportFeatures} />
      </main>
      <Footer />
    </>
  );
}
