import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductCard } from "@/components/common/ProductCard";
import { products } from "@/data/homeData";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="pt-8 pb-20">
            <div className="relative mb-6">
              {/* Backdrop Tagline Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 opacity-30 sm:opacity-50 overflow-hidden translate-y-[120px]">
                <span className="text-[3.2vw] font-black uppercase tracking-[0.2em] text-slate-200 whitespace-nowrap">
                  Crushing Strength, Delivering Results.
                </span>
              </div>

              <div className="relative z-10">
                <SectionHeader
                  eyebrow="Our Range"
                  title="Product Categories"
                  highlight="Comprehensive"
                  subtitle="Explore our complete range of crushing and screening equipment"
                />
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-primary mb-8">Product Features</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "Heavy-Duty Construction", description: "Built to withstand the most demanding quarry conditions" },
                  { title: "Energy Efficient", description: "Optimized designs that minimize power consumption" },
                  { title: "Low Maintenance", description: "Easy access to wear parts and simple service requirements" },
                  { title: "Global Standards", description: "Manufactured to international ISO and CE standards" },
                  { title: "Expert Support", description: "Technical expertise and spare parts worldwide" },
                  { title: "Custom Solutions", description: "Tailored configurations for specific applications" },
                ].map((feature, i) => (
                  <div key={i} className="p-6 border border-border rounded-lg">
                    <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
