---
title: "AICraft Skill Library"
description: "Reusable agent-style skills from AICraft, published as a durable skills index."
pubDate: 2026-06-29
tags: ["aicraft", "skills", "agent", "code-context", "code-review"]
audience: ["developer", "ai-practitioner"]
featured: true
readingTime: 8
---

AICraft skills package stable AI workflows into reusable capability modules. A prompt captures task language. A skill captures a repeatable execution workflow with triggers, rules, references, validation, and output contracts.

This blog copy exists so `idaibin.dev/skills` can show the actual active AICraft skill system instead of a relocation notice.

## Source

Current source repository: `idaibin/aicraft`.

Active source directory: `skills/`.

AICraft currently keeps publishable or reusable skills under `skills/<skill-name>/`. Each package owns its own `SKILL.md`, agent metadata, and reference files.

## Individual Articles

This page is the skill library index. The same source assets are also available
as focused standalone articles:

- [Code Context](/skills/aicraft-code-context/)
- [Code Planner](/skills/aicraft-code-planner/)
- [Code Review](/skills/aicraft-code-review/)
- [Code Security](/skills/aicraft-code-security/)
- [Ops Browser](/skills/aicraft-ops-browser/)
- [Ops Client](/skills/aicraft-ops-client/)
- [Skill Standard](/skills/aicraft-skill-standard/)

## Skill Package Standard

Source: `docs/skills/skill-standard.md`

AICraft skill packages follow this shape:

```text
skills/<skill-name>/
  SKILL.md
  agents/openai.yaml
  references/*.md
  references/eval-cases.md
```

Optional `scripts/` or `assets/` are allowed only when they directly support the skill.

Naming and metadata rules:

- Directory name and `SKILL.md` frontmatter `name` must match.
- Skill names must use lowercase letters, numbers, and hyphens.
- `description` must start with `Use when`.
- `description` should describe trigger conditions, not the entire workflow.
- Stable Chinese trigger phrases may be included when they improve routing.
- Obsolete skill names should not stay in trigger text unless explicitly marked as migration or rejection checks.

`SKILL.md` should stay lean and procedural. Detailed examples, checklists, templates, upstream metadata, and upgrade workflows belong in `references/`.

## Shared Safety Rules

Every repository-facing skill must:

- read relevant `AGENTS.md` or nearest repo guidance first when present
- run `git status --short` before planning writes or commits
- preserve unrelated local changes
- use real paths, commands, configs, and code evidence
- say `Not found` for missing files, layers, or commands
- say `Not verified` for unchecked claims
- avoid substituting required tools, browsers, branches, or commands
- preview generated docs or upgrade changes before writing unless implementation is explicitly requested

Commit-related skills additionally avoid broad staging such as `git add .` unless the user explicitly approves that exact scope.

## Current Skills

Installable skill package names:

- `code-context`
- `code-planner`
- `code-review`
- `code-security`
- `ops-browser`
- `ops-client`

### Code Context

Source: `skills/code-context/SKILL.md`

Use when grounding work in a repository, first-pass onboarding, mapping real commands and paths, checking docs against code, generating or previewing `AGENTS.md` and project-map docs, or upgrading the skill from a trusted upstream source.

Core capability:

- Establish repository context from real files, not assumptions.
- Inspect manifests, configs, commands, entry points, and docs needed for the request.
- For monorepos, inspect the workspace root first, then only relevant app or package boundaries.
- Mark unchecked areas as `Not verified`.
- Run only repo-defined checks when checks are needed and safe.

Modes:

- **Bootstrap:** preview missing `AGENTS.md`, `docs/project-map.md`, or equivalent docs. Write only after explicit confirmation.
- **Alignment:** compare existing docs against manifests, configs, commands, entry points, and current source layout.
- **Upgrade:** compare only remote `skills/code-context/` against local files. Remote content is candidate input, not authority.

Output contract:

Start with verified current truth, then report missing items, doc/code mismatches, proposed docs, or upgrade candidates. Include commands run, validation status, and anything `Not verified`.

### Code Planner

Source: `skills/code-planner/SKILL.md`

Use when planning future codebase work before implementation, splitting implementation/refactor/migration into independent executable and verifiable tasks, defining owned scope, validation, done/reject gates, or coordinating auditable subagents.

Core capability:

- Turn a codebase requirement into scoped work units.
- Define required reads, owned scope, do-not-touch boundaries, dependencies, implementation steps, validation, done criteria, and reject criteria.
- Use subagents by default only when delegation is safe and auditable.
- Keep the main thread responsible for integration, review, and final acceptance.

Owner model:

- **Subagent mode:** default when tools are available, scopes are independent, ownership is clear, and main-thread audit is possible.
- **Sequential mode:** use when delegation is unavailable, unnecessary, tightly coupled, or unsafe.
- **Review-only mode:** use when the user asks to inspect or judge feasibility before implementation.
- **Upgrade mode:** use when updating this skill from a trusted upstream source.

Task packages must include objective, required reads, owned scope, do-not-touch boundaries, dependencies, implementation steps, validation, done criteria, and reject criteria.

### Code Review

Source: `skills/code-review/SKILL.md`

Use when reviewing existing local git changes before commit, classifying dirty-tree ownership, checking changed code/docs/API contract chains, splitting semantic commit groups, drafting exact path-limited staging commands and Conventional Commit messages, or upgrading the skill.

Core capability:

- Review local git changes before commit.
- Protect unrelated edits.
- Verify interface and API contract chains.
- Produce safe commit groups with exact staging scope.
- Avoid implementation unless the user explicitly asks.

Review workflow:

