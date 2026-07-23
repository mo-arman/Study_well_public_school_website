"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  const words = siteConfig.tagline.split(" ");

  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Campus building photo — softly blurred ambient backdrop */}
      <div className="absolute inset-0">
        <Image
          src="/images/campus-building.jpg"
          alt={`${siteConfig.schoolName} campus building`}
          fill
          priority
          className="object-cover object-top scale-110 blur-[3px] sm:blur-[4px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/60" />
      </div>

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

        {/* Campus photo card with logo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/15"
        >
          <Image
            src="/images/campus-building.jpg"
            alt={`${siteConfig.schoolName} campus`}
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-ink/70 via-transparent to-transparent" />

          {/* Floating logo + established badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-5 left-5 right-5 glass rounded-2xl px-4 py-3 flex items-center gap-3"
          >
            <div className="relative h-11 w-11 shrink-0">
              <Image
                src="/images/logo.png"
                alt={`${siteConfig.schoolName} logo`}
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="font-display font-semibold text-navy text-sm">
                {siteConfig.schoolName}
              </p>
              <p className="text-[11px] text-navy/60">
                Est. {siteConfig.established} · {siteConfig.city}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
