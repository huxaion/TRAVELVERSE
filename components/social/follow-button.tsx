"use client";

import { useState } from "react";

export function FollowButton() {
  const [followed, setFollowed] = useState(false);
  return (
    <button
      className="rounded-full border px-3 py-1 text-sm"
      aria-label={followed ? "Unfollow" : "Follow"}
      onClick={() => setFollowed((v) => !v)}
    >
      {followed ? "Following" : "Follow"}
    </button>
  );
}
