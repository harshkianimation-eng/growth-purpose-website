'use client';

import React from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <h2 className="text-3xl font-bold text-white">Something went wrong</h2>
      <p className="text-gray-400 text-sm max-w-md">
        An unexpected error occurred while loading this page.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="btn-primary text-sm px-6 py-2.5"
        >
          Try Again
        </button>
        <Link href="/" className="btn-secondary text-sm px-6 py-2.5">
          Go Home
        </Link>
      </div>
    </div>
  );
}
