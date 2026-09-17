'use client';

import React, { useState } from 'react';


interface AboutUsProps {
  onNavigate?: (page: any, slug?: string) => void;
  onOpenLeaderModal?: (person: 'founder' | 'harsh' | 'co-founder' | 'khwahish' | 'why-us' | 'team' | 'vedika') => void;
  onOpenStrategyModal?: (note?: string) => void;
  onSelectLocation?: (locationName: string) => void;
  backgroundColor?: string;
  isStandalone?: boolean;
}

export const AboutUs: React.FC<AboutUsProps> = ({ 
  onNavigate,
  onOpenLeaderModal, 
  onOpenStrategyModal: _onOpenStrategyModal, 
  onSelectLocation: _onSelectLocation,
  backgroundColor,
  isStandalone = false
}) => {
  const [hoveredLeader, setHoveredLeader] = useState<'founder' | 'vedika' | null>(null);

  return (
    <section id="about" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-subtle)', position: 'relative' }}>
      <div className="container">
        
        {/* 1. HERO HEADER & TAGLINE */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="section-tag" style={{ letterSpacing: '0.1em' }}>
            PRECISION GROWTH ARCHITECTURE — ABOUT THE GROWTH PURPOSE
          </div>
          {isStandalone ? (
            <h1 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.15, fontFamily: 'Outfit, sans-serif' }}>
              We Don't Just Run Campaigns. <br />
              We Architect Market Dominance.
            </h1>
          ) : (
            <h2 style={{ fontSize: '3.2rem', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.15, fontFamily: 'Outfit, sans-serif' }}>
              We Don't Just Run Campaigns. <br />
              We Architect Market Dominance.
            </h2>
          )}
          <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto' }}>
            Bespoke creative excellence, mathematical performance marketing, radical execution transparency, and live client dashboards. Powered by uncompromising founder accountability and flexible month-to-month agility.
          </p>
        </div>

        {/* 4. OUR CORE VALUE PILLARS GRID */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-tag">THE GROWTH ADVANTAGE</span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif' }}>Core Pillars of Our Growth Architecture</h3>
          </div>

          <div className="responsive-4-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>👑</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Founder-Direct Oversight</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Founder Vedika personally designs and oversees campaign architectures, creative standards, and performance scaling.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>🔓</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Agile Zero-Lockin Terms</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                True performance partnership with month-to-month freedom. We continuously earn your trust through verified ROI every single month.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>💳</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Milestone-Aligned Post-Pay</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Structured milestone billing aligned with verified deliverable completion and quality assurance on eligible projects.
              </p>
            </div>

            <div className="differentiator-card" onClick={() => { if (onOpenLeaderModal) onOpenLeaderModal('why-us'); }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>📊</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: 'var(--secondary)', fontFamily: 'Outfit, sans-serif' }}>Real-Time Data Transparency</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Custom live KPI intelligence consoles giving you 24/7 visibility into ad spend efficiency, pipeline generation, and true ROAS.
              </p>
            </div>
          </div>
        </div>

        {/* 5. LEADERSHIP SECTION (FOUNDER PROFILE) */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag">EXECUTIVE LEADERSHIP</span>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Meet the Founder Behind The Growth Purpose</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Direct founder oversight on every client strategy</p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div 
              style={{ 
                background: 'linear-gradient(145deg, #1F1F24 0%, rgba(109, 74, 255, 0.05) 100%)', 
                border: '1px solid rgba(109, 74, 255, 0.25)', 
                borderTop: (hoveredLeader === 'founder' || hoveredLeader === 'vedika') ? '4px solid #6D4AFF' : '4px solid rgba(109, 74, 255, 0.4)',
                borderRadius: '24px', 
                padding: '2.5rem 2.25rem', 
                display: 'flex', 
                gap: '2rem', 
                alignItems: 'center', 
                boxShadow: (hoveredLeader === 'founder' || hoveredLeader === 'vedika') ? '0 20px 40px rgba(109, 74, 255, 0.15)' : 'var(--shadow-sm)', 
                cursor: 'pointer', 
                transform: (hoveredLeader === 'founder' || hoveredLeader === 'vedika') ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
              }}
              onClick={() => { 
                if (onNavigate) {
                  onNavigate('about', 'founder');
                } else if (onOpenLeaderModal) {
                  onOpenLeaderModal('founder'); 
                }
              }}
              onMouseEnter={() => setHoveredLeader('founder')}
              onMouseLeave={() => setHoveredLeader(null)}
            >
              <div
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '28px',
                  background: 'linear-gradient(135deg, #1A0E2E 0%, #2E1854 50%, #1A0E2E 100%)',
                  border: (hoveredLeader === 'founder' || hoveredLeader === 'vedika') ? '3px solid #B89CFF' : '2px solid #6D4AFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.8rem',
                  fontWeight: 900,
                  color: '#B89CFF',
                  boxShadow: (hoveredLeader === 'founder' || hoveredLeader === 'vedika') ? '0 0 45px rgba(109, 74, 255, 0.6)' : '0 0 35px rgba(109, 74, 255, 0.45)',
                  flexShrink: 0,
                  transform: (hoveredLeader === 'founder' || hoveredLeader === 'vedika') ? 'scale(1.06) rotate(3deg)' : 'scale(1) rotate(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                V
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#FFFFFF', margin: 0, fontFamily: 'Outfit, sans-serif' }}>Vedika</h4>
                  <div style={{ color: '#B89CFF', backgroundColor: 'rgba(109, 74, 255, 0.15)', border: '1px solid rgba(109, 74, 255, 0.3)', padding: '0.25rem 0.85rem', borderRadius: '999px', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Founder & Lead Growth Strategist
                  </div>
                </div>

                <p style={{ fontSize: '0.925rem', color: '#CBD5E1', lineHeight: 1.6, margin: '0.25rem 0 0.5rem 0' }}>
                  Dedicated to bridging creative storytelling with rigorous performance marketing. Vedika directly leads high-ticket customer acquisition, multi-channel creative systems, and revenue scaling for B2B and D2C brands.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '0.25rem' }}>
                  <div style={{ 
                    color: '#6D4AFF', 
                    fontWeight: 800, 
                    fontSize: '0.825rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.35rem',
                    transform: (hoveredLeader === 'founder' || hoveredLeader === 'vedika') ? 'translateX(6px)' : 'translateX(0)',
                    transition: 'all 0.3s ease'
                  }}>
                    READ FOUNDER PROFILE & STORY →
                  </div>

                  <a
                    href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#6D4AFF',
                      color: '#FFFFFF',
                      padding: '0.45rem 1.15rem',
                      borderRadius: '999px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 10px rgba(109, 74, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#5B21B6'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6D4AFF'}
                  >
                    💬 Direct WhatsApp Sync
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};





