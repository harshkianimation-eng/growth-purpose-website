'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IndustryDetailPage } from '@/views/IndustryDetailPage';
import { useModals } from '@/context/ModalContext';

export default function IndustrySingularDynamicPage() {
  const params = useParams();
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const slug = (params?.slug as string) || 'hospitals';

  const handleNavigate = (page: string, targetSlug?: string) => {
    if (page === 'home') router.push('/');
    else if (page === 'industries') router.push('/industries');
    else if ((page === 'industry-details' || page === 'industries' || page === 'industry') && targetSlug) {
      router.push(`/industries/${targetSlug}`);
    } else if (page === 'service-details' && targetSlug) {
      router.push(`/services/${targetSlug}`);
    } else if (page === 'services') router.push('/services');
    else if (page === 'portfolio') router.push('/portfolio');
    else if (page === 'contact') router.push('/contact');
    else router.push(`/${page}`);
  };

  return (
    <IndustryDetailPage
      slug={slug}
      onNavigate={handleNavigate}
      onOpenStrategyModal={(note) => openStrategyModal(note || `Industry CTA - ${slug}`)}
    />
  );
}
