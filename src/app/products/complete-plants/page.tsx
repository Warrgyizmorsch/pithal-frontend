import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { completePlantData } from "@/data/products/completePlantData";

export const metadata: Metadata = {
  title: "Complete Crushing Plant Manufacturer in India | Pithal Machines",
  description:
    "Turnkey crushing plants with feeding, crushing, screening and conveying systems. Engineered for mining, quarrying and aggregate production in India.",
};

export default function CompletePlantsPage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={completePlantData} />
      <Footer />
    </>
  );
}
