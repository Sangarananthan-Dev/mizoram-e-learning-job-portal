"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CourseCard from "@/components/learn/CourseCard";
import DomainTabs from "@/components/nav/DomainTabs";
import { levelOptions } from "@/lib/constants";

const domainOptions = ["All", "IT", "Craft", "Tourism", "Agriculture"];

function normalizeDomain(value) {
  return domainOptions.includes(value) ? value : "All";
}

function normalizeLevel(value) {
  return levelOptions.includes(value) ? value : "All";
}

export default function CourseGrid({ courses }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [domain, setDomain] = useState(
    normalizeDomain(searchParams.get("domain") || "All"),
  );
  const [level, setLevel] = useState(
    normalizeLevel(searchParams.get("level") || "All"),
  );

  useEffect(() => {
    setDomain(normalizeDomain(searchParams.get("domain") || "All"));
    setLevel(normalizeLevel(searchParams.get("level") || "All"));
  }, [searchParams]);

  const updateQuery = (nextDomain, nextLevel) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextDomain === "All") {
      params.delete("domain");
    } else {
      params.set("domain", nextDomain);
    }
    if (nextLevel === "All") {
      params.delete("level");
    } else {
      params.set("level", nextLevel);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const filteredCourses = courses.filter((course) => {
    const matchesDomain = domain === "All" || course.domainTag === domain;
    const matchesLevel = level === "All" || course.level === level;
    return matchesDomain && matchesLevel;
  });

  return (
    <div className="mt-8">
      <div
        className="section-card p-5"
        style={{ borderLeftColor: "var(--color-terracotta)" }}
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--color-copy)]">
              Filter by domain
            </p>
            <DomainTabs
              options={domainOptions}
              value={domain}
              onChange={(nextDomain) => {
                setDomain(nextDomain);
                updateQuery(nextDomain, level);
              }}
            />
          </div>

          <label className="block max-w-xs text-sm font-semibold text-[var(--color-copy)]">
            Level
            <select
              className="select-field mt-2"
              value={level}
              onChange={(event) => {
                const nextLevel = event.target.value;
                setLevel(nextLevel);
                updateQuery(domain, nextLevel);
              }}
            >
              {levelOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-[var(--color-copy)]">
        <p>{filteredCourses.length} courses shown</p>
        <p>Local JSON sample catalog</p>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
