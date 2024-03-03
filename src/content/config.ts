// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import {
  EducationSchema,
  ExperienceSchema,
  RecommendationSchema,
} from "../schemas";
// 2. Define your collection(s)
const experience = defineCollection({
  type: "content",
  schema: ExperienceSchema,
});
const education = defineCollection({
  type: "content",
  schema: EducationSchema,
});
const recommendation = defineCollection({
  type: "content",
  schema: RecommendationSchema,
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  experience,
  education,
  recommendation,
};
