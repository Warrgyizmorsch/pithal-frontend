import type { Metadata } from "next";
import { connectDB } from "@/lib/db/mongodb";
import BlogModel from "@/lib/models/Blog";
import BlogClient from "./BlogClient";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Industrial Insights & Engineering Blog | Pithal Machinery",
  description:
    "Explore expert insights, equipment selection guides, operational best practices, and technological innovations in aggregate and mining operations.",
};

// Ensure page is always dynamically fetched from MongoDB on every request/reload
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getInitialBlogs() {
  try {
    const conn = await connectDB();
    if (conn) {
      const blogs = await BlogModel.find({ status: { $ne: "Draft" } })
        .select("-content -faqs")
        .sort({ createdAt: -1 })
        .lean();

      if (blogs && blogs.length > 0) {
        return JSON.parse(JSON.stringify(blogs));
      }
    }
  } catch (err) {
    console.warn("[Blog Log] Server prefetch blogs error in /blog:", err);
  }
  return blogPosts;
}

export default async function BlogPage() {
  const initialBlogs = await getInitialBlogs();
  return <BlogClient initialBlogs={initialBlogs} />;
}
