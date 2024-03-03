import { z } from "astro/zod";

export const ExperienceSchema = z.object({
  role: z.string(),
  company: z.string().optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  techstack: z.string().optional(),
});

export const EducationSchema = z.object({
  title: z.string().optional(),
  organization: z.string().optional(),
  date: z.string().optional(),
});

export const RecommendationSchema = z.object({
  name: z.string().optional(),
  role: z.string().optional(),
  company: z.string().optional(),
  date: z.string().optional(),
  link: z.string().optional(),
  excerpt: z.string(),
});
