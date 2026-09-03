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
import { vsiCrusherData } from "@/data/products/vsiCrusherData";

export const metadata: Metadata = {
  title: "Prime VSI Crusher | Vertical Shaft Impact Crusher India",
  description:
    "Explore Pithal Prime VSI Crusher for efficient shaping and fine crushing of aggregates. Designed for reliable performance in mining, quarrying, construction and material processing.",
};

export default function VsiCrushersPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero data={vsiCrusherData.hero} />
        <ProductStats section={vsiCrusherData.statsSection} stats={vsiCrusherData.stats} />
        <ProductIntro data={vsiCrusherData.intro} />
        <FeaturesSection
          heading="Key Features of"
          highlightText="Prime Vertical Shaft Impactor"
          subtitle="Engineered for efficient and precise crushing, the Prime VSI Crusher combines robust construction with reliable performance for demanding material-processing applications."
        />
        <SpecificationTable rows={vsiCrusherData.specifications} section={vsiCrusherData.specificationsSection} />
        <IndustryApplications industries={vsiCrusherData.industries} section={vsiCrusherData.industriesSection} />
        <ProcessTimeline section={vsiCrusherData.processSection} steps={vsiCrusherData.processSteps} />
        <VideoSection data={vsiCrusherData.videoSection} />
        <RelatedMachines section={vsiCrusherData.relatedSection} />
        <ContactSolutionSection data={vsiCrusherData.contactSection} />
        <ResourcesSection resources={vsiCrusherData.resources} section={vsiCrusherData.resourcesSection} supportFeatures={vsiCrusherData.supportFeatures} />
        {vsiCrusherData.faqSection && <ProductFAQ data={vsiCrusherData.faqSection} />}
        {vsiCrusherData.longContent && <ProductLongContent data={vsiCrusherData.longContent} />}
      </main>
      <Footer />
    </>
  );
}
