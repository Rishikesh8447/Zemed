'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export function ScreenshotGallery() {
  const { t, language } = useLanguage();

  const getScreenImage = (idx: number) => {
    const isHi = language === 'hi';
    switch (idx) {
      case 0:
        return isHi
          ? '/assets/screenshots/optimized/Hindi/Specialities2.jpeg'
          : '/assets/screenshots/optimized/English/Specialities.jpeg';
      case 1:
        return isHi
          ? '/assets/screenshots/optimized/Hindi/BookingPage1.jpeg'
          : '/assets/screenshots/optimized/English/BookingPage2.jpeg';
      case 2:
        return '/assets/screenshots/optimized/English/AppointmentsPage.jpeg';
      case 3:
      default:
        return isHi
          ? '/assets/screenshots/optimized/Hindi/PatientProfilepage.jpeg'
          : '/assets/screenshots/optimized/English/PatientProfilePage.jpeg';
    }
  };

  return (
    <section id="screens" className="py-20 sm:py-24 bg-[#FCFDFB]">
      <div className="wrap">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="eyebrow mb-3.5">{t.screens.eyebrow}</div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2B34] tracking-tight leading-tight">
            {t.screens.title}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.screens.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFDFB] rounded-2xl border border-[rgba(11,43,52,0.12)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
            >
              {/* Image */}
              <div className="relative aspect-[9/18.4] w-full bg-black overflow-hidden">
                <Image
                  src={getScreenImage(idx)}
                  alt={item.alt}
                  fill
                  className="object-cover object-top group-hover:scale-[1.025] transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Label */}
              <div className="py-3.5 px-4 text-xs sm:text-sm font-semibold text-[#0B2B34] bg-[#EEF8F2] border-t border-[rgba(11,43,52,0.12)] tracking-tight">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

