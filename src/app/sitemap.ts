import { MetadataRoute } from 'next';
import { SUPPORTED_LOCALES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techstore.com';

  // Generate sitemap entries for all language versions
  const routes = SUPPORTED_LOCALES.flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]);

  return routes;
}
