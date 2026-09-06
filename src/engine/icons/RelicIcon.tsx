export function RelicIcon({ className }: { className?: string }) {
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
      <path d="M6 2h12" />
      <path d="M6 22h12" />
      <path d="M6 2c0 5 4 6 6 8-2 2-6 3-6 8" />
      <path d="M18 2c0 5-4 6-6 8 2 2 6 3 6 8" />
    </svg>
  )
}
