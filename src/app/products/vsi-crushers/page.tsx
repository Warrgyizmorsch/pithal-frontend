import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { vsiCrusherData } from "@/data/products/additionalProductData";

export const metadata: Metadata = {
  title: "Prime VSI Crushers | Pithal Machine Pvt.",
  description:
    "Prime VSI Crushers engineered for cubical aggregate shape, fine crushing, and M-Sand production.",
};

export default function VsiCrushersPage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={vsiCrusherData} />
      <Footer />
    </>
  );
}
