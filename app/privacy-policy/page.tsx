import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="container-custom py-16 max-w-2xl text-sm text-navy-ink/70 leading-relaxed space-y-4">
        <p>
          [ Placeholder — {siteConfig.schoolName} should replace this with a
          proper privacy policy drafted or reviewed by legal counsel, covering
          data collected via admission forms, ERP, and this website. ]
        </p>
      </div>
    </>
  );
}
