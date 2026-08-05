import { NextResponse } from 'next/server';
import { BASE_URL, generateSitemapIndexXml } from '@/lib/sitemap-utils';

export async function GET() {
  const currentDate = new Date().toISOString();

  const sitemaps = [
    { url: `${BASE_URL}/sitemap-pages.xml`, lastModified: currentDate },
    { url: `${BASE_URL}/sitemap-products.xml`, lastModified: currentDate },
    { url: `${BASE_URL}/sitemap-blog.xml`, lastModified: currentDate },
  ];

  const xml = generateSitemapIndexXml(sitemaps);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
