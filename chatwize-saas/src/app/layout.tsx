import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ChatWize - WhatsApp Leads, Automated.",
  description: "Smarter sales with ChatWize—launch in minutes.",
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params?: { locale?: string }
}>) {
  // Detect locale (default to en)
  const locale = params?.locale || 'en';
  // Load messages (will be provided by next-intl)
  let messages = {};
  try {
    messages = useMessages();
  } catch {}

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
