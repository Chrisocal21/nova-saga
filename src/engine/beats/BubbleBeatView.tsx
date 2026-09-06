import { Panel } from '../Panel'
import type { BubbleBeat } from '../../types/story'

export function BubbleBeatView({ beat }: { beat: BubbleBeat }) {
  const isThought = beat.bubbleType === 'thought'

  return (
    <div className="mb-8">
      <Panel label={beat.panelLabel} />
      <div
        className={`mt-3 inline-block max-w-prose rounded-2xl px-4 py-3 text-sm ${
          isThought
            ? 'border border-dashed border-white/30 bg-white/5 italic text-slate-300'
            : 'bg-slate-100 text-slate-900'
        }`}
      >
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide opacity-60">
          {beat.speaker}
        </span>
        {beat.text}
      </div>
    </div>
  )
}
