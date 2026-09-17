'use client';

import React, { useState } from 'react';
import { domesticLocations, internationalLocations } from './Footer';

const AnimatedCounter: React.FC<{
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}> = ({ target, duration = 3500, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * target;
      setCount(currentCount);
      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };
    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [target, duration]);

  const formatted = count.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });

  return <>{formatted}{suffix}</>;
};

interface InteractiveStatsBarProps {
  onSelectLocation?: (locationName: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
}

type ModalType = 'clients' | 'projects' | 'rating' | 'locations' | null;

export const InteractiveStatsBar: React.FC<InteractiveStatsBarProps> = ({
  onSelectLocation,
  onOpenStrategyModal
}) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [locationSearch, setLocationSearch] = useState('');

  const filteredDomestic = domesticLocations.filter((loc: string) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredInternational = internationalLocations.filter((loc: string) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const handleLocationClick = (loc: string) => {
    setActiveModal(null);
    if (onSelectLocation) {
      onSelectLocation(loc);
    }
  };

  return (
    <>
      {/* 4-COLUMN ANIMATED STATS BAR MATCHING SCREENSHOT 1 */}
      <div
        className="responsive-4-grid"
        style={{
          marginBottom: '4rem',
          background: '#1F1F24',
          padding: '1.5rem 1.25rem',
          borderRadius: '20px',
          border: '1px solid rgba(109, 74, 255, 0.25)',
          boxShadow: '0 12px 35px rgba(11, 19, 42, 0.05)',
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto 4rem auto'
        }}
      >
        {/* CARD 1: HAPPY CLIENTS / CLIENTS GUIDED */}
        <div
          onClick={() => setActiveModal('clients')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: '#1F1F24',
            border: '1px solid rgba(109, 74, 255, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(109, 74, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#6D4AFF', lineHeight: 1.15 }}>
            <AnimatedCounter target={2700} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Businesses Accelerated
          </div>
          <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 500 }}>
            Across 89 Strategic Sectors
          </div>
        </div>

