import { Container } from "@/components/common/Container";
import { HeroNavigation } from "@/components/common/HeroNavigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DealerForm } from "@/components/dealer/DealerForm";
import { StatCard } from "@/components/common/StatCard";
import {
  Handshake,
  TrendingUp,
  Globe2,
  ShieldCheck,
  ArrowRight,
  BarChart3,
  Users2,
  Settings2,
  Wrench,
  Quote,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const dealerStats = [
  { value: "Great", label: "Engineering Legacy", icon: "shield" },
  { value: "Grow With Us", label: "Become Partner", icon: "partners" },
  { value: "24/7", label: "Technical Support Access", icon: "headset" },
  { value: "100%", label: "Genuine Parts Guarantee", icon: "factory" },
];

const benefits = [
  {
    title: "Strong Brand Heritage",
    description:
      "Partner with a company known for engineering excellence and robust machinery that industrial leaders trust.",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive Marketing",
    description:
      "Access to professional marketing materials, digital assets, and lead generation support to grow your territory.",
    icon: BarChart3,
  },
  {
    title: "Technical Expertise",
    description:
      "Full technical training and direct access to our engineering team for complex project consultations.",
    icon: Settings2,
  },
  {
    title: "After-Sales Support",
    description:
      "Priority access to genuine spare parts and technical service support to ensure your customers' uptime.",
    icon: Wrench,
  },
];

const steps = [
  {
    number: "01",
    title: "Inquiry",
    text: "Fill out the dealer application form with your company details and experience.",
  },
  {
    number: "02",
    title: "Evaluation",
    text: "Our team reviews your application and territory potential for a strategic fit.",
  },
  {
    number: "03",
    title: "Partnership",
    text: "Finalize the agreement and receive your dealer onboarding package and training.",
  },
];

export default function BecomeADealerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden bg-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="/solutionspage/challenges we solve 14operations.jpg"
              alt="Crushing Plant Blueprint"
              fill
              className="object-cover object-center"
              sizes="100vw"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-[1]" />
          </div>
          <div className="relative z-10 flex h-full w-full max-w-[1520px] flex-col gap-10 justify-between px-10 py-6 lg:py-8">
            <div className="relative z-10 max-w-3xl">
              <HeroNavigation
                current="Become a Dealer"
                eyebrow="Global Partnership"
                light
              />
              <h1 className="headline text-[clamp(2.5rem,8vw,4.5rem)] leading-[1] text-white italic mb-6">
                Grow Your Business <br />
                <span className="text-secondary">With Pithal</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8 font-light">
                Join our network and represent world-class crushing and
                screening solutions. We are looking for dedicated partners to
                power industries worldwide.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 primary-btn px-8 py-4 rounded-[0.3rem] text-white font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
            </div>

            {/* Stats Bar Structure */}
            <div className="relative z-10 w-full max-w-[920px] bg-white rounded-lg shadow-2xl overflow-hidden border border-border">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
                {dealerStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-center items-center"
                  >
                    <StatCard {...stat} compact className="px-6 py-5 sm:px-8" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />

          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-1 w-8 bg-secondary rounded-full" />
                <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                  Dealer Benefits
                </span>
                <span className="h-1 w-8 bg-secondary rounded-full" />
              </div>
              <h2 className="headline text-4xl md:text-5xl text-primary mb-6">
                Why Partner With{" "}
                <span className="text-secondary italic">Pithal?</span>
              </h2>
              <p className="text-text-dark text-lg font-light leading-relaxed">
                We believe in long-term relationships built on trust, quality,
                and mutual growth. As a Pithal dealer, you get more than just
                products; you get a legacy of engineering excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-2xl border border-border bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:border-secondary/20 transition-all duration-500 flex flex-col sm:flex-row gap-6 items-start hover:-translate-y-2"
                >
                  {/* Hover accent bar */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-secondary transition-all duration-500 group-hover:h-2/3 rounded-r-full" />

                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-secondary group-hover:rotate-[10deg] transition-all duration-500 shadow-sm group-hover:shadow-secondary/20">
                    <benefit.icon
                      className="text-primary group-hover:text-white transition-colors duration-500"
                      size={32}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary uppercase tracking-wider mb-3 group-hover:text-secondary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-text-dark text-base leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {benefit.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                      Learn More <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(#092a5c 1.5px, transparent 1.5px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

          <Container className="relative">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                  Path to Partnership
                </p>
              </div>
              <h2 className="headline text-4xl md:text-5xl text-primary mb-6">
                Become a Dealer in{" "}
                <span className="text-secondary italic">3 Simple Steps</span>
              </h2>
              <p className="text-text-muted text-lg font-light max-w-2xl mx-auto leading-relaxed">
                Our onboarding process is engineered for speed and transparency,
                ensuring you can start delivering results to your territory as
                quickly as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px border-t-2 border-dashed border-gray-200 z-0" />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className="group relative z-10 flex flex-col items-center"
                >
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-8xl font-black text-primary/[0.03] select-none pointer-events-none transition-all duration-500 group-hover:text-secondary/[0.05] group-hover:-translate-y-2">
                    {step.number}
                  </span>

                  <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-full bg-white border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] group-hover:shadow-secondary/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-secondary overflow-hidden">
                      <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <span className="relative headline text-3xl text-primary group-hover:text-white transition-colors duration-500 italic">
                        {step.number}
                      </span>
                    </div>

                    {i < steps.length - 1 && (
                      <div className="hidden md:flex absolute left-[calc(100%+24px)] top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary animate-bounce-x z-20">
                        <ArrowRight size={24} strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-border group-hover:border-secondary/30 group-hover:shadow-xl transition-all duration-500 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-secondary transition-colors duration-500" />
                    <h3 className="text-xl font-bold text-primary uppercase tracking-wider mb-4 group-hover:text-secondary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Legacy / Stats Section */}
        <section className="relative overflow-hidden bg-primary py-24">
          {/* Enhanced Industrial Background */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] grayscale brightness-[0.2]"
            style={{
              backgroundImage: "url('/contactus/front.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-dark/90" />

          {/* Orange design accents */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/[0.03] -skew-x-12 translate-x-1/4 pointer-events-none" />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
              {/* Left: Content & Premium Quote */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[2px] w-12 bg-secondary" />
                  <span className="text-secondary font-black uppercase tracking-[0.15em] text-sm sm:text-base">
                    Engineering Excellence
                  </span>
                </div>

                <h2 className="headline text-[clamp(2.2rem,5vw,3.5rem)] leading-[1] text-white italic mb-8">
                  A Legacy Built on <br />
                  <span className="text-secondary">Global Trust</span>
                </h2>

                <p className="text-white/70 text-lg font-light leading-relaxed max-w-xl mb-10">
                  We don't just build machines; we build the foundations of
                  infrastructure. Partnering with Pithal means gaining access to
                  decades of industrial wisdom and a brand that stands for
                  absolute reliability.
                </p>

                {/* Premium Glass Quote Block */}
                <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-2xl group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-secondary group-hover:w-full group-hover:opacity-5 transition-all duration-700" />
                  <Quote
                    className="text-secondary/20 absolute top-4 right-6"
                    size={80}
                    strokeWidth={1}
                  />

                  <p className="relative z-10 text-white/90 text-lg italic font-light leading-relaxed mb-6">
                    "Our dealers are the face of our commitment. We don't see
                    them as distributors, but as strategic partners in our
                    mission to power global progress."
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-secondary" />
                    <p className="text-secondary font-bold uppercase tracking-widest text-xs">
                      Pithal Machines Leadership
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Modern Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    value: "great",
                    label: "Engineering Legacy",
                    icon: <TrendingUp size={24} />,
                    desc: "Decades of manufacturing wisdom",
                  },
                  {
                    value: "Become",
                    label: "Valuable Partner",
                    icon: <Globe2 size={24} />,
                    desc: "Represented across 6 continents",
                  },
                  {
                    value: "24/7",
                    label: "Priority Support",
                    icon: <Wrench size={24} />,
                    desc: "Direct engineering team access",
                  },
                  {
                    value: "100%",
                    label: "Genuine Spares",
                    icon: <ShieldCheck size={24} />,
                    desc: "Quality guaranteed performance",
                  },
                  {
                    value: "Custom",
                    label: "Local Pricing",
                    icon: <Handshake size={24} />,
                    desc: "Territory-based strategic edge",
                  },
                  {
                    value: "Fast",
                    label: "Onboarding",
                    icon: <Users2 size={24} />,
                    desc: "From training to market launch",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="group relative p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-secondary/40 transition-all duration-500 shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500 group-hover:rotate-[10deg]">
                        {stat.icon}
                      </div>
                      <p className="headline text-3xl text-white group-hover:text-secondary transition-colors duration-300">
                        {stat.value}
                      </p>
                    </div>
                    <div>
                      <p className="text-white font-bold uppercase tracking-wider text-xs mb-1">
                        {stat.label}
                      </p>
                      <p className="text-white/40 text-[11px] font-light leading-tight">
                        {stat.desc}
                      </p>
                    </div>
                    {/* Hover light effect */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
              <h2 className="headline text-4xl text-primary mb-3">
                Start Your <span className="text-secondary">Application</span>
              </h2>
              <p className="text-text-dark max-w-xl mx-auto font-light">
                Fill out the form below and our partnership manager will get in
                touch with you within 48 hours.
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
