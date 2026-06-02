"use client";

import { useState } from "react";

export function LikeButton({ initial = 0 }: { initial?: number }) {
  const [state, setState] = useState({ liked: false, count: initial });
  return (
    <button
      className="rounded-full border px-3 py-1 text-sm"
      aria-label={state.liked ? "Unlike" : "Like"}
      onClick={() =>
        setState((prev) => ({
          liked: !prev.liked,
          count: prev.liked ? Math.max(initial, prev.count - 1) : prev.count + 1,
        }))
      }
    >
      ❤️ {state.count}
    </button>
  );
}
