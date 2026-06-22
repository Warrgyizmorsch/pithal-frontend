import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { crushersData } from "@/data/products/crushersData";
import Image from "next/image";
import Link from "next/link";

export default function CrushersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-primary-dark text-white lg:min-h-[calc(100svh-4.25rem)] xl:min-h-[calc(100svh-5.25rem)]">
          <Image
            alt="Crushing plant background for Pithal crushers"
            className="object-cover object-center"
            fill
            preload
            sizes="100vw"
            src="/images/products/cone-crusher/plant-bg.jpg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,19,45,.98)_0%,rgba(3,27,64,.94)_34%,rgba(3,27,64,.62)_54%,rgba(3,27,64,.12)_78%,rgba(3,27,64,0)_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,rgba(255,255,255,.28)_1px,transparent_0)] [background-size:20px_20px]" />

          <div className="relative z-10 flex w-full max-w-[1520px] flex-col gap-10 px-10 py-6 lg:min-h-[calc(100svh-4.25rem)] lg:justify-between lg:py-8 xl:min-h-[calc(100svh-5.25rem)]">
            <div>
              <div className="max-w-[720px]">
                <HeroNavigation current="Crushers" eyebrow={crushersData.intro.eyebrow} light />
                <h1 className="headline mb-5 text-[clamp(2.3rem,5.5vw,4.5rem)] uppercase leading-[1.02] text-white">
                  {crushersData.intro.highlight} <br />
                  <span className="text-secondary">Crushing Solutions.</span>
                </h1>
                <p className="max-w-[560px] text-sm font-medium leading-7 text-white/82 md:text-[16px]">
                  {crushersData.intro.subtitle}
                </p>
                <Link
                  href="#details"
                  className="primary-btn mt-8 inline-flex min-h-[52px] items-center justify-center rounded-[0.3rem] border px-7 text-xs font-black uppercase tracking-[0.14em] text-white"
                >
                  View Specifications
                </Link>
              </div>
            </div>

            <div className="relative z-20 rounded-xl border border-white/15 bg-primary-dark/82 p-3 text-white shadow-[0_18px_44px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:rounded-2xl sm:p-4 md:px-5 md:py-4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/20">
                {crushersData.specs.map((spec) => (
                  <article className="p-3 lg:px-5" key={spec.label}>
                    <p className="headline text-[24px] leading-none text-secondary md:text-[30px]">
                      {spec.value}
                    </p>
                    <p className="mt-2 text-xs font-black uppercase tracking-wider text-white">
                      {spec.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 lg:py-20" id="details">
          <Container>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="relative h-80 overflow-hidden rounded-lg border border-border bg-bg-light">
                <Image
                  alt="Pithal crushing equipment"
                  className="object-contain p-8"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  src="/images/products/crushers.png"
                />
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600">{crushersData.description}</p>

                <div>
                  <h3 className="mb-4 text-xl font-bold text-primary">Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {crushersData.specs.map((spec, i) => (
                      <div key={i} className="rounded border border-border p-4">
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
              <h3 className="mb-8 text-3xl font-bold text-primary">Key Features</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {crushersData.features.map((feature, i) => (
                  <div key={i} className="rounded-lg border border-border p-6">
                    <h4 className="mb-2 text-lg font-bold text-primary">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="mb-8 text-3xl font-bold text-primary">Industries Served</h3>
              <div className="flex flex-wrap gap-3">
                {crushersData.industries.map((industry, i) => (
                  <span key={i} className="rounded-full bg-secondary/10 px-4 py-2 font-semibold text-primary">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="mb-8 text-3xl font-bold text-primary">Related Products</h3>
              <div className="grid gap-6 md:grid-cols-3">
                {crushersData.relatedProducts.map((product, i) => (
                  <Link
                    key={i}
                    href="/products"
                    className="rounded-lg border border-border p-6 transition-shadow hover:shadow-lg"
                  >
                    <p className="font-bold text-primary">{product}</p>
                  </Link>
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
