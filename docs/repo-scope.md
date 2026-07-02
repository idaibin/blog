# Repository Scope

## Role

`idaibin/blog` is a long-form content publishing and knowledge archive site.

It publishes organized articles, AI Signals, product notes, engineering notes, Rustzen writing, and public-facing explanations of AI workflows.

## Owns

- Long-form blog content.
- AI Signals articles.
- Product and engineering notes.
- Public content pages and site presentation.
- Repository-specific content schemas, routes, and frontmatter.
- Blog-specific automation task specs under `docs/automation/`.

## Does Not Own

- Reusable prompt source assets.
- Reusable skill source assets.
- Shared AI automation standards.
- Shared GitHub branching standards.
- Shared content quality standards.
- Short-cycle information feed entries.

Reusable prompts, skills, workflow templates, and shared standards belong in `idaibin/aicraft`.

## Consumes From

This repository consumes shared standards from:

```text
idaibin/aicraft/docs/standards/cron-automation.md
idaibin/aicraft/docs/standards/github-branching.md
idaibin/aicraft/docs/standards/ai-content-quality.md
```

## Automation Rules

Blog automation task specs live under:

```text
docs/automation/
```

The current scheduled task is:

```text
docs/automation/ai-signals-commit.md
```

The ChatGPT scheduled task should read AICraft standards first, then this repository scope, then the concrete task spec.

## Allowed Paths

The `AI Signals Commit` task may modify only:

```text
src/content/signals/*.mdx
```

It may modify automation documentation only when the user explicitly asks to update rules:

```text
docs/automation/**
docs/repo-scope.md
README.md
```

It must not modify reusable AI source assets. Those belong in `idaibin/aicraft`.
