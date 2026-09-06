import type { CaptionBeat } from '../../types/story'

export function CaptionBeatView({ beat }: { beat: CaptionBeat }) {
  return (
    <p className="text-lg leading-relaxed text-slate-100">{beat.text}</p>
  )
}
