"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Check } from "lucide-react";

const steps = ["Academic Year", "Student Details", "Parent Details", "Address", "Review"];

export default function AdmissionsPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    academicYear: "",
    classApplying: "",
    studentName: "",
    dob: "",
    gender: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    address: "",
    city: ""
  });

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const inputClass = "w-full border border-mist rounded-lg px-4 py-3 text-sm focus:border-navy outline-none";

  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title="Apply for Admission"
        description="A few quick steps — your application is saved as you go."
      />

      <div className="container-custom py-16 max-w-2xl">
        {/* Progress bar */}
        <div className="flex items-center mb-12">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    i < step
                      ? "bg-gold text-navy-ink"
                      : i === step
                      ? "bg-navy text-white"
                      : "bg-mist text-navy-ink/40"
                  }`}
                >
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className="text-[10px] text-navy-ink/50 hidden sm:block whitespace-nowrap">
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-px mx-2 ${i < step ? "bg-gold" : "bg-mist"}`}
                />
              )}
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="h-16 w-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-5">
              <Check size={28} className="text-gold" />
            </div>
            <h2 className="font-display text-2xl text-navy font-semibold mb-2">
              Application Received
            </h2>
            <p className="text-navy-ink/60 text-sm">
              Our admissions office will contact you within 2 working days.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {step === 0 && (
              <>
                <select className={inputClass} value={form.academicYear} onChange={(e) => update("academicYear", e.target.value)}>
                  <option value="">Select Academic Year</option>
                  <option>2026–27</option>
                  <option>2027–28</option>
                </select>
                <select className={inputClass} value={form.classApplying} onChange={(e) => update("classApplying", e.target.value)}>
                  <option value="">Select Class</option>
                  {["Nursery", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </>
            )}

            {step === 1 && (
              <>
                <input className={inputClass} placeholder="Student Full Name" value={form.studentName} onChange={(e) => update("studentName", e.target.value)} />
                <input className={inputClass} type="date" placeholder="Date of Birth" value={form.dob} onChange={(e) => update("dob", e.target.value)} />
                <select className={inputClass} value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </>
            )}

            {step === 2 && (
              <>
                <input className={inputClass} placeholder="Parent / Guardian Name" value={form.parentName} onChange={(e) => update("parentName", e.target.value)} />
                <input className={inputClass} placeholder="Mobile Number" value={form.parentPhone} onChange={(e) => update("parentPhone", e.target.value)} />
                <input className={inputClass} type="email" placeholder="Email Address" value={form.parentEmail} onChange={(e) => update("parentEmail", e.target.value)} />
              </>
            )}

            {step === 3 && (
              <>
                <textarea className={`${inputClass} h-24`} placeholder="Full Address" value={form.address} onChange={(e) => update("address", e.target.value)} />
                <input className={inputClass} placeholder="City" value={form.city} onChange={(e) => update("city", e.target.value)} />
              </>
            )}

            {step === 4 && (
              <div className="bg-mist rounded-xl p-6 text-sm space-y-2 text-navy-ink/75">
                <p><strong>Class:</strong> {form.classApplying || "—"} ({form.academicYear || "—"})</p>
                <p><strong>Student:</strong> {form.studentName || "—"}</p>
                <p><strong>Parent:</strong> {form.parentName || "—"} · {form.parentPhone || "—"}</p>
                <p><strong>City:</strong> {form.city || "—"}</p>
                <p className="text-xs text-navy-ink/40 pt-2">
                  TODO: Document upload + payment step goes here once admissions office confirms required fees/documents.
                </p>
              </div>
            )}

            <div className="flex justify-between pt-6">
              <button
                onClick={back}
                disabled={step === 0}
                className="px-6 py-3 rounded-full text-sm font-semibold text-navy disabled:opacity-30"
              >
                Back
              </button>
              {step < steps.length - 1 ? (
                <button
                  onClick={next}
                  className="bg-navy text-white px-7 py-3 rounded-full text-sm font-semibold"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => setSubmitted(true)}
                  className="bg-gold text-navy-ink px-7 py-3 rounded-full text-sm font-semibold"
                >
                  Submit Application
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
