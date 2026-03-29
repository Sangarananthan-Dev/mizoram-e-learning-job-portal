"use client";

import Image from "next/image";
import { useState } from "react";

export default function LessonPlayer({ course }) {
  const lessons = course.detail.syllabus.flatMap((module, moduleIndex) =>
    module.lessons.map((lesson, lessonIndex) => ({
      id: `${moduleIndex + 1}-${lessonIndex + 1}`,
      title: lesson,
      module: module.title,
    })),
  );
  const [activeLesson, setActiveLesson] = useState(lessons[0]);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
      <div
        className="section-card overflow-hidden"
        style={{ borderLeftColor: `#${course.domainColor}` }}
      >
        <div className="relative aspect-video">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
          <div className="absolute inset-0 bg-[rgba(26,26,46,0.32)] p-6 text-white">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Lesson Preview
                </p>
                <h3 className="display-heading mt-3 max-w-xl text-3xl text-white">
                  {activeLesson.title}
                </h3>
              </div>
              <p className="text-sm">{activeLesson.module}</p>
            </div>
          </div>
        </div>
      </div>

      <aside
        className="section-card p-5"
        style={{ borderLeftColor: `#${course.domainColor}` }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
          Lesson list
        </p>
        <div className="mt-4 grid gap-2">
          {lessons.map((lesson) => {
            const active = lesson.id === activeLesson.id;
            return (
              <button
                key={lesson.id}
                type="button"
                className={`rounded-lg border px-4 py-3 text-left transition ${
                  active
                    ? "border-[var(--color-slate)] bg-[var(--color-slate)] text-white"
                    : "border-[var(--color-border)] bg-white text-[var(--color-heading)]"
                }`}
                onClick={() => setActiveLesson(lesson)}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-80">
                  Lesson {lesson.id}
                </p>
                <p className="mt-1 text-sm font-semibold">{lesson.title}</p>
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
