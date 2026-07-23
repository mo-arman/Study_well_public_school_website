import PageHeader from "@/components/PageHeader";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Built for Learning"
        description="Every space on campus is designed with one goal — a safe, stimulating environment for growth."
      />
      <div className="container-custom py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {siteConfig.facilities.map((f) => (
          <div key={f} className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-card">
            <CheckCircle2 className="text-gold shrink-0" size={20} />
            <span className="text-navy-ink font-medium text-sm">{f}</span>
          </div>
        ))}
      </div>
    </>
  );
}
