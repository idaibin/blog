# rustzen.dev Blog

`rustzen.dev` is a bilingual static blog built with Astro, MDX, and Tailwind CSS 4.
It focuses on AI signals, workflows, prompts, skills, long-form notes, Rust, React, full-stack engineering, and Rustzen Admin.

## Features

- English and Chinese content with shared slugs and `.en` / `.zh` suffixes
- AI-focused sections for signals, workflows, prompts, and skills
- Long-form notes for blog posts and Rustzen Admin writing
- Sitemap, SEO, and Vercel analytics support
- Content-driven structure with Astro content collections

## Project Structure

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   ├── prompts/
│   │   ├── rustzen-admin/
│   │   ├── signals/
│   │   ├── skills/
│   │   └── workflows/
│   ├── layouts/
│   ├── pages/
│   ├── site.ts
│   ├── styles.css
│   └── utils.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

## Content Collections

The actual content collections are:

- `signals` / `signalsZh`
- `workflows` / `workflowsZh`
- `prompts` / `promptsZh`
- `skills` / `skillsZh`
- `notes` / `notesZh`

`notes` is the combined collection for `blog` and `rustzen-admin`.

## Commands

All commands are run from the project root.

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local Astro dev server |
| `pnpm build` | Build the production site into `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro check` | Run Astro type and content checks |

## Rustzen Admin

Rustzen Admin is the main application theme referenced by this blog.

- Backend: Rust, Axum, SQLx, JWT, RBAC
- Frontend: React, Vite, Zustand, Tailwind
- Deployment: backend and frontend can be deployed separately

## Reading Order

If you want to understand the repo quickly, read these files in order:

1. `AGENTS.md`
2. `package.json`
3. `astro.config.mjs`
4. `src/content.config.ts`
5. `src/site.ts`
6. `src/utils.ts`
7. `src/layouts/BaseLayout.astro`
8. `src/layouts/BlogPost.astro`
9. `src/pages/`

## Notes

- The repo uses Astro file-based routing.
- Content schema is defined in `src/content.config.ts`.
- Shared page copy and section metadata live in `src/site.ts`.
- There is no dedicated `lint` or `test` script in `package.json`.
- RSS support is not currently exposed by a committed `src/pages/rss.*` route.
