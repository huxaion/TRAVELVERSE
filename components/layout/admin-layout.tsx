import { ReactNode } from "react";
import Link from "next/link";

const items = [
  ["Overview", "/admin"],
  ["Users", "/admin/users"],
  ["Countries", "/admin/countries"],
  ["Cities", "/admin/cities"],
  ["Destinations", "/admin/destinations"],
  ["Hotels", "/admin/hotels"],
  ["Restaurants", "/admin/restaurants"],
  ["Posts", "/admin/posts"],
  ["Reports", "/admin/reports"],
  ["Bookings", "/admin/bookings"],
  ["Stats", "/admin/stats"],
] as const;

export function AdminLayout({ children }: { children: ReactNode }) {
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
