import { DashboardLayout } from "@/components/layout/dashboard-layout";

export default function Page() {
  return (
    <DashboardLayout>
      <section className="card">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>
        <p className="mt-2 text-sm">User dashboard module for TravelVerse MVP.</p>
      </section>
    </DashboardLayout>
  );
}
