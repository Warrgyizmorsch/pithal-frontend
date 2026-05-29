import { ShieldCheck, Wrench, Weight, Fuel, Hexagon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const defaultFeatures: Feature[] = [
  {
    icon: <ShieldCheck size={32} strokeWidth={1.8} className="text-secondary" />,
    title: "High Crushing Ratio",
    description: "Optimized chamber design ensures maximum reduction ratio for higher output.",
  },
  {
    icon: <Wrench size={32} strokeWidth={1.8} className="text-secondary" />,
    title: "Low Maintenance",
    description: "Easy access design and fewer moving parts reduce maintenance time and cost.",
  },
  {
    icon: <Weight size={32} strokeWidth={1.8} className="text-secondary" />,
    title: "Heavy Duty Build",
    description: "Rugged construction with premium materials for longer service life.",
  },
  {
    icon: <Fuel size={32} strokeWidth={1.8} className="text-secondary" />,
    title: "Fuel Efficiency",
    description: "Engineered for optimal power utilization and lower operating costs.",
  },
  {
    icon: <Hexagon size={32} strokeWidth={1.8} className="text-secondary" />,
    title: "Wear Resistant Parts",
    description: "High quality manganese steel components for maximum durability.",
  },
];

export function FeaturesSection({
  features = defaultFeatures,
  heading = "Engineered For",
  highlightText = "Superior Performance",
  subtitle = "Our jaw crushers are built with advanced engineering and premium quality components to deliver unmatched performance, reliability and efficiency.",
}: {
  features?: Feature[];
  heading?: string;
  highlightText?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#f7f5f2] py-10 md:py-10 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-38 bg-[radial-gradient(circle_at_top,rgba(255,147,34,0.12),transparent_55%)]" />
      <Container>
        <SectionHeader
          eyebrow="Key Features"
          title={heading}
          highlight={highlightText}
          subtitle={subtitle}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(5,minmax(0,1fr))] xl:gap-10">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="relative overflow-visible rounded-[2rem] border border-border bg-white px-7 py-12 text-center shadow-[0_20px_60px_rgba(30,41,59,0.08)]"
            >
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-secondary/40 bg-secondary/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                {feature.title}
              </h3>

              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-secondary"></div>

              <p className="mx-auto mt-5 max-w-[18rem] text-sm leading-6 text-text-muted">
                {feature.description}
              </p>

              {idx !== features.length - 1 && (
                <span aria-hidden className="hidden xl:block absolute left-[calc(100%+20px)] top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 h-3 w-3 border-y-[14px] border-y-transparent border-l-[18px] border-l-secondary shadow-[0_10px_30px_rgba(15,23,42,0.08)]" />
              )}
            </div>
          ))}
        </div>


          <div className="relative mx-auto mt-10 flex flex-col sm:flex-row w-full max-w-xl items-center justify-center gap-4 px-8 py-5 text-center sm:text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <ShieldCheck size={24} strokeWidth={1.8} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary md:text-base">
              Built for <span className="text-secondary">PERFORMANCE.</span> Engineered for <span className="text-secondary">RESULTS.</span>
            </p>
          </div>
      </Container>
    </section>
  );
}
