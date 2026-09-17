'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LocationPage } from '@/views/LocationPage';
import { useModals } from '@/context/ModalContext';

export default function LocationDynamicPage() {
  const params = useParams();
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const slug = (params?.slug as string) || 'lucknow';

  const handleNavigate = (page: string) => {
    if (page === 'home') router.push('/');
    else if (page === 'all-locations') router.push('/locations');
    else router.push(`/${page}`);
  };

  return (
    <LocationPage
      locationName={slug}
      onNavigate={handleNavigate}
      onOpenStrategyModal={(note) => openStrategyModal(note || `Location Page CTA - ${slug}`)}
    />
  );
}
