'use client';

import React, { useEffect } from 'react';
import type { PageView } from '../types';
import { graphicDesignPricingData } from '../components/ServicesGrid';
import { updatePageSeo } from '../utils/seoManager';

interface GraphicDetailPageProps {
  categoryId: string; // The URL slug to auto-scroll to, e.g. "standard-creatives"
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

const explanationData: Record<string, { desc: string; turnaround: string; formats: string; useCase: string }> = {
  'standard-creatives': {
    desc: 'Bespoke single-page visual content optimized for digital feed layouts and standard local prints. Features clean typography, premium assets, and high impact design.',
    turnaround: '24–48 Hours',
    formats: 'JPG, PNG, PDF, RAW Source Files',
    useCase: 'Best for daily social media posts, festival greetings, simple flyers, digital ads, and announcement posters.'
  },
  'structured-designs': {
    desc: 'Complex single-page layouts requiring precise alignment, grid system planning, custom margins, and clean data tables.',
    turnaround: '48 Hours',
    formats: 'AI, EPS, PDF, Print-Ready Bleed Layouts',
    useCase: 'Best for business stationery, visiting cards, ID cards, official print certificates, quotations, and banners.'
  },
  'multi-page-documents': {
    desc: 'Multi-slide presentations, catalogs, annual reports, and brochures designed with layout styling and visual consistency.',
    turnaround: '3–5 Business Days',
    formats: 'PPTX, Keynote, PDF, vector source files',
    useCase: 'Best for pitch decks, sales catalogs, school magazines, training decks, and business proposals.'
  },
  'large-format-corporate-branding': {
    desc: 'High-resolution outdoor vector designs and corporate branding guidelines designed to scale without quality loss.',
    turnaround: '3–5 Business Days',
    formats: 'AI, EPS, SVG, High-Res Print PDFs',
    useCase: 'Best for billboards, shop branding, standees, company profiles, vehicle wraps, and logo design.'
  },
  'packaging-product-design': {
    desc: 'Commercial packaging templates, custom labels, product tag layouts, and realistic 3D mockup renders.',
    turnaround: '3–4 Business Days',
    formats: 'AI, Die-cut PDFs, 3D Mockup Renders',
    useCase: 'Best for D2C product packaging, retail box designs, jar/bottle labels, and shopping bags.'
  },
  'restaurant-hospitality': {
    desc: 'Appetizing themed menu layouts, digital TV menu boards, room service directories, and promotional tent cards.',
    turnaround: '2–3 Business Days',
    formats: 'AI, Print PDFs, Digital PDF Brochures',
    useCase: 'Best for restaurants, cafes, fine dining, bistros, hotels, and resorts.'
  },
  'custom-creative-services': {
    desc: 'Custom vector tracing, detailed infographic layouts, photographic retouching, merchandise styling, and AI-augmented enhancement.',
    turnaround: '2–4 Business Days',
    formats: 'PSD, AI, PNG, Custom formats',
    useCase: 'Best for complex custom illustrations, custom clothing/T-shirts, hero graphic assets, and photo manipulation.'
  }
};

export const GraphicDetailPage: React.FC<GraphicDetailPageProps> = ({ categoryId, onNavigate, onOpenStrategyModal: _onOpenStrategyModal }) => {
  
  useEffect(() => {
    updatePageSeo('graphic-details');
    // Scroll to the active target element after page load
    if (categoryId) {
      setTimeout(() => {
        const element = document.getElementById(categoryId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 300);
    } else {
      window.scrollTo(0, 0);
    }
  }, [categoryId]);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundColor: '#1F1F24', minHeight: '100vh', padding: '2.5rem 0 7rem 0' }}>
      <div className="container" style={{ maxWidth: '1380px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
          <a href="/" style={{ color: '#6D4AFF', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a> /{' '}
          <a href="/services" style={{ color: '#6D4AFF', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Services</a> /{' '}
          <span style={{ color: '#FFFFFF', fontWeight: 700 }}>Graphic Design Catalog</span>
        </div>

        {/* Back / Close button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={() => {
              // If this tab was opened via window.open(), close it to return to original tab
              if (window.opener && !window.opener.closed) {
                window.close();
              } else {
                onNavigate('services');
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#FFFFFF',
              backgroundColor: '#1F1F24',
              border: '1px solid rgba(109, 74, 255, 0.25)',
              padding: '0.6rem 1.25rem',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#26262B';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1F1F24';
            }}
          >
            ← Close & Go Back
          </button>
        </div>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag" style={{ background: '#FFF1EE', color: '#6D4AFF', border: 'none', marginBottom: '0.75rem' }}>
            CREATIVE CATALOG
          </span>
          <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.1 }}>
            Graphic Design Catalog & Deliverables
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#CBD5E1', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse specifications, deliverable formats, turnaround times, and file outputs across each of our professional design domains.
          </p>
        </div>

        {/* Sticky/Quick Navigation Pills */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '0.75rem', 
          justifyContent: 'center', 
          marginBottom: '4.5rem',
          position: 'sticky',
          top: '80px',
          zIndex: 10,
          backgroundColor: 'rgba(31, 31, 36, 0.95)',
          padding: '0.75rem 0',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {graphicDesignPricingData.map((cat, idx) => {
            const baseTitle = cat.title.split('—')[0].trim();
            const slug = baseTitle.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
            const isActive = categoryId === slug;
            return (
              <button
                key={idx}
                onClick={() => handleScrollToSection(slug)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid #6D4AFF' : '1px solid rgba(255, 255, 255, 0.1)',
                  backgroundColor: isActive ? '#6D4AFF' : '#1F1F24',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* All Domains List - One-by-One Stacking */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', marginBottom: '5.5rem' }}>
          {graphicDesignPricingData.map((cat, idx) => {
            const baseTitle = cat.title.split('—')[0].trim();
            const slug = baseTitle.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
            const explanation = explanationData[slug] || {
              desc: cat.subtitle,
              turnaround: '48 Hours',
              formats: 'AI, EPS, PDF, JPG, PNG',
              useCase: 'Custom digital and print creatives.'
            };

            return (
              <div 
                key={idx} 
                id={slug}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr',
                  gap: '3rem',
                  background: '#1F1F24',
                  borderTop: '4px solid #6D4AFF',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '24px',
                  padding: '3rem',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.03)',
                  scrollMarginTop: '160px' // accounts for the sticky nav bar
                }}
                className="graphics-info-blocks"
              >
                
                {/* Domain Explanation Details */}
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                    <span style={{ width: '25px', height: '2px', backgroundColor: '#6D4AFF' }}></span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6D4AFF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Domain {idx + 1} of {graphicDesignPricingData.length}</span>
                  </div>
                  <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.15 }}>
                    {cat.title}
                  </h2>
                  <p style={{ fontSize: '0.95rem', color: '#6D4AFF', fontWeight: 700, marginBottom: '1.5rem' }}>
                    {cat.subtitle}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem', flex: 1 }}>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#CBD5E1', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Overview & Standards</div>
                      <div style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6 }}>{explanation.desc}</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1rem' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#CBD5E1', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Typical Turnaround</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>{explanation.turnaround}</div>
                      </div>
                      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1rem' }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#CBD5E1', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>Export Formats</div>
                        <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>{explanation.formats}</div>
                      </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#CBD5E1', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>Best For / Use Case</div>
                      <div style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.6 }}>{explanation.useCase}</div>
                    </div>
                  </div>
                </div>

                {/* Items List inside Domain */}
                <div style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  borderRadius: '20px', 
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Deliverable Formats ({cat.items.length})</span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '420px', overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '1.5rem' }}>
                      {cat.items.map((item, itemIdx) => {
                        const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                        return (
                          <div
                            key={itemIdx}
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '0.84rem',
                              color: '#CBD5E1',
                              padding: '0.4rem 0.5rem',
                              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#26262B';
                              e.currentTarget.style.textDecoration = 'underline';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.textDecoration = 'none';
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate('design-item', slug);
                            }}
                          >
                            <span style={{ fontWeight: 600, flex: 1, paddingRight: '0.5rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a
                      href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1.2,
                        textAlign: 'center',
                        backgroundColor: '#6D4AFF',
                        color: '#FFFFFF',
                        padding: '0.75rem',
                        borderRadius: '999px',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px rgba(109, 74, 255, 0.4)',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      WhatsApp Order 💬
                    </a>
                    <button
                      onClick={() => window.open("https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services", '_blank')}
                      style={{
                        flex: 1,
                        backgroundColor: '#16161D',
                        color: '#FFFFFF',
                        border: '1px solid rgba(109, 74, 255, 0.35)',
                        padding: '0.75rem',
                        borderRadius: '999px',
                        fontWeight: 800,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#6D4AFF';
                        e.currentTarget.style.borderColor = '#B89CFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#16161D';
                        e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.35)';
                      }}
                    >
                      Custom Quote →
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global CTA Consultation Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1F1F28 0%, #151322 100%)', 
          borderRadius: '28px', 
          padding: '3.5rem 3rem', 
          color: '#FFFFFF', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '2rem', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)', 
          border: '1px solid rgba(109, 74, 255, 0.3)', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(109, 74, 255, 0.2)', border: '1px solid rgba(109, 74, 255, 0.35)', color: '#B89CFF', borderRadius: '999px', padding: '0.35rem 0.9rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              TRANSPARENT CREATIVE ENGINE
            </div>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Need a Custom Design Proposal?
            </h3>
            <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6 }}>
              Enjoy transparent per-design pricing or book a monthly design retainer package with zero lock-in contracts. Custom proposals ready within 24h.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.95rem 2.2rem', backgroundColor: '#6D4AFF', color: '#FFFFFF', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 25px rgba(109, 74, 255, 0.45)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>Contact on WhatsApp 💬</span>
              <span>➔</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};




