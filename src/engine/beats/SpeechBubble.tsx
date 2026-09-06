import type { BubbleBeat } from '../../types/story'

const PAPER = '#e9e0c9'

// Renders dialogue as an actual comic bubble floating over the art near the
// speaker, instead of text in the bottom caption bar — narration and
// dialogue are meant to read as two different systems, not two colors of
// the same box. Speech and thought share one consistent box (same shape,
// border weight, shadow, typography) and differ only in the two ways real
// comics differ them: solid vs. dashed border, and tail shape (pointed vs.
// trailing circles). Fill is an aged-paper tone and the speaker label uses
// the story's own amber/rust accent, rather than a generic white chat box.
export function SpeechBubble({ beat }: { beat: BubbleBeat }) {
  const isThought = beat.bubbleType === 'thought'
  const side = beat.position ?? 'right'
  const tailInward = side === 'right' ? 'left-10' : 'right-10'

  return (
    <div
      className={`absolute top-[10%] z-10 max-w-[70%] sm:max-w-xs ${
        side === 'right' ? 'right-[6%]' : 'left-[6%]'
      }`}
    >
      <div
        className={`relative rounded-2xl border-[3px] px-4 py-3 text-stone-900 shadow-[3px_3px_0_rgba(0,0,0,0.5)] ${
          isThought ? 'border-dashed border-black/70' : 'border-black'
        }`}
        style={{ background: PAPER }}
      >
        <span className="mb-1 block font-display text-[11px] font-semibold uppercase tracking-wider text-amber-800">
          {beat.speaker}
        </span>
        <p className={`text-sm font-medium leading-snug ${isThought ? 'italic' : ''}`}>
          {beat.text}
        </p>

        {isThought ? (
          <div className={`absolute -bottom-6 ${tailInward} flex flex-col items-center gap-1`}>
            <span
              className="h-3 w-3 rounded-full border-2 border-dashed border-black/70"
              style={{ background: PAPER }}
            />
            <span
              className="h-2 w-2 rounded-full border-2 border-dashed border-black/70"
              style={{ background: PAPER }}
            />
          </div>
        ) : (
          <>
            <span
              className={`absolute -bottom-[13px] ${tailInward} h-0 w-0 border-x-[11px] border-t-[15px] border-x-transparent border-t-black`}
            />
            <span
              className={`absolute -bottom-[9px] ${side === 'right' ? 'left-[42px]' : 'right-[42px]'} h-0 w-0 border-x-[8px] border-t-[12px] border-x-transparent`}
              style={{ borderTopColor: PAPER }}
            />
          </>
        )}
      </div>
    </div>
  )
}
