import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" />
      <div className="container-custom py-16 max-w-2xl text-sm text-navy-ink/70 leading-relaxed space-y-4">
        <p>
          [ Placeholder — {siteConfig.schoolName} should replace this with
          terms of use for the website, covering admissions, fee policy
          references, and content usage. ]
        </p>
      </div>
    </>
  );
}
