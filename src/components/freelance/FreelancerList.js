import FreelancerCard from "@/components/freelance/FreelancerCard";

export default function FreelancerList({ freelancers }) {
  if (freelancers.length === 0) {
    return (
      <div
        className="section-card p-6"
        style={{ borderLeftColor: "var(--color-terracotta)" }}
      >
        <p className="text-sm text-[var(--color-copy)]">
          No freelancers match the current filters yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {freelancers.map((freelancer) => (
        <FreelancerCard
          key={freelancer.id}
          freelancer={freelancer}
          horizontal
        />
      ))}
    </div>
  );
}
