# docs/project-map.md

## 技术栈
- Astro 5
- MDX
- Tailwind CSS 4
- Vite
- TypeScript
- pnpm
- RSS / sitemap
- Vercel Analytics / Speed Insights
- sharp

## 安装 / 启动 / 测试 / 构建命令
- 安装：`pnpm install`
- 启动开发：`pnpm dev`
- 本地预览：`pnpm preview`
- 构建：`pnpm build`
- Typecheck：`pnpm astro check`（当前还缺 `@astrojs/check`）
- Lint：未发现
- Test：未发现
- Start：未发现

## 目录结构说明
- `src/pages/`：页面入口和路由层。
- `src/layouts/`：页面和文章布局。
- `src/components/`：共享组件。
- `src/content/`：文章内容源，按主题和语言拆分。
- `src/utils.ts`：内容读取辅助逻辑。
- `src/content.config.ts`：内容集合 schema。
- `src/styles.css`：全局样式和主题变量。
- `public/`：字体、favicon 等静态资源。
- `src/assets/`：图片资源。

## 页面开发通常涉及的文件链路
- 新文章：`src/content/blog/why-rust-admin.en.mdx` 这类内容文件 -> `src/content.config.ts` -> `src/utils.ts` -> `src/pages/blog/[...slug].astro` -> `src/layouts/BlogPost.astro`
- 列表页：内容文件 -> `src/utils.ts` -> `src/pages/blog/index.astro` 或 `src/pages/rustzen-admin/index.astro` -> `src/components/BaseItems.astro`
- 中文页：对应把路径换成 `/zh/...`，内容文件换成 `.zh.mdx`

## 组件、接口、状态管理、样式、测试分别在哪里
- 组件：`src/components/`
- 接口 / 数据读取：`src/utils.ts`、`src/pages/rss.xml.js`
- 状态管理：未发现
- 样式：`src/styles.css` + 组件/布局内的局部 `<style>`
- 测试：未发现

## 高频改动区域
- `src/content/`
- `src/pages/`
- `src/components/BaseItems.astro`
- `src/layouts/BaseLayout.astro`
- `src/layouts/BlogPost.astro`
- `src/styles.css`
- `src/utils.ts`

## 高风险区域
- `src/content.config.ts`
- `src/utils.ts` 的 slug 处理逻辑
- `src/pages/rss.xml.js`
- `src/components/LanguageSwitcher.astro`
- `src/components/PageHeader.astro`
- `src/layouts/BaseLayout.astro`
- `src/layouts/BlogPost.astro`

## 新任务进入时推荐阅读顺序
- `README.md`
- `package.json`
- `astro.config.mjs`
- `src/content.config.ts`
- `src/utils.ts`
- `src/layouts/BaseLayout.astro`
- `src/layouts/BlogPost.astro`
- `src/components/BaseItems.astro`
- `src/pages/`
