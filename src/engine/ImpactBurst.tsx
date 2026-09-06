function starPoints(cx: number, cy: number, spikes: number, outerR: number, innerR: number) {
  const points: string[] = []
  let rot = (Math.PI / 2) * 3
  const step = Math.PI / spikes

  for (let i = 0; i < spikes; i++) {
    points.push(`${cx + Math.cos(rot) * outerR},${cy + Math.sin(rot) * outerR}`)
    rot += step
    points.push(`${cx + Math.cos(rot) * innerR},${cy + Math.sin(rot) * innerR}`)
    rot += step
  }

  return points.join(' ')
}

const BURST_POINTS = starPoints(100, 100, 10, 95, 58)

// Classic comic action burst ("POW"-style) for punchy transition moments —
// a deliberate, bright break from the otherwise moody/muted art palette.
export function ImpactBurst({ text }: { text: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <div className="impact-pop relative h-48 w-48 sm:h-64 sm:w-64">
        <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full drop-shadow-[4px_4px_0_rgba(0,0,0,0.6)]">
          <polygon points={BURST_POINTS} fill="#facc15" stroke="black" strokeWidth={4} strokeLinejoin="round" />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center text-3xl font-black italic tracking-wider text-black sm:text-4xl"
          style={{ WebkitTextStroke: '1px black' }}
        >
          {text}
        </span>
      </div>
    </div>
  )
}
