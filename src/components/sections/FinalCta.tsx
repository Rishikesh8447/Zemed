'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export function FinalCta() {
  const { t } = useLanguage();

  return (
    <section id="download" className="py-20 sm:py-28 bg-[#EEF8F2]">
      <div className="wrap">
        <div className="rounded-[28px] py-14 px-6 sm:py-16 sm:px-14 bg-[#123E5C] text-white text-center relative overflow-hidden shadow-xl">
          {/* Subtle decorative glow */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#2F9E6D]/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#1D5C8A]/30 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
            <div className="eyebrow justify-center mb-4 text-white/80 before:bg-white/70">
              {t.finalCta.eyebrow}
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-white mb-4 leading-tight">
              {t.finalCta.title}
            </h2>

            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8 max-w-lg">
              {t.finalCta.description}
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.mycompany.mediconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base bg-white text-[#123E5C] hover:bg-[#EEF8F2] hover:-translate-y-0.5 transition-all shadow-md active:translate-y-0"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9997.9993-.9997c.5511 0 .9993.4486.9993.9997s-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4567a.4158.4158 0 00-.1523-.5676.4163.4163 0 00-.5682.1523l-2.0223 3.5024C15.5898 8.4116 13.849 8.082 12 8.082s-3.5898.3296-5.1307.8701L4.847 5.4497a.4162.4162 0 00-.5682-.1523.4157.4157 0 00-.1523.5676l1.996 3.4567C2.6883 11.285 0 14.8587 0 19.011h24c0-4.1523-2.6883-7.726-6.1185-9.6896" />
              </svg>
              <span>{t.finalCta.button}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

