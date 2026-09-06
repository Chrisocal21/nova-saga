# Nova — Art Brief: Issue 1 (Placeholder Script)

> Covers the placeholder script currently wired into the playback engine
> (`src/data/levels/issue-01.ts`), used to prove Feature 1.1. This is NOT
> confirmed real Issue 1 canon — the real script/pages for
> *Resistance and Betrayal: A Hero's Journey* Issue 1 haven't been loaded
> into the project yet. Re-run this brief once they are.

---

## Frame Count

**8 images total** to cover every distinct composition in the script.
Frame 7 (the choice screen) reuses the same composition as Frame 6 — if
you'd rather it feel distinct, generate a 9th (tighter/more tense
version of the same two-shot); otherwise reuse Frame 6's image for it.

---

## Global Art Style Guide

Use this for every frame, and keep it as the standing style reference for
future issues too.

**Medium / rendering**
- Digital painted illustration with visible ink linework on character
  outlines and major creases — painterly, not flat vector/cel-shaded,
  not photoreal or photobashed.

**Characters**
- Semi-realistic proportions (not cartoonish, not hyper-anatomical)
- Visible inked outlines
- Moody, muted color palette — restrained saturation
- Soft directional lighting with hard shadow accents

**Environments / architecture**
- Heavier, more realistic "concept art" rendering than characters —
  more detail, depth, and photoreal lighting
- Minimal to no visible linework (this is the deliberate contrast
  against how characters are rendered)

**Era palette — Birth of a Hero (grounded/dystopian)**
- Desaturated cool grays and blues, concrete tones
- Muted amber/rust accent lighting (streetlamps, signage, dusk sky)
- Overcast or dusk/night lighting
- Light haze/fog is fine for mood, don't overdo it

**Composition**
- Comic-panel, cinematic-widescreen framing
- Generate landscape, roughly 8:5 to 3:2 (e.g. 1600×1000px) — the app
  crops responsively with object-fit: cover, so exact ratio isn't
  critical
- No embedded text, speech bubbles, captions, or logos — all text is
  overlaid separately by the app

**Consistency**
- Treat this like a mini model sheet: Nova's face/hair/build and Jax's
  face/build must stay identical across every frame they appear in

---

## Character Notes — Resolve Before Generating

- **Nova:** hair color is inconsistent across your existing reference
  material (blonde vs. brown — flagged in NOVA_OPEN_QUESTIONS.md). Pick
  one now so this batch stays consistent.
- **Jax:** not a canon character — invented only to test the
  choice/branch mechanic in the engine. Either treat him as a disposable
  placeholder look, or swap in a real early-issue character if you have
  one in mind for this beat.

---

## Per-Frame Breakdown

Each entry: the image prompt (what to generate) and the story text that
plays alongside it in the app (context only — do not render this text
into the image).

### Frame 1
**Prompt:** Wide establishing shot of a grounded, dystopian city skyline
at dusk. Dense concrete high-rises, some windows lit, overcast sky with
amber dusk light breaking through smog/haze. No characters visible.
**Story text with this frame:** "The city had been quiet for three days. That never lasted."

### Frame 2
**Prompt:** Street-level shot, a young woman (Nova) moving through a
crowd of city-dwellers, hood up, head down, trying not to be noticed.
Dense urban street, muted grays/blues, dusk lighting, motion-blurred
background crowd.
**Story text with this frame:** "Nova kept her head down. Being seen was the first mistake most people made."

### Frame 3
**Prompt:** Close-up shot of a wiry young man (Jax) leaning against a
concrete wall, smirking, arms crossed, casual/confident posture. Worn
jacket, undercut or messy hair. Same dusk/urban lighting and palette as
prior frames.
**Story text with this frame:** Jax (speech): "You walk like someone who's late for a fight she didn't start."

### Frame 4
**Prompt:** Nova half-turned toward camera, unreadable/guarded
expression, hood still up. Same street setting as Frame 2, slightly
tighter framing.
**Story text with this frame:** Nova (thought): "Same old Jax. Never once bothered to whisper."

### Frame 5a (transition, first pose)
**Prompt:** Nova stopped mid-stride, shoulders tense, back partially to
camera. Same street.
**Story text with this frame:** (no text — silent transition beat)

### Frame 5b (transition, second pose)
**Prompt:** Nova fully turned toward Jax now, jaw set, direct
confrontational stance. Same street, same lighting as 5a for
consistency.
**Story text with this frame:** (no text — silent transition beat)

### Frame 6
**Prompt:** Two-shot: Nova and Jax facing each other in an otherwise
empty street, dusk light behind them, tense but controlled body
language between the two.
**Story text with this frame:** "He had news. He always had news. The question was whether it was worth the price he'd ask for it."

