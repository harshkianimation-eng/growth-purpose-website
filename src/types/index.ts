export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP';

export type PageView =
  | 'home'
  | 'about'
  | 'services'
  | 'service-details'
  | 'industries'
  | 'portfolio'
  | 'graphic-details'
  | 'design-item'
  | 'blog'
  | 'blog-post'
  | 'smm'
  | 'contact'
  | 'location'
  | 'all-locations'
  | 'html-sitemap'
  | '404';

export type StatType = 'revenue' | 'clicks' | 'conversions' | null;

export type LeaderPerson = 'founder' | 'why-us' | 'leadership' | 'team' | null;

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  service?: string;
  planName?: string;
  growthGoal?: string;
  message?: string;
  formType?: 'contact' | 'strategy';
}
