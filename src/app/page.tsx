'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { updatePageSeo } from '@/utils/seoManager';
import { Hero } from '@/components/Hero';
import { InteractiveStatsBar } from '@/components/InteractiveStatsBar';
import { ServicesGrid } from '@/components/ServicesGrid';
import { AboutUs } from '@/components/AboutUs';
import { ClientVoices } from '@/components/ClientVoices';
import { WorkShowcaseMarquee } from '@/components/WorkShowcaseMarquee';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { HomeCtaBanner } from '@/components/HomeCtaBanner';
import { ContactSection } from '@/components/ContactSection';
import { SectionNavigator } from '@/components/SectionNavigator';
import { StatCardModal, StatType } from '@/components/StatCardModal';
import { LeadershipModal, LeaderPerson } from '@/components/LeadershipModal';
import { LocationsModal } from '@/components/LocationsModal';
import { useModals } from '@/context/ModalContext';

export default function HomePage() {
  const router = useRouter();
  const { openStrategyModal, openContactModal } = useModals();

  const [activeStatModal, setActiveStatModal] = useState<StatType>(null);
  const [activeLeaderModal, setActiveLeaderModal] = useState<LeaderPerson>(null);
  const [isLocationsModalOpen, setIsLocationsModalOpen] = useState(false);

  useEffect(() => {
    updatePageSeo('home');
  }, []);

  const handleNavigate = (page: string, slug?: string) => {
    if (page === 'home') {
      router.push('/');
    } else if (page === 'about') {
      if (slug) {
        setActiveLeaderModal(slug as LeaderPerson);
      } else {
        router.push('/about');
      }
    } else if (page === 'services') {
      router.push('/services');
    } else if (page === 'service-details' && slug) {
      router.push(`/services/${slug}`);
    } else if (page === 'industries') {
      router.push('/industries');
    } else if (page === 'portfolio') {
      router.push('/portfolio');
    } else if (page === 'blog' || page === 'blog-post') {
      router.push(slug ? `/blogs/${slug}` : '/blogs');
    } else if (page === 'smm') {
      router.push('/smm');
    } else if (page === 'contact') {
      router.push('/contact');
    } else if (page === 'location' && slug) {
      router.push(`/location/${slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`);
    } else if (page === 'all-locations') {
      router.push('/locations');
    } else if (page === 'html-sitemap') {
      router.push('/html-sitemap');
    } else {
      router.push(`/${page}`);
    }
  };

  const handleSelectLocation = (loc: string) => {
    const slug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    router.push(`/location/${slug}`);
  };

  return (
    <div className="homepage-root">
      {/* 1. HERO SECTION */}
      <Hero
        onOpenStatModal={setActiveStatModal}
        onOpenStrategyModal={() => openStrategyModal('Homepage Hero CTA')}
        onNavigateServices={() => router.push('/services')}
        onNavigatePortfolio={() => router.push('/portfolio')}
      />

      {/* 2. STATS BAR */}
      <div id="stats" style={{ backgroundColor: 'var(--bg-main)', paddingTop: '1.5rem', paddingBottom: '2rem' }}>
        <InteractiveStatsBar
          onSelectLocation={handleSelectLocation}
          onOpenStrategyModal={(note) => openStrategyModal(note || 'Interactive Stats CTA')}
        />
      </div>

      {/* 3. SERVICES GRID */}
      <ServicesGrid
        onOpenStrategyModal={(note) => openStrategyModal(note || 'Services Grid CTA')}
        onNavigate={handleNavigate}
        backgroundColor="var(--bg-subtle)"
      />

      {/* 4. ABOUT US SECTION */}
      <AboutUs
        onNavigate={handleNavigate}
        onOpenLeaderModal={(person) => setActiveLeaderModal(person)}
        onOpenStrategyModal={(note) => openStrategyModal(note || 'About Us CTA')}
        onSelectLocation={handleSelectLocation}
        backgroundColor="var(--bg-main)"
      />

      {/* 5. CLIENT VOICES */}
      <ClientVoices backgroundColor="var(--bg-subtle)" />

      {/* 6. WORK SHOWCASE MARQUEE */}
      <WorkShowcaseMarquee />

      {/* 7. WHY CHOOSE US */}
      <WhyChooseUs
        onSelectLocation={handleSelectLocation}
        onOpenStrategyModal={(note) => openStrategyModal(note || 'Why Choose Us CTA')}
        backgroundColor="var(--bg-main)"
      />

      {/* 8. HOME CTA BANNER */}
      <HomeCtaBanner onNavigate={handleNavigate} />

      {/* 9. CONTACT SECTION */}
      <ContactSection
        backgroundColor="var(--bg-main)"
        onOpenContactModal={() => openContactModal('')}
      />

      {/* FLOATING CONTROLS & NAVIGATOR */}
      <SectionNavigator activePage="home" />

      {/* INTERACTIVE POP-UP MODALS */}
      <LocationsModal
        isOpen={isLocationsModalOpen}
        onClose={() => setIsLocationsModalOpen(false)}
        onSelectLocation={handleSelectLocation}
      />

      <StatCardModal
        statType={activeStatModal}
        onClose={() => setActiveStatModal(null)}
        onOpenStrategyModal={(note) => openStrategyModal(note || 'Stat Card Modal CTA')}
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
