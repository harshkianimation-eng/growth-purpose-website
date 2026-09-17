'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  BarChart3,
  Users,
  Zap,
  Lock,
} from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function WhyUsPage() {
  const { openStrategyModal } = useModals();

  useEffect(() => {
    document.title = 'Why Growth Purpose — Advantage & Results | The Growth Purpose';
  }, []);

  const comparisonRows = [
    {
      feature: 'Contract Terms',
      us: 'Month-to-month flexibility with zero lock-in contracts',
      others: 'Rigid 6-12 month lock-in retainer traps with penalty clauses',
    },
    {
      feature: 'Account Leadership',
      us: 'Direct founder strategy and senior growth architect execution',
      others: 'Pitched by founders, handed off to junior interns',
    },
    {
      feature: 'KPI & Reporting',
      us: 'Real-time live dashboard with revenue, CAC, and ROAS tracking',
      others: 'Vague end-of-month PDF reports focused on vanity impressions',
    },
    {
      feature: 'Creative Ownership',
      us: 'You own 100% of all ad creatives, video assets, and source files',
      others: 'Agency retains copyright or charges buyout fees',
    },
    {
      feature: 'Pricing Model',
      us: 'Transparent, value-aligned deliverables and performance options',
      others: 'Hidden markups, bloated retainers, and unpredictable add-ons',
    },
    {
      feature: 'Speed of Execution',
      us: 'New campaigns live within 5 to 7 days with rapid A/B testing',
      others: 'Weeks of bureaucratic meetings before a single post goes live',
    },
  ];

  const pillars = [
    {
      title: 'Zero Lock-In Philosophy',
      desc: 'We believe agencies should earn their client partnership every single month based on measurable performance, not legal lock-ins.',
      icon: '🔓',
    },
    {
      title: 'Founder-Led Execution',
      desc: 'Your growth architecture is crafted directly by experienced practitioners who understand margin economics and unit scale.',
      icon: '👑',
    },
    {
      title: 'Full-Funnel Alignment',
      desc: 'We connect top-of-funnel creative attention with bottom-of-funnel conversion funnels, CRM workflows, and retention systems.',
      icon: '⚡',
    },
    {
      title: 'Radical Transparency',
      desc: 'No hidden agency fees or inflated ad metrics. You see every rupee spent, every lead generated, and true bottom-line ROI.',
      icon: '📊',
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
          CORE ADVANTAGE
        </span>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="btn-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
            WHY THE GROWTH PURPOSE
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Built for <span className="text-[#6D4AFF]">High-Growth Brands</span> Tired of Traditional Agencies.
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          We built The Growth Purpose to eliminate bloated retainers, junior handoffs, and vanity metrics. Here is how our growth architecture compares to traditional marketing agencies.
        </p>

        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => openStrategyModal('Why Us Consultation')}
            className="btn-primary text-sm px-7 py-3.5"
          >
            <span>Experience The Difference</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#151518] border border-white/10 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            HEAD-TO-HEAD COMPARISON
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            The Growth Purpose vs. Traditional Agencies
          </h2>
        </div>

        <div className="overflow-x-auto pt-4">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Dimension</th>
                <th className="py-4 px-4 text-xs font-bold text-[#B89CFF] uppercase tracking-wider bg-[#1A0E2E]/60 rounded-t-xl">The Growth Purpose</th>
                <th className="py-4 px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Traditional Agencies</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition">
                  <td className="py-4 px-4 font-bold text-white">{row.feature}</td>
                  <td className="py-4 px-4 text-emerald-400 font-semibold bg-[#1A0E2E]/30 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{row.us}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{row.others}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            CORE PILLARS
          </span>
          <h2 className="text-3xl font-extrabold text-white">Our 4 Uncompromising Standards</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
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
          Ready for a Growth Partner That Delivers?
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
          Schedule an introductory roadmap session to discover how our conversion frameworks can scale your brand with zero long-term risk.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => openStrategyModal('Why Us Bottom CTA')}
            className="btn-primary text-sm px-7 py-3.5"
          >
            <span>Claim Your Custom Growth Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
