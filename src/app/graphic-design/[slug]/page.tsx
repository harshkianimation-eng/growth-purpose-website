'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { GraphicItemDetailPage } from '@/views/GraphicItemDetailPage';
import { useModals } from '@/context/ModalContext';

export default function GraphicDesignItemPage() {
  const params = useParams();
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const slug = (params?.slug as string) || 'poster-design';

  const handleNavigate = (page: string, targetSlug?: string) => {
    if (page === 'home') router.push('/');
    else if (page === 'services') router.push('/services');
    else if (page === 'service-details' && targetSlug) router.push(`/services/${targetSlug}`);
    else if (page === 'graphic-details') router.push('/graphic-design');
    else if (page === 'design-item' && targetSlug) router.push(`/graphic-design/${targetSlug}`);
    else router.push(`/${page}`);
  };

  return (
    <GraphicItemDetailPage
      itemId={slug}
      onNavigate={handleNavigate}
      onOpenStrategyModal={(name) => openStrategyModal(`Graphic Item - ${name || slug}`)}
    />
  );
}
