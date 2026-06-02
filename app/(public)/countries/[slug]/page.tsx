import { countries } from "@/data/countries";
import { EmptyState } from "@/components/ui/empty-state";

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = countries.find((item) => item.slug === slug);
  if (!country) return <EmptyState title="Country not found" />;

  return (
    <section className="space-y-4">
      <div className="card">
        <h1 className="text-2xl font-bold">{country.name}</h1>
        <p className="text-sm">Best time: {country.bestTime}</p>
        <p className="text-sm">Currency: {country.currency}</p>
        <p className="text-sm">Language: {country.language}</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Visa info, weather, and live crowd-risk are placeholders for future API integration.</p>
      </div>
    </section>
  );
}
