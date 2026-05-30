import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { vibratingFeederData } from "@/data/products/additionalProductData";

export const metadata: Metadata = {
  title: "Vibrating Feeders | Pithal Machine Pvt.",
  description:
    "Heavy-duty vibrating feeders engineered for controlled material flow and reliable plant performance.",
};

export default function FeedersPage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={vibratingFeederData} />
      <Footer />
    </>
  );
}
