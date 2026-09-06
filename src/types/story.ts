// Core content model for a playable level (one comic issue).
// Placeholder data is expected to conform to this shape until Chris loads real
// script/art content into the backend database — see NOVA_CLAUDE_GUIDE.md.

export interface ChoiceOption {
  id: string
  label: string
}

export interface CaptionBeat {
  id: string
  kind: 'caption'
  panelLabel: string
  image?: string
  text: string
}

export interface BubbleBeat {
  id: string
  kind: 'bubble'
  panelLabel: string
  image?: string
  speaker: string
  bubbleType: 'speech' | 'thought'
  /** Roughly where the speaker sits in the panel art, so the bubble floats
   * near them instead of the center of the screen. Defaults to 'right'. */
  position?: 'left' | 'right'
  text: string
}

export interface TransitionBeat {
  id: string
  kind: 'transition'
  panelLabels: string[]
  images?: string[]
  holdMs?: number
  /** Comic burst text (e.g. "POW") shown over the final frame's hold. */
  impactText?: string
}

export interface ChoiceBeat {
  id: string
  kind: 'choice'
  panelLabel?: string
  image?: string
  prompt: string
  options: ChoiceOption[]
}

export type Beat = CaptionBeat | BubbleBeat | TransitionBeat | ChoiceBeat

export interface Level {
  id: string
  series: string
  issueNumber: number
  title: string
  beats: Beat[]
}
