import { Card } from "@/components/common/Card";
import { Container } from "@/components/common/Container";
import { IconBox } from "@/components/common/IconBox";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PerformanceFeature, SectionCopy } from "@/data/products/productDetailTypes";
import { ProductIcon } from "./iconMap";
import { sectionPadding, technicalCardShadow } from "./styles";

export function PerformanceFeatures({
  section,
  features,
}: {
  section: SectionCopy;
  features: PerformanceFeature[];
}) {
  return (
    <section className={`industrial-grid bg-white ${sectionPadding}`}>
      <Container>
        <SectionHeader eyebrow={section.eyebrow} highlight={section.highlight} subtitle={section.subtitle} title={section.title} />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {features.map((feature) => (
            <Card className={`relative min-h-[230px] overflow-hidden px-4 py-5 text-center ${technicalCardShadow}`} key={feature.title}>
              <span className="absolute left-1/2 top-0 h-[3px] w-14 -translate-x-1/2 bg-secondary" />
              <IconBox className="mx-auto mb-5 h-12 w-12">
                <ProductIcon name={feature.icon} size={22} />
              </IconBox>
              <h3 className="text-[13px] font-bold uppercase tracking-[0.16em] text-primary">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
