# Nova (working title) — Claude Guide

> Paste this into a VS Code Claude/Copilot session to start building. This is the handoff from The Forge's planning into real code.

---

## What This Project Is

A browser/PWA branching narrative game built on Chris's original Nova comic series. Each comic issue is a playable level, presented as a single full-screen panel at a time (each beat fully replaces the last), comic-panel art. Player choices shift relationships with the people around Nova, which change what happens in future levels. A learned time-travel ability (the Relic) lets the player rewind to any past level and replay it differently.

Full story reference: `brain/` — the living, tagged story-bible knowledge base (start at `brain/README.md`). NOVA_STORY_BIBLE.md, NOVA_CLIFFNOTES.md, and NOVA_TIMELINE.md were referenced by an earlier planning session but were never actually added to this project — `brain/` is the current source of truth and is still a skeleton pending that richer material.
Full planning reference: NOVA_FEATURE_MAP.md, NOVA_PROGRESS_TRACKER.md, NOVA_OPEN_QUESTIONS.md, NOVA_PROJECT_LOG.md.

---

## Stack

- Frontend: React + Vite + Tailwind + TypeScript
- Backend: Cloudflare Workers
- Database: Cloudflare D1
- File storage: Cloudflare R2 (art assets)
- Deployment: Vercel
- Auth: Clerk (cross-device sync)
- AI: OpenAI API (art generation, AI-assisted for now), Claude API (structured content if needed)
- Local dev: localhost:3000

---

## Core Systems to Build First (Phase 1)

### 1. Core Playback Engine
- Single full-screen panel renderer — each beat fully replaces the last (no scrollback/stacking)
- Inline choice panels — up to 3 options, no popup/modal, no timer
- Transition beat system — short (2–3 frame) pose/background-static sequences, triggered only at meaningful scene changes, not every beat
- Dual text system — visual-novel-style captions for main narrative, comic speech/thought bubbles for side-character or off-story humor beats

### 2. Relationship and Branch System
- Data model: relationship value per named character, tracked per level/checkpoint
- Two update paths into the same value: explicit choice screens, and emergent/silent tracking based on player actions during a level
- Branch/status screen: player-opened only, never an automatic popup or alert. Shows current path relative to canon and current relationship standing with key characters

### 3. The Relic (Time Travel)
- Every level/issue is a checkpoint — this doubles as a rewind target
- Full-range rewind: any past issue, any era, no distance limit
- Regeneration: progress-based, gradual buildup over roughly a couple of levels' worth of play — not real-time, not instant refill
- After a rewind and replay of the changed level: player chooses **Snap Forward** (short recap cutscene, drops them back where they left off on the new branch) or **Play It Out** (continues live through everything after, on the new branch)
- Only one active keeper at a time — this is Nova's ability alone until a future story point (Samantha's handoff) changes that

### 4. Accounts and Save
- Clerk sign-in
- Cross-device sync (phone, tablet, desktop, same login)
- Autosave at every checkpoint — no manual save step, ever

---

## Art Direction

- **Characters:** painted and inked, semi-realistic proportions, visible linework, moody muted palettes
- **Environments/architecture:** more realistic, weightier concept-art-style rendering than characters
- Palette shifts per era (Birth of a Hero grounded/dystopian, The Defender Chronicles colder/Mars-and-space) — rendering approach stays consistent throughout
- Art production is AI-assisted for now; architecture should not assume a specific art pipeline is permanent, since a commissioned artist may replace AI generation later if the project proves itself

---

## Story Structure Reference

**Nova: Birth of a Hero (Prequel)**
- Series I — Resistance and Betrayal: A Hero's Journey
- Series II — Fire and Freedom: Chaos and Order
- Series III — Nova: Rise of the Hero

**Nova: The Defender Chronicles** (fully titled, 36 issues)
- Series I — Nova: Rise of the Defender (Issues 1–12)
- Series II — Digital Dominion (Issues 13–24)
- Series III — The Chronicles of the Galactic War (Issues 25–36)

**Nova: Legacy of a Hero**
- Series I — Legacy: New Frontier (opens with the relic hand-off scene from Nova to Samantha Reyes)
- Series II — Rebirth: A New Dawn
- Series III — Beyond the Unknown: A Journey to the Endgame

Playable character is Nova (Samantha Novak) through the first two trilogies, then Samantha Reyes (goes by Sam or Nova) for Legacy of a Hero.

Full issue-level titles/content for Birth of a Hero and Legacy of a Hero are not yet loaded — Chris will add these to the backend database directly. Build the data model to expect this content rather than hardcoding placeholder text.

---

## What NOT to Build Yet

- Side-quest / anthology character origin stories (future phase, separate from main build)
- Voice acting or narration (currently silent by design — leave room for it, don't build it now)
- Monetization/pre-story video (Phase 5, not Phase 1)
- Hero/villain morality tracking — explicitly not the branching model. Do not build a "morality meter." Branching is relationship-continuity based (who stays close to Nova) only.

---

## First Build Target

Start with **Phase 1, Feature 1.5**: one fully playable level, recommended to be Issue 1 of *Resistance and Betrayal: A Hero's Journey*. Get the full loop working end to end on this one level — playback, one relationship-affecting choice, one relic rewind test — before scaling to more content.

---

## Build Rules

- No HTML in any output
- No emojis in any output
- SVG icons only when genuinely needed
