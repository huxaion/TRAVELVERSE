import { destinations } from "@/data/destinations";
import { EmptyState } from "@/components/ui/empty-state";

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return <EmptyState title="Destination not found" />;

  return (
    <section className="card">
      <h1 className="text-2xl font-bold">{destination.name}</h1>
      <p className="mt-2 text-sm">{destination.summary}</p>
      <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400">Hidden gem: {destination.hiddenGem}</p>
    </section>
  );
}
