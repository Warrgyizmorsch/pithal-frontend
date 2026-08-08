import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlogFaq {
  question: string;
  answer: string;
}

export interface IBlog extends Document {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tag: string;
  readTime: string;
  views: string;
  image: string;
  status: "Publish" | "Draft";
  publishedAt: string;
  metaTags?: string;
  metaDescription?: string;
  faqs?: IBlogFaq[];
  createdAt: Date;
  updatedAt: Date;
}

const BlogFaqSchema = new Schema<IBlogFaq>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const BlogSchema = new Schema<IBlog>(
  {
    id: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    excerpt: { type: String, default: "" },
    content: { type: String, required: true },
    author: { type: String, default: "Pithal Machinery Team" },
    category: { type: String, default: "Crushing Solutions" },
    tag: { type: String, default: "TECHNOLOGY & INNOVATIONS" },
    readTime: { type: String, default: "5 min read" },
    views: { type: String, default: "1" },
    image: { type: String, default: "/blogpageimg/crusherguide.jpg" },
    status: { type: String, enum: ["Publish", "Draft"], default: "Publish" },
    publishedAt: { type: String, default: () => new Date().toISOString().split("T")[0] },
    metaTags: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    faqs: [BlogFaqSchema],
  },
  { timestamps: true }
);

export const BlogModel: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default BlogModel;
