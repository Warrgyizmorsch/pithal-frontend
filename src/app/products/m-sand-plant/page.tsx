import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { mSandPlantData } from "@/data/products/mSandPlantData";

export const metadata: Metadata = {
  title: "M-Sand Crusher Plant & Manufacturing Machine | Pithal Machines",
  description:
    "Get a complete M-sand crusher plant with VSI crusher, sand making machine, screening and washing systems. Explore M-sand plant cost and customized solutions from Pithal Machines.",
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
