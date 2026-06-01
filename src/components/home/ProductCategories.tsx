import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { products } from "@/data/homeData";
import { ArrowRight, Zap, Grid3x3, Boxes, Factory } from "lucide-react";

const productIcons = [
  <div key="crushers" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Zap className="text-secondary" size={24} />
  </div>,
  <div key="screening" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Grid3x3 className="text-secondary" size={24} />
  </div>,
  <div key="feeders" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Boxes className="text-secondary" size={24} />
  </div>,
  <div key="plants" className="w-12 h-12 border-2 border-secondary rounded flex items-center justify-center">
    <Factory className="text-secondary" size={24} />
  </div>,
];

export function ProductCategories() {
  return (
    <section className="section-space bg-bg-light" id="products">
      
      <Container>
        
        <SectionHeader
          eyebrow="Our Products"
          highlight="Engineered for Results."
          subtitle="High-performance crushing and screening solutions designed to deliver maximum productivity, reliability and value in every operation."
          title="Built for Performance."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} icon={productIcons[index]} />
          ))}
        </div>
        <div className="mt-9 text-center">
          <Button href="#contact" variant="outlineNavy">View All Products <ArrowRight aria-hidden size={14} /></Button>
        </div>
      </Container>
    </section>
  );
}
