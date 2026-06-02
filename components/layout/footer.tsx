export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} TravelVerse. Open-source travel super-app MVP.</p>
        <p>Built for destination intelligence, safe travel decisions, and social travel planning.</p>
      </div>
    </footer>
  );
}
