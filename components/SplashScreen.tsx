"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Skip on repeat visits within the same session so it only greets once
    const seen = sessionStorage.getItem("swps-splash-seen");
    if (seen) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("swps-splash-seen", "1");
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-navy"
        >
          {/* Ambient glow accents to match brand */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

          <motion.div
            initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative h-28 w-28 sm:h-32 sm:w-32"
          >
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.schoolName} logo`}
              fill
              priority
              className="object-contain drop-shadow-[0_0_25px_rgba(201,162,39,0.35)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 font-display text-white text-lg sm:text-xl font-semibold tracking-wide text-center px-6"
          >
            {siteConfig.schoolName}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="golden-thread w-40 mt-4"
          />

          {/* Slim loading progress bar */}
          <div className="absolute bottom-14 h-[3px] w-40 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
              className="h-full w-full bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
