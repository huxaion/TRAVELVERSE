When creating or renaming files, do not use `[` or `]` in file or directory names.

The Copilot CI CodeQL `pr-diff-range` extension currently fails on changed paths containing bracketed segments (for example `app/cities/[slug]/page.tsx` or `app/(public)/cities/[slug]/page.tsx`).

Use static route paths and parse dynamic values from query parameters instead.
