import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { CityPage } from "./CityPage";
import { getCities } from "@/lib/cities";
import { resolveCityContent } from "@/lib/city-content";
import { CITY_PRODUCTS, cityPagePath } from "@/lib/city-products";

export type CityRouteProps = { params: Promise<{ slug: string }> };

async function lookup(slug: string, root: boolean) {
  // Static website routes take precedence; unknown root URLs never become city pages.
  if (root && !CITY_PRODUCTS.some(product => product.slug !== "stone-crusher" && slug.startsWith(`${product.slug}-`))) notFound();
  const { cities, available } = await getCities();
  const city = cities.find(city => city.slug === slug || (!root && (city.storageSlug === slug || (city.productSlug === "stone-crusher" && city.citySlug === slug))));
  if (!city) {
    if (!available) throw new Error("City content is temporarily unavailable.");
    notFound();
  }
  return { city, cities };
}

export async function cityRouteMetadata({ params }: CityRouteProps, root = false): Promise<Metadata> {
  const { city: record } = await lookup((await params).slug, root);
  const city = resolveCityContent(record);
  return { title: `${city.h1.replace(/\n/g, " ")} | Pithal Machines`, description: city.subheading, alternates: { canonical: cityPagePath(record) } };
}

export async function renderCityRoute({ params }: CityRouteProps, root = false) {
  const { slug } = await params;
  const { city, cities } = await lookup(slug, root);
  const path = cityPagePath(city);
  if (path !== (root ? `/${slug}` : `/city/${slug}`)) permanentRedirect(path);
  return <CityPage city={city} cities={cities} sourcePage={path} />;
}
