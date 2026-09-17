'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LocationsDirectoryPage } from '@/views/LocationsDirectoryPage';

export default function LocationsMainPage() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    if (page === 'home') router.push('/');
    else router.push(`/${page}`);
  };

  const handleSelectLocation = (loc: string) => {
    const slug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    router.push(`/location/${slug}`);
  };

  return (
    <LocationsDirectoryPage
      onNavigate={handleNavigate as any}
      onSelectLocation={handleSelectLocation}
    />
  );
}

