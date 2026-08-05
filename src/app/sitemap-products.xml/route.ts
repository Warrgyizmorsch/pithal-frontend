import { NextResponse } from 'next/server';
import { BASE_URL, generateUrlSetXml, SitemapItem } from '@/lib/sitemap-utils';

export async function GET() {
  const currentDate = new Date().toISOString();

  const productRoutes = [
    '/products',
    '/products/jaw-crushers',
    '/products/prime-ultrarock',
    '/products/prime-bucket',
    '/products/cone-crushers',
    '/products/vsi-crushers',
    '/products/vibrating-screens',
    '/products/conveyor-systems',
    '/products/complete-plants',
    '/products/feeders',
    '/products/crushers',
    '/products/screening-solutions',
  ];

  const items: SitemapItem[] = productRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '/products' ? 0.9 : 0.8,
  }));

  const xml = generateUrlSetXml(items);

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
