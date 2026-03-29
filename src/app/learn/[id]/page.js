import { notFound } from "next/navigation";

import PageShell from "@/components/common/PageShell";
import CourseDetail from "@/components/learn/CourseDetail";
import { getCourseById, getRelatedCourses } from "@/lib/data";

export default async function CoursePage({ params }) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(course);

  return (
    <PageShell>
      <CourseDetail course={course} relatedCourses={relatedCourses} />
    </PageShell>
  );
}
