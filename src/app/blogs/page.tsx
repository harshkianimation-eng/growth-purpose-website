'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Search, Sparkles, BookOpen, Clock, ArrowRight, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_BLOGS, BV_CATEGORIES } from '@/data/blogData';
import { updatePageSeo } from '@/utils/seoManager';

const POSTS_PER_PAGE = 12;

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    updatePageSeo('blog');
  }, []);

  const filteredBlogs = useMemo(() => {
    return ALL_BLOGS.filter((blog) => {
      if (!blog) return false;

      const cat = (blog.category || '').toLowerCase();
      const tags = Array.isArray(blog.tags) ? blog.tags : [];
      const selCat = selectedCategory.toLowerCase();

      const matchesCategory =
        selectedCategory === 'All' ||
        cat === selCat ||
        tags.some((t) => (t || '').toLowerCase() === selCat);

      const q = searchQuery.toLowerCase().trim();
      const title = (blog.title || '').toLowerCase();
      const excerpt = (blog.excerpt || '').toLowerCase();
      const keyword = (blog.keyword || '').toLowerCase();

      const matchesSearch =
        !q ||
        title.includes(q) ||
        excerpt.includes(q) ||
        keyword.includes(q) ||
        tags.some((t) => (t || '').toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE) || 1;
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2">
          <span className="btn-pill">
            <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
            GROWTH INTELLIGENCE &amp; PLAYBOOKS
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Practical tips, deep <span className="text-[#6D4AFF]">insights</span> and frameworks.
        </h1>
        <p className="text-gray-400 text-base sm:text-lg">
          Explore 550+ comprehensive growth playbooks, mindset frameworks, search optimization strategies, and high-performance blueprints.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="space-y-6 mb-12">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-[#B89CFF] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by topic, industry, keyword or question..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-[#1F1F24] border border-[#6D4AFF]/30 focus:border-[#6D4AFF] rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-gray-400 outline-none shadow-xl transition"
          />
        </div>

        {/* Category Carousel Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin justify-start">
          {BV_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-[#6D4AFF] text-white shadow-glow'
                  : 'bg-[#1F1F24] text-gray-400 hover:text-white hover:bg-[#282830] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-6 pb-2 border-b border-white/10">
        <div>
          Showing <span className="text-white font-semibold">{filteredBlogs.length}</span> articles
          {selectedCategory !== 'All' && (
            <span> in <strong className="text-[#B89CFF]">{selectedCategory}</strong></span>
          )}
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
      </div>

      {/* Blog Cards Grid */}
      {currentBlogs.length === 0 ? (
        <div className="text-center py-16 bg-[#1F1F24] rounded-2xl border border-white/5 space-y-3">
          <BookOpen className="w-10 h-10 text-[#6D4AFF] mx-auto opacity-60" />
          <h3 className="text-lg font-bold text-white">No matching playbooks found</h3>
          <p className="text-sm text-gray-400">Try searching for a different keyword or resetting your filter.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="btn-secondary text-xs px-4 py-2 mt-2"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug.replace(/^strategy\//, '')}`}
              className="glow-box p-6 flex flex-col justify-between group hover:no-underline"
            >
              <div className="space-y-4">
                {/* Visual Banner Header */}
                <div
                  className="w-full h-44 rounded-xl flex items-center justify-center p-4 text-center relative overflow-hidden"
                  style={{
                    background:
                      blog.imageColor ||
                      'linear-gradient(135deg, #1A0E2E 0%, #2D1656 100%)',
                  }}
                >
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                  <div className="relative z-10 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B89CFF] bg-[#0D0D11]/60 px-2.5 py-1 rounded-full border border-white/10">
                      {blog.sector || blog.category}
                    </span>
                    <div className="text-xs font-bold text-white/90 line-clamp-2 px-2 mt-1">
                      {blog.keyword}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="text-[#B89CFF] font-semibold">{blog.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#B89CFF] transition line-clamp-2 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-gray-400 font-medium">{blog.date}</span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#B89CFF] group-hover:text-white transition">
                  Read Playbook <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl bg-[#1F1F24] border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#6D4AFF] transition"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm font-semibold text-gray-300 px-4">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl bg-[#1F1F24] border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#6D4AFF] transition"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
