import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageContext';

export const metadata: Metadata = {
  title: 'Zemed Plus — Direct Appointments. Zero Waiting. | Begusarai, Bihar',
  description:
    'Book doctor appointments in Begusarai, Bihar with Zemed Plus. Instant OPD booking, real-time doctor availability, zero waiting room queues, bilingual in English and Hindi.',
  keywords: [
    'Zemed Plus',
    'doctor appointment Begusarai',
    'OPD booking Bihar',
    'book doctor Begusarai',
    'healthcare app Begusarai',
    'clinic appointment',
    'direct appointments zero waiting',
    'Begusarai doctors',
  ],
  authors: [{ name: 'Zemed Plus' }],
  creator: 'Zemed Plus',
  metadataBase: new URL('https://zemedplus.com'),
  openGraph: {
    title: 'Zemed Plus — Direct Appointments. Zero Waiting.',
    description:
      'Find a specialist, pick an open slot, and walk in already booked in Begusarai, Bihar. No calls, no waiting queues.',
    url: 'https://zemedplus.com',
    siteName: 'Zemed Plus',
    locale: 'en_IN',
    alternateLocale: ['hi_IN'],
    type: 'website',
    images: [
      {
        url: '/assets/logo/zemed-logo.png',
        width: 498,
        height: 501,
        alt: 'Zemed Plus — Direct Appointments. Zero Waiting.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zemed Plus — Direct Appointments. Zero Waiting.',
    description: 'Instant doctor OPD bookings in Begusarai, Bihar. Zero waiting queues.',
    images: ['/assets/logo/zemed-logo.png'],
  },
  icons: {
    icon: [
      { url: '/assets/logo/zemed-logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/assets/logo/zemed-logo.png',
    apple: '/assets/logo/zemed-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){navigator.serviceWorker.getRegistrations().then(function(regs){for(var r of regs){r.unregister();}});}`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FCFDFB] text-[#0B2B34] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
