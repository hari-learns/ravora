import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE = 'https://ravoraapps.tech';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/about`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
