import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { mSandPlantData } from "@/data/products/mSandPlantData";

export const metadata: Metadata = {
  title: "M Sand Plant Manufacturer in India | Pithal Machines",
  description:
    "Explore M sand crusher plant solutions for manufactured sand production, including crushing, sand-making and screening equipment from Pithal Machines.",
};

export default function MSandPlantPage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={mSandPlantData} />
      <Footer />
    </>
  );
}
