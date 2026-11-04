'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

interface LanguagePillProps {
  className?: string;
  labels?: {
    en: string;
    hi: string;
  };
}

export function LanguagePill({ className = '', labels = { en: 'EN', hi: 'हिं' } }: LanguagePillProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`lang-pill ${className}`} role="group" aria-label="Language selection">
      <button
        type="button"
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        {labels.en}
      </button>
      <button
        type="button"
        className={`lang-btn ${language === 'hi' ? 'active' : ''}`}
        onClick={() => setLanguage('hi')}
        aria-pressed={language === 'hi'}
      >
        {labels.hi}
      </button>
    </div>
  );
}
