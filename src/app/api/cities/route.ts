import { NextResponse } from "next/server";
import { getCities } from "@/lib/cities";
import { connectDB } from "@/lib/db/mongodb";
import { CityModel } from "@/lib/models/City";
import { canManageCities } from "@/lib/city-admin-auth";
import { validateCityContent } from "@/lib/city-content";

export const dynamic = "force-dynamic";

export async function GET() {
  const { cities, available } = await getCities();
  if (!available) return NextResponse.json({ success: false, error: "City storage is unavailable. Please try again when the database is connected." }, { status: 503 });
  return NextResponse.json({ success: true, data: cities }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  try {
    if (!request.headers.get("x-city-admin-email") || !request.headers.get("x-city-admin-password")) return NextResponse.json({ success: false, error: "Admin authentication is required." }, { status: 401 });
    if (!await connectDB()) return NextResponse.json({ success: false, error: "City storage is unavailable. No changes were saved." }, { status: 503 });
    if (!await canManageCities(request)) return NextResponse.json({ success: false, error: "Your account cannot manage city pages. Please sign in with an active content account." }, { status: 403 });
    const body = await request.json().catch(() => null);
    const result = validateCityContent(body);
    if (!result.data) return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    if (result.data.productSlug === "stone-crusher" && await CityModel.exists({ slug: result.data.citySlug, productSlug: { $exists: false } })) return NextResponse.json({ success: false, error: "A Stone Crusher page already exists for this city. Select it to update its content." }, { status: 409 });
    const city = await CityModel.create(result.data);
    return NextResponse.json({ success: true, data: city }, { status: 201 });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === 11000) return NextResponse.json({ success: false, error: "A page for this city and product already exists. Select that product to update its content." }, { status: 409 });
    console.warn("[Cities] Create failed.");
    return NextResponse.json({ success: false, error: "Could not save this city. Please try again." }, { status: 500 });
  }
}
