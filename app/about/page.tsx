import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/siteConfig";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Our Story"
        description={`How ${siteConfig.schoolName} came to be, and where we're headed.`}
      />
      <div className="container-custom py-16 space-y-16">
        {/* TODO: Replace each block below with real content once client provides it */}
        <section>
          <h2 className="font-display text-2xl text-navy font-semibold mb-3">History</h2>
          <p className="text-navy-ink/70 leading-relaxed max-w-3xl">
            {siteConfig.schoolName}, {siteConfig.city}, has been delivering
            CBSE-affiliated education for over 20 years — from Play Group
            through Class XII. [ TODO: add specific founding story, year-by-year
            milestones, and growth details from the school office. ]
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy font-semibold mb-3">Mission & Vision</h2>
          <p className="text-navy-ink/70 leading-relaxed max-w-3xl mb-4">
            {siteConfig.schoolName} is committed to delivering excellence in
            education through innovation, discipline, and values.
          </p>
          <p className="text-navy-ink/70 leading-relaxed max-w-3xl">
            Our mission is to empower students with knowledge, skills, and
            integrity so they can confidently face the challenges of tomorrow
            and lead with purpose.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy font-semibold mb-3">Founder's Message</h2>
          <p className="text-navy-ink/70 leading-relaxed max-w-3xl">
            [ Placeholder — add founder photo + message here. ]
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy font-semibold mb-3">Principal's Desk</h2>
          <p className="text-navy-ink/70 leading-relaxed max-w-3xl">
            [ Placeholder — add principal photo + welcome message here. ]
          </p>
        </section>
      </div>
    </>
  );
}
