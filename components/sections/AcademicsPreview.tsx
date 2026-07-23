import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function AcademicsPreview() {
  return (
    <section className="container-custom py-20 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
        <div>
          <p className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4">
            Academics
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy font-semibold">
            A journey, stage by stage
          </h2>
        </div>
        <Link
          href="/academics"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all"
        >
          Explore Curriculum <ArrowRight size={17} />
        </Link>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-mist" />
        <div className="grid lg:grid-cols-5 gap-8">
          {siteConfig.academicLevels.map((level) => (
            <div key={level.name} className="relative">
              <div className="hidden lg:block h-3 w-3 rounded-full bg-gold mb-6" />
              <p className="text-xs uppercase tracking-wide text-navy/50 font-semibold mb-1">
                {level.range}
              </p>
              <h3 className="font-display text-lg text-navy font-semibold mb-2">
                {level.name}
              </h3>
              <p className="text-sm text-navy-ink/65 leading-relaxed">
                {level.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
