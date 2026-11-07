'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export function BilingualSection() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <section id="bilingual" className="py-12 sm:py-20 lg:py-28 bg-[#FCFDFB] overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Interactive Toggle */}
          <div className="flex flex-col items-start z-10 w-full">
            <div className="eyebrow mb-3 sm:mb-4">{t.bilingual.eyebrow}</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2B34] tracking-tight leading-tight mb-3 sm:mb-4 break-words">
              {t.bilingual.title}
            </h2>
            <p className="text-base sm:text-lg text-[#4C6169] leading-relaxed mb-6 sm:mb-7 max-w-lg">
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
          <div id="bilingual-phone-stage" className="relative flex justify-center items-center w-full min-h-[440px] xs:min-h-[475px] sm:min-h-[490px] lg:min-h-[510px]">
            {/* Centered Composition Box */}
            <div className="relative w-[260px] xs:w-[275px] sm:w-[290px] lg:w-full h-[440px] xs:h-[475px] sm:h-[490px] lg:h-[510px] mx-auto lg:mx-0">
              {/* English Phone */}
              <div
                style={{ position: 'absolute' }}
                className={`phone w-[210px] xs:w-[225px] sm:w-[235px] lg:w-[240px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${
                  language === 'en'
                    ? 'right-0 lg:right-auto lg:left-[42%] top-0 z-20 opacity-100 scale-100 shadow-2xl filter-none'
                    : 'left-0 lg:left-[12%] top-5 sm:top-6 z-10 opacity-40 scale-[0.88] origin-top-left lg:origin-center blur-[2px] grayscale-[0.3]'
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
                style={{ position: 'absolute' }}
                className={`phone w-[210px] xs:w-[225px] sm:w-[235px] lg:w-[240px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer ${
                  language === 'hi'
                    ? 'right-0 lg:right-auto lg:left-[42%] top-0 z-20 opacity-100 scale-100 shadow-2xl filter-none'
                    : 'left-0 lg:left-[12%] top-5 sm:top-6 z-10 opacity-40 scale-[0.88] origin-top-left lg:origin-center blur-[2px] grayscale-[0.3]'
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
      </div>
    </section>
  );
}

