import { useState } from 'react'
import type { ChoiceBeat } from '../../types/story'

function ExpandGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}

function CollapseGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}

const ScanlineOverlay = () => (
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)',
    }}
  />
)

function OptionButton({
  option,
  index,
  isSelected,
  isDisabled,
  onSelect,
  large,
}: {
  option: ChoiceBeat['options'][number]
  index: number
  isSelected: boolean
  isDisabled: boolean
  onSelect: () => void
  large?: boolean
}) {
  return (
    <button
      type="button"
      disabled={isDisabled || isSelected}
      onClick={onSelect}
      className={`flex items-center gap-3 rounded border text-left font-medium transition-colors ${
        large ? 'px-6 py-5 text-base' : 'px-2.5 py-2 text-xs'
      } ${
        isSelected
          ? 'border-amber-300 bg-amber-500/90 text-black'
          : isDisabled
            ? 'border-white/10 text-white/25'
            : 'border-amber-600/25 text-stone-100 hover:border-amber-400 hover:bg-amber-500/10'
      }`}
    >
      <span
        className={`font-display font-bold ${large ? 'text-lg' : 'text-[10px]'} ${
          isSelected ? 'text-black' : 'text-amber-500'
        }`}
      >
        {index + 1}
      </span>
      <span className="flex-1 leading-snug">{option.label}</span>
    </button>
  )
}

// Docks in the bottom bar like narration does (not a floating pop-out), with
// an in-world device look (status strip, pulsing indicator, scanline
// texture). An expand button takes it fullscreen for easier reading/tapping.
export function ChoiceBeatView({
  beat,
  selectedId,
  onSelect,
}: {
  beat: ChoiceBeat
  selectedId: string | undefined
  onSelect: (optionId: string) => void
}) {
  const [expanded, setExpanded] = useState(false)

  const statusBar = (large?: boolean) => (
    <div className="flex items-center justify-between gap-2">
      <div className="flex min-w-0 items-center gap-2">
        <span
          className={`flex-none animate-pulse rounded-full bg-amber-400 ${large ? 'h-2.5 w-2.5' : 'h-1.5 w-1.5'}`}
        />
        <p
          className={`truncate font-display font-semibold uppercase tracking-[0.12em] text-amber-400/90 ${
            large ? 'text-lg' : 'text-[10px]'
          }`}
        >
          {beat.prompt}
        </p>
      </div>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        aria-label={expanded ? 'Collapse' : 'Expand'}
        className="flex-none text-amber-400/70 hover:text-amber-300"
      >
        {expanded ? (
          <CollapseGlyph className={large ? 'h-6 w-6' : 'h-4 w-4'} />
        ) : (
          <ExpandGlyph className={large ? 'h-6 w-6' : 'h-4 w-4'} />
        )}
      </button>
    </div>
  )

  if (expanded) {
    return (
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0b08] p-6">
        <ScanlineOverlay />
        <div className="relative flex w-full max-w-xl flex-col gap-6">
          {statusBar(true)}
          <div className="flex flex-col gap-3">
            {beat.options.map((option, i) => (
              <OptionButton
                key={option.id}
                option={option}
                index={i}
                isSelected={selectedId === option.id}
                isDisabled={Boolean(selectedId)}
                onSelect={() => onSelect(option.id)}
                large
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-x-0 bottom-0 z-10 border-t-2 border-amber-500/50 bg-[#0d0b08]/95 px-4 pb-4 pt-2 sm:px-6">
      <ScanlineOverlay />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-1.5">
        {statusBar()}
        <div className="flex flex-col gap-1">
          {beat.options.map((option, i) => (
            <OptionButton
              key={option.id}
              option={option}
              index={i}
              isSelected={selectedId === option.id}
              isDisabled={Boolean(selectedId)}
              onSelect={() => onSelect(option.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
