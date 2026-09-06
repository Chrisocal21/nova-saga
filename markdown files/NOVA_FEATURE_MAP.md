# Nova (working title) — Feature Map

> A branching narrative life-sim built on Chris's original Nova comic series. Browser/PWA, built phase by phase starting from a single proven level.

---

## The Idea

Each comic issue becomes a playable level. The player reads through it visual-novel style — continuous scroll, comic-style art, inline choice panels. Choices shift relationships with the people around Nova (and later Samantha), which change what shows up in future levels. A learned ability — an ancient adaptive relic — lets the player rewind to any past issue and replay it differently, then choose to snap forward with a recap or play the changed path out live. Three trilogies of story (Birth of a Hero, The Defender Chronicles, Legacy of a Hero) map directly onto three game-length arcs.

---

## Phase 1 — Prove the Core Loop

**Goal:** One real level, fully playable, proving the format works before building out a whole trilogy.

### Core Playback Engine
- Single full-screen panel format — each beat fully replaces the last, no scrollback/stacking (revised from an initial continuous-scroll plan after prototyping — see NOVA_PROJECT_LOG.md)
- Comic-style art panels with painted/inked character rendering, realistic environment rendering
- Inline choice panels (up to 3 options), no popups, no timer
- Transition beats: short multi-frame sequences (character pose/head changes, same background) at meaningful scene changes only
- Text system: visual-novel captions for main narrative, comic speech/thought bubbles for side-character humor and off-story beats

### Relationship & Branch System
- Relationship value per named character, tracked per level
- Updated two ways: explicit choice screens, and emergent/silent tracking based on player actions
- Branch/status screen player can open anytime — never auto-alerted
- Screen shows current path relative to canon (timeline/branch indicator) and relationship state

### The Relic (Time Travel)
- Available from the very first level — not unlocked mid-story
- Full-range rewind: any past issue, any era
- Regenerates through story progress (builds up over a couple of levels, not an instant refill)
- After rewinding and replaying a level: player chooses **Snap Forward** (short recap cutscene, returns to where they left off) or **Play It Out** (continues live from that point on the new branch)
- Single active keeper at a time — using the relic is Nova's alone until it's passed on

### Accounts and Save
- Clerk sign-in, cross-device (phone, tablet, desktop)
- Autosave at every level/checkpoint, no manual save step

---

## Phase 2 — Nova: Birth of a Hero (Prequel Trilogy)

**Goal:** Full first trilogy playable — the origin story, Nova's core arc.

- Series I — Resistance and Betrayal: A Hero's Journey
- Series II — Fire and Freedom: Chaos and Order
- Series III — Nova: Rise of the Hero

Full relationship and branch tracking active across all three series. Establishes the cast whose relationships carry forward into The Defender Chronicles.

---

## Phase 3 — Nova: The Defender Chronicles

**Goal:** Second trilogy — Nova as an established hero, Mars settlement, AI war, first contact. 36 issues, already fully titled.

- Series I — Nova: Rise of the Defender (Issues 1–12)
- Series II — Digital Dominion (Issues 13–24)
- Series III — The Chronicles of the Galactic War (Issues 25–36)

Relationships and branch state carry forward from Phase 2. Art direction shifts palette for Mars/space settings while keeping the same rendering approach.

---

## Phase 4 — Nova: Legacy of a Hero

**Goal:** Third trilogy — generational handoff to Samantha Reyes.

- Series I — Legacy: New Frontier (opens with the relic hand-off scene — a real, playable moment as Samantha leaves for her first journey)
- Series II — Rebirth: A New Dawn
- Series III — Beyond the Unknown: A Journey to the Endgame

Playable character shifts to Samantha. Same core systems (checkpoints, relationships, relic/time travel) carry over — the relic behaves differently for her since it adapts to what each era needs, but the rules underneath don't change.

---

## Phase 5 — Polish and Monetization

**Goal:** Make it feel finished and sustainable without touching the story itself.

- Optional pre-story video (monetization), never interrupting the narrative mid-read
- Art pass upgrade path — AI-assisted art now, commissioned artist later if the project proves itself
- Possible narration/voice acting layer (currently silent by design)

---

## Future — Anthology Side Quests

**Not part of the main build.** Modeled on the Star Wars anthology approach — standalone origin stories for other characters (allies, rivals, side cast), built on the same core systems, released as separate side content once the main trilogy arc is complete.

---

## Things Considered and Set Aside

| Feature | Why It Was Set Aside |
|---|---|
| Hero/villain morality branching | Explicitly rejected — branching is about relationships and who continues in the story, not a good/evil axis |
| Fixed 2-choice branch points | Chris wants up to 3 options where it fits, not locked to 2 |
| Real-time cooldown for the relic | Doesn't fit a bursty browser/PWA play pattern — progress-based regen fits better |
| Full animation per panel | Too costly for now — 2-3 frame pose/transition variations chosen instead |
| Native mobile app | Browser/PWA chosen instead — no app store friction, lives on the ProbablyFineStudios site |
| Side quest character origin stories in Phase 1 | Explicitly deferred — main trilogy arc comes first, side quests are a later, separate release |

---

## Build Rules

- No HTML in any output
- No emojis in any output
- SVG icons only when genuinely needed
