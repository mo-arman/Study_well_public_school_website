"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cookie-consent-v1";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const updateAnalyticsConsent = (granted: boolean) => {
  window.gtag?.("consent", "update", {
    analytics_storage: granted ? "granted" : "denied"
  });
};

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyDecided = localStorage.getItem(STORAGE_KEY);
    if (!alreadyDecided) {
      setVisible(true);
    } else {
      // Re-apply the stored decision to GA4 consent mode on every page load.
      updateAnalyticsConsent(alreadyDecided === "accepted");
    }
  }, []);

  const decide = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    updateAnalyticsConsent(value === "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[90] p-4 sm:p-5">
      <div className="max-w-3xl mx-auto bg-navy-ink text-white/85 rounded-2xl shadow-glass p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie size={22} className="text-gold shrink-0" />
        <p className="text-sm flex-1 leading-relaxed">
          We use cookies to improve your experience on this site.{" "}
          <Link href="/privacy-policy" className="underline hover:text-gold">
            Learn more
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => decide("declined")}
            className="text-sm font-medium text-white/60 hover:text-white px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={() => decide("accepted")}
            className="bg-gold text-navy-ink text-sm font-semibold px-5 py-2 rounded-full"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
