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
                Join our network and represent world-class crushing and screening solutions. We are looking for dedicated partners to power industries worldwide.
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

        {/* How It Works Section */}
        <section className="py-16 bg-[#f1f4f8] relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #092a5c 1px, transparent 1px), linear-gradient(to bottom, #092a5c 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <Container className="relative">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="flex items-center gap-[4px]">
                  {[0, 1, 2].map((i) => (
                    <span key={i} aria-hidden className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
                <p className="text-[12px] font-black uppercase tracking-[0.22em] text-secondary">Simple Process</p>
                <span className="flex items-center gap-[4px]">
                  {[0, 1, 2].map((i) => (
                    <span key={i} aria-hidden className="inline-block h-[7px] w-[3.5px] skew-x-[-28deg] bg-secondary" />
                  ))}
                </span>
              </div>
              <h2 className="headline text-[clamp(2rem,4.5vw,3rem)] leading-[1.1] text-primary font-black uppercase">
                Become a Dealer in <span className="text-secondary italic">3 Simple Steps</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-text-muted max-w-xl mx-auto">
                Our onboarding process is designed to be fast, transparent, and rewarding — getting you to market as quickly as possible.
              </p>
            </div>

            <div className="relative grid md:grid-cols-3 gap-6 lg:gap-10">
              {/* Connecting line (desktop only) */}
              <div aria-hidden className="hidden md:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-[2px] bg-gradient-to-r from-secondary/30 via-secondary to-secondary/30 z-0" />

              {steps.map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  {/* Number badge */}
                  <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-secondary shadow-[0_8px_24px_rgba(250,89,2,0.15)] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <span className="headline text-2xl text-secondary font-black">{step.number}</span>
                  </div>
                  <div className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-full">
                    <h3 className="text-sm font-black uppercase tracking-[0.12em] text-primary mb-3">{step.title}</h3>
                    <div className="h-[2px] w-8 bg-secondary mx-auto mb-3" />
                    <p className="text-xs leading-[1.7] text-text-muted">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Legacy / Stats Section */}
        <section className="relative overflow-hidden bg-primary py-16">
          {/* Background texture */}
          <div aria-hidden className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          {/* Orange slant decoration */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[38%] bg-secondary/8 skew-x-[-14deg] translate-x-[20%] hidden lg:block" />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
              {/* Left: Quote & text */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[2px] w-8 bg-secondary" />
                  <span className="text-secondary font-black uppercase tracking-[0.2em] text-xs">Your Growth. Our Commitment.</span>
                </div>
                <h2 className="headline text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.1] text-white font-black uppercase mb-5">
                  A Partnership Built on <span className="text-secondary">Engineering Legacy</span>
                </h2>
                <p className="text-white/75 text-sm leading-7 max-w-lg mb-8">
                  We believe in long-term relationships built on trust, quality, and mutual growth. As a Pithal dealer, you get more than just products — you get decades of industrial engineering expertise, a proven brand, and a team that supports your success at every step.
                </p>
                {/* Quote block */}
                <div className="border-l-4 border-secondary pl-5 py-2">
                  <p className="text-white/90 text-sm italic leading-7">
                    "Our dealers are not just distributors — they are the face of Pithal in their regions. We invest in their growth because their success is our success."
                  </p>
                  <p className="mt-3 text-secondary text-xs font-black uppercase tracking-wider">— Pithal Machines Leadership</p>
                </div>
              </div>

              {/* Right: Stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "25+", label: "Years of Manufacturing Excellence", icon: <TrendingUp size={22} strokeWidth={1.8} /> },
                  { value: "50+", label: "Dealer Partners Worldwide", icon: <Globe2 size={22} strokeWidth={1.8} /> },
                  { value: "24/7", label: "Technical Support Access", icon: <Wrench size={22} strokeWidth={1.8} /> },
                  { value: "100%", label: "Genuine Spare Parts Guarantee", icon: <ShieldCheck size={22} strokeWidth={1.8} /> },
                  { value: "Custom", label: "Territory-Based Pricing", icon: <Handshake size={22} strokeWidth={1.8} /> },
                  { value: "Fast", label: "Onboarding & Training Program", icon: <Users2 size={22} strokeWidth={1.8} /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/[0.06] border border-white/10 rounded-xl p-4 flex gap-3 items-start hover:bg-white/10 transition-colors duration-300">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                      {stat.icon}
                    </span>
                    <div>
                      <p className="headline text-xl text-white leading-none">{stat.value}</p>
                      <p className="mt-1 text-[11px] font-medium text-white/60 leading-[1.4]">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
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
