import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { screeningData } from "@/data/products/screeningData";
import Link from "next/link";

export default function ScreeningPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-20">
            <Link href="/products" className="text-secondary hover:text-secondary/80 mb-4 inline-block">
              ← Back to Products
            </Link>

            <SectionHeader
              eyebrow={screeningData.intro.eyebrow}
              title={screeningData.intro.title}
              highlight={screeningData.intro.highlight}
              subtitle={screeningData.intro.subtitle}
            />

            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500">Product Image</p>
              </div>

              <div className="space-y-6">
                <p className="text-gray-600 text-lg">{screeningData.description}</p>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {screeningData.specs.map((spec, i) => (
                      <div key={i} className="border border-border rounded p-4">
                        <p className="text-sm text-gray-600">{spec.label}</p>
                        <p className="text-lg font-bold text-primary">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="primary-btn inline-flex items-center justify-center rounded-[0.3rem] border px-6 py-3 text-sm font-bold uppercase tracking-widest text-white"
                >
                  Request Quote
                </Link>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {screeningData.features.map((feature, i) => (
                  <div key={i} className="p-6 border border-border rounded-lg">
                    <h4 className="text-lg font-bold text-primary mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Industries Served</h3>
              <div className="flex flex-wrap gap-3">
                {screeningData.industries.map((industry, i) => (
                  <span key={i} className="px-4 py-2 bg-secondary/10 text-primary rounded-full font-semibold">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Related Products</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {screeningData.relatedProducts.map((product, i) => (
                  <Link
                    key={i}
                    href="/products"
                    className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <p className="font-bold text-primary">{product}</p>
                  </Link>
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
