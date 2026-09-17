'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StrategyModal } from '@/components/StrategyModal';
import { ContactFormModal } from '@/components/ContactFormModal';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';

interface ModalContextType {
  openStrategyModal: (note?: string) => void;
  closeStrategyModal: () => void;
  openContactModal: (service?: string) => void;
  closeContactModal: () => void;
  openSearchModal: () => void;
  closeSearchModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [strategyNote, setStrategyNote] = useState('');
  const [contactOpen, setContactOpen] = useState(false);
  const [contactService, setContactService] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const openStrategyModal = (note?: string) => {
    setStrategyNote(note || '');
    setStrategyOpen(true);
  };

  const closeStrategyModal = () => {
    setStrategyOpen(false);
    setStrategyNote('');
  };

  const openContactModal = (service?: string) => {
    setContactService(service || '');
    setContactOpen(true);
  };

  const closeContactModal = () => {
    setContactOpen(false);
    setContactService('');
  };

  const openSearchModal = () => {
    setSearchOpen(true);
  };

  const closeSearchModal = () => {
    setSearchOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openStrategyModal,
        closeStrategyModal,
        openContactModal,
        closeContactModal,
        openSearchModal,
        closeSearchModal,
      }}
    >
      {children}

      <StrategyModal
        isOpen={strategyOpen}
        onClose={closeStrategyModal}
        planName={strategyNote}
      />

      <ContactFormModal
        isOpen={contactOpen}
        onClose={closeContactModal}
        prefilledService={contactService}
      />

      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={closeSearchModal}
      />
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
};
