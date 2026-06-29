---
title: "Code Security"
description: "A reusable AICraft skill for grounded security review of code, API, auth, config, dependency, and release changes."
pubDate: 2026-06-29
tags: ["aicraft", "skill", "code-security", "security"]
audience: ["developer", "ai-practitioner"]
readingTime: 4
---

Source: `rustzen/aicraft/skills/code-security/SKILL.md`

Use this skill when reviewing code, API, auth, permission, config, dependency, upload, logging, token, session, CORS, CSRF, or release changes for security risks.

## Overview

Code Security is a focused security review skill. It checks a known code or configuration surface for concrete security risk, and it reports only findings grounded in code, config, docs, runtime evidence, or clearly marked assumptions.

It complements `code-review`: use `code-review` first when a frontend/backend API contract chain still needs to be mapped, then use `code-security` to review auth, authorization, data exposure, validation, abuse paths, and release-sensitive behavior.

## Workflow

1. Read repo guidance related to the target files or system boundary.
2. Identify the reviewed surface: changed files, API chain, auth path, config, dependency, upload/download path, logging path, or release boundary.
3. For full-stack API changes, rely on `code-review` to map route, method, fields, helpers, types, callers, and data shaping when that contract chain is not already clear.
4. Inspect the mapped surface for auth, authorization, input/output validation, sensitive-data exposure, browser/API protections, config defaults, dependency risk, and abuse paths.
5. Report security findings only when grounded in local evidence.
6. Recommend focused validation or mark gaps as `Not verified`.

## Modes

- **Security review:** inspect a code, API, config, dependency, or release change for security risks.
- **Full-stack API security:** review an already-mapped frontend/backend API chain for auth, authorization, data exposure, input validation, and abuse risks.
- **Release check:** run a lightweight pre-release pass over security-sensitive changes without replacing full threat modeling.
- **Upgrade mode:** compare only remote `skills/code-security/` against local files; preview before writing.

## Hard Rules

- Do not replace `code-review` for API contract alignment, dirty-tree ownership, staging, commit planning, or commit messages.
- Do not replace `security-threat-model` for system-wide threat modeling.
- Do not run heavy scanners, network tests, or destructive checks unless the user explicitly asks and permissions allow it.
- Do not make speculative findings sound proven; use `Not verified` for missing runtime, config, or permission evidence.
- Do not broaden a focused review into a whole-repository audit unless the user asks for that scope.
- Preserve unrelated local changes.

## Output Contract

Start with security findings ordered by severity. If no blocking findings are found, say that clearly and list residual `Not verified` areas.

Each finding should include severity, file/path or endpoint evidence, impact, recommendation, and validation performed.

## References

- `references/usage.md`
- `references/checklist.md`
- `references/upstream-sources.md`
- `references/upgrade-workflow.md`
- `references/eval-cases.md`

## Download And Install

GitHub: [rustzen/aicraft](https://github.com/rustzen/aicraft)

Install or upgrade the published AICraft Codex skills from GitHub:

```bash
python3 ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \
  --repo rustzen/aicraft \
  --path skills/code-context \
  --path skills/code-planner \
  --path skills/code-review \
  --path skills/code-security
```

The public GitHub repository is `rustzen/aicraft`. Older `idaibin/aicraft` links currently resolve to the same repository.
