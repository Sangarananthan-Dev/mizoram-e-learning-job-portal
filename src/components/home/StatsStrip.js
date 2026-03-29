import CountUp from "@/components/common/CountUp";

const statItems = [
  { key: "totalLearners", label: "Learners" },
  { key: "coursesAvailable", label: "Courses" },
  { key: "activeFreelancers", label: "Freelancers" },
  { key: "districtsReached", label: "Districts" },
];

export default function StatsStrip({ stats }) {
  return (
    <section className="shell mt-8">
      <div className="grid gap-4 rounded-[10px] border border-[var(--color-border)] bg-white p-5 sm:grid-cols-2 lg:grid-cols-4">
        {statItems.map((item) => (
          <div key={item.key} className="border-b border-[var(--color-border)] pb-4 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4 sm:last:border-r-0">
            <p className="display-heading text-3xl">
              <CountUp value={stats[item.key]} />
            </p>
            <p className="mt-2 text-sm text-[var(--color-copy)]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
