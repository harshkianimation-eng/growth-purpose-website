'use client';

import React from 'react';
import { TrendingUp, Zap, Target, ArrowRight } from 'lucide-react';
import type { StatType } from './StatCardModal';

interface HeroProps {
  onOpenStrategyModal: () => void;
  onNavigateServices: () => void;
  onNavigatePortfolio: () => void;
  onOpenStatModal: (type: StatType) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateServices,
  onNavigatePortfolio,
  onOpenStatModal,
}) => {
  return (
    <section id="hero" className="relative w-full overflow-hidden pt-6 pb-16 lg:py-20 bg-[#0D0D11]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#6D4AFF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#B89CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Eyebrow, Heading, Paragraph & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start text-left pr-0 lg:pr-4">
            
            {/* Tag / Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6D4AFF]/15 border border-[#6D4AFF]/30 text-[#B89CFF] text-xs font-bold tracking-wider uppercase mb-5 shadow-[0_2px_12px_rgba(109,74,255,0.15)]">
              <span>🎯</span>
              <span>DATA-BACKED BRAND ACCELERATION & GROWTH SYSTEMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-black text-white leading-[1.08] tracking-tight mb-5">
              We Architect Brands <br className="hidden sm:inline" />
              That Command{' '}
              <span className="bg-gradient-to-r from-[#B89CFF] via-[#A78BFA] to-[#6D4AFF] bg-clip-text text-transparent">
                Market Attention.
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-lg mb-8">
              From high-impact performance advertising and viral content engines to conversion-first web platforms, we engineer digital systems that turn attention into sustained, compounding revenue.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onNavigateServices}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.95rem] text-white bg-gradient-to-r from-[#6D4AFF] to-[#7C5CFC] shadow-[0_4px_22px_rgba(109,74,255,0.45)] hover:shadow-[0_8px_30px_rgba(109,74,255,0.7)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Scale Your Brand</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigatePortfolio}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-[0.95rem] text-white bg-[#1F1F24] border border-white/15 hover:bg-[#282832] hover:border-[#6D4AFF]/50 hover:text-[#B89CFF] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <span>Explore Proven Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Building Facade Visual with 3 Overlaid Floating Stat Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-[540px]">
              
              {/* Building Image */}
              <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3] rounded-[28px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.75)] bg-[#1A0E2E]">
                <img
                  src="/building.jpg"
                  alt="The Growth Purpose Headquarters Building"
                  className="w-full h-full object-cover rounded-[28px] transform scale-[1.01]"
                  fetchPriority="high"
                  decoding="async"
                  width="540"
                  height="405"
                />
              </div>

              {/* FLOATING CARD 1: Client Revenue Gen (Top Right) */}
              <div
                onClick={() => onOpenStatModal('revenue')}
                title="Click to view Revenue Breakdown"
                className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-2xl bg-[#1F1F24]/90 backdrop-blur-md border border-[#6D4AFF]/35 shadow-[0_12px_30px_rgba(0,0,0,0.65)] hover:scale-105 hover:border-[#B89CFF] transition-all duration-200 cursor-pointer select-none group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#6D4AFF]/20 border border-[#6D4AFF]/30 flex items-center justify-center shrink-0 text-[#B89CFF]">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-slate-400 leading-tight">
                    Verified Revenue Scaled
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-white leading-tight font-outfit mt-0.5">
                    ₹8.7M+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#B89CFF] group-hover:text-white transition-colors flex items-center gap-0.5 mt-0.5">
                    Click breakdown ➔
                  </span>
                </div>
              </div>

              {/* FLOATING CARD 2: High-Intent Clicks (Mid Left - Overlapping Edge) */}
              <div
                onClick={() => onOpenStatModal('clicks')}
                title="Click to view Click Analytics"
                className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-7 z-20 flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-2xl bg-[#1F1F24]/90 backdrop-blur-md border border-[#6D4AFF]/35 shadow-[0_12px_30px_rgba(0,0,0,0.65)] hover:scale-105 hover:border-[#B89CFF] transition-all duration-200 cursor-pointer select-none group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#6D4AFF]/20 border border-[#6D4AFF]/30 flex items-center justify-center shrink-0 text-[#B89CFF]">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-slate-400 leading-tight">
                    High-Intent Inquiries
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-white leading-tight font-outfit mt-0.5">
                    1.4M+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#B89CFF] group-hover:text-white transition-colors flex items-center gap-0.5 mt-0.5">
                    Click breakdown ➔
                  </span>
                </div>
              </div>

              {/* FLOATING CARD 3: Avg Return On Ad Spend (Bottom Right) */}
              <div
                onClick={() => onOpenStatModal('conversions')}
                title="Click to view ROAS Breakdown"
                className="absolute bottom-4 sm:bottom-5 right-4 sm:right-6 z-20 flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-2xl bg-[#1F1F24]/90 backdrop-blur-md border border-[#6D4AFF]/35 shadow-[0_12px_30px_rgba(0,0,0,0.65)] hover:scale-105 hover:border-[#B89CFF] transition-all duration-200 cursor-pointer select-none group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#6D4AFF]/20 border border-[#6D4AFF]/30 flex items-center justify-center shrink-0 text-[#B89CFF]">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-slate-400 leading-tight">
                    Average Return On Ad Spend
                  </span>
                  <span className="text-base sm:text-lg font-extrabold text-white leading-tight font-outfit mt-0.5">
                    4.71x ROAS
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#B89CFF] group-hover:text-white transition-colors flex items-center gap-0.5 mt-0.5">
                    Click breakdown ➔
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
