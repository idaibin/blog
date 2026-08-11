# Public Knowledge Projection

- **Status:** approved target specification; not implemented
- **Decision date:** 2026-08-11
- **Canonical upstream:** `idaibin/ai-handbook/workflows/ai-engineering-system/knowledge-publication.md`

本仓库不会与 `ai-handbook` 或 `feeds-hub` 合并。重构目标是让 Blog 从传统文章栏目
逐步升级为公开知识阅读与发现界面，同时保持 Astro 静态站、旧 URL 和人工发布门禁。

## 1. Blog 的边界

Blog 拥有：

- 公共 URL、页面布局和视觉表达；
- 双语内容呈现；
- 静态搜索、导航、backlinks 和局部关系视图；
- SEO、RSS、sitemap、canonical、hreflang；
- changelog 与旧 URL redirect；
- 面向公开节点的 editorial overlay。

Blog 不拥有：

- claim、experiment、evidence 或 freshness 的权威裁决；
- 私有 Handbook 内容和运行配置；
- Feed 实时事件及其数据库；
- 自动晋级、自动翻译或自动发布。

迁移完成前，现有 `src/content/` 仍是当前站点的内容源；目标状态中，知识节点来自
固定版本的 Handbook 公开 artifact，Blog 只保留页面呈现、迁移映射和必要的
editorial 内容。不要把目标状态误写成当前已实现能力。

## 2. 目标信息架构

```text
/zh/concepts/{slug}
/en/concepts/{slug}
/zh/practices/{slug}
/en/practices/{slug}
/zh/workflows/{slug}
/en/workflows/{slug}
/zh/tools/{slug}
/en/tools/{slug}
/zh/skills/{slug}
/en/skills/{slug}
/zh/projects/{slug}
/en/projects/{slug}
/zh/sources/{entityId}
/en/sources/{entityId}
/zh/explore
/en/explore
/zh/changelog
/en/changelog
```

当前英文无前缀路由不能直接删除。迁移 inventory 必须为每个现有 URL 指定：

- 原地保留；
- redirect 到新 URL；或
- 保留页面但声明新 canonical。

Prompt 不再作为长期顶级知识类型：

- 有重复执行步骤和输入输出的内容进入 `workflow`；
- 有触发条件、资源和验证边界的内容进入 `skill`；
- 有适用条件和证据的建议进入 `practice`。

Rustzen 内容迁为 `project` 或 case study，但旧 URL 必须保留映射。

## 3. 构建期消费合同

Blog 消费 `public-knowledge/v1`：

```text
manifest.json
nodes.jsonl
edges.json
redirects.json
changelog.json
content/{entityId}.{language}.md
```

`knowledge.lock` 固定：

- upstream repository；
- 完整 Handbook Git commit；
- export path；
- schema version；
- manifest SHA-256；
- artifact SHA-256；
- synchronizedAt。

`nodes.jsonl`/manifest 是路由注册表；物理 Markdown 文件名不推导 URL。关系 target
使用 `entityId`，内容变体键为 (`entityId`, `language`)，slug 唯一范围为
(`language`, `type`, `slug`)。

Blog 构建只验证：

- 锁定 revision、schema 和两个 hash；
- manifest 文件计数与 payload 完整性；
- node、edge 和 Markdown 关联；
- language/type/slug 到路由的唯一映射；
- redirect/canonical 闭合；
- 生成快照没有被手工修改。

敏感字段、public/private reachability、证据等级和 freshness 的裁决属于 Handbook
出口。Blog 不重新读取私有状态，也不根据当前时钟改变锁定 artifact 的结果。

## 4. 页面和无 JS 边界

- 每个页面直接显示是什么、依据、freshness、相关节点和来源。
- backlinks 和普通关系列表由同一份 `edges.json` 构建。
- Graph 只存在于 `/explore` 的局部邻域模式，不是独立数据源。
- 关闭 JavaScript 后正文、来源、关系和导航仍可使用。
- 读者纠错使用携带公开 `entityId` 与 `handbookRevision` 的显式 Issue 链接；Blog
  不保存纠错表单，不静默提交。

## 5. 迁移顺序

1. **Inventory：** 固定全部现有路径、标题、语言配对、入站链接、重复内容和拟议类型。
2. **Canary：** 只消费 Handbook 的 5–8 个代表节点，验证锁文件和旧 URL。
3. **IA：** 增加 typed loader、新路由、Explore、backlinks、source 和 changelog 页面。
4. **Migration：** 按 owner 迁移剩余内容；仍有叙事价值的长文保留为 editorial/case study。
5. **Cleanup：** 只有 redirect/canonical、构建和用户审核都通过后，才删除废弃入口。

每阶段都必须可以恢复上一份已验证的 `knowledge.lock` 和 vendored artifact。当前规范
不授权实现、发布、部署、提交或推送。

## 6. 当前 Not implemented

- `knowledge.lock`；
- Handbook artifact 同步命令；
- 新内容 schema 和 typed loader；
- 新知识路由；
- Explore/Graph/backlinks；
- redirect inventory 与回归测试；
- 每语言 RSS、canonical/hreflang 完整验证。
