"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export default function CareersPage() {
  // FormSubmit needs a fully-qualified redirect URL, so we build it
  // client-side once we know the real domain the site is running on.
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/careers/thank-you`);
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join Our Faculty"
        description="We're always looking for educators who lead with patience and purpose."
      />
      <div className="container-custom py-16 max-w-xl">
        <p className="text-navy-ink/50 text-xs mb-8">
          Applications are emailed directly to the school office. TODO: list
          specific current openings here once shared by the school.
        </p>

        <form
          action={`https://formsubmit.co/${siteConfig.careersEmail}`}
          method="POST"
          encType="multipart/form-data"
          className="space-y-4"
        >
          {/* FormSubmit configuration — hidden fields, not shown to applicant */}
          <input type="hidden" name="_subject" value={`New Job Application — ${siteConfig.schoolName}`} />
          <input type="hidden" name="_captcha" value="false" />
          {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}
          {/* Honeypot spam trap — real users never fill this */}
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <input required name="name" className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Full Name" />
          <input required name="email" type="email" className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Email" />
          <input required name="position" className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Position Applying For" />
          <div>
            <label className="text-xs text-navy-ink/50 mb-1 block">Resume / CV (PDF)</label>
            <input required name="attachment" type="file" accept=".pdf,.doc,.docx" className="w-full border border-mist rounded-lg px-4 py-3 text-sm" />
          </div>
          <button
            type="submit"
            className="bg-navy text-white font-semibold px-6 py-3 rounded-full"
          >
            Submit Application
          </button>
        </form>
      </div>
    </>
  );
}
