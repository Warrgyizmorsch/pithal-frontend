import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProductCard } from "@/components/common/ProductCard";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { products } from "@/data/homeData";
import Image from "next/image";

const productHeroStats = [
  { value: "8+", label: "Machine Families", desc: "Crushers, screens, feeders and plants" },
  { value: "600+", label: "TPH Capacity", desc: "Built for demanding quarry output" },
  { value: "24x7", label: "Support", desc: "Technical guidance and spare parts" },
  { value: "ISO", label: "Quality", desc: "Global manufacturing standards" },
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-white text-primary lg:min-h-[calc(100svh-4.25rem)] xl:min-h-[calc(100svh-5.25rem)]">
          <Image
            alt="Pithal crushing and screening machinery in a quarry plant"
            className="object-cover object-center"
            fill
            preload
            sizes="100vw"
            src="/images/products-images/universal-quarry-plant-background.png"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.98)_24%,rgba(255,255,255,.86)_42%,rgba(255,255,255,.24)_68%,rgba(255,255,255,0)_100%)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[58%] industrial-grid opacity-60" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/55 to-transparent" />

          <div className="relative z-10 flex w-full max-w-[1520px] flex-col gap-10 px-5 sm:px-8 lg:px-10 py-6 lg:min-h-[calc(100svh-4.25rem)] lg:justify-between lg:py-8 xl:min-h-[calc(100svh-5.25rem)]">
            <div>
              <div className="max-w-[680px] flex flex-col items-center lg:items-start text-center lg:text-left w-full mx-auto lg:mx-0">
                <HeroNavigation current="Products" eyebrow="Our Range" />
                <h1 className="headline mb-5 text-[clamp(2.3rem,5.5vw,4.4rem)] uppercase leading-[1.02] text-primary text-center lg:text-left">
                  Comprehensive <br />
                  <span className="text-secondary">Product Categories.</span>
                </h1>
                <p className="max-w-[560px] text-sm font-medium leading-7 text-primary/80 md:text-[16px] text-center lg:text-left mx-auto lg:mx-0">
                  Explore our complete range of crushing and screening equipment,
                  engineered for reliable output across mining, aggregates,
                  infrastructure and recycling applications.
                </p>
              </div>
            </div>

            <div className="relative z-20 rounded-xl bg-white p-3 text-slate-800 shadow-[0_18px_44px_rgba(3,27,64,0.12)] sm:rounded-2xl sm:p-4 md:px-5 md:py-4">
              <div className="grid grid-cols-2 divide-y-0 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {productHeroStats.map((stat) => (
                  <article className="p-2 sm:p-4 lg:p-5 flex flex-col items-center text-center sm:items-start sm:text-left" key={stat.label}>
                    <p className="headline text-[28px] leading-none text-secondary md:text-[34px]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-black uppercase tracking-wider text-primary">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                      {stat.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20">
          <Container>
            <SectionHeader
              eyebrow="Product Families"
              title="Built For"
              highlight="Heavy-Duty Work"
              subtitle="Choose the machine family that fits your material, capacity and site conditions."
            />

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>

            <div className="mt-20">
              <h3 className="mb-8 text-3xl font-bold text-primary">Product Features</h3>
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
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
