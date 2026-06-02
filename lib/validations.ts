import { z } from "zod";

export const aiPlannerSchema = z.object({
  destination: z.string().min(2),
  budget: z.number().nonnegative(),
  days: z.number().int().positive().max(30),
  style: z.string().min(2),
});

export const postSchema = z.object({
  content: z.string().min(2).max(1000),
  country: z.string().min(2),
  city: z.string().min(2),
  tags: z.array(z.string()).default([]),
});
