When creating or renaming files, do not use `[` or `]` in file or directory names.

The Copilot CI CodeQL `pr-diff-range` extension fails on changed paths containing bracketed segments (for example `app/(public)/cities/[slug]/page.tsx`), causing workflow failures.

Do not create Next.js dynamic route folders like `[slug]`; use static route paths and parse dynamic values from query parameters instead.
