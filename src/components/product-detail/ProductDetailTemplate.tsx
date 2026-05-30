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
import type { ProductDetailData } from "@/data/products/productDetailTypes";

export function ProductDetailTemplate({ data }: { data: ProductDetailData }) {
  return (
    <main>
      <ProductHero data={data.hero} />
      <ProductStats section={data.statsSection} stats={data.stats} />
      <ProductIntro data={data.intro} />
      <FeaturesSection features={data.performanceFeatures} section={data.performanceSection} />
      <SpecificationTable rows={data.specifications} section={data.specificationsSection} />
      <IndustryApplications industries={data.industries} section={data.industriesSection} />
      <ProcessTimeline section={data.processSection} steps={data.processSteps} />
      <VideoSection data={data.videoSection} />
      <RelatedMachines machines={data.relatedMachines} section={data.relatedSection} />
      <ContactSolutionSection data={data.contactSection} />
      <ResourcesSection resources={data.resources} section={data.resourcesSection} supportFeatures={data.supportFeatures} />
    </main>
  );
}
