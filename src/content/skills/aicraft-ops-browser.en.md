---
title: "Ops Browser"
description: "A reusable AICraft skill for operating browser pages, forms, downloads, console checks, and local web app verification."
pubDate: 2026-07-04
tags: ["aicraft", "skill", "ops-browser", "browser"]
audience: ["developer", "ai-practitioner"]
readingTime: 4
---

Source: `idaibin/aicraft/skills/ops-browser/SKILL.md`

Use this skill when operating or verifying browser pages: screenshots, data extraction, local web app testing, form/upload/download workflows, console/network/storage checks, or login/session-sensitive browser evidence.

## Overview

Ops Browser treats browser work as stateful user-session work. It preserves existing tabs, windows, accounts, and foreground activity while collecting evidence from the right page.

## Workflow

1. Identify the target hostname, path, environment, account/session, and task goal.
2. Inspect existing browser tabs or windows before opening anything new.
3. Choose the mode: Inspect/Verify, Form/Upload, or Debug.
4. Prefer browser APIs, DOM inspection, selectors, and deterministic actions over manual guessing.
5. Keep work in the background when practical.
6. Gather task evidence such as UI state, DOM, console, network, storage/auth state, screenshots, downloads, route changes, or submitted payloads.
7. Close task-only temporary pages or windows after finishing.

## Modes

- **Inspect/Verify:** confirm the page, account, and environment; collect visual or DOM/network evidence.
- **Form/Upload:** map fields by label, name, role, or test id; confirm file paths and final state before submission.
- **Debug:** reproduce or inspect the issue with the least disruptive page state changes.

## Hard Rules

- Reuse a matching open tab when it is in the right environment/session and will not disturb unrelated user work.
- Open a fresh page/session when account, cache, auth, upload, or destructive-test isolation is required.
- Stop before login, MFA, consent, account switching, purchase, permission grant, destructive submit, or irreversible state changes unless the user explicitly authorized that action.
- Do not submit forms, upload files, clear cache, log out, refresh, or navigate away from user-owned state unless the task requires it.
- Say `Not verified` for unchecked browser/runtime claims.

## Download And Install

GitHub: [idaibin/aicraft](https://github.com/idaibin/aicraft)

Install or upgrade the published AICraft Codex skills with the standard skills.sh CLI flow:

```bash
npx skills add https://github.com/idaibin/aicraft
npx skills update
```

Install selected skills:

```bash
npx skills add https://github.com/idaibin/aicraft \
  --skill code-context code-planner code-review code-security ops-browser ops-client
```

List available skills:

```bash
npx skills add https://github.com/idaibin/aicraft --list
```

After installing or upgrading, restart any long-running agent app so updated skill metadata is loaded.
