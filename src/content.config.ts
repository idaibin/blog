import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.en.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
      tags: z.string().optional(),
    }),
});
const blogZh = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.zh.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
      tags: z.string().optional(),
    }),
});

const rustzenAdmin = defineCollection({
  loader: glob({
    base: "./src/content/rustzen-admin",
    pattern: "**/*.en.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
      tags: z.string().optional(),
    }),
});

const rustzenAdminZh = defineCollection({
  loader: glob({
    base: "./src/content/rustzen-admin",
    pattern: "**/*.zh.{md,mdx}",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
      tags: z.string().optional(),
    }),
});

export const collections = { blog, blogZh, rustzenAdmin, rustzenAdminZh };
