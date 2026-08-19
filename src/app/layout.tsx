import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const description =
  'Ravora Apps is a creative studio in Chennai building and operating modern products — accelerated with AI, built with care.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ravoraapps.tech'),
  title: {
    default: 'Ravora Apps | Modern solutions, accelerated with AI',
    template: '%s',
  },
  description,
  openGraph: {
    title: 'Ravora Apps',
    description,
    url: 'https://ravoraapps.tech',
    siteName: 'Ravora Apps',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
      The font variables must live on <html>, not <body>. globals.css maps
      --font-sans to --font-geist-sans at :root; declaring them a level lower
      left that reference unresolvable, so font-family fell back to the
      browser default serif across the whole site.
    */
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a href="#content" className="skipLink">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
