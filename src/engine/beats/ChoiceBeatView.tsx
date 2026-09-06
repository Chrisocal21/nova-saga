import type { ChoiceBeat } from '../../types/story'

const PANEL_CLIP = 'polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)'
const OPTION_CLIP = 'polygon(12px 0, 100% 0, 100% 100%, 0 100%, 0 12px)'

// Game-menu shape language (chamfered/angled corners, a tab-style number
// block, a hover indicator) rather than a rounded-rectangle web form
// wearing story colors.
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
    <div
      className="w-full border-2 border-amber-600/60 bg-gradient-to-br from-[#1d1710] to-[#0a0806] shadow-[0_0_28px_rgba(217,119,6,0.2)]"
      style={{ clipPath: PANEL_CLIP }}
    >
      <div className="border-b-2 border-amber-600/40 bg-black/30 px-6 py-3">
        <p className="text-center font-display text-base font-bold uppercase tracking-[0.2em] text-amber-400">
          {beat.prompt}
        </p>
      </div>

      <div className="flex flex-col gap-[3px] p-5">
        {beat.options.map((option, i) => {
          const isSelected = selectedId === option.id
          const isDisabled = Boolean(selectedId) && !isSelected

          return (
            <button
              key={option.id}
              type="button"
              disabled={Boolean(selectedId)}
              onClick={() => onSelect(option.id)}
              style={{ clipPath: OPTION_CLIP }}
              className={`group flex items-stretch border text-left transition-colors ${
                isSelected
                  ? 'border-amber-300 bg-amber-500/90 text-black shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                  : isDisabled
                    ? 'border-white/10 bg-black/20 text-white/25'
                    : 'border-amber-700/40 bg-black/40 text-stone-100 hover:border-amber-400 hover:bg-amber-500/10'
              }`}
            >
              <span
                className={`flex w-10 flex-none items-center justify-center font-display text-base font-bold ${
                  isSelected ? 'bg-black/15 text-black' : 'bg-amber-600/15 text-amber-400'
                }`}
              >
                {i + 1}
              </span>
              <span className="flex-1 px-4 py-3 font-display text-sm font-semibold uppercase tracking-wide">
                {option.label}
              </span>
              <span
                className={`flex w-8 flex-none items-center justify-center font-display text-lg transition-all ${
                  isSelected
                    ? 'text-black'
                    : 'text-amber-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1'
                }`}
              >
                &#9656;
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
