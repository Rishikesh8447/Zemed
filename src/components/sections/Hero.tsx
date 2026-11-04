'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/Button';
import { PhoneMockup } from '@/components/ui/PhoneMockup';

export function Hero() {
  const { t, language } = useLanguage();

  const homeScreenshot =
    language === 'hi'
      ? '/assets/screenshots/optimized/Hindi/HomePage.jpeg'
      : '/assets/screenshots/optimized/English/HomePage.jpeg';

  return (
    <section className="pt-12 sm:pt-16 pb-10 bg-[#FCFDFB] overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="flex flex-col items-start z-10">
            <div className="eyebrow mb-4 sm:mb-5">{t.hero.eyebrow}</div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#0B2B34] tracking-tight leading-[1.08] mb-5">
              {t.hero.titleLine1}
              <br />
              {language === 'en' ? (
                <>
                  Skip the{' '}
                  <span className="underline-accent">{t.hero.titleAccent}</span>.
                </>
              ) : (
                <>
                  <span className="underline-accent">{t.hero.titleAccent}</span>{' '}
                  से बचें.
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-[#4C6169] max-w-lg leading-relaxed mb-8">
              {t.hero.lead}
            </p>

            <div className="flex flex-wrap gap-3.5 mb-9 w-full sm:w-auto">
              <Button href="#download" variant="primary" className="w-full sm:w-auto">
                {t.hero.btnBook}
              </Button>
              <Button href="#how" variant="ghost" className="w-full sm:w-auto">
                {t.hero.btnHow}
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[rgba(11,43,52,0.12)] w-full">
              <div>
                <b className="block font-['Sora',sans-serif] text-xl sm:text-2xl font-bold text-[#0B2B34]">
                  {t.hero.statLang}
                </b>
                <span className="text-xs sm:text-[0.82rem] text-[#4C6169] mt-0.5 block">
                  {t.hero.statLangSub}
                </span>
              </div>
              <div>
                <b className="block font-['Sora',sans-serif] text-xl sm:text-2xl font-bold text-[#0B2B34]">
                  {t.hero.statSpecialities}
                </b>
                <span className="text-xs sm:text-[0.82rem] text-[#4C6169] mt-0.5 block">
                  {t.hero.statSpecialitiesSub}
                </span>
              </div>
              <div>
                <b className="block font-['Sora',sans-serif] text-xl sm:text-2xl font-bold text-[#0B2B34]">
                  {t.hero.statWaiting}
                </b>
                <span className="text-xs sm:text-[0.82rem] text-[#4C6169] mt-0.5 block">
                  {t.hero.statWaitingSub}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Showcase Stage */}
          <div className="relative flex justify-center items-center py-10 sm:py-8">
            {/* Ambient decorative blob */}
            <div className="blob" aria-hidden="true" />

            {/* Interactive Phone Frame & Floating Badges */}
            <div id="hero-phone-container" className="relative z-10 w-[275px]">
              {/* Top Floating Badge */}
              <div id="hero-confirmed-badge" className="float-badge -top-5 sm:top-6 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-8 whitespace-nowrap">
                <span className="dot" />
                <span>{t.hero.badgeConfirmed}</span>
              </div>

              <PhoneMockup
                src={homeScreenshot}
                alt={
                  language === 'hi'
                    ? 'ज़ेमेड प्लस हिंदी होम स्क्रीन बेगूसराय'
                    : 'Zemed Plus English Home Screen Begusarai'
                }
                priority
                phoneWidth={275}
              />

              {/* Bottom Floating Badge: anchored to bottom-right of phone container, within phone boundaries, balanced between content and bottom nav */}
              <div
                id="hero-doctor-badge"
                className="float-badge absolute bottom-8 sm:bottom-9 right-2 sm:right-2.5 max-w-[205px] sm:max-w-[215px] flex items-center gap-2 py-1.5 px-2.5 sm:py-2 sm:px-3 text-[0.74rem] sm:text-[0.78rem] shadow-lg border border-[rgba(11,43,52,0.08)] bg-white/95 backdrop-blur-sm z-20"
              >
                <span className="text-sm sm:text-base flex-shrink-0 leading-none">🩺</span>
                <span className="leading-tight text-[#0B2B34] font-semibold break-words">
                  {t.hero.badgeDoctor.replace(/^🩺\s*/, '')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

