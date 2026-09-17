'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  all89IndustriesList, 
  IndustryItem 
} from './IndustriesPage';
import { updatePageSeo } from '../utils/seoManager';

interface IndustryDetailPageProps {
  slug?: string;
  industryId?: string;
  onNavigate?: (page: any, slug?: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({
  slug,
  industryId,
  onNavigate,
  onOpenStrategyModal: _onOpenStrategyModal
}) => {
  const querySlug = (slug || industryId || '').toLowerCase().trim();

  // Find matched industry from all89IndustriesList
  const matchedIndustry: IndustryItem = useMemo(() => {
    if (!querySlug) return all89IndustriesList[0];

    const clean = querySlug
      .replace(/^marketing-for-/i, '')
      .replace(/^marketing-to-/i, '')
      .replace(/^marketing-for\s+/i, '')
      .replace(/^marketing\s+for\s+/i, '')
      .replace(/^marketing-/i, '')
      .replace(/^marketing\s+/i, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const cleanPlural = clean.endsWith('s') ? clean : `${clean}s`;
    const cleanSingular = clean.replace(/s$/, '');

    return all89IndustriesList.find((i) => {
      const itemCleanId = i.id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      const itemCleanName = i.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return (
        itemCleanId === clean ||
        itemCleanName === clean ||
        itemCleanId === cleanPlural ||
        itemCleanId === cleanSingular ||
        itemCleanName === cleanPlural ||
        itemCleanName === cleanSingular
      );
    }) || all89IndustriesList[0];
  }, [querySlug]);

  const activeHubIndustry = matchedIndustry;

  // Interactive Hub Tab State (exactly like Digital Digix)
  const [activeHubTab, setActiveHubTab] = useState<string>('Overview');

  useEffect(() => {
    if (activeHubIndustry) {
      updatePageSeo('industries', activeHubIndustry.id, {
        title: `Digital Marketing for ${activeHubIndustry.name} — Client Acquisition & Growth`,
        description: activeHubIndustry.overview,
      });
    }
  }, [activeHubIndustry]);

  // Related industries in the same category
  const relatedIndustries = useMemo(() => {
    return all89IndustriesList
      .filter((i) => i.id !== activeHubIndustry.id && (i.category === activeHubIndustry.category || activeHubIndustry.category === 'All'))
      .slice(0, 4);
  }, [activeHubIndustry]);

  const handleNav = (targetPage: string, targetSlug?: string) => {
    if (onNavigate) {
      onNavigate(targetPage, targetSlug);
    } else {
      if (targetPage === 'home') window.location.href = '/';
      else if (targetPage === 'industries') window.location.href = '/industries';
      else if (targetPage === 'industry-details' && targetSlug) window.location.href = `/industries/${targetSlug.startsWith('marketing-for-') ? targetSlug : 'marketing-for-' + targetSlug}`;
      else if (targetPage === 'service-details' && targetSlug) window.location.href = `/services/${targetSlug}`;
      else window.location.href = `/${targetPage}`;
    }
  };

  const whatsappHref = "https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services";

  return (
    <div style={{ backgroundColor: '#0D0D11', color: '#FFFFFF', minHeight: '100vh', padding: '2rem 0 6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glows */}
      <div style={{ position: 'absolute', top: '2%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(109, 74, 255, 0.15) 0%, rgba(109, 74, 255, 0) 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '15%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(184, 156, 255, 0.1) 0%, rgba(184, 156, 255, 0) 70%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <div className="container" style={{ maxWidth: '1120px', position: 'relative', zIndex: 1 }}>
        
        {/* BREADCRUMB NAVIGATION */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div style={{ fontSize: '0.85rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ cursor: 'pointer', color: '#B89CFF', fontWeight: 600 }} onClick={() => handleNav('home')}>Home</span>
            <span>›</span>
            <span style={{ cursor: 'pointer', color: '#CBD5E1', fontWeight: 600 }} onClick={() => handleNav('industries')}>Industries</span>
            <span>›</span>
            <span style={{ color: '#B89CFF', fontWeight: 700 }}>{activeHubIndustry.name} Hub</span>
          </div>

          <button
            onClick={() => handleNav('industries')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#1F1F24',
              border: '1px solid rgba(109, 74, 255, 0.35)',
              color: '#FFFFFF',
              padding: '0.45rem 1.1rem',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2D2D38'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1F1F24'}
          >
            ← Back to All Industries
          </button>
        </div>

        {/* 1. TOP HEADER BANNER */}
        <div
          style={{
            backgroundColor: '#1F1F24',
            borderRadius: '24px',
            padding: '2.25rem 2.5rem',
            borderTop: '4px solid #6D4AFF',
            border: '1px solid rgba(109, 74, 255, 0.3)',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4)',
            marginBottom: '1.5rem',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flex: '1 1 550px' }}>
              <div style={{ fontSize: '3rem', lineHeight: 1, backgroundColor: 'rgba(109, 74, 255, 0.15)', padding: '0.85rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.35)', flexShrink: 0 }}>
                {activeHubIndustry.icon}
              </div>
              <div>
                {/* TOP STAT PILLS */}
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                  <span style={{ backgroundColor: 'rgba(109, 74, 255, 0.2)', color: '#B89CFF', border: '1px solid rgba(109, 74, 255, 0.4)', padding: '0.2rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800 }}>
                    {activeHubIndustry.indiaMarket}
                  </span>
                  <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34D399', border: '1px solid rgba(16, 185, 129, 0.35)', padding: '0.2rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800 }}>
                    {activeHubIndustry.cagr}
                  </span>
                  <span style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: '#60A5FA', border: '1px solid rgba(59, 130, 246, 0.35)', padding: '0.2rem 0.75rem', borderRadius: '999px', fontSize: '0.78rem', fontWeight: 800 }}>
                    {activeHubIndustry.globalMarket}
                  </span>
                </div>

                <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', margin: 0, lineHeight: 1.15 }}>
                  Digital Marketing for {activeHubIndustry.name}
                </h1>

                <p style={{ fontSize: '1rem', color: '#CBD5E1', margin: '0.35rem 0 0.6rem 0' }}>
                  {activeHubIndustry.subtitle}
                </p>

                <div style={{ fontSize: '0.875rem', color: '#B89CFF', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span>◆</span>
                  <span>{activeHubIndustry.highlightMetric}</span>
                </div>
              </div>
            </div>

            {/* REQUEST STRATEGY BUTTON VIA WHATSAPP (ANIMATED & PULSING) */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta-animated"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#FFFFFF',
                backgroundColor: '#6D4AFF',
                padding: '0.9rem 2rem',
                borderRadius: '999px',
                fontWeight: 900,
                fontSize: '0.95rem',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                boxShadow: '0 4px 20px rgba(109, 74, 255, 0.45)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#5B21B6';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6D4AFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Request Strategy on WhatsApp 💬 ➔
            </a>
          </div>
        </div>

        {/* 2. SEO META INFO CARD */}
        <div
          style={{
            backgroundColor: '#1F1F24',
            borderRadius: '16px',
            padding: '1rem 1.5rem',
            border: '1px solid rgba(109, 74, 255, 0.25)',
            marginBottom: '1.5rem'
          }}
        >
          <div style={{ fontSize: '0.925rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.2rem' }}>
            {activeHubIndustry.category} Digital Marketing – Client & Revenue Growth for {activeHubIndustry.name} | The Growth Purpose
          </div>
          <div style={{ fontSize: '0.825rem', color: '#CBD5E1' }}>
            Digital marketing for {activeHubIndustry.name.toLowerCase()}: attract new clients, build local market trust online with tailored SEO, PPC & social media strategies by The Growth Purpose.
          </div>
        </div>

        {/* 3. NAVIGATION TABS BAR (ALL 8 DIGITAL DIGIX TABS) */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingBottom: '0.5rem', marginBottom: '1.75rem' }}>
          {['Overview', 'Market Stats', 'Challenges', 'Services', 'Benefits & ROI', 'Blog Library', 'FAQs', 'Success Metrics'].map((tab) => {
            const isActive = activeHubTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveHubTab(tab)}
                style={{
                  backgroundColor: isActive ? '#6D4AFF' : '#1F1F24',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  borderRadius: '999px',
                  padding: '0.55rem 1.35rem',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 800 : 600,
                  border: isActive ? '1px solid #B89CFF' : '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 4px 14px rgba(109, 74, 255, 0.4)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT PANELS */}
        {activeHubTab === 'Overview' && (
          <>
            <div
              style={{
                backgroundColor: '#1F1F24',
                borderRadius: '24px',
                padding: '2.25rem',
                border: '1px solid rgba(109, 74, 255, 0.25)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                marginBottom: '1.75rem'
              }}
            >
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1rem' }}>
                Industry Overview — {activeHubIndustry.name}
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.7, margin: 0 }}>
                {activeHubIndustry.overview}
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#1F1F24',
                borderRadius: '20px',
                padding: '1.75rem',
                border: '1px solid rgba(109, 74, 255, 0.25)',
                marginBottom: '1.75rem'
              }}
            >
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.3rem', fontWeight: 900, color: '#B89CFF', marginBottom: '1.25rem' }}>
                Did You Know? ({activeHubIndustry.name} Market Insights)
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                {activeHubIndustry.didYouKnow.map((fact, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      backgroundColor: '#16161D',
                      borderRadius: '14px',
                      padding: '1.25rem',
                      borderLeft: '4px solid #6D4AFF',
                      border: '1px solid rgba(109, 74, 255, 0.2)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      fontSize: '0.875rem',
                      color: '#CBD5E1',
                      lineHeight: 1.5,
                      fontWeight: 600
                    }}
                  >
                    {fact}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeHubTab === 'Market Stats' && (
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Market Size & Opportunity ({activeHubIndustry.name})
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
              {activeHubIndustry.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  style={{
                    backgroundColor: '#1F1F24',
                    borderRadius: '18px',
                    padding: '1.25rem 0.85rem',
                    textAlign: 'center',
                    border: '1px solid rgba(109, 74, 255, 0.25)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
                  }}
                >
                  <div style={{ fontFamily: 'Outfit, serif', fontSize: '1.6rem', fontWeight: 900, color: '#6D4AFF', marginBottom: '0.2rem' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.725rem', color: '#CBD5E1', fontWeight: 700, textTransform: 'uppercase' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeHubTab === 'Challenges' && (
          <div style={{ backgroundColor: '#1F1F24', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Core Growth Challenges in {activeHubIndustry.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {activeHubIndustry.challenges.map((c, cIdx) => (
                <div key={cIdx} style={{ background: 'rgba(239, 68, 68, 0.08)', padding: '1.25rem', borderRadius: '14px', borderLeft: '4px solid #EF4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#F87171', marginBottom: '0.4rem' }}>{c.title}</div>
                  <div style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6 CORE TAILORED SERVICE CARDS */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF', margin: '0 0 0.35rem 0' }}>
              6 Tailored Growth Engines for {activeHubIndustry.name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#CBD5E1', margin: 0 }}>
              Click any service card for an instant strategy breakdown & WhatsApp proposal for {activeHubIndustry.name}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            
            {/* CARD 1: SEO */}
            <div
              onClick={() => handleNav('service-details', 'seo')}
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#1F1F24',
                borderTop: '4px solid #6D4AFF',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#B89CFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🔍</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Search Engine Optimisation (SEO)
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Rank your {activeHubIndustry.name} business at the top of Google and capture high-intent local searches.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#B89CFF' }}>
                Explore SEO Services & Pricing ➔
              </div>
            </div>

            {/* CARD 2: GOOGLE ADS */}
            <div
              onClick={() => handleNav('service-details', 'google-ads')}
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#1F1F24',
                borderTop: '4px solid #6D4AFF',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#B89CFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🎯</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Google Ads (PPC)
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                High-intent Search, Display & YouTube campaigns engineered for ROI in the {activeHubIndustry.name} market.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#B89CFF' }}>
                Explore Google Ads Management ➔
              </div>
            </div>

            {/* CARD 3: META ADS */}
            <div
              onClick={() => handleNav('service-details', 'meta-ads')}
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#1F1F24',
                borderTop: '4px solid #6D4AFF',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#B89CFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📱</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Meta Ads (Facebook & Instagram)
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Targeted social campaigns that turn {activeHubIndustry.name} audiences into real leads.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#B89CFF' }}>
                Explore Meta Ads Management ➔
              </div>
            </div>

            {/* CARD 4: SOCIAL MEDIA MARKETING */}
            <div
              onClick={() => handleNav('service-details', 'social-media-marketing')}
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#1F1F24',
                borderTop: '4px solid #6D4AFF',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#B89CFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>📣</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Social Media Marketing
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Content, reels and community management that grow your {activeHubIndustry.name} brand.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#B89CFF' }}>
                Explore SMM Packages & Plans ➔
              </div>
            </div>

            {/* CARD 5: WEBSITE DESIGN & DEVELOPMENT */}
            <div
              onClick={() => handleNav('service-details', 'web-development')}
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#1F1F24',
                borderTop: '4px solid #6D4AFF',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#B89CFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>💻</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Website Design & Development
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Fast, SEO-ready, mobile-first websites built to convert {activeHubIndustry.name} visitors.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#B89CFF' }}>
                Explore Web Development Services ➔
              </div>
            </div>

            {/* CARD 6: GRAPHIC DESIGN & BRANDING */}
            <div
              onClick={() => handleNav('service-details', 'graphic-design')}
              className="industry-service-card-animated"
              style={{
                display: 'block',
                textDecoration: 'none',
                background: '#1F1F24',
                borderTop: '4px solid #6D4AFF',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '1.75rem 1.5rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#B89CFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>🎨</div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                Graphic Design & Branding
              </h4>
              <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Posters, logos, packaging and brand identity — bespoke visual systems.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#B89CFF' }}>
                Explore Graphic Design Catalog ➔
              </div>
            </div>

          </div>
        </div>

        {activeHubTab === 'Services' && (
          <div style={{ backgroundColor: '#1F1F24', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Tailored Digital Marketing Solutions for {activeHubIndustry.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {activeHubIndustry.services.map((s, sIdx) => {
                const sLower = s.name.toLowerCase();
                let targetSlug = 'seo';
                if (sLower.includes('seo') || sLower.includes('search')) targetSlug = 'seo';
                else if (sLower.includes('google')) targetSlug = 'google-ads';
                else if (sLower.includes('meta') || sLower.includes('facebook') || sLower.includes('ad campaign') || sLower.includes('paid')) targetSlug = 'meta-ads';
                else if (sLower.includes('social') || sLower.includes('smm')) targetSlug = 'social-media-marketing';
                else if (sLower.includes('web') || sLower.includes('site') || sLower.includes('app')) targetSlug = 'web-development';
                else if (sLower.includes('whatsapp') || sLower.includes('crm') || sLower.includes('email')) targetSlug = 'whatsapp-marketing';
                else if (sLower.includes('lead') || sLower.includes('b2b')) targetSlug = 'b2b-lead-generation';
                else if (sLower.includes('graphic') || sLower.includes('brand') || sLower.includes('design')) targetSlug = 'brand-identity-design';
                else if (sLower.includes('creator') || sLower.includes('reel') || sLower.includes('ugc')) targetSlug = 'ugc-reels-creator-marketing';

                return (
                  <div 
                    key={sIdx} 
                    onClick={() => handleNav('service-details', targetSlug)}
                    style={{ 
                      background: 'rgba(16, 185, 129, 0.08)', 
                      padding: '1.25rem', 
                      borderRadius: '14px', 
                      borderLeft: '4px solid #10B981',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 15px rgba(16, 185, 129, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#34D399' }}>{s.name}</div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#34D399', background: 'rgba(16, 185, 129, 0.2)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>View Service ➔</span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeHubTab === 'Benefits & ROI' && (
          <div style={{ backgroundColor: '#1F1F24', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Expected ROI & Revenue Impact for {activeHubIndustry.name}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div style={{ backgroundColor: '#1F1F24', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #6D4AFF', border: '1px solid rgba(109, 74, 255, 0.2)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#6D4AFF' }}>+340%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginTop: '0.3rem' }}>Inbound Inquiry Growth</div>
              </div>
              <div style={{ backgroundColor: '#1F1F24', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #10B981', border: '1px solid rgba(16, 185, 129, 0.2)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#10B981' }}>-45%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginTop: '0.3rem' }}>CAC Reduction</div>
              </div>
              <div style={{ backgroundColor: '#1F1F24', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #8B5CF6', border: '1px solid rgba(139, 92, 246, 0.2)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#8B5CF6' }}>3.4x</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginTop: '0.3rem' }}>Review Conversion Lift</div>
              </div>
              <div style={{ backgroundColor: '#1F1F24', padding: '1.5rem', borderRadius: '16px', borderTop: '3px solid #F59E0B', border: '1px solid rgba(245, 158, 11, 0.2)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#F59E0B' }}>98%</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginTop: '0.3rem' }}>Client Campaign Retention</div>
              </div>
            </div>
          </div>
        )}

        {activeHubTab === 'Blog Library' && (
          <div style={{ backgroundColor: '#1F1F24', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              {activeHubIndustry.name} Industry Growth Guides & Articles
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(109, 74, 255, 0.25)', backgroundColor: '#16161D' }}>
                <span style={{ fontSize: '0.725rem', color: '#B89CFF', fontWeight: 800, textTransform: 'uppercase' }}>CASE STUDY</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', margin: '0.4rem 0 0.5rem 0' }}>How Digital Marketing Transformed {activeHubIndustry.name} in 2026</h4>
                <p style={{ fontSize: '0.825rem', color: '#CBD5E1', lineHeight: 1.5 }}>Proven blueprint for scaling customer acquisition and brand authority online.</p>
              </div>
              <div style={{ padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(109, 74, 255, 0.25)', backgroundColor: '#16161D' }}>
                <span style={{ fontSize: '0.725rem', color: '#B89CFF', fontWeight: 800, textTransform: 'uppercase' }}>STRATEGY GUIDE</span>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', margin: '0.4rem 0 0.5rem 0' }}>SEO vs Meta Ads for {activeHubIndustry.name}: The ROI Breakdown</h4>
                <p style={{ fontSize: '0.825rem', color: '#CBD5E1', lineHeight: 1.5 }}>Comparing search intent channels vs social ads for optimal budget allocation.</p>
              </div>
            </div>
          </div>
        )}

        {activeHubTab === 'FAQs' && (
          <div style={{ backgroundColor: '#1F1F24', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Frequently Asked Questions ({activeHubIndustry.name})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeHubIndustry.faqs.map((faq, fIdx) => (
                <div key={fIdx} style={{ backgroundColor: '#16161D', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(109, 74, 255, 0.25)' }}>
                  <div style={{ fontSize: '0.975rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.4rem' }}>{faq.question}</div>
                  <div style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6 }}>{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeHubTab === 'Success Metrics' && (
          <div style={{ backgroundColor: '#1F1F24', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(109, 74, 255, 0.25)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem' }}>
              Verified Client Results & Track Record ({activeHubIndustry.name})
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
              <div style={{ backgroundColor: 'rgba(109, 74, 255, 0.1)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(109, 74, 255, 0.3)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#B89CFF' }}>₹12.4 Cr+</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginTop: '0.3rem' }}>Client Revenue Generated</div>
              </div>
              <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '1.5rem', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.3)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Outfit', fontSize: '2.2rem', fontWeight: 900, color: '#FBBF24' }}>4.9 ★★★★★</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginTop: '0.3rem' }}>Average Client Rating</div>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM FULL CTA BUTTON VIA WHATSAPP (ANIMATED & PULSING) */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-cta-animated"
          style={{
            display: 'block',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
            color: '#FFFFFF',
            backgroundColor: '#6D4AFF',
            padding: '1.25rem 2rem',
            borderRadius: '999px',
            fontSize: '1.05rem',
            fontWeight: 900,
            letterSpacing: '0.02em',
            boxShadow: '0 4px 22px rgba(109, 74, 255, 0.45)',
            marginBottom: '3rem',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5B21B6';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#6D4AFF';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Request Custom Digital Strategy Proposal for {activeHubIndustry.name} on WhatsApp 💬 ➔
        </a>

        {/* EXPLORE OTHER RELATED INDUSTRIES */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                EXPLORE MORE HUBS
              </div>
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '1.5rem', fontWeight: 900, color: '#FFFFFF', margin: '0.2rem 0 0 0' }}>
                Other {activeHubIndustry.category} &amp; Market Playbooks
              </h3>
            </div>
            <button
              onClick={() => handleNav('industries')}
              style={{
                backgroundColor: '#1F1F24',
                color: '#B89CFF',
                border: '1px solid rgba(109, 74, 255, 0.35)',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              View All 89 Industries →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {relatedIndustries.map((rel) => (
              <div
                key={rel.id}
                onClick={() => handleNav('industry-details', rel.id)}
                style={{
                  backgroundColor: '#1F1F24',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid rgba(109, 74, 255, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = '#B89CFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.25)';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{rel.icon}</div>
                <h4 style={{ fontFamily: 'Outfit, serif', fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>
                  {rel.name}
                </h4>
                <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: '0 0 1rem 0' }}>
                  {rel.subtitle}
                </p>
                <div style={{ color: '#6D4AFF', fontSize: '0.825rem', fontWeight: 800 }}>
                  Explore Playbook →
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
