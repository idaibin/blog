import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const baseSchema = (image: any) => ({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  heroImage: image().optional(),
  cover: z.string().optional(),
  author: z.string().optional(),
  tags: z.array(z.string()),
  audience: z
    .array(z.enum(["beginner", "developer", "ai-practitioner"]))
    .optional(),
  featured: z.boolean().optional(),
  readingTime: z.number().optional(),
});

const prompts = defineCollection({
  loader: glob({ base: "./src/content", pattern: "prompts/**/*.en.{md,mdx}" }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const promptsZh = defineCollection({
  loader: glob({ base: "./src/content", pattern: "prompts/**/*.zh.{md,mdx}" }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const skills = defineCollection({
  loader: glob({ base: "./src/content", pattern: "skills/**/*.en.{md,mdx}" }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const skillsZh = defineCollection({
  loader: glob({ base: "./src/content", pattern: "skills/**/*.zh.{md,mdx}" }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const notes = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "{blog,rustzen}/**/*.en.{md,mdx}",
  }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const notesZh = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "{blog,rustzen}/**/*.zh.{md,mdx}",
  }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

export const collections = {
  prompts,
  promptsZh,
  skills,
  skillsZh,
  notes,
  notesZh,
};
