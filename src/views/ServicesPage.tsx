'use client';

import React, { useState, useEffect } from 'react';
import { detailed17Services, graphicDesignPricingData, serviceApproachResults } from '../components/ServicesGrid';
import type { ComprehensiveServiceItem } from '../components/ServicesGrid';
import { WorkShowcaseMarquee } from '../components/WorkShowcaseMarquee';
import { SERVICE_ID_TO_SLUG } from '../utils/routes';
import { updatePageSeo } from '../utils/seoManager';

const smmPackagesData = [
  {
    name: 'Starter',
    price: '5,999',
    features: [
      '2 Social Platforms',
      '12 Posts/Month',
      '3 Reels Edited',
      '1 Festival Poster',
      'Monthly Report'
    ],
    badge: '',
    popular: false,
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Growth',
    price: '7,999',
    features: [
      '3 Social Platforms',
      '20 Posts/Month',
      '8 Reels Edited',
      '3 Festival Posters',
      'Meta Ads Setup',
      'Monthly Strategy Call'
    ],
    badge: 'MOST POPULAR',
    popular: true,
    whatsappText: 'Hi, I am interested in your services'
  },
  {
    name: 'Pro',
    price: '11,999',
    features: [
      '4 Social Platforms',
      '30 Posts/Month',
      '12 Reels Edited',
      '6 Festival Posters',
      'Full Meta Ads Management',
      'Google My Business',
      'Weekly Report'
    ],
    badge: 'BEST ROI',
    popular: false,
    whatsappText: 'Hi, I am interested in your services'
  }
];

const partnershipTiersData = [
  {
    tier: '3-4 Accounts',
    discount: '10% OFF',
    desc: 'Perfect for boutique agencies',
    tag: ''
  },
  {
    tier: '5-9 Accounts',
    discount: '15% OFF',
    desc: 'Mid-size agencies & resellers',
    tag: 'MOST POPULAR'
  },
  {
    tier: '10-49 Accounts',
    discount: '20% OFF',
    desc: 'Large agency portfolios',
    tag: 'BEST VALUE'
  },
  {
    tier: '50+ Accounts',
    discount: 'Custom',
    desc: 'Enterprise + dedicated manager',
    tag: 'ENTERPRISE'
  }
];

const smmFaqsData = [
  {
    q: 'What makes The Growth Purpose different from other agencies?',
    a: 'We focus on pure results with no long-term lock-in retainer traps, and we provide transparent pay-per-performance execution led directly by founders.'
  },
  {
    q: 'How long before I see SMM results?',
    a: 'While organic SEO takes months, our SMM campaigns deliver high-quality engagement, viral reels, and targeted lead generation within 24 to 72 hours of ad campaigns going live.'
  },
  {
    q: 'Is there a lock-in contract?',
    a: 'Absolutely not. All our social media marketing packages are billed month-to-month. You are free to scale up, scale down, or cancel at any time with no penalties.'
  },
  {
    q: 'Is post-pay available at The Growth Purpose?',
    a: 'Yes, we offer pay-after-results or pay-per-outcome performance setups for qualified brands after aligning on upfront lead definitions and targets.'
  },
  {
    q: 'Do you offer B2B or agency discounts?',
    a: 'Yes! Our B2B & Agency Tiers provide up to 20% off for partners managing multiple client accounts under white-label execution.'
  },
  {
    q: 'Which package should I choose?',
    a: 'The Starter package is great for brand consistency, the Growth package is perfect for active lead generation, and the Pro package is designed for maximum market dominance.'
  }
];

