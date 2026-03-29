import PageShell from "@/components/common/PageShell";
import SectionHeading from "@/components/common/SectionHeading";
import ActiveFreelancers from "@/components/home/ActiveFreelancers";
import DomainTrackGrid from "@/components/home/DomainTrackGrid";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import {
  getDomainTracks,
  getFeaturedCourses,
  getFeaturedFreelancers,
  stats,
} from "@/lib/data";

export default function Home() {
  const tracks = getDomainTracks();
  const featuredCourses = getFeaturedCourses().slice(0, 3);
  const featuredFreelancers = getFeaturedFreelancers();

  return (
    <PageShell>
      <HeroSection tracks={tracks} stats={stats} />
      <StatsStrip stats={stats} />
      <DomainTrackGrid tracks={tracks} />
      <FeaturedCourses courses={featuredCourses} />
      <ActiveFreelancers freelancers={featuredFreelancers} />

      <section id="about" className="shell mt-16 lg:mt-20">
        <SectionHeading
          eyebrow="How It Works"
          title="One platform. One journey from learning to earning."
          description="Mizoram SkillLink is not two disconnected dashboards. A learner completes a course, earns a certificate, and moves directly into the freelance marketplace with visible skills and proof of work."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article
            className="section-card p-6"
            style={{ borderLeftColor: "var(--color-terracotta)" }}
          >
            <p className="eyebrow mb-3">01 Learn</p>
            <h3 className="display-heading text-2xl">Build practical skills</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
              Structured courses cover digital work, craft commerce, tourism
              operations, and agriculture-ready business skills.
            </p>
          </article>
          <article
            className="section-card p-6"
            style={{ borderLeftColor: "var(--color-slate)" }}
          >
            <p className="eyebrow mb-3">02 Certify</p>
            <h3 className="display-heading text-2xl">
              Earn proof of capability
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
              Certificates make learning visible and ready for employer trust,
              profile building, and role matching.
            </p>
          </article>
          <article
            className="section-card p-6"
            style={{ borderLeftColor: "var(--color-moss)" }}
          >
            <p className="eyebrow mb-3">03 Work</p>
            <h3 className="display-heading text-2xl">Start taking gigs</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">
              Departments, NGOs, homestays, craft groups, and remote clients can
              discover talent by skill, district, and availability.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
