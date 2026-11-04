import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Privacy Policy — Zemed Plus',
  description:
    'This Privacy Policy explains how Zemed Plus collects, uses, and safeguards your personal and medical information across our patient and doctor applications.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FCFDFB]/92 backdrop-blur-md border-b border-[rgba(11,43,52,0.12)]">
        <div className="max-w-[1180px] mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group" aria-label="Zemed Plus Home">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/assets/logo/zemed-logo.png"
                alt="Zemed Plus logo"
                width={100}
                height={100}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-['Sora',sans-serif] font-bold text-xl sm:text-[1.25rem] text-[#0B2B34] tracking-tight">
              Zemed<em className="not-italic text-[#1E7A54]">Plus</em>
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold text-sm text-[#1D5C8A] py-2 px-4 rounded-lg border border-[rgba(11,43,52,0.12)] hover:border-[#1D5C8A] hover:bg-[#EEF8F2] transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Legal Banner */}
      <section className="py-14 sm:py-16 bg-[radial-gradient(600px_300px_at_50%_0%,#EEF8F2_0%,transparent_70%)] border-b border-[rgba(11,43,52,0.12)] mb-10 sm:mb-12">
        <div className="max-w-[920px] mx-auto px-6 sm:px-8">
          <span className="font-['IBM_Plex_Mono',monospace] text-xs font-semibold uppercase tracking-[0.14em] text-[#1E7A54] mb-3 block">
            📄 Legal &amp; Transparency
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0B2B34] font-['Sora',sans-serif] tracking-tight mb-3.5">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-[#4C6169] max-w-3xl leading-relaxed">
            Welcome to <strong>ZEmed+</strong>. We value your trust and are committed to protecting your personal and medical data. This Privacy Policy explains how we collect, use, and safeguard your information across both the Patient and Doctor applications.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <main className="max-w-[920px] mx-auto px-6 sm:px-8 pb-8 flex-grow">
        {/* Card 01 */}
        <article className="bg-white border border-[rgba(11,43,52,0.12)] rounded-[20px] p-7 sm:p-10 mb-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl sm:text-2xl font-bold text-[#123E5C] font-['Sora',sans-serif] pb-3 mb-5 border-b border-[rgba(11,43,52,0.12)] flex items-center gap-3">
            <span className="bg-[#EEF8F2] text-[#1E7A54] font-['IBM_Plex_Mono',monospace] text-sm font-semibold w-8 h-8 rounded-full inline-flex items-center justify-center flex-shrink-0">
              01
            </span>
            Information We Collect
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                For Patients
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                We collect your name, mobile number, age, gender, location data, and any medical records, symptoms, or prescriptions you upload to the platform.
              </p>
            </li>
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                For Doctors &amp; Clinics
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                We collect your name, professional qualifications, medical council registration numbers, clinic/hospital details, photos, and identity proofs for onboarding and verification.
              </p>
            </li>
          </ul>
        </article>

        {/* Card 02 */}
        <article className="bg-white border border-[rgba(11,43,52,0.12)] rounded-[20px] p-7 sm:p-10 mb-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl sm:text-2xl font-bold text-[#123E5C] font-['Sora',sans-serif] pb-3 mb-5 border-b border-[rgba(11,43,52,0.12)] flex items-center gap-3">
            <span className="bg-[#EEF8F2] text-[#1E7A54] font-['IBM_Plex_Mono',monospace] text-sm font-semibold w-8 h-8 rounded-full inline-flex items-center justify-center flex-shrink-0">
              02
            </span>
            How We Use Your Data
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Location Services
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                We access your device&apos;s location to find nearby doctors, clinics, or hospitals and to calculate accurate arrival times for our &quot;Zero Waiting&quot; system.
              </p>
            </li>
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Medical Data Encryption
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                Any medical history or health records uploaded by patients are strictly encrypted and visible only to the specific doctor you book an appointment with.
              </p>
            </li>
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                No Third-Party Sharing
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                We do not sell, trade, or share your sensitive medical or personal information with any third-party marketing agencies.
              </p>
            </li>
          </ul>
        </article>

        {/* Card 03 */}
        <article className="bg-white border border-[rgba(11,43,52,0.12)] rounded-[20px] p-7 sm:p-10 mb-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl sm:text-2xl font-bold text-[#123E5C] font-['Sora',sans-serif] pb-3 mb-5 border-b border-[rgba(11,43,52,0.12)] flex items-center gap-3">
            <span className="bg-[#EEF8F2] text-[#1E7A54] font-['IBM_Plex_Mono',monospace] text-sm font-semibold w-8 h-8 rounded-full inline-flex items-center justify-center flex-shrink-0">
              03
            </span>
            Data Retention and Deletion
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                User Data Control
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                Users retain full control over their data. If you choose to delete your account, all personal profile data and uploaded documents will be permanently wiped from our secure servers within 30 days of the request.
              </p>
            </li>
          </ul>
        </article>

        {/* Card 04 */}
        <article className="bg-white border border-[rgba(11,43,52,0.12)] rounded-[20px] p-7 sm:p-10 mb-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl sm:text-2xl font-bold text-[#123E5C] font-['Sora',sans-serif] pb-3 mb-5 border-b border-[rgba(11,43,52,0.12)] flex items-center gap-3">
            <span className="bg-[#EEF8F2] text-[#1E7A54] font-['IBM_Plex_Mono',monospace] text-sm font-semibold w-8 h-8 rounded-full inline-flex items-center justify-center flex-shrink-0">
              04
            </span>
            Children&apos;s Privacy
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Age Restrictions &amp; Parental Supervision
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                ZEmed+ does not knowingly collect data from individuals below 18 years of age. Users below 18 should use the platform only under parent/guardian supervision.
              </p>
            </li>
          </ul>
        </article>

        <div className="mt-10 mb-14 text-center font-['IBM_Plex_Mono',monospace] text-sm text-[#4C6169]">
          Effective Date: July 2026 · ZEmed+ Data Protection Team
        </div>
      </main>

      <Footer />
    </>
  );
}
