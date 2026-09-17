import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/assets/',
        '/blogs/',
        '/services/',
        '/industries/',
        '/digital-marketing/',
        '/graphic-design/',
        '/about/',
        '/portfolio/',
        '/contact/',
        '/smm/',
        '/html-sitemap/',
      ],
      disallow: ['/api/'],
    },
    sitemap: 'https://thegrowthpurpose.com/sitemap.xml',
  };
}

