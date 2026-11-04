'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export function HowItWorks() {
  const { t, language } = useLanguage();

  const getStepImage = (stepIndex: number) => {
    const isHi = language === 'hi';
    switch (stepIndex) {
      case 0:
        return isHi
          ? '/assets/screenshots/optimized/Hindi/HomePage.jpeg'
          : '/assets/screenshots/optimized/English/HomePage.jpeg';
      case 1:
        return isHi
          ? '/assets/screenshots/optimized/Hindi/Specialities.jpeg'
          : '/assets/screenshots/optimized/English/Specialities.jpeg';
      case 2:
        return isHi
          ? '/assets/screenshots/optimized/Hindi/BookingPage1.jpeg'
          : '/assets/screenshots/optimized/English/BookingPage1.jpeg';
      case 3:
      default:
        return '/assets/screenshots/optimized/English/AppointmentsPage.jpeg';
    }
  };

  return (
    <section id="how" className="py-20 sm:py-24 bg-[#EEF8F2]">
      <div className="wrap">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="eyebrow mb-3.5">{t.howItWorks.eyebrow}</div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2B34] tracking-tight leading-tight mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4C6169] leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#FCFDFB] rounded-2xl border border-[rgba(11,43,52,0.12)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              {/* Screen Preview */}
              <div className="relative aspect-[9/17] w-full overflow-hidden bg-black border-b border-[rgba(11,43,52,0.12)]">
                <Image
                  src={getStepImage(idx)}
                  alt={step.imageAlt}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Caption */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#1E7A54] font-semibold tracking-wider">
                  {step.stepNumber}
                </span>
                <h3 className="font-['Sora',sans-serif] text-base font-semibold text-[#0B2B34] mt-2 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4C6169] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

