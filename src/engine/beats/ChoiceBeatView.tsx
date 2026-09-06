import type { ChoiceBeat } from '../../types/story'

// A small floating device card (like an in-world handheld/tablet readout)
// instead of a full-width banner - stays compact so it never dominates the
// screen, especially on mobile.
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
    <div className="relative w-[min(88vw,320px)] overflow-hidden rounded-lg border border-amber-500/50 bg-[#0d0b08]/95 shadow-[0_0_20px_rgba(217,119,6,0.25)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)',
        }}
      />

      <div className="relative flex items-center gap-2 border-b border-amber-500/30 bg-black/40 px-3 py-1.5">
        <span className="h-1.5 w-1.5 flex-none animate-pulse rounded-full bg-amber-400" />
        <p className="font-display text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-amber-400/90">
          {beat.prompt}
        </p>
      </div>

      <div className="relative flex flex-col gap-1 p-2">
        {beat.options.map((option, i) => {
          const isSelected = selectedId === option.id
          const isDisabled = Boolean(selectedId) && !isSelected

          return (
            <button
              key={option.id}
              type="button"
              disabled={Boolean(selectedId)}
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
    </div>
  )
}
