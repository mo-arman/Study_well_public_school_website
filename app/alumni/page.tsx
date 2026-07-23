import PageHeader from "@/components/PageHeader";
import { Quote } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function AlumniPage() {
  return (
    <>
      <PageHeader
        eyebrow="Alumni"
        title="Where They Are Now"
        description={`Proud graduates of ${siteConfig.schoolName}, carrying what they learned here into the world.`}
      />
      <div className="container-custom py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.alumni.map((person, i) => (
          <div key={i} className="bg-white rounded-2xl p-7 shadow-card">
            <div className="h-16 w-16 rounded-full bg-mist mb-5 flex items-center justify-center text-navy-ink/30 text-[10px] text-center px-2">
              [ photo ]
            </div>
            <h3 className="font-display text-lg text-navy font-semibold">{person.name}</h3>
            <p className="text-xs text-gold font-semibold uppercase tracking-wide mb-3">
              {person.batch}
            </p>
            <p className="text-sm text-navy-ink/65 leading-relaxed mb-4">
              {person.achievement}
            </p>
            <div className="flex gap-2 text-navy-ink/50 text-sm italic">
              <Quote size={14} className="shrink-0 mt-1 text-gold" />
              <p>{person.quote}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="container-custom pb-16">
        <p className="text-navy-ink/50 text-sm">
          Are you an alumnus of {siteConfig.schoolName}? We'd love to feature
          your story — reach out through the Contact page.
        </p>
      </div>
    </>
  );
}
