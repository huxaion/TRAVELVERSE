export function SortDropdown() {
  return (
    <select className="rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
      <option>Sort: Recommended</option>
      <option>Price: Low to High</option>
      <option>Rating: High to Low</option>
      <option>Most Saved</option>
    </select>
  );
}
