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

// Incremental Static Regeneration: cache on edge/server, revalidated in background
// Admin panel updates flush this instantly via revalidatePath('/blog')
export const revalidate = 60;

async function getInitialBlogs() {
  try {
    const conn = await Promise.race([
      connectDB(),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 3500)),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 1500)),
    ]);
    if (conn) {
      const blogs = await BlogModel.find({ status: { $ne: "Draft" } })
        .select("-content -faqs")
        .maxTimeMS(3000)
        .maxTimeMS(1500)
        .sort({ createdAt: -1 })
        .lean();

      if (blogs && blogs.length > 0) {
        // Sanitize Mongoose objects to plain serializable JSON
        return JSON.parse(JSON.stringify(blogs));
      }
    }
  } catch (err) {
    console.warn("Server prefetch blogs error in /blog:", err);
  }
  return [];
  // Instant baseline fallback — never hangs or delays page load!
  return blogPosts;
}

export default async function BlogPage() {
  const initialBlogs = await getInitialBlogs();
  return <BlogClient initialBlogs={initialBlogs} />;
}
