import { Suspense } from "react";

import PageShell from "@/components/common/PageShell";
import SectionHeading from "@/components/common/SectionHeading";
import FreelanceWorkspace from "@/components/freelance/FreelanceWorkspace";
import { freelancers, gigs } from "@/lib/data";

export const metadata = {
  title: "Freelance",
};

export default function FreelancePage() {
  return (
    <PageShell>
      <section className="shell">
        <SectionHeading
          eyebrow="Freelance"
          title="Find work. Find talent."
          description="Explore open gigs from departments and organisations, or browse certified freelancers by skill, district, and availability."
        />
        <Suspense
          fallback={
            <div
              className="section-card mt-8 p-6"
              style={{ borderLeftColor: "var(--color-slate)" }}
            >
              <p className="text-sm text-[var(--color-copy)]">
                Loading marketplace...
              </p>
            </div>
          }
        >
          <FreelanceWorkspace gigs={gigs} freelancers={freelancers} />
        </Suspense>
      </section>
    </PageShell>
  );
}
