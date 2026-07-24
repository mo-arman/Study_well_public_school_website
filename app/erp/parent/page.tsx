import PageHeader from "@/components/PageHeader";
import ErpLoginForm from "@/components/ErpLoginForm";

export default function ParentErpPage() {
  return (
    <>
      <PageHeader eyebrow="ERP" title="Parent Login" />
      <div className="container-custom py-16 max-w-sm">
        <ErpLoginForm
          providerId="parent"
          usernameLabel="Registered Mobile Number"
          dashboardPath="/erp/dashboard/parent"
        />
      </div>
    </>
  );
}
