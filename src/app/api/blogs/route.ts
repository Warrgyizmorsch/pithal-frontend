import { jsonResponse, handleOptions } from '@/lib/cors';
import { blogs as mockBlogs } from '@/lib/data/mockData';
import { BlogPost } from '@/lib/types/api';
import { connectDB } from '@/lib/db/mongodb';
import BlogModel from '@/lib/models/Blog';

export const dynamic = 'force-dynamic';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  try {
    const conn = await connectDB();
    if (conn) {
      const dbBlogs = await BlogModel.find()
        .select("-content -faqs")
        .sort({ createdAt: -1 })
        .lean();
      return jsonResponse(
        {
          success: true,
          count: dbBlogs ? dbBlogs.length : 0,
          data: dbBlogs || [],
          source: "MongoDB Database",
        },
        200,
        {
          "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        }
      );
    }
  } catch (err) {
    console.warn("MongoDB GET blogs error:", err);
  }

  return jsonResponse({
    success: true,
    count: 0,
    data: [],
    source: "MongoDB Database",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { title, excerpt, content, author, category, tag, image, readTime, status, faqs, metaTags, metaDescription } = body;

    if (!title || !content) {
      return jsonResponse(
        { success: false, error: 'Title and content are required' },
        400
      );
    }

    const categoryStr = typeof category === 'string' && category.trim() ? category : 'Industry Insights';
    const tagStr = typeof tag === 'string' && tag.trim() ? tag : categoryStr.toUpperCase();

    // Auto-generate URL slug from title or custom slug
    const rawSlug = body.slug || title;
    const generatedSlug = String(rawSlug).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const newBlog: BlogPost = {
      id: body.id || `blog-${Date.now()}`,
      slug: generatedSlug || `blog-${Date.now()}`,
      title: String(title),
      excerpt: excerpt ? String(excerpt).trim() : '',
      content: String(content),
      author: author ? String(author) : 'Pithal Machinery Team',
      category: categoryStr,
      tag: tagStr,
      readTime: readTime ? String(readTime) : '5 min read',
      views: '1',
      image: image ? String(image) : '/blogpageimg/crusherguide.jpg',
      status: status || 'Publish',
      publishedAt: new Date().toISOString().split('T')[0],
      metaTags: metaTags || '',
      metaDescription: metaDescription || '',
      faqs: Array.isArray(faqs) ? faqs : [],
    };

    // Save to MongoDB if connected
    try {
      const conn = await connectDB();
      if (conn) {
        await BlogModel.findOneAndUpdate(
          { slug: newBlog.slug },
          newBlog,
          { upsert: true, new: true }
        );
      }
    } catch (dbErr) {
      console.warn("MongoDB POST blog error, saved in memory fallback:", dbErr);
    }

    // Keep memory fallback in sync
    const existingIdx = mockBlogs.findIndex((b) => b.id === newBlog.id || b.slug === newBlog.slug);
    if (existingIdx !== -1) {
      mockBlogs[existingIdx] = { ...mockBlogs[existingIdx], ...newBlog };
    } else {
      mockBlogs.unshift(newBlog);
    }

    return jsonResponse({
      success: true,
      message: 'Blog post created/updated successfully',
      data: newBlog,
    }, 201);
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return jsonResponse({ success: false, error: errorMessage }, 500);
  }
}
