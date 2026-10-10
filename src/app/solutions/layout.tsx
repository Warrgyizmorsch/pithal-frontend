import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crushing Solutions for Mining, Aggregates & Construction| Pithal Machine",
  description:
    "Explore engineered crushing solutions for mining, aggregates and construction, designed for efficient processing, consistent output and reliable performance.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

