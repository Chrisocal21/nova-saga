# Nova (working title) — Project Log

---

## Nova — Session 1 — September 6, 2026

**Status:** Exploring

---

### What We Decided

- Core format: each comic issue is a playable level and a checkpoint/autosave
- Branching is relationship-based (who stays close to Nova, who doesn't) — explicitly not a hero/villain morality system
- Branching updates happen both through explicit choice screens and emergent/silent play, feeding the same underlying relationship value
- A player-opened branch/status screen shows current path vs. canon and relationship state — never an automatic alert
- Time travel mechanic: the Relic, an ancient adaptive artifact passed keeper to keeper (not bloodline), whose abilities shift to fit what each era/story needs
- Relic backstory: passed to Nova by her mother, an unaware keeper chosen for fit rather than blood; explicitly original mythology, not modeled on existing power-passing systems
- Relic passes to Samantha Reyes in a real playable scene at the start of Legacy of a Hero — Nova loses the ability at that point, unlike her mother, who never knew what she held
- Time travel is full-range (any past issue, any era), regenerates via story progress (gradual, not instant), and available from the very first level — not a mid-story unlock
- After a rewind and replay, the player chooses Snap Forward (recap cutscene) or Play It Out (live replay of everything after)
- Reading format: continuous scroll, visual-novel style, comic-panel presentation; choices appear inline, no popups, no timer
- Short transition beats (2–3 pose/frame variations, same background) used only at meaningful scene changes, not constantly
- Text system: visual-novel captions for main narrative, comic bubbles for side-character humor and off-story beats; humor is character-consistent and callback-based
- Up to 3 choices per branch point
- Art direction: painted + inked, semi-realistic characters with visible linework, paired with more realistic environment/architecture rendering — confirmed against dystopian city, Mars colony, and hero-moment references
- Art production: AI-assisted for now, commissioned artist later if the project proves itself
- Platform: browser/PWA, linked from the ProbablyFineStudios site, Clerk auth for cross-device sync, autosave at every checkpoint
- Free for now; possible future monetization is an optional pre-story video, never interrupting the narrative itself
- Side-quest character origin stories are a future phase, modeled on the Star Wars anthology approach — not part of the main build
- Confirmed real series/issue title structure (see below) — corrected two working documents that had used paraphrased placeholder titles

---

### What Was Learned

- Chris shared the actual series/issue structure: Nova: Birth of a Hero (Prequel — 3 series), Nova: The Defender Chronicles (3 series, 36 titled issues total), Nova: Legacy of a Hero (3 series)
- Full issue-level titles exist for The Defender Chronicles; Birth of a Hero and Legacy of a Hero issue-level detail will be loaded into the backend database once in VS Code
- Corrected a naming mix-up from Chris: canon husband/father is confirmed as Daniel Reyes (not Marcus)
- Clarified character names: main character is Samantha Novak (hero name Nova); her daughter is also named Samantha (surname Reyes), goes by Sam, later nicknamed Nova by accident

---

### What Changed

- Dropped the earlier hero/villain track framing from initial brainstorming — replaced with relationship-based branching
- Time travel unlock was initially discussed as a possible mid-story (2060 era) addition, then corrected to be available from the very start of the story (Birth of a Hero, Series I)
- NOVA_CLIFFNOTES.md and NOVA_TIMELINE.md updated to replace paraphrased placeholder series/issue titles with Chris's real canon titles
- Reading format revised: the initial "continuous scroll" plan was built and reviewed live, and stacking panels down the page didn't read well. Changed to a single full-screen panel that fully replaces the last on each beat — no scrollback, no stacking. Core Playback Engine rebuilt to match; NOVA_CLAUDE_GUIDE.md, NOVA_FEATURE_MAP.md, and NOVA_OPEN_QUESTIONS.md updated

---

### Open Questions Added

- Final project name
- Branch/relationship screen visual treatment (list vs. more visual/constellation style)
- Full issue titles for Birth of a Hero and Legacy of a Hero trilogies
- Which level is the actual Phase 1 proof level
- MVP scope — how much of Phase 2 counts as a real minimum viable build

---

### Open Questions Closed

- Platform: closed — browser/PWA
- Art direction: closed — painted/inked characters, realistic environments
- Monetization: closed — free for now, optional pre-story video later
- Time travel range and regeneration rules: closed
- The "Issue 58 / Rebirth: A New Dream" continuity flag: effectively closed — near-certain match to "Rebirth: A New Dawn"

---

### Progress Updates

- Project moved from pure story/concept stage into full format and systems planning
- FEATURE_MAP.md, PROGRESS_TRACKER.md, OPEN_QUESTIONS.md generated for the first time this session
- Overall build progress remains 0% — planning complete, no code written yet

---

### Documents Updated

- NOVA_CLIFFNOTES.md (corrected to real series/issue titles)
- NOVA_TIMELINE.md (corrected to real series/issue titles)
- NOVA_FEATURE_MAP.md (created)
- NOVA_PROGRESS_TRACKER.md (created)
- NOVA_OPEN_QUESTIONS.md (created)
- NOVA_PROJECT_LOG.md (created, this entry)
- NOVA_CLAUDE_GUIDE.md (created)

---

### Next Session

Move into VS Code and start Phase 1, Feature 1.1 — the core playback engine — using Issue 1 of Resistance and Betrayal: A Hero's Journey as the proof-of-concept level.

---

## Build Rules

- No HTML in any output
- No emojis in any output
- SVG icons only when genuinely needed
