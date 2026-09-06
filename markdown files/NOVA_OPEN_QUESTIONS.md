# Nova (working title) — Open Questions

---

## Answered

| Question | Answer | Session |
|---|---|---|
| What's the core game format? | Levels = comic issues, each a checkpoint/autosave | Sep 6, 2026 |
| How does branching work? | Persistent relationship tracking per character — who becomes close to Nova, who doesn't — not morality/hero-villain | Sep 6, 2026 |
| Is branching explicit, emergent, or both? | Both — same underlying relationship value, updated via clear choice screens and via silent/emergent play | Sep 6, 2026 |
| Does the player get notified when something changes? | No — a branch/status screen they check on their own, never an alert | Sep 6, 2026 |
| Is there a time travel mechanic? | Yes — the Relic, a learned ability, full-range rewind to any past issue | Sep 6, 2026 |
| What powers the relic? | An ancient, adaptive artifact passed keeper to keeper (not bloodline); its abilities adapt to what each era/story needs rather than being a fixed toolkit | Sep 6, 2026 |
| Where did the relic come from, story-wise? | Passed to Nova by her mother, who was chosen as keeper for fit, not blood, and never knew what she carried or used it | Sep 6, 2026 |
| Is this based on an existing power system (Green Lantern, Ms. Marvel, etc.)? | No — explicitly original mythology | Sep 6, 2026 |
| Does the relic ever get passed on again? | Yes — to Samantha Reyes, at the start of Legacy of a Hero, in a real playable scene as she leaves for her first journey | Sep 6, 2026 |
| Does Nova lose the ability once it's passed on? | Yes — only one active keeper at a time | Sep 6, 2026 |
| Is there a limit on how the relic regenerates after use? | Yes — regenerates via story progress, gradual buildup over a couple of levels, not real-time and not instant | Sep 6, 2026 |
| Is there a limit on how far back the player can rewind? | No — full range, any issue, any era | Sep 6, 2026 |
| What happens after a rewind and replay? | Player chooses Snap Forward (recap cutscene, returns to where they left off) or Play It Out (continues live on the new branch) | Sep 6, 2026 |
| When does the relic/time travel become available to the player? | From the very first level of Birth of a Hero, Series I — not unlocked mid-story | Sep 6, 2026 |
| Are side-quest character origin stories part of the main build? | No — future phase, modeled on the Star Wars anthology approach | Sep 6, 2026 |
| What's the visual art direction? | Painted + inked, semi-realistic characters with visible linework, paired with more realistic concept-art-style environments/architecture | Sep 6, 2026 |
| Who's producing the art? | AI-assisted for now; commissioned artist later if the project proves itself | Sep 6, 2026 |
| What platform does this live on? | Browser/PWA, linked from the ProbablyFineStudios site | Sep 6, 2026 |
| How is auth/save handled? | Clerk sign-in, cross-device sync, autosave at every checkpoint | Sep 6, 2026 |
| What's the reading format? | Continuous scroll, visual-novel style, comic-panel presentation | Sep 6, 2026 |
| How do choices appear? | Inline as panels in the scroll, no popups, no timer | Sep 6, 2026 |
| Is there animation? | Not full animation — short transition beats (2–3 pose/frame variations, same background) at meaningful scene changes only | Sep 6, 2026 |
| Is there sound/voice? | Silent for now, text and art only; narration/voice acting open as a future addition | Sep 6, 2026 |
| How does text/dialogue work? | Main narrative in visual-novel captions; comic speech/thought bubbles for side characters, humor, off-story beats | Sep 6, 2026 |
| What's the humor approach? | Character-consistent, often callback-based to earlier events | Sep 6, 2026 |
| How many choices per branch point? | Up to 3, not fixed at 2 | Sep 6, 2026 |
| Is this free or paid? | Free for now; possible future monetization via an optional pre-story video, never interrupting the narrative | Sep 6, 2026 |
| What's the project name? | Not finalized — something built around "Nova" | Sep 6, 2026 |
| What are the real series/issue titles? | Confirmed: Nova: Birth of a Hero (Prequel), Nova: The Defender Chronicles (36 titled issues), Nova: Legacy of a Hero — full structure in NOVA_CLIFFNOTES.md and NOVA_TIMELINE.md | Sep 6, 2026 |
| Is the "Issue 58 / Rebirth: A New Dream" continuity flag resolved? | Yes, effectively — near-certain match to "Rebirth: A New Dawn," the real Legacy of a Hero Series II title | Sep 6, 2026 |

---

## Still Open

| Question | Why It Matters |
|---|---|
| Final project name | Currently just "something built around Nova" — needs to be locked before branding/repo naming |
| Branch/relationship screen visual treatment | Never settled whether it displays plainly (a list) or visually (a web/constellation-style read) — affects UI design work |
| Full issue-by-issue titles for Birth of a Hero and Legacy of a Hero trilogies | Only The Defender Chronicles has all 36 issue titles loaded; the other two trilogies' issue-level breakdown isn't loaded yet — Chris plans to load this into the backend database once in VS Code |
| Which level is the actual Phase 1 proof level | Recommended: Issue 1 of Resistance and Betrayal: A Hero's Journey, but not confirmed |
| "Shocking secret about Nova's past" — one reveal or two | Referenced in both Birth of a Hero Series II and Legacy of a Hero Series II — unclear if same event told twice or two separate reveals |
| Identity of the AI's creator, "someone thought long dead" | Referenced in Digital Dominion Issue 18, never named in material shared |
| The ancient Martian civilization thread | Introduced in Rise of the Defender Issue 3, never resolved in material shared |
| Nova's hair color | Inconsistent across two character sheets (blonde vs. brown) |
| Whether Shadowstrike is "the friend" from early planning | Flagged as a possible match, not confirmed in character material |
| Exact issue/level count for MVP scope | Full trilogies are large — worth deciding how much of Phase 2 constitutes a real MVP versus full completion |

---

## Build Rules

- No HTML in any output
- No emojis in any output
- SVG icons only when genuinely needed
