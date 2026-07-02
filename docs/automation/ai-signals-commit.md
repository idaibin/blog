# AI Signals Commit Automation

## Authority

This task follows:

```text
idaibin/aicraft/docs/standards/cron-automation.md
idaibin/aicraft/docs/standards/github-branching.md
idaibin/aicraft/docs/standards/ai-content-quality.md
idaibin/blog/docs/repo-scope.md
```

This file only defines repository-specific rules for the `AI Signals Commit` scheduled task.

The ChatGPT scheduled task prompt should only bootstrap the run by reading the documents above and this file. Do not duplicate these rules inside the ChatGPT task prompt.

## Target Repository

- Repository: `idaibin/blog`
- Production branch: `main`
- Task name: `ai-signals-commit`
- Schedule: daily, 08:00
- Timezone: `UTC+08:00 / Asia/Shanghai`
- Pull requests: No
- Scheduled production write: allowed only through the safe cron-branch flow defined in AICraft standards

## Objective

Search for the latest AI news, product releases, research, GitHub projects, and emerging AI concepts from the previous day through the current run time.

Produce a daily AI Signals update when at least 3 meaningful source-backed items are available.

## Allowed Paths

```text
src/content/signals/*.mdx
```

Automation rule updates may modify these paths only when the user explicitly asks to update task rules:

```text
docs/automation/ai-signals-commit.md
docs/repo-scope.md
README.md
```

## Disallowed Paths

Unless the user explicitly asks for a broader blog change, this task must not modify:

```text
src/components/**
src/pages/**
src/layouts/**
src/content/prompts/**
src/content/skills/**
src/content/workflows/**
```

`src/content/prompts/**`, `src/content/skills/**`, and `src/content/workflows/**` may contain published explanatory content, but they are not the authority source for reusable AI assets. Source assets belong in `idaibin/aicraft`.

## Output Files

For the current run date in `UTC+08:00 / Asia/Shanghai`, create or update both files:

```text
src/content/signals/YYYY-MM-DD.zh.mdx
src/content/signals/YYYY-MM-DD.en.mdx
```

## Source Priority

Prioritize source-backed signals from:

1. Primary sources: company blogs, official product announcements, research papers, arXiv, GitHub repositories, standards bodies, official documentation.
2. Reputable technology and business outlets when primary sources are unavailable or when they add useful market context.
3. Avoid unsupported social-media-only claims unless they link to verifiable primary material.

Clearly distinguish:

- confirmed product releases
- research papers
- GitHub projects
- new concepts or techniques
- speculative trends

Do not present speculation as confirmed news.

## Frontmatter Format

Use this frontmatter style:

```yaml
title: YYYY-MM-DD AI Signals
description: One short sentence summarizing the daily AI update.
pubDate: YYYY-MM-DD
tags: ["AI", "Signals"]
audience: ["developer", "ai-practitioner"]
featured: true
```

Rules:

- `title` must be `YYYY-MM-DD AI Signals`.
- `description` must be one short sentence.
- Do not use wording like `信息流`, `feed`, `覆盖时间`, or `coverage window` in the description.
- `tags` should be compact. Add only useful topical tags.
- `pubDate` must use the run date in `UTC+08:00 / Asia/Shanghai`.

## Body Format

Do not add a coverage window line.

Do not add section headings such as:

- `## 信息流`
- `## Feed`
- `Key Conclusions`
- `Selected Signals`
- `Signal Technique`
- `Observations`
- `Promotion Candidates`

Each Chinese item must follow this pattern:

```mdx
### <a href="https://example.com/source" target="_blank" rel="noopener noreferrer">Title ↗</a>

Source Name · YYYY-MM-DD · type / topic

One short paragraph describing what happened.

**值得关注**：One short Chinese sentence explaining why it matters.
```

Each English item must follow this pattern:

```mdx
### <a href="https://example.com/source" target="_blank" rel="noopener noreferrer">Title ↗</a>

Source Name · YYYY-MM-DD · type / topic

One short paragraph describing what happened.

**Why it matters**: One short English sentence explaining why it matters.
```

Separate items with:

```mdx
---
```

## Link Rules

For every item:

- The heading must be an HTML anchor.
- The heading text itself must link to the original source.
- The title must end with the external-link marker `↗`.
- The link must include `target="_blank"`.
- The link must include `rel="noopener noreferrer"`.
- Do not use bare Markdown links as the item heading.

## Quality Threshold

If fewer than 3 meaningful source-backed items are found:

- Do not create or update the daily MDX post.
- Do not commit a low-value post.
- Report that there were not enough meaningful updates.
- List the sources checked.

## Validation Before Commit

Before committing, verify:

- Frontmatter is valid.
- MDX has no broken Markdown tables.
- MDX has no bare unescaped JSX issues.
- Source links use the required HTML anchor style.
- Both Chinese and English files exist and are aligned.
- Claims are source-backed and not overstated.
- Dates use `UTC+08:00 / Asia/Shanghai`.

## Commit Message

When a post is generated, the final `main` commit must use this message format:

```text
chore(signals): add AI signals for YYYY-MM-DD
```

Do not create a pull request for scheduled runs.
