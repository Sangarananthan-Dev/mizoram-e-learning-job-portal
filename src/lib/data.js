import courses from "@data/courses.json";
import freelancers from "@data/freelancers.json";
import gigs from "@data/gigs.json";
import stats from "@data/stats.json";
import {
  courseDetailContent,
  dashboardProfile,
  domainMeta,
  domainOrder,
} from "@/lib/constants";

export { courses, freelancers, gigs, stats, dashboardProfile };

export function getDomainMeta(domain) {
  return domainMeta[domain];
}

export function getDomainTracks() {
  return domainOrder.map((domain) => {
    const meta = domainMeta[domain];
    const domainCourses = courses.filter((course) => course.domain === domain);

    return {
      ...meta,
      domain,
      courseCount: domainCourses.length,
      featuredCourse: domainCourses[0]?.title,
    };
  });
}

export function getFeaturedCourses() {
  return courses.slice(0, 6);
}

export function getFeaturedFreelancers() {
  return freelancers.slice(0, 4);
}

export function getCourseById(id) {
  const course = courses.find((item) => item.id === id);
  if (!course) {
    return null;
  }

  return {
    ...course,
    detail: courseDetailContent[id] ?? {
      outcomes: [
        "Build practical capability for local and remote work.",
        "Learn from Mizoram-based examples and workflows.",
        "Finish with portfolio-ready output and a certificate pathway.",
      ],
      syllabus: [
        {
          title: "Core Foundations",
          lessons: ["Orientation", "Practical exercises", "Guided review"],
        },
        {
          title: "Applied Practice",
          lessons: ["Field examples", "Tools and templates", "Assessment"],
        },
      ],
    },
  };
}

export function getRelatedCourses(course) {
  return courses
    .filter((item) => item.domain === course.domain && item.id !== course.id)
    .slice(0, 3);
}

export function getFreelancerById(id) {
  const freelancer = freelancers.find((item) => item.id === id);
  if (!freelancer) {
    return null;
  }

  const matchedCourses = courses
    .filter((course) => course.domain === freelancer.domain)
    .slice(0, Math.max(2, freelancer.coursesCompleted));

  return {
    ...freelancer,
    matchedCourses,
  };
}

export function getDashboardData() {
  const enrolled = dashboardProfile.enrolledCourses
    .map((entry) => {
      const course = getCourseById(entry.id);
      return course ? { ...course, progress: entry.progress } : null;
    })
    .filter(Boolean);

  const certificates = dashboardProfile.certificates
    .map((certificate) => {
      const course = getCourseById(certificate.courseId);
      return course ? { ...certificate, course } : null;
    })
    .filter(Boolean);

  const suggested = dashboardProfile.suggestedCourseIds
    .map((id) => getCourseById(id))
    .filter(Boolean);

  return {
    profile: dashboardProfile,
    enrolled,
    certificates,
    suggested,
  };
}
