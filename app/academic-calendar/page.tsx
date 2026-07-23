import PageHeader from "@/components/PageHeader";
import { CalendarDays, PartyPopper, GraduationCap } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: `Academic Calendar | ${siteConfig.schoolName}`,
  description: `Academic year calendar, term dates, and holiday list for ${siteConfig.schoolName}, ${siteConfig.city}.`
};

export default function AcademicCalendarPage() {
  const { academicCalendar } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Academic Calendar"
        title={`Session ${academicCalendar.academicYear}`}
        description={`Key term dates, examinations, events, and holidays for the academic year. Session runs from ${academicCalendar.sessionStart} to ${academicCalendar.sessionEnd}.`}
      />

      <div className="container-custom py-16">
        {/* Terms & exams */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap size={22} className="text-navy" />
            <h2 className="font-display text-2xl text-navy font-semibold">
              Academic Year at a Glance
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white text-left">
                    <th className="px-5 py-4 font-semibold">Term</th>
                    <th className="px-5 py-4 font-semibold">Period</th>
                    <th className="px-5 py-4 font-semibold">Examination</th>
                  </tr>
                </thead>
                <tbody>
                  {academicCalendar.terms.map((t, i) => (
                    <tr key={t.term} className={i % 2 === 0 ? "bg-white" : "bg-sky-light/40"}>
                      <td className="px-5 py-4 font-medium text-navy-ink border-t border-mist">
                        {t.term}
                      </td>
                      <td className="px-5 py-4 text-navy-ink/75 border-t border-mist">
                        {t.period}
                      </td>
                      <td className="px-5 py-4 text-navy-ink/75 border-t border-mist">
                        {t.exam}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Holiday list */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays size={22} className="text-navy" />
              <h2 className="font-display text-2xl text-navy font-semibold">
                Holiday List
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-card divide-y divide-mist">
              {academicCalendar.holidays.map((h) => (
                <div
                  key={h.occasion}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="text-navy-ink font-medium text-sm">
                    {h.occasion}
                  </span>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                    {h.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Other events */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <PartyPopper size={22} className="text-navy" />
              <h2 className="font-display text-2xl text-navy font-semibold">
                School Events
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-card divide-y divide-mist">
              {academicCalendar.otherEvents.map((e) => (
                <div
                  key={e.event}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="text-navy-ink font-medium text-sm">
                    {e.event}
                  </span>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wide">
                    {e.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-navy-ink/50 text-sm mt-10">
          TODO: Replace all &ldquo;TBD&rdquo; dates with the school office&rsquo;s
          confirmed academic calendar for the current session. Update the{" "}
          <code>academicCalendar</code> object in{" "}
          <code>lib/siteConfig.ts</code>.
        </p>
      </div>
    </>
  );
}
