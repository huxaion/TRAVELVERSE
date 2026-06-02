import { cities } from "@/data/cities";
import { EmptyState } from "@/components/ui/empty-state";
import { MapPlaceholder } from "@/components/travel/map-placeholder";

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = cities.find((item) => item.slug === slug);
  if (!city) return <EmptyState title="City not found" />;

  return (
    <section className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-bold">{city.name}</h1>
        <p className="text-sm">Average daily budget: {city.averageBudget}</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Includes safety notes, local transport pointers, emergency contacts, and food preference filters.</p>
      </div>
      <MapPlaceholder />
    </section>
  );
}
