# The Brain

This is the living knowledge base for the Nova story world — the
project inside the project. It's separate from `markdown files/`
(which tracks the *build* — features, progress, decisions) and separate
from `src/` (which is the actual app code). This folder exists so that
Chris and any future Claude session working on this project can look
up a character, a timeline event, a piece of lore, or an unresolved
thread and get a reliable, current answer — without re-deriving it from
scattered conversation history.

**Status as of September 6, 2026: this is a skeleton, not the full
brain yet.** It's seeded only with what's been stated directly in this
project's existing docs. The real story bible content — full character
sheets, the complete timeline, cliffnotes — was referenced in
NOVA_CLAUDE_GUIDE.md (as NOVA_STORY_BIBLE.md, NOVA_CLIFFNOTES.md,
NOVA_TIMELINE.md) but those files were never actually added to this
project. **If you have that material, or anything richer than what's
here, add it or paste it in and it gets folded into this structure.**

## Folder structure

- `timeline/` — one file per era/trilogy, plus `overview.md` for the
  top-level structure. Chronological facts, series/issue breakdowns.
- `characters/` — one file per named character. Who they are, their
  arc, their relationships, what's confirmed vs. still open.
- `lore/` — world mechanics that aren't tied to one character or era
  (the Relic, factions, technology, etc).
- `continuity/` — `open-threads.md` tracks anything flagged as
  unresolved, inconsistent, or unconfirmed across the material, so it
  doesn't get silently contradicted later.

## Entry format

Every file in `timeline/`, `characters/`, and `lore/` starts with this
frontmatter block:

```yaml
---
type: character | location | lore | event | faction
era: birth-of-a-hero | defender-chronicles | legacy-of-a-hero | all
canon: confirmed | unconfirmed | placeholder
related: [slugs of other brain/ entries this connects to]
last_updated: YYYY-MM-DD
---
```

- **era** tags which of the three trilogies (or "all") an entry belongs
  to or first applies in — this is the "which timeline to be on" answer
  when the story spans eras.
- **canon** distinguishes real story-bible fact (`confirmed`) from
  something still being worked out (`unconfirmed`) from invented
  placeholder content used only to prove the engine, like Jax
  (`placeholder`).
- **related** lets entries cross-reference each other (e.g. a
  character file links to the lore file for an artifact they carry).

## Keeping it current

When new story material comes in — a real script, a character sheet, a
timeline correction — update the relevant `brain/` entry in the same
turn, not just the planning docs in `markdown files/`. The planning
docs track *that a decision was made*; the brain holds *what the
decision actually is*, kept current.
