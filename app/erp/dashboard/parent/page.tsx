import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import PageHeader from "@/components/PageHeader";
import LogoutButton from "@/components/LogoutButton";
import { CalendarCheck, ClipboardList, Wallet, Bell, type LucideIcon } from "lucide-react";

export default async function ParentDashboard() {
  const session = await getServerSession(authOptions);
  const name = session?.user?.name ?? "Parent";
  const classSection = session?.user?.classSection ?? "—";

  return (
    <>
      <PageHeader
        eyebrow="ERP · Parent"
        title={`Welcome, ${name}`}
        description={`Child's Class: ${classSection}`}
      />
      <div className="container-custom py-12">
        <div className="flex justify-end mb-8">
          <LogoutButton />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <DashboardCard icon={CalendarCheck} label="Child's Attendance" value="Coming soon" />
          <DashboardCard icon={ClipboardList} label="Homework" value="Coming soon" />
          <DashboardCard icon={Wallet} label="Fee Status" value="Coming soon" />
          <DashboardCard icon={Bell} label="School Notices" value="Coming soon" />
        </div>

        <p className="text-navy-ink/50 text-sm mt-10 max-w-2xl">
          You're securely logged in — this confirms the login system works
          end to end. Attendance, homework, and fee-status data isn't wired
          up yet; that needs the school office to decide what data source to
          pull from so it can be connected to these cards next.
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
