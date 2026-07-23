import PageHeader from "@/components/PageHeader";

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Join Our Faculty"
        description="We're always looking for educators who lead with patience and purpose."
      />
      <div className="container-custom py-16 max-w-xl">
        <p className="text-navy-ink/60 text-sm mb-8">
          TODO: List current openings here, or connect this form to an email/ATS.
        </p>
        <form className="space-y-4">
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Full Name" />
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Email" type="email" />
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Position Applying For" />
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" type="file" />
          <button
            type="button"
            className="bg-navy text-white font-semibold px-6 py-3 rounded-full"
          >
            Submit Application
          </button>
        </form>
      </div>
    </>
  );
}
