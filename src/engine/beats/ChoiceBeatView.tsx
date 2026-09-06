import type { ChoiceBeat } from '../../types/story'

// Just the prompt + options content — the surrounding chrome (status
// strip, border, scanline texture) lives in RelicPanel, which this docks
// into as one of its two modes.
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
    <div className="flex flex-col gap-1">
      {beat.options.map((option, i) => {
        const isSelected = selectedId === option.id
        const isDisabled = Boolean(selectedId) && !isSelected

        return (
          <button
            key={option.id}
            type="button"
            disabled={isDisabled || isSelected}
            onClick={() => onSelect(option.id)}
            className={`flex items-center gap-2 rounded border px-2.5 py-2 text-left text-xs font-medium transition-colors ${
              isSelected
                ? 'border-amber-300 bg-amber-500/90 text-black'
                : isDisabled
                  ? 'border-white/10 text-white/25'
                  : 'border-amber-600/25 text-stone-100 hover:border-amber-400 hover:bg-amber-500/10'
            }`}
          >
            <span
              className={`font-display text-[10px] font-bold ${isSelected ? 'text-black' : 'text-amber-500'}`}
            >
              {i + 1}
            </span>
            <span className="flex-1 leading-snug">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
