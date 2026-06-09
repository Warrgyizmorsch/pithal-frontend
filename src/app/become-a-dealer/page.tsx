import { Container } from "@/components/common/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DealerForm } from "@/components/dealer/DealerForm";
import { 
  Handshake, 
  TrendingUp, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  BarChart3,
  Users2,
  Settings2,
  Wrench
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    title: "Strong Brand Heritage",
    description: "Partner with a company known for engineering excellence and robust machinery that industrial leaders trust.",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive Marketing",
    description: "Access to professional marketing materials, digital assets, and lead generation support to grow your territory.",
    icon: BarChart3,
  },
  {
    title: "Technical Expertise",
    description: "Full technical training and direct access to our engineering team for complex project consultations.",
    icon: Settings2,
  },
  {
    title: "After-Sales Support",
    description: "Priority access to genuine spare parts and technical service support to ensure your customers' uptime.",
    icon: Wrench,
  },
];

const steps = [
  {
    number: "01",
    title: "Inquiry",
    text: "Fill out the dealer application form with your company details and experience."
  },
  {
    number: "02",
    title: "Evaluation",
    text: "Our team reviews your application and territory potential for a strategic fit."
  },
  {
    number: "03",
    title: "Partnership",
    text: "Finalize the agreement and receive your dealer onboarding package and training."
  }
];

export default function BecomeADealerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-primary">
          <Image
            src="/solutionspage/challenges we solve 14operations.jpg"
            alt="Crushing Plant Blueprint"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
          
          <Container className="relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Global Partnership</span>
              </div>
              <h1 className="headline text-[clamp(2.5rem,8vw,4.5rem)] leading-[1] text-white italic mb-6">
                Grow Your Business <br />
                <span className="text-secondary">With Pithal</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8 font-light">
                Join our global network and represent world-class crushing and screening solutions. We are looking for dedicated partners to power industries worldwide.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 primary-btn px-8 py-4 rounded-[0.3rem] text-white font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
            </div>
          </Container>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-white relative">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="headline text-4xl text-primary mb-4">Why Partner With <span className="text-secondary italic">Pithal?</span></h2>
              <div className="h-1 w-20 bg-secondary mx-auto mb-4" />
              <p className="text-text-dark text-lg font-light">
                We believe in long-term relationships built on trust, quality, and mutual growth. As a Pithal dealer, you get more than just products; you get a legacy of engineering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="group p-6 rounded-xl border border-border bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-secondary/30 transition-all duration-300 flex gap-5 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                    <benefit.icon className="text-primary group-hover:text-secondary transition-colors" size={30} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-2">{benefit.title}</h3>
                    <p className="text-text-dark text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Form Section */}
        <div id="contact" className="py-12 bg-gray-50 border-t border-border">
          <Container>
            <div className="text-center mb-10">
              <h2 className="headline text-4xl text-primary mb-3">Start Your <span className="text-secondary">Application</span></h2>
              <p className="text-text-dark max-w-xl mx-auto font-light">
                Fill out the form below and our partnership manager will get in touch with you within 48 hours.
              </p>
            </div>
          </Container>
          <DealerForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
