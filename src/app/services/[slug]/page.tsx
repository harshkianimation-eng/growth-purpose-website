import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, AlertCircle, HelpCircle, Sparkles, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { ALL_17_SERVICES, getServiceBySlug } from '@/data/servicesData';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_17_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug) || ALL_17_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Program Not Found | The Growth Purpose' };
  return {
    title: `${service.title} | The Growth Purpose`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug) || ALL_17_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Back navigation */}
      <div className="flex items-center justify-between pb-6 border-b border-white/10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#B89CFF] hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Programs</span>
        </Link>
        <span className="btn-pill text-xs">
          {service.category}
        </span>
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-[#1A0E2E] border border-[#6D4AFF]/40 flex items-center justify-center text-4xl shadow-glow">
            {service.icon}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            {service.title}
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {service.longDescription || service.description}
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold text-[#B89CFF]">
            <span>Model: <strong className="text-white">Custom Growth Architecture &amp; Execution</strong></span>
          </div>
        </div>

        <div className="lg:col-span-4 p-8 rounded-3xl bg-gradient-to-b from-[#1A0E2E] to-[#150B28] border border-[#6D4AFF]/40 shadow-glow space-y-4 text-white">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B89CFF]">
            Deploy This Program
          </span>
          <h3 className="text-xl font-bold">Ready to Scale?</h3>
          <p className="text-xs text-gray-300">
            Book a dedicated consultation to evaluate your current setup and implement {service.title}.
          </p>
          <a
            href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center text-sm py-3.5"
          >
            <span>Contact on WhatsApp 💬</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* What We Do & Deliverables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {/* Scope of Execution */}
        <div className="glow-box p-8 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#6D4AFF]" />
            What We Engineer & Execute
          </h3>
          <div className="space-y-3 pt-2">
            {service.whatWeDo.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#6D4AFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guaranteed Deliverables */}
        <div className="glow-box p-8 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B89CFF]" />
            Core Deliverables & Outputs
          </h3>
          <div className="space-y-3 pt-2">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#B89CFF] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pain Points Resolved */}
      {service.painPoints && service.painPoints.length > 0 && (
        <div className="p-8 rounded-2xl bg-[#1F1F24] border border-white/5 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-400" />
            Bottlenecks & Pain Points This Solves
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {service.painPoints.map((point, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#151518] border border-white/5 text-xs sm:text-sm text-gray-300">
                ⚠️ {point}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="space-y-6 pt-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#6D4AFF]" />
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#1F1F24] border border-white/5 space-y-2">
                <h4 className="text-base font-semibold text-white">{faq.q}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
