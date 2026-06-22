import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { vibratingScreenData } from "@/data/products/additionalProductData";

export const metadata: Metadata = {
  title: "Prime Vibrating Screens | Pithal Machine Pvt.",
  description:
    "High-efficiency Prime Vibrating Screens engineered for accurate sizing, grading, and material separation.",
};

export default function ScreeningPage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={vibratingScreenData} />
      <Footer />
    </>
  );
}
