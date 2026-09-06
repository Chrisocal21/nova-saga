import type { Level } from '../../types/story'

// Placeholder script for engine-proving purposes only. Real script/art for
// this issue will be loaded by Chris once the playback engine works end to end.
export const issue01: Level = {
  id: 'birth-of-a-hero-s1-issue-01',
  series: "Resistance and Betrayal: A Hero's Journey",
  issueNumber: 1,
  title: 'Placeholder Script — Issue 1',
  beats: [
    {
      id: 'b1',
      kind: 'caption',
      panelLabel: 'Wide shot — a grounded, dystopian city skyline at dusk',
      text: 'The city had been quiet for three days. That never lasted.',
    },
    {
      id: 'b2',
      kind: 'caption',
      panelLabel: 'Street level — Nova moves through a crowd, hood up',
      text: "Nova kept her head down. Being seen was the first mistake most people made.",
    },
    {
      id: 'b3',
      kind: 'bubble',
      panelLabel: 'Close on a side character leaning against a wall, smirking',
      speaker: 'Jax',
      bubbleType: 'speech',
      text: "You walk like someone who's late for a fight she didn't start.",
    },
    {
      id: 'b4',
      kind: 'bubble',
      panelLabel: 'Nova, half-turned, unreadable expression',
      speaker: 'Nova',
      bubbleType: 'thought',
      text: "Same old Jax. Never once bothered to whisper.",
    },
    {
      id: 't1',
      kind: 'transition',
      panelLabels: [
        'Nova stops walking, shoulders tense',
        'Nova turns fully toward Jax, jaw set',
      ],
      holdMs: 900,
    },
    {
      id: 'b5',
      kind: 'caption',
      panelLabel: 'Two-shot — Nova and Jax facing each other in the empty street',
      text: 'He had news. He always had news. The question was whether it was worth the price he’d ask for it.',
    },
    {
      id: 'c1',
      kind: 'choice',
      prompt: 'How does Nova respond to Jax?',
      options: [
        { id: 'trust', label: 'Hear him out — he has earned that much' },
        { id: 'guard', label: "Keep it short — don't let him in" },
        { id: 'push', label: 'Push past him — no time for this today' },
      ],
    },
    {
      id: 'b6',
      kind: 'caption',
      panelLabel: 'Wide shot — the street empties as the two walk off together',
      text: 'Whatever came next, it would not be the quiet kind of day either of them was hoping for.',
    },
  ],
}
