import { Panel } from '../Panel'
import type { TransitionBeat } from '../../types/story'

// Shows every frame of the transition together as a small comic strip
// (like an actual multi-panel comic page) instead of cycling through them
// one full-screen frame at a time. The engine holds on this, then page-
// turns to the next beat where text/dialogue resumes.
export function TransitionMontage({ beat }: { beat: TransitionBeat }) {
  return (
    <div className="flex h-full w-full gap-1 bg-black">
      {beat.panelLabels.map((label, i) => (
        <Panel
          key={i}
          label={label}
          src={beat.images?.[i]}
          seed={`${beat.id}-${i}`}
          className="flex-1 border border-white/10"
        />
      ))}
    </div>
  )
}
