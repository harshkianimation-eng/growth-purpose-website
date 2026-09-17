'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { updatePageSeo } from '../utils/seoManager';

export * from '../data/industriesData';
import { IndustryItem, industryCategories, all89IndustriesList } from '../data/industriesData';

interface IndustriesPageProps {
  industryId?: string;
  onNavigate: (page: any, slug?: string) => void;
  onOpenStrategyModal: (note?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ industryId: _industryId, onNavigate, onOpenStrategyModal: _onOpenStrategyModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    updatePageSeo('industries');
  }, []);

  const handleOpenHub = (item: IndustryItem) => {
    onNavigate('industry-details', `marketing-for-${item.id}`);
  };

  const filteredIndustries = useMemo(() => {
    return all89IndustriesList.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div style={{ backgroundColor: '#0D0D11', color: '#FFFFFF', minHeight: '100vh', padding: '2.5rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glows */}
      <div style={{ position: 'absolute', top: '5%', left: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(109, 74, 255, 0.12) 0%, rgba(109, 74, 255, 0) 70%)', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184, 156, 255, 0.08) 0%, rgba(184, 156, 255, 0) 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* BREADCRUMB */}
        <div style={{ fontSize: '0.825rem', color: '#94A3B8', marginBottom: '2rem' }}>
          <span style={{ cursor: 'pointer', color: '#B89CFF', fontWeight: 600 }} onClick={() => onNavigate('home')}>Home</span> › <span style={{ color: '#CBD5E1', fontWeight: 600 }}>Industries</span>
        </div>

        {/* HEADER SECTION - UNIQUE PREMIUM The Growth Purpose COPY */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 2.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', padding: '0.35rem 1rem', borderRadius: '999px', background: 'rgba(109, 74, 255, 0.15)', border: '1px solid rgba(109, 74, 255, 0.3)', fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            <span>🎯</span>
            <span>INDUSTRY-SPECIFIC GROWTH ARCHITECTURES</span>
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            89 Sectors Scaled. <span style={{ background: 'linear-gradient(to right, #B89CFF, #A78BFA, #6D4AFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Zero Generic Marketing.</span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Every niche has its own rules. Explore our 89 dedicated authority hubs powered by real Indian market intelligence, verified acquisition funnels, and battle-tested digital playbooks.
          </p>
        </div>

        {/* CAPSULE SEARCH BAR */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
            <input
              type="text"
              placeholder="Search industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.75rem',
                borderRadius: '999px',
                border: '1px solid rgba(109, 74, 255, 0.35)',
                backgroundColor: '#1F1F24',
                fontSize: '0.925rem',
                color: '#FFFFFF',
                outline: 'none',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                transition: 'all 0.25s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#B89CFF';
                e.target.style.boxShadow = '0 0 20px rgba(109, 74, 255, 0.35)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(109, 74, 255, 0.35)';
                e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.35)';
              }}
            />
          </div>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            maxWidth: '1100px',
            margin: '0 auto 2.25rem auto'
          }}
        >
          {industryCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: isActive ? '#6D4AFF' : '#1F1F24',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  border: isActive ? '1px solid #B89CFF' : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '999px',
                  padding: '0.45rem 1.1rem',
                  fontSize: '0.825rem',
                  fontWeight: isActive ? 800 : 600,
                  cursor: 'pointer',
                  boxShadow: isActive ? '0 4px 18px rgba(109, 74, 255, 0.4)' : '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#282832';
                    e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.4)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#1F1F24';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.color = '#CBD5E1';
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* COUNTER SUBTEXT */}
        <div style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '2.5rem' }}>
          {filteredIndustries.length} INDUSTRIES SHOWN
        </div>

        {/* 5-COLUMN GRID OF INDUSTRY CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredIndustries.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenHub(item)}
              style={{
                backgroundColor: '#1F1F24',
                borderRadius: '20px',
                padding: '1.25rem 1.1rem',
                border: '1px solid rgba(109, 74, 255, 0.25)',
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, boxShadow 0.25s ease, borderColor 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(109, 74, 255, 0.2)';
                e.currentTarget.style.borderColor = '#B89CFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.25)';
              }}
            >
              {/* TOP ROW: ICON ON LEFT, LIVE BADGE ON RIGHT */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '0.85rem' }}>
                <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{item.icon}</span>
                <span
                  style={{
                    backgroundColor: 'rgba(109, 74, 255, 0.25)',
                    color: '#B89CFF',
                    border: '1px solid rgba(109, 74, 255, 0.4)',
                    fontSize: '0.625rem',
                    fontWeight: 900,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '6px',
                    letterSpacing: '0.05em'
                  }}
                >
                  LIVE
                </span>
              </div>

              {/* INDUSTRY NAME */}
              <h3
                style={{
                  fontFamily: 'Outfit, serif',
                  fontSize: '1rem',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  marginBottom: '0.2rem',
                  lineHeight: 1.3
                }}
              >
                {item.name}
              </h3>

              {/* CATEGORY SUBTEXT */}
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, marginBottom: '1rem' }}>
                {item.category}
              </div>

              {/* EXPLORE LINK AT BOTTOM LEFT */}
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#B89CFF', fontSize: '0.78rem', fontWeight: 800 }}>
                <span>Explore</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};




