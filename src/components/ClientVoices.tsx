'use client';

import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  category: string;
  rating: number;
}

const row1: Testimonial[] = [
  {
    name: 'Dr. Rajesh Varma',
    role: 'Chief Medical Officer',
    company: 'Apex Specialty Healthcare',
    quote: "The Growth Purpose completely revolutionized our patient acquisition model. Our specialized consultation pipeline is consistently booked weeks in advance with zero ad spend wastage.",
    category: 'Healthcare',
    rating: 5
  },
  {
    name: 'Rohan Singhania',
    role: 'Founder & MD',
    company: 'Crave Artisanal Kitchens',
    quote: "Our direct digital orders surged by 140% within 60 days of launching their creative ad funnels. Their cost-per-acquisition is significantly lower than industry benchmarks.",
    category: 'Food & Dining',
    rating: 5
  },
  {
    name: 'Kavita Sen',
    role: 'Principal Architect',
    company: 'Studio Aura Spatial Design',
    quote: "The short-form video showcase and portfolio strategy they engineered elevated our brand to elite luxury status. High-ticket residential inquiries started flowing in almost immediately.",
    category: 'Interior & Architecture',
    rating: 5
  },
  {
    name: 'Suresh Nair',
    role: 'Managing Director',
    company: 'Horizon Prime Infrastructure',
    quote: "Lead quality and intent is what set them apart. Their geotargeted property campaigns deliver qualified site visits rather than empty clicks. ROI has been exceptional.",
    category: 'Real Estate',
    rating: 5
  },
  {
    name: 'Arjun Mathur',
    role: 'Co-Founder',
    company: 'Pulse Athletic Performance',
    quote: "Our recurring membership sign-ups tripled after deploying their conversion funnels and localized ad creatives. The strategy team is obsessively focused on business outcomes.",
    category: 'Fitness & Lifestyle',
    rating: 5
  },
  {
    name: 'Imran Malik',
    role: 'Founder',
    company: 'Precision Auto Care',
    quote: "Their automated WhatsApp customer engagement funnel keeps our service calendar full all week long. Highly efficient, transparent, and seamless.",
    category: 'Automotive',
    rating: 5
  },
  {
    name: 'Aditi Deshmukh',
    role: 'Director of Growth',
    company: 'Lumina EdTech & Academy',
    quote: "From high-converting landing pages to multi-channel ad scaling, execution was flawless. Their milestone transparency gave us absolute confidence in their work.",
    category: 'Education & EdTech',
    rating: 5
  },
  {
    name: 'Vikramaditya Roy',
    role: 'Managing Partner',
    company: 'Roy Capital Assets',
    quote: "Responsive, data-driven, and truly invested in our revenue growth. The level of founder oversight exceeds any agency we have partnered with before.",
    category: 'Corporate Growth',
    rating: 5
  }
];

const row2: Testimonial[] = [
  {
    name: 'Sneha Singhal',
    role: 'Operations Director',
    company: 'Sanctuary Wellness & Spa',
    quote: "Their real-time executive dashboard transformed how we track growth. We monitor daily acquisition efficiency, customer retention, and campaign margins with single-click clarity.",
    category: 'Wellness & Luxury',
    rating: 5
  },
  {
    name: 'Dr. Preeti Iyer',
    role: 'Medical Director',
    company: 'Iyer Advanced Diagnostics',
    quote: "The seasonal healthcare outreach strategy was timed to perfection. Our diagnostic bookings surged by 85% within the first month. They understand compliance and nuance deeply.",
    category: 'Clinical Care',
    rating: 5
  },
  {
    name: 'Anandita Chatterjee',
    role: 'Founder',
    company: 'Brightminds Learning Hub',
    quote: "Enrollment season used to be unpredictable. Now our applicant pipeline fills up well before deadlines thanks to their optimized conversion architecture.",
    category: 'Education',
    rating: 5
  },
  {
    name: 'Farhan Qazi',
    role: 'Creative Director',
    company: 'Qazi Luxury Apparel',
    quote: "They scaled our brand from a boutique showcase to a national eCommerce engine with predictable daily sales. Their creative standards are unmatched.",
    category: 'Fashion & D2C',
    rating: 5
  },
  {
    name: 'Neha Rastogi',
    role: 'Founder & CEO',
    company: 'PureBotanic Organics',
    quote: "They turned our D2C unit economics around with high-retention UGC creatives and precision retargeting. Repeat customer revenue is up 65% this quarter.",
    category: 'Omnichannel D2C',
    rating: 5
  },
  {
    name: 'Manish Khurana',
    role: 'Partner',
    company: 'Khurana & Partners Advisory',
    quote: "High-integrity execution and discreet, authoritative positioning. Our firm's digital authority now accurately reflects our decades of institutional credibility.",
    category: 'Professional Advisory',
    rating: 5
  },
  {
    name: 'Dr. Sandeep Patel',
    role: 'Lead Specialist',
    company: 'Aesthetic Dental Innovations',
    quote: "A single high-retention video creative produced by their team drove an unprecedented surge in cosmetic appointments. Over 11x verified ROAS in 30 days.",
    category: 'Dental Aesthetics',
    rating: 5
  }
];

interface ClientVoicesProps {
  backgroundColor?: string;
}

export const ClientVoices: React.FC<ClientVoicesProps> = ({ backgroundColor }) => {
  return (
    <section id="testimonials" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-tag" style={{ color: '#B89CFF', background: 'rgba(109, 74, 255, 0.15)' }}>VERIFIED CLIENT RESULTS</span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 900, fontFamily: 'Outfit, sans-serif', color: 'var(--secondary)', marginTop: '0.5rem', marginBottom: '1rem' }}>
          Trusted By Growth-Driven Founders & Enterprises
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.5 }}>
          Direct feedback from the executives, clinicians, and business owners scaling with our performance architecture.
        </p>
      </div>

      {/* TRACK 1 - SCROLLS LEFT */}
      <div className="marquee-container" style={{ marginBottom: '1.75rem' }}>
        <div className="marquee-track-left">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="testimonial-marquee-card"
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                width: '350px',
                marginRight: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Mark Icon */}
              <span
                style={{
                  fontSize: '4.5rem',
                  color: '#B89CFF',
                  opacity: 0.12,
                  position: 'absolute',
                  top: '0.25rem',
                  left: '1.5rem',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                “
              </span>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  flexGrow: 1,
                  zIndex: 2
                }}
              >
                {item.quote}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--secondary)', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {item.role}, {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.05rem', color: '#F59E0B', fontSize: '0.75rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#B89CFF',
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRACK 2 - SCROLLS RIGHT */}
      <div className="marquee-container">
        <div className="marquee-track-right">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="testimonial-marquee-card"
              style={{
                position: 'relative',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                width: '350px',
                marginRight: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Mark Icon */}
              <span
                style={{
                  fontSize: '4.5rem',
                  color: '#B89CFF',
                  opacity: 0.12,
                  position: 'absolute',
                  top: '0.25rem',
                  left: '1.5rem',
                  fontFamily: 'serif',
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}
              >
                “
              </span>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '1.75rem',
                  flexGrow: 1,
                  zIndex: 2
                }}
              >
                {item.quote}
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--secondary)', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                    {item.role}, {item.company}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.05rem', color: '#F59E0B', fontSize: '0.75rem' }}>
                    {'★'.repeat(item.rating)}
                  </div>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#B89CFF',
                      backgroundColor: 'rgba(217, 119, 6, 0.08)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px'
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



