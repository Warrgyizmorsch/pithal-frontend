import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { conveyorSystemData } from "@/data/products/additionalProductData";

export const metadata: Metadata = {
  title: "Conveyor Systems | Pithal Machine Pvt.",
  description:
    "Belt conveyor systems engineered for efficient material transfer across crushing and screening plants.",
};

export default function ConveyorSystemsPage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={conveyorSystemData} />
      <Footer />
    </>
  );
}
