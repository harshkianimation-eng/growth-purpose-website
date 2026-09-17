'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Instagram, Mail, Send, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { updatePageSeo } from '@/utils/seoManager';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    updatePageSeo('contact');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'contact',
        }),
      });

      const data = await res.json();
      if (res.ok && (data.success || data.simulated)) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to submit message.');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2">
          <span className="btn-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
            CONNECT & TRANSFORM
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Let&apos;s build your <span className="text-[#6D4AFF]">next chapter</span>.
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Ready to level up your mindset, habits, or brand architecture? Send us a message and our team will connect with you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glow-box p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white">Direct Communication</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We respond to all serious inquiries within 24 hours. Schedule a call or contact our team directly.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A0E2E] border border-[#6D4AFF]/40 flex items-center justify-center text-[#B89CFF] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Official Email</div>
                  <a href="mailto:contact.thegrowthpurpose@gmail.com" className="font-semibold text-white hover:text-[#B89CFF]">
                    contact.thegrowthpurpose@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A0E2E] border border-[#6D4AFF]/40 flex items-center justify-center text-[#B89CFF] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Direct Phone / WhatsApp</div>
                  <a href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services" className="font-semibold text-white hover:text-[#B89CFF]">
                    +91 90221 03227
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A0E2E] border border-[#6D4AFF]/40 flex items-center justify-center text-[#B89CFF] flex-shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Instagram</div>
                  <a
                    href="https://www.instagram.com/thegrowthpurpose"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white hover:text-[#B89CFF]"
                  >
                    @thegrowthpurpose
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1A0E2E] border border-[#6D4AFF]/40 flex items-center justify-center text-[#B89CFF] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Office Location</div>
                  <div className="font-semibold text-white">Nagpur, Maharashtra, India</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#B89CFF] hover:text-white transition"
                >
                  <span>Chat on WhatsApp 💬</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="glow-box p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#6D4AFF]/20 border border-[#6D4AFF] text-[#B89CFF] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#6D4AFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-gray-300 text-sm max-w-md mx-auto">
                  Thank you for reaching out. A Growth Purpose specialist will review your request and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                  }}
                  className="btn-primary text-xs px-6 py-3"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry</h3>

                {errorMsg && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#151518] border border-white/10 focus:border-[#6D4AFF] focus:ring-1 focus:ring-[#6D4AFF] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#151518] border border-white/10 focus:border-[#6D4AFF] focus:ring-1 focus:ring-[#6D4AFF] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#151518] border border-white/10 focus:border-[#6D4AFF] focus:ring-1 focus:ring-[#6D4AFF] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    Program / Inquiry Focus
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mindset Mastery, SMM, Web Architecture, Performance Marketing"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#151518] border border-white/10 focus:border-[#6D4AFF] focus:ring-1 focus:ring-[#6D4AFF] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current situation, growth goals, or specific inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#151518] border border-white/10 focus:border-[#6D4AFF] focus:ring-1 focus:ring-[#6D4AFF] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-3.5 text-base font-semibold"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
