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
import { conveyorSystemData } from "@/data/products/conveyorSystemData";

export const metadata: Metadata = {
  title: "conveyor system manufacturer| Prime Conveyor System",
  description:
    "Prime Conveyor Systems are designed for efficient material handling in mining, quarrying and crushing plants, offering reliable performance and high-capacity material transfer.",
};

export default function ConveyorSystemsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero data={conveyorSystemData.hero} />
        <ProductStats section={conveyorSystemData.statsSection} stats={conveyorSystemData.stats} />
        <ProductIntro data={conveyorSystemData.intro} />
        <FeaturesSection
          heading="Key Features of"
          highlightText="Prime Conveyor System"
          subtitle="Engineered for efficient and reliable material handling, the Prime Conveyor System combines robust construction with dependable performance for demanding industrial applications."
        />
        <SpecificationTable rows={conveyorSystemData.specifications} section={conveyorSystemData.specificationsSection} />
        <IndustryApplications industries={conveyorSystemData.industries} section={conveyorSystemData.industriesSection} />
        <ProcessTimeline section={conveyorSystemData.processSection} steps={conveyorSystemData.processSteps} />
        <VideoSection data={conveyorSystemData.videoSection} />
        <RelatedMachines section={conveyorSystemData.relatedSection} />
        <ContactSolutionSection data={conveyorSystemData.contactSection} />
        <ResourcesSection resources={conveyorSystemData.resources} section={conveyorSystemData.resourcesSection} supportFeatures={conveyorSystemData.supportFeatures} />
        {conveyorSystemData.faqSection && <ProductFAQ data={conveyorSystemData.faqSection} />}
        {conveyorSystemData.longContent && <ProductLongContent data={conveyorSystemData.longContent} />}
      </main>
      <Footer />
    </>
  );
}
