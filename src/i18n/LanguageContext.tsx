'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';
import { Language, TranslationDictionary } from '@/types';
import { translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('zemed-language-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('zemed-language-change', callback);
  };
}

function getSnapshot(): Language {
  try {
    const saved = localStorage.getItem('zemed_lang');
    return saved === 'hi' ? 'hi' : 'en';
  } catch {
    return 'en';
  }
}

function getServerSnapshot(): Language {
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem('zemed_lang', lang);
      window.dispatchEvent(new Event('zemed-language-change'));
    } catch {
      // Ignore storage errors in restricted modes
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
