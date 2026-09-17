'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LocationsDirectoryPage } from '@/views/LocationsDirectoryPage';

export default function DigitalMarketingDirectoryPage() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    if (page === 'home') router.push('/');
    else if (page === 'all-locations') router.push('/locations');
    else router.push(`/${page}`);
  };

  const handleSelectLocation = (locationName: string) => {
    const slug = locationName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    router.push(`/location/${slug}`);
  };

  return (
    <LocationsDirectoryPage
      onNavigate={handleNavigate}
      onSelectLocation={handleSelectLocation}
    />
  );
}
