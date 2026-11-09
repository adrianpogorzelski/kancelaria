import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Pytania i odpowiedzi: jeden plik Markdown = jedno pytanie (src/content/faq/*.md).
const faq = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    group: z.enum(["Praca kancelarii", "Czynności notarialne", "Opłaty"]),
    order: z.number(),
  }),
});

// Dokumenty potrzebne do wybranych czynności (src/content/documents/*.md).
const documents = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/documents" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { faq, documents };
