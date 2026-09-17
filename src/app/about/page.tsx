'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AboutUs } from '@/components/AboutUs';
import { LeadershipModal, LeaderPerson } from '@/components/LeadershipModal';
import { useModals } from '@/context/ModalContext';
import { updatePageSeo } from '@/utils/seoManager';

export default function AboutPage() {
  const router = useRouter();
  const { openStrategyModal } = useModals();
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeaderPerson>(null);

  useEffect(() => {
    updatePageSeo('about');
  }, []);

  const handleNavigate = (page: string, slug?: string) => {
    if (page === 'services') router.push('/services');
    else if (page === 'portfolio') router.push('/portfolio');
    else if (page === 'contact') router.push('/contact');
    else if (page === 'industries') router.push('/industries');
    else if (page === 'service-details' && slug) router.push(`/services/${slug}`);
    else router.push(`/${page}`);
  };

  return (
    <div className="about-page-container">
      <AboutUs
        isStandalone={true}
        onNavigate={handleNavigate}
        onOpenLeaderModal={(person) => setActiveLeaderModal(person as LeaderPerson)}
        onOpenStrategyModal={(note) => openStrategyModal(note || 'About Page CTA')}
      />

      <LeadershipModal
        person={activeLeaderModal}
        onClose={() => setActiveLeaderModal(null)}
        onOpenStrategyModal={(note) => openStrategyModal(note || 'Leadership Modal CTA')}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
