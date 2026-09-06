interface PanelProps {
  label: string
  className?: string
}

// Stand-in for real comic-panel art. Replaced by rendered art once the
// pipeline exists — see "Art Direction" in NOVA_CLAUDE_GUIDE.md.
export function Panel({ label, className = '' }: PanelProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 text-center text-sm italic text-white/40 ${className}`}
    >
      [{label}]
    </div>
  )
}
