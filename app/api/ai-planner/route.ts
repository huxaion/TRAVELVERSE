import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    source: "mock-ai-planner",
    itinerary: [
      "Day 1: City highlights + hidden gem",
      "Day 2: Local food and culture walk",
      "Day 3: Safety-first evening activity",
    ],
    note: "Integrate OpenAI API later with budget, safety, and preference inputs.",
  });
}
