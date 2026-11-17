import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongodb";
import { CityModel } from "@/lib/models/City";
import { canManageCities } from "@/lib/city-admin-auth";
import { normalizeCityContent, validateCityContent } from "@/lib/city-content";

export const dynamic = "force-dynamic";

export async function PATCH(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    if (!request.headers.get("x-city-admin-email") || !request.headers.get("x-city-admin-password")) return NextResponse.json({ success: false, error: "Admin authentication is required." }, { status: 401 });
    if (!await connectDB()) return NextResponse.json({ success: false, error: "City storage is unavailable. No changes were saved." }, { status: 503 });
    if (!await canManageCities(request)) return NextResponse.json({ success: false, error: "Your account cannot manage city pages. Please sign in with an active content account." }, { status: 403 });
    const { slug } = await params;
    const payload = await request.json().catch(() => null);
    const result = validateCityContent(payload);
    if (!result.data) return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    const stored = await CityModel.findOne({ slug }).lean();
    if (!stored) return NextResponse.json({ success: false, error: "City product page not found. Reload the list and try again." }, { status: 404 });
    const current = normalizeCityContent(stored);
    if (result.data.slug !== current.slug || result.data.citySlug !== current.citySlug || result.data.productSlug !== current.productSlug) return NextResponse.json({ success: false, error: "Select the city and product separately to edit their page. An existing page's city and product cannot be changed." }, { status: 400 });
    if (result.data.name !== current.name || result.data.state !== current.state) return NextResponse.json({ success: false, error: "The selected city details cannot be changed from a product page." }, { status: 400 });
    const incoming = payload as Record<string, unknown>;
    const data = { ...result.data, capacityValue: incoming.capacityValue === undefined ? current.capacityValue : result.data.capacityValue, capacityLabel: incoming.capacityLabel === undefined ? current.capacityLabel : result.data.capacityLabel };
    const city = await CityModel.findOneAndUpdate({ slug }, { $set: data }, { new: true, runValidators: true });
    if (!city) return NextResponse.json({ success: false, error: "City not found. Reload the list and try again." }, { status: 404 });
    return NextResponse.json({ success: true, data: city });
  } catch {
    console.warn("[Cities] Update failed.");
    return NextResponse.json({ success: false, error: "Could not update this city. Please try again." }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    if (!request.headers.get("x-city-admin-email") || !request.headers.get("x-city-admin-password")) {
      return NextResponse.json({ success: false, error: "Admin authentication is required." }, { status: 401 });
    }
    if (!(await connectDB())) {
      return NextResponse.json({ success: false, error: "City storage is unavailable. No changes were saved." }, { status: 503 });
    }
    if (!(await canManageCities(request))) {
      return NextResponse.json({ success: false, error: "Your account cannot manage city pages. Please sign in with an active content account." }, { status: 403 });
    }
    const { slug } = await params;
    const deleted = await CityModel.findOneAndDelete({
      $or: [{ slug }, { storageSlug: slug }, { citySlug: slug }]
    });
    if (!deleted) {
      return NextResponse.json({ success: false, error: "City page not found. Reload the list and try again." }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: "City page deleted successfully." });
  } catch (err) {
    console.warn("[Cities] Delete failed:", err);
    return NextResponse.json({ success: false, error: "Could not delete this city page. Please try again." }, { status: 500 });
  }
}
