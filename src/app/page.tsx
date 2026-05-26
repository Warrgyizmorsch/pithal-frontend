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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <WhyChoosePithal />
        <IndustriesSection />
        <ProjectsSection />
        <ProcessTimeline />
        <VideoShowcase />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
