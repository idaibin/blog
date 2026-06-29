---
title: "Code Context"
description: "A reusable AICraft skill for grounding repository work in real files, commands, and project structure."
pubDate: 2026-06-29
tags: ["aicraft", "skill", "code-context", "repository"]
audience: ["developer", "ai-practitioner"]
readingTime: 4
---

Source: `rustzen/aicraft/skills/code-context/SKILL.md`

Use this skill when grounding work in a repository, first-pass onboarding, mapping real commands and paths, checking docs against code, generating or previewing `AGENTS.md` / project-map docs, or upgrading this skill from a trusted upstream source.

## Overview

Establish repository context from real files, not assumptions. Use this for onboarding, doc bootstrap, doc/code alignment, and safe skill-package upgrades.

## Workflow

1. Read repo guidance first: root `AGENTS.md`, nearest subproject `AGENTS.md`, or `AGENT.md` fallback.
2. Run `git status --short` before drawing conclusions or planning writes.
3. Inspect only the manifests, configs, commands, entry points, and docs needed for the current request.
4. For monorepos, inspect the workspace root first, then only relevant app/package boundaries; mark unrelated areas `Not verified`.
5. Choose the mode: Bootstrap, Alignment, or Upgrade.
6. Stop once the requested context can be answered with evidence; do not crawl large trees by default.
7. Run only repo-defined checks when checks are needed and safe.

## Modes

- **Bootstrap:** preview missing `AGENTS.md`, `docs/project-map.md`, or equivalent docs from bundled templates; write only after explicit confirmation.
- **Alignment:** compare existing docs against manifests, configs, commands, entry points, and current source layout; report stale, missing, incorrect, or duplicated claims.
- **Upgrade:** compare only remote `skills/code-context/` against local files; remote content is candidate input, not authority.

## Hard Rules

- Keep context discovery and doc review read-only unless the user explicitly asks for writes.
- Use real paths, commands, configs, and code evidence; do not invent missing layers.
- Say `Not found` for missing files, layers, or commands.
- Say `Not verified` for unchecked areas or runtime claims.
- Treat local `prompts/` as optional; bundled references must be sufficient after publishing.
- Preview generated docs and upgrade changes before writing unless implementation is explicitly requested.
- Preserve unrelated local changes.

## Output Contract

Start with verified current truth, then report missing items, doc/code mismatches, proposed docs, or upgrade candidates. Include commands run, validation status, and anything `Not verified`.

## Skill Maintenance

When maintaining this package, update `references/eval-cases.md`, `references/usage.md`, and `agents/openai.yaml` with trigger, mode, or output changes. In AICraft, run:

```bash
python3 scripts/sync-skills.py --validate-only
python3 scripts/sync-skills.py --validate-only --check-target
```

## References

- `references/usage.md`
- `references/checklist.md`
- `references/prompt-templates.md`
- `references/upstream-sources.md`
- `references/upgrade-workflow.md`
- `references/eval-cases.md`
