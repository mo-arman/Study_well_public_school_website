import PageHeader from "@/components/PageHeader";

const rows = [
  "Affiliation Number", "School Code", "Complete Address", "Principal Name & Qualification",
  "Total Area of School Campus", "No. of Classrooms", "No. of Toilets", "Fire Safety Certificate"
];

export default function MandatoryDisclosurePage() {
  return (
    <>
      <PageHeader eyebrow="Compliance" title="Mandatory Public Disclosure" />
      <div className="container-custom py-16 max-w-3xl">
        <div className="divide-y divide-mist border border-mist rounded-xl overflow-hidden">
          {rows.map((r) => (
            <div key={r} className="flex justify-between px-6 py-4 text-sm">
              <span className="text-navy-ink/70">{r}</span>
              <span className="text-navy-ink/40">[ TODO: add value ]</span>
            </div>
          ))}
        </div>
        <p className="text-navy-ink/50 text-xs mt-6">
          As per CBSE affiliation bye-laws, this data must be kept accurate and current — verify with the school office before publishing.
        </p>
      </div>
    </>
  );
}
