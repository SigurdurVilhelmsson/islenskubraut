'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCategoryById } from '@/data';
import { Level } from '@/data/types';
import LevelSelector from '@/components/LevelSelector';
import SpjaldPreview from '@/components/SpjaldPreview';
import DownloadButton from '@/components/DownloadButton';

export default function SpjaldPage() {
  const params = useParams();
  const flokkur = params.flokkur as string;
  const category = getCategoryById(flokkur);
  const [level, setLevel] = useState<Level>('A1');

  if (!category) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Flokkur fannst ekki
        </h1>
        <p className="text-gray-600 mb-8">
          Þessi flokkur er ekki til. Veldu annan flokk af forsíðunni.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Til baka
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Allir flokkar
        </Link>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        <div
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-white"
          style={{ backgroundColor: category.color }}
        >
          <span className="text-3xl">{category.icon}</span>
          <h1 className="text-2xl font-bold">{category.name}</h1>
        </div>
        <p className="text-gray-600">{category.description}</p>
      </div>

      {/* Level selector */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Veldu erfiðleikastig
        </h2>
        <LevelSelector selected={level} onChange={setLevel} color={category.color} />
      </div>

      {/* Download button */}
      <div className="mb-10">
        <DownloadButton
          categoryId={category.id}
          level={level}
          color={category.color}
        />
      </div>

      {/* Preview */}
      <div className="max-w-lg mx-auto">
        <SpjaldPreview category={category} level={level} />
      </div>
    </div>
  );
}
