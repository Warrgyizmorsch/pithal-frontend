export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.pithalmachine.com';

export interface SitemapItem {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateUrlSetXml(items: SitemapItem[]): string {
  const urlsXml = items
    .map((item) => {
      const lastModDate = item.lastModified
        ? new Date(item.lastModified).toISOString()
        : new Date().toISOString();
      const changeFreq = item.changeFrequency ? `\n    <changefreq>${item.changeFrequency}</changefreq>` : '';
      const priority = item.priority !== undefined ? `\n    <priority>${item.priority.toFixed(1)}</priority>` : '';

      return `  <url>
    <loc>${item.url}</loc>
    <lastmod>${lastModDate}</lastmod>${changeFreq}${priority}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
}

export function generateSitemapIndexXml(sitemaps: { url: string; lastModified?: string | Date }[]): string {
  const sitemapNodesXml = sitemaps
    .map((s) => {
      const lastModDate = s.lastModified
        ? new Date(s.lastModified).toISOString()
        : new Date().toISOString();
      return `  <sitemap>
    <loc>${s.url}</loc>
    <lastmod>${lastModDate}</lastmod>
  </sitemap>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNodesXml}
</sitemapindex>`;
}
