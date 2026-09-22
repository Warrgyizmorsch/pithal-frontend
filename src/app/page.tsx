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

export const metadata: Metadata = {
  title: "Stone Crusher Machine Manufacturer in India | Pithal Machines",
  description:
    "Pithal Machines designs and manufactures jaw crushers, cone crusher, vibrating screens and complete crushing plants for mining, quarrying and aggregate production in India.",
};

export default function Home() {
  return (
    <>
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
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
