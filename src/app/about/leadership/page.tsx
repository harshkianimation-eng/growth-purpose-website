'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Globe,
  TrendingUp,
  ShieldCheck,
  Compass,
  Award,
  Layers,
} from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function LeadershipPage() {
  const { openStrategyModal } = useModals();

  useEffect(() => {
    document.title = 'Leadership & Vision | The Growth Purpose';
  }, []);

  const visionPillars = [
    {
      title: 'Decentralized Creator Power',
      desc: 'Empowering brands with authentic, creator-led distribution networks that out-convert traditional corporate commercials 10 to 1.',
      icon: '🌐',
    },
    {
      title: 'Algorithmic Optimization Engine',
      desc: 'Harnessing modern machine learning, GEO search indexing, and predictive bidding models to minimize customer acquisition costs.',
      icon: '🧠',
    },
    {
      title: 'Total Execution Integrity',
      desc: 'Upholding strict confidentiality, transparent reporting, and zero-compromise creative excellence across all service verticals.',
      icon: '🛡️',
    },
    {
      title: 'Scalable Brand Equity',
      desc: 'Building enduring market authority and founder positioning that compounds in valuation long after individual ad campaigns conclude.',
      icon: '📈',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Back Link */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#B89CFF] hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About Overview</span>
        </Link>
        <span className="btn-pill text-xs">
          EXECUTIVE VISION
        </span>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="btn-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
            LEADERSHIP &amp; LONG-TERM VISION
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Redefining How Modern Brands <span className="text-[#6D4AFF]">Scale &amp; Lead</span>.
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          The Growth Purpose is guided by a singular mission: to provide ambitious founders and enterprises with institutional-grade performance architecture, viral social leverage, and uncompromising creative integrity.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => openStrategyModal('Leadership & Vision Consultation')}
            className="btn-primary text-sm px-7 py-3.5"
          >
            <span>Partner with Our Leadership</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Leadership Profile Card */}
      <div className="max-w-4xl mx-auto">
        <div className="glow-box p-8 sm:p-12 space-y-6 text-center sm:text-left bg-[#151518] border border-white/10 rounded-3xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#1A0E2E] via-[#2E1854] to-[#1A0E2E] border-2 border-[#6D4AFF] flex items-center justify-center text-4xl font-black text-[#B89CFF] shadow-[0_0_35px_rgba(109,74,255,0.45)] flex-shrink-0">
              V
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B89CFF] bg-[#6D4AFF]/15 border border-[#6D4AFF]/30 px-3 py-1 rounded-full inline-block">
                  Founder &amp; Lead Growth Strategist
                </span>
                <h3 className="text-3xl font-black text-white mt-2">Vedika</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Under Vedika&apos;s leadership, The Growth Purpose has scaled dozens of B2B and D2C brands, generated millions in tracked client pipeline, and pioneered a performance-driven, zero-lockin model designed to restore trust in digital agency partnerships.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="text-[11px] font-semibold text-gray-300 bg-[#1F1F24] border border-white/5 px-3 py-1 rounded-lg">
                  ✨ High-Impact Execution
                </span>
                <span className="text-[11px] font-semibold text-gray-300 bg-[#1F1F24] border border-white/5 px-3 py-1 rounded-lg">
                  🎯 Data-Backed ROI
                </span>
                <span className="text-[11px] font-semibold text-gray-300 bg-[#1F1F24] border border-white/5 px-3 py-1 rounded-lg">
                  📈 Compound Brand Equity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            STRATEGIC HORIZON
          </span>
          <h2 className="text-3xl font-extrabold text-white">Our Long-Term Blueprint</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPillars.map((p, idx) => (
            <div key={idx} className="glow-box p-6 space-y-3">
              <div className="text-3xl mb-2">{p.icon}</div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0E2E] via-[#241344] to-[#150A26] border border-[#6D4AFF]/40 text-center space-y-4 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Join Us in Shaping the Future of Digital Growth
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
          Whether you are looking to scale your brand presence or establish an unshakeable market moat, our team is ready.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => openStrategyModal('Leadership Page Consultation')}
            className="btn-primary text-sm px-7 py-3.5"
          >
            <span>Initiate Leadership Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
