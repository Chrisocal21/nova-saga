import type { ReactNode } from 'react'

const CLIP = 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'

export function HudButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{ clipPath: CLIP }}
      className="flex h-9 w-9 items-center justify-center border border-amber-500/40 bg-black/60 text-amber-400/80 transition-colors hover:border-amber-400 hover:text-amber-300"
    >
      {children}
    </button>
  )
}
