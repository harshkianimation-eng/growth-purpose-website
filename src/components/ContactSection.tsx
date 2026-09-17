'use client';

import React, { useState } from 'react';
import { sendEmail } from '../utils/emailService';

interface ContactSectionProps {
  backgroundColor?: string;
  isStandalone?: boolean;
  onOpenContactModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ backgroundColor, isStandalone = false, onOpenContactModal }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const res = await sendEmail({
      formType: 'contact',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });

    setLoading(false);

    if (res.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 6000);
    } else {
      setErrorMsg(res.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', backgroundColor: backgroundColor || 'transparent' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">START YOUR EXPANSION</div>
          {isStandalone ? (
            <h1 className="section-title">Ready to Scale Your Brand with Precision?</h1>
          ) : (
            <h2 className="section-title">Ready to Scale Your Brand with Precision?</h2>
          )}
          <p className="section-subtitle">Submit your project details below and our senior growth strategists will prepare a custom performance audit within 24 hours.</p>
        </div>

        <div className="contact-grid">
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
            {submitted ? (
              <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--green-accent)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉 Growth Inquiry Received!</h3>
                <p style={{ color: 'var(--text-muted)' }}>Thank you. Founder Vedika and the strategy team will contact you at {formData.email || 'your email'} shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div style={{ marginBottom: '1rem', padding: '0.75rem 1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', color: '#ef4444', fontSize: '0.85rem' }}>
                    {errorMsg}
                  </div>
                )}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Full Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="e.g. Rahul Sharma" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none' }} />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="e.g. rahul@company.com" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none' }} />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Phone Number</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required placeholder="e.g. +91 98765 43210" style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none' }} />
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--secondary)' }}>Your Message & Growth Goals</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required placeholder="Describe your brand goals, target audience, and current scaling objectives..." style={{ width: '100%', padding: '0.8rem 1rem', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-subtle)', outline: 'none', minHeight: '120px' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      backgroundColor: '#6D4AFF',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '0.9rem 1.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease',
                      opacity: loading ? 0.7 : 1,
                      boxShadow: '0 4px 14px rgba(109, 74, 255, 0.35)'
                    }}
                    onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#5B21B6'; }}
                    onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = '#6D4AFF'; }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    <span>{loading ? 'Sending...' : 'Request Growth Audit'}</span>
                  </button>

                  <a
                    href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      backgroundColor: '#25D366',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '0.9rem 1.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#20bd5a'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#25D366'; }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.146.568 4.157 1.559 5.897l-1.567 5.727 5.877-1.542c1.678.916 3.6 1.436 5.642 1.436 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" /></svg>
                    <span>Direct WhatsApp Sync</span>
                  </a>
                </div>


              </form>
            )}

            {/* Social Icons Row (WhatsApp & Instagram) */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with The Growth Purpose on WhatsApp"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#1F1F24',
                  border: '1px solid rgba(37, 211, 102, 0.3)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(37, 211, 102, 0.35)';
                  e.currentTarget.style.borderColor = '#25D366';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.3)';
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/thegrowthpurpose"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Growth Purpose on Instagram"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#1F1F24',
                  border: '1px solid rgba(228, 64, 95, 0.3)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 18px rgba(228, 64, 95, 0.35)';
                  e.currentTarget.style.borderColor = '#E4405F';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(228, 64, 95, 0.3)';
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="#E4405F" strokeWidth="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="#E4405F" strokeWidth="2" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>✉️</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Us</div>
                <a href="mailto:contact.thegrowthpurpose@gmail.com" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none', transition: 'color 0.2s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#B89CFF'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                  contact.thegrowthpurpose@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📞</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call Us</div>
                <a href="tel:+919022103227" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>+91 90221 03227</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>💬</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>WhatsApp</div>
                <a href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>+91 90221 03227</a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-badge)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>📍</div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Office Location</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Nagpur, Maharashtra, India</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Mon – Sat: 09:00 AM – 06:00 PM IST • Guaranteed response within 2 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




