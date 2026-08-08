import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  productInterest?: string;
  message: string;
  status: "PENDING" | "CONTACTED" | "CLOSED";
  sourcePage?: string;
  createdAt: string;
}

const LeadSchema = new Schema<ILead>(
  {
    id: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, default: "" },
    productInterest: { type: String, default: "" },
    message: { type: String, default: "" },
    status: { type: String, enum: ["PENDING", "CONTACTED", "CLOSED"], default: "PENDING" },
    sourcePage: { type: String, default: "" },
    createdAt: { type: String, default: () => new Date().toISOString().split("T")[0] },
  },
  { timestamps: true }
);

export const LeadModel: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default LeadModel;
