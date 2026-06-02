import { ItineraryBuilder } from "@/components/travel/itinerary-builder";
import { BudgetCalculator } from "@/components/travel/budget-calculator";

export default function AIPlannerPage() {
  return (
    <div className="space-y-6">
      <section className="card space-y-2">
        <h1 className="text-2xl font-bold">AI Planner</h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Generate itinerary, optimize budget, and receive scam/trap avoidance suggestions (mock response).
        </p>
      </section>
      <ItineraryBuilder />
      <BudgetCalculator />
    </div>
  );
}
