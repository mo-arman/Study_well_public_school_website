import PageHeader from "@/components/PageHeader";

export default function StudentErpPage() {
  return (
    <>
      <PageHeader eyebrow="ERP" title="Student Login" />
      <div className="container-custom py-16 max-w-sm">
        <form className="space-y-4">
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Student ID / Admission No." />
          <input className="w-full border border-mist rounded-lg px-4 py-3 text-sm" placeholder="Password" type="password" />
          <button type="button" className="w-full bg-navy text-white font-semibold px-6 py-3 rounded-full">
            Login
          </button>
        </form>
        <p className="text-navy-ink/50 text-xs mt-6">
          TODO: Connect to an actual ERP provider (e.g. Edunext-style school ERP) or a custom auth backend.
        </p>
      </div>
    </>
  );
}
