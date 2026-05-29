import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projects } from "@/data/homeData";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-20">
            <SectionHeader
              eyebrow="Success Stories"
              title="Our Projects"
              highlight="Global"
              subtitle="Showcasing our expertise through successful installations worldwide"
            />

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-border">
                  <div className="bg-gray-200 h-48 flex items-center justify-center">
                    <p className="text-gray-500">Project Image</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">{project.location}</h3>
                    <p className="text-gray-600 mb-4">{project.plant}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-secondary">{project.capacity}</span>
                      <span className="text-xs px-3 py-1 bg-secondary/10 text-primary rounded-full font-semibold">
                        Installed
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-primary mb-8">Project Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 border border-border rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-3">Global Coverage</h4>
                  <p className="text-gray-600">
                    Our equipment is deployed across 50+ countries, serving diverse industries and applications. From the mineral-rich mines of Africa to the construction projects in Southeast Asia, Pithal machines deliver consistent performance.
                  </p>
                </div>
                <div className="p-8 border border-border rounded-lg">
                  <h4 className="text-xl font-bold text-primary mb-3">Diverse Capacities</h4>
                  <p className="text-gray-600">
                    We have successfully installed crushing plants ranging from 100 TPH to 1200+ TPH, meeting the requirements of small quarries to large-scale mining operations and cement manufacturers.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-12 bg-gray-50 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">Start Your Project Today</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied customers worldwide who trust Pithal Machines for their crushing and screening solutions.
              </p>
              <button className="primary-btn inline-flex items-center justify-center rounded-[0.3rem] border px-6 py-3 text-sm font-bold uppercase tracking-widest text-white">
                Contact Us
              </button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
