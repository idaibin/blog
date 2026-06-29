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

const signals = defineCollection({
  loader: glob({ base: "./src/content", pattern: "signals/**/*.en.{md,mdx}" }),
  schema: ({ image }) => z.object(baseSchema(image)),
});
const signalsZh = defineCollection({
  loader: glob({ base: "./src/content", pattern: "signals/**/*.zh.{md,mdx}" }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const workflows = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "workflows/**/*.en.{md,mdx}",
  }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const workflowsZh = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "workflows/**/*.zh.{md,mdx}",
  }),
  schema: ({ image }) => z.object(baseSchema(image)),
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
    pattern: "{blog,rustzen-admin,rustzen/final}/**/*.en.{md,mdx}",
  }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

const notesZh = defineCollection({
  loader: glob({
    base: "./src/content",
    pattern: "{blog,rustzen-admin,rustzen/final}/**/*.zh.{md,mdx}",
  }),
  schema: ({ image }) => z.object(baseSchema(image)),
});

export const collections = {
  signals,
  signalsZh,
  workflows,
  workflowsZh,
  prompts,
  promptsZh,
  skills,
  skillsZh,
  notes,
  notesZh,
};