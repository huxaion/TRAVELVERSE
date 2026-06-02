export function EmptyState({ title = "No data found." }: { title?: string }) {
  return <div className="card text-sm text-slate-500 dark:text-slate-400">{title}</div>;
}
