interface SectionLabelProps {
  label: string
  light?: boolean
  className?: string
}

export function SectionLabel({ label, light = false, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`text-xs tracking-[0.2em] uppercase font-medium mb-8 ${
        light ? 'text-[#C8A46A]' : 'text-[#8A6C3A]'
      } ${className}`}
      style={{ fontFamily: 'var(--font-hanken)' }}
    >
      {label}
    </p>
  )
}
