import { ReactNode } from "react";
import Link from "next/link";

const items = [
  ["Overview", "/dashboard"],
  ["Trips", "/dashboard/trips"],
  ["Saved", "/dashboard/saved"],
  ["Bookings", "/dashboard/bookings"],
  ["Itineraries", "/dashboard/itineraries"],
  ["Checklists", "/dashboard/checklists"],
  ["Profile", "/dashboard/profile"],
] as const;

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="card h-fit space-y-2">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            {label}
          </Link>
        ))}
      </aside>
      <section>{children}</section>
    </div>
  );
}
