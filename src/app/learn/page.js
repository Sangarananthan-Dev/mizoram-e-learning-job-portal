import { Suspense } from "react";

import PageShell from "@/components/common/PageShell";
import SectionHeading from "@/components/common/SectionHeading";
import CourseGrid from "@/components/learn/CourseGrid";
import { courses } from "@/lib/data";

export const metadata = {
  title: "Learn",
};

export default function LearnPage() {
  return (
    <PageShell>
      <section className="shell">
        <SectionHeading
          eyebrow="Learn"
          title="Choose a track, then build at your own pace"
          description="Filter by domain and level, explore practical courses, and enroll into certificate-ready pathways grounded in Mizoram's opportunities."
        />
        <Suspense
          fallback={
            <div
              className="section-card mt-8 p-6"
              style={{ borderLeftColor: "var(--color-terracotta)" }}
            >
              <p className="text-sm text-[var(--color-copy)]">
                Loading course catalog...
              </p>
            </div>
          }
        >
          <CourseGrid courses={courses} />
        </Suspense>
      </section>
    </PageShell>
  );
}
