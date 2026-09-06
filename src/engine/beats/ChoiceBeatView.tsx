import type { ChoiceBeat } from '../../types/story'

// Styled as an in-game decision panel (numbered options, HUD-style glow
// border) rather than a plain web form.
export function ChoiceBeatView({
  beat,
  selectedId,
  onSelect,
}: {
  beat: ChoiceBeat
  selectedId: string | undefined
  onSelect: (optionId: string) => void
}) {
  return (
    <div className="w-full rounded-lg border-2 border-purple-400/50 bg-black/70 px-5 py-4 shadow-[0_0_28px_rgba(192,132,252,0.18)] backdrop-blur-sm">
      <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-purple-200">
        {beat.prompt}
      </p>
      <div className="flex flex-col gap-2">
        {beat.options.map((option, i) => {
          const isSelected = selectedId === option.id
          const isDisabled = Boolean(selectedId) && !isSelected

          return (
            <button
              key={option.id}
              type="button"
              disabled={Boolean(selectedId)}
              onClick={() => onSelect(option.id)}
              className={`flex items-center gap-3 rounded-md border px-4 py-3 text-left text-sm font-medium transition-all ${
                isSelected
                  ? 'border-purple-300 bg-purple-400/20 text-purple-100 shadow-[0_0_18px_rgba(192,132,252,0.45)]'
                  : isDisabled
                    ? 'border-white/10 text-white/25'
                    : 'border-purple-400/30 text-slate-100 hover:border-purple-300 hover:bg-purple-400/10 hover:shadow-[0_0_18px_rgba(192,132,252,0.25)]'
              }`}
            >
              <span
                className={`flex h-6 w-6 flex-none items-center justify-center rounded border text-xs font-bold ${
                  isSelected
                    ? 'border-purple-300 bg-purple-300/20 text-purple-100'
                    : 'border-white/25 text-white/50'
                }`}
              >
                {i + 1}
              </span>
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
