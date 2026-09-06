import type { Beat, ChoiceBeat } from '../types/story'
import { ChoiceBeatView } from './beats/ChoiceBeatView'
import { BranchIcon } from './icons/BranchIcon'
import { RelicIcon } from './icons/RelicIcon'

const ScanlineOverlay = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)',
    }}
  />
)

// The Relic, as a persistent UI object: always holds quick access to the
// Branch and Relic (time travel) screens, and doubles as the holder for
// choice options when the current beat is a decision point — one artifact
// interface instead of separate scattered HUD pieces.
export function RelicPanel({
  beat,
  showChoice,
  selectedId,
  onSelect,
  onOpenBranch,
  onOpenRelic,
}: {
  beat: Beat
  showChoice: boolean
  selectedId: string | undefined
  onSelect: (optionId: string) => void
  onOpenBranch: () => void
  onOpenRelic: () => void
}) {
  const choiceBeat = beat.kind === 'choice' ? (beat as ChoiceBeat) : null

  return (
    <div className="relative border-t-2 border-amber-500/50 bg-[#0d0b08]/95 px-4 py-2 sm:px-6">
      <ScanlineOverlay />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <RelicIcon className="h-3.5 w-3.5 flex-none animate-pulse text-amber-400" />
            <p className="truncate font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-400/90">
              {choiceBeat ? choiceBeat.prompt : 'The Relic'}
            </p>
          </div>

          {!choiceBeat && (
            <div className="flex flex-none gap-2">
              <button
                type="button"
                onClick={onOpenBranch}
                aria-label="Branch and relationship status"
                className="text-amber-400/70 hover:text-amber-300"
              >
                <BranchIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onOpenRelic}
                aria-label="The Relic"
                className="text-amber-400/70 hover:text-amber-300"
              >
                <RelicIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {choiceBeat && showChoice && (
          <ChoiceBeatView beat={choiceBeat} selectedId={selectedId} onSelect={onSelect} />
        )}
      </div>
    </div>
  )
}
