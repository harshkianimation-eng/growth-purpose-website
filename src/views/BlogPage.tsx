'use client';

import React from 'react';
import BlogsPage from '@/app/blogs/page';

interface BlogPageProps {
  onNavigate?: (page: any, slug?: string) => void;
  onOpenStrategyModal?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = () => {
  return <BlogsPage />;
};

export default BlogPage;
