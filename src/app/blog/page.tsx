import type { Metadata } from "next";
import { connectDB } from "@/lib/db/mongodb";
import BlogModel from "@/lib/models/Blog";
import BlogClient from "./BlogClient";
import { blogPosts } from "@/data/blogData";

export const metadata: Metadata = {
  title: "Industrial Insights & Engineering Blog | Pithal Machinery",
  description:
    "Explore expert insights, equipment selection guides, operational best practices, and technological innovations in aggregate and mining operations.",
  alternates: {
    canonical: "https://www.pithalmachine.com/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Industrial Insights & Engineering Blog | Pithal Machinery",
    description:
      "Explore expert insights, equipment selection guides, operational best practices, and technological innovations in aggregate and mining operations.",
    url: "https://www.pithalmachine.com/blog",
    siteName: "Pithal Machines",
    type: "website",
    images: [
      {
        url: "https://www.pithalmachine.com/blogpageimg/plantdesignlayout.jpg",
        width: 1200,
        height: 630,
        alt: "Pithal Industrial Insights & Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Insights & Engineering Blog | Pithal Machinery",
    description:
      "Explore expert insights, equipment selection guides, operational best practices, and technological innovations in aggregate and mining operations.",
    images: ["https://www.pithalmachine.com/blogpageimg/plantdesignlayout.jpg"],
  },
};

// Pre-render blog listing statically for instant search engine indexing, revalidate every 60s
export const revalidate = 60;

async function getInitialBlogs() {
  try {
    const conn = await connectDB();
    if (conn) {
      const blogs = await BlogModel.find({ status: { $ne: "Draft" } })
        .select("-content -faqs")
        .sort({ createdAt: -1 })
        .lean();

      if (blogs && blogs.length > 0) {
        const sanitized = blogs.map((b: any) => {
          const resolvedImg = b.image && !b.image.startsWith("data:")
            ? b.image
            : (b.slug ? `/blogpageimg/${b.slug}.webp` : "/blogpageimg/crusherguide.jpg");
          return {
            ...b,
            image: resolvedImg,
            img: resolvedImg,
          };
        });
        return JSON.parse(JSON.stringify(sanitized));
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
