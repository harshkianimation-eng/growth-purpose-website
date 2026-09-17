'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PortfolioPage } from '@/views/PortfolioPage';
import { useModals } from '@/context/ModalContext';

export default function PortfolioMainPage() {
  const router = useRouter();
  const { openStrategyModal } = useModals();

  const handleNavigate = (page: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'contact') router.push('/contact');
    else if (page === 'industries') router.push('/industries');
    else router.push(`/${page}`);
  };

  return (
    <PortfolioPage
      onNavigate={handleNavigate}
      onOpenStrategyModal={(note) => openStrategyModal(note || 'Portfolio Page CTA')}
    />
  );
}

