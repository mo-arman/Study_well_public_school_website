import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function CareersThankYouPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title="Application Received" />
      <div className="container-custom py-20 text-center">
        <CheckCircle2 className="mx-auto text-gold mb-5" size={44} />
        <p className="text-navy-ink/70 max-w-md mx-auto mb-8">
          Thank you for applying. The school office has received your
          application and will reach out if your profile is shortlisted.
        </p>
        <Link href="/careers" className="text-navy font-semibold hover:underline">
          Back to Careers
        </Link>
      </div>
    </>
  );
}
