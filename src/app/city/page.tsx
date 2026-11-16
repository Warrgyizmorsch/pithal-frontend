import type { Metadata } from "next";
import { CityPage } from "@/components/city/CityPage";
import { getCities } from "@/lib/cities";
import { cityPagePath } from "@/lib/city-products";
import { resolveCityContent } from "@/lib/city-content";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { cities } = await getCities();
  const city = resolveCityContent(cities[0]);
  return { title: `${city.h1.replace(/\n/g, " ")} | Pithal Machines`, description: city.subheading, alternates: { canonical: cityPagePath(cities[0]) } };
}

export default async function Page() {
  const { cities } = await getCities();
  return <CityPage city={cities[0]} cities={cities} sourcePage="/city" />;
}
