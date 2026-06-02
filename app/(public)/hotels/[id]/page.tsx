import { hotels } from "@/data/hotels";
import { EmptyState } from "@/components/ui/empty-state";
import { RatingStars } from "@/components/ui/rating-stars";

export default async function HotelPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const hotel = hotels.find((item) => item.id === id);
  if (!hotel) return <EmptyState title="Hotel not found" />;

  return (
    <section className="card">
      <h1 className="text-2xl font-bold">{hotel.name}</h1>
      <p className="text-sm">{hotel.city}</p>
      <p className="text-sm">${hotel.price}/night</p>
      <RatingStars value={hotel.rating} />
    </section>
  );
}