        {/* CARD 2: DELIVERED PROJECTS */}
        <div
          onClick={() => setActiveModal('projects')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: '#1F1F24',
            border: '1px solid rgba(109, 74, 255, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#10B981', lineHeight: 1.15 }}>
            <AnimatedCounter target={500} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            High-Impact Deployments
          </div>
          <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 500 }}>
            100% Milestone Completion
          </div>
        </div>

        {/* CARD 3: CLIENT RATING */}
        <div
          onClick={() => setActiveModal('rating')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: '#1F1F24',
            border: '1px solid rgba(109, 74, 255, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(109, 74, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#6D4AFF', lineHeight: 1.15 }}>
            <AnimatedCounter target={4.9} suffix="★" decimals={1} />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Client Satisfaction Rating
          </div>
          <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 500 }}>
            Verified Executive Reviews
          </div>
        </div>

        {/* CARD 4: CITIES & INTERNATIONAL (ALL LOCATIONS POP-UP) */}
        <div
          onClick={() => setActiveModal('locations')}
          style={{
            padding: '1.15rem 0.75rem',
            borderRadius: '14px',
            backgroundColor: '#1F1F24',
            border: '1px solid rgba(109, 74, 255, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '2.3rem', fontWeight: 900, color: '#8B5CF6', lineHeight: 1.15 }}>
            <AnimatedCounter target={50} suffix="+" />
          </div>
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#FFFFFF', marginTop: '0.2rem', marginBottom: '0.1rem' }}>
            Global Reach & Hubs
          </div>
          <div style={{ fontSize: '0.78rem', color: '#CBD5E1', fontWeight: 500 }}>
            India, USA, UK & Middle East
          </div>
        </div>
      </div>

      {/* MODAL 1: HAPPY CLIENTS BREAKDOWN */}
      {activeModal === 'clients' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#1F1F24', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', backgroundColor: '#1F1F24', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid rgba(109, 74, 255, 0.25)' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(109, 74, 255, 0.15)', color: '#6D4AFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🤝</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>PROVEN PARTNERSHIPS</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF' }}>2,700+ Businesses Accelerated</h3>
              </div>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              From fast-scaling direct-to-consumer innovators and healthcare groups to premier real estate developers and B2B leaders across 89 sectors, The Growth Purpose builds enduring market dominance.
            </p>

            <div style={{ background: '#1F1F24', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: '#FFFFFF' }}>Core Focus Verticals:</h4>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                <li>✓ Healthcare, Clinics & Wellness</li>
                <li>✓ Real Estate & Infrastructure</li>
                <li>✓ E-Commerce & Omnichannel D2C</li>
                <li>✓ Hospitality & Lifestyle</li>
                <li>✓ Higher Education & EdTech</li>
                <li>✓ Enterprise B2B SaaS & Tech</li>
              </ul>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setActiveModal(null);
                if (onOpenStrategyModal) onOpenStrategyModal('Client Growth Partnership');
              }}
            >
              Partner With The Growth Purpose ➔
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2: DELIVERED PROJECTS */}
      {activeModal === 'projects' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#1F1F24', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', backgroundColor: '#1F1F24', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid rgba(109, 74, 255, 0.25)' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>🚀</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>EXECUTION TRACK RECORD</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF' }}>500+ High-Impact Deployments</h3>
              </div>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Every growth campaign is engineered with high-velocity creative testing, algorithmic paid media management, retention-first video production, and real-time revenue analytics.
            </p>

            <div style={{ background: '#1F1F24', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: '#FFFFFF' }}>Key Project Deliverables:</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                <li>✓ Full 17-Discipline Performance Marketing Infrastructure</li>
                <li>✓ High-Converting Next.js & React Web Platforms</li>
                <li>✓ 100% Commercial IP & Asset Ownership</li>
              </ul>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', backgroundColor: '#10B981', borderColor: '#10B981' }}
              onClick={() => {
                setActiveModal(null);
                if (onOpenStrategyModal) onOpenStrategyModal('New Digital Project');
              }}
            >
              Start Your Project ➔
            </button>
          </div>
        </div>
      )}

      {/* MODAL 3: CLIENT RATING */}
      {activeModal === 'rating' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#1F1F24', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', backgroundColor: '#1F1F24', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid rgba(109, 74, 255, 0.25)' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '950px', padding: '3rem 2rem 5rem 2rem' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(109, 74, 255, 0.15)', color: '#6D4AFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem' }}>⭐</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem' }}>VERIFIED ACCREDITATION</span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF' }}>4.9★ Overall Client Satisfaction</h3>
              </div>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: '0.925rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Ranked 4.9/5 across verified client reviews, with zero lock-in contracts and an uncompromising dedication to measurable pipeline revenue.
            </p>

            <div style={{ background: '#1F1F24', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 800, marginBottom: '0.75rem', color: '#FFFFFF' }}>Review Breakdown:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
                <div style={{ background: '#1F1F24', padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(109, 74, 255, 0.25)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#6D4AFF' }}>4.9★</div>
                  <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>Google Reviews</div>
                </div>
                <div style={{ background: '#1F1F24', padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(109, 74, 255, 0.25)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#10B981' }}>5.0★</div>
                  <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>Clutch Verified</div>
                </div>
                <div style={{ background: '#1F1F24', padding: '0.75rem', borderRadius: '10px', border: '1px solid rgba(109, 74, 255, 0.25)' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#6D4AFF' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>Milestone Delivery</div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', backgroundColor: '#6D4AFF', borderColor: '#6D4AFF' }}
              onClick={() => {
                setActiveModal(null);
                if (onOpenStrategyModal) onOpenStrategyModal('Verified Growth Review');
              }}
            >
              Get Free Performance Audit ➔
            </button>
          </div>
        </div>
      )}

      {/* MODAL 4: ALL 57 LOCATIONS FULL PAGE VIEW */}
      {activeModal === 'locations' && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div style={{ position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#16161D', borderBottom: '1px solid rgba(109, 74, 255, 0.25)', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button onClick={() => setActiveModal(null)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', backgroundColor: '#1F1F24', padding: '0.5rem 1.25rem', borderRadius: '999px', border: '1px solid rgba(109, 74, 255, 0.35)', cursor: 'pointer' }}>
              ← Back to Main Page
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', cursor: 'pointer' }}>✕</button>
          </div>
          <div className="modal-card" style={{ maxWidth: '1050px', padding: '3.5rem 2rem 6rem 2rem', backgroundColor: '#1F1F24', color: '#FFFFFF' }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontSize: '1.5rem', color: '#CBD5E1' }} onClick={() => setActiveModal(null)}>×</button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(109, 74, 255, 0.2)', border: '1px solid rgba(109, 74, 255, 0.35)', color: '#B89CFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📍</div>
              <div>
                <span className="section-tag" style={{ fontSize: '0.7rem', marginBottom: '0.15rem', backgroundColor: 'rgba(109, 74, 255, 0.15)', color: '#B89CFF', border: '1px solid rgba(109, 74, 255, 0.3)' }}>GLOBAL FOOTPRINT</span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFFFFF' }}>50+ Cities & International Hubs</h3>
              </div>
            </div>

            <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Click any location below to open its dedicated digital marketing landing page:
            </p>

            {/* SEARCH INPUT FILTER */}
            <input
              type="text"
              placeholder="🔍 Search city or country (e.g., Lucknow, Mumbai, USA, Dubai)..."
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1.2rem',
                borderRadius: '12px',
                backgroundColor: '#16161D',
                color: '#FFFFFF',
                border: '1px solid rgba(109, 74, 255, 0.35)',
                fontSize: '0.9rem',
                outline: 'none',
                marginBottom: '1.75rem'
              }}
            />

            {/* DOMESTIC LOCATIONS PILLS */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                🇮🇳 Domestic Locations ({filteredDomestic.length})
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {filteredDomestic.map((loc: string) => (
                  <button
                    key={loc}
                    onClick={() => handleLocationClick(loc)}
                    style={{
                      backgroundColor: '#16161D',
                      color: '#CBD5E1',
                      border: '1px solid rgba(109, 74, 255, 0.25)',
                      borderRadius: '999px',
                      padding: '0.45rem 1.1rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#6D4AFF';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#B89CFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#16161D';
                      e.currentTarget.style.color = '#CBD5E1';
                      e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.25)';
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* INTERNATIONAL LOCATIONS PILLS */}
            <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.85rem' }}>
                🌐 International Locations ({filteredInternational.length})
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {filteredInternational.map((loc: string) => (
                  <button
                    key={loc}
                    onClick={() => handleLocationClick(loc)}
                    style={{
                      backgroundColor: '#16161D',
                      color: '#B89CFF',
                      border: '1px solid rgba(109, 74, 255, 0.35)',
                      borderRadius: '999px',
                      padding: '0.45rem 1.1rem',
                      fontSize: '0.825rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#6D4AFF';
                      e.currentTarget.style.color = '#FFFFFF';
                      e.currentTarget.style.borderColor = '#B89CFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#16161D';
                      e.currentTarget.style.color = '#B89CFF';
                      e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.35)';
                    }}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};





