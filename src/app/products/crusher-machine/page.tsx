import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ProductDetailTemplate } from "@/components/product-detail/ProductDetailTemplate";
import { crusherMachineData } from "@/data/products/crusherMachineData";

export const metadata: Metadata = {
  title: "Crusher Machine Manufacturer in India | Pithal Machines",
  description:
    "Explore reliable crusher machines from Pithal Machines for mining, quarrying and aggregate production. Compare crushing solutions and request a quote today.",
};

export default function CrusherMachinePage() {
  return (
    <>
      <Header />
      <ProductDetailTemplate data={crusherMachineData} />
      <Footer />
    </>
  );
}
