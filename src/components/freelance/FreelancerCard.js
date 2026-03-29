import Link from "next/link";

import DomainPill from "@/components/common/DomainPill";
import { availabilityMeta } from "@/lib/constants";

export default function FreelancerCard({ freelancer, horizontal = false }) {
  const status = availabilityMeta[freelancer.availability];

  return (
    <article
      className={`section-card p-5 ${horizontal ? "lg:flex lg:items-start lg:justify-between" : ""}`}
      style={{ borderLeftColor: `#${freelancer.domainColor}` }}
    >
      <div className={horizontal ? "max-w-3xl" : ""}>
        <div className="flex flex-wrap items-center gap-3">
          <DomainPill
            tag={freelancer.domainTag}
            color={`#${freelancer.domainColor}`}
            href={`/freelance?tab=talent&domain=${encodeURIComponent(freelancer.domainTag)}`}
          />
          <span className="inline-flex items-center gap-2 text-sm text-[var(--color-copy)]">
            <span
              className="status-dot"
              style={{ backgroundColor: status.color }}
            />
            {status.label}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-[var(--color-heading)]">
          {freelancer.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-copy)]">
          {freelancer.bio}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {freelancer.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-heading)]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 text-sm text-[var(--color-copy)] sm:grid-cols-3">
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
              Rating:
            </span>{" "}
            {freelancer.rating}
          </p>
        </div>
      </div>

      <div className={`mt-5 ${horizontal ? "lg:mt-0 lg:pl-6" : ""}`}>
        <Link href={`/freelance/${freelancer.id}`} className="button-secondary">
          View Profile
        </Link>
      </div>
    </article>
  );
}
