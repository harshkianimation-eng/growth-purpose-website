'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  Instagram,
  ArrowRight,
  MapPin,
  Globe,
} from 'lucide-react';
import { useModals } from '@/context/ModalContext';
import {
  TOP_FOOTER_DOMESTIC_LOCATIONS,
  TOP_FOOTER_INTERNATIONAL_LOCATIONS,
} from '@/data/locationsData';

export const domesticLocations = TOP_FOOTER_DOMESTIC_LOCATIONS;
export const internationalLocations = TOP_FOOTER_INTERNATIONAL_LOCATIONS;

export interface FooterProps {
  onNavigate?: (page: any, slug?: string) => void;
  onSelectLocation?: (locationName: string) => void;
  onOpenLocationsModal?: () => void;
  onOpenContactModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectLocation,
  onOpenLocationsModal,
  onOpenContactModal,
}) => {
  const { openStrategyModal: _openStrategyModal } = useModals();

  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

  return (
    <footer className="bg-[#0A0A0E] text-gray-300 border-t border-white/5 relative z-10">
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-1.5 flex items-center justify-center shadow-lg border border-slate-200/70 transition-transform group-hover:scale-105 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="The Growth Purpose Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-semibold text-sm sm:text-base tracking-widest uppercase text-white group-hover:text-[#B89CFF] transition">
                THE GROWTH PURPOSE
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Build the version of yourself and your brand you know you are capable of becoming. High-impact mindset, daily discipline, digital skills, and business scaling systems.
            </p>

            {/* Direct Contact Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/thegrowthpurpose"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1F1F24] border border-white/10 hover:border-[#6D4AFF] text-gray-300 hover:text-white flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1F1F24] border border-white/10 hover:border-[#6D4AFF] text-gray-300 hover:text-white flex items-center justify-center transition"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact.thegrowthpurpose@gmail.com"
                className="w-9 h-9 rounded-lg bg-[#1F1F24] border border-white/10 hover:border-[#6D4AFF] text-gray-300 hover:text-white flex items-center justify-center transition"
                aria-label="Email The Growth Purpose"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
              Company &amp; Story
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about/founder" className="hover:text-white transition">
                  Founder — Vedika
                </Link>
              </li>
              <li>
                <Link href="/about/why-us" className="hover:text-white transition">
                  Why Growth Purpose
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="hover:text-white transition">
                  Leadership &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
              Growth Programs
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/social-media-marketing" className="hover:text-white transition">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/graphic-design" className="hover:text-white transition">
                  Graphic &amp; Brand Design
                </Link>
              </li>
              <li>
                <Link href="/smm" className="hover:text-white transition">
                  SMM Growth Engine
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition">
                  89+ Industry Playbooks
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition">
                  Our Work Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition">
                  550+ Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#B89CFF] font-semibold hover:underline inline-flex items-center gap-1">
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach & Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#B89CFF]">
              Direct Contact &amp; Hubs
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-gray-500 block">WhatsApp &amp; Support:</span>
                <a
                  href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                  className="font-medium text-white hover:text-[#B89CFF] transition"
                >
                  +91 90221 03227
                </a>
              </div>

              <div>
                <span className="text-xs text-gray-500 block">Official Email:</span>
                <a
                  href="mailto:contact.thegrowthpurpose@gmail.com"
                  className="font-medium text-white hover:text-[#B89CFF] transition"
                >
                  contact.thegrowthpurpose@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs text-gray-500 block">Instagram:</span>
                <a
                  href="https://www.instagram.com/thegrowthpurpose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white hover:text-[#B89CFF] transition"
                >
                  @thegrowthpurpose
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/digital-marketing"
                  className="glow-box p-3 block group hover:border-[#6D4AFF] transition"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#B89CFF]">
                    <Globe className="w-4 h-4 text-[#6D4AFF]" />
                    <span>500+ Regional Centers</span>
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">
                    Explore city-by-city programs across India &amp; global markets.
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Locations Footer Links */}
        <div className="mt-14 pt-8 border-t border-white/5 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#B89CFF] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6D4AFF]" />
                Top Domestic Growth Centers
              </h5>
              <Link
                href="/digital-marketing"
                className="text-xs text-[#B89CFF] hover:underline"
              >
                View all 500+ hubs &rarr;
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOP_FOOTER_DOMESTIC_LOCATIONS.map((city) => (
                <Link
                  key={city}
                  href={`/digital-marketing/${toSlug(city)}`}
                  className="px-3 py-1.5 rounded-lg bg-[#15151C] hover:bg-[#1F1F2A] border border-white/5 hover:border-[#6D4AFF]/50 text-xs text-gray-300 hover:text-white transition inline-flex items-center gap-1.5 shadow-sm"
                >
                  <MapPin className="w-3 h-3 text-[#6D4AFF] opacity-70" />
                  <span>{city}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#B89CFF] mb-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#6D4AFF]" />
              International Growth Markets
            </h5>
            <div className="flex flex-wrap gap-2">
              {TOP_FOOTER_INTERNATIONAL_LOCATIONS.map((country) => (
                <Link
                  key={country}
                  href={`/digital-marketing/${toSlug(country)}`}
                  className="px-3 py-1.5 rounded-lg bg-[#15151C] hover:bg-[#1F1F2A] border border-white/5 hover:border-[#6D4AFF]/50 text-xs text-gray-300 hover:text-white transition inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Globe className="w-3 h-3 text-[#6D4AFF] opacity-70" />
                  <span>{country}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#07070A] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} The Growth Purpose. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/digital-marketing" className="hover:text-gray-300 transition">
              Locations
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Business Volunteer Rights Section */}
      <div className="border-t border-white/5 bg-[#050508] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-gray-400 text-center">
          <a
            href="https://businessvolunteers.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5A623] hover:text-[#FBBF24] font-semibold transition hover:underline"
          >
            Business Volunteer
          </a>
          <span className="text-gray-600">|</span>
          <span>All Rights Reserved 2026</span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="text-gray-400">Digital Marketing Agency / Company in Nagpur, Maharashtra, India</span>
        </div>
      </div>
    </footer>
  );
};