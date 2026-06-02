export function SearchBar({ placeholder = "Search..." }: { placeholder?: string }) {
  return (
    <input
      type="search"
      aria-label="Search destinations"
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
    />
  );
}
