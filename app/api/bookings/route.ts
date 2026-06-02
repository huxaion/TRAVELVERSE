import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    source: "mock-booking-hub",
    providers: ["Flights API placeholder", "Hotels API placeholder", "Experiences API placeholder"],
    payment: "Stripe placeholder",
  });
}
