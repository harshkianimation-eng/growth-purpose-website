'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  X,
  TrendingUp,
} from 'lucide-react';
import { useModals } from '@/context/ModalContext';
import { socialMediaProjects, SocialMediaProject } from '@/data/portfolioData';
import { updatePageSeo } from '@/utils/seoManager';

export default function SmmPage() {
  const { openStrategyModal } = useModals();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeLightboxProject, setActiveLightboxProject] = useState<SocialMediaProject | null>(null);

  useEffect(() => {
    updatePageSeo('smm');
  }, []);

  const smmPackages = [
    {
      name: 'Starter',
      price: '8,999',
      features: [
        '2 Social Platforms',
        '12 High-Converting Posts/Month',
        '3 Reels Edited & Optimized',
        '1 Custom Festival Poster',
        'Monthly Performance Report',
        'Hashtag & Caption Strategy',
      ],
      badge: '',
      popular: false,
      whatsappText: 'Hi, I am interested in Starter SMM Package (₹8,999/mo)',
    },
    {
      name: 'Growth',
      price: '11,999',
      features: [
        '3 Social Platforms',
        '20 High-Converting Posts/Month',
        '8 Viral Reels Edited',
        '3 Custom Festival Posters',
        'Meta Ads Setup & Tracking',
        'Monthly 1-on-1 Strategy Call',
        'Story & Engagement Automation',
      ],
      badge: 'MOST POPULAR',
      popular: true,
      whatsappText: 'Hi, I am interested in Growth SMM Package (₹11,999/mo)',
    },
    {
      name: 'Pro',
      price: '17,999',
      features: [
        '4 Social Platforms (IG, FB, LinkedIn, YT)',
        '30 High-Converting Posts/Month',
        '12 Viral Reels / Shorts Edited',
        '6 Custom Festival Posters',
        'Full Meta Ads Management & Scaling',
        'Google My Business Optimization',
        'Weekly Deep-Dive Performance Report',
        'Dedicated Creative Account Manager',
      ],
      badge: 'BEST ROI',
      popular: false,
      whatsappText: 'Hi, I am interested in Pro SMM Package (₹17,999/mo)',
    },
  ];

  const partnershipTiers = [
    {
      tier: '3–4 Accounts',
      discount: '10% OFF',
      desc: 'Perfect for boutique agencies & startups',
      tag: '',
    },
    {
      tier: '5–9 Accounts',
      discount: '15% OFF',
      desc: 'Mid-size agencies & active resellers',
      tag: 'MOST POPULAR',
    },
    {
      tier: '10–49 Accounts',
      discount: '20% OFF',
      desc: 'Large agency portfolios & brand networks',
      tag: 'BEST VALUE',
    },
    {
      tier: '50+ Accounts',
      discount: 'Custom',
      desc: 'Enterprise + dedicated manager & white-label team',
      tag: 'ENTERPRISE',
    },
  ];

  const faqs = [
    {
      q: 'What makes The Growth Purpose different from other agencies?',
      a: 'We focus purely on compounding business outcomes and conversion architecture with no long-term retainer traps. Our campaigns combine scroll-stopping visual design, high-retention video hooks, and automated lead capture funnels led directly by seasoned growth practitioners.',
    },
    {
      q: 'How long before I see tangible SMM results?',
      a: 'While organic SEO takes months to mature, our short-form video distribution and targeted social acquisition funnels generate high-quality engagement, follower traction, and qualified inbound leads within 24 to 72 hours of campaign launch.',
    },
    {
      q: 'Is there a lock-in contract or hidden cancellation fee?',
      a: 'Zero lock-ins. All our social media marketing packages are billed month-to-month. You are free to scale up, adjust deliverables, or pause at any time with complete flexibility and no hidden penalties.',
    },
    {
      q: 'Is performance-based or post-pay available?',
      a: 'Yes, we offer pay-per-outcome and hybrid performance setups for qualified brands after aligning on upfront lead definitions, conversion metrics, and acquisition targets.',
    },
    {
      q: 'Do you offer B2B or white-label agency partnerships?',
      a: 'Yes! Our B2B & Agency Tiers provide up to 20% volume discounts for agency partners and marketing consultants managing multi-account client portfolios under full white-label execution.',
    },
    {
      q: 'Which package is best suited for my business?',
      a: 'The Starter package (₹8,999) is ideal for establishing consistent authority. The Growth package (₹11,999) is our most popular choice for businesses actively scaling inquiries. The Pro package (₹17,999) is engineered for full multi-channel market dominance and paid ads scaling.',
    },
  ];

  // Marquee rows
  const row1 = socialMediaProjects.slice(0, 14);
  const row2 = socialMediaProjects.slice(14, 28);
  const row3 = socialMediaProjects.slice(28, 41);

  return (
    <div className="bg-[#0D0D11] text-white min-h-screen selection:bg-[#6D4AFF] selection:text-white">
      {/* Custom Styles for Smooth Infinite Marquee */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 38s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 38s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2">
          <span className="btn-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
            SMM HUB &amp; CREATOR NETWORK
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Social Media Marketing &amp; <span className="text-[#6D4AFF]">Viral Reach Engine</span>
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Scale your brand&apos;s organic and paid presence across Instagram, Facebook, LinkedIn, YouTube, and UGC creator networks to convert followers into loyal, paying customers.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-7 py-3.5"
          >
            <span>Discuss SMM on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => openStrategyModal('SMM Growth Strategy')}
            className="px-6 py-3.5 rounded-xl border border-white/10 hover:border-[#6D4AFF]/60 bg-[#1F1F24] hover:bg-[#1A0E2E] text-white text-sm font-semibold transition"
          >
            Claim Custom Strategy Plan
          </button>
        </div>
      </section>

      {/* 2. PACKAGES & PRICING SECTION */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            TRANSPARENT VALUE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Packages &amp; Pay-As-You-Go
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Flexible plans, zero retainer traps. Only pay for execution and outcomes that move your business forward.
          </p>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {smmPackages.map((pkg, idx) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#1A0E2E] to-[#150A26] border-2 border-[#6D4AFF] shadow-[0_0_40px_rgba(109,74,255,0.3)] lg:-translate-y-2'
                    : 'bg-[#151518] border border-white/10 hover:border-[#6D4AFF]/40 hover:shadow-2xl'
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6D4AFF] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-[0_0_15px_rgba(109,74,255,0.6)]">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-bold uppercase tracking-wider ${isPopular ? 'text-[#B89CFF]' : 'text-gray-400'}`}>
                      {pkg.name}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl sm:text-5xl font-black text-white">
                      ₹{pkg.price}
                    </span>
                    <span className="text-xs text-gray-400 font-semibold">/month</span>
                  </div>

                  <ul className="space-y-3.5 mb-8 text-xs sm:text-sm text-gray-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isPopular ? 'text-[#B89CFF]' : 'text-[#6D4AFF]'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition ${
                      isPopular
                        ? 'bg-[#6D4AFF] hover:bg-[#7C5CFC] text-white shadow-[0_0_20px_rgba(109,74,255,0.5)]'
                        : 'bg-[#1F1F24] hover:bg-[#1A0E2E] text-white border border-white/10 hover:border-[#6D4AFF]/50'
                    }`}
                  >
                    <span>Get Started on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => openStrategyModal(`${pkg.name} Package (₹${pkg.price}/mo)`)}
                    className="w-full text-center text-[11px] text-gray-400 hover:text-white transition py-1"
                  >
                    or Request Custom Proposal
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* PAY AS YOU GO BOX CALLOUT */}
        <div className="rounded-3xl p-8 bg-gradient-to-r from-[#151518] via-[#1A0E2E] to-[#151518] border border-[#6D4AFF]/30 shadow-xl space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            PAY-AS-YOU-GO &amp; PERFORMANCE PRICING
          </div>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Prefer outcomes over retainers? Our pay-per-performance model lets you pay only for leads and engagements that meet criteria agreed upfront — budget, location, and buyer intent. Custom deliverables, dedicated creative sprints, and pay-per-outcome performance setups are available on request.{' '}
            <a
              href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B89CFF] font-bold underline hover:text-white"
            >
              Request a custom quote
            </a>{' '}
            and we will build a roadmap around your exact targets.
          </p>
        </div>
      </section>

      {/* 3. B2B & AGENCY PARTNERSHIP TIERS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            PARTNERSHIPS &amp; RESELLERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            B2B &amp; Agency Tiers
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            White-label creative execution and volume pricing for marketing agencies, consultants, and enterprise brands.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipTiers.map((tier, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-6 bg-[#151518] border border-white/10 hover:border-[#6D4AFF]/40 transition-all text-center space-y-3 shadow-lg hover:-translate-y-1"
            >
              {tier.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6D4AFF] text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">
                  {tier.tag}
                </span>
              )}
              <div className="text-sm font-bold text-gray-200">{tier.tier}</div>
              <div className="text-3xl font-black text-[#B89CFF] font-display">
                {tier.discount}
              </div>
              <div className="text-xs text-gray-400 font-medium">{tier.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LIVE WORK SHOWCASE MARQUEE */}
      <section className="py-16 overflow-hidden border-y border-white/5 bg-[#09090D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Live Creative &amp; SMM Portfolio
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto">
            Click any creative card to inspect high-resolution visual branding, reel packaging, and social assets built for industry leaders.
          </p>
        </div>

        {/* TRACK 1 - SCROLLS LEFT */}
        <div className="overflow-hidden mb-6">
          <div className="animate-marquee-left gap-5">
            {[...row1, ...row1].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                onClick={() => setActiveLightboxProject(item)}
                className="w-56 sm:w-64 rounded-2xl overflow-hidden bg-[#151518] border border-white/10 hover:border-[#6D4AFF] transition-all cursor-pointer flex-shrink-0 group shadow-lg"
              >
                <div className="p-3 border-b border-white/5 bg-[#1A0E2E]/50">
                  <div className="text-xs font-bold text-white truncate">{item.name}</div>
                  <div className="text-[11px] text-gray-400 truncate">{item.niche}</div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.cardImage}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="256px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRACK 2 - SCROLLS RIGHT */}
        <div className="overflow-hidden mb-6">
          <div className="animate-marquee-right gap-5">
            {[...row2, ...row2].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                onClick={() => setActiveLightboxProject(item)}
                className="w-56 sm:w-64 rounded-2xl overflow-hidden bg-[#151518] border border-white/10 hover:border-[#6D4AFF] transition-all cursor-pointer flex-shrink-0 group shadow-lg"
              >
                <div className="p-3 border-b border-white/5 bg-[#1A0E2E]/50">
                  <div className="text-xs font-bold text-white truncate">{item.name}</div>
                  <div className="text-[11px] text-gray-400 truncate">{item.niche}</div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.cardImage}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="256px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TRACK 3 - SCROLLS LEFT */}
        <div className="overflow-hidden">
          <div className="animate-marquee-left gap-5">
            {[...row3, ...row3].map((item, idx) => (
              <div
                key={`r3-${idx}`}
                onClick={() => setActiveLightboxProject(item)}
                className="w-56 sm:w-64 rounded-2xl overflow-hidden bg-[#151518] border border-white/10 hover:border-[#6D4AFF] transition-all cursor-pointer flex-shrink-0 group shadow-lg"
              >
                <div className="p-3 border-b border-white/5 bg-[#1A0E2E]/50">
                  <div className="text-xs font-bold text-white truncate">{item.name}</div>
                  <div className="text-[11px] text-gray-400 truncate">{item.niche}</div>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.cardImage}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="256px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING & PROCESS FAQS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pricing &amp; Process FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#151518] border border-white/10 overflow-hidden transition-all shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#B89CFF] transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6D4AFF] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM SMM CTA BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#1A0E2E] via-[#241344] to-[#150A26] border border-[#6D4AFF]/40 shadow-[0_0_50px_rgba(109,74,255,0.25)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="inline-block bg-[#6D4AFF]/20 text-[#B89CFF] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#6D4AFF]/40">
              VIRAL GROWTH ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Get a custom content calendar and UGC creator growth strategy tailored for your brand within 2 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
            <a
              href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm px-7 py-3.5 inline-flex items-center gap-2"
            >
              <span>Contact on WhatsApp 💬</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeLightboxProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveLightboxProject(null)}
        >
          <button
            onClick={() => setActiveLightboxProject(null)}
            className="fixed top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition z-50"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg w-full bg-[#1F1F24] border border-[#6D4AFF]/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6 text-white"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-black">
              <Image
                src={activeLightboxProject.cardImage}
                alt={activeLightboxProject.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">{activeLightboxProject.name}</h3>
                <span className="text-xs text-[#B89CFF] font-semibold">{activeLightboxProject.niche}</span>
              </div>
              <p className="text-xs text-gray-300">{activeLightboxProject.description}</p>
              {activeLightboxProject.results && (
                <div className="pt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{activeLightboxProject.results}</span>
                </div>
              )}
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-xs py-3"
              >
                <span>Get Similar Creative Direction 💬</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
