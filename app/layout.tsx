import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/siteConfig";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: `${siteConfig.schoolName} | ${siteConfig.city}`,
  description: `${siteConfig.schoolName} — a premium CBSE school in ${siteConfig.city}. ${siteConfig.tagline} Admissions open now.`,
  keywords: [
    siteConfig.schoolName,
    "CBSE school",
    siteConfig.city,
    "best school",
    "admissions"
  ],
  openGraph: {
    title: siteConfig.schoolName,
    description: siteConfig.tagline,
    type: "website",
    locale: "en_IN"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
