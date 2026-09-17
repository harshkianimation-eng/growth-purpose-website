'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { HtmlSitemapPage } from '@/views/HtmlSitemapPage';
import { useModals } from '@/context/ModalContext';

export default function HtmlSitemapMainPage() {
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const handleNavigate = (page: string, slug?: string) => {
    if (page === 'home') router.push('/');
    else if (page === 'service-details' && slug) router.push(`/services/${slug}`);
    else if (page === 'blog-post' && slug) router.push(`/blogs/${slug}`);
    else if (page === 'location' && slug) router.push(`/location/${slug}`);
    else router.push(`/${page}`);
  };

  return (
    <HtmlSitemapPage
      onNavigate={handleNavigate as any}
      onOpenStrategyModal={(note) => openStrategyModal(note || 'HTML Sitemap CTA')}
    />
  );
}

