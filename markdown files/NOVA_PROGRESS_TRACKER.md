# Nova (working title) — Progress Tracker

**Overall progress:** 7%
**Last updated:** September 6, 2026
**Status:** Building — Phase 1 underway

---

### Phase 1 — Prove the Core Loop

**Phase progress:** 35%
**Goal:** One real level, fully playable, proving the format works before building out a whole trilogy.

#### Feature 1.1 — Core Playback Engine
**Progress:** 100%

- [x] Build single full-screen panel renderer (each beat fully replaces the last)
- [x] Implement inline choice panels (up to 3 options, no popup, no timer)
- [x] Build transition beat system (short pose/frame sequences at meaningful scene changes)
- [x] Build dual text system (VN captions for narrative, comic bubbles for side/humor beats)

Implemented in `src/engine/` on top of a typed beat model (`src/types/story.ts`), with a placeholder script for Issue 1 (`src/data/levels/issue-01.ts`) used to prove the loop. Panel is a single full-screen frame per beat (art fit via object-contain, no cropping) with a first-pass slide/fade page-turn transition — flagged for further animation polish later. Project scaffolded as React + Vite + TypeScript + Tailwind, per NOVA_CLAUDE_GUIDE.md stack.

#### Feature 1.2 — Relationship and Branch System
**Progress:** 0%

- [ ] Design relationship data model (per character, per level)
- [ ] Build explicit choice tracking (choice screens that update relationship values)
- [ ] Build emergent/silent tracking (relationship shifts from general play, not just choice screens)
- [ ] Build branch/status screen (player-opened, shows canon vs. current path, relationship state)

#### Feature 1.3 — The Relic (Time Travel)
**Progress:** 0%

- [ ] Build checkpoint/save-state system per level (doubles as rewind targets)
- [ ] Build full-range rewind (any past issue, any era)
- [ ] Build regeneration logic (progress-based, gradual buildup over a couple of levels)
- [ ] Build post-rewind choice: Snap Forward (recap cutscene) vs. Play It Out (live replay)

#### Feature 1.4 — Accounts and Save
**Progress:** 0%

- [ ] Integrate Clerk sign-in
- [ ] Build cross-device save sync
- [ ] Build autosave at every checkpoint

#### Feature 1.5 — First Playable Level
**Progress:** 75%

- [x] Pick the first level to build — Issue 1 of Resistance and Betrayal: A Hero's Journey
- [x] Produce art for that level — first real-art pass (9 images, generated via OpenAI against NOVA_ART_BRIEF_ISSUE_01_PLACEHOLDER.md, sliced and wired into the engine)
- [ ] Write and implement full playable script for that level — still the invented placeholder script, not Chris's real Issue 1 content
- [x] Playtest the full loop end to end — playback, choice, transition, and real art confirmed working together

Real script is the one open item here — once loaded, this level's art brief and script both need redoing against actual canon content.

---

### Phase 2 — Nova: Birth of a Hero (Prequel Trilogy)

**Phase progress:** 0%
**Goal:** Full first trilogy playable.

#### Feature 2.1 — Series I: Resistance and Betrayal: A Hero's Journey
**Progress:** 0%

- [ ] Confirm issue count and titles for this series
- [ ] Build out remaining levels beyond the Phase 1 proof level

#### Feature 2.2 — Series II: Fire and Freedom: Chaos and Order
**Progress:** 0%

- [ ] Confirm issue count and titles for this series
- [ ] Build out levels

#### Feature 2.3 — Series III: Nova: Rise of the Hero
**Progress:** 0%

- [ ] Confirm issue count and titles for this series
- [ ] Build out levels

---

### Phase 3 — Nova: The Defender Chronicles

**Phase progress:** 0%
**Goal:** Second trilogy, 36 issues, already fully titled.

#### Feature 3.1 — Series I: Nova: Rise of the Defender (Issues 1–12)
**Progress:** 0%

- [ ] Build out all 12 levels

#### Feature 3.2 — Series II: Digital Dominion (Issues 13–24)
**Progress:** 0%

- [ ] Build out all 12 levels

#### Feature 3.3 — Series III: The Chronicles of the Galactic War (Issues 25–36)
**Progress:** 0%

- [ ] Build out all 12 levels

---

### Phase 4 — Nova: Legacy of a Hero

**Phase progress:** 0%
**Goal:** Third trilogy, generational handoff to Samantha Reyes.

#### Feature 4.1 — Relic Hand-Off Scene
**Progress:** 0%

- [ ] Build the playable hand-off scene opening Series I

#### Feature 4.2 — Series I: Legacy: New Frontier
**Progress:** 0%

- [ ] Confirm issue count and titles
- [ ] Build out levels

#### Feature 4.3 — Series II: Rebirth: A New Dawn
**Progress:** 0%

- [ ] Confirm issue count and titles
- [ ] Build out levels

#### Feature 4.4 — Series III: Beyond the Unknown: A Journey to the Endgame
**Progress:** 0%

- [ ] Confirm issue count and titles
- [ ] Build out levels

---

### Phase 5 — Polish and Monetization

**Phase progress:** 0%
**Goal:** Make it feel finished without touching the story itself.

#### Feature 5.1 — Optional Monetization
**Progress:** 0%

- [ ] Build optional pre-story video placement

#### Feature 5.2 — Art Pass Upgrade Path
**Progress:** 0%

- [ ] Evaluate commissioning a real artist once the project proves itself

---

## Session Update Log

| Date | What Moved | New Overall |
|---|---|---|
| September 6, 2026 | Full planning session: core loop, art direction, format, and platform all locked. Docs generated. No build started yet. | 0% |
| September 6, 2026 | Project scaffolded (React + Vite + TS + Tailwind, git init). Feature 1.1 (Core Playback Engine) built and typechecked: renderer, inline choice panels, transition beat system, dual text system, placeholder Issue 1 script. | 4% |
| September 6, 2026 | Reading format revised after seeing the first build: single full-screen panel replacing the last, not a continuous scroll. Engine rebuilt to match; docs updated. | 4% |
| September 6, 2026 | First real-art pass generated (OpenAI, against the placeholder Issue 1 script) and wired into the engine: 9 images sliced from a contact sheet, art fit to full frame (no cropping), first-pass page-turn transition added. Reviewed end to end and approved as good for Phase 1 — further animation polish deferred to later. | 7% |

---

## What to Tackle Next

- [ ] Polish playback animations (page-turn transition is a rough first pass)
- [ ] Load Chris's real Issue 1 script/pages, replacing the placeholder used to prove the engine
- [ ] Start Feature 1.2 (Relationship and Branch System) or Feature 1.3 (The Relic) — both still at 0%

---

## Build Rules

- No HTML in any output
- No emojis in any output
- SVG icons only when genuinely needed
