'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export function BilingualSection() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-[#FCFDFB] overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Interactive Toggle */}
          <div className="flex flex-col items-start z-10">
            <div className="eyebrow mb-4">{t.bilingual.eyebrow}</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2B34] tracking-tight leading-tight mb-4">
              {t.bilingual.title}
            </h2>
            <p className="text-base sm:text-lg text-[#4C6169] leading-relaxed mb-7 max-w-lg">
              {t.bilingual.description}
            </p>

            {/* Interactive Toggle Demo */}
            <div
              className="inline-flex items-center border border-[rgba(11,43,52,0.12)] rounded-full overflow-hidden bg-[#FCFDFB] p-1 shadow-sm"
              role="group"
              aria-label="Interactive bilingual preview switcher"
            >
              <button
                type="button"
                className={`font-['IBM_Plex_Mono',monospace] text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#2F9E6D] text-white shadow-sm'
                    : 'text-[#4C6169] hover:text-[#0B2B34]'
                }`}
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
              >
                {t.bilingual.enButton}
              </button>
              <button
                type="button"
                className={`font-['IBM_Plex_Mono',monospace] text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                  language === 'hi'
                    ? 'bg-[#2F9E6D] text-white shadow-sm'
                    : 'text-[#4C6169] hover:text-[#0B2B34]'
                }`}
                onClick={() => setLanguage('hi')}
                aria-pressed={language === 'hi'}
              >
                {t.bilingual.hiButton}
              </button>
            </div>
          </div>

          {/* Right Column: 3D Overlapping Phone Mockups */}
          <div className="relative flex justify-center items-center min-h-[460px] sm:min-h-[500px]">
            {/* English Phone */}
            <div
              className={`phone w-[220px] sm:w-[240px] absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${
                language === 'en'
                  ? 'left-[36%] sm:left-[42%] top-0 z-20 opacity-100 scale-100 shadow-2xl'
                  : 'left-[10%] sm:left-[12%] top-6 z-10 opacity-40 scale-[0.88] blur-[2px] grayscale-[0.3]'
              }`}
              onClick={() => setLanguage('en')}
              title="Click to view English interface"
            >
              <div className="relative aspect-[9/18.4] w-full bg-black overflow-hidden">
                <Image
                  src="/assets/screenshots/optimized/English/HomePage.jpeg"
                  alt={t.bilingual.englishAlt}
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                />
              </div>
            </div>

            {/* Hindi Phone */}
            <div
              className={`phone w-[220px] sm:w-[240px] absolute transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${
                language === 'hi'
                  ? 'left-[36%] sm:left-[42%] top-0 z-20 opacity-100 scale-100 shadow-2xl'
                  : 'left-[10%] sm:left-[12%] top-6 z-10 opacity-40 scale-[0.88] blur-[2px] grayscale-[0.3]'
              }`}
              onClick={() => setLanguage('hi')}
              title="Click to view Hindi interface"
            >
              <div className="relative aspect-[9/18.4] w-full bg-black overflow-hidden">
                <Image
                  src="/assets/screenshots/optimized/Hindi/HomePage.jpeg"
                  alt={t.bilingual.hindiAlt}
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