interface ServicesPageProps {
  onNavigate: (page: any, slug?: string) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<ComprehensiveServiceItem | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // First FAQ open by default
  const [viewingSmmDetails, setViewingSmmDetails] = useState(false);
  const [openInlineSmmFaqIndex, setOpenInlineSmmFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    updatePageSeo('services');
  }, []);

  const categories = ['All', ...Array.from(new Set(detailed17Services.map(s => s.category)))];

  const filteredServices = selectedCategory === 'All'
    ? detailed17Services
    : detailed17Services.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div style={{ padding: '3rem 0 6rem 0' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => {
            if (viewingSmmDetails) {
              setViewingSmmDetails(false);
            } else {
              onNavigate('home');
            }
          }}>Home</span> / {viewingSmmDetails ? (
            <>
              <span style={{ cursor: 'pointer', color: 'var(--text-muted)' }} onClick={() => setViewingSmmDetails(false)}>Services & Transparent Pricing</span> / <span className="active">Social Media Marketing</span>
            </>
          ) : (
            <span className="active">Services & Transparent Pricing</span>
          )}
        </div>

        {viewingSmmDetails ? (
          <div>
            <button
              onClick={() => setViewingSmmDetails(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FFFFFF',
                backgroundColor: '#16161D',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid rgba(109, 74, 255, 0.35)',
                marginBottom: '2rem',
                cursor: 'pointer'
              }}
            >
              ← Back to All Services
            </button>

            {/* FULL SMM DETAILS SECTION */}
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-tag" style={{ color: '#B89CFF', background: 'rgba(109, 74, 255, 0.15)', border: '1px solid rgba(109, 74, 255, 0.3)' }}>SMM HUB & CREATOR NETWORK</div>
              <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, marginBottom: '1rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                Social Media Marketing & Viral Reach Engine
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: 1.7, maxWidth: '750px', margin: '0 auto' }}>
                Scale your brand's organic and paid presence across Instagram, Facebook, LinkedIn, YouTube, and UGC creator networks to convert followers into paying customers.
              </p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — TRANSPARENT VALUE —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Packages & Pay-As-You-Go
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1' }}>
                Flexible plans, no retainer traps. Only pay for outcomes that matter.
              </p>
            </div>

            {/* smm packages grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1140px', margin: '0 auto 3rem auto', alignItems: 'stretch' }} className="graphics-pricing-grid">
              {smmPackagesData.map((pkg, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: pkg.popular ? '#1E1B2E' : '#1F1F24',
                    color: '#FFFFFF',
                    border: pkg.popular ? '2px solid #6D4AFF' : '1px solid rgba(109, 74, 255, 0.25)',
                    borderRadius: '28px',
                    padding: '2.25rem 2rem 2rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: pkg.popular ? '0 15px 35px rgba(109, 74, 255, 0.25)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
                    position: 'relative'
                  }}
                >
                  {pkg.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-14px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#6D4AFF',
                        color: '#FFFFFF',
                        border: '1px solid #B89CFF',
                        padding: '0.4rem 1.25rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        letterSpacing: '0.08em',
                        boxShadow: '0 4px 12px rgba(109, 74, 255, 0.4)'
                      }}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? '#B89CFF' : '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                      {pkg.name}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '0.4rem' }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Outfit, serif', color: '#FFFFFF' }}>
                        ₹{pkg.price}
                      </span>
                      <span style={{ fontSize: '0.9rem', color: '#94A3B8', marginLeft: '0.25rem', fontWeight: 600 }}>
                        /mo
                      </span>
                    </div>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', listStyle: 'none', padding: 0, margin: '0 0 1.75rem 0', flex: 1, fontSize: '0.95rem' }}>
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ color: '#6D4AFF', fontWeight: 900 }}>✓</span>
                        <span style={{ color: '#CBD5E1', fontWeight: 500 }}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '999px',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      backgroundColor: pkg.popular ? '#6D4AFF' : '#16161D',
                      color: '#FFFFFF',
                      border: pkg.popular ? 'none' : '1px solid rgba(109, 74, 255, 0.35)',
                      boxShadow: pkg.popular ? '0 4px 15px rgba(109, 74, 255, 0.4)' : 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Get Started →
                  </a>
                </div>
              ))}
            </div>

            {/* SMM Pay-as-you-go box */}
            <div
              style={{
                maxWidth: '1140px',
                margin: '0 auto 5rem auto',
                background: 'linear-gradient(135deg, #1F1F28 0%, #151322 100%)',
                border: '1px dashed rgba(109, 74, 255, 0.35)',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.725rem', fontWeight: 900, color: '#B89CFF', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PAY-AS-YOU-GO —
              </div>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for qualified leads that meet criteria agreed upfront — budget, location and intent. <a href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services" target="_blank" rel="noopener noreferrer" style={{ color: '#B89CFF', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a tailored execution plan around your numbers.
              </p>
            </div>

            {/* B2B Reseller Tiers */}
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                — PARTNERSHIPS —
              </div>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                B2B & Agency Tiers
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1' }}>
                White-label execution and volume pricing for agencies, resellers and enterprise teams.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '5rem' }} className="graphics-pricing-grid">
              {partnershipTiersData.map((tier, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#1F1F24',
                    border: '1px solid rgba(109, 74, 255, 0.25)',
                    borderRadius: '24px',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  {tier.tag && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#6D4AFF',
                        color: '#FFFFFF',
                        border: '1px solid #B89CFF',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        fontSize: '0.6rem',
                        fontWeight: 900,
                        letterSpacing: '0.05em',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {tier.tag}
                    </span>
                  )}
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>{tier.tier}</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#6D4AFF', fontFamily: 'Outfit, serif', margin: '0.5rem 0' }}>{tier.discount}</div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', fontWeight: 600 }}>{tier.desc}</div>
                </div>
              ))}
            </div>

            {/* FAQ Accordion */}
            <div style={{ maxWidth: '850px', margin: '0 auto 6rem auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  — FREQUENTLY ASKED —
                </div>
                <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF' }}>
                  Common Questions
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {smmFaqsData.map((faq, idx) => {
                  const isOpen = openInlineSmmFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#1F1F24',
                        borderRadius: '16px',
                        border: '1px solid rgba(109, 74, 255, 0.25)',
                        overflow: 'hidden',
                        boxShadow: isOpen ? '0 10px 25px rgba(0, 0, 0, 0.2)' : 'none',
                        transition: 'box-shadow 0.3s ease'
                      }}
                    >
                      <div
                        style={{
                          cursor: 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '1.25rem 1.75rem',
                          fontWeight: 700,
                          color: '#FFFFFF'
                        }}
                        onClick={() => setOpenInlineSmmFaqIndex(isOpen ? null : idx)}
                      >
                        <span>{faq.q}</span>
                        <span style={{ fontSize: '1.25rem', fontWeight: 400, color: '#CBD5E1', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                          ＋
                        </span>
                      </div>
                      {isOpen && (
                        <div style={{ padding: '1rem 1.75rem 1.5rem 1.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', backgroundColor: '#1F1F24' }}>
                          <p style={{ margin: 0, fontSize: '0.925rem', color: '#CBD5E1', lineHeight: 1.6 }}>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SMM CTA BANNER */}
            <div style={{ background: 'linear-gradient(135deg, #1F1F28 0%, #151322 100%)', borderRadius: '28px', padding: '3.5rem 3rem', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(109, 74, 255, 0.3)', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <div style={{ maxWidth: '640px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(109, 74, 255, 0.2)', border: '1px solid rgba(109, 74, 255, 0.35)', color: '#B89CFF', borderRadius: '999px', padding: '0.35rem 0.9rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  VIRAL GROWTH ENGINE
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                  Ready to Dominate Social Media?
                </h2>
                <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                  Get a custom content calendar and UGC creator growth strategy tailored for your brand within 2 hours.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '1rem 2.5rem', fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#6D4AFF', color: '#FFFFFF', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 25px rgba(109, 74, 255, 0.45)' }}
                >
                  <span>Contact on WhatsApp 💬</span>
                  <span>➔</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* HEADER & SUBTITLE MATCHING SCREENSHOT */}
            <div className="section-header" style={{ textAlign: 'left', maxWidth: '850px', margin: '0 0 2.5rem 0' }}>
              <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.4rem', fontWeight: 900, marginBottom: '1rem', color: '#FFFFFF' }}>
                Services & Growth Solutions
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                No lock-in contracts. No hidden fees. Click any service for the full breakdown: pain points, deliverables, approach and FAQs.
              </p>
            </div>

            {/* CATEGORY PILLS */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: selectedCategory === cat ? '#FFFFFF' : '#CBD5E1',
                    backgroundColor: selectedCategory === cat ? '#6D4AFF' : '#1F1F24',
                    border: selectedCategory === cat ? '1px solid #B89CFF' : '1px solid rgba(109, 74, 255, 0.25)',
                    boxShadow: selectedCategory === cat ? '0 4px 15px rgba(109, 74, 255, 0.35)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 17 SERVICE CARDS GRID */}
            <div className="responsive-4-grid" style={{ gap: '1rem', marginBottom: '4.5rem' }}>
              {filteredServices.map((service) => {
                const slug = service.slug || SERVICE_ID_TO_SLUG[service.id || ''] || service.id;
                return (
                  <a
                    key={service.id}
                    href={`/services/${slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('service-details', slug);
                    }}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      background: '#1F1F24',
                      borderTop: '4px solid #6D4AFF',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: '1.25rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(109, 74, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    <div style={{ fontSize: '1.75rem', marginBottom: '0.6rem' }}>{service.icon}</div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '0.4rem', color: '#FFFFFF', fontFamily: 'Outfit, serif', lineHeight: 1.25 }}>{service.title}</h3>
                    <p style={{ fontSize: '0.78rem', color: '#CBD5E1', marginBottom: '1rem', lineHeight: 1.45, flexGrow: 1 }}>
                      {service.description}
                    </p>

                    {/* PRICE TAG & FULL DETAILS LINK */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', marginTop: 'auto' }}>
                      {service.pricing ? (
                        <div style={{ fontFamily: 'Outfit', fontSize: '0.95rem', fontWeight: 800, color: '#B89CFF' }}>
                          {service.pricing}
                        </div>
                      ) : null}
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6D4AFF', letterSpacing: '0.05em' }}>
                        FULL DETAILS →
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </>
        )}

        {!viewingSmmDetails && (
          /* BOTTOM CONSULTATION BANNER */
          <div style={{ background: 'linear-gradient(135deg, #1F1F28 0%, #151322 100%)', borderRadius: '28px', padding: '3.5rem 3rem', color: '#FFFFFF', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(109, 74, 255, 0.3)', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '640px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(109, 74, 255, 0.2)', border: '1px solid rgba(109, 74, 255, 0.35)', color: '#B89CFF', borderRadius: '999px', padding: '0.35rem 0.9rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                TRANSPARENT GROWTH ENGINE
              </div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Need a Custom Multi-Channel Growth Package?
              </h3>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                Book a zero-risk strategy call with Founder Vedika. We provide custom proposals tailored to your budget with zero lock-in contracts.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.8rem', backgroundColor: '#6D4AFF', color: '#FFFFFF', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 25px rgba(109, 74, 255, 0.45)' }}
              >
                Chat on WhatsApp 💬
              </a>
              <button
                className="btn btn-secondary"
                style={{ color: '#FFFFFF', backgroundColor: '#16161D', border: '1px solid rgba(109, 74, 255, 0.35)', borderRadius: '999px', padding: '0.9rem 1.8rem', fontWeight: 800, cursor: 'pointer' }}
                onClick={() => window.open('https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services', '_blank')}
              >
                Get Custom Quote ➔
              </button>
            </div>
          </div>
        )}

      </div>

      {/* SERVICE DEEP DIVE FULL PAGE VIEW */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          {/* STICKY TOP PAGE BAR */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              backgroundColor: '#16161D',
              borderBottom: '1px solid rgba(109, 74, 255, 0.25)',
              padding: '1rem 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
          >
            <button
              onClick={() => setSelectedService(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#FFFFFF',
                backgroundColor: '#1F1F24',
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: '1px solid rgba(109, 74, 255, 0.35)',
                cursor: 'pointer'
              }}
            >
              ← Back to All Services
            </button>
            <button
              onClick={() => setSelectedService(null)}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#1F1F24',
                border: '1px solid rgba(109, 74, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>

          <div className="modal-card" style={{ maxWidth: '1380px', padding: '3.5rem 2.5rem 6rem 2.5rem', backgroundColor: '#1F1F24', color: '#FFFFFF' }} onClick={(e) => e.stopPropagation()}>

            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{selectedService.icon}</div>
              <span className="section-tag" style={{ backgroundColor: 'rgba(109, 74, 255, 0.15)', color: '#B89CFF', border: '1px solid rgba(109, 74, 255, 0.3)' }}>{selectedService.category}</span>
              <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', margin: '0.4rem 0 0.5rem 0', fontWeight: 900, color: '#FFFFFF' }}>{selectedService.title}</h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
                {selectedService.longDescription || selectedService.description}
              </p>
              {selectedService.title === 'Social Media Marketing' && selectedService.pricing ? (
                <div style={{ fontFamily: 'Outfit', fontSize: '1.8rem', fontWeight: 900, color: '#6D4AFF', marginTop: '0.75rem' }}>
                  {selectedService.pricing}
                </div>
              ) : null}
            </div>

            {selectedService.title === 'Social Media Marketing' ? (
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#B89CFF', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.15em', textTransform: 'uppercase' }}>PACKAGES & PRICING</span>
                  <span style={{ width: '50px', height: '1px', background: '#B89CFF', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', textAlign: 'center', marginBottom: '2.5rem' }}>
                  Social Media Marketing Packages
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="graphics-pricing-grid">
                  {smmPackagesData.map((pkg, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: pkg.popular ? '#1E1B2E' : '#16161D',
                        color: '#FFFFFF',
                        border: pkg.popular ? '2px solid #6D4AFF' : '1px solid rgba(109, 74, 255, 0.25)',
                        borderRadius: '24px',
                        padding: '2rem 1.5rem 1.75rem 1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: pkg.popular ? '0 15px 35px rgba(109, 74, 255, 0.25)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
                        position: 'relative'
                      }}
                    >
                      {pkg.badge && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#6D4AFF',
                            color: '#FFFFFF',
                            border: '1px solid #B89CFF',
                            padding: '0.3rem 1rem',
                            borderRadius: '999px',
                            fontSize: '0.65rem',
                            fontWeight: 900,
                            letterSpacing: '0.08em',
                            boxShadow: '0 4px 12px rgba(109, 74, 255, 0.4)',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {pkg.badge}
                        </span>
                      )}

                      <div style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: pkg.popular ? '#B89CFF' : '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                          {pkg.name}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginTop: '0.4rem' }}>
                          <span style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: 'Outfit, serif', color: '#FFFFFF' }}>
                            ₹{pkg.price}
                          </span>
                          <span style={{ fontSize: '0.85rem', color: '#94A3B8', marginLeft: '0.25rem', fontWeight: 600 }}>
                            /mo
                          </span>
                        </div>
                      </div>

                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', flex: 1, fontSize: '0.875rem' }}>
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: '#6D4AFF', fontWeight: 900 }}>✓</span>
                            <span style={{ color: '#CBD5E1', fontWeight: 500 }}>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '0.85rem',
                          borderRadius: '999px',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          backgroundColor: pkg.popular ? '#6D4AFF' : '#1F1F24',
                          color: '#FFFFFF',
                          border: pkg.popular ? 'none' : '1px solid rgba(109, 74, 255, 0.35)',
                          boxShadow: pkg.popular ? '0 4px 15px rgba(109, 74, 255, 0.4)' : 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Get Started →
                      </a>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    margin: '0 auto 4rem auto',
                    background: 'linear-gradient(135deg, #1F1F28 0%, #151322 100%)',
                    border: '1px dashed rgba(109, 74, 255, 0.35)',
                    borderRadius: '24px',
                    padding: '2rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontSize: '0.725rem', fontWeight: 900, color: '#B89CFF', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    — PAY-AS-YOU-GO —
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                    Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads that meet criteria agreed upfront — budget, location and intent. Single deliverables start tiny: posters from ₹200, reels from ₹380, dashboards from ₹2,000. <a href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services" target="_blank" rel="noopener noreferrer" style={{ color: '#B89CFF', fontWeight: 800, textDecoration: 'underline' }}>Request a quote</a> and we'll build a plan around your numbers.
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B89CFF', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    — PARTNERSHIPS —
                  </div>
                  <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.75rem' }}>
                    B2B & Agency Tiers
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#CBD5E1' }}>
                    White-label execution and volume pricing for agencies, resellers and enterprise teams.
                  </p>
                </div>

                <div style={{ margin: '0 auto 4rem auto' }} className="responsive-4-grid graphics-pricing-grid">
                  {partnershipTiersData.map((tier, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: '#16161D',
                        border: '1px solid rgba(109, 74, 255, 0.25)',
                        borderRadius: '24px',
                        padding: '1.75rem 1.25rem',
                        textAlign: 'center',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                    >
                      {tier.tag && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#6D4AFF',
                            color: '#FFFFFF',
                            border: '1px solid #B89CFF',
                            padding: '0.2rem 0.65rem',
                            borderRadius: '999px',
                            fontSize: '0.575rem',
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tier.tag}
                        </span>
                      )}
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.25rem' }}>{tier.tier}</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#6D4AFF', fontFamily: 'Outfit, serif', margin: '0.5rem 0' }}>{tier.discount}</div>
                      <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 600 }}>{tier.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : selectedService.title === 'Graphic Design' ? (
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#6D4AFF', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6D4AFF', letterSpacing: '0.15em', textTransform: 'uppercase' }}>CREATIVE FORMATS</span>
                  <span style={{ width: '50px', height: '1px', background: '#6D4AFF', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', textAlign: 'center', marginBottom: '0.5rem' }}>
                  Graphic Design Formats & Deliverables
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#CBD5E1', textAlign: 'center', marginBottom: '2.5rem', maxWidth: '650px', margin: '0 auto 2.5rem auto', lineHeight: 1.5 }}>
                  Explore our comprehensive range of custom design formats, from high-converting social media creatives to corporate pitch decks and retail packaging.
                </p>

                {/* Grid container */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }} className="graphics-pricing-grid">
                  {graphicDesignPricingData.map((cat, catIdx) => (
                    <div
                      key={catIdx}
                      style={{
                        background: '#1F1F24',
                        borderTop: '4px solid #6D4AFF',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '1.5rem 1.25rem 1.75rem 1.25rem',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(109, 74, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                      }}
                      onClick={() => {
                        const baseTitle = cat.title.split('—')[0].trim();
                        const slug = baseTitle.toLowerCase().replace(' & ', '-').replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                        onNavigate('graphic-details', slug);
                      }}
                    >
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 0.25rem 0', fontFamily: 'Outfit, sans-serif' }}>
                        {cat.title}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#CBD5E1', margin: '0 0 1.25rem 0', lineHeight: 1.4 }}>
                        {cat.subtitle}
                      </p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {cat.items.map((item, itemIdx) => {
                          const slug = item.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
                          return (
                            <div
                              key={itemIdx}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '0.81rem',
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
                              <span style={{ fontWeight: 500, flex: 1, paddingRight: '0.5rem', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
                              {item.price ? <span style={{ fontWeight: 700, color: '#6D4AFF', whiteSpace: 'nowrap', flexShrink: 0, textAlign: 'right' }}>{item.price}</span> : null}
                            </div>
                          );
                        })}
                      </div>
                      
                      <div style={{ marginTop: 'auto', paddingTop: '1.25rem', fontSize: '0.8rem', fontWeight: 800, color: '#6D4AFF', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <span>View Explanation & Details</span>
                        <span style={{ fontSize: '0.9rem' }}>➔</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Our Approach / Typical Results blocks side-by-side */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="graphics-info-blocks">
                  <div style={{ background: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.25)', borderRadius: '20px', padding: '1.5rem 1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6D4AFF', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Our Approach
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                      Share your brief on WhatsApp, choose the design type, and we deliver print- and web-ready files with rapid turnaround and dedicated design support.
                    </p>
                  </div>
                  <div style={{ background: '#16161D', border: '1px solid rgba(109, 74, 255, 0.25)', borderRadius: '20px', padding: '1.5rem 1.75rem', color: '#FFF' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                      —— Typical Results
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                      Brands get consistent, conversion-focused creatives delivered fast — often within 24–48 hours for standard formats.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ width: '50px', height: '1px', background: '#6D4AFF', opacity: 0.6 }}></span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6D4AFF', letterSpacing: '0.15em', textTransform: 'uppercase' }}>DELIVERABLES</span>
                  <span style={{ width: '50px', height: '1px', background: '#6D4AFF', opacity: 0.6 }}></span>
                </div>
                <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', textAlign: 'center', marginBottom: '1.5rem' }}>
                  What We Do
                </h3>

                {/* Grid of badges/pills layout */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
                  {selectedService.whatWeDo.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(109, 74, 255, 0.15)',
                        border: '1px solid rgba(109, 74, 255, 0.3)',
                        padding: '0.75rem 1.25rem',
                        borderRadius: '14px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <span style={{ color: '#B89CFF', fontWeight: 900 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Our Approach / Typical Results blocks side-by-side */}
                {serviceApproachResults[selectedService.title] && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3.5rem' }} className="graphics-info-blocks">
                    <div style={{ background: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.25)', borderRadius: '20px', padding: '1.5rem 1.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6D4AFF', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        —— Our Approach
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#CBD5E1', lineHeight: 1.6, margin: 0 }}>
                        {serviceApproachResults[selectedService.title].approach}
                      </p>
                    </div>
                    <div style={{ background: '#16161D', border: '1px solid rgba(109, 74, 255, 0.25)', borderRadius: '20px', padding: '1.5rem 1.75rem', color: '#FFF' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#FBBF24', letterSpacing: '0.08em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                        —— Typical Results
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6, margin: 0 }}>
                        {serviceApproachResults[selectedService.title].typicalResults}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* FAQS INTERACTIVE ACCORDION SECTION */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ width: '50px', height: '1px', background: '#6D4AFF', opacity: 0.6 }}></span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6D4AFF', letterSpacing: '0.15em', textTransform: 'uppercase' }}>QUESTIONS</span>
                <span style={{ width: '50px', height: '1px', background: '#6D4AFF', opacity: 0.6 }}></span>
              </div>
              <h3 style={{ fontFamily: 'Outfit, serif', fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', textAlign: 'center', marginBottom: '1.5rem' }}>
                {selectedService.title} FAQs
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {(selectedService.title === 'Social Media Marketing' ? smmFaqsData : selectedService.faqs).map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      style={{
                        background: '#1F1F24',
                        border: '1px solid rgba(109, 74, 255, 0.25)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                        style={{
                          width: '100%',
                          padding: '1.15rem 1.25rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <span style={{ fontSize: '1.025rem', fontWeight: 800, color: '#FFFFFF' }}>
                          Q: {faq.q}
                        </span>
                        <span
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            backgroundColor: isOpen ? '#6D4AFF' : '#16161D',
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1rem',
                            fontWeight: 800,
                            transition: 'all 0.25s ease',
                            marginLeft: '1rem',
                            flexShrink: 0
                          }}
                        >
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          style={{
                            padding: '0 1.25rem 1.25rem 1.25rem',
                            color: '#CBD5E1',
                            fontSize: '0.925rem',
                            lineHeight: 1.6,
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            marginTop: '-0.25rem',
                            paddingTop: '0.85rem'
                          }}
                        >
                          <strong style={{ color: '#B89CFF', display: 'block', marginBottom: '0.25rem' }}>Answer:</strong>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%', padding: '1rem', backgroundColor: '#6D4AFF', color: '#FFFFFF', borderRadius: '999px', fontWeight: 800, fontSize: '1rem', boxShadow: '0 8px 25px rgba(109, 74, 255, 0.45)', cursor: 'pointer' }}
              onClick={() => {
                const title = selectedService.title;
                setSelectedService(null);
                window.open("https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services", '_blank');
              }}
            >
              Get Started with {selectedService.title} ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
};




