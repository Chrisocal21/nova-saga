interface PanelProps {
  label: string
  className?: string
}

// Stand-in for real comic-panel art. Replaced by rendered art once the
// pipeline exists — see "Art Direction" in NOVA_CLAUDE_GUIDE.md.
export function Panel({ label, className = '' }: PanelProps) {
  return (
    <div
      className={`overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black ${className}`}
    >
      <div className="flex h-48 items-center justify-center p-4 text-center text-xs italic text-white/40 sm:h-64">
        [{label}]
      </div>
    </div>
  )
}
