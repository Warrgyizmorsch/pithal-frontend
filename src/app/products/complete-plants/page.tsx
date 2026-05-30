import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { completePlantsData } from "@/data/products/additionalProductData";

export const metadata: Metadata = {
  title: "Complete Plants | Pithal Machine Pvt.",
  description:
    "Turnkey crushing and screening plants engineered for integrated production and reliable output.",
};

export default function CompletePlantsPage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={completePlantsData} />
      <Footer />
    </>
  );
}
