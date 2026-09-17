'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ALL_BLOGS } from '@/data/blogData';
import { ArrowLeft, Clock, Calendar, Sparkles, Tag, BookOpen, ArrowRight } from 'lucide-react';
import { updatePageSeo } from '@/utils/seoManager';

interface BlogPostPageProps {
  slug: string;
  onNavigate?: (page: any, slug?: string) => void;
  onOpenStrategyModal?: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onNavigate }) => {
  const blog = ALL_BLOGS.find(
    (b) =>
      b.slug === slug ||
      b.slug === slug.replace(/^blog_/, '') ||
      b.slug.replace(/-/g, '_') === slug ||
      `blog_${b.slug.replace(/-/g, '_')}` === slug
  );

  useEffect(() => {
    if (blog) {
      updatePageSeo('blog-post', blog.slug, {
        title: blog.title,
        description: blog.excerpt,
      });
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Article Not Found</h2>
        <p className="text-gray-400">The requested article could not be found.</p>
        <button
          onClick={() => onNavigate ? onNavigate('blog') : window.location.assign('/blogs')}
          className="btn-primary text-xs px-5 py-2.5"
        >
          &larr; Back to All Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onNavigate ? onNavigate('blog') : window.location.assign('/blogs')}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </button>
      </div>

      <header className="space-y-4">
        <span className="btn-pill">
          <Sparkles className="w-3.5 h-3.5 text-[#B89CFF]" />
          {blog.category}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
          {blog.title}
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">{blog.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-white/10">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {blog.readTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {blog.date}
          </span>
        </div>
      </header>

      <article className="blog-article-content prose prose-invert max-w-none pt-4 border-t border-white/5">
        <div className="p-6 rounded-2xl bg-[#1F1F24] border border-[#6D4AFF]/20 space-y-4">
          <h3 className="text-xl font-bold text-white">Article Overview & Strategic Insights</h3>
          <p className="text-gray-300 leading-relaxed">
            {blog.excerpt}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {blog.tags.map((t) => (
              <span key={t} className="px-2.5 py-1 rounded-md bg-[#1A0E2E] text-[#B89CFF] text-xs font-semibold">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
