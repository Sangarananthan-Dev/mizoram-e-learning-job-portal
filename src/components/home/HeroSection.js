import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ tracks, stats }) {
  return (
    <section className="shell">
      <div className="grid gap-10 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <span className="eyebrow">Mizoram Skill Platform</span>
          <h1 className="display-heading max-w-3xl text-5xl leading-tight sm:text-6xl">
            Learn local. Work global.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-copy)]">
            Mizoram&apos;s skill platform, built for our people, our crafts, and
            our future. Learn from people who know Mizoram. Work from anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learn" className="button-primary">
              Start Learning
            </Link>
            <Link href="/freelance" className="button-secondary">
              Find Freelancers
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div
              className="section-card p-4"
              style={{ borderLeftColor: "var(--color-terracotta)" }}
            >
              <p className="text-2xl font-bold text-[var(--color-heading)]">
                {stats.coursesAvailable}
              </p>
              <p className="fine-copy mt-2">
                Courses shaped around real Mizoram opportunities.
              </p>
            </div>
            <div
              className="section-card p-4"
              style={{ borderLeftColor: "var(--color-slate)" }}
            >
              <p className="text-2xl font-bold text-[var(--color-heading)]">
                {stats.activeFreelancers}
              </p>
              <p className="fine-copy mt-2">
                Freelancers already visible to departments and clients.
              </p>
            </div>
            <div
              className="section-card p-4"
              style={{ borderLeftColor: "var(--color-moss)" }}
            >
              <p className="text-2xl font-bold text-[var(--color-heading)]">
                {stats.districtsReached}
              </p>
              <p className="fine-copy mt-2">
                Districts reached with training and earning pathways.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {tracks.map((track) => (
            <article
              key={track.domain}
              className="section-card overflow-hidden"
              style={{ borderLeftColor: track.color }}
            >
              <div className="relative aspect-[5/4]">
                <Image
                  src={track.image}
                  alt={track.domain}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 22vw"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {track.shortLabel}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-[var(--color-heading)]">
                  {track.domain}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-copy)]">
                  {track.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
