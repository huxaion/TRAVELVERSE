"use client";

import { useState } from "react";

export function LikeButton({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial);
  return (
    <button className="rounded-full border px-3 py-1 text-sm" onClick={() => setCount((v) => v + 1)}>
      ❤️ {count}
    </button>
  );
}
