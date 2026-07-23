import PageHeader from "@/components/PageHeader";
import { Download, CheckCircle2, XCircle, Wallet } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: `Fee Structure | ${siteConfig.schoolName}`,
  description: `Class-wise fee structure for ${siteConfig.schoolName}, ${siteConfig.city} — academic year ${siteConfig.feeStructure.academicYear}.`
};

export default function FeeStructurePage() {
  const { feeStructure } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Fees"
        title="Fee Structure"
        description={`Class-wise fee details for the academic year ${feeStructure.academicYear}. Download the full breakdown as a PDF for your records.`}
      />

      <div className="container-custom py-16">
        {/* Download bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-navy rounded-2xl p-6 sm:p-7 mb-10">
          <div>
            <p className="text-white font-display text-lg font-semibold">
              Academic Year {feeStructure.academicYear}
            </p>
            <p className="text-white/60 text-sm mt-1">
              Last updated: {feeStructure.lastUpdated}
            </p>
          </div>
          <a
            href={feeStructure.pdfUrl}
            download
            className="inline-flex items-center justify-center gap-2 bg-gold text-navy-ink font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors shrink-0"
          >
            <Download size={18} />
            Download Fee Structure (PDF)
          </a>
        </div>

        {/* Class-wise table */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white text-left">
                  <th className="px-5 py-4 font-semibold">Class</th>
                  <th className="px-5 py-4 font-semibold">Admission Fee</th>
                  <th className="px-5 py-4 font-semibold">Tuition Fee / Month</th>
                  <th className="px-5 py-4 font-semibold">Annual Charges</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.classes.map((row, i) => (
                  <tr
                    key={row.className}
                    className={i % 2 === 0 ? "bg-white" : "bg-sky-light/40"}
                  >
                    <td className="px-5 py-4 font-medium text-navy-ink border-t border-mist">
                      {row.className}
                    </td>
                    <td className="px-5 py-4 text-navy-ink/75 border-t border-mist">
                      {row.admissionFee}
                    </td>
                    <td className="px-5 py-4 text-navy-ink/75 border-t border-mist">
                      {row.tuitionPerMonth}
                    </td>
                    <td className="px-5 py-4 text-navy-ink/75 border-t border-mist">
                      {row.annualCharges}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Includes / Excludes */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl p-7 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 size={20} className="text-navy" />
              <h3 className="font-display text-lg text-navy font-semibold">
                Fee Includes
              </h3>
            </div>
            <ul className="space-y-2">
              {feeStructure.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-7 shadow-card">
            <div className="flex items-center gap-2 mb-4">
              <XCircle size={20} className="text-navy" />
              <h3 className="font-display text-lg text-navy font-semibold">
                Charged Separately
              </h3>
            </div>
            <ul className="space-y-2">
              {feeStructure.excludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment modes */}
        <div className="bg-white rounded-2xl p-7 shadow-card mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Wallet size={20} className="text-navy" />
            <h3 className="font-display text-lg text-navy font-semibold">
              Payment Modes
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {feeStructure.paymentModes.map((mode) => (
              <span
                key={mode}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-sky-light text-navy"
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        <p className="text-navy-ink/60 text-sm leading-relaxed bg-mist rounded-xl p-5">
          {feeStructure.notes}
        </p>
        <p className="text-navy-ink/40 text-xs mt-4">
          TODO: Replace all &ldquo;TBD&rdquo; figures with real, confirmed fee
          amounts in <code>lib/siteConfig.ts</code> (the{" "}
          <code>feeStructure</code> object), then regenerate the PDF at{" "}
          <code>public/documents/fee-structure.pdf</code> to match.
        </p>
      </div>
    </>
  );
}
