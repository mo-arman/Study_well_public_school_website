import { siteConfig } from "@/lib/siteConfig";

export default function QuickInfo() {
  return (
    <section className="bg-white border-b border-mist">
      <div className="container-custom py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {siteConfig.stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-navy font-semibold">
              {s.value}
            </p>
            <p className="text-xs sm:text-sm text-navy-ink/60 mt-1 tracking-wide">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
