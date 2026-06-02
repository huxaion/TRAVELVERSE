"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";

export function Tabs({ items }: { items: { label: string; content: string }[] }) {
  const [active, setActive] = useState(0);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!items.length) return;
    if (event.key === "ArrowRight") setActive((prev) => (prev + 1) % items.length);
    if (event.key === "ArrowLeft") setActive((prev) => (prev - 1 + items.length) % items.length);
    if (event.key === "Home") setActive(0);
    if (event.key === "End") setActive(items.length - 1);
  };

  return (
    <div className="card">
      <div className="mb-3 flex gap-2" role="tablist" aria-label="Tab navigation">
        {items.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActive(index)}
            role="tab"
            aria-selected={active === index}
            aria-controls={`panel-${index}`}
            id={`tab-${index}`}
            tabIndex={active === index ? 0 : -1}
            onKeyDown={handleKeyDown}
            className={`rounded-full px-3 py-1 text-sm ${active === index ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="text-sm" role="tabpanel" id={`panel-${active}`} aria-labelledby={`tab-${active}`}>
        {items[active]?.content}
      </p>
    </div>
  );
}
