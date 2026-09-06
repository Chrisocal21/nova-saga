import { useEffect, useState } from 'react'
import type { Level } from '../types/story'
import { ImpactBurst } from './ImpactBurst'
import { Panel } from './Panel'
import { CaptionBeatView } from './beats/CaptionBeatView'
import { ChoiceBeatView } from './beats/ChoiceBeatView'
import { SpeechBubble } from './beats/SpeechBubble'

const TRANSITION_FRAME_MS = 700
const TEXT_REVEAL_DELAY_MS = 550

interface PlaybackEngineProps {
  level: Level
  onChoicesChange?: (choices: Record<string, string>) => void
}

function panelLabelFor(beat: Level['beats'][number], transitionFrame: number) {
  switch (beat.kind) {
    case 'caption':
    case 'bubble':
      return beat.panelLabel
    case 'transition':
      return beat.panelLabels[Math.min(transitionFrame, beat.panelLabels.length - 1)]
    case 'choice':
      return beat.panelLabel ?? 'Decision point'
  }
}

function panelSrcFor(beat: Level['beats'][number], transitionFrame: number) {
  switch (beat.kind) {
    case 'caption':
    case 'bubble':
    case 'choice':
      return beat.image
    case 'transition':
      return beat.images?.[Math.min(transitionFrame, beat.images.length - 1)]
  }
}

export function PlaybackEngine({ level, onChoicesChange }: PlaybackEngineProps) {
  const [index, setIndex] = useState(0)
  const [choices, setChoices] = useState<Record<string, string>>({})
  const [transitionFrame, setTransitionFrame] = useState(0)
  const [showText, setShowText] = useState(false)

  const beats = level.beats
  const beat = beats[index]
  const atEnd = index === beats.length - 1

  const advance = () => {
    setIndex((i) => Math.min(i + 1, beats.length - 1))
    setTransitionFrame(0)
  }

  // Let the art hold on screen a beat before the text/choices appear, so the
  // panel isn't upstaged by the caption the instant it arrives.
  useEffect(() => {
    setShowText(false)
    if (beat.kind === 'transition') return

    const timer = setTimeout(() => setShowText(true), TEXT_REVEAL_DELAY_MS)
    return () => clearTimeout(timer)
  }, [beat])

  // Transition beats auto-play their frames, then auto-advance to the next beat.
  useEffect(() => {
    if (beat.kind !== 'transition') return

    const totalFrames = beat.panelLabels.length
    const holdMs = beat.holdMs ?? TRANSITION_FRAME_MS

    if (transitionFrame < totalFrames - 1) {
      const timer = setTimeout(() => setTransitionFrame((f) => f + 1), holdMs)
      return () => clearTimeout(timer)
    }

    if (index < beats.length - 1) {
      const timer = setTimeout(advance, holdMs)
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beat, transitionFrame, index])

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

      <Panel
        key={`${beat.id}-${transitionFrame}`}
        src={panelSrcFor(beat, transitionFrame)}
        seed={`${beat.id}-${transitionFrame}`}
        label={panelLabelFor(beat, transitionFrame)}
        className="flex-1"
      />

      {beat.kind === 'transition' &&
        beat.impactText &&
        transitionFrame === beat.panelLabels.length - 1 && (
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
