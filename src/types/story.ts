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
  text: string
}

export interface BubbleBeat {
  id: string
  kind: 'bubble'
  panelLabel: string
  speaker: string
  bubbleType: 'speech' | 'thought'
  text: string
}

export interface TransitionBeat {
  id: string
  kind: 'transition'
  panelLabels: string[]
  holdMs?: number
}

export interface ChoiceBeat {
  id: string
  kind: 'choice'
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
