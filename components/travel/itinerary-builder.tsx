import { itineraries } from "@/data/itineraries";
import { ItineraryDayCard } from "@/components/cards/itinerary-day-card";

export function ItineraryBuilder() {
  const itinerary = itineraries[0];

  return (
    <section className="card space-y-3">
      <h2 className="text-xl font-semibold">AI Trip Brain (Mock)</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400">{itinerary.title}</p>
      <div className="grid gap-3 md:grid-cols-3">
        {itinerary.days.map((day) => (
          <ItineraryDayCard key={day} title={day} details="Budget-aware and safety-aware suggestion." />
        ))}
      </div>
    </section>
  );
}
