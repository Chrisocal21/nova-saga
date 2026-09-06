import type { ChoiceBeat } from '../../types/story'

// Styled as an in-world dossier/decision panel — amber/rust accent (the
// same dusk-lighting color already used across the art), a caption-box
// style header strip, and the display font used for other UI labels —
// rather than a generic bordered web form.
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
    <div className="w-full overflow-hidden rounded-md border-2 border-amber-600/50 bg-[#14110c]/90 shadow-[0_0_28px_rgba(217,119,6,0.18)] backdrop-blur-sm">
      <div className="border-b-2 border-amber-600/40 bg-amber-500/10 px-5 py-2.5">
        <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.15em] text-amber-400">
          {beat.prompt}
        </p>
      </div>

      <div className="flex flex-col gap-2 p-4">
        {beat.options.map((option, i) => {
          const isSelected = selectedId === option.id
          const isDisabled = Boolean(selectedId) && !isSelected

          return (
            <button
              key={option.id}
              type="button"
              disabled={Boolean(selectedId)}
              onClick={() => onSelect(option.id)}
              className={`flex items-center gap-3 rounded border px-4 py-3 text-left text-sm font-medium transition-all ${
                isSelected
                  ? 'border-amber-400 bg-amber-500/15 text-amber-100 shadow-[0_0_16px_rgba(245,158,11,0.4)]'
                  : isDisabled
                    ? 'border-white/10 text-white/25'
                    : 'border-amber-600/30 text-stone-100 hover:border-amber-500/70 hover:bg-amber-500/10 hover:shadow-[0_0_16px_rgba(245,158,11,0.25)]'
              }`}
            >
              <span
                className={`flex h-6 w-6 flex-none items-center justify-center rounded border font-display text-xs font-bold ${
                  isSelected
                    ? 'border-amber-300 bg-amber-400/20 text-amber-100'
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
