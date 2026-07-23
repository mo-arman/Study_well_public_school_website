import PageHeader from "@/components/PageHeader";
import { Trophy, TrendingUp, ExternalLink, User } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: `Results & Toppers | ${siteConfig.schoolName}`,
  description: `CBSE board result highlights and class toppers from ${siteConfig.schoolName}, ${siteConfig.city}.`
};

export default function ResultsPage() {
  const { results } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Results"
        title="Results & Toppers"
        description="Celebrating our students' achievements in the CBSE board examinations."
      />

      <div className="container-custom py-16">
        {/* CBSE highlights */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {results.highlights.map((h) => (
            <div
              key={h.classLabel}
              className="bg-navy rounded-2xl p-7 flex items-center gap-5"
            >
              <div className="h-14 w-14 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                <TrendingUp size={24} className="text-gold" />
              </div>
              <div>
                <p className="text-gold text-xs font-semibold uppercase tracking-wide mb-1">
                  {h.classLabel} · {h.year}
                </p>
                <p className="text-white font-display text-2xl font-semibold">
                  {h.passPercentage}
                  {h.passPercentage !== "TBD" && "%"} Pass
                </p>
                <p className="text-white/60 text-sm mt-1">
                  Top score: {h.topScore}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Toppers */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Trophy size={22} className="text-navy" />
            <h2 className="font-display text-2xl text-navy font-semibold">
              Class Toppers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.toppers.map((student, i) => (
              <div
                key={`${student.name}-${i}`}
                className="bg-white rounded-2xl p-6 shadow-card text-center"
              >
                <div className="h-20 w-20 rounded-full bg-sky-light mx-auto flex items-center justify-center mb-4">
                  <User size={30} className="text-navy/40" />
                </div>
                <h3 className="font-display text-navy font-semibold">
                  {student.name}
                </h3>
                <p className="text-xs text-navy-ink/50 mb-2">
                  {student.classLabel}
                </p>
                <p className="text-gold font-semibold text-sm">
                  {student.percentage}
                  {student.percentage !== "TBD" && "%"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Official board result links */}
        <div className="bg-mist rounded-2xl p-7">
          <h3 className="font-display text-lg text-navy font-semibold mb-4">
            Check Official CBSE Results
          </h3>
          <div className="flex flex-wrap gap-4">
            {results.boardResultLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-navy font-medium text-sm px-5 py-2.5 rounded-full shadow-card hover:bg-sky-light transition-colors"
              >
                {link.label}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-navy-ink/50 text-sm mt-10">
          TODO: Replace pass percentages, top scores, and topper names/photos
          with verified data once CBSE results are declared (photos require
          signed parental consent). Update the <code>results</code> object in{" "}
          <code>lib/siteConfig.ts</code>.
        </p>
      </div>
    </>
  );
}
