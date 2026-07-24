import PageHeader from "@/components/PageHeader";
import ErpLoginForm from "@/components/ErpLoginForm";

export default function TeacherErpPage() {
  return (
    <>
      <PageHeader eyebrow="ERP" title="Teacher Login" />
      <div className="container-custom py-16 max-w-sm">
        <ErpLoginForm
          providerId="teacher"
          usernameLabel="Employee ID"
          dashboardPath="/erp/dashboard/teacher"
        />
      </div>
    </>
  );
}
