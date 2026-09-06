import { Panel } from '../Panel'
import type { TransitionBeat } from '../../types/story'

export function TransitionBeatView({
  beat,
  frameIndex,
}: {
  beat: TransitionBeat
  frameIndex: number
}) {
  const label = beat.panelLabels[Math.min(frameIndex, beat.panelLabels.length - 1)]

  return (
    <div className="mb-8">
      <Panel key={frameIndex} label={label} />
    </div>
  )
}
