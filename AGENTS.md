# AGENTS.md

## 仓库用途
`idaibin.dev` 的博客仓库，基于 Astro + MDX + Tailwind CSS 4 构建。内容以 Rust、React、全栈开发和 Rustzen Admin 为核心，支持中英双语静态站点。

## 目录结构
- `src/pages/`：文件式路由入口，包含首页、博客页、Rustzen Admin 页、中文页和 RSS。
- `src/layouts/`：页面和文章的复用布局。
- `src/components/`：共享组件。
- `src/content/`：MDX 文章内容，按主题和语言后缀拆分。
- `src/utils.ts`：内容读取、排序和计数逻辑。
- `src/content.config.ts`：内容集合和 frontmatter schema。
- `src/styles.css`：全局样式和主题变量。
- `public/`：favicon、字体等静态资源。
- `src/assets/`：文章和页面插图资源。

## 项目工作基本规则
- 先复用现有布局和组件，再考虑新增文件。
- 路由和内容分类必须沿用现有 file-based routing 和 content collections。
- 中文与英文内容使用同名 slug + `.zh` / `.en` 后缀。
- 只改当前任务需要的文件，不碰无关页面、文章和样式。
- 不新增 service / store / state 层，除非任务明确要求。

## 修改代码约束
- 优先复用现有组件。
- 禁止无关改动。
- 保持现有风格一致。
- 不加兜底，不做兼容性分支，不引入新抽象。
- 内容 schema 以 `src/content.config.ts` 为准，不要随手扩字段。

## 改动后必须执行的检查命令
- `pnpm build`
- `pnpm astro check`（仓库已补齐 `@astrojs/check` 后再执行）

## 完成任务后的汇报格式
- 改动文件：
- 执行命令：
- 结果：
- 风险：

## 不允许做的事情
- 不允许顺手改无关文件。
- 不允许新增无依据的兜底逻辑。
- 不允许改动路由命名、语言前缀或内容后缀规则而不说明原因。
- 不允许引入与当前仓库无关的状态管理、服务层或测试架构。
- 不允许跳过构建检查就宣称完成。
