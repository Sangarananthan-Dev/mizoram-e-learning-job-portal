import SectionHeading from "@/components/common/SectionHeading";
import CourseCard from "@/components/learn/CourseCard";

export default function FeaturedCourses({ courses }) {
  return (
    <section className="shell mt-16 lg:mt-20">
      <SectionHeading
        eyebrow="Featured Courses"
        title="Courses built around local strength"
        description="Start with flexible, certificate-ready learning paths taught by practitioners who understand Mizoram's context."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
