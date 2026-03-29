"use client";

import DomainPill from "@/components/common/DomainPill";
import usePersistentState from "@/lib/usePersistentState";

export default function GigBoard({ gigs }) {
  const [applied, setApplied] = usePersistentState("gig-board:applied", {});

  const handleApply = (gigId) => {
    setApplied((current) => ({
      ...current,
      [gigId]: true,
    }));
  };

  if (gigs.length === 0) {
    return (
      <div
        className="section-card p-6"
        style={{ borderLeftColor: "var(--color-slate)" }}
      >
        <p className="text-sm text-[var(--color-copy)]">
          No gig listings match the current filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {gigs.map((gig) => {
        const hasApplied = Boolean(applied[gig.id]);

        return (
          <article
            key={gig.id}
            className="section-card p-5"
            style={{ borderLeftColor: `#${gig.domainColor}` }}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <DomainPill
                    tag={gig.domainTag}
                    color={`#${gig.domainColor}`}
                    href={`/freelance?tab=work&domain=${encodeURIComponent(gig.domainTag)}`}
                  />
                  <span className="text-sm text-[var(--color-copy)]">
                    {gig.posted}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-[var(--color-heading)]">
                  {gig.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-copy)]">
                  Posted by {gig.postedBy}
                </p>

                <div className="mt-4 grid gap-3 text-sm text-[var(--color-copy)] sm:grid-cols-2 xl:grid-cols-4">
                  <p>
                    <span className="font-semibold text-[var(--color-heading)]">
                      Budget:
                    </span>{" "}
                    {gig.budget}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-heading)]">
                      Duration:
                    </span>{" "}
                    {gig.duration}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-heading)]">
                      Location:
                    </span>{" "}
                    {gig.location}
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--color-heading)]">
                      Proposals:
                    </span>{" "}
                    {gig.proposals}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {gig.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-heading)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className={
                  hasApplied
                    ? "button-secondary min-w-36"
                    : "button-primary min-w-36"
                }
                onClick={() => handleApply(gig.id)}
              >
                {hasApplied ? "Applied" : "Apply"}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
