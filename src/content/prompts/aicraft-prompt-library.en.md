---
title: "AICraft Prompt Library"
description: "Reusable AI prompt assets from AICraft, migrated into the Rustzen blog as a durable public prompt index."
pubDate: 2026-06-29
tags: ["aicraft", "prompts", "ai-workflow", "agent"]
audience: ["developer", "ai-practitioner"]
featured: true
readingTime: 8
---

AICraft is the working library for reusable AI assets used across Rustzen work. Its prompt library is not a collection of one-off chat snippets. It is a set of durable task templates with clear scenarios, language rules, execution boundaries, validation expectations, and output contracts.

This blog copy exists so `idaibin.dev/prompts` can show the actual active prompt system instead of pointing readers away to another repository.

## Source

Current source repository: `rustzen/aicraft`.

Active source directory: `prompts/`.

AICraft keeps prompts grouped by use case:

- `development/`: implementation, review, API contract checks, and repository initialization prompts.
- `automation/`: scheduled research, daily review, reusable asset search, and blog/content automation prompts.
- `agent-systems/`: agent migration and configuration prompts.
- `rustzen/`: Rustzen-specific backend and architecture prompts.

## Individual Articles

This page is the prompt library index. The same source assets are also available
as focused standalone articles:

- [General Development Task](/prompts/aicraft-general-development-task/)
- [Review And Commit](/prompts/aicraft-review-and-commit/)
- [API Contract Review](/prompts/aicraft-api-contract-review/)
- [Generate AGENTS.md](/prompts/aicraft-generate-agents-md/)
- [Blog Restructure Execution](/prompts/aicraft-blog-restructure-execution/)
- [Generate AI Research Digest](/prompts/aicraft-generate-ai-research-digest/)
- [Review Chat History](/prompts/aicraft-review-chat-history/)
- [Search Reusable AI Assets](/prompts/aicraft-search-reusable-ai-assets/)
- [Agent Migration Prompt](/prompts/aicraft-agent-migration-prompt/)
- [Rustzen Backend Prompt](/prompts/aicraft-rustzen-backend-prompt/)
- [Rustzen Architecture Prompt](/prompts/aicraft-rustzen-architecture-prompt/)

## Prompt Library Rules

The active prompt files follow a few simple rules:

- Keep each prompt in the category where it is most likely to be reused.
- Keep prompt files focused and directly executable.
- Use folder, filename, and visible heading as active metadata.
- Add explicit language rules when output language matters.
- Preserve source provenance only when it is still useful.
- Keep prompts usable as standalone task instructions, even when a related skill exists.

## Development Prompts

### General Development Task

Source: `prompts/development/general-development-task.md`

Use this prompt when a coding task needs a controlled implementation flow instead of an open-ended request.

Core behavior:

1. Read project guidance first: `AGENTS.md`, README, project notes, and task-related code.
2. Check real repository state with `git status` and `git diff` when needed.
3. Define the allowed modification boundary before editing.
4. Reuse existing components, hooks, services, utilities, and style systems.
5. Keep existing code style, directory habits, interaction patterns, and business behavior consistent.
6. Avoid unrelated changes, hidden rewrites, and speculative refactors.
7. Validate with the project-appropriate command set: typecheck, lint, tests, build, API calls, page behavior, or logs.

Expected final output:

- what changed
- which files changed
- which checks were run
- remaining risks or confirmations

### Review And Commit

Source: `prompts/development/review-and-commit.md`

Use this prompt when current repository changes must be reviewed before committing. It is not a generic code quality review. It focuses on whether the current diff is truly deliverable, whether scope expanded accidentally, whether existing behavior was damaged, and whether the change can be committed safely.

Review focus:

- current `git status`, `git diff`, and `git diff --cached`
- task-owned changes versus historical or unrelated local changes
- generated files, temporary files, and files that should not be committed
- API contract alignment across backend routes, frontend API wrappers, TypeScript types, and page usage
- preserved UI details, styles, widths, interactions, and business rules
- missing validation, runtime checks, edge cases, or permissions

If the user requests a commit, the prompt requires semantic commit grouping, exact file lists, and Conventional Commit messages. It explicitly forbids bringing unrelated local changes into the commit.

Related skill: `code-review`.

### API Contract Review

Source: `prompts/development/api-contract-review.md`

Use this prompt when backend and frontend API changes need exact chain validation.

Each API must be checked across:

- backend route path
- HTTP method
- path, query, and body parameters
- success response structure
- error response structure
- frontend API wrapper
- parameter mapping
- TypeScript types
- page field reads and submit logic
- empty, loading, and error states
- old APIs, mocks, temporary compatibility logic, or residual code

Required output table:

| API | Backend status | Frontend API status | Page usage status | Issue | Fixed | Verification |
| --- | --- | --- | --- | --- | --- | --- |

Related skill: `code-review`.

### Generate AGENTS.md

Source: `prompts/development/generate-agents-md.md`

Use this prompt for repository onboarding and project documentation bootstrapping. It is intentionally read-only: the agent must understand the project and draft documentation without writing files.

Required investigation:

- real technology stack
- package manager and runtime requirements
- actual dev, test, build, and preview commands
- route, page, component, API, state, style, and test directories
- README, package manifests, `AGENTS.md`, and build/check configs
- real project conventions based on code, not generic best practices

Draft outputs:

