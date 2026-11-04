'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 sm:py-14 border-t border-[rgba(11,43,52,0.12)] bg-[#FCFDFB]">
      <div className="wrap">
        <div className="flex flex-col md:flex-row justify-between items-start flex-wrap gap-8">
          {/* Brand Logo */}
          <div className="brand flex items-center gap-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src="/assets/logo/zemed-logo.png"
                alt="Zemed Plus logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-['Sora',sans-serif] font-bold text-xl text-[#0B2B34]">
              Zemed<em className="not-italic text-[#1E7A54]">Plus</em>
            </span>
          </div>

          {/* Footer Links Columns */}
          <div className="flex gap-10 sm:gap-14 flex-wrap">
            <div>
              <h4 className="font-['IBM_Plex_Mono',monospace] text-[0.8rem] uppercase tracking-[0.08em] text-[#4C6169] mb-3 font-medium">
                Product
              </h4>
              <Link href="/#features" className="block text-[0.9rem] mb-2 text-[#0B2B34] hover:text-[#2F9E6D] transition-colors">
                Features
              </Link>
              <Link href="/#how" className="block text-[0.9rem] mb-2 text-[#0B2B34] hover:text-[#2F9E6D] transition-colors">
                How it works
              </Link>
              <Link href="/#screens" className="block text-[0.9rem] mb-2 text-[#0B2B34] hover:text-[#2F9E6D] transition-colors">
                Inside the app
              </Link>
            </div>

            <div>
              <h4 className="font-['IBM_Plex_Mono',monospace] text-[0.8rem] uppercase tracking-[0.08em] text-[#4C6169] mb-3 font-medium">
                Support &amp; Contact
              </h4>
              <a href="tel:+919122575654" className="block text-[0.9rem] mb-2 text-[#0B2B34] hover:text-[#2F9E6D] transition-colors">
                📞 +91 91225 75654
              </a>
              <a href="mailto:Zemedplus@gmail.com" className="block text-[0.9rem] mb-2 text-[#0B2B34] hover:text-[#2F9E6D] transition-colors">
                ✉️ Zemedplus@gmail.com
              </a>
              <Link href="/privacy" className="block text-[0.9rem] mb-2 text-[#0B2B34] hover:text-[#2F9E6D] transition-colors">
                Privacy policy
              </Link>
            </div>

            <div>
              <h4 className="font-['IBM_Plex_Mono',monospace] text-[0.8rem] uppercase tracking-[0.08em] text-[#4C6169] mb-3 font-medium">
                Company
              </h4>
              <Link href="/terms" className="block text-[0.9rem] mb-2 text-[#0B2B34] hover:text-[#2F9E6D] transition-colors">
                Terms &amp; conditions
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-11 pt-6 border-t border-[rgba(11,43,52,0.12)] flex flex-col sm:flex-row justify-between items-center flex-wrap gap-3 text-[0.82rem] text-[#4C6169]">
          <span>© 2026 Zemed Plus. All rights reserved.</span>
          <span>Aapka Sehat Saathi · आपका सेहत साथी</span>
        </div>
      </div>
    </footer>
  );
}
