export type Language = 'en' | 'hi';

export interface TranslationDictionary {
  nav: {
    features: string;
    how: string;
    screens: string;
    download: string;
    getApp: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    lead: string;
    btnBook: string;
    btnHow: string;
    statLang: string;
    statLangSub: string;
    statSpecialities: string;
    statSpecialitiesSub: string;
    statWaiting: string;
    statWaitingSub: string;
    badgeConfirmed: string;
    badgeDoctor: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      icon: 'calendar' | 'search' | 'clock' | 'prescription' | 'records' | 'bell';
    }>;
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: Array<{
      stepNumber: string;
      title: string;
      desc: string;
      imageAlt: string;
    }>;
  };
  bilingual: {
    eyebrow: string;
    title: string;
    description: string;
    enButton: string;
    hiButton: string;
    englishAlt: string;
    hindiAlt: string;
  };
  statement: {
    eyebrow: string;
    textBefore: string;
    highlight: string;
    textAfter: string;
  };
  screens: {
    eyebrow: string;
    title: string;
    items: Array<{
      label: string;
      alt: string;
    }>;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    productHeading: string;
    contactHeading: string;
    companyHeading: string;
    privacy: string;
    terms: string;
    allRightsReserved: string;
  };
}

