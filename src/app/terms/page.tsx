import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Terms & Conditions — Zemed Plus',
  description:
    'Terms and Conditions for accessing or using the Zemed Plus website and mobile application services.',
};

export default function TermsPage() {
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
            📋 Service Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0B2B34] font-['Sora',sans-serif] tracking-tight mb-3.5">
            Terms &amp; Conditions
          </h1>
          <p className="text-base sm:text-lg text-[#4C6169] max-w-3xl leading-relaxed">
            Welcome to <strong>ZEmed+</strong>. By accessing or using our website and mobile application services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our platform.
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
            Platform Usage &amp; Services
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Service Overview
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                ZEmed+ provides a digital platform connecting patients with healthcare professionals, doctors, clinics, and medical facilities for instant appointment booking, digital prescriptions, and record management.
              </p>
            </li>
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Medical Emergency Disclaimer
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                ZEmed+ is not a medical emergency service provider. In case of a life-threatening emergency or immediate medical attention requirement, please contact local emergency services or visit the nearest hospital emergency room directly.
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
            Appointments &amp; Zero Waiting Policy
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Booking Slots
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                All appointment slots shown on the platform are provided in real-time. Patients are expected to arrive on time for their confirmed slot to maintain the &quot;Zero Waiting&quot; system.
              </p>
            </li>
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Cancellations &amp; Rescheduling
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                Patients may cancel or reschedule appointments directly through the ZEmed+ mobile app prior to the appointment time according to clinic policy.
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
            User Accounts &amp; Verification
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Account Responsibilities
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                Users must provide true, accurate, and complete information when creating an account. You are responsible for maintaining the confidentiality of your credentials and account access.
              </p>
            </li>
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Doctor &amp; Clinic Verification
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                Healthcare professionals onboarded on ZEmed+ undergo verification of medical council registration numbers, credentials, and identity proofs before listing available consultation slots.
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
            Intellectual Property &amp; Acceptable Use
          </h2>
          <ul className="space-y-4">
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Ownership
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                All logos, branding, trademarks, design elements, software code, and interface graphics of ZEmed+ are the exclusive intellectual property of ZEmed+ and protected under applicable copyright and trademark laws.
              </p>
            </li>
            <li className="p-4 sm:p-5 bg-[#FCFDFB] rounded-xl border-l-4 border-[#2F9E6D]">
              <h3 className="text-base font-semibold text-[#0B2B34] font-['Sora',sans-serif] mb-1.5">
                Prohibited Conduct
              </h3>
              <p className="text-sm sm:text-[0.95rem] text-[#4C6169] leading-relaxed">
                Users agree not to misuse the service, reverse engineer platform code, upload malicious data, or post fraudulent clinic reviews or identity information.
              </p>
            </li>
          </ul>
        </article>

        <div className="mt-10 mb-14 text-center font-['IBM_Plex_Mono',monospace] text-sm text-[#4C6169]">
          Effective Date: July 2026 · ZEmed+ Legal &amp; Compliance Team
        </div>
      </main>

      <Footer />
    </>
  );
}
