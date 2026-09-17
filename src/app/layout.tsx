import type { Metadata } from 'next';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingSocials } from '@/components/FloatingSocials';

export const metadata: Metadata = {
  metadataBase: new URL('https://thegrowthpurpose.com'),
  title: {
    default: 'The Growth Purpose | Digital Marketing Agency for Business Growth',
    template: '%s | The Growth Purpose',
  },
  description:
    'Scale your brand with performance marketing, SEO, high-converting web development, Google Ads, and viral social media funnels. Zero lock-in contracts.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'The Growth Purpose | Digital Marketing Agency for Business Growth',
    description: 'Scale your brand with performance marketing, SEO, high-converting web development, Google Ads, and viral social media funnels.',
    url: 'https://thegrowthpurpose.com',
    siteName: 'The Growth Purpose',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'The Growth Purpose Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Growth Purpose | Digital Marketing Agency for Business Growth',
    description: 'Scale your brand with performance marketing, SEO, high-converting web development, and social media funnels.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0D0D11] text-white min-h-screen flex flex-col antialiased selection:bg-[#6D4AFF] selection:text-white">
        <ModalProvider>
          <Header />
          <div className="flex-1 pt-20">
            {children}
          </div>
          <Footer />
          <FloatingSocials />
        </ModalProvider>
      </body>
    </html>
  );
}
