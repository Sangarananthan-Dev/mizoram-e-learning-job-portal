"use client";

import Image from "next/image";
import Link from "next/link";

import DomainPill from "@/components/common/DomainPill";
import ProgressBar from "@/components/common/ProgressBar";
import usePersistentState from "@/lib/usePersistentState";

export default function CourseCard({ course }) {
  const [enrolled, setEnrolled] = usePersistentState(
    `course:${course.id}:enrolled`,
    false,
  );
  const [progress, setProgress] = usePersistentState(
    `course:${course.id}:progress`,
    0,
  );

  const handleEnroll = () => {
    if (!enrolled) {
      setEnrolled(true);
      setProgress(progress > 0 ? progress : 18);
      return;
    }

    setProgress((current) => Math.min(current + 9, 100));
  };

  return (
    <article
      className="section-card overflow-hidden"
      style={{ borderLeftColor: `#${course.domainColor}` }}
    >
      <Link
        href={`/learn/${course.id}`}
        className="relative block aspect-[16/10]"
      >
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </Link>

      <div className="p-5">
        <DomainPill
          tag={course.domainTag}
          color={`#${course.domainColor}`}
          href={`/learn?domain=${encodeURIComponent(course.domainTag)}`}
        />
        <Link href={`/learn/${course.id}`}>
          <h3 className="mt-4 text-xl font-semibold leading-8 text-[var(--color-heading)]">
            {course.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm leading-7 text-[var(--color-copy)]">
          {course.subtitle}
        </p>

        <div className="mt-4 text-sm text-[var(--color-copy)]">
          <p className="font-semibold text-[var(--color-heading)]">
            {course.instructor}
          </p>
          <p>{course.instructorRole}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[var(--color-copy)]">
          <p>{course.duration}</p>
          <p>{course.lessons} lessons</p>
          <p>{course.enrolled.toLocaleString()} enrolled</p>
          <p>{course.rating} rating</p>
        </div>

        {enrolled
          ? <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-[var(--color-heading)]">
                  Progress
                </span>
                <span>{progress}%</span>
              </div>
              <ProgressBar value={progress} color={`#${course.domainColor}`} />
            </div>
          : null}

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            className="button-primary flex-1"
            onClick={handleEnroll}
          >
            {enrolled ? "Continue Learning" : "Enroll"}
          </button>
          <Link href={`/learn/${course.id}`} className="button-secondary">
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