- `AGENTS.md` draft
- `docs/project-map.md` draft
- concise project structure summary
- key commands
- high-frequency change paths
- high-risk areas
- best future task wording

Related skill: `code-context`.

## Automation Prompts

### Blog Restructure Execution Prompt

Source: `prompts/automation/blog-restructure-prompt.md`

Use this prompt when turning a blog or personal site into an AI-centered content system.

Target information architecture:

- `Signals`: high-value AI updates and trend notes.
- `Workflows`: practical AI and engineering workflows.
- `Prompts`: reusable task prompts.
- `Skills`: reusable capability modules and agent-style workflows.
- `Notes`: Rustzen, architecture, engineering experience, and long-term notes.

Rules:

- Prioritize information architecture over visual novelty.
- Keep the site content-first and lightweight.
- Do not turn the site into a SaaS, dashboard, user system, or heavy client app unless explicitly requested.
- Preserve valuable content by migrating it into the new content model.
- Keep MCP, agents, RAG, evals, tool calling, and context engineering as tags unless they clearly need top-level navigation.

### Generate AI Research Digest

Source: `prompts/automation/generate-ai-research-digest.md`

A scheduled research prompt for a daily AI engineering digest.

Default schedule:

- time: 09:00
- timezone: Asia/Shanghai
- task type: scheduled search and summary generation

Focus areas:

- coding agents
- prompt engineering
- context engineering
- agent workflows
- tool use and function calling
- evals, skills, plugins, and specs
- AI-assisted software engineering
- retrieval, planning, and execution patterns
- AI infrastructure, GPU updates, inference stacks, and deployment economics

Source priority:

1. official docs
2. official blogs and changelogs
3. papers and technical reports
4. engineering blogs
5. high-quality GitHub repositories
6. official infrastructure or chip vendor docs

Output language: Chinese.

Style: concise, technical, and engineering-oriented.

### Review Chat History

Source: `prompts/automation/review-chat-history.md`

A daily end-of-day reflection prompt for reviewing available chat history.

Default schedule:

- time: 23:00
- timezone: Asia/Shanghai
- task type: daily review and next-day planning

The prompt requires the agent to clearly state whether complete chat history is available. It must not infer unseen chats or fabricate activity.

Output structure:

1. Core focus of the day
2. Key progress and valuable decisions
3. Inefficiencies, noise, and optimization opportunities
4. Open questions
5. Top 1-3 priorities for tomorrow
6. Trend analysis

Output language: English.

### Search Reusable AI Assets

Source: `prompts/automation/search-reusable-ai-assets.md`

Use this prompt to search for reusable AI assets that could become blog prompt entries, skills, workflows, or references.

Target asset types:

- task-specific prompts
- reusable prompt templates
- system prompts
- tool orchestration patterns
- function calling patterns
- MCP integrations
- agent skills
- memory and context strategies
- evaluation patterns
- capability packages for real workflows

For each useful asset, the prompt asks for scenario fit, recommended asset type, inputs, outputs, adaptation approach, and system-level relevance.

## Agent-System Prompts

### Agent Migration Prompt

Source: `prompts/agent-systems/agent-migration-prompt.md`

Use this prompt when rebuilding an existing AI agent in another account, builder, workspace, or platform.

The migration must preserve:

- source agent name and description
- system instructions
- starter prompts
- enabled channels
- memory/search settings
- connected apps or tools
- app permission rules
- attached skills

The prompt explicitly forbids inventing missing system instructions, permissions, starter prompts, or skill bodies. If the target platform cannot attach skills, the output must produce manual rebuild specs instead of pretending the migration is complete.

## Rustzen Prompts

### Rustzen Backend Prompt

Source: `prompts/rustzen/rust-backend-ai-prompt.md`

Use this prompt for Rust backend work in `rustzen-admin` or closely related Rustzen backends.

It encodes current Rustzen backend assumptions:

- Runtime entrypoint under `apps/server/`.
- Feature modules under `apps/server/src/features/<feature>/`.
- Common feature files: `mod.rs`, `handler.rs`, `service.rs`, `repo.rs`, and `types.rs`.
- SQLite is the active default storage backend unless current repository docs say otherwise.
- SQLite migrations live under `apps/server/migrations/sqlite/`.
- Runtime config uses `RUSTZEN_*` variables.

Layer rules:

- `mod.rs`: route assembly only.
- `handler.rs`: HTTP extraction and service calls only.
- `service.rs`: orchestration, validation, transactions, and permission-aware behavior.
- `repo.rs`: SQL and persistence only.
- `types.rs`: row, request, response, query, and command types.

The prompt also defines API contract, migration, audit field, and verification rules.

### Rustzen Architecture Prompt

Source: `prompts/rustzen/rustzen-architect-system-prompt.md`

Use this prompt for architecture decisions, structural changes, and architecture-sensitive implementation in Rustzen projects.

Architecture principles:

- AI-first
- local-first
- SQLite-first when current project phase says so
- low complexity
- deterministic behavior
- easy for AI agents and human maintainers to understand
- runtime-oriented
- practical for long-term iteration

The prompt requires reading current repository truth before advice or edits. It prioritizes current source code over older documentation and blocks speculative abstraction, hidden infrastructure expansion, and compatibility fallback logic without explicit migration need.

## Relationship With Skills

Prompts store evolving task language. Skills store more stable execution workflows. A prompt can inspire a skill, but a published skill must be self-contained and must not require repository-level prompt files at runtime.
