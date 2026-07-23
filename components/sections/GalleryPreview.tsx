import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const placeholders = [
  "Campus", "Smart Classes", "Science Lab", "Sports Day",
  "Annual Function", "Robotics"
];

export default function GalleryPreview() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4">
              Life at {siteConfig.shortName}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold">
              Moments worth remembering
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:gap-3 transition-all"
          >
            View Full Gallery <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((label, i) => (
            <div
              key={label}
              className={`relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <p className="text-white/40 text-xs text-center px-4">[ {label} photo ]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
