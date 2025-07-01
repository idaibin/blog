# idaibin.dev Blog

A tech blog focused on Rust, React, and modern full-stack development.
Sharing practical experience from building the open-source [Rustzen Admin](https://github.com/idaibin/rustzen-admin) project.

## Features

- ✅ Multi-language content (English & Chinese)
- ✅ Focus on Rust, React, and full-stack engineering
- ✅ Rustzen Admin project articles and tutorials
- ✅ Modern Astro + MDX + Tailwind stack
- ✅ Article counting utility
- ✅ RSS Feed, SEO, and sitemap support

## Rustzen Admin Project

**Rustzen Admin** is a modern admin system template built with Rust (Axum, SQLx) and React (Vite, Zustand, Tailwind).
It features high performance, modularity, and comprehensive RBAC permissions.

- Backend: Rust + Axum + SQLx + JWT + RBAC
- Frontend: Vite + React + Zustand + Tailwind
- Deploy: Rust binary, frontend and backend can be deployed separately

## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## 📚 Content Collections

This blog supports multi-language content collections:

- `blog` (English articles)
- `blogZh` (Chinese articles)
- `rustzenAdmin` (English Rustzen Admin articles)
- `rustzenAdminZh` (Chinese Rustzen Admin articles)

### Counting Articles

To get the total number of articles in a collection:

```ts
import { getCollection } from 'astro:content';
const allBlogPosts = await getCollection('blog');
const blogCount = allBlogPosts.length;
```

For all articles (multi-collection):

```ts
const totalArticles =
  (await getCollection('blog')).length +
  (await getCollection('blogZh')).length +
  (await getCollection('rustzenAdmin')).length +
  (await getCollection('rustzenAdminZh')).length;
```

> **Note:**
>
> - Collection names in `getCollection` must match those in `content.config.ts`.
> - For a large number of articles, consider file counting or build-time caching for better performance.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Astro documentation](https://docs.astro.build) or join the [Astro Discord](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
