# Blog UI contract

## Basis and scope

The accepted current Astro site is the visual source for the public home, section,
pagination, and article surfaces. This contract records current ownership; it does not
authorize a redesign, route migration, or content-model change. Product/content facts
remain in the repository scope and knowledge-projection documents.

## Owners

- `BaseLayout.astro` owns the document shell, page width, global background, body
  typography, navigation composition, primary page scroll, and shared `.page-section`
  spacing.
- Page roots own task composition and local section rhythm. Shared components own only
  their internal spacing; pages must not repeat the shell inset.
- `src/styles.css` owns semantic color variables, shared focus, and reduced-motion
  behavior. Exact values stay in source rather than being copied here.
- `PageHeader`, `FeedList`, `Pagination`, `LanguageSwitcher`, and `SocialLinks` remain
  responsibility-named shared compositions. Routes retain their existing stable slugs
  when visible labels change.

## Icons and assets

The site has no general-purpose icon-library owner. Brand marks and the existing
GitHub social mark remain isolated repository assets/inline SVG with their own meaning;
they are not a generic action-icon family. Existing action SVGs inherit the enclosing
control color, are hidden from assistive technology when decorative, and leave the
accessible name on the link or button. Do not introduce Lucide or another library for
one isolated glyph; evaluate one owner only when several ordinary actions need it.

## Interaction and motion

CSS owns simple hover, focus, color, and entry feedback. Each transition names its
properties; `transition: all` is not used. Motion must remain non-blocking and must not
delay navigation or input. The global `prefers-reduced-motion: reduce` rule suppresses
entry movement and shortens transitions while preserving visible state changes.

## Acceptance boundary

- Required web surfaces: English and Chinese home, one section page, one paginated
  listing, and one article at desktop and mobile widths already supported by source.
- Check readable order, single page scroll, no horizontal overflow, visible focus,
  language navigation, and reduced-motion behavior.
- Astro check/build prove only source and production compilation. Browser layout,
  focus traversal, fonts, animation, and deployed pages remain `Not verified` until
  exercised on the named routes.
