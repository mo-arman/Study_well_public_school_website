import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Curriculum & Learning"
        description="A structured, CBSE-aligned journey from Pre-Primary through Senior Secondary."
      />
      <div className="container-custom py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.academicLevels.map((level) => (
          <div key={level.name} className="bg-white rounded-2xl p-7 shadow-card">
            <p className="text-xs uppercase tracking-wide text-gold font-semibold mb-2">
              {level.range}
            </p>
            <h3 className="font-display text-lg text-navy font-semibold mb-2">
              {level.name}
            </h3>
            <p className="text-sm text-navy-ink/65 leading-relaxed">{level.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
