'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguagePill } from '@/components/ui/LanguagePill';
import { Button } from '@/components/ui/Button';

export function Header() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FCFDFB]/90 backdrop-blur-md border-b border-[rgba(11,43,52,0.12)]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0" aria-label="Zemed Plus Home">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src="/assets/logo/zemed-logo.png"
              alt="Zemed Plus Logo"
              width={100}
              height={100}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <span className="font-['Sora',sans-serif] font-bold text-lg sm:text-[1.25rem] text-[#0B2B34] tracking-tight whitespace-nowrap">
            Zemed<em className="not-italic text-[#1E7A54]">Plus</em>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[0.92rem] font-medium text-[#4C6169]">
          <a href="#features" className="hover:text-[#0B2B34] transition-colors">
            {t.nav.features}
          </a>
          <a href="#how" className="hover:text-[#0B2B34] transition-colors">
            {t.nav.how}
          </a>
          <a href="#screens" className="hover:text-[#0B2B34] transition-colors">
            {t.nav.screens}
          </a>
          <a href="#download" className="hover:text-[#0B2B34] transition-colors">
            {t.nav.download}
          </a>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguagePill labels={{ en: 'EN', hi: 'हिं' }} />

          <div className="hidden sm:inline-flex">
            <Button href="#download" variant="primary">
              {t.nav.getApp}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-[#0B2B34] hover:bg-black/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFDFB] border-b border-[rgba(11,43,52,0.12)] px-6 py-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#features"
            className="py-2 text-[0.95rem] font-medium text-[#4C6169] hover:text-[#0B2B34]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.features}
          </a>
          <a
            href="#how"
            className="py-2 text-[0.95rem] font-medium text-[#4C6169] hover:text-[#0B2B34]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.how}
          </a>
          <a
            href="#screens"
            className="py-2 text-[0.95rem] font-medium text-[#4C6169] hover:text-[#0B2B34]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.screens}
          </a>
          <a
            href="#download"
            className="py-2 text-[0.95rem] font-medium text-[#4C6169] hover:text-[#0B2B34]"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.nav.download}
          </a>
          <div className="pt-2 sm:hidden">
            <Button href="#download" variant="primary" className="w-full">
              {t.nav.getApp}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

