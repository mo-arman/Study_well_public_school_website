import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";
import { siteConfig } from "@/lib/siteConfig";

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers for parents. Don't see your question? Reach out to us directly."
      />
      <div className="container-custom py-16 max-w-2xl">
        <Accordion items={siteConfig.faqs} />
      </div>
    </>
  );
}
