'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'calendar':
        return (
          <svg className="w-5 h-5 stroke-white fill-none stroke-[1.8]" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4M8 14l2.5 2.5L16 11" />
          </svg>
        );
      case 'search':
        return (
          <svg className="w-5 h-5 stroke-white fill-none stroke-[1.8]" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        );
      case 'clock':
        return (
          <svg className="w-5 h-5 stroke-white fill-none stroke-[1.8]" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18M9 15h6" />
          </svg>
        );
      case 'prescription':
        return (
          <svg className="w-5 h-5 stroke-white fill-none stroke-[1.8]" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6M9 13h6M9 17h6" />
          </svg>
        );
      case 'records':
        return (
          <svg className="w-5 h-5 stroke-white fill-none stroke-[1.8]" viewBox="0 0 24 24">
            <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.5 4.5 4.5 8.5C19 16.65 12 21 12 21z" />
          </svg>
        );
      case 'bell':
      default:
        return (
          <svg className="w-5 h-5 stroke-white fill-none stroke-[1.8]" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3.5 2" />
          </svg>
        );
    }
  };

  return (
    <section id="features" className="py-20 sm:py-24 bg-[#FCFDFB]">
      <div className="wrap">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="eyebrow mb-3.5">{t.features.eyebrow}</div>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0B2B34] tracking-tight leading-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg text-[#4C6169] leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(11,43,52,0.12)] border border-[rgba(11,43,52,0.12)] rounded-2xl overflow-hidden shadow-sm">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FCFDFB] p-7 sm:p-8 flex flex-col gap-3.5 hover:bg-[#EEF8F2] transition-colors duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#2F9E6D] shadow-sm group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="font-['Sora',sans-serif] text-lg font-semibold text-[#0B2B34] mt-1">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-[0.92rem] text-[#4C6169] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

