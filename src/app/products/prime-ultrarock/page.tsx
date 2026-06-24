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
import { primeUltraRockData } from "@/data/products/primeUltraRockData";

export const metadata: Metadata = {
  title: "Prime UltraRock | Pithal Machine Pvt.",
  description:
    "Advanced crushing technology engineered for extreme durability and high performance in rock processing.",
};

export default function PrimeUltraRockProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero data={primeUltraRockData.hero} />
        <ProductStats section={primeUltraRockData.statsSection} stats={primeUltraRockData.stats} />
        <ProductIntro data={primeUltraRockData.intro} />
        <FeaturesSection 
          heading="Engineered For"
          highlightText="Superior Performance"
          subtitle="Our Prime UltraRock systems are built with advanced engineering and premium quality components to deliver unmatched performance and reliability."
        />
        <SpecificationTable rows={primeUltraRockData.specifications} section={primeUltraRockData.specificationsSection} />
        <IndustryApplications industries={primeUltraRockData.industries} section={primeUltraRockData.industriesSection} />
        <ProcessTimeline section={primeUltraRockData.processSection} steps={primeUltraRockData.processSteps} />
        <VideoSection data={primeUltraRockData.videoSection} />
        <RelatedMachines section={primeUltraRockData.relatedSection} />
        <ContactSolutionSection data={primeUltraRockData.contactSection} />
        <ResourcesSection resources={primeUltraRockData.resources} section={primeUltraRockData.resourcesSection} supportFeatures={primeUltraRockData.supportFeatures} />
      </main>
      <Footer />
    </>
  );
}
