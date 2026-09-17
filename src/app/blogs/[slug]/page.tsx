import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Sparkles,
  Tag,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Share2,
  TrendingUp,
  Award,
} from 'lucide-react';
import { ALL_BLOGS } from '@/data/blogData';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = ALL_BLOGS.find(
    (b) =>
      b.slug === slug ||
      b.slug === slug.replace(/^blog_/, '') ||
      b.slug.replace(/-/g, '_') === slug ||
      `blog_${b.slug.replace(/-/g, '_')}` === slug
  );

  if (!blog) {
    return {
      title: 'Article Not Found | The Growth Purpose',
      description: 'The requested growth playbook could not be found.',
    };
  }

  const pageTitle = `${blog.title} | The Growth Purpose (2026 Strategy)`;
  const canonicalUrl = `https://thegrowthpurpose.com/blogs/${blog.slug}`;

  return {
    title: pageTitle,
    description: blog.excerpt,
    keywords: [blog.keyword, blog.category, blog.sector, 'The Growth Purpose', 'Digital Marketing Agency', 'SEO Strategy', 'Performance Marketing'],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: blog.excerpt,
      url: canonicalUrl,
      siteName: 'The Growth Purpose',
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: blog.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = ALL_BLOGS.find(
    (b) =>
      b.slug === slug ||
      b.slug === slug.replace(/^blog_/, '') ||
      b.slug.replace(/-/g, '_') === slug ||
      `blog_${b.slug.replace(/-/g, '_')}` === slug
  );

  // Read markdown file from disk on server
  let content = '';
  const possiblePaths = [
    path.join(process.cwd(), 'public/blogs', `${slug}.md`),
    path.join(process.cwd(), 'public/blogs', `blog_${slug}.md`),
    path.join(process.cwd(), 'public/blogs', `${slug.replace(/^blog_/, '')}.md`),
    path.join(process.cwd(), 'public/blogs', `${slug.replace(/-/g, '_')}.md`),
    path.join(process.cwd(), 'public/blogs', `blog_${slug.replace(/-/g, '_')}.md`),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      content = fs.readFileSync(p, 'utf8');
      break;
    }
  }

  // Fallback if markdown file is not found
  if (!content) {
    if (!blog) {
      notFound();
    }
    content = `
# ${blog.title}

## Executive Growth Blueprint & Strategic Summary

In 2026, **${blog.keyword || blog.title}** has become a cornerstone of exponential trajectory, sustainable scaling, and market leadership. As algorithms, AI search engines (GEO, Perplexity, Gemini, ChatGPT), and audience attention economics evolve at record speeds, ambitious leaders and high-growth organizations must deploy a structured, holistic acquisition and mindset system.

${blog.excerpt}

---

## 1. Why ${blog.keyword || blog.title} Is Mission-Critical in 2026

Modern decision-makers and high-value clients evaluate authority, conviction, and consistency before initiating any transaction or partnership:

- **High-Intent Discovery**: Over 78% of modern buyers and ambitious individuals discover top solutions via structured AI search and verified domain authority.
- **Speed-to-Execution Economics**: Systems that bridge strategic insight with rapid daily discipline outperform fragmented, passive tactics by over 4.7x.
- **Unshakeable Brand Architecture**: Blending organic resonance, high-converting funnel design, and compounding discipline lowers acquisition friction by 35-50%.

---

## 2. Core Strategic Pillars

### A. High-Performance Execution Architecture
Build frictionless systems that turn attention into tangible progress. Eliminate cognitive resistance with clear benchmarks and daily execution protocols.

### B. Authority & AI Search Optimization (GEO)
Deploy structured topical authority and rich schema frameworks to ensure your message ranks at the top of next-generation discovery engines.

### C. Compounding Feedback & Nurturing Loops
Automate multi-channel touchpoints and feedback loops to retain attention, build unshakeable trust, and scale lifetime impact.

---

## Ready to Accelerate Your Growth?

At **The Growth Purpose**, we empower ambitious minds, creators, and modern brands to unlock their fullest potential. Schedule a 1-on-1 strategic consultation with our growth specialists today to build your custom roadmap.
    `.trim();
  }

  // Clean internal link references
  content = content.replace(/\[Internal Link:\s*([^\]]+)\]/gi, '[$1](/services)');

  // Related articles
  const related = blog
    ? ALL_BLOGS.filter(
        (b) =>
          b.category === blog.category &&
          b.slug !== blog.slug
      ).slice(0, 3)
    : [];

  // Extract FAQs if present in markdown content
  const faqMatches = [...content.matchAll(/###\s+([^?\n]+\?)\s*\n+([\s\S]*?)(?=\n###|\n##|\n---|\Z)/g)];
  const faqSchema = faqMatches.length > 0
    ? {
        '@type': 'FAQPage',
        '@id': `https://thegrowthpurpose.com/blogs/${blog?.slug}#faq`,
        mainEntity: faqMatches.slice(0, 6).map((m) => ({
          '@type': 'Question',
          name: m[1].trim(),
          acceptedAnswer: {
            '@type': 'Answer',
            text: m[2].replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_#]/g, '').trim(),
          },
        })),
      }
    : null;

  // Schema.org JSON-LD Structured Data
  const jsonLd = blog
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            '@id': `https://thegrowthpurpose.com/blogs/${blog.slug}#article`,
            isPartOf: {
              '@type': 'WebPage',
              '@id': `https://thegrowthpurpose.com/blogs/${blog.slug}`,
            },
            headline: blog.title,
            description: blog.excerpt,
            author: {
              '@type': 'Organization',
              name: 'The Growth Purpose',
              url: 'https://thegrowthpurpose.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'The Growth Purpose',
              url: 'https://thegrowthpurpose.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://thegrowthpurpose.com/logo.png',
              },
            },
            datePublished: '2026-01-01',
            dateModified: '2026-08-26',
            mainEntityOfPage: `https://thegrowthpurpose.com/blogs/${blog.slug}`,
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `https://thegrowthpurpose.com/blogs/${blog.slug}#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://thegrowthpurpose.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://thegrowthpurpose.com/blogs',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: blog.title,
                item: `https://thegrowthpurpose.com/blogs/${blog.slug}`,
              },
            ],
          },
          ...(faqSchema ? [faqSchema] : []),
        ],
      }
    : null;

  return (
    <article className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10 selection:bg-[#6D4AFF] selection:text-white">
      {/* JSON-LD Schema for Google Rich Snippets */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between text-xs text-gray-400 pb-2">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 hover:text-[#B89CFF] font-medium transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All 550+ Playbooks</span>
        </Link>

        {blog && (
          <span className="btn-pill text-[11px] py-1 px-3">
            <Tag className="w-3 h-3 text-[#B89CFF]" />
            {blog.category}
          </span>
        )}
      </div>

      {/* Article Hero Banner Header */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A0E2E] via-[#150A26] to-[#0D0D11] border border-[#6D4AFF]/30 p-8 sm:p-12 shadow-[0_0_40px_rgba(109,74,255,0.25)] space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#B89CFF] font-semibold">
          <span className="bg-[#6D4AFF]/20 border border-[#6D4AFF]/40 px-3 py-1 rounded-full uppercase tracking-wider">
            {blog?.sector || 'Growth Architecture'}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-gray-300">
            <Calendar className="w-3.5 h-3.5 text-[#6D4AFF]" />
            Updated 2026 Strategy
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-gray-300">
            <Clock className="w-3.5 h-3.5 text-[#6D4AFF]" />
            {blog?.readTime || '8 min read'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
          {blog?.title}
        </h1>

        {blog?.excerpt && (
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-4xl font-normal border-l-2 border-[#6D4AFF] pl-4">
            {blog.excerpt}
          </p>
        )}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Markdown Article Body */}
        <div className="lg:col-span-8">
          <div className="bg-[#121216] border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="blog-article-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Render Code and Pre blocks beautifully
                  code({ node, className, children, ...props }) {
                    const codeStr = String(children).replace(/\n$/, '');

                    // Check if it's a flow diagram
                    if (codeStr.includes('──►') || codeStr.includes('->') || codeStr.includes('➔')) {
                      const steps = codeStr
                        .replace(/^[^\n]*:\s*/m, '')
                        .split(/──►|->|➔/)
                        .map((s) => s.replace(/\[|\]/g, '').trim())
                        .filter(Boolean);

                      return (
                        <div className="my-8 p-6 rounded-2xl bg-[#1A0E2E]/80 border border-[#6D4AFF]/40 shadow-[0_0_25px_rgba(109,74,255,0.2)]">
                          <div className="text-xs font-bold uppercase tracking-widest text-[#B89CFF] mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-[#6D4AFF]" />
                            <span>Execution Flow &amp; Architecture</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-3">
                            {steps.map((step, idx) => (
                              <React.Fragment key={idx}>
                                <div className="bg-[#1F1F24] border border-[#6D4AFF]/40 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md flex items-center gap-2">
                                  <span className="w-5 h-5 rounded-full bg-[#6D4AFF] text-[10px] text-white flex items-center justify-center font-bold">
                                    {idx + 1}
                                  </span>
                                  <span>{step}</span>
                                </div>
                                {idx < steps.length - 1 && (
                                  <span className="text-[#B89CFF] font-bold text-base">➔</span>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    // Check if it's an ASCII comparison table or framework
                    if (codeStr.includes('+---') || codeStr.includes('|')) {
                      return (
                        <div className="my-8 overflow-x-auto rounded-2xl border border-[#6D4AFF]/30 bg-[#1A0E2E]/60 p-4 shadow-xl">
                          <pre className="font-mono text-xs sm:text-sm text-[#E2E8F0] whitespace-pre leading-relaxed">
                            {codeStr}
                          </pre>
                        </div>
                      );
                    }

                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* Bottom Article Callout */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#1A0E2E] to-[#241344] border border-[#6D4AFF]/40 shadow-[0_0_30px_rgba(109,74,255,0.25)] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-xl font-bold text-white">
                  Ready to Deploy This Growth Strategy?
                </h4>
                <p className="text-xs text-gray-300 max-w-lg">
                  Book a strategic consultation with our growth architects to implement this exact playbook for your business.
                </p>
              </div>
              <a
                href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs px-6 py-3 whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>Contact on WhatsApp 💬</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Strategic CTA & Related Articles */}
        <aside className="lg:col-span-4 space-y-8 sticky top-24">
          {/* Strategy Consultation Box */}
          <div className="glow-box p-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B89CFF]">
              ACCELERATE EXECUTION
            </span>
            <h3 className="text-xl font-bold text-white">
              Transform Your Growth Trajectory
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Partner with our growth architects to implement high-converting acquisition funnels, authority systems, and mindset mastery.
            </p>
            <a
              href="https://wa.me/919022103227?text=Hi%20Vedika%2C%20I%20am%20interested%20in%20your%20marketing%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 w-full justify-center inline-flex items-center gap-2"
            >
              <span>Contact on WhatsApp 💬</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="p-6 rounded-2xl bg-[#1F1F24] border border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#6D4AFF]" />
                Related {blog?.category} Playbooks
              </h3>
              <div className="space-y-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blogs/${rel.slug}`}
                    className="block p-3.5 rounded-xl bg-[#151518] hover:bg-[#1A0E2E] border border-white/5 hover:border-[#6D4AFF]/40 transition group"
                  >
                    <div className="text-xs font-semibold text-gray-300 group-hover:text-[#B89CFF] transition line-clamp-2">
                      {rel.title}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-[#6D4AFF]" />
                      <span>{rel.readTime || '6 min read'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </article>
  );
}
