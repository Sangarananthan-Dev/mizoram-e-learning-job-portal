"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import FreelancerList from "@/components/freelance/FreelancerList";
import GigBoard from "@/components/freelance/GigBoard";
import PostGig from "@/components/freelance/PostGig";
import DomainTabs from "@/components/nav/DomainTabs";

const domainOptions = ["All", "IT", "Craft", "Tourism", "Agriculture"];

function getBudgetNumber(budget) {
  const digits = budget.replace(/[^\d]/g, "");
  return Number.parseInt(digits.slice(0, 5), 10) || 0;
}

export default function FreelanceWorkspace({ gigs, freelancers }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [tab, setTab] = useState(searchParams.get("tab") || "work");
  const [domain, setDomain] = useState(searchParams.get("domain") || "All");
  const [availability, setAvailability] = useState(
    searchParams.get("availability") || "All",
  );
  const [district, setDistrict] = useState(
    searchParams.get("district") || "All",
  );
  const [location, setLocation] = useState(
    searchParams.get("location") || "All",
  );
  const [budget, setBudget] = useState(searchParams.get("budget") || "All");

  useEffect(() => {
    setTab(searchParams.get("tab") || "work");
    setDomain(searchParams.get("domain") || "All");
    setAvailability(searchParams.get("availability") || "All");
    setDistrict(searchParams.get("district") || "All");
    setLocation(searchParams.get("location") || "All");
    setBudget(searchParams.get("budget") || "All");
  }, [searchParams]);

  const updateQuery = (nextState) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(nextState).forEach(([key, value]) => {
      if (!value || value === "All" || (key === "tab" && value === "work")) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  };

  const filteredGigs = gigs.filter((gig) => {
    const matchesDomain = domain === "All" || gig.domainTag === domain;
    const matchesLocation =
      location === "All" ||
      gig.location.toLowerCase().includes(location.toLowerCase());

    const amount = getBudgetNumber(gig.budget);
    const matchesBudget =
      budget === "All" ||
      (budget === "Under 5000" && amount < 5000) ||
      (budget === "5000-10000" && amount >= 5000 && amount <= 10000) ||
      (budget === "10000+" && amount > 10000);

    return matchesDomain && matchesLocation && matchesBudget;
  });

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesDomain = domain === "All" || freelancer.domainTag === domain;
    const matchesAvailability =
      availability === "All" ||
      freelancer.availability === availability.toLowerCase();
    const matchesDistrict =
      district === "All" || freelancer.district === district;
    return matchesDomain && matchesAvailability && matchesDistrict;
  });

  const districtOptions = [
    "All",
    ...new Set(freelancers.map((item) => item.district)),
  ];

  return (
    <div className="mt-8">
      <div
        className="section-card p-5"
        style={{ borderLeftColor: "var(--color-slate)" }}
      >
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className={tab === "work" ? "button-primary" : "button-secondary"}
            onClick={() => {
              setTab("work");
              updateQuery({ tab: "work" });
            }}
          >
            Find Work
          </button>
          <button
            type="button"
            className={tab === "talent" ? "button-primary" : "button-secondary"}
            onClick={() => {
              setTab("talent");
              updateQuery({ tab: "talent" });
            }}
          >
            Find Talent
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <div>
            <p className="mb-3 text-sm font-semibold text-[var(--color-copy)]">
              Domain
            </p>
            <DomainTabs
              options={domainOptions}
              value={domain}
              onChange={(nextDomain) => {
                setDomain(nextDomain);
                updateQuery({
                  tab,
                  domain: nextDomain,
                  availability,
                  district,
                  location,
                  budget,
                });
              }}
            />
          </div>

          {tab === "work"
            ? <div className="grid gap-4 lg:grid-cols-3">
                <label className="text-sm font-semibold text-[var(--color-copy)]">
                  Location
                  <select
                    className="select-field mt-2"
                    value={location}
                    onChange={(event) => {
                      const nextLocation = event.target.value;
                      setLocation(nextLocation);
                      updateQuery({
                        tab,
                        domain,
                        location: nextLocation,
                        budget,
                      });
                    }}
                  >
                    {[
                      "All",
                      "Remote",
                      "Aizawl",
                      "Champhai",
                      "Lunglei",
                      "Mamit",
                    ].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-semibold text-[var(--color-copy)]">
                  Budget
                  <select
                    className="select-field mt-2"
                    value={budget}
                    onChange={(event) => {
                      const nextBudget = event.target.value;
                      setBudget(nextBudget);
                      updateQuery({
                        tab,
                        domain,
                        location,
                        budget: nextBudget,
                      });
                    }}
                  >
                    {["All", "Under 5000", "5000-10000", "10000+"].map(
                      (option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ),
                    )}
                  </select>
                </label>
              </div>
            : <div className="grid gap-4 lg:grid-cols-3">
                <label className="text-sm font-semibold text-[var(--color-copy)]">
                  Availability
                  <select
                    className="select-field mt-2"
                    value={availability}
                    onChange={(event) => {
                      const nextAvailability = event.target.value;
                      setAvailability(nextAvailability);
                      updateQuery({
                        tab,
                        domain,
                        availability: nextAvailability,
                        district,
                      });
                    }}
                  >
                    {["All", "available", "busy"].map((option) => (
                      <option key={option} value={option}>
                        {option === "All"
                          ? option
                          : option[0].toUpperCase() + option.slice(1)}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="text-sm font-semibold text-[var(--color-copy)]">
                  District
                  <select
                    className="select-field mt-2"
                    value={district}
                    onChange={(event) => {
                      const nextDistrict = event.target.value;
                      setDistrict(nextDistrict);
                      updateQuery({
                        tab,
                        domain,
                        availability,
                        district: nextDistrict,
                      });
                    }}
                  >
                    {districtOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>}
        </div>
      </div>

      <div className="mt-5 grid gap-5">
        {tab === "work"
          ? <GigBoard gigs={filteredGigs} />
          : <FreelancerList freelancers={filteredFreelancers} />}
        {tab === "work" ? <PostGig /> : null}
      </div>
    </div>
  );
}
