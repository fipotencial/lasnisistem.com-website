type FlagProps = { size?: number }

export function FlagSI({ size = 20 }: FlagProps) {
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
      <img
        src="/images/flag-si.png"
        alt="Slovenian Flag"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  )
}

export function FlagGB({ size = 20 }: FlagProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', overflow: 'hidden' }}>
      <rect width="36" height="36" fill="#012169" rx="18" />
      <path d="M0 0 L36 36 M36 0 L0 36" stroke="#fff" strokeWidth="6" />
      <path d="M0 0 L36 36 M36 0 L0 36" stroke="#C8102E" strokeWidth="2" />
      <path d="M18 0 V36 M0 18 H36" stroke="#fff" strokeWidth="10" />
      <path d="M18 0 V36 M0 18 H36" stroke="#C8102E" strokeWidth="6" />
    </svg>
  )
}

export function FlagRU({ size = 20 }: FlagProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', overflow: 'hidden' }}>
      <rect width="36" height="36" rx="18" fill="#EEE" />
      <rect y="0" width="36" height="12" fill="#fff" />
      <rect y="12" width="36" height="12" fill="#0039A6" />
      <rect y="24" width="36" height="12" fill="#D52B1E" />
    </svg>
  )
}

export function FlagDE({ size = 20 }: FlagProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', overflow: 'hidden' }}>
      <rect width="36" height="36" rx="18" fill="#EEE" />
      <rect y="0" width="36" height="12" fill="#000" />
      <rect y="12" width="36" height="12" fill="#DD0000" />
      <rect y="24" width="36" height="12" fill="#FFCC00" />
    </svg>
  )
}

export const flagComponents: Record<string, React.FC<FlagProps>> = {
  sl: FlagSI,
  en: FlagGB,
  ru: FlagRU,
  de: FlagDE,
}
