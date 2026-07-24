"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 900);
    const hideTimer = setTimeout(() => setVisible(false), 1300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-navy flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative h-24 w-24 rounded-full overflow-hidden ring-2 ring-gold/50 bg-white shadow-glass mb-5 animate-float">
        <Image
          src="/images/logo-placeholder.png"
          alt={`${siteConfig.schoolName} logo`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="font-display text-white text-lg font-semibold">
        {siteConfig.schoolName}
      </p>
      <p className="text-gold/70 text-xs mt-1 tracking-wide">{siteConfig.motto}</p>
    </div>
  );
}
