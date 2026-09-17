'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Currency, PageView } from '../types';
import type { LeaderPerson } from './LeadershipModal';

export interface HeaderProps {
  activePage?: PageView;
  onNavigate?: (page: PageView, slug?: string) => void;
  currency?: Currency;
  onCurrencyChange?: (c: Currency) => void;
  theme?: 'light' | 'dark';
  onThemeToggle?: () => void;
  onOpenStrategyModal?: () => void;
  onOpenLeaderModal?: (person: LeaderPerson) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage: propActivePage,
  onNavigate: externalNavigate,
  onOpenStrategyModal,
  onOpenLeaderModal: _onOpenLeaderModal,
}) => {
  const router = useRouter();
  const pathname = usePathname() || '/';

  // Dynamically determine current active page from current URL pathname
  const determineActivePage = (): PageView => {
    if (propActivePage && propActivePage !== 'home') return propActivePage;
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/about')) return 'about';
    if (pathname.startsWith('/services')) return 'services';
    if (pathname.startsWith('/industries')) return 'industries';
    if (pathname.startsWith('/portfolio')) return 'portfolio';
    if (pathname.startsWith('/blogs') || pathname.startsWith('/blog')) return 'blog';
    if (pathname.startsWith('/smm')) return 'smm';
    if (pathname.startsWith('/contact')) return 'contact';
    if (pathname.startsWith('/location')) return 'location';
    if (pathname.startsWith('/locations')) return 'all-locations';
    return propActivePage || 'home';
  };

  const activePage = determineActivePage();

  const onNavigate = (page: PageView, slug?: string) => {
    if (externalNavigate) {
      externalNavigate(page, slug);
    } else {
      if (page === 'home') router.push('/');
      else if (page === 'service-details' && slug) router.push(`/services/${slug}`);
      else if (page === 'blog-post' && slug) router.push(`/blogs/${slug}`);
      else if (page === 'blog') router.push('/blogs');
      else if (page === 'about') {
        if (slug) router.push(`/about/${slug}`);
        else router.push('/about');
      }
      else if (page === 'location' && slug) router.push(`/location/${slug}`);
      else if (page === 'all-locations') router.push('/locations');
      else router.push(`/${page}`);
    }
  };
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle scrolled background state
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMobileNav = (page: PageView, slug?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, slug);
  };

  return (
    <div className={`header-wrapper ${isScrolled ? 'header-wrapper--scrolled' : ''} ${isVisible ? 'header-wrapper--visible' : 'header-wrapper--hidden'}`}>
      <header className="header">
        <div className="header-container">
          {/* OFFICIAL THE GROWTH PURPOSE LOGO */}
          <div className="logo" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flexShrink: 0 }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: 'linear-gradient(145deg, #F1F5F9 0%, #E2E8F0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(226, 232, 240, 0.6)',
              flexShrink: 0
            }}>
              <img
                src="/logo.png"
                alt="The Growth Purpose Logo"
                width="48"
                height="48"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em', color: '#FFFFFF', whiteSpace: 'nowrap' }}>
              THE GROWTH PURPOSE
            </span>
          </div>

          {/* Navigation Track (Desktop Only) */}
          <nav className="nav-menu desktop-nav-only">
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
              className={`nav-link-item ${activePage === 'home' ? 'active' : ''}`}
            >
              Home
            </a>

            {/* ABOUT ▾ DROPDOWN MENU */}
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  setIsAboutDropdownOpen(false);
                  onNavigate('about');
                }}
                className={`nav-link-item ${activePage === 'about' ? 'active' : ''}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer', textDecoration: 'none' }}
                title="Click to view About Us Page"
              >
                About ▾
              </a>

              {/* Dropdown Menu Card with seamless top hover bridge */}
              {isAboutDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '0',
                    paddingTop: '0.45rem',
                    zIndex: 1100
                  }}
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <div
                    style={{
                      width: '270px',
                      background: '#1F1F24',
                      borderRadius: '20px',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(109, 74, 255, 0.25)',
                      padding: '0.75rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem'
                    }}
                  >
                    <a
                      href="/about"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsAboutDropdownOpen(false);
                        onNavigate('about');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        textDecoration: 'none',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(109, 74, 255, 0.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      About The Growth Purpose
                    </a>

                    <a
                      href="/about/founder"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsAboutDropdownOpen(false);
                        onNavigate('about', 'founder');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#CBD5E1',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        textDecoration: 'none',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(109, 74, 255, 0.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Founder — <strong>Vedika</strong>
                    </a>

                    <a
                      href="/about/why-us"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsAboutDropdownOpen(false);
                        onNavigate('about', 'why-us');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#CBD5E1',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        textDecoration: 'none',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(109, 74, 255, 0.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Why The Growth Purpose
                    </a>

                    <a
                      href="/about/leadership"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsAboutDropdownOpen(false);
                        onNavigate('about', 'team');
                      }}
                      style={{
                        textAlign: 'left',
                        padding: '0.65rem 1rem',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#CBD5E1',
                        transition: 'var(--transition)',
                        background: 'transparent',
                        textDecoration: 'none',
                        display: 'block'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(109, 74, 255, 0.2)')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      Leadership &amp; Vision
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/services"
              onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
              className={`nav-link-item ${activePage === 'services' ? 'active' : ''}`}
            >
              Services
            </a>

            <a
              href="/industries"
              onClick={(e) => { e.preventDefault(); onNavigate('industries'); }}
              className={`nav-link-item ${activePage === 'industries' ? 'active' : ''}`}
            >
              Industries
            </a>

            <a
              href="/portfolio"
              onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }}
              className={`nav-link-item ${activePage === 'portfolio' ? 'active' : ''}`}
            >
              Our Work
            </a>

            <a
              href="/blogs"
              onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
              className={`nav-link-item ${activePage === 'blog' ? 'active' : ''}`}
            >
              Blog
            </a>

            <a
              href="/smm"
              onClick={(e) => { e.preventDefault(); onNavigate('smm'); }}
              className={`nav-link-item ${activePage === 'smm' ? 'active' : ''}`}
            >
              SMM
            </a>

            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
              className={`nav-link-item ${activePage === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Right Header Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>


            {/* MOBILE HAMBURGER MENU BUTTON (STRICTLY MOBILE PHONES <= 768px) */}
            {isMobileScreen && (
              <button
                className="mobile-menu-trigger"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Navigation Drawer"
                style={{ color: '#FFFFFF' }}
              >
                ☰
              </button>
            )}
          </div>
        </div>

        {/* MOBILE SIDE SLIDE-OVER NAVIGATION DRAWER (EXACTLY MATCHING SCREENSHOT 1) */}
        {isMobileMenuOpen && (
          <div className="mobile-drawer-overlay">
            {/* Dark translucent backdrop on left side */}
            <div className="mobile-drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)} />

            {/* Cream / White Slide-Over Panel on right side */}
            <div className="mobile-drawer-panel animate-slide-left">
              {/* Drawer Top Header */}
              <div className="mobile-drawer-header">
                <h3 className="mobile-drawer-title">Navigation</h3>
                <button
                  className="mobile-drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Navigation"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Menu Items */}
              <div className="mobile-drawer-body">
                <button
                  className={`mobile-drawer-link ${activePage === 'home' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('home')}
                >
                  <span>Home</span>
                </button>

                <div className="mobile-drawer-link-group">
                  <button
                    className={`mobile-drawer-link ${activePage === 'about' ? 'active' : ''}`}
                    onClick={() => {
                      setIsAboutDropdownOpen(!isAboutDropdownOpen);
                    }}
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span>About</span>
                    <span style={{ fontSize: '0.75rem' }}>{isAboutDropdownOpen ? '▲' : '▾'}</span>
                  </button>

                  {isAboutDropdownOpen && (
                    <div className="mobile-drawer-sublinks">
                      <button onClick={() => handleMobileNav('about')}>About The Growth Purpose</button>
                      <button onClick={() => handleMobileNav('about', 'founder')}>Founder — Vedika</button>
                      <button onClick={() => handleMobileNav('about', 'why-us')}>Why The Growth Purpose</button>
                      <button onClick={() => handleMobileNav('about', 'team')}>Leadership &amp; Vision</button>
                    </div>
                  )}
                </div>

                <button
                  className={`mobile-drawer-link ${activePage === 'services' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('services')}
                >
                  <span>Services</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'portfolio' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('portfolio')}
                >
                  <span>Portfolio</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'industries' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('industries')}
                >
                  <span>Industries</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'blog' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('blog')}
                >
                  <span>Blog</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'smm' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('smm')}
                >
                  <span>SMM</span>
                </button>

                <button
                  className={`mobile-drawer-link ${activePage === 'contact' ? 'active' : ''}`}
                  onClick={() => handleMobileNav('contact')}
                >
                  <span>Contact</span>
                </button>
              </div>

              {/* Drawer Bottom CTA Button */}
              <div className="mobile-drawer-footer">
                <a
                  href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-drawer-cta-btn"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact on WhatsApp 💬 ➔
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

