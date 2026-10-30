import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { HeroSection } from "@/components/home/HeroSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ProductCategories } from "@/components/home/ProductCategories";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import WhyChoosePithal from "@/components/home/WhyChoosePithal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FAQSection } from "@/components/home/FAQSection";
import { ProductLongContent } from "@/components/product-detail/ProductLongContent";
import { homeLongContent } from "@/data/homeData";
import {
  OrganizationSchema,
  WebSiteSchema,
  WebPageSchema,
} from "@/components/seo";

export const metadata: Metadata = {
  title: "Stone Crusher Manufacturer in India | Pithal Machines",
  description:
    "Looking for a stone crusher manufacturer in India? Explore jaw crushers, cone crushers, VSI crushers, vibrating screens and complete crushing plants from Pithal Machines.",
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <WebPageSchema
        title="Stone Crusher Manufacturer in India | Pithal Machines"
        description="Looking for a stone crusher manufacturer in India? Explore jaw crushers, cone crushers, VSI crushers, vibrating screens and complete crushing plants from Pithal Machines."
        url="/"
      />
      <Header />
      <main className="relative z-0 bg-bg-light">
        <HeroSection />
        <ProductCategories />
        <WhyChoosePithal />
        <IndustriesSection />
        <ProjectsSection />
        <ProcessTimeline />
        <VideoShowcase />
        <FAQSection />
        <ProductLongContent data={homeLongContent} />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
