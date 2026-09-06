import type { BubbleBeat } from '../../types/story'

export function BubbleBeatView({ beat }: { beat: BubbleBeat }) {
  const isThought = beat.bubbleType === 'thought'

  return (
    <div
      className={`inline-block max-w-prose rounded-2xl px-4 py-3 text-base ${
        isThought
          ? 'border border-dashed border-white/30 bg-white/10 italic text-slate-200'
          : 'bg-slate-100 text-slate-900'
      }`}
    >
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide opacity-60">
        {beat.speaker}
      </span>
      {beat.text}
    </div>
  )
}
