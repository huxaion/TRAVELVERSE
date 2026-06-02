import Link from "next/link";
import { SearchBar } from "@/components/forms/search-bar";

export function HeroSearch() {
  return (
    <section className="card bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950 dark:to-cyan-950">
      <h1 className="text-3xl font-bold">Plan smarter. Travel safer. Discover deeper.</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        AI itinerary planning, hidden gems, safety warnings, and social travel knowledge in one app.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <SearchBar placeholder="Where do you want to go?" />
        <Link href="/ai-planner" className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
          Generate AI Trip
        </Link>
      </div>
    </section>
  );
}
