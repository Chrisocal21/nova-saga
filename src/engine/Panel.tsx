interface PanelProps {
  label: string
  src?: string
  seed?: string
  className?: string
}

// Renders real art when a `src` is provided. Falls back to a seeded
// placeholder photo (tinted toward the documented moody/muted palette)
// for beats that don't have art yet — see "Art Direction" in
// NOVA_CLAUDE_GUIDE.md.
export function Panel({ label, src, seed, className = '' }: PanelProps) {
  const mockSrc = `https://picsum.photos/seed/${encodeURIComponent(seed ?? label)}/1600/1200`

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      <img
        src={src ?? mockSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={src ? undefined : { filter: 'grayscale(0.55) brightness(0.6) saturate(0.75) contrast(1.1)' }}
      />
      {!src && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30" />
          <span className="absolute bottom-2 left-2 max-w-[85%] rounded bg-black/60 px-2 py-1 text-[10px] italic leading-snug text-white/60">
            [{label}]
          </span>
        </>
      )}
    </div>
  )
}
