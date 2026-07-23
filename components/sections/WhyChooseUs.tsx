"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Cpu,
  Users,
  ShieldCheck,
  Trophy,
  HeartHandshake
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const icons = [Monitor, Cpu, Users, ShieldCheck, Trophy, HeartHandshake];

export default function WhyChooseUs() {
  return (
    <section className="bg-sky-light py-20 lg:py-28">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            Why {siteConfig.shortName}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy font-semibold">
            What makes us different
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-card hover:-translate-y-1.5 transition-transform"
              >
                <div className="h-12 w-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-display text-lg text-navy font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-ink/65 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
