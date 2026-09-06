import type { Level } from '../../types/story'

// Placeholder script for engine-proving purposes only. Real script/art for
// this issue will be loaded by Chris once the playback engine works end to end.
// Art in public/art/issue-01/ is a first real-art test pass, not final.
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
      image: '/art/issue-01/b1.png',
      text: 'The city had been quiet for three days. That never lasted.',
    },
    {
      id: 'b2',
      kind: 'caption',
      panelLabel: 'Street level — Nova moves through a crowd, hood up',
      image: '/art/issue-01/b2.png',
      text: "Nova kept her head down. Being seen was the first mistake most people made.",
    },
    {
      id: 'b3',
      kind: 'bubble',
      panelLabel: 'Close on a side character leaning against a wall, smirking',
      image: '/art/issue-01/b3.png',
      speaker: 'Jax',
      bubbleType: 'speech',
      position: 'left',
      text: "You walk like someone who's late for a fight she didn't start.",
    },
    {
      id: 'b4',
      kind: 'bubble',
      panelLabel: 'Nova, half-turned, unreadable expression',
      image: '/art/issue-01/t1-0.png',
      speaker: 'Nova',
      bubbleType: 'thought',
      position: 'right',
      text: "Same old Jax. Never once bothered to whisper.",
    },
    {
      id: 't1',
      kind: 'transition',
      panelLabels: [
        'Nova stops walking, shoulders tense',
        'Nova turns fully toward Jax, jaw set',
      ],
      images: ['/art/issue-01/b4.png', '/art/issue-01/t1-1.png'],
      holdMs: 1600,
    },
    {
      id: 'b5',
      kind: 'caption',
      panelLabel: 'Two-shot — Nova and Jax facing each other in the empty street',
      image: '/art/issue-01/b5.png',
      text: 'He had news. He always had news. The question was whether it was worth the price he’d ask for it.',
    },
    {
      id: 'c1',
      kind: 'choice',
      panelLabel: 'Two-shot — Nova and Jax facing each other in the empty street',
      image: '/art/issue-01/c1.png',
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
      image: '/art/issue-01/b6.png',
      text: 'Whatever came next, it would not be the quiet kind of day either of them was hoping for.',
    },
  ],
}
