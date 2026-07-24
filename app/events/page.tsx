import PageHeader from "@/components/PageHeader";
import { CalendarDays } from "lucide-react";

const placeholderEvents = [
  { date: "TBD", title: "Annual Sports Day" },
  { date: "TBD", title: "Science Exhibition" },
  { date: "TBD", title: "Annual Day Function" },
  { date: "TBD", title: "Parent-Teacher Meet" }
];

export default function EventsPage() {
  return (
    <>
      <PageHeader eyebrow="News & Events" title="What's Happening" />
      <div className="container-custom py-16 max-w-3xl">
        <div className="space-y-4">
          {placeholderEvents.map((e) => (
            <div
              key={e.title}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-card"
            >
              <div className="h-11 w-11 rounded-full bg-sky-light flex items-center justify-center shrink-0">
                <CalendarDays size={20} className="text-navy" />
              </div>
              <div>
                <p className="font-semibold text-navy">{e.title}</p>
                <p className="text-xs text-navy-ink/50">{e.date}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-navy-ink/50 text-sm mt-8">
          TODO: Connect to real academic calendar / circulars once available from the school office.
        </p>
      </div>
    </>
  );
}
