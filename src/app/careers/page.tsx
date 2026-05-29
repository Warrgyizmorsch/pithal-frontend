import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

export default function CareersPage() {
  const openings = [
    { title: "Mechanical Engineer", location: "Indore, India", type: "Full-time", experience: "2-5 years" },
    { title: "Sales Executive", location: "Multiple Locations", type: "Full-time", experience: "1-3 years" },
    { title: "Technical Support", location: "Bangalore, India", type: "Full-time", experience: "3-7 years" },
    { title: "Product Designer", location: "Indore, India", type: "Full-time", experience: "3-5 years" },
    { title: "Operations Manager", location: "Indore, India", type: "Full-time", experience: "5-10 years" },
    { title: "Business Development", location: "Middle East", type: "Full-time", experience: "3-8 years" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Container>
          <div className="py-20">
            <SectionHeader
              eyebrow="Join Our Team"
              title="Career Opportunities"
              highlight="Grow"
              subtitle="Be part of a company that's shaping the future of crushing technology"
            />

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Why Join Pithal Machines?</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Innovation", description: "Work on cutting-edge crushing and screening technology" },
                  { title: "Growth", description: "Clear career progression and professional development opportunities" },
                  { title: "Global Reach", description: "Contribute to projects across 50+ countries" },
                  { title: "Team", description: "Work with experienced and dedicated professionals" },
                  { title: "Benefits", description: "Competitive salary, health insurance, and benefits package" },
                  { title: "Culture", description: "Inclusive, collaborative, and supportive work environment" },
                ].map((benefit, i) => (
                  <div key={i} className="p-6 border border-border rounded-lg">
                    <h4 className="text-lg font-bold text-primary mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h3 className="text-3xl font-bold text-primary mb-8">Current Openings</h3>
              <div className="space-y-4">
                {openings.map((job, i) => (
                  <div key={i} className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-primary">{job.title}</h4>
                        <p className="text-gray-600 text-sm">{job.location}</p>
                      </div>
                      <span className="text-xs px-3 py-1 bg-secondary/10 text-primary rounded-full font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Experience: {job.experience}</p>
                    <button className="mt-4 text-secondary font-bold text-sm hover:text-secondary/80">
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 p-12 bg-gray-50 rounded-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">Don't See Your Role?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <button className="primary-btn inline-flex items-center justify-center rounded-[0.3rem] border px-6 py-3 text-sm font-bold uppercase tracking-widest text-white">
                Submit Your Resume
              </button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
