# AGENTS.md

## 仓库用途
`idaibin/blog` 是个人博客仓库，基于 Astro + MDX + Tailwind CSS 4 构建。内容以 AI 信号、工作流、Prompt、Skills、Rust、React、全栈开发、产品思考和个人方法论为核心，支持中英双语静态站点。

Rustzen 官方官网、产品页、下载页和控制台入口不放在本仓库；相关代码迁移到 `rustzen/rustzen-hub`。

## 目录结构
- `src/pages/`：文件式路由入口，包含首页、中文首页、动态 section 列表页、详情页和分页页。
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

## 内容发布流程
- `blog` 是文章内容源；先完成博客草稿和站点验证，再准备外部平台版本。
- 博客草稿必须经过用户审核；没有明确批准，不更新掘金、DEV、X、Reddit、小红书等公开平台。
- 国内平台使用中文版本，海外平台使用英文版本；各平台按阅读场景改写，不直接机械复制。完整流程见 `docs/publishing-workflow.md`。

## 修改代码约束
- 优先复用现有组件。
- 禁止无关改动。
- 保持现有风格一致。
- 不加兜底，不做兼容性分支，不引入新抽象。
- 内容 schema 以 `src/content.config.ts` 为准，不要随手扩字段。

## 改动后必须执行的检查命令
- `npm run build`
- `npm run astro -- check`

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
