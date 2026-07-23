import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
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
        <SplashScreen />

        {/* Google Analytics (GA4) — only loads once a Measurement ID is set.
            See README for setup. Respects cookie consent: gtag config runs
            with default-denied analytics storage until CookieConsent grants it. */}
        {siteConfig.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('consent', 'default', {
                  'analytics_storage': 'denied'
                });
                gtag('config', '${siteConfig.googleAnalyticsId}', {
                  anonymize_ip: true
                });
              `}
            </Script>
          </>
        )}

        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />

        {/* Push notifications (OneSignal) — only loads once an App ID is set.
            See README for the free 5-minute setup. */}
        {siteConfig.oneSignalAppId && (
          <>
            <Script
              src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
              strategy="afterInteractive"
              defer
            />
            <Script id="onesignal-init" strategy="afterInteractive">
              {`
                window.OneSignalDeferred = window.OneSignalDeferred || [];
                OneSignalDeferred.push(async function(OneSignal) {
                  await OneSignal.init({ appId: "${siteConfig.oneSignalAppId}" });
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
