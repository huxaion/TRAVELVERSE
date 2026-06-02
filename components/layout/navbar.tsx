import Link from "next/link";
import { SearchBar } from "@/components/forms/search-bar";

const links = [
  ["Explore", "/explore"],
  ["AI Planner", "/ai-planner"],
  ["Community", "/community"],
  ["Safety", "/safety"],
  ["Dashboard", "/dashboard"],
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
          TravelVerse
        </Link>
        <div className="hidden lg:block lg:w-80">
          <SearchBar placeholder="Search countries, cities, posts..." />
        </div>
        <nav className="flex items-center gap-3 text-sm" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-900">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
