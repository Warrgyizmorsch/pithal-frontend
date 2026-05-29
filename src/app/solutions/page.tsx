import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import Link from "next/link";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Aggregate Production",
      description: "Complete crushing and screening solutions for high-quality aggregate production with optimal size gradation.",
      industries: ["Construction", "Infrastructure", "Road Building"],
    },
    {
      title: "Mining & Quarrying",
      description: "Heavy-duty equipment designed for extracting and processing various mineral deposits efficiently.",
      industries: ["Mining", "Minerals", "Quarrying"],
    },
    {
      title: "Construction & Demolition",
      description: "Specialized solutions for recycling construction waste and demolition debris into reusable materials.",
      industries: ["Recycling", "Demolition", "Waste Management"],
    },
    {
      title: "Sand & Gravel Processing",
      description: "Precision equipment for producing clean sand and gravel meeting all construction standards.",
      industries: ["Construction", "Aggregates", "Infrastructure"],
    },
    {
      title: "Cement Manufacturing",
      description: "Robust crushing systems engineered for the demanding requirements of cement production.",
      industries: ["Cement", "Mining", "Manufacturing"],
    },
    {
      title: "Recycling Solutions",
      description: "Environmentally responsible equipment for recycling various materials into valuable secondary products.",
      industries: ["Recycling", "Sustainability", "Waste"],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-20">
            <SectionHeader
              eyebrow="Custom Solutions"
              title="Industry Solutions"
              highlight="Tailored"
              subtitle="Specialized solutions designed for your specific industry needs"
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, i) => (
                <div key={i} className="p-8 border border-border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.industries.map((industry, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-secondary/10 text-primary rounded-full font-semibold">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-gray-50 rounded-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-6">
                Don't see your specific need? We specialize in designing custom solutions tailored to your unique requirements.
              </p>
              <Link
                href="#contact"
                className="primary-btn inline-flex items-center justify-center rounded-[0.3rem] border px-6 py-3 text-sm font-bold uppercase tracking-widest text-white"
              >
                Get Custom Solution
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
