import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { SpecificationColumn, SpecificationRow, SpecificationsSectionData } from "@/data/products/productDetailTypes";
import { cn } from "@/lib/utils";
import { ProductCtaButton } from "./ProductCtaButton";
import { compactButtonClass, sectionPadding } from "./styles";

function getCellClass(column: SpecificationColumn) {
  return cn(
    "px-4 py-3.5",
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
        <div className="overflow-hidden rounded-[2rem] bg-white border border-border shadow-sm">
          <div className="border-b border-border px-6 py-8 sm:px-8 lg:px-10">
            <SectionHeader
              eyebrow={section.eyebrow}
              highlight={section.highlight}
              subtitle={section.subtitle}
              title={section.title}
              className="max-w-full"
            />
          </div>

          <div className="overflow-x-auto px-0 py-4 sm:px-6 lg:px-8">
            <table className="min-w-[1200px] w-full border-separate border-spacing-0 text-left text-sm">
              <thead className="bg-primary-dark text-white">
                <tr>
                  {section.columns.map((column) => (
                    <th className="border-r border-white/15 px-4 py-4 text-[10px] font-bold uppercase tracking-[0.18em] last:border-r-0" key={column.key}>
                      {column.label}
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

          <div className="border-t border-border px-6 py-5 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-text-muted sm:text-sm">{section.note}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                {section.ctas.map((cta) => (
                  <ProductCtaButton className={compactButtonClass} cta={cta} key={cta.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
