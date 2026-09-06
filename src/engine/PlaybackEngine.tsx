import { useEffect, useState } from 'react'
import type { Level } from '../types/story'
import { ImpactBurst } from './ImpactBurst'
import { Panel } from './Panel'
import { CaptionBeatView } from './beats/CaptionBeatView'
import { ChoiceBeatView } from './beats/ChoiceBeatView'
import { SpeechBubble } from './beats/SpeechBubble'
import { TransitionMontage } from './beats/TransitionMontage'

const TRANSITION_HOLD_MS = 3000
const TEXT_REVEAL_DELAY_MS = 550

interface PlaybackEngineProps {
  level: Level
  onChoicesChange?: (choices: Record<string, string>) => void
}

function panelLabelFor(beat: Level['beats'][number]) {
  switch (beat.kind) {
    case 'caption':
    case 'bubble':
      return beat.panelLabel
    case 'choice':
      return beat.panelLabel ?? 'Decision point'
    case 'transition':
      return ''
  }
}

function panelSrcFor(beat: Level['beats'][number]) {
  switch (beat.kind) {
    case 'caption':
    case 'bubble':
    case 'choice':
      return beat.image
    case 'transition':
      return undefined
  }
}

export function PlaybackEngine({ level, onChoicesChange }: PlaybackEngineProps) {
  const [index, setIndex] = useState(0)
  const [choices, setChoices] = useState<Record<string, string>>({})
  const [revealedBeatId, setRevealedBeatId] = useState<string | null>(null)

  const beats = level.beats
  const beat = beats[index]
  const atEnd = index === beats.length - 1
  // Derived, not stored: comparing to the beat's own id (rather than a plain
  // boolean reset in an effect) means a new beat's text is correctly hidden
  // on its very first render instead of flashing at full opacity for a
  // frame before the reset effect catches up.
  const showText = revealedBeatId === beat.id

  const advance = () => {
    setIndex((i) => Math.min(i + 1, beats.length - 1))
  }

  // Let the art hold on screen a beat before the text/choices appear, so the
  // panel isn't upstaged by the caption the instant it arrives.
  useEffect(() => {
    if (beat.kind === 'transition') return

    const timer = setTimeout(() => setRevealedBeatId(beat.id), TEXT_REVEAL_DELAY_MS)
    return () => clearTimeout(timer)
  }, [beat])

  // Transition beats show every frame together as one comic-strip montage,
  // hold, then auto-advance (page-turn) to the next beat, where text resumes.
  useEffect(() => {
    if (beat.kind !== 'transition') return
    if (index >= beats.length - 1) return

    const timer = setTimeout(advance, beat.holdMs ?? TRANSITION_HOLD_MS)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beat, index])

  // Choice beats auto-advance shortly after the player picks an option.
  useEffect(() => {
    if (beat.kind !== 'choice') return
    if (!choices[beat.id]) return
    if (index >= beats.length - 1) return

    const timer = setTimeout(advance, 700)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beat, choices, index])

  const handleSelect = (beatId: string, optionId: string) => {
    setChoices((prev) => {
      if (prev[beatId]) return prev
      const next = { ...prev, [beatId]: optionId }
      onChoicesChange?.(next)
      return next
    })
  }

  const canAdvanceOnClick =
    !atEnd && showText && (beat.kind === 'caption' || beat.kind === 'bubble')

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-black">
      <p className="absolute left-4 top-4 z-10 text-xs uppercase tracking-widest text-purple-300/70">
        {level.series} — Issue {level.issueNumber}
      </p>

      {beat.kind === 'transition' ? (
        <TransitionMontage key={beat.id} beat={beat} />
      ) : (
        <Panel
          key={beat.id}
          src={panelSrcFor(beat)}
          seed={beat.id}
          label={panelLabelFor(beat)}
          className="flex-1"
        />
      )}

      {beat.kind === 'transition' && beat.impactText && (
        <ImpactBurst key={beat.id} text={beat.impactText} />
      )}

      {beat.kind === 'bubble' && (
        <div
          className={`transition-opacity duration-500 ${
            showText ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <SpeechBubble beat={beat} />
        </div>
      )}

      {beat.kind !== 'bubble' && (
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-6 pb-8 pt-20 transition-opacity duration-500 ${
            showText ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
            {beat.kind === 'caption' && <CaptionBeatView beat={beat} />}
            {beat.kind === 'choice' && (
              <ChoiceBeatView
                beat={beat}
                selectedId={choices[beat.id]}
                onSelect={(optionId) => handleSelect(beat.id, optionId)}
              />
            )}

            {atEnd && showText && (
              <p className="mt-4 text-xs uppercase tracking-widest text-white/30">
                End of issue
              </p>
            )}
          </div>
        </div>
      )}

      {canAdvanceOnClick && (
        <button
          type="button"
          onClick={advance}
          aria-label="Continue"
          className="absolute inset-y-0 right-0 z-20 flex w-1/2 cursor-pointer items-end justify-end p-6"
        >
          <span className="animate-pulse text-xs uppercase tracking-widest text-white/40">
            Tap to continue
          </span>
        </button>
      )}
    </div>
  )
}
