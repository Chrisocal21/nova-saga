import type { BubbleBeat } from '../../types/story'

// Renders dialogue as an actual comic bubble floating over the art near the
// speaker, instead of text in the bottom caption bar — narration and
// dialogue are meant to read as two different systems, not two colors of
// the same box. Speech = pointed tail; thought = trailing circles.
export function SpeechBubble({ beat }: { beat: BubbleBeat }) {
  const isThought = beat.bubbleType === 'thought'
  const side = beat.position ?? 'right'
  const tailInward = side === 'right' ? 'left-10' : 'right-10'

  return (
    <div
      className={`absolute top-[8%] z-10 max-w-[70%] sm:max-w-xs ${
        side === 'right' ? 'right-[6%]' : 'left-[6%]'
      }`}
    >
      <div
        className={`relative border-[3px] border-black bg-white px-4 py-3 text-slate-900 shadow-[3px_3px_0_rgba(0,0,0,0.5)] ${
          isThought ? 'rounded-[2.5rem]' : 'rounded-2xl'
        }`}
      >
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wide text-slate-500">
          {beat.speaker}
        </span>
        <p className={`text-sm font-medium leading-snug ${isThought ? 'italic' : ''}`}>
          {beat.text}
        </p>

        {isThought ? (
          <div className={`absolute -bottom-6 ${tailInward} flex flex-col items-center gap-1`}>
            <span className="h-3 w-3 rounded-full border-2 border-black bg-white" />
            <span className="h-2 w-2 rounded-full border-2 border-black bg-white" />
          </div>
        ) : (
          <>
            <span
              className={`absolute -bottom-[13px] ${tailInward} h-0 w-0 border-x-[11px] border-t-[15px] border-x-transparent border-t-black`}
            />
            <span
              className={`absolute -bottom-[9px] ${side === 'right' ? 'left-[42px]' : 'right-[42px]'} h-0 w-0 border-x-[8px] border-t-[12px] border-x-transparent border-t-white`}
            />
          </>
        )}
      </div>
    </div>
  )
}
