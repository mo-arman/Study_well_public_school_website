"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  const words = siteConfig.tagline.split(" ");

  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Ambient background accents */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky/20 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl animate-float" />

      <div className="container-custom relative pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-2"
          >
            {siteConfig.affiliation}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/50 text-sm mb-5"
          >
            {siteConfig.motto}
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-semibold leading-[1.1] mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <div className="golden-thread w-40 mb-6" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/70 text-lg max-w-md mb-9"
          >
            A premium CBSE campus in {siteConfig.city} where every child is known,
            challenged, and cared for — one journey at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/admissions"
              className="group bg-gold text-navy-ink font-semibold px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-gold-light transition-colors"
            >
              Apply Now
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/gallery"
              className="border border-white/30 text-white font-semibold px-6 py-3.5 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <PlayCircle size={18} />
              Take a Virtual Tour
            </Link>
          </motion.div>
        </div>

        {/* Visual placeholder — replace with real campus photo/video slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative aspect-[4/3] rounded-3xl glass overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky/30 to-navy/40" />
          <p className="relative text-white/60 text-sm px-8 text-center">
            [ Campus photo / video slider goes here — replace once real images are available ]
          </p>
        </motion.div>
      </div>
    </section>
  );
}
