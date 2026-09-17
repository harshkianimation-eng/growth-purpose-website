'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  prefilledService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  if (!isOpen) return null;

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
        setErrorMsg(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMsg('Network connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#1F1F24] border border-[#6D4AFF]/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#6D4AFF]/20 border border-[#6D4AFF] text-[#B89CFF] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#6D4AFF]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
              Thank you for reaching out. We will get back to you promptly to discuss your growth goals.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="btn-primary w-full justify-center"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="btn-pill py-1 px-3 text-xs">
                <MessageSquare className="w-3.5 h-3.5 text-[#B89CFF]" />
                Get in Touch
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
              Connect with The Growth Purpose
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Have a question, need a consultation, or ready to partner on your transformation? Send us a message.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    Email *
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
                  Interested Program / Focus Area
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mindset Mastery, Digital Marketing, Performance Systems"
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
                  rows={3}
                  placeholder="Tell us about your current situation and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#151518] border border-white/10 focus:border-[#6D4AFF] focus:ring-1 focus:ring-[#6D4AFF] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-3.5 mt-2 text-base font-semibold"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
