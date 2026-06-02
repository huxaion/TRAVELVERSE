export function RatingStars({ value = 5 }: { value?: number }) {
  return <p className="text-amber-500">{"★".repeat(Math.round(value))}</p>;
}
