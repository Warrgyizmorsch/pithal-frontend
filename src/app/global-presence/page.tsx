import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function GlobalPresencePage() {
  const regions = [
    { name: "South Asia", countries: ["India", "Sri Lanka", "Bangladesh"], description: "Primary manufacturing hub with extensive customer support network" },
    { name: "Middle East", countries: ["Oman", "UAE", "Saudi Arabia"], description: "Serving major construction and mining projects" },
    { name: "Africa", countries: ["South Africa", "Egypt", "Kenya"], description: "Growing presence in mining and aggregate sectors" },
    { name: "Southeast Asia", countries: ["Indonesia", "Malaysia", "Thailand"], description: "Expanding operations in ASEAN region" },
    { name: "Europe", countries: ["UK", "Germany", "France"], description: "Premium segment and specialized solutions" },
    { name: "Americas", countries: ["USA", "Canada", "Brazil"], description: "North and South American market presence" },
  ];

  const offices = [
    { city: "Indore, India", type: "Headquarters", contact: "+91-XXXX-XXXX-XXX" },
    { city: "Bangalore, India", type: "Sales Office", contact: "+91-XXXX-XXXX-XXX" },
    { city: "Mumbai, India", type: "Sales Office", contact: "+91-XXXX-XXXX-XXX" },
    { city: "Oman", type: "Regional Office", contact: "+968-XXXX-XXXX" },
    { city: "South Africa", type: "Regional Office", contact: "+27-XX-XXXX-XXXX" },
    { city: "USA", type: "Sales Office", contact: "+1-XXX-XXX-XXXX" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-20">
            <SectionHeader
              eyebrow="Worldwide Presence"
              title="Global Reach"
              highlight="50+ Countries"
              subtitle="Serving customers across continents with local support and expertise"
            />

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Regional Presence</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regions.map((region, i) => (
                  <div key={i} className="p-6 border border-border rounded-lg">
                    <h4 className="text-lg font-bold text-primary mb-2">{region.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{region.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-secondary/10 text-primary rounded font-semibold">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-primary mb-8">Our Offices</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {offices.map((office, i) => (
                  <div key={i} className="p-6 border border-border rounded-lg">
                    <h4 className="text-lg font-bold text-primary mb-1">{office.city}</h4>
                    <p className="text-sm text-secondary font-semibold mb-3">{office.type}</p>
                    <p className="text-gray-600 text-sm">{office.contact}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 p-12 bg-gray-50 rounded-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">Need Local Support?</h3>
              <p className="text-gray-600 mb-6">
                Contact your nearest office or our headquarters for immediate assistance with product inquiries, support, or service requirements.
              </p>
              <button className="primary-btn inline-flex items-center justify-center rounded-[0.3rem] border px-6 py-3 text-sm font-bold uppercase tracking-widest text-white">
                Find Local Office
              </button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
