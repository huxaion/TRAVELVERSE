"use client";

import { useState } from "react";

export function SaveButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      className="rounded-full border px-3 py-1 text-sm"
      aria-label={saved ? "Unsave" : "Save"}
      onClick={() => setSaved((v) => !v)}
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
}
