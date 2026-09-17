import { MetadataRoute } from 'next';
import { ALL_BLOGS } from '@/data/blogData';
import { ALL_17_SERVICES } from '@/data/servicesData';
import { TOP_FOOTER_DOMESTIC_LOCATIONS, TOP_FOOTER_INTERNATIONAL_LOCATIONS } from '@/data/locationsData';
import { all89IndustriesList } from '@/data/industriesData';

const BASE_URL = 'https://thegrowthpurpose.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // 1. Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/about/founder`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/about/why-us`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/about/leadership`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/services`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blogs`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/digital-marketing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/graphic-design`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/smm`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/html-sitemap`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
  ];

  // 2. Growth Program service pages
  const serviceRoutes: MetadataRoute.Sitemap = ALL_17_SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // 3. Location Hub pages (/digital-marketing/:city)
  const allLocations = [...TOP_FOOTER_DOMESTIC_LOCATIONS, ...TOP_FOOTER_INTERNATIONAL_LOCATIONS];
  const locationRoutes: MetadataRoute.Sitemap = allLocations.map((loc) => {
    const slug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
      url: `${BASE_URL}/digital-marketing/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    };
  });

  // 4. 89 Industry Hub pages (/industries/marketing-for-:industry)
  const industryRoutes: MetadataRoute.Sitemap = all89IndustriesList.map((ind) => ({
    url: `${BASE_URL}/industries/marketing-for-${ind.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 5. Graphic Design item pages
  const graphicDesignSlugs = [
    'poster-design', 'flyer-design', 'logo-design', 'visiting-card-design',
    'ppt-presentation-design', 'product-label-design', 'restaurant-menu-design',
    'infographic-design', 'standard-creatives', 'structured-designs',
    'multi-page-documents', 'large-format-corporate-branding',
    'packaging-product-design', 'restaurant-hospitality', 'custom-creative-services'
  ];
  const graphicRoutes: MetadataRoute.Sitemap = graphicDesignSlugs.map((slug) => ({
    url: `${BASE_URL}/graphic-design/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 6. All Clean SEO Blog Playbooks
  const blogRoutes: MetadataRoute.Sitemap = ALL_BLOGS.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug.replace(/^strategy\//, '')}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...industryRoutes, ...graphicRoutes, ...blogRoutes];
}
