'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Brain,
  Target,
  TrendingUp,
  ShieldCheck,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function FounderPage() {
  const { openStrategyModal } = useModals();

  useEffect(() => {
    document.title = 'Founder — Vedika | The Growth Purpose';
  }, []);

  const corePrinciples = [
    {
      title: 'Obsession with Business Outcomes',
      desc: 'Vanity metrics like impressions and likes mean nothing if they do not convert into qualified pipeline, loyal customers, and compounding bottom-line revenue.',
      icon: '🎯',
    },
    {
      title: 'Full-Funnel Creative Cohesion',
      desc: 'Ad creative, organic short-form reels, landing page narrative, and post-click follow-up must speak the same psychological language.',
      icon: '⚡',
    },
    {
      title: 'Radical Accountability',
      desc: 'Zero restrictive lock-ins. Every campaign strategy and deliverable is designed to earn your trust and long-term partnership every single month.',
      icon: '🛡️',
    },
    {
      title: 'High-Tempo Experimentation',
      desc: 'Rapid multivariate testing across angles, visual packaging, and offer positioning to discover market-winning campaigns faster than competitors.',
      icon: '🧪',
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
          LEADERSHIP PROFILE
        </span>
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <span className="btn-pill">
              <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
              FOUNDER &amp; LEAD GROWTH STRATEGIST
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Engineering <span className="text-[#6D4AFF]">Predictable Scale</span> &amp; Unshakeable Brand Equity.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Meet <strong>Vedika</strong>, the founder behind The Growth Purpose. Dedicated to bridging creative storytelling with rigorous performance marketing to turn ambitious brands into undisputed market leaders.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2"
            >
              <span>Contact on WhatsApp 💬</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stylized Profile Card (No Image as requested) */}
        <div className="lg:col-span-4">
          <div className="glow-box p-8 space-y-6 text-center bg-[#151518] border border-white/10 rounded-3xl relative overflow-hidden">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#1A0E2E] via-[#2E1854] to-[#1A0E2E] border-2 border-[#6D4AFF] flex items-center justify-center text-4xl font-black text-[#B89CFF] shadow-[0_0_35px_rgba(109,74,255,0.45)]">
              V
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-white">Vedika</h3>
              <p className="text-xs text-[#B89CFF] font-bold uppercase tracking-wider">
                Founder &amp; Growth Architect
              </p>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Directly leading high-ticket customer acquisition, multi-channel creative systems, and revenue scaling for B2B and D2C brands.
            </p>
            <div className="pt-2 border-t border-white/5 space-y-2 text-left text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6D4AFF] flex-shrink-0" />
                <span>Hands-on campaign oversight</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6D4AFF] flex-shrink-0" />
                <span>Custom conversion architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6D4AFF] flex-shrink-0" />
                <span>Transparent live KPI reporting</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Manifesto */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A0E2E] via-[#241344] to-[#150A26] border border-[#6D4AFF]/40 shadow-xl space-y-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
          FOUNDER&apos;S PERSPECTIVE
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
          &ldquo;Modern growth is not about spending more — it is about engineering resonance.&rdquo;
        </h2>
        <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <p>
            Too many agencies treat businesses like ticket numbers, deploying cookie-cutter templates, passing accounts to junior interns, and trapping founders in rigid retainer contracts.
          </p>
          <p>
            At <strong>The Growth Purpose</strong>, we operate with a fundamentally different DNA: high founder accountability, bespoke growth systems tailored to each client&apos;s unique margin economics, and transparent execution that delivers compounding ROI.
          </p>
        </div>
      </div>

      {/* Core Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            GUIDING PRINCIPLES
          </span>
          <h2 className="text-3xl font-extrabold text-white">How We Build &amp; Execute</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePrinciples.map((p, idx) => (
            <div key={idx} className="glow-box p-6 space-y-3">
              <div className="text-3xl mb-2">{p.icon}</div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#151518] border border-white/10 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to Work Directly with Vedika?
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Get a comprehensive audit of your current acquisition channels and a tailored growth roadmap within 48 hours.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <a
            href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-7 py-3.5 inline-flex items-center gap-2"
          >
            <span>Contact on WhatsApp 💬</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
