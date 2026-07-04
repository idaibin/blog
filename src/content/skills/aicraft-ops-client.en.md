---
title: "Ops Client"
description: "A reusable AICraft skill for operating and verifying real desktop client windows, including Tauri, Electron, and native app evidence."
pubDate: 2026-07-04
tags: ["aicraft", "skill", "ops-client", "desktop-client"]
audience: ["developer", "ai-practitioner"]
readingTime: 4
---

Source: `idaibin/aicraft/skills/ops-client/SKILL.md`

Use this skill when operating or verifying a specified real desktop client window, proving Tauri/Electron/native runtime source, reviewing launch commands, capturing `CGWindowID` evidence, or improving AI-operable client controls.

## Overview

Ops Client verifies real desktop client windows. Browser previews are not enough when the task requires proof from a Tauri, Electron, or native runtime.

## Workflow

1. Identify the specified client target: app name, repository path, package/app directory, process, PID, visible window, and requested evidence.
2. If working from a repository, confirm whether it contains a desktop/client app by checking manifests and source layout such as `src-tauri/`, `tauri.conf.*`, Electron configs, native app targets, package scripts, justfile tasks, or README run instructions.
3. Confirm the startup command and runtime source before verification.
4. Enumerate real windows and identify the matching `CGWindowID` by owner, PID, title, and bounds.
5. Capture the real window by `CGWindowID`.
6. Inspect screenshots before claiming visual evidence.
7. Prefer background-safe inspection and Accessibility actions such as `AXPress` on named controls.
8. Rebuild or restart the intended client instance after relevant UI, bundle, or Accessibility changes before re-verifying.

## Modes

- **Launch Review:** identify the repository-owned client app and its startup command before running or verifying it.
- **Window Evidence:** prove process, runtime, window identity, and screenshot source.
- **Interaction:** use Accessibility/control-tree paths before coordinate clicks.
- **AI-Operable UI:** improve DOM and Accessibility surfaces so agents can identify controls reliably.

## Hard Rules

- Do not treat browser previews, dev server pages, or region screenshots as desktop-client evidence unless the user explicitly asks for browser-only checking.
- Do not start or restart a client before confirming the startup command source and whether it could disturb an existing app instance, active window, or user workflow.
- Do not steal the user's mouse, move the pointer, activate unrelated windows, or coordinate-click unless no stable control path exists and the risk is acceptable.
- Prefer semantic controls, accessible names, `aria-label`, `title`, `sr-only`, associated form labels, and stable `data-testid` selectors for critical controls.
- Say `Not verified` when process, runtime, window source, or interaction evidence is unchecked.

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
