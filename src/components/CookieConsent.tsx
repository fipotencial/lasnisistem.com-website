'use client'
import { useState, useEffect } from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function CookieConsent({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent')
    if (stored !== null) setConsent(stored === 'true')
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'true')
    setConsent(true)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'false')
    setConsent(false)
  }

  return (
    <>
      {consent === true && <GoogleAnalytics gaId={gaId} />}
      {consent === null && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#1A1A1A',
            color: '#F5F2ED',
            padding: '1rem 2rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 9999,
            flexWrap: 'wrap',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.875rem', maxWidth: '75%' }}>
            Uporabljamo piškotke za analitiko in izboljšanje izkušnje. Z nadaljevanjem se strinjate z našo politiko zasebnosti.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={accept}
              style={{
                background: '#C1A452',
                color: '#1A1A1A',
                border: 'none',
                padding: '0.5rem 1.25rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Strinjam se
            </button>
            <button
              onClick={decline}
              style={{
                background: 'transparent',
                color: '#F5F2ED',
                border: '1px solid #F5F2ED',
                padding: '0.5rem 1.25rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Zavrni
            </button>
          </div>
        </div>
      )}
    </>
  )
}
