'use client';

import React, { useEffect } from 'react';
import type { PageView } from '../types';
import { graphicDesignPricingData } from '../components/ServicesGrid';

interface GraphicItemDetailPageProps {
  itemId: string; // The URL item slug, e.g. "poster-design"
  onNavigate: (page: PageView, slug?: string) => void;
  onOpenStrategyModal: (serviceName?: string) => void;
}

// Custom explanations for key design items
const customExplanations: Record<string, { desc: string; turnaround: string; formats: string; inclusions: string[]; requirements: string[] }> = {
  'poster-design': {
    desc: 'High-impact promotional poster designs tailored for events, store marketing, digital campaigns, or offline billboard scaling. Engineered to grab attention immediately and direct user interest.',
    turnaround: '24–48 Hours',
    formats: 'Print-Ready PDF, High-Res JPG/PNG, Editable PSD source layout',
    inclusions: ['Custom sizing up to A0 dimensions', '3 revisions cycles included', '100% royalty-free image integration', 'Typography matching your brand identity'],
    requirements: ['Primary goal / target audience', 'Brand colors and logo vectors', 'Core text copy, titles, and call-to-actions', 'Preferred dimensions / display orientation']
  },
  'flyer-design': {
    desc: 'Professional single- or double-sided flyer layouts engineered for hand-to-hand distribution, mail drops, or digital handouts. Designed for high readability and structured layouts.',
    turnaround: '24–48 Hours',
    formats: 'Double-sided Print PDF, JPG/PNG files, layered source files',
    inclusions: ['Double-sided layout optimization', 'Creative layout composition', 'Print bleed setups matching industry standards', 'Commercial license rights'],
    requirements: ['A5/A4 orientation choice', 'Logo and assets', 'Structured text sections and details', 'Reference design styles if any']
  },
  'logo-design': {
    desc: 'Bespoke brand logo design that conveys your company values and identity. We develop clean, modern, scalable vector logos that represent your brand authority.',
    turnaround: '3–5 Business Days',
    formats: 'Fully editable vector AI, EPS, SVG, transparent PNG logo formats, and monochrome versions',
    inclusions: ['3 unique logo concepts to choose from', 'Unlimited layout adjustments on selected concept', 'Full copyright ownership transfer', 'Color theme specifications'],
    requirements: ['Company name & optional tagline', 'Niche, industry, and target market description', 'Logo styles liked (e.g. minimalist, bold, vintage)', 'Brand vibe descriptors (e.g. professional, friendly)']
  },
  'visiting-card-design': {
    desc: 'Premium business card designs that leave a lasting first impression. Optimized for digital networking cards or physical print finishes.',
    turnaround: '48 Hours',
    formats: 'Print-Ready PDF with bleed marks, vector AI/PSD source files',
    inclusions: ['Front & back side layout mapping', 'Standard sizing (3.5" x 2.0") or custom dimensions', 'Setup for special finishes (e.g., spot UV, foil)', 'Unlimited contact information variations'],
    requirements: ['Vcard details (name, title, contact info)', 'Logo files (transparent background)', 'Brand brand guide / style guide (optional)', 'Preferred paper texture / finish type']
  },
  'ppt-presentation-design': {
    desc: 'High-converting presentation slide decks structured to convince investors, pitch new business clients, or deliver corporate training seminars.',
    turnaround: '3–5 Business Days',
    formats: 'Editable Microsoft PowerPoint (PPTX) format, Keynote layout, or interactive PDF brochure',
    inclusions: ['Tailored visual layout matching brand identity', 'Custom data visualization charts and timelines', 'Royalty-free graphic assets and iconography', 'Slide transitions & basic animations setup'],
    requirements: ['Raw presentation outlines / text content per slide', 'Brand style guide and logo assets', 'Goal of the deck (investor pitch, training, etc.)', 'Reference templates (optional)']
  },
  'product-label-design': {
    desc: 'Eye-catching labels for jars, bottles, pouches, or boxes designed to dominate retail shelves and make your products irresistible.',
    turnaround: '3–4 Business Days',
    formats: 'Vetted commercial print-ready PDFs, Die-cut outline maps, editable vector layout source files',
    inclusions: ['Die-cut layout matching product bottles/boxes', 'Regulatory info barcode layout placements', '3D high-resolution product mockup render', 'Up to 3 revisions cycles'],
    requirements: ['Dieline drawing sheet from the packaging manufacturer', 'Brand logo and colors', 'Detailed copywriting (ingredients, directions, barcode)', 'Container dimensions and product category']
  },
  'restaurant-menu-design': {
    desc: 'Appetizing themed restaurant menu layouts, digital TV menu boards, room service directories, and promotional tent cards designed to optimize food order volumes.',
    turnaround: '2–3 Business Days',
    formats: 'Print-Ready PDF, layered Photoshop/Illustrator layout files, digital menu layout',
    inclusions: ['Appetizing categorization layout', 'Custom font styling for food item readability', 'Dish allergen / dietary symbol system mapping', 'Commercial royalty-free stock food images'],
    requirements: ['Dish menu list with descriptions and exact pricing', 'Restaurant logo vectors', 'Preferred theme style (rustic, modern, classic)', 'Menu sizing parameters']
  },
  'infographic-design': {
    desc: 'Information-packed layouts that turn boring stats, timelines, and guides into highly visual, shareable infographic assets.',
    turnaround: '3 Business Days',
    formats: 'High-res JPG/PNG, vector AI source layout, printable PDF brochure',
    inclusions: ['Custom vector illustrations and timeline models', 'Step-by-step logical layout mapping', 'Structured color palettes matching data priority', 'Royalty-free icons'],
    requirements: ['Raw statistics, lists, data points, or articles', 'Corporate style rules and palette', 'Target canvas width / height size settings', 'Goal of the infographic']
  }
};



