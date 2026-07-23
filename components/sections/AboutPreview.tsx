import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function AboutPreview() {
  return (
    <section className="container-custom py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative aspect-[4/3] rounded-3xl bg-mist overflow-hidden order-2 lg:order-1">
        <div className="absolute inset-0 flex items-center justify-center text-navy-ink/40 text-sm px-8 text-center">
          [ Founder / campus photo goes here ]
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <p className="text-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4">
          About Us
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-navy font-semibold mb-5 leading-tight">
          A legacy built on trust,<br />since {siteConfig.established}
        </h2>
        <div className="golden-thread w-24 mb-6" />
        <p className="text-navy-ink/70 leading-relaxed mb-6">
          {siteConfig.schoolName} was founded with one belief: that every child
          deserves an education that sees them as a whole person, not a mark
          sheet. Two decades on, that founding belief still shapes every
          classroom, every teacher, and every decision we make.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all"
        >
          Read Our Story <ArrowRight size={17} />
        </Link>
      </div>
    </section>
  );
}
