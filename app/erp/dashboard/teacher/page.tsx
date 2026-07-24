import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import PageHeader from "@/components/PageHeader";
import LogoutButton from "@/components/LogoutButton";
import { Users, ClipboardList, CalendarCheck, Bell, type LucideIcon } from "lucide-react";

export default async function TeacherDashboard() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name ?? "Teacher";
  const classSection = session?.user?.classSection ?? "—";

  return (
    <>
      <PageHeader
        eyebrow="ERP · Teacher"
        title={`Welcome, ${name}`}
        description={`Assigned Class: ${classSection}`}
      />
      <div className="container-custom py-12">
        <div className="flex justify-end mb-8">
          <LogoutButton />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <DashboardCard icon={Users} label="My Class" value="Coming soon" />
          <DashboardCard icon={CalendarCheck} label="Mark Attendance" value="Coming soon" />
          <DashboardCard icon={ClipboardList} label="Assign Homework" value="Coming soon" />
          <DashboardCard icon={Bell} label="Post a Notice" value="Coming soon" />
        </div>

        <p className="text-navy-ink/50 text-sm mt-10 max-w-2xl">
          You're securely logged in — this confirms the login system works
          end to end. Class rosters, attendance marking, and homework
          assignment aren't wired up yet; those are the natural next features
          to build on top of this working login.
        </p>
      </div>
    </>
  );
}

function DashboardCard({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white border border-mist rounded-2xl p-5 shadow-card">
      <div className="h-10 w-10 rounded-full bg-sky-light flex items-center justify-center mb-3">
        <Icon size={18} className="text-navy" />
      </div>
      <p className="text-xs uppercase tracking-wide text-navy-ink/50 mb-1">{label}</p>
      <p className="text-navy-ink/70 text-sm">{value}</p>
    </div>
  );
}
