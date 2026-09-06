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

## Build Rules

- No HTML in any output
- No emojis in any output
- SVG icons only when genuinely needed
