import Link from "next/link";

import DomainPill from "@/components/common/DomainPill";
import SmartImage from "@/components/common/SmartImage";
import { availabilityMeta, domainMeta } from "@/lib/constants";

export default function FreelancerProfile({ freelancer }) {
  const status = availabilityMeta[freelancer.availability];
  const domain = domainMeta[freelancer.domain];

  return (
    <div className="shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.36fr]">
        <section>
          <div
            className="section-card overflow-hidden"
            style={{ borderLeftColor: `#${freelancer.domainColor}` }}
          >
            <div className="relative aspect-[16/7]">
              <SmartImage
                src={domain.image}
                alt={freelancer.domain}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-[rgba(26,26,46,0.28)]" />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <DomainPill
                  tag={freelancer.domainTag}
                  color={`#${freelancer.domainColor}`}
                />
                <span className="inline-flex items-center gap-2 text-sm text-[var(--color-copy)]">
                  <span
                    className="status-dot"
                    style={{ backgroundColor: status.color }}
                  />
                  {status.label}
                </span>
              </div>

              <h1 className="display-heading mt-5 text-5xl">
                {freelancer.name}
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
                {freelancer.bio}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-sm font-semibold text-[var(--color-heading)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside
          className="section-card h-fit p-6"
          style={{ borderLeftColor: `#${freelancer.domainColor}` }}
        >
          <p className="eyebrow mb-3">At a glance</p>
          <div className="grid gap-4 text-sm text-[var(--color-copy)]">
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                District:
              </span>{" "}
              {freelancer.district}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                Rate:
              </span>{" "}
              {freelancer.rate}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                Courses completed:
              </span>{" "}
              {freelancer.coursesCompleted}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                Gigs completed:
              </span>{" "}
              {freelancer.gigsCompleted}
            </p>
            <p>
              <span className="font-semibold text-[var(--color-heading)]">
                Rating:
              </span>{" "}
              {freelancer.rating}
            </p>
          </div>
          <div className="mt-5 grid gap-3">
            <button type="button" className="button-primary">
              Contact Freelancer
            </button>
            <Link href="/freelance?tab=work" className="button-secondary">
              Browse open gigs
            </Link>
          </div>
        </aside>
      </div>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div
          className="section-card p-6"
          style={{ borderLeftColor: `#${freelancer.domainColor}` }}
        >
          <p className="eyebrow mb-3">Portfolio</p>
          <div className="grid gap-3">
            {freelancer.portfolio.map((item) => (
              <div
                key={item}
                className="rounded-lg bg-[var(--color-surface)] px-4 py-4"
              >
                <p className="font-semibold text-[var(--color-heading)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="section-card p-6"
          style={{ borderLeftColor: `#${freelancer.domainColor}` }}
        >
          <p className="eyebrow mb-3">Completed Learning</p>
          <div className="grid gap-3">
            {freelancer.matchedCourses.map((course) => (
              <Link
                key={course.id}
                href={`/learn/${course.id}`}
                className="rounded-lg border border-[var(--color-border)] px-4 py-4 transition hover:border-[var(--color-border-strong)]"
              >
                <p className="font-semibold text-[var(--color-heading)]">
                  {course.title}
                </p>
                <p className="mt-2 text-sm text-[var(--color-copy)]">
                  {course.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
