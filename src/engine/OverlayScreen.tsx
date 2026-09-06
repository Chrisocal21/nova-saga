import type { ReactNode } from 'react'

const PANEL_CLIP = 'polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)'

// Shared shell for full-screen HUD overlays (Branch/status, the Relic) so
// they read as one consistent system rather than ad-hoc modals.
export function OverlayScreen({
  title,
  onClose,
  children,
}: {
  title: string
  onClose: () => void
  children: ReactNode
}) {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm">
      <div
        className="w-full max-w-lg border-2 border-amber-600/60 bg-gradient-to-br from-[#1d1710] to-[#0a0806] shadow-[0_0_40px_rgba(217,119,6,0.2)]"
        style={{ clipPath: PANEL_CLIP }}
      >
        <div className="flex items-center justify-between border-b-2 border-amber-600/40 bg-black/30 px-6 py-3">
          <p className="font-display text-base font-bold uppercase tracking-[0.2em] text-amber-400">
            {title}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="font-display text-lg text-amber-400/70 hover:text-amber-300"
          >
            &times;
          </button>
        </div>

        <div className="px-6 py-8 text-center text-stone-300">{children}</div>
      </div>
    </div>
  )
}
