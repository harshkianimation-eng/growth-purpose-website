'use client';

import React, { useState, useEffect } from 'react';
import type { PageView } from '../types';
import { ALL_STATE_LOCATIONS, TOP_FOOTER_INTERNATIONAL_LOCATIONS } from '../data/locationsData';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';
import { updatePageSeo } from '../utils/seoManager';

interface LocationsDirectoryPageProps {
  onNavigate: (page: PageView) => void;
  onSelectLocation: (locationName: string) => void;
}

export const LocationsDirectoryPage: React.FC<LocationsDirectoryPageProps> = ({ onNavigate, onSelectLocation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('All');

  useEffect(() => {
    updatePageSeo('all-locations');
  }, []);

  const handleCityClick = (city: string) => {
    onSelectLocation(city);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredStates = ALL_STATE_LOCATIONS.filter((item) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchesState = item.state.toLowerCase().includes(query);
    const matchesTier2 = item.tier2.some(c => c.toLowerCase().includes(query));
    const matchesTier3 = item.tier3_4.some(c => c.toLowerCase().includes(query));
    return matchesState || matchesTier2 || matchesTier3;
  });

  const filteredIntl = TOP_FOOTER_INTERNATIONAL_LOCATIONS.filter(loc =>
    !searchQuery || loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCitiesCount = ALL_STATE_LOCATIONS.reduce((acc, curr) => acc + curr.tier2.length + curr.tier3_4.length, 0) + TOP_FOOTER_INTERNATIONAL_LOCATIONS.length;

  return (
    <div style={{ backgroundColor: '#0D0D11', color: '#FFFFFF', minHeight: '100vh', padding: '2rem 0 6rem 0' }}>
      <div className="container" style={{ maxWidth: '1180px' }}>
        
        {/* 1. BREADCRUMB */}
        <div style={{ fontSize: '0.875rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
          <a href="/" style={{ color: '#B89CFF', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
          {' / '}
          <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Complete Locations Directory</span>
        </div>

        {/* 2. HERO HEADER BANNER */}
        <div className="responsive-hero-card" style={{ background: '#1F1F24', borderTop: '4px solid #6D4AFF', borderLeft: '1px solid rgba(109, 74, 255, 0.25)', borderRight: '1px solid rgba(109, 74, 255, 0.25)', borderBottom: '1px solid rgba(109, 74, 255, 0.25)', borderRadius: '24px', padding: '3.5rem 3rem', marginBottom: '3rem', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ width: '30px', height: '1px', background: '#6D4AFF' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              PAN-INDIA & GLOBAL GEOGRAPHIC COVERAGE ({totalCitiesCount}+ MARKETS)
            </span>
          </div>

          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.2rem', fontWeight: 900, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Explore Our Complete Digital Marketing Locations Directory
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.7, maxWidth: '850px', marginBottom: '2.25rem' }}>
            The Growth Purpose delivers data-driven performance marketing, Local SEO, Meta &amp; Google PPC ads, social media management, and custom web engineering across Tier 1 Metros, Tier 2 Growth Hubs, Tier 3 &amp; Tier 4 local markets in India, as well as International business hubs.
          </p>

          {/* SEARCH BAR & CATEGORY TABS CONTAINER */}
          <div style={{ background: '#1F1F24', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.25)', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              <input
                type="text"
                placeholder="🔍 Search any city or state (e.g. Gorakhpur, Kota, Ludhiana, USA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.4rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(109, 74, 255, 0.35)',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backgroundColor: '#16161D',
                  color: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['All', 'Tier 2 Metros', 'Tier 3 & 4 Cities', 'International'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      backgroundColor: isActive ? '#6D4AFF' : '#16161D',
                      color: isActive ? '#FFFFFF' : '#CBD5E1',
                      border: isActive ? '1px solid #B89CFF' : '1px solid rgba(255, 255, 255, 0.12)',
                      padding: '0.55rem 1.25rem',
                      borderRadius: '999px',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 14px rgba(109, 74, 255, 0.4)' : 'none'
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. INTERNATIONAL DESTINATIONS GRID */}
        {(activeTab === 'All' || activeTab === 'International') && filteredIntl.length > 0 && (
          <div style={{ backgroundColor: '#1F1F24', borderRadius: '24px', padding: '2.25rem', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '2.5rem', boxShadow: '0 8px 25px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🌍</span>
                <span>International Expansion Markets</span>
              </h2>
              <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#60A5FA', backgroundColor: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '0.35rem 0.9rem', borderRadius: '999px' }}>
                Global Cross-Border Hubs
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {filteredIntl.map((loc) => {
                const citySlug = loc.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                return (
                  <a
                    key={loc}
                    href={`/digital-marketing/${citySlug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCityClick(loc);
                    }}
                    style={{
                      textDecoration: 'none',
                      backgroundColor: '#16161D',
                      color: '#60A5FA',
                      border: '1px solid rgba(59, 130, 246, 0.35)',
                      borderRadius: '999px',
                      padding: '0.6rem 1.4rem',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2563EB';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#16161D';
                      e.currentTarget.style.color = '#60A5FA';
                    }}
                  >
                    🌐 {loc} Digital Marketing →
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. STATE-BY-STATE DOMESTIC LOCATIONS GRID */}
        {(activeTab === 'All' || activeTab === 'Tier 2 Metros' || activeTab === 'Tier 3 & 4 Cities') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '4rem' }}>
            {filteredStates.map((stateData) => {
              const showTier2 = activeTab === 'All' || activeTab === 'Tier 2 Metros';
              const showTier3 = activeTab === 'All' || activeTab === 'Tier 3 & 4 Cities';

              const tier2List = stateData.tier2.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));
              const tier3List = stateData.tier3_4.filter(c => !searchQuery || c.toLowerCase().includes(searchQuery.toLowerCase()));

              if (!tier2List.length && !tier3List.length) return null;

              return (
                <div
                  key={stateData.state}
                  style={{
                    backgroundColor: '#1F1F24',
                    borderRadius: '24px',
                    padding: '2.25rem',
                    border: '1px solid rgba(109, 74, 255, 0.25)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#FFFFFF', margin: 0, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: '1.4rem' }}>📍</span>
                      <span>{stateData.state} Coverage</span>
                    </h2>
                    <span style={{ fontSize: '0.825rem', fontWeight: 800, color: '#B89CFF', backgroundColor: 'rgba(109, 74, 255, 0.2)', border: '1px solid rgba(109, 74, 255, 0.35)', padding: '0.35rem 0.9rem', borderRadius: '999px' }}>
                      {stateData.tier2.length + stateData.tier3_4.length} Cities Covered
                    </span>
                  </div>

                  {/* TIER 2 METROS */}
                  {showTier2 && tier2List.length > 0 && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#B89CFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
                        TIER 2 MAJOR METRO HUBS
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                        {tier2List.map((city) => {
                          const citySlug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                          return (
                            <a
                              key={city}
                              href={`/digital-marketing/${citySlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleCityClick(city);
                              }}
                              style={{
                                textDecoration: 'none',
                                backgroundColor: '#16161D',
                                color: '#FFFFFF',
                                border: '1px solid rgba(109, 74, 255, 0.25)',
                                borderRadius: '999px',
                                padding: '0.5rem 1.25rem',
                                fontSize: '0.875rem',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                                display: 'inline-block'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#6D4AFF';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = '#B89CFF';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#16161D';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.25)';
                              }}
                            >
                              {city} →
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* TIER 3 & 4 CITIES */}
                  {showTier3 && tier3List.length > 0 && (
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.85rem' }}>
                        TIER 3 & TIER 4 LOCAL MARKET COVERAGE
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {tier3List.map((city) => {
                          const citySlug = city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                          return (
                            <a
                              key={city}
                              href={`/digital-marketing/${citySlug}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handleCityClick(city);
                              }}
                              style={{
                                textDecoration: 'none',
                                backgroundColor: '#16161D',
                                color: '#CBD5E1',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '999px',
                                padding: '0.4rem 1rem',
                                fontSize: '0.825rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                display: 'inline-block'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#6D4AFF';
                                e.currentTarget.style.color = '#FFFFFF';
                                e.currentTarget.style.borderColor = '#B89CFF';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#16161D';
                                e.currentTarget.style.color = '#CBD5E1';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                              }}
                            >
                              {city}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>

      <WorkShowcaseMarquee />

      {/* 5. BOTTOM WHATSAPP CTA BOX */}
      <div className="container" style={{ maxWidth: '1100px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1F1F28 0%, #151322 100%)', border: '1px solid rgba(109, 74, 255, 0.3)', borderRadius: '24px', padding: '3.5rem 2rem', textAlign: 'center', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
            Don't see your city listed?
          </h2>
          <p style={{ fontSize: '1rem', color: '#CBD5E1', marginBottom: '2rem' }}>
            We provide full-spectrum digital marketing and social growth for businesses in any location across India &amp; Globally.
          </p>

          <a
            href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ backgroundColor: '#6D4AFF', color: '#FFFFFF', padding: '0.95rem 2.5rem', borderRadius: '999px', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-block', boxShadow: '0 10px 30px rgba(109, 74, 255, 0.45)' }}
          >
            Chat on WhatsApp 💬 →
          </a>
        </div>
      </div>
    </div>
  );
};




