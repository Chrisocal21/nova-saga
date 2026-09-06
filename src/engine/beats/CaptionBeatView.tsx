import { Panel } from '../Panel'
import type { CaptionBeat } from '../../types/story'

export function CaptionBeatView({ beat }: { beat: CaptionBeat }) {
  return (
    <div className="mb-8">
      <Panel label={beat.panelLabel} />
      <p className="mt-3 text-base leading-relaxed text-slate-100">
        {beat.text}
      </p>
    </div>
  )
}
