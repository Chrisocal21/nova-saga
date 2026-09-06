import { useEffect, useRef, useState } from 'react'
import type { Level } from '../types/story'
import { BubbleBeatView } from './beats/BubbleBeatView'
import { CaptionBeatView } from './beats/CaptionBeatView'
import { ChoiceBeatView } from './beats/ChoiceBeatView'
import { TransitionBeatView } from './beats/TransitionBeatView'

const TRANSITION_FRAME_MS = 700

interface PlaybackEngineProps {
  level: Level
  onChoicesChange?: (choices: Record<string, string>) => void
}

export function PlaybackEngine({ level, onChoicesChange }: PlaybackEngineProps) {
  const [revealed, setRevealed] = useState(1)
  const [choices, setChoices] = useState<Record<string, string>>({})
  const [transitionFrame, setTransitionFrame] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)

  const beats = level.beats
  const lastBeat = beats[revealed - 1]
  const atEnd = revealed >= beats.length

  const advance = () => {
    if (atEnd) return
    setRevealed((r) => Math.min(r + 1, beats.length))
    setTransitionFrame(0)
  }

  // Transition beats auto-play their frames, then auto-advance.
  useEffect(() => {
    if (lastBeat?.kind !== 'transition') return

    const totalFrames = lastBeat.panelLabels.length
    const holdMs = lastBeat.holdMs ?? TRANSITION_FRAME_MS

    if (transitionFrame < totalFrames - 1) {
      const timer = setTimeout(() => setTransitionFrame((f) => f + 1), holdMs)
      return () => clearTimeout(timer)
    }

    const timer = setTimeout(advance, holdMs)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastBeat, transitionFrame])

  // Choice beats auto-advance shortly after the player picks an option.
  useEffect(() => {
    if (lastBeat?.kind !== 'choice') return
    if (!choices[lastBeat.id]) return

    const timer = setTimeout(advance, 700)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastBeat, choices])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [revealed, transitionFrame])

  const handleSelect = (beatId: string, optionId: string) => {
    setChoices((prev) => {
      if (prev[beatId]) return prev
      const next = { ...prev, [beatId]: optionId }
      onChoicesChange?.(next)
      return next
    })
  }

  const canAdvanceOnClick =
    !atEnd && (lastBeat?.kind === 'caption' || lastBeat?.kind === 'bubble')

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-purple-300/70">
          {level.series} — Issue {level.issueNumber}
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-white">{level.title}</h1>
      </header>

      {beats.slice(0, revealed).map((beat, i) => {
        switch (beat.kind) {
          case 'caption':
            return <CaptionBeatView key={beat.id} beat={beat} />
          case 'bubble':
            return <BubbleBeatView key={beat.id} beat={beat} />
          case 'transition':
            return (
              <TransitionBeatView
                key={beat.id}
                beat={beat}
                frameIndex={i === revealed - 1 ? transitionFrame : beat.panelLabels.length - 1}
              />
            )
          case 'choice':
            return (
              <ChoiceBeatView
                key={beat.id}
                beat={beat}
                selectedId={choices[beat.id]}
                onSelect={(optionId) => handleSelect(beat.id, optionId)}
              />
            )
          default:
            return null
        }
      })}

      <div
        role={canAdvanceOnClick ? 'button' : undefined}
        tabIndex={canAdvanceOnClick ? 0 : undefined}
        onClick={canAdvanceOnClick ? advance : undefined}
        onKeyDown={(e) => {
          if (canAdvanceOnClick && (e.key === 'Enter' || e.key === ' ')) advance()
        }}
        className={canAdvanceOnClick ? 'cursor-pointer select-none' : undefined}
      >
        {canAdvanceOnClick && (
          <p className="animate-pulse text-center text-xs uppercase tracking-widest text-white/30">
            Tap to continue
          </p>
        )}
        {atEnd && (
          <p className="text-center text-xs uppercase tracking-widest text-white/30">
            End of issue
          </p>
        )}
      </div>

      <div ref={bottomRef} />
    </div>
  )
}
