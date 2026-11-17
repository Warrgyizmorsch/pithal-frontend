import "server-only";
import { cache } from "react";
import { connectDB } from "@/lib/db/mongodb";
import { CityModel } from "@/lib/models/City";
import { normalizeCityContent, type CityContent } from "@/lib/city-content";

export const getCities = cache(async (): Promise<{ cities: CityContent[]; available: boolean }> => {
  try {
    if (await connectDB()) {
      const records = await CityModel.find({}, { _id: 0, __v: 0 }).sort({ createdAt: 1, slug: 1 }).lean();
      const cities = JSON.parse(JSON.stringify(records)) as CityContent[];
      return { cities: cities.map(normalizeCityContent), available: true };
    }
  } catch {
    console.warn("[Cities] Unable to read city content from MongoDB.");
  }
  return { cities: [], available: false };
});
