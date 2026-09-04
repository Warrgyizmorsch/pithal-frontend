import { NextResponse } from 'next/server';
import { BASE_URL, generateUrlSetXml, SitemapItem } from '@/lib/sitemap-utils';
import { connectDB } from '@/lib/db/mongodb';
import BlogModel from '@/lib/models/Blog';

export const dynamic = 'force-dynamic';

export async function GET() {
  const currentDate = new Date().toISOString();

  let dbBlogs: any[] = [];
  try {
    const conn = await connectDB();
    if (conn) {
      dbBlogs = await BlogModel.find({ status: { $ne: 'Draft' } }).lean();
    }
  } catch (err) {
    console.warn('Sitemap blog fetch error:', err);
  }

  const blogItems: SitemapItem[] = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...dbBlogs.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt).toISOString() : currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];

  const xml = generateUrlSetXml(blogItems);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
