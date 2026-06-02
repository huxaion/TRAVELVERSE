type Props = { title: string; subtitle?: string; details?: string };

export function ItineraryDayCard({ title, subtitle, details }: Props) {
  return (
    <article className="card space-y-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      {subtitle ? <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p> : null}
      {details ? <p className="text-sm">{details}</p> : null}
    </article>
  );
}
