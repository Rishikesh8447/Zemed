import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zemed.in';
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/#en`,
          hi: `${baseUrl}/#hi`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}

