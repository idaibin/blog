# idaibin Blog

`idaibin/blog` is a bilingual personal static blog built with Astro, MDX, and Tailwind CSS 4.

It is a content publishing and knowledge archive site for AI Signals, long-form notes, Rust, React, full-stack engineering, product-building records, and Rustzen writing.

Reusable AI prompts, skills, workflow templates, and shared automation standards are not owned here. Their authority source is `idaibin/aicraft`.

## Features

- English and Chinese content with shared slugs and `.en` / `.zh` suffixes
- AI Signals and long-form content publishing
- Published explanations of workflows, prompts, and skills
- Long-form notes for blog posts and Rustzen writing
- Sitemap, SEO, and Vercel analytics support
- Content-driven structure with Astro content collections

## Repository Scope

```text
blog = long-form content publishing and knowledge archive
aicraft = reusable AI capability and automation standards source
feeds-hub = short-cycle information feed automation example
```

See:

```text
docs/repo-scope.md
docs/automation/ai-signals-commit.md
```

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

`prompts`, `skills`, and `workflows` are published content collections, not the source of reusable AI assets. Source assets belong in `idaibin/aicraft`.

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

## Rustzen Notes

Rustzen product and architecture notes can still appear as personal writing, but official Rustzen website and product pages belong in `rustzen/rustzen-hub`.

- Backend: Rust, Axum, SQLx, JWT, RBAC
- Frontend: React, Vite, Zustand, Tailwind
- Deployment: backend and frontend can be deployed separately

## Reading Order

If you want to understand the repo quickly, read these files in order:

1. `AGENTS.md`
2. `docs/repo-scope.md`
3. `docs/automation/ai-signals-commit.md`
4. `package.json`
5. `astro.config.mjs`
6. `src/content.config.ts`
7. `src/site.ts`
8. `src/utils.ts`
9. `src/layouts/BaseLayout.astro`
10. `src/layouts/BlogPost.astro`
11. `src/pages/`

## Notes

- The repo uses Astro file-based routing.
- Content schema is defined in `src/content.config.ts`.
- Shared page copy and section metadata live in `src/site.ts`.
- There is no dedicated `lint` or `test` script in `package.json`.
- RSS support is not currently exposed by a committed `src/pages/rss.*` route.
