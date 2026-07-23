import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function CTASection() {
  return (
    <section className="container-custom pb-20 lg:pb-28">
      <div className="relative rounded-3xl bg-navy overflow-hidden px-8 py-14 sm:px-14 sm:py-16 text-center">
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold mb-4">
            Admissions Open — {new Date().getFullYear()}
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-9">
            Limited seats across all grades at {siteConfig.schoolName}. Start
            your child's journey with us today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="group bg-gold text-navy-ink font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 hover:bg-gold-light transition-colors"
            >
              Apply Now
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
              <Download size={17} />
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
