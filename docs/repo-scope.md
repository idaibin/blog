# Repository Scope

## Role

`idaibin/blog` is currently a long-form content publishing and knowledge archive site.
Its approved target is the bilingual static public projection of knowledge promoted by
`idaibin/ai-handbook`; the target is not implemented yet.

It publishes organized articles, product notes, engineering notes, Rustzen writing, copy-ready Prompts, and public-facing explanations of AI workflows.

## Owns

- Long-form blog content.
- Product and engineering notes.
- The curated public Prompt collection under `src/content/prompts/`.
- Public content pages and site presentation.
- Repository-specific content schemas, routes, and frontmatter.
- Blog-specific automation task specs under `docs/automation/`.
- Target public routes, presentation, redirects, static navigation, and editorial overlays.

## Does Not Own

- Reusable skill source assets.
- Machine-level or repository-level runtime configuration.
- Shared execution rules owned by personal or repository `AGENTS.md` files.
- Short-cycle information feed entries.
- Evidence/promotion/freshness authority owned by `idaibin/ai-handbook`.
- Runtime reads from Handbook, feeds-hub, or their databases.

Installable Skill packages belong in `idaibin/skills`. Effective personal and repository behavior remains owned by the applicable `AGENTS.md`; blog Prompt pages are public, copyable versions rather than runtime configuration.

## Consumes From

- Current Skill names and installation commands from `idaibin/skills`.
- Effective personal and repository instructions from the applicable `AGENTS.md` chain.
- After the canary implementation exists, a pinned `public-knowledge/v1` artifact from `idaibin/ai-handbook`.

The approved target contract and migration boundary are documented in
[`knowledge-projection.md`](knowledge-projection.md). Until its canary exists, current
`src/content/` collections remain the live source and must not be bulk-migrated or deleted.

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
