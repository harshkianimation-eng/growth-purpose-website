'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ServicesPage } from '@/views/ServicesPage';
import { useModals } from '@/context/ModalContext';

export default function ServicesMainPage() {
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const handleNavigate = (page: string, slug?: string) => {
    if (page === 'service-details' && slug) {
      router.push(`/services/${slug}`);
    } else if (page === 'portfolio') {
      router.push('/portfolio');
    } else if (page === 'contact') {
      router.push('/contact');
    } else if (page === 'smm') {
      router.push('/smm');
    } else {
      router.push(`/${page}`);
    }
  };

  return (
    <ServicesPage
      onNavigate={handleNavigate}
      onOpenStrategyModal={(note) => openStrategyModal(note || 'Services Page CTA')}
    />
  );
}

