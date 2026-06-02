"use client";

import { useState } from "react";

export function Tabs({ items }: { items: { label: string; content: string }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="card">
      <div className="mb-3 flex gap-2">
        {items.map((item, index) => (
          <button
            key={item.label}
            onClick={() => setActive(index)}
            className={`rounded-full px-3 py-1 text-sm ${active === index ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800"}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="text-sm">{items[active]?.content}</p>
    </div>
  );
}
