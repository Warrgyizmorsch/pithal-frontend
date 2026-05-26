import { Container } from "@/components/common/Container";
import { StatCard } from "@/components/common/StatCard";
import { stats } from "@/data/homeData";

export function StatsStrip() {
  return (
    <section className="border-b border-border bg-white">
      <Container className="grid grid-cols-1 py-2 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
      </Container>
    </section>
  );
}