1. Read repo guidance related to changed files.
2. Inventory change scope with `git status --short`, `git diff --stat`, and `git diff --name-status`.
3. Check cached equivalents when anything is staged.
4. Classify files as `task-owned`, `related-existing`, `unrelated-existing`, `mixed-hunk`, or `unknown`.
5. Inspect actual diffs for every file that may enter a commit group.
6. For API/interface changes, trace route, method, fields, helpers, types, callers, data shaping, and runtime evidence.
7. Run or request matching checks.
8. Split by semantic unit and output exact commit groups.
9. Commit only when the user explicitly asks.

Hard commit rules:

- Do not modify or revert unrelated local changes.
- Do not whole-file stage `mixed-hunk` files unless every hunk belongs to the current group.
- Do not use `git add .`, `git add -A`, directory-wide adds, or wildcard adds unless explicitly approved.
- Stop before committing if staged files outside the current group already exist.
- Do not stage generated artifacts unless they are the requested deliverable.
- Do not commit automatically.

Output contract:

Start with local change scope, ownership classification, and main risks. Include review findings before the commit plan. For each commit group, include purpose, exact files or hunk-level staging approach, validation status, risks, and a concise Conventional Commit message.

### Code Security

Source: `skills/code-security/SKILL.md`

Use when reviewing code, API, auth, permission, config, dependency, upload, logging, token, session, CORS, CSRF, or release changes for security risks.

Core capability:

- Review a known code or configuration surface for concrete security risk.
- Check auth, authorization, input/output validation, sensitive-data exposure, browser/API protections, config defaults, dependency risk, and abuse paths.
- Complement `code-review` instead of replacing API contract mapping, dirty-tree ownership, staging, or commit planning.
- Report only findings grounded in code, config, docs, runtime evidence, or clearly marked assumptions.

Modes:

- **Security review:** inspect a code, API, config, dependency, or release change for security risks.
- **Full-stack API security:** review an already-mapped frontend/backend API chain.
- **Release check:** do a lightweight pre-release pass over security-sensitive changes.
- **Upgrade mode:** compare only remote `skills/code-security/` against local files.

Output contract:

Start with security findings ordered by severity. If no blocking findings are found, say that clearly and list residual `Not verified` areas.

### Ops Browser

Source: `skills/ops-browser/SKILL.md`

Use when operating or verifying browser pages: screenshots, data extraction, local web app testing, form/upload/download workflows, console/network/storage checks, or login/session-sensitive browser evidence.

Core capability:

- Operate browser pages as stateful user sessions.
- Reuse matching open tabs when doing so will not disturb unrelated work.
- Prefer browser APIs, DOM inspection, selectors, and deterministic actions.
- Collect evidence from UI state, DOM, console, network, storage/auth state, screenshots, downloads, route changes, or submitted payloads.

Modes:

- **Inspect/Verify:** confirm the page, account, and environment; collect visual or DOM/network evidence.
- **Form/Upload:** map fields by label, name, role, or test id; confirm file paths and final state before submission.
- **Debug:** reproduce or inspect the issue with minimal page-state disruption.

### Ops Client

Source: `skills/ops-client/SKILL.md`

Use when operating or verifying a specified real desktop client window, proving Tauri/Electron/native runtime source, reviewing launch commands, capturing CGWindowID evidence, or improving AI-operable client controls.

Core capability:

- Verify real desktop client windows instead of browser previews.
- Confirm repository ownership, startup command, process, PID, visible window, and requested evidence.
- Capture real windows by `CGWindowID` and inspect screenshots before claiming visual evidence.
- Prefer semantic Accessibility controls and stable UI labels over coordinate clicks.

Modes:

- **Launch Review:** identify the repository-owned client app and startup command.
- **Window Evidence:** prove process, runtime, window identity, and screenshot source.
- **Interaction:** use Accessibility/control-tree paths before coordinate clicks.
- **AI-Operable UI:** improve DOM and Accessibility surfaces so agents can identify controls reliably.

## Skill Maintenance Flow

When maintaining these packages, update the relevant `references/eval-cases.md`, `references/usage.md`, and `agents/openai.yaml` files whenever triggers, modes, rules, or output contracts change.

Validation commands from AICraft:

```bash
python3 scripts/validate-skills.py
python3 scripts/validate-skills.py --skill code-planner
```

Useful package inspection commands:

```bash
find skills/<skill-name> -maxdepth 3 -type f | sort
rg -n "^name:|^description: Use when" skills/<skill-name>/SKILL.md
rg -n "[ \t]+$" skills/<skill-name>
git diff --check -- skills/<skill-name>
```

## Download And Install

GitHub: [idaibin/aicraft](https://github.com/idaibin/aicraft)

Install or upgrade all published AICraft Codex skills with the standard skills.sh CLI flow:

```bash
npx skills add https://github.com/idaibin/aicraft
npx skills update
```

List available skills without installing:

```bash
npx skills add https://github.com/idaibin/aicraft --list
```

Install selected skills:

```bash
npx skills add https://github.com/idaibin/aicraft \
  --skill code-context code-planner code-review code-security ops-browser ops-client
```

Update only selected skills:

```bash
npx skills update ops-browser ops-client
```

After installing or upgrading, restart any long-running agent app so updated skill metadata and descriptions are loaded.

## Relationship With Prompts

AICraft keeps prompts and skills separate on purpose:

- `prompts/` stores evolving prompt assets and task language.
- `skills/` stores self-contained published workflows.
- Skills may be inspired by prompts, but published skills must not require repository-level prompts at runtime.
- If a prompt change is required by a skill, the corresponding skill package should be updated under `skills/<skill-name>/references/` before publishing or syncing.
