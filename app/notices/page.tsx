import PageHeader from "@/components/PageHeader";
import { Megaphone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const categoryColors: Record<string, string> = {
  Admission: "bg-sky-light text-navy",
  Event: "bg-gold/20 text-navy-ink",
  Circular: "bg-mist text-navy-ink/70",
  Exam: "bg-red-50 text-red-700"
};

export default function NoticesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Notices & Circulars"
        title="School Announcements"
        description="Stay updated on admissions, events, exams, and school circulars. Tap the bell icon in the header to get these as push notifications."
      />
      <div className="container-custom py-16 max-w-2xl">
        <div className="space-y-4">
          {siteConfig.notices.map((notice, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-card"
            >
              <div className="h-11 w-11 rounded-full bg-navy flex items-center justify-center shrink-0">
                <Megaphone size={18} className="text-gold" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full ${
                      categoryColors[notice.category] || "bg-mist text-navy-ink/70"
                    }`}
                  >
                    {notice.category}
                  </span>
                  <span className="text-xs text-navy-ink/40">{notice.date}</span>
                </div>
                <p className="font-medium text-navy-ink">{notice.title}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-navy-ink/50 text-sm mt-8">
          TODO: Replace with real, dated notices from the school office. Add
          new ones at the top of the `notices` array in `lib/siteConfig.ts`.
        </p>
      </div>
    </>
  );
}
