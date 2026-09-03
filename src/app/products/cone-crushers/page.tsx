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
import { coneCrusherData } from "@/data/products/coneCrusherData";

export const metadata: Metadata = {
  title: "Prime Cone Crusher | High-Performance Cone Crusher India",
  description:
    "Explore Pithal Prime Cone Crusher for efficient secondary and tertiary crushing. Built for reliable performance in mining, quarrying, construction and aggregate applications.",
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
          heading="Key Features of"
          highlightText="Prime Cone Crusher"
          subtitle="Engineered for efficient and reliable crushing, the Prime Cone Crusher combines robust construction with dependable performance for demanding industrial applications."
        />
        <SpecificationTable rows={coneCrusherData.specifications} section={coneCrusherData.specificationsSection} />
        <IndustryApplications industries={coneCrusherData.industries} section={coneCrusherData.industriesSection} />
        <ProcessTimeline section={coneCrusherData.processSection} steps={coneCrusherData.processSteps} />
        <VideoSection data={coneCrusherData.videoSection} />
        <RelatedMachines section={coneCrusherData.relatedSection} />
        <ContactSolutionSection data={coneCrusherData.contactSection} />
        <ResourcesSection resources={coneCrusherData.resources} section={coneCrusherData.resourcesSection} supportFeatures={coneCrusherData.supportFeatures} />
        {coneCrusherData.faqSection && <ProductFAQ data={coneCrusherData.faqSection} />}
        {coneCrusherData.longContent && <ProductLongContent data={coneCrusherData.longContent} />}
      </main>
      <Footer />
    </>
  );
}
