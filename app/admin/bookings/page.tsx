import { AdminLayout } from "@/components/layout/admin-layout";

export default function Page() {
  return (
    <AdminLayout>
      <section className="card">
        <h1 className="text-2xl font-bold">Manage Bookings</h1>
        <p className="mt-2 text-sm">Admin placeholder for TravelVerse operations and moderation.</p>
      </section>
    </AdminLayout>
  );
}
