import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  password?: string;
  role: string;
  status: "Active" | "Inactive";
  joinedDate: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String, default: "+91 9876543210" },
    city: { type: String, default: "Ahmedabad" },
    password: { type: String, default: "admin123" },
    role: { type: String, default: "Content Editor" },
    status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
    joinedDate: { type: String, default: () => new Date().toISOString().split("T")[0] },
    avatar: { type: String, default: "" },
  },
  { timestamps: true }
);

export const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
