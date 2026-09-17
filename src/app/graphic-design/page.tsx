'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ServiceDetailPage } from '@/views/ServiceDetailPage';
import { useModals } from '@/context/ModalContext';

export default function GraphicDesignPage() {
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const handleNavigate = (page: string, slug?: string) => {
    if (page === 'home') router.push('/');
    else if (page === 'services') router.push('/services');
    else if (page === 'service-details' && slug) router.push(`/services/${slug}`);
    else if (page === 'graphic-details') router.push('/graphic-design');
    else if (page === 'design-item' && slug) router.push(`/graphic-design/${slug}`);
    else router.push(`/${page}`);
  };

  return (
    <ServiceDetailPage
      serviceId="graphic-design"
      onNavigate={handleNavigate}
      onOpenStrategyModal={(name) => openStrategyModal(`Graphic Design - ${name || 'General'}`)}
    />
  );
}
