'use client';

import React from 'react';
import { InteractiveStatsBar } from './InteractiveStatsBar';

interface WhyChooseUsProps {
  onSelectLocation?: (locationName: string) => void;
  onOpenStrategyModal?: (note?: string) => void;
  backgroundColor?: string;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  onSelectLocation, 
  onOpenStrategyModal,
  backgroundColor
}) => {
  return (
    <>


      {/* WHY CHOOSE US SECTION */}
      <section id="why-us" style={{ padding: '6rem 0', backgroundColor: backgroundColor || 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-tag">THE ARCHITECTURAL DIFFERENCE</div>
            <h2>Engineered For Scalability. Proven By Numbers.</h2>
            <p className="section-subtitle">
              We eliminate agency guesswork by combining conversion psychology with rigorous, data-driven performance marketing.
            </p>
          </div>

          <div className="features-pill-grid">
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>⚡</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Rapid Deployment</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>High-converting campaigns architected, verified, and launched in agile sprint cycles.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>📊</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Live Intelligence</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Instant visibility into multi-channel spend efficiency, customer acquisition cost, and blended ROAS.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>👑</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Founder-Direct Oversight</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Hands-on strategic leadership from Founder Vedika on every brand account.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>🎓</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Specialized Squads</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Dedicated creative strategists, media buyers, and full-stack growth engineers.</p>
            </div>
            <div className="feature-pill-card">
              <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>🏆</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>Revenue-First Mandate</h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Every ad dollar and design asset is engineered to maximize customer lifetime value.</p>
            </div>
          </div>

          {/* ANIMATED & INTERACTIVE STATS BAR MATCHING SCREENSHOT 1 & ALL LOCATIONS POP-UP */}
          <InteractiveStatsBar
            onSelectLocation={onSelectLocation}
            onOpenStrategyModal={onOpenStrategyModal}
          />
        </div>
      </section>
    </>
  );
};



