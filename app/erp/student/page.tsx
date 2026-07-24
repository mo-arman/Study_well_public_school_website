import PageHeader from "@/components/PageHeader";
import ErpLoginForm from "@/components/ErpLoginForm";

export default function StudentErpPage() {
  return (
    <>
      <PageHeader eyebrow="ERP" title="Student Login" />
      <div className="container-custom py-16 max-w-sm">
        <ErpLoginForm
          providerId="student"
          usernameLabel="Student ID / Admission No."
          dashboardPath="/erp/dashboard/student"
        />
      </div>
    </>
  );
}
