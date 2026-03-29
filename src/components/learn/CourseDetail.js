import Link from "next/link";

import DomainPill from "@/components/common/DomainPill";
import SectionHeading from "@/components/common/SectionHeading";
import CourseCard from "@/components/learn/CourseCard";
import LessonPlayer from "@/components/learn/LessonPlayer";

export default function CourseDetail({ course, relatedCourses }) {
  return (
    <div className="shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
        <section>
          <DomainPill tag={course.domainTag} color={`#${course.domainColor}`} />
          <h1 className="display-heading mt-5 max-w-3xl text-5xl leading-tight">
            {course.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            {course.subtitle}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div
              className="section-card p-4"
              style={{ borderLeftColor: `#${course.domainColor}` }}
            >
              <p className="text-sm text-[var(--color-muted)]">Instructor</p>
              <p className="mt-2 font-semibold text-[var(--color-heading)]">
                {course.instructor}
              </p>
              <p className="text-sm text-[var(--color-copy)]">
                {course.instructorRole}
              </p>
            </div>
            <div
              className="section-card p-4"
              style={{ borderLeftColor: `#${course.domainColor}` }}
            >
              <p className="text-sm text-[var(--color-muted)]">Duration</p>
              <p className="mt-2 font-semibold text-[var(--color-heading)]">
                {course.duration}
              </p>
            </div>
            <div
              className="section-card p-4"
              style={{ borderLeftColor: `#${course.domainColor}` }}
            >
              <p className="text-sm text-[var(--color-muted)]">Lessons</p>
              <p className="mt-2 font-semibold text-[var(--color-heading)]">
                {course.lessons}
              </p>
            </div>
            <div
              className="section-card p-4"
              style={{ borderLeftColor: `#${course.domainColor}` }}
            >
              <p className="text-sm text-[var(--color-muted)]">Language</p>
              <p className="mt-2 font-semibold text-[var(--color-heading)]">
                {course.language}
              </p>
            </div>
          </div>
        </section>

        <aside
          className="section-card h-fit p-6"
          style={{ borderLeftColor: `#${course.domainColor}` }}
        >
          <p className="eyebrow mb-3">Enrollment</p>
          <p className="text-3xl font-bold text-[var(--color-heading)]">
            {course.enrolled.toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-[var(--color-copy)]">
            learners already enrolled in this pathway.
          </p>
          <div className="mt-5 grid gap-3">
            <Link href="/dashboard" className="button-primary">
              Enroll Now
            </Link>
            <Link href="/freelance" className="button-secondary">
              View related work
            </Link>
          </div>
          {course.certificate
            ? <p className="mt-4 text-sm text-[var(--color-copy)]">
                Includes a completion certificate and automatic freelancer
                profile eligibility.
              </p>
            : <p className="mt-4 text-sm text-[var(--color-copy)]">
                Short-format practical course without certificate issuance.
              </p>}
        </aside>
      </div>

      <section className="mt-14">
        <SectionHeading
          eyebrow="Lesson Player"
          title="Preview the learning experience"
          description="Simple, focused learning with a clear lesson list and a practical flow."
        />
        <div className="mt-6">
          <LessonPlayer course={course} />
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div
          className="section-card p-6"
          style={{ borderLeftColor: `#${course.domainColor}` }}
        >
          <p className="eyebrow mb-3">Instructor</p>
          <h2 className="display-heading text-3xl">{course.instructor}</h2>
          <p className="mt-3 text-sm font-semibold text-[var(--color-heading)]">
            {course.instructorRole}
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
            This course is taught through examples grounded in Mizoram&apos;s
            day-to-day work realities, so learners can move from understanding
            to practical delivery.
          </p>

          <div className="mt-6">
            <p className="mb-3 text-sm font-semibold text-[var(--color-heading)]">
              What you&apos;ll take away
            </p>
            <ul className="grid gap-3 text-sm leading-7 text-[var(--color-copy)]">
              {course.detail.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-lg bg-[var(--color-surface)] px-4 py-3"
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="section-card p-6"
          style={{ borderLeftColor: `#${course.domainColor}` }}
        >
          <p className="eyebrow mb-3">Syllabus</p>
          <div className="grid gap-3">
            {course.detail.syllabus.map((module, index) => (
              <details
                key={module.title}
                open={index === 0}
                className="rounded-lg border border-[var(--color-border)] bg-white p-4"
              >
                <summary className="flex items-center justify-between gap-3">
                  <span className="font-semibold text-[var(--color-heading)]">
                    {module.title}
                  </span>
                  <span className="text-sm text-[var(--color-copy)]">
                    {module.lessons.length} lessons
                  </span>
                </summary>
                <ul className="mt-4 grid gap-2 text-sm leading-7 text-[var(--color-copy)]">
                  {module.lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading
          eyebrow="More in this Track"
          title="Keep building your pathway"
          description="Related courses from the same domain to help learners move from foundations into earning-ready specialization."
        />
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedCourses.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
