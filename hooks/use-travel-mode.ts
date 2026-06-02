import { useMemo } from "react";

export function useTravelMode(input: string) {
  return useMemo(() => input.trim().toLowerCase(), [input]);
}
