import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db/mongodb";
import BlogModel from "@/lib/models/Blog";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

function getMimeType(filenameOrFormat: string): string {
  const lower = filenameOrFormat.toLowerCase();
  if (lower.endsWith(".png") || lower === "png") return "image/png";
  if (lower.endsWith(".webp") || lower === "webp") return "image/webp";
  if (lower.endsWith(".svg") || lower === "svg" || lower === "svg+xml") return "image/svg+xml";
  if (lower.endsWith(".gif") || lower === "gif") return "image/gif";
  return "image/jpeg";
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  try {
    const { slug } = await params;
    const requestedPath = Array.isArray(slug) ? slug.join("/") : String(slug || "");
    const fileName = Array.isArray(slug) ? slug[slug.length - 1] : String(slug || "");

    const cleanSlug = fileName.replace(/\.(webp|jpg|jpeg|png|svg|gif)$/i, "");

    // 1. First check if file actually exists on local filesystem
    const publicDir = path.join(process.cwd(), "public", "blogpageimg");
    const localFilePath = path.join(publicDir, requestedPath);
    if (fs.existsSync(localFilePath)) {
      try {
        const buffer = fs.readFileSync(localFilePath);
        const mime = getMimeType(requestedPath);
        return new NextResponse(buffer, {
          status: 200,
          headers: {
            "Content-Type": mime,
            "Content-Length": String(buffer.length),
            "Cache-Control": "public, max-age=3600, s-maxage=86400",
            "ETag": `"${requestedPath}-${buffer.length}"`,
          },
        });
      } catch {
        // Fall through to database lookup
      }
    }

    // 2. Query MongoDB for blog document by cleanSlug or fileName
    try {
      const conn = await connectDB();
      if (conn) {
        const orConditions: any[] = [
          { slug: cleanSlug },
          { id: cleanSlug },
          { slug: { $regex: new RegExp(`^${cleanSlug}$`, "i") } },
        ];
        if (mongoose.Types.ObjectId.isValid(cleanSlug)) {
          orConditions.push({ _id: new mongoose.Types.ObjectId(cleanSlug) });
        }

        const blog = await BlogModel.findOne({ $or: orConditions }).lean();

        if (blog && blog.imageData && blog.imageData.startsWith("data:image/")) {
          const match = blog.imageData.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
          if (match) {
            const format = match[1] === "jpeg" ? "jpg" : match[1].replace("svg+xml", "svg");
            const buffer = Buffer.from(match[2], "base64");
            const mime = getMimeType(format);

            // Best effort cache to disk
            try {
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              const diskFile = path.join(publicDir, `${cleanSlug}.${format}`);
              if (!fs.existsSync(diskFile) || fs.statSync(diskFile).size !== buffer.length) {
                fs.writeFileSync(diskFile, buffer);
              }
            } catch {
              // Ignore disk write errors in read-only / serverless runtimes
            }

            return new NextResponse(buffer, {
              status: 200,
              headers: {
                "Content-Type": mime,
                "Content-Length": String(buffer.length),
                "Cache-Control": "public, max-age=120, s-maxage=300, stale-while-revalidate=86400",
                "ETag": `"${cleanSlug}-${buffer.length}"`,
              },
            });
          }
        }
      }
    } catch (dbErr) {
      console.warn("[CatchAll blogpageimg] DB lookup failed:", dbErr);
    }

    // 3. Fallback to default crusherguide.jpg
    const fallbackPath = path.join(publicDir, "crusherguide.jpg");
    if (fs.existsSync(fallbackPath)) {
      const buffer = fs.readFileSync(fallbackPath);
      return new NextResponse(buffer, {
        status: 200,
        headers: {
          "Content-Type": "image/jpeg",
          "Content-Length": String(buffer.length),
          "Cache-Control": "public, max-age=86400",
        },
      });
    }

    return new NextResponse("Not Found", { status: 404 });
  } catch (err) {
    console.error("[CatchAll blogpageimg] Error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

