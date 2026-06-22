import { ShieldCheck, Wrench, Weight, Fuel, Hexagon } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PerformanceFeature, SectionCopy } from "@/data/products/productDetailTypes";
import { ProductIcon } from "./iconMap";
import { sectionPadding } from "./styles";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeatureInput = Feature | PerformanceFeature;

const defaultFeatures: Feature[] = [
  {
    icon: <ShieldCheck size={48} strokeWidth={1.8} className="text-(--primary)" />,
    title: "High Crushing Ratio",
    description: "Optimized chamber design ensures maximum reduction ratio for higher output.",
  },
  {
    icon: <Wrench size={48} strokeWidth={1.8} className="text-(--primary)" />,
    title: "Low Maintenance",
    description: "Easy access design and fewer moving parts reduce maintenance time and cost.",
  },
  {
    icon: <Weight size={48} strokeWidth={1.8} className="text-(--primary)" />,
    title: "Heavy Duty Build",
    description: "Rugged construction with premium materials for longer service life.",
  },
  {
    icon: <Fuel size={48} strokeWidth={1.8} className="text-(--primary)" />,
    title: "Fuel Efficiency",
    description: "Engineered for optimal power utilization and lower operating costs.",
  },
  {
    icon: <Hexagon size={48} strokeWidth={1.8} className="text-(--primary)" />,
    title: "Wear Resistant Parts",
    description: "High quality manganese steel components for maximum durability.",
  },
];

function FeatureIcon({ feature }: { feature: FeatureInput }) {
  if (typeof feature.icon === "string") {
    return <ProductIcon className="text-blue-600" name={feature.icon} size={48} strokeWidth={1.8} />;
  }

  return feature.icon;
}

export function FeaturesSection({
  features = defaultFeatures,
  section,
  eyebrow,
  heading = "Engineered For",
  highlightText = "Superior Performance",
  subtitle = "Our Prime Jaw Crushers are built with advanced engineering and premium quality components to deliver unmatched performance, reliability and efficiency.",
}: {
  features?: FeatureInput[];
  section?: SectionCopy;
  eyebrow?: string;
  heading?: string;
  highlightText?: string;
  subtitle?: string;
}) {
  const sectionEyebrow = eyebrow ?? section?.eyebrow ?? "Key Features";
  const sectionHeading = section?.title ?? heading;
  const sectionHighlight = section?.highlight ?? highlightText;
  const sectionSubtitle = section?.subtitle ?? subtitle;

  return (
    <section className={`relative overflow-hidden bg-[#f7f5f2] ${sectionPadding}`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-38 bg-[radial-gradient(circle_at_top,rgba(255,147,34,0.12),transparent_55%)]" />
      <Container>
        <SectionHeader
          eyebrow={sectionEyebrow}
          title={sectionHeading}
          highlight={sectionHighlight}
          subtitle={sectionSubtitle}
          className="!max-w-none [&_h2]:whitespace-nowrap [&_h2]:!text-[clamp(0.85rem,3.8vw,3.25rem)] w-full"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(5,minmax(0,1fr))] xl:gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative overflow-visible rounded-[2rem] border border-border bg-white px-5 py-8 text-center shadow-[0_15px_45px_rgba(30,41,59,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(30,41,59,0.12)] hover:border-secondary/20"
            >
              {/* Spinning dashed border container around the icon */}
              <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/40 bg-secondary/5 animate-[spin_8s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]" />
                <div className="relative z-10 flex items-center justify-center scale-90 transition-transform duration-300 group-hover:scale-105">
                  <FeatureIcon feature={feature} />
                </div>
              </div>

              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary min-h-[2.5rem] flex items-center justify-center">
                {feature.title}
              </h3>

              <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-secondary"></div>

              <p className="mx-auto mt-4 max-w-[18rem] text-xs leading-5 text-text-muted">
                {feature.description}
              </p>

              {idx !== features.length - 1 && (
                <span aria-hidden className="hidden xl:block absolute left-[calc(100%+16px)] top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 h-3 w-3 border-y-[12px] border-y-transparent border-l-[16px] border-l-secondary shadow-[0_10px_30px_rgba(15,23,42,0.08)]" />
              )}
            </div>
          ))}
        </div>


          <div className="relative mx-auto mt-10 flex w-full max-w-2xl items-center justify-center gap-3 sm:gap-4 px-1 py-1 text-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <ShieldCheck size={24} strokeWidth={1.8} />
            </div>
            <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.22em] text-primary md:text-base whitespace-nowrap">
              Built for <span className="text-secondary">PERFORMANCE.</span> Engineered for <span className="text-secondary">RESULTS.</span>
            </p>
          </div>
      </Container>
    </section>
  );
}
