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
import { jawCrusherData } from "@/data/products/jawCrusherData";

export const metadata: Metadata = {
  title: "Jaw Crusher Machine Manufacturer | Pithal Machine",
  description:
    "Get a reliable jaw crusher machine from Pithal Machine, designed for efficient crushing of hard materials. Explore durable, high-performance crushing solutions.",
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
          heading="Key Features of Prime"
          highlightText="Jaw Crusher"
          subtitle="Engineered for powerful and efficient crushing, the Prime Jaw Crusher combines robust construction with reliable performance for demanding industrial applications."

        />
        <SpecificationTable rows={jawCrusherData.specifications} section={jawCrusherData.specificationsSection} />
        <IndustryApplications industries={jawCrusherData.industries} section={jawCrusherData.industriesSection} hideBottomBanner />
        <ProcessTimeline section={jawCrusherData.processSection} steps={jawCrusherData.processSteps} />
        <VideoSection data={jawCrusherData.videoSection} />
        <RelatedMachines section={jawCrusherData.relatedSection} />
        <ContactSolutionSection data={jawCrusherData.contactSection} />
        <ResourcesSection resources={jawCrusherData.resources} section={jawCrusherData.resourcesSection} supportFeatures={jawCrusherData.supportFeatures} />
        {jawCrusherData.faqSection && <ProductFAQ data={jawCrusherData.faqSection} />}
        {jawCrusherData.longContent && <ProductLongContent data={jawCrusherData.longContent} />}
      </main>
      <Footer />
    </>
  );
}
