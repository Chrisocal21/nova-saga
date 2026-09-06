interface PanelProps {
  label: string
  seed?: string
  className?: string
}

// Stand-in for real comic-panel art: a seeded placeholder photo, tinted
// toward the documented moody/muted palette, with the intended scene
// description overlaid so it reads clearly as mock art. Replaced by
// rendered art once the pipeline exists — see "Art Direction" in
// NOVA_CLAUDE_GUIDE.md.
export function Panel({ label, seed, className = '' }: PanelProps) {
  const imgSeed = encodeURIComponent(seed ?? label)

  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      <img
        src={`https://picsum.photos/seed/${imgSeed}/1600/1200`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: 'grayscale(0.55) brightness(0.6) saturate(0.75) contrast(1.1)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/30" />
      <span className="absolute bottom-2 left-2 max-w-[85%] rounded bg-black/60 px-2 py-1 text-[10px] italic leading-snug text-white/60">
        [{label}]
      </span>
    </div>
  )
}
