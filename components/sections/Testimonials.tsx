"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const items = siteConfig.testimonials;

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <section className="container-custom py-20 lg:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4">
          Testimonials
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-navy font-semibold">
          What our families say
        </h2>
      </div>

      <div className="max-w-2xl mx-auto text-center relative min-h-[220px]">
        <Quote className="mx-auto text-gold mb-4" size={32} />
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-display text-xl sm:text-2xl text-navy-ink leading-snug mb-6">
              "{items[index].quote}"
            </p>
            <p className="text-sm font-semibold text-navy">{items[index].name}</p>
            <p className="text-xs text-navy-ink/50">{items[index].role}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border border-mist flex items-center justify-center hover:bg-mist transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-gold" : "bg-mist"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border border-mist flex items-center justify-center hover:bg-mist transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
