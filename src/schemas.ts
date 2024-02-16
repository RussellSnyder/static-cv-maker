import { z } from "astro/zod";

export const ExperienceSchema = z.object({
  role: z.string(),
  company: z.string(),
  start: z.string(),
  end: z.string(),
  techstack: z.string(),
});

export const EducationSchema = z.object({
  title: z.string(),
  organization: z.string(),
  date: z.string(),
});

export const RecomendationSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string(),
  date: z.string(),
  excerpt: z.string(),
  link: z.string(),
});
