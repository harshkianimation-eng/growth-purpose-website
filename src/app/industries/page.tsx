'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IndustriesPage } from '@/views/IndustriesPage';
import { useModals } from '@/context/ModalContext';

export default function IndustriesMainPage() {
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const handleNavigate = (page: string, slug?: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'portfolio') router.push('/portfolio');
    else if (page === 'contact') router.push('/contact');
    else if (page === 'service-details' && slug) router.push(`/services/${slug}`);
    else if ((page === 'industries' || page === 'industry-details' || page === 'industry') && slug) {
      const cleanSlug = slug.startsWith('marketing-for-') ? slug : `marketing-for-${slug}`;
      router.push(`/industries/${cleanSlug}`);
    } else if (page === 'home') router.push('/');
    else router.push(`/${page}`);
  };

  return (
    <IndustriesPage
      onNavigate={handleNavigate}
      onOpenStrategyModal={(note) => openStrategyModal(note || 'Industries Page CTA')}
    />
  );
}

