import mongoose, { Schema, type Model } from "mongoose";
import type { CityContent } from "@/lib/city-content";

const CitySchema = new Schema<CityContent>({
  name: { type: String, required: true, maxlength: 100 },
  state: { type: String, default: "", maxlength: 100 },
  slug: { type: String, required: true, unique: true, maxlength: 220 },
  citySlug: { type: String, required: true, maxlength: 120 },
  productSlug: { type: String, required: true, maxlength: 100 },
  h1: { type: String, required: true, maxlength: 500 },
  subheading: { type: String, required: true, maxlength: 5000 },
  metaTags: { type: String, default: "", maxlength: 500 },
  metaDescription: { type: String, default: "", maxlength: 5000 },
  capacityValue: { type: String, required: true, maxlength: 60 },
  capacityLabel: { type: String, required: true, maxlength: 100 },
  longContent: { type: String, required: true, maxlength: 150000 },
  faqs: [{ _id: false, question: { type: String, required: true, maxlength: 500 }, answer: { type: String, required: true, maxlength: 10000 } }],
}, { timestamps: true });

const existingModel = mongoose.models.City as Model<CityContent> | undefined;
// Keep the local dev server's cached model in sync when this schema is hot reloaded.
if (existingModel && !existingModel.schema.path("productSlug")) existingModel.schema.add(CitySchema.obj);
if (existingModel && !existingModel.schema.path("capacityValue")) existingModel.schema.add({ capacityValue: CitySchema.obj.capacityValue, capacityLabel: CitySchema.obj.capacityLabel });
existingModel?.schema.path("state")?.required(false);
if (existingModel && !existingModel.schema.path("metaTags")) existingModel.schema.add({ metaTags: CitySchema.obj.metaTags, metaDescription: CitySchema.obj.metaDescription });
export const CityModel: Model<CityContent> = existingModel || mongoose.model<CityContent>("City", CitySchema);
