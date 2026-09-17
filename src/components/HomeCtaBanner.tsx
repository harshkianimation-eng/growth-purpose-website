'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HomeCtaBannerProps {
  onNavigate?: (page: any, slug?: string) => void;
}

export const HomeCtaBanner: React.FC<HomeCtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 5 }}>
      <div className="glow-box p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-[#1A0E2E] via-[#150A26] to-[#1F1F24] border border-[#6D4AFF]/30 rounded-3xl shadow-[0_0_50px_rgba(109,74,255,0.2)]">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="btn-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#B89CFF] bg-[#6D4AFF]/20 border border-[#6D4AFF]/35">
              <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
              READY TO SCALE YOUR POTENTIAL?
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Start Your <span className="text-gradient" style={{ background: 'linear-gradient(to right, #B89CFF, #A78BFA, #6D4AFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Growth Journey</span> Today
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Connect with our team to explore high-impact mindset mentorship, social growth architecture, and bespoke execution programs.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-3.5 flex items-center gap-2 shadow-lg shadow-[#6D4AFF]/25 cursor-pointer"
            >
              <span>Contact on WhatsApp 💬</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            {onNavigate ? (
              <button
                onClick={() => onNavigate('contact')}
                className="btn-secondary text-sm px-6 py-3.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Our Team</span>
              </button>
            ) : (
              <Link
                href="/contact"
                className="btn-secondary text-sm px-6 py-3.5 flex items-center gap-2"
              >
                <span>Contact Our Team</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
