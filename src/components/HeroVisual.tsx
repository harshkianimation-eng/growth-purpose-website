'use client';

import React from 'react';
import Image from 'next/image';
import { TrendingUp, Zap, Target } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

interface HeroVisualProps {
  onOpenStatModal?: (type: 'revenue' | 'clicks' | 'conversions') => void;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ onOpenStatModal }) => {
  const { openStrategyModal } = useModals();

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto flex items-center justify-center">
      {/* Outer ambient glow rings */}
      <div className="absolute inset-0 bg-[#6D4AFF]/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#B89CFF]/15 rounded-full blur-[70px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full aspect-square max-w-[500px] rounded-3xl bg-gradient-to-b from-[#1A0E2E]/80 via-[#150B28]/90 to-[#0D0D11] border border-[#6D4AFF]/30 p-4 sm:p-6 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
        {/* Subtle grid and starfield overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#6D4AFF_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

        {/* Glowing Cosmic Brain Centerpiece Visual */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          {/* Animated Neon Circle */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[#6D4AFF]/40 via-[#B89CFF]/30 to-[#1A0E2E] p-1 flex items-center justify-center shadow-glowLg animate-pulse">
            <div className="w-full h-full rounded-full bg-[#0D0D11]/90 backdrop-blur-md flex items-center justify-center relative overflow-hidden border border-[#6D4AFF]/40">
              {/* Brain / Energy SVG Artwork */}
              <svg
                viewBox="0 0 200 200"
                className="w-36 h-36 sm:w-44 sm:h-44 text-[#B89CFF] filter drop-shadow-[0_0_15px_#6D4AFF]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stylized Glowing Neural Pathways */}
                <path d="M100 25 C70 25, 45 45, 45 75 C45 85, 50 95, 42 105 C35 115, 38 135, 52 148 C62 158, 75 160, 85 172 C95 182, 100 185, 100 185" stroke="#B89CFF" opacity="0.9" />
                <path d="M100 25 C130 25, 155 45, 155 75 C155 85, 150 95, 158 105 C165 115, 162 135, 148 148 C138 158, 125 160, 115 172 C105 182, 100 185, 100 185" stroke="#6D4AFF" opacity="0.9" />
                <path d="M100 40 L100 170" stroke="#B89CFF" strokeDasharray="4 4" opacity="0.6" />
                <circle cx="100" cy="70" r="14" fill="#6D4AFF" fillOpacity="0.4" stroke="#B89CFF" />
                <circle cx="75" cy="100" r="10" fill="#6D4AFF" fillOpacity="0.4" stroke="#B89CFF" />
                <circle cx="125" cy="100" r="10" fill="#6D4AFF" fillOpacity="0.4" stroke="#B89CFF" />
                <circle cx="85" cy="135" r="12" fill="#6D4AFF" fillOpacity="0.4" stroke="#B89CFF" />
                <circle cx="115" cy="135" r="12" fill="#6D4AFF" fillOpacity="0.4" stroke="#B89CFF" />
                <path d="M75 100 L100 70 L125 100 L115 135 L85 135 Z" stroke="#A78BFA" strokeWidth="1.5" opacity="0.7" />
              </svg>

              {/* Glowing core spark */}
              <div className="absolute w-6 h-6 rounded-full bg-white blur-sm opacity-70 animate-ping" />
            </div>
          </div>

          {/* Futuristic Mountain Silhouette Base */}
          <div className="mt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
              Neural Growth & Transformation
            </span>
            <div className="text-xs text-gray-400 mt-0.5">High-Performance Cognitive Architecture</div>
          </div>
        </div>

        {/* Floating Stat Card 1: Value Generated */}
        <div
          onClick={() => onOpenStatModal?.('revenue')}
          className="absolute top-6 left-4 sm:left-6 z-20 p-2.5 sm:p-3 rounded-xl bg-[#1F1F24]/90 backdrop-blur-md border border-[#6D4AFF]/40 shadow-xl cursor-pointer hover:scale-105 transition group/stat flex items-center gap-2.5"
          title="Click to view Revenue & Value breakdown"
        >
          <div className="w-8 h-8 rounded-lg bg-[#6D4AFF]/20 text-[#B89CFF] flex items-center justify-center">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase">Value Created</div>
            <div className="text-xs sm:text-sm font-bold text-white">₹8.7M+</div>
          </div>
        </div>

        {/* Floating Stat Card 2: High-Intent Clicks / Reach */}
        <div
          onClick={() => onOpenStatModal?.('clicks')}
          className="absolute bottom-16 -left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-xl bg-[#1F1F24]/90 backdrop-blur-md border border-[#6D4AFF]/40 shadow-xl cursor-pointer hover:scale-105 transition group/stat flex items-center gap-2.5"
          title="Click to view Reach & Click analytics"
        >
          <div className="w-8 h-8 rounded-lg bg-[#6D4AFF]/20 text-[#B89CFF] flex items-center justify-center">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase">Audience Reach</div>
            <div className="text-xs sm:text-sm font-bold text-white">1.4M+ Hits</div>
          </div>
        </div>

        {/* Floating Stat Card 3: ROAS / Success */}
        <div
          onClick={() => onOpenStatModal?.('conversions')}
          className="absolute bottom-8 right-3 sm:right-6 z-20 p-2.5 sm:p-3 rounded-xl bg-[#1F1F24]/90 backdrop-blur-md border border-[#6D4AFF]/40 shadow-xl cursor-pointer hover:scale-105 transition group/stat flex items-center gap-2.5"
          title="Click to view Transformation & ROAS"
        >
          <div className="w-8 h-8 rounded-lg bg-[#6D4AFF]/20 text-[#B89CFF] flex items-center justify-center">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase">Avg Transformation</div>
            <div className="text-xs sm:text-sm font-bold text-white">4.71x ROAS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
