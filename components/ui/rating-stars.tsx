export function RatingStars({ value = 5 }: { value?: number }) {
  const normalized = Math.max(0, Math.min(5, value));
  const filled = Math.round(normalized);
  const stars = `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`;

  return (
    <p className="text-amber-500" aria-label={`Rating: ${normalized.toFixed(1)} out of 5 stars`}>
      <span aria-hidden="true">{stars}</span>
    </p>
  );
}
