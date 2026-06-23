import { Container } from "@/components/common/Container";
import type { SpecificationColumn, SpecificationRow, SpecificationsSectionData } from "@/data/products/productDetailTypes";
import { cn } from "@/lib/utils";
import { ProductCtaButton } from "./ProductCtaButton";
import { ProductIcon } from "./iconMap";
import { sectionPadding } from "./styles";

const columnIconMap: Record<string, string> = {
  model: "settings",
  feedOpening: "feeder",
  maxFeedSize: "layers",
  capacity: "gauge",
  motorPower: "zap",
  weight: "weight",
  dimension: "ruler",
  coneType: "cone",
  application: "layout",
};

function getCellClass(column: SpecificationColumn) {
  return cn(
    "px-4 py-3",
    column.emphasis === "primary" && "font-bold text-primary",
    column.emphasis === "secondary" && "font-bold text-secondary",
    !column.emphasis && "text-text-muted",
    column.key === "model" && "uppercase",
  );
}

export function SpecificationTable({
  section,
  rows,
}: {
  section: SpecificationsSectionData;
  rows: SpecificationRow[];
}) {
  return (
    <section className={`bg-bg-light ${sectionPadding}`}>
      <Container>
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          <div className="border-b border-border px-4 py-5 sm:px-6 lg:px-7">
            <header className="max-w-4xl">
              {section.eyebrow && (
                <p className="accent-bars mb-2 text-lg font-bold uppercase tracking-[0.08em] text-secondary sm:text-xl sm:tracking-[0.1em]">
                  {section.eyebrow}
                </p>
              )}
              <h2 className="headline text-[clamp(1.45rem,5.5vw,1.9rem)] text-primary sm:text-[clamp(1.65rem,3.3vw,2.35rem)]">
                {section.title}
                {section.highlight && <span className="text-secondary"> {section.highlight}</span>}
              </h2>
              {section.subtitle && <p className="mt-2 max-w-3xl text-xs leading-6 text-text-muted sm:text-sm">{section.subtitle}</p>}
            </header>
          </div>

          <div className="overflow-x-auto px-0 py-3 sm:px-4 lg:px-5">
            <table className="min-w-[1080px] w-full border-separate border-spacing-0 text-left text-[13px] sm:text-[14.5px]">
              <thead className="bg-primary-dark text-white">
                <tr>
                  {section.columns.map((column) => (
                    <th className="border-r border-white/15 px-4 py-3.5 text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-[0.12em] last:border-r-0" key={column.key}>
                      <div className="flex items-center gap-2">
                        <ProductIcon
                          name={columnIconMap[column.key] ?? "circle"}
                          className="text-secondary"
                          size={16}
                          strokeWidth={2}
                        />
                        <span>{column.label}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr className="border-b border-border last:border-b-0 odd:bg-white even:bg-bg-light/70" key={row.model}>
                    {section.columns.map((column) => (
                      <td className={getCellClass(column)} key={`${row.model}-${column.key}`}>
                        {row[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-border px-4 py-4 sm:px-6 lg:px-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] leading-5 text-text-muted sm:text-xs">{section.note}</p>
              <div className="flex flex-col gap-2 sm:flex-row w-full sm:w-auto">
                {section.ctas.map((cta) => (
                  <ProductCtaButton className="min-h-11 w-full sm:w-auto justify-center gap-2 rounded px-5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider" cta={cta} iconSize={14} key={cta.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
