import {
  getEntry,
  type CollectionEntry,
  type ContentEntryMap,
} from "astro:content";
import type { SupportedLanguage } from "../types";

async function getContent<T>(
  collection: keyof ContentEntryMap,
  fileName: string,
  language?: SupportedLanguage
) {
  const fallback = await getEntry(collection, `${fileName}-en`);
  if (!language) return fallback as T;

  const fallbackData = fallback!.data;
  const translated = await getEntry(collection, `${fileName}-${language}`);
  return {
    ...translated,
    data: {
      ...fallbackData,
      ...translated?.data,
    },
  } as T;
}

export const getExperienceEntry = async (
  fileName: string,
  language?: SupportedLanguage
) => {
  return getContent<CollectionEntry<"experience">>(
    "experience",
    fileName,
    language
  );
};

export const getEducationEntry = async (
  fileName: string,
  language?: SupportedLanguage
) => {
  return getContent<CollectionEntry<"education">>(
    "education",
    fileName,
    language
  );
};

export const getRecommendationEntry = async (
  fileName: string,
  language?: SupportedLanguage
) => {
  return getContent<CollectionEntry<"recommendation">>(
    "recommendation",
    fileName,
    language
  );
};

const en = {
  ASPIRING_ROLE: "Senior Software Engineer",
  EDUCATION: "Education",
  EXPERIENCE: "Professional Experience",
  READ_MORE: "Read Full",
  CONTINUES_ON_NEXT_PAGE: "Continues on next page",
  RECOMMENDATIONS: "Recommendations",
  REFERENCES: "References",
  AVAILABLE_UPON_REQUEST: "Available upon request",
  LANGUAGES: "Languages",
  ENGLISH: "English",
  GERMAN: "German",
  LANGUAGE_LEVEL_NATIVE: "Native",
  LANGUAGE_LEVEL_FLUENT: "Fluent",
  OTHER_INTERESTS: "Other Interests",
  MUSIC: "Music",
  MUSIC_INTERESTS: "Performance, Composition",
  PSYCHOLOGY: "Psychology",
  PSYCHOLOGY_INTERESTS: "Coaching, UX",
  RANDOM: "Random",
  RANDOM_INTERESTS: "One Piece, Cooking",
  SOCIAL_MEDIA: "Social Media",
};
const de: typeof en = {
  ASPIRING_ROLE: "Senior Software Ingenieur",
  EDUCATION: "Ausbildung",
  EXPERIENCE: "Berufserfahrung",
  READ_MORE: "Vollständig lesen",
  CONTINUES_ON_NEXT_PAGE: "Fortsetzung auf der nächsten Seite",
  RECOMMENDATIONS: "Empfehlungen",
  REFERENCES: "Verweise",
  AVAILABLE_UPON_REQUEST: "Auf Anfrage erhältlich",
  LANGUAGES: "Sprachen",
  ENGLISH: "Englisch",
  GERMAN: "Deutsch",
  LANGUAGE_LEVEL_NATIVE: "Mutter Sprache",
  LANGUAGE_LEVEL_FLUENT: "Fließend",
  OTHER_INTERESTS: "Andere Interessen",
  MUSIC: "Musik",
  MUSIC_INTERESTS: "Performance, Komposition",
  PSYCHOLOGY: "Psychologie",
  PSYCHOLOGY_INTERESTS: "Coaching, UX",
  RANDOM: "Zufällig",
  RANDOM_INTERESTS: "One Piece, Kochen",
  SOCIAL_MEDIA: "Sozialen Medien",
};

const translations = {
  en,
  de,
};

export const getTranslation = (
  key: keyof typeof en,
  language?: SupportedLanguage
) => {
  return translations[language ?? "en"][key];
};
