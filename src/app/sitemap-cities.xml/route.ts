import { NextResponse } from "next/server";
import { cityPagePath } from "@/lib/city-products";
import { getCities } from "@/lib/cities";
import { BASE_URL, generateUrlSetXml } from "@/lib/sitemap-utils";

export const dynamic = "force-dynamic";

export async function GET() {
  const { cities, available } = await getCities();
  if (!available) return new NextResponse("City sitemap temporarily unavailable", { status: 503 });
  const xml = generateUrlSetXml([
    ...cities.map(city => ({ url: `${BASE_URL}${cityPagePath(city)}`, lastModified: city.updatedAt, changeFrequency: "weekly" as const, priority: 0.8 })),
  ]);
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "no-store" } });
}
