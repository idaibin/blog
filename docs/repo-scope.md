# Repository Scope

## Role

`idaibin/blog` is a long-form content publishing and knowledge archive site.

It publishes organized articles, product notes, engineering notes, Rustzen writing, copy-ready Prompts, and public-facing explanations of AI workflows.

## Owns

- Long-form blog content.
- Product and engineering notes.
- The curated public Prompt collection under `src/content/prompts/`.
- Public content pages and site presentation.
- Repository-specific content schemas, routes, and frontmatter.
- Blog-specific automation task specs under `docs/automation/`.

## Does Not Own

- Reusable skill source assets.
- Machine-level or repository-level runtime configuration.
- Shared execution rules owned by personal or repository `AGENTS.md` files.
- Short-cycle information feed entries.

Installable Skill packages belong in `idaibin/skills`. Effective personal and repository behavior remains owned by the applicable `AGENTS.md`; blog Prompt pages are public, copyable versions rather than runtime configuration.

## Consumes From

- Current Skill names and installation commands from `idaibin/skills`.
- Effective personal and repository instructions from the applicable `AGENTS.md` chain.

## Automation Rules

Blog automation task specs live under:

```text
docs/automation/
```

There is no active daily signal publishing task in this repository.

## Allowed Paths

Blog automation tasks must define their own allowed paths before writing.

It may modify automation documentation only when the user explicitly asks to update rules:

```text
docs/automation/**
docs/repo-scope.md
README.md
```

Automation must not modify Skill source packages. Those belong in `idaibin/skills`. Prompt edits remain subject to the blog review and publishing workflow.
