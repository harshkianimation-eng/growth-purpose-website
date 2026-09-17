'use client';

import React from 'react';
import SmmMainPage from '@/app/smm/page';

interface SmmPageProps {
  onNavigate?: (page: any, slug?: string) => void;
  onOpenStrategyModal?: () => void;
}

export const SmmPage: React.FC<SmmPageProps> = () => {
  return <SmmMainPage />;
};

export default SmmPage;
