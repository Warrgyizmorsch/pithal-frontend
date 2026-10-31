import { NextResponse } from 'next/server';
import { BASE_URL, generateUrlSetXml, SitemapItem } from '@/lib/sitemap-utils';
import { connectDB } from '@/lib/db/mongodb';
import BlogModel from '@/lib/models/Blog';
import { blogPosts as fallbackBlogs } from '@/data/blogData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

function parseDateSafe(dateVal: any, fallbackDate: string): string {
  if (!dateVal) return fallbackDate;
  const d = new Date(dateVal);
  return isNaN(d.getTime()) ? fallbackDate : d.toISOString();
}

export async function GET() {
  const currentDate = new Date().toISOString();

  let dbBlogs: any[] = [];
  try {
    const conn = await connectDB();
    if (conn) {
      dbBlogs = await BlogModel.find({
        $or: [
          { status: { $ne: 'Draft' } },
          { status: { $exists: false } },
        ],
      }).lean();
    }
  } catch (err) {
    console.warn('Sitemap blog fetch error:', err);
  }

  // Merge blogs so no published post is ever omitted
  const postMap = new Map<string, any>();
  for (const b of fallbackBlogs) {
    if (b.slug) {
      const clean = b.slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
      postMap.set(clean, { ...b, slug: clean });
    }
  }
  for (const b of dbBlogs) {
    if (b.slug && b.status !== 'Draft') {
      const clean = b.slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
      postMap.set(clean, { ...b, slug: clean });
    }
  }

  const allPublished = Array.from(postMap.values());

  const blogItems: SitemapItem[] = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...allPublished.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: parseDateSafe(post.updatedAt || post.publishedAt || post.date, currentDate),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  const xml = generateUrlSetXml(blogItems);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=60, s-maxage=60, stale-while-revalidate=300',
    },
  });
}
