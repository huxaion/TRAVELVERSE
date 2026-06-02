import Link from "next/link";
import { HeroSearch } from "@/components/travel/hero-search";
import { DestinationCard } from "@/components/cards/destination-card";
import { destinations } from "@/data/destinations";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <HeroSearch />
      <section className="grid gap-4 md:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} title={destination.name} subtitle={destination.summary} details={`Hidden gem: ${destination.hiddenGem}`} />
        ))}
      </section>
      <div className="flex flex-wrap gap-3">
        <Link className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white dark:bg-slate-100 dark:text-slate-900" href="/explore">Explore</Link>
        <Link className="rounded-xl border px-4 py-2 text-sm" href="/community">Community</Link>
        <Link className="rounded-xl border px-4 py-2 text-sm" href="/ai-planner">AI Planner</Link>
      </div>
    </div>
  );
}
