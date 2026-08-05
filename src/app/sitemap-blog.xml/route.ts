import { NextResponse } from 'next/server';
import { BASE_URL, generateUrlSetXml, SitemapItem } from '@/lib/sitemap-utils';
import { blogPosts } from '@/data/blogData';

export async function GET() {
  const currentDate = new Date().toISOString();

  const blogItems: SitemapItem[] = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString() : currentDate,
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
