import { notFound } from "next/navigation";

import PageShell from "@/components/common/PageShell";
import FreelancerProfile from "@/components/freelance/FreelancerProfile";
import { getFreelancerById } from "@/lib/data";

export default async function FreelancerPage({ params }) {
  const { id } = await params;
  const freelancer = getFreelancerById(id);

  if (!freelancer) {
    notFound();
  }

  return (
    <PageShell>
      <FreelancerProfile freelancer={freelancer} />
    </PageShell>
  );
}
