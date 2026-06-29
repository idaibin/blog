---
title: "Generate AGENTS.md"
description: "A reusable AICraft prompt for repository onboarding and AGENTS.md/project-map drafting."
pubDate: 2026-06-29
tags: ["aicraft", "prompt", "agents-md", "code-context"]
audience: ["developer", "ai-practitioner"]
readingTime: 5
---

Source: `rustzen/aicraft/prompts/development/generate-agents-md.md`

Use this prompt for repository onboarding and project documentation bootstrapping. It is read-only: understand the project and draft documentation without writing files.

## Prompt

请先不要修改任何代码，先完成项目初始化理解，并输出文档草稿。

## Related Skill

- Related skill: `code-context`.
- This prompt is a standalone source asset for project-context bootstrapping.
- If its rules need to become part of the published skill, update `skills/code-context/references/` in the skill package before upgrading `code-context`.

## 语言

- 默认使用用户当前语言回复。
- 如果用户明确指定输出语言，按用户指定语言回复。
- 代码、命令、路径、API 名称、类型名和错误信息保持原文。

## 执行步骤

1. 识别项目基础信息：技术栈、包管理器、运行时版本、启动方式。
2. 梳理目录结构，给出真实路径：页面入口、路由层、组件层、接口/service 层、状态管理、样式/主题、测试目录。
3. 读取并总结关键文件：README、package manifests、AGENTS.md、lint/typecheck/test/build 配置。
4. 基于仓库实际情况总结开发约定：组件复用方式、命名风格、样式方案、接口封装、状态管理、测试习惯。
5. 尝试执行基线检查：lint、typecheck、test、build。优先使用项目已有命令，不自行编造命令。
6. 生成 `AGENTS.md` 草稿，但不要写入文件。
7. 生成 `docs/project-map.md` 草稿，但不要写入文件。
8. 输出简洁总结：项目结构、关键命令、高频改动路径、高风险区域、以后如何下任务最有效。

## AGENTS.md 草稿要求

必须包含：

1. 仓库用途说明
2. 目录结构说明
3. 项目工作基本规则
4. 修改代码约束
5. 改动后必须执行的检查命令
6. 完成任务后的汇报格式
7. 明确列出不允许做的事情

## docs/project-map.md 草稿要求

必须包含：

1. 技术栈
2. 安装 / 启动 / 测试 / 构建命令
3. 目录结构说明
4. 页面开发通常涉及的文件链路
5. 组件、接口、状态管理、样式、测试分别在哪里
6. 高频改动区域
7. 高风险区域
8. 新任务进入时推荐阅读顺序

## 全局要求

- 不允许修改任何文件。
- 不允许假设项目结构。
- 找不到就写“未发现”。
- 优先复用现有实现，不引入新模式。
- 不做无关优化或重构。
- 输出尽量简洁、明确、可执行。
