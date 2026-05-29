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
import { jawCrusherData } from "@/data/products/jawCrusherData";

export const metadata: Metadata = {
  title: "Jaw Crushers | Pithal Machine Pvt.",
  description:
    "Heavy-duty jaw crushers engineered for primary crushing, high capacity, and long service life.",
};

export default function JawCrusherProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero data={jawCrusherData.hero} />
        <ProductStats section={jawCrusherData.statsSection} stats={jawCrusherData.stats} />
        <ProductIntro data={jawCrusherData.intro} />
        <FeaturesSection 
          heading="Engineered For"
          highlightText="Superior Performance"
          subtitle="Our jaw crushers are built with advanced engineering and premium quality components to deliver unmatched performance, reliability and efficiency."
        />
        <SpecificationTable rows={jawCrusherData.specifications} section={jawCrusherData.specificationsSection} />
        <IndustryApplications industries={jawCrusherData.industries} section={jawCrusherData.industriesSection} />
        <ProcessTimeline section={jawCrusherData.processSection} steps={jawCrusherData.processSteps} />
        <VideoSection data={jawCrusherData.videoSection} />
        <RelatedMachines machines={jawCrusherData.relatedMachines} section={jawCrusherData.relatedSection} />
        <ContactSolutionSection data={jawCrusherData.contactSection} />
        <ResourcesSection resources={jawCrusherData.resources} section={jawCrusherData.resourcesSection} supportFeatures={jawCrusherData.supportFeatures} />
      </main>
      <Footer />
    </>
  );
}
