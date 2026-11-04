'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export function Statement() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-28 bg-[#0B2B34] text-[#FCFDFB] text-center relative overflow-hidden">
      <div className="wrap">
        <div className="eyebrow gold justify-center mb-5">
          {t.statement.eyebrow}
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] max-w-3xl mx-auto leading-snug font-semibold tracking-tight text-[#FCFDFB]">
          {t.statement.textBefore}
          <b className="text-[#2F9E6D] font-bold">{t.statement.highlight}</b>
          {t.statement.textAfter}
        </h2>
      </div>
    </section>
  );
}

