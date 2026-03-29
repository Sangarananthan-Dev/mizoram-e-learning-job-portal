import PageShell from "@/components/common/PageShell";
import LearnerDashboard from "@/components/profile/LearnerDashboard";
import { getDashboardData } from "@/lib/data";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  const data = getDashboardData();

  return (
    <PageShell>
      <LearnerDashboard data={data} />
    </PageShell>
  );
}
