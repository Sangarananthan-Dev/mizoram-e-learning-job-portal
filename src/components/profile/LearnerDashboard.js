import Link from "next/link";

import ProgressBar from "@/components/common/ProgressBar";
import SectionHeading from "@/components/common/SectionHeading";
import CertificateCard from "@/components/profile/CertificateCard";
import { availabilityMeta } from "@/lib/constants";

export default function LearnerDashboard({ data }) {
  const status = availabilityMeta[data.profile.availability];

  return (
    <div className="shell">
      <SectionHeading
        eyebrow="Dashboard"
        title={`Welcome back, ${data.profile.learnerName}`}
        description="Track your enrolled courses, issued certificates, and the freelance profile that grows out of your learning."
      />

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <section
          className="section-card p-6"
          style={{ borderLeftColor: "var(--color-slate)" }}
        >
          <p className="eyebrow mb-3">My Courses</p>
          <div className="grid gap-5">
            {data.enrolled.map((course) => (
              <div
                key={course.id}
                className="rounded-lg border border-[var(--color-border)] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[var(--color-heading)]">
                      {course.title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-copy)]">
                      {course.instructor}
                    </p>
                  </div>
                  <Link
                    href={`/learn/${course.id}`}
                    className="button-secondary"
                  >
                    Continue
                  </Link>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-[var(--color-copy)]">Progress</span>
                  <span className="font-semibold text-[var(--color-heading)]">
                    {course.progress}%
                  </span>
                </div>
                <div className="mt-2">
                  <ProgressBar
                    value={course.progress}
                    color={`#${course.domainColor}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section-card p-6"
          style={{ borderLeftColor: "var(--color-moss)" }}
        >
          <p className="eyebrow mb-3">My Freelance Profile</p>
          <div className="grid gap-4 text-sm text-[var(--color-copy)]">
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                District:
              </span>{" "}
              {data.profile.district}
            </p>
            <p className="inline-flex items-center gap-2">
              <span className="font-semibold text-[var(--color-heading)]">
                Availability:
              </span>
              <span
                className="status-dot"
                style={{ backgroundColor: status.color }}
              />
              {status.label}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                Gigs applied:
              </span>{" "}
              {data.profile.gigsApplied}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                Gigs won:
              </span>{" "}
              {data.profile.gigsWon}
            </p>
          </div>
          <div className="mt-5 grid gap-3">
            <Link href="/freelance?tab=work" className="button-primary">
              Find Work
            </Link>
            <Link href="/freelance?tab=talent" className="button-secondary">
              View Talent Board
            </Link>
          </div>
        </section>
      </div>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Certificates Earned"
          title="Verified progress you can show"
          description="Certificates give learners a stronger profile and make employers more confident about skill readiness."
        />

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {data.certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Suggested Next"
          title="Recommended pathways"
          description="Two next steps based on your current direction across learning and work readiness."
        />

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {data.suggested.map((course) => (
            <Link
              key={course.id}
              href={`/learn/${course.id}`}
              className="section-card p-5"
              style={{ borderLeftColor: `#${course.domainColor}` }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {course.domainTag}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--color-heading)]">
                {course.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-copy)]">
                {course.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
