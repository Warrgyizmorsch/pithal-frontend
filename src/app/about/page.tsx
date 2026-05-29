import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/common/Card";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-20">
            <SectionHeader
              eyebrow="Learn About Us"
              title="Who We Are"
              highlight="Pithal Machines"
              subtitle="Leading manufacturer of crushing and screening equipment since 1999"
            />

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pithal Machines Limited has been a trusted name in the mining and aggregate processing industry for over 25 years. Starting with a vision to provide world-class crushing equipment, we have grown to become a leading manufacturer serving clients across 50+ countries.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to quality, innovation, and customer satisfaction has made us a preferred partner for quarrying, mining, and construction industries.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver innovative, reliable, and sustainable crushing and screening solutions that help our customers maximize productivity and minimize operational costs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We are dedicated to continuous improvement, technical excellence, and exceptional after-sales support.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Quality", description: "Uncompromising standards in every product we manufacture" },
                  { title: "Innovation", description: "Continuous R&D for better solutions" },
                  { title: "Reliability", description: "Consistent performance when it matters most" },
                  { title: "Support", description: "Comprehensive after-sales and technical support" },
                  { title: "Sustainability", description: "Environmentally responsible manufacturing" },
                  { title: "Integrity", description: "Honest dealings and ethical business practices" },
                ].map((value, i) => (
                  <Card key={i} className="p-6">
                    <h4 className="text-lg font-bold text-primary mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Key Milestones</h3>
              <div className="space-y-6">
                {[
                  { year: "1999", event: "Company Founded" },
                  { year: "2005", event: "First export to Southeast Asia" },
                  { year: "2010", event: "ISO 9001:2008 Certification" },
                  { year: "2015", event: "Expansion to 10+ countries" },
                  { year: "2020", event: "ISO 14001 & 45001 Certifications" },
                  { year: "2024", event: "Present in 50+ Countries Globally" },
                ].map((milestone, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="font-bold text-secondary text-lg min-w-fit">{milestone.year}</div>
                    <div className="pt-1">
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
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
