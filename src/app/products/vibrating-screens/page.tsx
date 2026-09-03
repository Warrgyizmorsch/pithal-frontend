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
import { vibratingScreenData } from "@/data/products/vibratingScreenData";

export const metadata: Metadata = {
  title: "Vibrating Screen Machine | Prime Vibrating Screens",
  description:
    "Get a reliable jaw crusher machine from Pithal Machine, designed for efficient crushing of hard materials. Explore durable, high-performance crushing solutions.",
};

export default function VibratingScreensPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero data={vibratingScreenData.hero} />
        <ProductStats section={vibratingScreenData.statsSection} stats={vibratingScreenData.stats} />
        <ProductIntro data={vibratingScreenData.intro} />
        <FeaturesSection
          heading="Key Features of"
          highlightText="Prime Vibrating Screens"
          subtitle="Built for efficient screening, the Prime Vibrating Screen combines robust construction, reliable vibration and consistent material separation."
        />
        <SpecificationTable rows={vibratingScreenData.specifications} section={vibratingScreenData.specificationsSection} />
        <IndustryApplications industries={vibratingScreenData.industries} section={vibratingScreenData.industriesSection} />
        <ProcessTimeline section={vibratingScreenData.processSection} steps={vibratingScreenData.processSteps} />
        <VideoSection data={vibratingScreenData.videoSection} />
        <RelatedMachines section={vibratingScreenData.relatedSection} />
        <ContactSolutionSection data={vibratingScreenData.contactSection} />
        <ResourcesSection resources={vibratingScreenData.resources} section={vibratingScreenData.resourcesSection} supportFeatures={vibratingScreenData.supportFeatures} />
        {vibratingScreenData.faqSection && <ProductFAQ data={vibratingScreenData.faqSection} />}
        {vibratingScreenData.longContent && <ProductLongContent data={vibratingScreenData.longContent} />}
      </main>
      <Footer />
    </>
  );
}