export const GraphicItemDetailPage: React.FC<GraphicItemDetailPageProps> = ({ itemId, onNavigate, onOpenStrategyModal: _onOpenStrategyModal }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemId]);

  // Find the item details from graphicDesignPricingData
  let matchedItem: { name: string; price: string } | null = null;
  let matchedCategory: { title: string; subtitle: string } | null = null;

  for (const cat of graphicDesignPricingData) {
    const item = cat.items.find(i => {
      const slug = i.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      return slug === itemId;
    });
    if (item) {
      matchedItem = item;
      matchedCategory = cat;
      break;
    }
  }

  // Fallback match helper if exact match slug is missing
  if (!matchedItem) {
    for (const cat of graphicDesignPricingData) {
      const item = cat.items.find(i => i.name.toLowerCase().includes(itemId.toLowerCase()) || itemId.toLowerCase().includes(i.name.toLowerCase()));
      if (item) {
        matchedItem = item;
        matchedCategory = cat;
        break;
      }
    }
  }

  // Get explanation overrides or category defaults
  const customDesc = matchedItem ? (customExplanations[itemId]?.desc || `Professional design service for custom ${matchedItem.name} collateral. Visually engineered to support brand identity and business marketing goals. Setup according to standard industrial formatting specifications.`) : '';

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!matchedItem) return;

    const pageTitle = `${matchedItem.name} Design Services | The Growth Purpose`;
    const pageDesc = customDesc;
    const canonicalUrl = `https://thegrowthpurpose.com/graphic-design/${itemId}`;

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', pageDesc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', canonicalUrl);

    // Dynamic Product & Breadcrumb JSON-LD Schema
    const scriptId = 'graphic-item-detail-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          "name": matchedItem.name,
          "description": pageDesc,
          "provider": {
            "@type": "Organization",
            "name": "The Growth Purpose",
            "url": "https://thegrowthpurpose.com"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${canonicalUrl}#breadcrumb`,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thegrowthpurpose.com/" },
            { "@type": "ListItem", "position": 2, "name": "Graphic Design", "item": "https://thegrowthpurpose.com/graphic-design" },
            { "@type": "ListItem", "position": 3, "name": matchedItem.name, "item": canonicalUrl }
          ]
        }
      ]
    };
    script.text = JSON.stringify(schemaData);
  }, [itemId, matchedItem, customDesc]);

  if (!matchedItem || !matchedCategory) {
    return (
      <div style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: '#1F1F24', minHeight: '80vh' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'Outfit, serif', fontSize: '2.5rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.5rem' }}>
            Design Domain Not Found
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginBottom: '2rem' }}>
            The requested design service details page is invalid or has been updated.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => onNavigate('services')}
            style={{ borderRadius: '999px', padding: '0.9rem 2.2rem' }}
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  // Get explanation overrides or category defaults
  const customData = customExplanations[itemId] || {
    desc: customDesc,
    turnaround: matchedCategory.title.includes('Multi-Page') || matchedCategory.title.includes('Large-Format') ? '3–5 Days' : '48 Hours',
    formats: 'Layered source files (AI/PSD), Print-Ready PDF with bleed Setup, high-resolution JPG & PNG files',
    inclusions: ['Bespoke layout configuration', 'Custom typographic layout setup', 'Up to 3 revision iteration cycles', 'Commercial copyright license rights'],
    requirements: ['Project goal & reference styles', 'Vector brand logos and brand guide', 'Core copy texts and layout outlines', 'Specified layout dimensions']
  };

  const whatsappLink = "https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services";

  return (
    <div style={{ backgroundColor: '#1F1F24', minHeight: '100vh', padding: '2rem 0 6.5rem 0' }}>
      <div className="container" style={{ maxWidth: '1350px' }}>
        
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '1.5rem' }}>
          <a href="/" style={{ color: '#6D4AFF', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a> /{' '}
          <a href="/services" style={{ color: '#6D4AFF', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Services</a> /{' '}
          <a href="/graphic-design" style={{ color: '#6D4AFF', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); onNavigate('graphic-details'); }}>Graphic Design</a> /{' '}
          <span style={{ color: '#FFFFFF', fontWeight: 700 }}>{matchedItem.name}</span>
        </div>

        {/* Back / Close button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={() => {
              // If this tab was opened via window.open(), close it to return to original tab
              if (window.opener && !window.opener.closed) {
                window.close();
              } else {
                onNavigate('graphic-details');
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#FFFFFF',
              backgroundColor: '#16161D',
              border: '1px solid rgba(109, 74, 255, 0.35)',
              padding: '0.6rem 1.25rem',
              borderRadius: '999px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6D4AFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#16161D';
            }}
          >
            ← Close & Go Back
          </button>
        </div>

        {/* Hero Section Card - Clean Typography & Specification Layout */}
        <div style={{ 
          background: '#1F1F24', 
          borderTop: '4px solid #6D4AFF', 
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRight: '1px solid rgba(255, 255, 255, 0.1)', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
          borderRadius: '24px', 
          padding: '3.5rem 3rem', 
          marginBottom: '2.5rem', 
          boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
        }}>
          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', background: 'rgba(109, 74, 255, 0.2)', border: '1px solid rgba(109, 74, 255, 0.35)', padding: '0.35rem 1rem', borderRadius: '999px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#B89CFF', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {matchedCategory.title}
              </span>
            </div>

            <h1 style={{ fontFamily: 'Outfit, serif', fontSize: '3.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              {matchedItem.name}
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '850px', margin: '0 auto 2.5rem auto' }}>
              {customData.desc}
            </p>

            {/* Quick Specs Cards Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1.5rem', 
              background: '#16161D', 
              border: '1px solid rgba(109, 74, 255, 0.25)', 
              borderRadius: '20px', 
              padding: '2rem 1.5rem', 
              marginBottom: '2.5rem',
              textAlign: 'center'
            }} className="graphics-pricing-grid">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Turnaround Time</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#FFFFFF', marginTop: '0.35rem', fontFamily: 'Outfit, sans-serif' }}>{customData.turnaround}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', borderRight: '1px solid rgba(255, 255, 255, 0.1)', padding: '0 1rem' }}>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Deliverable Formats</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FFFFFF', marginTop: '0.35rem', lineHeight: 1.4 }}>{customData.formats}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontSize: '0.75rem', color: '#CBD5E1', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Design Quality</div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 900, color: '#B89CFF', marginTop: '0.35rem' }}>
                  100% Vector
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#6D4AFF',
                  color: '#FFFFFF',
                  padding: '0.95rem 2.2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(109, 74, 255, 0.45)',
                  transition: 'all 0.25s ease'
                }}
              >
                Order on WhatsApp 💬
              </a>
              <button
                onClick={() => {
                  window.open("https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services", '_blank');
                }}
                style={{
                  backgroundColor: '#16161D',
                  color: '#FFFFFF',
                  border: '1px solid rgba(109, 74, 255, 0.35)',
                  padding: '0.95rem 2.2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6D4AFF';
                  e.currentTarget.style.borderColor = '#B89CFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#16161D';
                  e.currentTarget.style.borderColor = 'rgba(109, 74, 255, 0.35)';
                }}
              >
                Discuss Custom Quote →
              </button>
            </div>
          </div>
        </div>

        {/* Deliverables & Requirements Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '4.5rem' }} className="graphics-info-blocks">
          
          {/* Deliverables list */}
          <div style={{ background: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.25)', borderRadius: '24px', padding: '2.25rem 2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>
              📦 What is Included / Deliverables
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {customData.inclusions.map((inc, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '0.6rem', fontSize: '0.925rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                  <span style={{ color: '#6D4AFF', fontWeight: 900 }}>✓</span>
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements list */}
          <div style={{ background: '#1F1F24', border: '1px solid rgba(109, 74, 255, 0.25)', borderRadius: '24px', padding: '2.25rem 2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>
              📋 What We Need From You
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: 0 }}>
              {customData.requirements.map((req, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'start', gap: '0.6rem', fontSize: '0.925rem', color: '#CBD5E1', lineHeight: 1.5 }}>
                  <span style={{ color: '#6D4AFF', fontWeight: 900 }}>➜</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global CTA Consultation Banner */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1F1F28 0%, #151322 100%)', 
          borderRadius: '28px', 
          padding: '3.5rem 3rem', 
          color: '#FFFFFF', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: '2rem', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)', 
          border: '1px solid rgba(109, 74, 255, 0.3)', 
          flexWrap: 'wrap' 
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(109, 74, 255, 0.2)', border: '1px solid rgba(109, 74, 255, 0.35)', color: '#B89CFF', borderRadius: '999px', padding: '0.35rem 0.9rem', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              TRANSPARENT CREATIVE ENGINE
            </div>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Interested in a Monthly Design Retainer?
            </h3>
            <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.6 }}>
              Unlock flat-rate agency graphic assets, logo branding, packaging setups, and custom templates with unlimited revisions. Tailored for scalable teams.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.95rem 2.2rem', backgroundColor: '#6D4AFF', color: '#FFFFFF', borderRadius: '999px', fontWeight: 800, textDecoration: 'none', boxShadow: '0 8px 25px rgba(109, 74, 255, 0.45)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>Contact on WhatsApp 💬</span>
              <span>➔</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};




