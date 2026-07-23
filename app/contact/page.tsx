"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { submitFormAjax } from "@/lib/submitForm";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitFormAjax(
        siteConfig.email,
        form,
        `New Contact Enquiry — ${siteConfig.schoolName}`
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in Touch" />
      <div className="container-custom py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-5 mb-10">
            <div className="flex gap-3">
              <MapPin className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">{siteConfig.address}</p>
            </div>
            <div className="flex gap-3">
              <Phone className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">{siteConfig.phone}</p>
            </div>
            <div className="flex gap-3">
              <Mail className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">{siteConfig.email}</p>
            </div>
            <div className="flex gap-3">
              <Clock className="text-gold shrink-0" size={20} />
              <p className="text-navy-ink/75 text-sm">Mon – Sat, 8:00 AM – 3:00 PM</p>
            </div>
          </div>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-card">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${siteConfig.schoolName} location on map`}
            />
          </div>
        </div>

        {status === "success" ? (
          <div className="bg-mist rounded-2xl p-8 text-center h-fit">
            <CheckCircle2 className="mx-auto text-gold mb-4" size={36} />
            <h3 className="font-display text-xl text-navy font-semibold mb-2">Message Sent</h3>
            <p className="text-navy-ink/60 text-sm">
              Thank you — the school office will get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              required
              className="w-full border border-mist rounded-lg px-4 py-3 text-sm"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
            <input
              required
              type="email"
              className="w-full border border-mist rounded-lg px-4 py-3 text-sm"
              placeholder="Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
            <input
              required
              className="w-full border border-mist rounded-lg px-4 py-3 text-sm"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
            <textarea
              required
              className="w-full border border-mist rounded-lg px-4 py-3 text-sm h-32"
              placeholder="Message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />

            {status === "error" && (
              <p className="flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle size={16} /> Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-navy text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 disabled:opacity-60"
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
