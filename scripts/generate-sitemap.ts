// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { ALL_PAGES, SITE_URL, pagePath } from '../src/content/siteContent';

interface SitemapEntry {
  path: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/doctor-gpt', changefreq: 'weekly', priority: '0.9' },
  { path: '/library', changefreq: 'weekly', priority: '0.8' },
  ...ALL_PAGES.map((page) => ({
    path: pagePath(page),
    changefreq: 'monthly' as const,
    priority: page.type === 'tool' ? '0.8' : '0.7',
  })),
];

function generateSitemap(items: SitemapEntry[]) {
  const urls = items.map((entry) =>
    [
      '  <url>',
      `    <loc>${SITE_URL}${entry.path}</loc>`,
      entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
      entry.priority ? `    <priority>${entry.priority}</priority>` : null,
      '  </url>',
    ]
      .filter(Boolean)
      .join('\n'),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
  ].join('\n');
}

writeFileSync(resolve('public/sitemap.xml'), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
