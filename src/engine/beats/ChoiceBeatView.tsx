import type { ChoiceBeat } from '../../types/story'

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
    <div className="mb-8">
      <p className="mb-3 text-sm font-medium text-slate-200">{beat.prompt}</p>
      <div className="flex flex-col gap-2">
        {beat.options.map((option) => {
          const isSelected = selectedId === option.id
          const isDisabled = Boolean(selectedId) && !isSelected

          return (
            <button
              key={option.id}
              type="button"
              disabled={Boolean(selectedId)}
              onClick={() => onSelect(option.id)}
              className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                isSelected
                  ? 'border-purple-400 bg-purple-400/10 text-purple-200'
                  : isDisabled
                    ? 'border-white/10 text-white/30'
                    : 'border-white/20 text-slate-100 hover:border-purple-400/60 hover:bg-white/5'
              }`}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