### Frame 7 (choice screen — reuses Frame 6, or generate a 7b variant)
**Prompt (if distinct):** Same two-shot as Frame 6, slightly tighter
crop, heightened tension in posture — this is the moment the player
decides how Nova responds.
**Story text with this frame:** Choice prompt: "How does Nova respond to Jax?" — options: hear him out / keep it short / push past him

### Frame 8
**Prompt:** Wide shot, the street emptying out as Nova and Jax walk off
together, seen from behind or at a distance. Same palette, dusk
deepening toward night.
**Story text with this frame:** "Whatever came next, it would not be the quiet kind of day either of them was hoping for."

---

## Ready-to-Paste Prompts

Each one is self-contained — style, palette, and character description
folded in — so you can paste a single frame's prompt straight into an
image generator without needing the sections above for context.

Nova is set to **brown hair** below (still unresolved in canon per the
Character Notes above) — swap the word "brown" for "blonde" in any
prompt if you want the other. Jax's look is a disposable placeholder.

**Frame 1:**
Wide establishing shot of a grounded, dystopian city skyline at dusk. Dense concrete high-rises, scattered lit windows, overcast sky with muted amber dusk light breaking through smog and haze. No characters in frame. Painted-and-inked digital illustration style, environment rendered with heavier photoreal concept-art detail and minimal linework. Desaturated cool gray-blue palette with amber accent lighting. Cinematic widescreen comic-panel framing, landscape orientation. No text, no logos, no watermarks.

**Frame 2:**
Street-level shot of a young woman (Nova — athletic build, brown hair, hood up, guarded expression) moving through a crowd of city-dwellers, head down, trying not to be noticed. Dense urban dystopian street, muted gray-blue palette, amber dusk lighting, background crowd softly blurred. Nova rendered semi-realistic with visible ink linework and moody muted colors; environment rendered heavier/more photoreal with minimal linework. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**Frame 3:**
Close-up shot of a young man (Jax — wiry build, dark messy/undercut hair, worn jacket) leaning against a concrete wall, smirking, arms crossed, casual confident posture. Same dystopian street, muted gray-blue palette, amber dusk lighting as prior frames. Painted-and-inked semi-realistic character rendering with visible linework, heavier photoreal environment detail behind him. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**Frame 4:**
Nova (young woman, athletic build, brown hair, hood up) half-turned toward camera, unreadable guarded expression. Same dystopian street setting as Frame 2, slightly tighter framing, same muted gray-blue and amber dusk lighting. Painted-and-inked semi-realistic character style with visible linework. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**Frame 5a:**
Nova (young woman, athletic build, brown hair, hood up) stopped mid-stride on an empty dystopian street, shoulders tense, seen partially from behind. Muted gray-blue palette, amber dusk lighting, painted-and-inked semi-realistic character style, heavier photoreal environment rendering. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**Frame 5b:**
Nova (same woman as 5a — athletic build, brown hair, hood up) now fully turned to face camera, jaw set, confrontational stance. Same street, same lighting and palette as 5a for continuity. Painted-and-inked semi-realistic character style with visible linework. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**Frame 6:**
Two-shot of Nova (young woman, athletic build, brown hair, hood up) and Jax (young man, wiry build, dark undercut hair, worn jacket) facing each other in an otherwise empty dystopian street, dusk light behind them, tense but controlled body language. Muted gray-blue palette, amber dusk lighting, painted-and-inked semi-realistic character rendering, heavier photoreal environment detail. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**Frame 7 (optional — otherwise reuse Frame 6):**
Same two-shot as Frame 6 — Nova (athletic build, brown hair, hood up) and Jax (wiry build, dark undercut hair, worn jacket) facing off in the empty street — but cropped slightly tighter with heightened tension in their posture. Same muted gray-blue palette and amber dusk lighting. Painted-and-inked semi-realistic character style. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**Frame 8:**
Wide shot of an empty dystopian street at dusk deepening toward night, Nova and Jax walking away together, seen from behind or at a distance, small in frame. Muted gray-blue palette with fading amber light. Heavier photoreal concept-art environment rendering, minimal linework. Cinematic widescreen comic-panel framing. No text, no logos, no watermarks.

**If calling the OpenAI image API directly** rather than pasting into a
chat UI: use the `images` endpoint with model `gpt-image-1`, and request
a landscape size (`1536x1024` is the closest supported size to the
8:5–3:2 ratio above).

---

## Build Rules

- No HTML in any output
- No emojis in any output
- SVG icons only when genuinely needed
