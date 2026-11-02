import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const blogImgDir = path.join(projectRoot, "public", "blogpageimg");

if (!fs.existsSync(blogImgDir)) {
  fs.mkdirSync(blogImgDir, { recursive: true });
}

const SRV_MONGODB_URI =
  "mongodb+srv://ranjitwarrgyizmorsch_db_user:HHk01PfKPFSx89A7@cluster0.pivoizu.mongodb.net/pithal_db?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  console.log("Connecting to MongoDB Atlas via SRV...");
  await mongoose.connect(SRV_MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
  console.log("Connected successfully!");

  const rawBlogs = await mongoose.connection.collection("blogs").find({}).toArray();
  console.log(`Found ${rawBlogs.length} blogs in MongoDB.`);

  const processedBlogs = [];

  for (let i = 0; i < rawBlogs.length; i++) {
    const b = rawBlogs[i];
    const slug = b.slug;
    console.log(`\nProcessing [${i + 1}/${rawBlogs.length}]: ${slug}`);

    // 1. Process Banner Image
    let finalBannerImg = b.image;
    if (b.image && b.image.startsWith("data:")) {
      const match = b.image.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
      if (match) {
        const ext = match[1] === "jpeg" ? "jpg" : match[1].replace("svg+xml", "svg");
        const imgBuffer = Buffer.from(match[2], "base64");
        const fileName = `${slug}.webp`;
        const filePath = path.join(blogImgDir, fileName);

        if (ext === "webp") {
          fs.writeFileSync(filePath, imgBuffer);
        } else {
          await sharp(imgBuffer).webp({ quality: 85 }).toFile(filePath);
        }
        finalBannerImg = `/blogpageimg/${fileName}`;
        console.log(`  Saved banner image to: ${finalBannerImg} (${(fs.statSync(filePath).size / 1024).toFixed(1)} KB)`);
      }
    } else if (!b.image) {
      finalBannerImg = `/blogpageimg/${slug}.webp`;
    }

    // 2. Process Content Images (Extract base64 to files)
    let cleanedContent = b.content || "";
    if (cleanedContent.includes("data:image/")) {
      console.log(`  Extracting inline base64 images from content of ${slug}...`);
      let contentImgIndex = 1;
      const base64Regex = /<img([^>]+)src=["'](data:image\/([a-zA-Z0-9+]+);base64,([^"']+))["']([^>]*)>/gi;

      const matches = [];
      let m;
      while ((m = base64Regex.exec(cleanedContent)) !== null) {
        matches.push({
          fullTag: m[0],
          beforeSrc: m[1],
          fullDataUri: m[2],
          format: m[3],
          base64Data: m[4],
          afterSrc: m[5],
        });
      }

      for (const item of matches) {
        try {
          const imgBuffer = Buffer.from(item.base64Data, "base64");
          const fileName = `${slug}-content-${contentImgIndex}.webp`;
          const filePath = path.join(blogImgDir, fileName);

          // Convert to optimized WebP
          await sharp(imgBuffer).webp({ quality: 82 }).toFile(filePath);
          const localUrl = `/blogpageimg/${fileName}`;
          const fileSizeKb = (fs.statSync(filePath).size / 1024).toFixed(1);
          console.log(`    Extracted content image ${contentImgIndex} -> ${localUrl} (${fileSizeKb} KB)`);

          // Replace in content
          cleanedContent = cleanedContent.replace(
            item.fullDataUri,
            localUrl
          );
          contentImgIndex++;
        } catch (err) {
          console.warn(`    Failed to extract image ${contentImgIndex}:`, err.message);
        }
      }
    }

    // Convert any raw github urls in content to direct local paths
    cleanedContent = cleanedContent.replace(
      /https?:\/\/raw\.githubusercontent\.com\/[^\/]+\/[^\/]+\/[^\/]+\/public\/blogpageimg\//gi,
      "/blogpageimg/"
    );

    const updatedBlog = {
      ...b,
      image: finalBannerImg,
      img: finalBannerImg,
      content: cleanedContent,
      metaTags: b.metaTags || "",
      metaDescription: b.metaDescription || b.excerpt || b.desc || b.title,
    };

    // Update MongoDB
    await mongoose.connection.collection("blogs").updateOne(
      { _id: b._id },
      {
        $set: {
          image: finalBannerImg,
          img: finalBannerImg,
          content: cleanedContent,
          metaDescription: updatedBlog.metaDescription,
        },
      }
    );

    // Format for blogData.ts
    const serializableBlog = {
      id: String(b.id || b._id),
      slug: b.slug,
      title: b.title,
      excerpt: b.excerpt || b.desc || b.title,
      desc: b.desc || b.excerpt || b.title,
      tag: b.tag || (b.category ? b.category.toUpperCase() : "CRUSHING SOLUTIONS"),
      category: b.category || "Crushing Solutions",
      author: b.author || "Pithal Engineering Team",
      publishedAt: b.publishedAt || "2026-09-01",
      date: b.publishedAt || "2026-09-01",
      readTime: b.readTime || "5 min read",
      read: b.readTime || "5 min read",
      views: b.views || "1.2K",
      image: finalBannerImg,
      img: finalBannerImg,
      status: b.status || "Publish",
      content: cleanedContent,
      metaTags: b.metaTags || "",
      metaDescription: updatedBlog.metaDescription,
      faqs: Array.isArray(b.faqs)
        ? b.faqs.map((f) => ({
            question: String(f.question || "").trim(),
            answer: String(f.answer || "").trim(),
          }))
        : [],
    };

    processedBlogs.push(serializableBlog);
  }

  // Sort by publishedAt / date descending
  processedBlogs.sort((a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime());

  // Write to src/data/blogData.ts
  const blogDataContent = `export interface BlogPost {
  id?: string;
  slug: string;
  tag: string;
  title: string;
  desc: string;
  excerpt?: string;
  author?: string;
  publishedAt?: string;
  date: string;
  read: string;
  readTime?: string;
  img: string;
  image?: string;
  status?: string;
  featured?: boolean;
  large?: boolean;
  views?: string;
  category?: string;
  content?: string;
  faqs?: { question: string; answer: string }[];
  num?: string;
  metaTags?: string;
  metaDescription?: string;
}

export const blogPosts: BlogPost[] = ${JSON.stringify(processedBlogs, null, 2)};

export function getPostBySlug(slug: string): BlogPost | undefined {
  if (!slug) return undefined;
  const clean = slug.toLowerCase().trim().replace(/^\\/+|\\/+$/g, "");
  return blogPosts.find((p) => p.slug.toLowerCase() === clean);
}

export function getTrendingPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.status !== "Draft").slice(0, 4);
}
`;

  fs.writeFileSync(path.join(projectRoot, "src", "data", "blogData.ts"), blogDataContent, "utf8");
  console.log(`\nUpdated src/data/blogData.ts with all ${processedBlogs.length} sanitized posts!`);

  console.log("\nAll tasks finished successfully!");
  process.exit(0);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

