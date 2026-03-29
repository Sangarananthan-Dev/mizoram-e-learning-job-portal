import Link from "next/link";

import SectionHeading from "@/components/common/SectionHeading";

export default function DomainTrackGrid({ tracks }) {
  return (
    <section className="shell mt-16 lg:mt-20">
      <SectionHeading
        eyebrow="Skill Tracks"
        title="What do you want to learn?"
        description="Four tracks chosen for Mizoram's real economy: digital work, craft commerce, hospitality, and organic value chains."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {tracks.map((track) => (
          <article
            key={track.domain}
            className="section-card p-6"
            style={{ borderLeftColor: track.color }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {track.courseCount} sample courses
                </p>
                <h3 className="display-heading mt-3 text-2xl">
                  {track.domain}
                </h3>
              </div>
              <span
                className="rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ backgroundColor: track.color }}
              >
                {track.shortLabel}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
              {track.why}
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              Featured: {track.featuredCourse}
            </p>
            <Link
              href={`/learn?domain=${encodeURIComponent(track.tag)}`}
              className="mt-5 inline-flex text-sm font-semibold text-[var(--color-heading)]"
            >
              Explore track
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
