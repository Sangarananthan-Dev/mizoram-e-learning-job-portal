import SectionHeading from "@/components/common/SectionHeading";
import FreelancerCard from "@/components/freelance/FreelancerCard";

export default function ActiveFreelancers({ freelancers }) {
  return (
    <section className="shell mt-16 lg:mt-20">
      <SectionHeading
        eyebrow="Active Freelancers"
        title="Learners who are already earning"
        description="Every certificate opens a pathway into the freelance side of Zawlbuk, so learning can turn into visible work opportunities."
      />

      <div className="mt-8 grid gap-4">
        {freelancers.map((freelancer) => (
          <FreelancerCard
            key={freelancer.id}
            freelancer={freelancer}
            horizontal
          />
        ))}
      </div>
    </section>
  );
}
